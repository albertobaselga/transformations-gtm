import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, readFile, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import path from 'node:path';

import {
  buildDailyTrendSnapshotMarkdown,
  extractGoogleTrendKeywords,
  extractRedditSubreddits,
  fetchDailyTrendSignals,
  fetchGoogleTrendsInterestOverTime,
  fetchRedditTopPosts,
  parseGoogleTrendsJson,
  persistDailyTrendSnapshot,
  run,
} from '../scripts/trends-monitor.mjs';

test('parseGoogleTrendsJson strips the XSSI prefix used by Google Trends', () => {
  const parsed = parseGoogleTrendsJson(`)]}'\n{"default":{"timelineData":[]}}`);

  assert.deepEqual(parsed, {
    default: {
      timelineData: [],
    },
  });
});

test('extractGoogleTrendKeywords and extractRedditSubreddits read the current markdown config format', () => {
  const markdown = `# Fuentes

## Fuentes activas

| Fuente | Tipo | Qué buscar | Frecuencia |
|--------|------|-----------|------------|
| Google Trends | Búsquedas | Términos audiovisuales en España | Diaria |
| Reddit | Comunidades | r/filmmakers, r/videoediting, creadores ES | Diaria |

## Términos de búsqueda prioritarios (Google Trends)

- "curso IA video"
- "curso animación 3D"
- "curso streaming profesional"

## Herramientas IA audiovisual a rastrear
`;

  assert.deepEqual(extractGoogleTrendKeywords(markdown), [
    'curso IA video',
    'curso animación 3D',
    'curso streaming profesional',
  ]);

  assert.deepEqual(extractRedditSubreddits(markdown), [
    'filmmakers',
    'videoediting',
  ]);
});

test('fetchGoogleTrendsInterestOverTime primes a session and reuses the cookie for explore and widgetdata requests', async () => {
  const calls = [];
  const fetchImpl = async (url, options = {}) => {
    calls.push({
      url: String(url),
      options,
    });

    if (calls.length === 1) {
      return new Response('ok', {
        status: 200,
        headers: [['set-cookie', 'NID=session-123; Path=/; Secure; HttpOnly']],
      });
    }

    if (String(url).includes('/trends/api/explore')) {
      return new Response(
        `)]}'\n${JSON.stringify({
          widgets: [
            {
              id: 'TIMESERIES',
              token: 'token-123',
              request: {
                time: '2025-04-09 2026-04-09',
              },
            },
          ],
        })}`,
        {
          status: 200,
          headers: [['content-type', 'application/json; charset=utf-8']],
        },
      );
    }

    if (String(url).includes('/trends/api/widgetdata/multiline')) {
      return new Response(
        `)]}',\n${JSON.stringify({
          default: {
            timelineData: [
              {
                time: '1743897600',
                formattedTime: '6–12 abr 2025',
                value: [42],
                hasData: [true],
              },
            ],
          },
        })}`,
        {
          status: 200,
          headers: [['content-type', 'application/json; charset=utf-8']],
        },
      );
    }

    throw new Error(`Unexpected URL in test: ${url}`);
  };

  const result = await fetchGoogleTrendsInterestOverTime('curso ia video', {
    fetchImpl,
    geo: 'ES',
    timeRange: 'today 12-m',
  });

  assert.equal(result.keyword, 'curso ia video');
  assert.equal(result.geo, 'ES');
  assert.equal(result.points.length, 1);
  assert.deepEqual(result.points[0], {
    timestamp: '1743897600',
    label: '6–12 abr 2025',
    value: 42,
    hasData: true,
  });

  assert.equal(calls.length, 3);
  assert.equal(calls[0].url, 'https://trends.google.com/');
  assert.match(calls[1].options.headers.cookie, /NID=session-123/);
  assert.match(calls[2].options.headers.cookie, /NID=session-123/);
});

test('fetchRedditTopPosts normalizes subreddit input and calls the JSON endpoint on www.reddit.com', async () => {
  const fetchImpl = async (url, options = {}) => {
    assert.equal(String(url), 'https://www.reddit.com/r/vfx/top/.json?t=week&limit=2');
    assert.equal(options.headers.accept, 'application/json');
    assert.match(options.headers['user-agent'], /Mozilla/);

    return new Response(
      JSON.stringify({
        data: {
          children: [
            {
              data: {
                title: 'Good job guys, we fooled them again.',
                ups: 1078,
                num_comments: 130,
                permalink: '/r/vfx/comments/abc123/good_job_guys/',
                url: 'https://www.reddit.com/r/vfx/comments/abc123/good_job_guys/',
                author: 'artist42',
                created_utc: 1775700000,
              },
            },
          ],
        },
      }),
      {
        status: 200,
        headers: [['content-type', 'application/json; charset=utf-8']],
      },
    );
  };

  const result = await fetchRedditTopPosts('r/vfx', {
    fetchImpl,
    limit: 2,
    time: 'week',
  });

  assert.equal(result.subreddit, 'vfx');
  assert.equal(result.posts.length, 1);
  assert.deepEqual(result.posts[0], {
    title: 'Good job guys, we fooled them again.',
    score: 1078,
    comments: 130,
    permalink: 'https://www.reddit.com/r/vfx/comments/abc123/good_job_guys/',
    url: 'https://www.reddit.com/r/vfx/comments/abc123/good_job_guys/',
    author: 'artist42',
    createdUtc: 1775700000,
  });
});

test('fetchDailyTrendSignals still returns Reddit results when Google session priming fails', async () => {
  const tempDir = await mkdtemp(path.join(tmpdir(), 'trends-monitor-'));
  const configPath = path.join(tempDir, 'trends-config.md');

  await writeFile(
    configPath,
    `## Fuentes activas

| Fuente | Tipo | Qué buscar | Frecuencia |
|--------|------|-----------|------------|
| Reddit | Comunidades | r/vfx | Diaria |

## Términos de búsqueda prioritarios (Google Trends)

- "curso IA video"
`,
    'utf8',
  );

  let callCount = 0;
  const fetchImpl = async (url) => {
    callCount += 1;

    if (callCount === 1) {
      return new Response('Too Many Requests', { status: 429 });
    }

    assert.equal(String(url), 'https://www.reddit.com/r/vfx/top/.json?t=week&limit=1');
    return new Response(
      JSON.stringify({
        data: {
          children: [
            {
              data: {
                title: 'Recovered from Reddit',
                ups: 12,
                num_comments: 4,
                permalink: '/r/vfx/comments/recovered',
                url: 'https://www.reddit.com/r/vfx/comments/recovered',
                author: 'ops-bot',
                created_utc: 1775701234,
              },
            },
          ],
        },
      }),
      {
        status: 200,
        headers: [['content-type', 'application/json; charset=utf-8']],
      },
    );
  };

  const result = await fetchDailyTrendSignals(configPath, {
    fetchImpl,
    maxKeywords: 1,
    maxSubreddits: 1,
    redditLimit: 1,
  });

  assert.match(result.googleTrends[0].error, /429/);
  assert.equal(result.reddit[0].subreddit, 'vfx');
  assert.equal(result.reddit[0].posts[0].title, 'Recovered from Reddit');
});

test('buildDailyTrendSnapshotMarkdown summarizes dated Google Trends and Reddit results for the daily heartbeat', () => {
  const markdown = buildDailyTrendSnapshotMarkdown(
    {
      source: 'trend-monitor',
      generatedAt: '2026-04-10T07:30:00.000Z',
      configPath: '/tmp/trends-config.md',
      googleTrends: [
        {
          source: 'google-trends',
          keyword: 'curso Blender',
          geo: 'ES',
          timeRange: 'today 12-m',
          points: [
            { label: '22-28 mar 2026', value: 31 },
            { label: '29 mar-4 abr 2026', value: 100 },
            { label: '5-11 abr 2026', value: 75 },
          ],
        },
        {
          source: 'google-trends',
          keyword: 'curso IA video',
          geo: 'ES',
          timeRange: 'today 12-m',
          error: 'Google Trends explore failed with 429.',
        },
      ],
      reddit: [
        {
          source: 'reddit',
          subreddit: 'videoediting',
          time: 'week',
          posts: [
            {
              title: 'Clients asking for AI-generated B-roll now and I am not sure how to price it',
              score: 34,
              comments: 32,
              permalink: 'https://www.reddit.com/r/videoediting/comments/abc123/ai_b_roll/',
              author: 'editor42',
            },
          ],
        },
        {
          source: 'reddit',
          subreddit: 'filmmakers',
          time: 'week',
          error: 'Reddit rejected the request with 403.',
        },
      ],
    },
    {
      date: '2026-04-10',
    },
  );

  assert.match(markdown, /# Trends Heartbeat Snapshot - 2026-04-10/);
  assert.match(markdown, /### curso Blender/);
  assert.match(markdown, /Ultimo punto: `5-11 abr 2026` -> `75`/);
  assert.match(markdown, /Delta vs punto previo: `-25`/);
  assert.match(markdown, /### curso IA video/);
  assert.match(markdown, /Estado: error/);
  assert.match(markdown, /Google Trends explore failed with 429/);
  assert.match(markdown, /### r\/videoediting/);
  assert.match(markdown, /Post principal: \[Clients asking for AI-generated B-roll now and I am not sure how to price it\]/);
  assert.match(markdown, /Score\/comentarios: `34 \/ 32`/);
  assert.match(markdown, /### r\/filmmakers/);
  assert.match(markdown, /Reddit rejected the request with 403/);
});

test('persistDailyTrendSnapshot writes JSON and Markdown files with a stable date-based name', async () => {
  const tempDir = await mkdtemp(path.join(tmpdir(), 'trends-snapshot-'));
  const snapshot = {
    source: 'trend-monitor',
    generatedAt: '2026-04-10T08:00:00.000Z',
    configPath: '/tmp/trends-config.md',
    googleTrends: [],
    reddit: [],
  };

  const result = await persistDailyTrendSnapshot(snapshot, {
    outputDir: tempDir,
    date: '2026-04-10',
  });

  assert.equal(result.snapshotDate, '2026-04-10');
  assert.equal(result.jsonPath, path.join(tempDir, '2026-04-10.json'));
  assert.equal(result.markdownPath, path.join(tempDir, '2026-04-10.md'));

  const persistedJson = JSON.parse(await readFile(result.jsonPath, 'utf8'));
  const persistedMarkdown = await readFile(result.markdownPath, 'utf8');

  assert.equal(persistedJson.snapshotDate, '2026-04-10');
  assert.match(persistedMarkdown, /# Trends Heartbeat Snapshot - 2026-04-10/);
});

test('buildDailyTrendSnapshotMarkdown treats trailing Google Trends points with hasData=false as missing data instead of real zeroes', () => {
  const markdown = buildDailyTrendSnapshotMarkdown(
    {
      source: 'trend-monitor',
      generatedAt: '2026-04-10T07:30:00.000Z',
      configPath: '/tmp/trends-config.md',
      googleTrends: [
        {
          source: 'google-trends',
          keyword: 'curso IA video',
          geo: 'ES',
          timeRange: 'today 12-m',
          points: [
            { label: '29 mar-4 abr 2026', value: 8, hasData: true },
            { label: '5-11 abr 2026', value: 0, hasData: false },
          ],
        },
      ],
      reddit: [],
    },
    {
      date: '2026-04-10',
    },
  );

  assert.match(markdown, /Ultimo punto con datos: `29 mar-4 abr 2026` -> `8`/);
  assert.match(markdown, /Tramo mas reciente sin datos: `5-11 abr 2026` -> `0`/);
  assert.doesNotMatch(markdown, /Ultimo punto: `5-11 abr 2026` -> `0`/);
});

test('run heartbeat persists dated snapshots and returns success when at least one source succeeds', async () => {
  const tempDir = await mkdtemp(path.join(tmpdir(), 'trends-heartbeat-'));
  const configPath = path.join(tempDir, 'trends-config.md');
  const stdout = {
    chunks: [],
    write(chunk) {
      this.chunks.push(String(chunk));
    },
  };
  const stderr = {
    chunks: [],
    write(chunk) {
      this.chunks.push(String(chunk));
    },
  };

  await writeFile(
    configPath,
    `## Fuentes activas

| Fuente | Tipo | Qué buscar | Frecuencia |
|--------|------|-----------|------------|
| Reddit | Comunidades | r/vfx | Diaria |

## Términos de búsqueda prioritarios (Google Trends)

- "curso IA video"
`,
    'utf8',
  );

  let callCount = 0;
  const fetchImpl = async (url) => {
    callCount += 1;

    if (callCount === 1) {
      return new Response('Too Many Requests', { status: 429 });
    }

    assert.equal(String(url), 'https://www.reddit.com/r/vfx/top/.json?t=week&limit=1');
    return new Response(
      JSON.stringify({
        data: {
          children: [
            {
              data: {
                title: 'Recovered from Reddit',
                ups: 12,
                num_comments: 4,
                permalink: '/r/vfx/comments/recovered',
                url: 'https://www.reddit.com/r/vfx/comments/recovered',
                author: 'ops-bot',
                created_utc: 1775701234,
              },
            },
          ],
        },
      }),
      {
        status: 200,
        headers: [['content-type', 'application/json; charset=utf-8']],
      },
    );
  };

  const exitCode = await run(
    [
      'heartbeat',
      '--config',
      configPath,
      '--output-dir',
      tempDir,
      '--date',
      '2026-04-10',
      '--max-keywords',
      '1',
      '--max-subreddits',
      '1',
      '--reddit-limit',
      '1',
    ],
    {
      fetchImpl,
      stdout,
      stderr,
      env: {},
    },
  );

  assert.equal(exitCode, 0);
  assert.equal(stderr.chunks.length, 0);

  const payload = JSON.parse(stdout.chunks.join(''));
  assert.equal(payload.snapshotDate, '2026-04-10');
  assert.equal(payload.files.json, path.join(tempDir, '2026-04-10.json'));
  assert.equal(payload.files.markdown, path.join(tempDir, '2026-04-10.md'));

  const persistedJson = JSON.parse(await readFile(path.join(tempDir, '2026-04-10.json'), 'utf8'));
  assert.match(persistedJson.googleTrends[0].error, /429/);
  assert.equal(persistedJson.reddit[0].posts[0].title, 'Recovered from Reddit');
});
