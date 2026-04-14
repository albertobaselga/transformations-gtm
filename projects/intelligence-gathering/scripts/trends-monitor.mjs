#!/usr/bin/env node

import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const DEFAULT_TRENDS_CONFIG_PATH = new URL('../sources/trends/trends-config.md', import.meta.url);
const DEFAULT_TRENDS_SNAPSHOT_DIR_PATH = fileURLToPath(new URL('../sources/trends/snapshots/', import.meta.url));
const DEFAULT_HEARTBEAT_TIMEZONE = 'Europe/Madrid';
const DEFAULT_GOOGLE_GEO = 'ES';
const DEFAULT_GOOGLE_TIME_RANGE = 'today 12-m';
const DEFAULT_REDDIT_TIME = 'week';
const DEFAULT_REDDIT_LIMIT = 5;
const GOOGLE_TRENDS_ROOT_URL = 'https://trends.google.com/';
const GOOGLE_TRENDS_EXPLORE_REFERER = 'https://trends.google.com/trends/explore';
const BROWSER_HEADERS = {
  accept: 'application/json,text/plain,*/*',
  'accept-language': 'es-ES,es;q=0.9,en;q=0.8',
  'user-agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36',
};
const REDDIT_HEADERS = {
  accept: 'application/json',
  'accept-language': 'es-ES,es;q=0.9,en;q=0.8',
  'user-agent': 'Mozilla/5.0 (X11; Linux x86_64; rv:124.0) Gecko/20100101 Firefox/124.0',
};

function isMainModule() {
  return process.argv[1] === new URL(import.meta.url).pathname;
}

function getMessage(error) {
  return error instanceof Error ? error.message : String(error);
}

function toNonEmptyString(value) {
  if (value == null) return null;
  const stringValue = String(value).trim();
  return stringValue === '' ? null : stringValue;
}

function toPositiveInteger(value, fallback) {
  const normalized = toNonEmptyString(value);
  if (!normalized) return fallback;
  const parsed = Number.parseInt(normalized, 10);
  if (Number.isNaN(parsed) || parsed < 1) {
    throw new Error(`Expected a positive integer, received: ${value}`);
  }

  return parsed;
}

function appendQueryParam(searchParams, key, value) {
  const normalized = toNonEmptyString(value);
  if (normalized) {
    searchParams.set(key, normalized);
  }
}

function toDateStamp(value) {
  const normalized = toNonEmptyString(value);
  if (!normalized) return null;
  if (!/^\d{4}-\d{2}-\d{2}$/.test(normalized)) {
    throw new Error(`Expected a date in YYYY-MM-DD format, received: ${value}`);
  }

  return normalized;
}

function formatDateStamp(date, timeZone = DEFAULT_HEARTBEAT_TIMEZONE) {
  return new Intl.DateTimeFormat('sv-SE', {
    timeZone,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(date);
}

function resolveSnapshotDate(snapshot, options = {}) {
  const explicitDate = toDateStamp(options.date);
  if (explicitDate) {
    return explicitDate;
  }

  const generatedDate = toDateStamp(toNonEmptyString(snapshot?.generatedAt)?.slice(0, 10));
  if (generatedDate) {
    return generatedDate;
  }

  return formatDateStamp(options.now ?? new Date(), options.timeZone);
}

function buildCookieHeader(cookieValues) {
  return cookieValues
    .map(value => value.split(';', 1)[0]?.trim())
    .filter(Boolean)
    .join('; ');
}

function getSetCookieHeaders(headers) {
  if (!headers) return [];
  if (typeof headers.getSetCookie === 'function') {
    return headers.getSetCookie();
  }

  const single = headers.get('set-cookie');
  return single ? [single] : [];
}

async function readResponseBody(response) {
  try {
    return await response.text();
  } catch {
    return '';
  }
}

async function ensureOk(response, context, options = {}) {
  if (response.ok) {
    return response;
  }

  const body = await readResponseBody(response);
  const bodyPreview = body.slice(0, 200).replace(/\s+/g, ' ').trim();
  let hint = '';

  if (options.kind === 'google-trends' && response.status === 429) {
    hint = ' Google Trends is rate-limiting this request. Re-prime the session or provide GOOGLE_TRENDS_COOKIE from a valid browser session.';
  } else if (options.kind === 'reddit' && response.status === 403) {
    hint = ' Reddit rejected the request. Use the www.reddit.com JSON endpoint with GET and an explicit browser-like User-Agent.';
  }

  throw new Error(`${context} failed with ${response.status}.${hint} ${bodyPreview}`.trim());
}

export function parseGoogleTrendsJson(payload) {
  const text = typeof payload === 'string' ? payload : '';
  return JSON.parse(text.replace(/^\)\]\}',?\s*/, ''));
}

export function extractGoogleTrendKeywords(markdown) {
  const source = typeof markdown === 'string' ? markdown : '';
  const heading = '## Términos de búsqueda prioritarios (Google Trends)';
  const headingIndex = source.indexOf(heading);
  if (headingIndex === -1) return [];

  const tail = source.slice(headingIndex + heading.length);
  const lines = tail.split(/\r?\n/);
  const keywords = [];

  for (const line of lines) {
    if (line.startsWith('## ')) break;

    const match = line.match(/^\s*-\s+(.+?)\s*$/);
    if (!match) continue;

    const keyword = match[1].trim().replace(/^["']|["']$/g, '');
    if (keyword) {
      keywords.push(keyword);
    }
  }

  return keywords;
}

export function extractRedditSubreddits(markdown) {
  const source = typeof markdown === 'string' ? markdown : '';
  const line = source
    .split(/\r?\n/)
    .find(entry => /^\|\s*Reddit\s*\|/i.test(entry));

  if (!line) return [];

  const cells = line
    .split('|')
    .map(cell => cell.trim())
    .filter(Boolean);

  if (cells.length < 3) return [];

  return cells[2]
    .split(',')
    .map(cell => cell.trim())
    .filter(cell => /^r\//i.test(cell))
    .map(cell => cell.replace(/^r\//i, ''))
    .filter(Boolean);
}

export async function primeGoogleTrendsSession(options = {}) {
  const providedCookie = toNonEmptyString(options.sessionCookie ?? options.env?.GOOGLE_TRENDS_COOKIE);
  if (providedCookie) {
    return providedCookie;
  }

  const fetchImpl = options.fetchImpl ?? fetch;
  const response = await fetchImpl(GOOGLE_TRENDS_ROOT_URL, {
    headers: {
      ...BROWSER_HEADERS,
      accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
    },
    redirect: 'follow',
  });

  await ensureOk(response, 'Google Trends session prime', { kind: 'google-trends' });

  const cookieHeader = buildCookieHeader(getSetCookieHeaders(response.headers));
  if (!cookieHeader) {
    throw new Error('Google Trends session prime did not return any cookies.');
  }

  return cookieHeader;
}

function buildGoogleExploreUrl(keyword, geo, timeRange) {
  const request = {
    comparisonItem: [
      {
        keyword,
        geo,
        time: timeRange,
      },
    ],
    category: 0,
    property: '',
  };

  const url = new URL('https://trends.google.com/trends/api/explore');
  url.searchParams.set('hl', 'es-ES');
  url.searchParams.set('tz', '-120');
  url.searchParams.set('req', JSON.stringify(request));
  return url;
}

function buildGoogleWidgetUrl(pathname, request, token) {
  const url = new URL(`https://trends.google.com${pathname}`);
  url.searchParams.set('hl', 'es-ES');
  url.searchParams.set('tz', '-120');
  url.searchParams.set('req', JSON.stringify(request));
  url.searchParams.set('token', token);
  return url;
}

function createGoogleTrendsHeaders(sessionCookie, referer) {
  return {
    ...BROWSER_HEADERS,
    cookie: sessionCookie,
    referer,
  };
}

function normalizeTimelinePoints(timelineData = []) {
  return timelineData.map(point => ({
    timestamp: point.time ?? null,
    label: point.formattedTime ?? null,
    value: Array.isArray(point.value) ? (point.value[0] ?? null) : null,
    hasData: Array.isArray(point.hasData) ? Boolean(point.hasData[0]) : null,
  }));
}

function normalizeRedditPost(post) {
  const data = post?.data ?? {};
  const permalink = toNonEmptyString(data.permalink);

  return {
    title: data.title ?? null,
    score: data.ups ?? null,
    comments: data.num_comments ?? null,
    permalink: permalink ? `https://www.reddit.com${permalink}` : null,
    url: data.url ?? null,
    author: data.author ?? null,
    createdUtc: data.created_utc ?? null,
  };
}

export async function fetchGoogleTrendsInterestOverTime(keyword, options = {}) {
  const fetchImpl = options.fetchImpl ?? fetch;
  const geo = options.geo ?? DEFAULT_GOOGLE_GEO;
  const timeRange = options.timeRange ?? DEFAULT_GOOGLE_TIME_RANGE;
  const normalizedKeyword = toNonEmptyString(keyword);

  if (!normalizedKeyword) {
    throw new Error('Google Trends requires a non-empty keyword.');
  }

  const sessionCookie = await primeGoogleTrendsSession(options);
  const refererUrl = `${GOOGLE_TRENDS_EXPLORE_REFERER}?geo=${encodeURIComponent(geo)}&q=${encodeURIComponent(normalizedKeyword)}`;

  const exploreResponse = await fetchImpl(buildGoogleExploreUrl(normalizedKeyword, geo, timeRange), {
    headers: createGoogleTrendsHeaders(sessionCookie, refererUrl),
    redirect: 'follow',
  });
  await ensureOk(exploreResponse, `Google Trends explore for "${normalizedKeyword}"`, { kind: 'google-trends' });

  const explorePayload = parseGoogleTrendsJson(await exploreResponse.text());
  const widget = Array.isArray(explorePayload?.widgets)
    ? explorePayload.widgets.find(entry => entry.id === 'TIMESERIES')
    : null;

  if (!widget?.request || !widget?.token) {
    throw new Error(`Google Trends did not return a TIMESERIES widget for "${normalizedKeyword}".`);
  }

  const widgetResponse = await fetchImpl(
    buildGoogleWidgetUrl('/trends/api/widgetdata/multiline', widget.request, widget.token),
    {
      headers: createGoogleTrendsHeaders(sessionCookie, refererUrl),
      redirect: 'follow',
    },
  );
  await ensureOk(widgetResponse, `Google Trends widgetdata for "${normalizedKeyword}"`, { kind: 'google-trends' });

  const widgetPayload = parseGoogleTrendsJson(await widgetResponse.text());
  return {
    source: 'google-trends',
    keyword: normalizedKeyword,
    geo,
    timeRange,
    points: normalizeTimelinePoints(widgetPayload?.default?.timelineData),
  };
}

function normalizeSubreddit(value) {
  const normalized = toNonEmptyString(value);
  if (!normalized) {
    throw new Error('Reddit requires a non-empty subreddit.');
  }

  return normalized.replace(/^\/?r\//i, '').replace(/^\/+|\/+$/g, '');
}

export async function fetchRedditTopPosts(subreddit, options = {}) {
  const fetchImpl = options.fetchImpl ?? fetch;
  const normalizedSubreddit = normalizeSubreddit(subreddit);
  const time = options.time ?? DEFAULT_REDDIT_TIME;
  const limit = options.limit ?? DEFAULT_REDDIT_LIMIT;
  const url = new URL(`https://www.reddit.com/r/${normalizedSubreddit}/top/.json`);
  appendQueryParam(url.searchParams, 't', time);
  appendQueryParam(url.searchParams, 'limit', String(limit));

  const response = await fetchImpl(url, {
    headers: REDDIT_HEADERS,
    redirect: 'follow',
  });
  await ensureOk(response, `Reddit top posts for r/${normalizedSubreddit}`, { kind: 'reddit' });

  const payload = await response.json();
  const children = Array.isArray(payload?.data?.children) ? payload.data.children : [];

  return {
    source: 'reddit',
    subreddit: normalizedSubreddit,
    time,
    limit: Number(limit),
    posts: children.map(normalizeRedditPost),
  };
}

export async function fetchDailyTrendSignals(configPath = DEFAULT_TRENDS_CONFIG_PATH, options = {}) {
  const source = await readFile(configPath, 'utf8');
  const keywords = extractGoogleTrendKeywords(source).slice(0, options.maxKeywords ?? Number.MAX_SAFE_INTEGER);
  const subreddits = extractRedditSubreddits(source).slice(0, options.maxSubreddits ?? Number.MAX_SAFE_INTEGER);
  const geo = options.geo ?? DEFAULT_GOOGLE_GEO;
  const timeRange = options.timeRange ?? DEFAULT_GOOGLE_TIME_RANGE;
  const redditTime = options.redditTime ?? DEFAULT_REDDIT_TIME;
  const redditLimit = options.redditLimit ?? DEFAULT_REDDIT_LIMIT;
  let googleSessionCookie = null;
  let googlePrimeError = null;

  try {
    googleSessionCookie = await primeGoogleTrendsSession(options);
  } catch (error) {
    googlePrimeError = getMessage(error);
  }

  const googleTrends = [];
  for (const keyword of keywords) {
    if (googlePrimeError) {
      googleTrends.push({
        source: 'google-trends',
        keyword,
        geo,
        timeRange,
        error: googlePrimeError,
      });
      continue;
    }

    try {
      const result = await fetchGoogleTrendsInterestOverTime(keyword, {
        ...options,
        geo,
        timeRange,
        sessionCookie: googleSessionCookie,
      });
      googleTrends.push(result);
    } catch (error) {
      googleTrends.push({
        source: 'google-trends',
        keyword,
        geo,
        timeRange,
        error: getMessage(error),
      });
    }
  }

  const reddit = [];
  for (const subreddit of subreddits) {
    try {
      const result = await fetchRedditTopPosts(subreddit, {
        ...options,
        time: redditTime,
        limit: redditLimit,
      });
      reddit.push(result);
    } catch (error) {
      reddit.push({
        source: 'reddit',
        subreddit,
        time: redditTime,
        limit: redditLimit,
        error: getMessage(error),
      });
    }
  }

  return {
    source: 'trend-monitor',
    generatedAt: new Date().toISOString(),
    configPath: new URL(configPath, 'file:').pathname,
    googleTrends,
    reddit,
  };
}

function formatGoogleTrendPoint(point) {
  const label = toNonEmptyString(point?.label) ?? toNonEmptyString(point?.timestamp) ?? 'sin etiqueta';
  const value = point?.value ?? 'sin valor';
  return `\`${label}\` -> \`${value}\``;
}

function formatRedditTopPost(post) {
  const title = toNonEmptyString(post?.title) ?? 'sin titulo';
  const url = toNonEmptyString(post?.permalink) ?? toNonEmptyString(post?.url);
  return url ? `[${title}](${url})` : title;
}

export function buildDailyTrendSnapshotMarkdown(snapshot, options = {}) {
  const snapshotDate = resolveSnapshotDate(snapshot, options);
  const googleTrends = Array.isArray(snapshot?.googleTrends) ? snapshot.googleTrends : [];
  const reddit = Array.isArray(snapshot?.reddit) ? snapshot.reddit : [];
  const lines = [
    `# Trends Heartbeat Snapshot - ${snapshotDate}`,
    '',
    `- Generated at: \`${snapshot?.generatedAt ?? 'desconocido'}\``,
  ];

  if (snapshot?.configPath) {
    lines.push(`- Config: \`${snapshot.configPath}\``);
  }

  lines.push(`- Google Trends tracked: \`${googleTrends.length}\``);
  lines.push(`- Reddit tracked: \`${reddit.length}\``);
  lines.push('', '## Google Trends', '');

  if (googleTrends.length === 0) {
    lines.push('_Sin keywords configuradas._', '');
  } else {
    for (const entry of googleTrends) {
      lines.push(`### ${entry?.keyword ?? 'keyword-desconocida'}`);
      lines.push(`- Geo: \`${entry?.geo ?? DEFAULT_GOOGLE_GEO}\``);
      lines.push(`- Ventana: \`${entry?.timeRange ?? DEFAULT_GOOGLE_TIME_RANGE}\``);

      if (entry?.error) {
        lines.push('- Estado: error');
        lines.push(`- Detalle: \`${entry.error}\``);
        lines.push('');
        continue;
      }

      const points = Array.isArray(entry?.points) ? entry.points.filter(Boolean) : [];
      const latestObservedPoint = points.at(-1);
      const pointsWithData = points.filter(point => point?.hasData !== false && point?.value != null);
      const latestPoint = pointsWithData.at(-1);
      const previousPoint = pointsWithData.at(-2);

      if (!latestPoint) {
        lines.push('- Estado: sin puntos con datos');
        if (latestObservedPoint?.hasData === false) {
          lines.push(`- Tramo mas reciente sin datos: ${formatGoogleTrendPoint(latestObservedPoint)}`);
        }
        lines.push('');
        continue;
      }

      const latestLabel = latestObservedPoint?.hasData === false ? 'Ultimo punto con datos' : 'Ultimo punto';
      lines.push(`- ${latestLabel}: ${formatGoogleTrendPoint(latestPoint)}`);

      if (latestObservedPoint?.hasData === false) {
        lines.push(`- Tramo mas reciente sin datos: ${formatGoogleTrendPoint(latestObservedPoint)}`);
      }

      if (previousPoint) {
        lines.push(`- Punto previo: ${formatGoogleTrendPoint(previousPoint)}`);
        if (typeof latestPoint.value === 'number' && typeof previousPoint.value === 'number') {
          lines.push(`- Delta vs punto previo: \`${latestPoint.value - previousPoint.value}\``);
        }
      }

      lines.push('');
    }
  }

  lines.push('## Reddit', '');

  if (reddit.length === 0) {
    lines.push('_Sin subreddits configurados._', '');
  } else {
    for (const entry of reddit) {
      lines.push(`### r/${entry?.subreddit ?? 'subreddit-desconocido'}`);
      lines.push(`- Ventana: \`${entry?.time ?? DEFAULT_REDDIT_TIME}\``);

      if (entry?.error) {
        lines.push('- Estado: error');
        lines.push(`- Detalle: \`${entry.error}\``);
        lines.push('');
        continue;
      }

      const topPost = Array.isArray(entry?.posts) ? entry.posts[0] : null;
      if (!topPost) {
        lines.push('- Estado: sin posts');
        lines.push('');
        continue;
      }

      lines.push(`- Post principal: ${formatRedditTopPost(topPost)}`);
      lines.push(`- Score/comentarios: \`${topPost.score ?? 'n/d'} / ${topPost.comments ?? 'n/d'}\``);

      if (topPost.author) {
        lines.push(`- Autor: \`${topPost.author}\``);
      }

      lines.push('');
    }
  }

  return `${lines.join('\n').trimEnd()}\n`;
}

export async function persistDailyTrendSnapshot(snapshot, options = {}) {
  const snapshotDate = resolveSnapshotDate(snapshot, options);
  const outputDir = path.resolve(options.outputDir ?? DEFAULT_TRENDS_SNAPSHOT_DIR_PATH);
  const persistedSnapshot = {
    ...snapshot,
    snapshotDate,
  };
  const jsonPath = path.join(outputDir, `${snapshotDate}.json`);
  const markdownPath = path.join(outputDir, `${snapshotDate}.md`);

  await mkdir(outputDir, { recursive: true });
  await writeFile(jsonPath, `${JSON.stringify(persistedSnapshot, null, 2)}\n`, 'utf8');
  await writeFile(markdownPath, buildDailyTrendSnapshotMarkdown(persistedSnapshot, { date: snapshotDate }), 'utf8');

  return {
    snapshotDate,
    outputDir,
    jsonPath,
    markdownPath,
  };
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

function writeJson(stream, value) {
  stream.write(`${JSON.stringify(value, null, 2)}\n`);
}

function getUsage() {
  return [
    'Usage:',
    '  node scripts/trends-monitor.mjs google --keyword "curso ia video" [--geo ES] [--time "today 12-m"]',
    '  node scripts/trends-monitor.mjs reddit --subreddit vfx [--time week] [--limit 5]',
    '  node scripts/trends-monitor.mjs daily [--config sources/trends/trends-config.md] [--max-keywords 5] [--max-subreddits 2]',
    '  node scripts/trends-monitor.mjs heartbeat [--config sources/trends/trends-config.md] [--output-dir sources/trends/snapshots] [--date 2026-04-10]',
    '',
    'Environment:',
    '  GOOGLE_TRENDS_COOKIE   Optional cookie header copied from a valid browser session.',
    '  TRENDS_HEARTBEAT_TIMEZONE Optional IANA timezone used to derive the snapshot date. Default: Europe/Madrid.',
    '',
    'Examples:',
    '  node scripts/trends-monitor.mjs google --keyword "curso IA video"',
    '  node scripts/trends-monitor.mjs reddit --subreddit r/videoediting --limit 3',
    '  node scripts/trends-monitor.mjs daily --max-keywords 3 --max-subreddits 2',
    '  node scripts/trends-monitor.mjs heartbeat --date 2026-04-10',
  ].join('\n');
}

export async function run(argv = process.argv.slice(2), options = {}) {
  const stdout = options.stdout ?? process.stdout;
  const stderr = options.stderr ?? process.stderr;
  const env = options.env ?? process.env;

  try {
    const [command, ...rest] = argv;
    if (!command || command === '--help' || command === 'help') {
      stderr.write(`${getUsage()}\n`);
      return command ? 0 : 1;
    }

    if (command === 'google') {
      const args = parseArgs(rest);
      const result = await fetchGoogleTrendsInterestOverTime(args.keyword, {
        fetchImpl: options.fetchImpl,
        geo: args.geo,
        timeRange: args.time,
        env,
      });
      writeJson(stdout, result);
      return 0;
    }

    if (command === 'reddit') {
      const args = parseArgs(rest);
      const result = await fetchRedditTopPosts(args.subreddit, {
        fetchImpl: options.fetchImpl,
        time: args.time,
        limit: toPositiveInteger(args.limit, DEFAULT_REDDIT_LIMIT),
      });
      writeJson(stdout, result);
      return 0;
    }

    if (command === 'daily') {
      const args = parseArgs(rest);
      const configPath = args.config
        ? new URL(args.config, `file://${process.cwd()}/`)
        : DEFAULT_TRENDS_CONFIG_PATH;
      const result = await fetchDailyTrendSignals(configPath, {
        fetchImpl: options.fetchImpl,
        env,
        geo: args.geo,
        timeRange: args.time,
        redditTime: args['reddit-time'],
        redditLimit: toPositiveInteger(args['reddit-limit'], DEFAULT_REDDIT_LIMIT),
        maxKeywords: toPositiveInteger(args['max-keywords'], Number.MAX_SAFE_INTEGER),
        maxSubreddits: toPositiveInteger(args['max-subreddits'], Number.MAX_SAFE_INTEGER),
      });
      writeJson(stdout, result);

      const hasSuccess = result.googleTrends.some(entry => !entry.error) || result.reddit.some(entry => !entry.error);
      return hasSuccess ? 0 : 1;
    }

    if (command === 'heartbeat' || command === 'snapshot') {
      const args = parseArgs(rest);
      const configPath = args.config
        ? new URL(args.config, `file://${process.cwd()}/`)
        : DEFAULT_TRENDS_CONFIG_PATH;
      const result = await fetchDailyTrendSignals(configPath, {
        fetchImpl: options.fetchImpl,
        env,
        geo: args.geo,
        timeRange: args.time,
        redditTime: args['reddit-time'],
        redditLimit: toPositiveInteger(args['reddit-limit'], DEFAULT_REDDIT_LIMIT),
        maxKeywords: toPositiveInteger(args['max-keywords'], Number.MAX_SAFE_INTEGER),
        maxSubreddits: toPositiveInteger(args['max-subreddits'], Number.MAX_SAFE_INTEGER),
      });
      const persisted = await persistDailyTrendSnapshot(result, {
        outputDir: args['output-dir'] ? path.resolve(process.cwd(), args['output-dir']) : DEFAULT_TRENDS_SNAPSHOT_DIR_PATH,
        date: args.date,
        now: options.now,
        timeZone: args.timezone ?? env.TRENDS_HEARTBEAT_TIMEZONE,
      });
      const googleSuccess = result.googleTrends.filter(entry => !entry.error).length;
      const redditSuccess = result.reddit.filter(entry => !entry.error).length;

      writeJson(stdout, {
        source: 'trend-monitor-heartbeat',
        snapshotDate: persisted.snapshotDate,
        generatedAt: result.generatedAt,
        files: {
          json: persisted.jsonPath,
          markdown: persisted.markdownPath,
        },
        counts: {
          googleTrends: result.googleTrends.length,
          googleSuccess,
          reddit: result.reddit.length,
          redditSuccess,
        },
      });

      return googleSuccess > 0 || redditSuccess > 0 ? 0 : 1;
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
