#!/usr/bin/env node

import { readFile } from 'node:fs/promises';

function isMainModule() {
  return process.argv[1] === new URL(import.meta.url).pathname;
}

function getMessage(error) {
  return error instanceof Error ? error.message : String(error);
}

function writeJson(stream, value) {
  stream.write(`${JSON.stringify(value, null, 2)}\n`);
}

function unique(values) {
  return [...new Set(values.filter(Boolean))];
}

function toText(value) {
  if (typeof value === 'string') {
    return value;
  }

  return '';
}

function parseSender(fromValue) {
  const source = toText(fromValue).trim();
  const quotedMatch = source.match(/^"([^"]+)"\s+([^\s<>]+@[^\s<>]+)$/);
  if (quotedMatch) {
    return {
      raw: source,
      displayName: quotedMatch[1],
      email: quotedMatch[2].toLowerCase(),
    };
  }

  const angleMatch = source.match(/^([^<]+)<([^>]+)>$/);
  if (angleMatch) {
    return {
      raw: source,
      displayName: angleMatch[1].trim() || null,
      email: angleMatch[2].trim().toLowerCase(),
    };
  }

  const emailMatch = source.match(/([^\s<>]+@[^\s<>]+)/);
  return {
    raw: source,
    displayName: source.replace(emailMatch?.[1] ?? '', '').trim() || null,
    email: emailMatch?.[1]?.toLowerCase() ?? null,
  };
}

export function extractUrlsFromText(text) {
  const source = toText(text);
  const matches = source.match(/https?:\/\/[^\s)>\]]+/g) ?? [];
  return unique(matches.map(url => url.replace(/[)>.,]+$/g, '')));
}

function isInfoJobsTrackingUrl(value) {
  try {
    const url = new URL(value);
    return (
      url.hostname.endsWith('infojobs.net') &&
      (url.hostname.startsWith('link.') || url.pathname.includes('/ls/click'))
    );
  } catch {
    return false;
  }
}

function isDirectInfoJobsUrl(value) {
  try {
    const url = new URL(value);
    return url.hostname.endsWith('infojobs.net') && !isInfoJobsTrackingUrl(value);
  } catch {
    return false;
  }
}

function classifyInfoJobsEmail(subject, body) {
  const content = `${toText(subject)}\n${toText(body)}`.toLowerCase();

  if (content.includes('verifica tu email')) {
    return 'account-verification';
  }

  if (
    content.includes('alerta de empleo') ||
    content.includes('ofertas para ti') ||
    content.includes('nuevas ofertas')
  ) {
    return 'job-alert';
  }

  return 'unknown';
}

function collectOfferCandidates(urls, resolvedTrackingLinks = []) {
  const directUrls = urls.filter(isDirectInfoJobsUrl);
  const resolvedUrls = resolvedTrackingLinks
    .map(entry => entry?.finalUrl)
    .filter(isDirectInfoJobsUrl);

  return unique([...directUrls, ...resolvedUrls]);
}

export async function resolveInfoJobsTrackingLinks(links, options = {}) {
  const fetchImpl = options.fetchImpl ?? fetch;
  const candidates = unique(links.filter(isInfoJobsTrackingUrl));

  const results = [];
  for (const link of candidates) {
    const response = await fetchImpl(link, {
      method: 'GET',
      redirect: 'follow',
      headers: {
        'user-agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36',
      },
    });

    results.push({
      trackingUrl: link,
      finalUrl: response?.url ?? null,
      ok: response?.ok ?? false,
      status: response?.status ?? null,
    });
  }

  return results;
}

export function normalizeInfoJobsEmailMessage(message, options = {}) {
  const sender = parseSender(message?.from_);
  const urls = extractUrlsFromText(message?.body);
  const resolvedTrackingLinks = Array.isArray(options.resolvedTrackingLinks)
    ? options.resolvedTrackingLinks
    : [];

  return {
    source: 'infojobs-email',
    messageId: message?.id ?? null,
    emailType: classifyInfoJobsEmail(message?.subject, message?.body),
    sender,
    subject: toText(message?.subject) || null,
    sentAt: message?.email_ts ?? null,
    urls,
    trackingLinks: urls.filter(isInfoJobsTrackingUrl),
    resolvedTrackingLinks,
    offerCandidates: collectOfferCandidates(urls, resolvedTrackingLinks),
    rawBodyPreview: toText(message?.body).slice(0, 400) || null,
  };
}

async function readJsonFile(path) {
  const contents = await readFile(path, 'utf8');
  return JSON.parse(contents);
}

function getUsage() {
  return [
    'Usage:',
    '  node scripts/infojobs-email-pilot.mjs extract <gmail-message.json> [--resolve-links]',
    '',
    'Input:',
    '  A JSON payload shaped like the Gmail connector response for read_email.',
    '',
    'Output:',
    '  A normalized envelope with sender, type, links, and candidate offer URLs.',
  ].join('\n');
}

export async function run(argv = process.argv.slice(2), options = {}) {
  const stdout = options.stdout ?? process.stdout;
  const stderr = options.stderr ?? process.stderr;
  const fetchImpl = options.fetchImpl ?? fetch;

  try {
    const [command, ...rest] = argv;
    if (!command || command === '--help' || command === 'help') {
      stderr.write(`${getUsage()}\n`);
      return command ? 0 : 1;
    }

    if (command !== 'extract') {
      throw new Error(`Unknown command: ${command}`);
    }

    const inputPath = rest.find(token => !token.startsWith('--'));
    if (!inputPath) {
      throw new Error('extract requires a JSON file path.');
    }

    const resolveLinks = rest.includes('--resolve-links');
    const message = await readJsonFile(inputPath);
    const basePayload = normalizeInfoJobsEmailMessage(message);
    const resolvedTrackingLinks = resolveLinks
      ? await resolveInfoJobsTrackingLinks(basePayload.trackingLinks, { fetchImpl })
      : [];

    writeJson(stdout, normalizeInfoJobsEmailMessage(message, { resolvedTrackingLinks }));
    return 0;
  } catch (error) {
    stderr.write(`${getMessage(error)}\n`);
    return 1;
  }
}

if (isMainModule()) {
  const exitCode = await run();
  process.exit(exitCode);
}
