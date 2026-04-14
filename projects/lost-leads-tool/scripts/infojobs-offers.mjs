#!/usr/bin/env node

const DEFAULT_API_BASE_URL = 'https://api.infojobs.net/api/9';
const PUBLIC_PAGE_HEADERS = {
  'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
  'accept-language': 'es-ES,es;q=0.9,en;q=0.8',
  'sec-fetch-dest': 'document',
  'sec-fetch-mode': 'navigate',
  'sec-fetch-site': 'none',
  'sec-fetch-user': '?1',
  'upgrade-insecure-requests': '1',
  'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36',
};

const PUBLIC_BLOCK_MARKERS = [
  'distil/distil/captcha.xhtml',
  'captcha-box',
  'geetest_holder',
  'geetest_radar_btn',
  '¿Eres humano o un robot?',
];

function isMainModule() {
  return process.argv[1] === new URL(import.meta.url).pathname;
}

function getMessage(error) {
  return error instanceof Error ? error.message : String(error);
}

function toScalar(value) {
  if (value == null) return null;
  if (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') {
    return value;
  }

  return value.value ?? value.name ?? value.key ?? value.id ?? null;
}

function toNonEmptyString(value) {
  if (value == null) return null;
  const stringValue = String(value).trim();
  return stringValue === '' ? null : stringValue;
}

function appendQueryParam(searchParams, key, value) {
  const normalized = toNonEmptyString(value);
  if (normalized) {
    searchParams.set(key, normalized);
  }
}

export function createInfoJobsAuthHeader(clientId = process.env.INFOJOBS_CLIENT_ID, clientSecret = process.env.INFOJOBS_CLIENT_SECRET) {
  if (!clientId || !clientSecret) {
    throw new Error('INFOJOBS_CLIENT_ID and INFOJOBS_CLIENT_SECRET are required to call the InfoJobs API.');
  }

  return `Basic ${Buffer.from(`${clientId}:${clientSecret}`).toString('base64')}`;
}

export function detectPublicPageBlock(html) {
  const source = typeof html === 'string' ? html : '';
  const requestIdMatch = source.match(/Request ID:\s*([^<\s]+)/i);
  const blocked = PUBLIC_BLOCK_MARKERS.some(marker => source.includes(marker));

  return {
    blocked,
    blockType: blocked ? 'captcha' : null,
    blockProvider: blocked ? 'distil-geetest' : null,
    requestId: requestIdMatch?.[1] ?? null,
  };
}

export async function inspectPublicInfoJobsPage(url, options = {}) {
  const fetchImpl = options.fetchImpl ?? fetch;
  const response = await fetchImpl(url, {
    headers: PUBLIC_PAGE_HEADERS,
    redirect: 'follow',
  });

  const html = await response.text();
  const diagnosis = detectPublicPageBlock(html);

  return {
    url,
    resolvedUrl: response.url || url,
    httpStatus: response.status,
    contentType: response.headers.get('content-type'),
    ...diagnosis,
  };
}

export function normalizeOfferSearchResponse(payload, filters = {}) {
  const offers = Array.isArray(payload?.offers)
    ? payload.offers.map(offer => ({
        id: offer.id ?? null,
        title: offer.title ?? null,
        link: offer.link ?? null,
        city: offer.city ?? null,
        province: toScalar(offer.province),
        category: toScalar(offer.category),
        subcategory: toScalar(offer.subcategory),
        company: offer.author?.name ?? toScalar(offer.author),
        teleworking: toScalar(offer.teleworking),
        published: offer.published ?? null,
      }))
    : [];

  return {
    source: 'infojobs-api',
    query: filters,
    totalResults: payload?.totalResults ?? offers.length,
    currentResults: payload?.currentResults ?? offers.length,
    totalPages: payload?.totalPages ?? 1,
    currentPage: payload?.currentPage ?? Number.parseInt(filters.page || '1', 10),
    pageSize: payload?.pageSize ?? offers.length,
    offers,
  };
}

export async function searchInfoJobsOffers(filters = {}, options = {}) {
  const fetchImpl = options.fetchImpl ?? fetch;
  const authHeader = createInfoJobsAuthHeader(options.clientId, options.clientSecret);
  const apiBaseUrl = options.apiBaseUrl ?? DEFAULT_API_BASE_URL;

  const url = new URL(`${apiBaseUrl}/offer`);
  appendQueryParam(url.searchParams, 'q', filters.q);
  appendQueryParam(url.searchParams, 'province', filters.province);
  appendQueryParam(url.searchParams, 'category', filters.category);
  appendQueryParam(url.searchParams, 'subcategory', filters.subcategory);
  appendQueryParam(url.searchParams, 'city', filters.city);
  appendQueryParam(url.searchParams, 'country', filters.country);
  appendQueryParam(url.searchParams, 'salaryMin', filters.salaryMin);
  appendQueryParam(url.searchParams, 'salaryMax', filters.salaryMax);
  appendQueryParam(url.searchParams, 'study', filters.study);
  appendQueryParam(url.searchParams, 'contractType', filters.contractType);
  appendQueryParam(url.searchParams, 'experienceMin', filters.experienceMin);
  appendQueryParam(url.searchParams, 'page', filters.page);
  appendQueryParam(url.searchParams, 'maxResults', filters.maxResults);
  appendQueryParam(url.searchParams, 'teleworking', filters.teleworking);

  const response = await fetchImpl(url, {
    headers: {
      'Accept': 'application/json',
      'Authorization': authHeader,
    },
  });

  if (!response.ok) {
    const body = await response.text();
    throw new Error(`InfoJobs API request failed with ${response.status}: ${body}`);
  }

  const payload = await response.json();
  return normalizeOfferSearchResponse(payload, filters);
}

function parseArgs(argv) {
  const parsed = {};

  for (let index = 0; index < argv.length; index += 1) {
    const token = argv[index];
    if (!token.startsWith('--')) {
      throw new Error(`Unexpected argument: ${token}`);
    }

    const rawKey = token.slice(2);
    const value = argv[index + 1];
    if (value == null || value.startsWith('--')) {
      throw new Error(`Missing value for --${rawKey}`);
    }

    parsed[rawKey] = value;
    index += 1;
  }

  return parsed;
}

function mapCliArgsToFilters(args) {
  return {
    q: args.query ?? args.q,
    province: args.province,
    category: args.category,
    subcategory: args.subcategory,
    city: args.city,
    country: args.country,
    salaryMin: args['salary-min'],
    salaryMax: args['salary-max'],
    study: args.study,
    contractType: args['contract-type'],
    experienceMin: args['experience-min'],
    page: args.page,
    maxResults: args['max-results'] ?? args.maxResults,
    teleworking: args.teleworking,
  };
}

function writeJson(stream, value) {
  stream.write(`${JSON.stringify(value, null, 2)}\n`);
}

function getUsage() {
  return [
    'Usage:',
    '  node scripts/infojobs-offers.mjs detect <public-infojobs-url>',
    '  INFOJOBS_CLIENT_ID=... INFOJOBS_CLIENT_SECRET=... node scripts/infojobs-offers.mjs search --query "editor video" [--max-results 10] [--page 1]',
    '',
    'Status:',
    '  As of 2026-04-10 the board confirmed InfoJobs Developer API access is disabled for our use case.',
    '  detect is operational today. search is kept as an experimental client in case InfoJobs reopens API access.',
    '',
    'Examples:',
    '  node scripts/infojobs-offers.mjs detect https://www.infojobs.net/ofertas-trabajo/creacion-contenidos',
    '  INFOJOBS_CLIENT_ID=... INFOJOBS_CLIENT_SECRET=... node scripts/infojobs-offers.mjs search --query "creacion de contenidos" --max-results 20',
  ].join('\n');
}

export async function run(argv = process.argv.slice(2), options = {}) {
  const stdout = options.stdout ?? process.stdout;
  const stderr = options.stderr ?? process.stderr;
  const fetchImpl = options.fetchImpl ?? fetch;
  const env = options.env ?? process.env;

  try {
    const [command, ...rest] = argv;

    if (!command || command === '--help' || command === 'help') {
      stderr.write(`${getUsage()}\n`);
      return command ? 0 : 1;
    }

    if (command === 'detect') {
      const url = rest[0];
      if (!url) {
        throw new Error('detect requires a public InfoJobs URL.');
      }

      const diagnosis = await inspectPublicInfoJobsPage(url, { fetchImpl });
      writeJson(stdout, diagnosis);
      return 0;
    }

    if (command === 'search') {
      const args = parseArgs(rest);
      const filters = mapCliArgsToFilters(args);
      const result = await searchInfoJobsOffers(filters, {
        fetchImpl,
        clientId: env.INFOJOBS_CLIENT_ID,
        clientSecret: env.INFOJOBS_CLIENT_SECRET,
      });
      writeJson(stdout, result);
      return 0;
    }

    throw new Error(`Unknown command: ${command}`);
  } catch (error) {
    stderr.write(`${getMessage(error)}\n`);
    return 1;
  }
}

if (isMainModule()) {
  const exitCode = await run();
  process.exitCode = exitCode;
}
