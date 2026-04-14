import test from 'node:test';
import assert from 'node:assert/strict';

import {
  inspectPublicInfoJobsPage,
  run,
  searchInfoJobsOffers,
} from './infojobs-offers.mjs';

test('inspectPublicInfoJobsPage flags Distil captcha pages and extracts request ID', async () => {
  const html = `
    <!doctype html>
    <html>
      <head>
        <link rel="canonical" href="https://www.infojobs.net/distil/distil/captcha.xhtml" />
      </head>
      <body>
        <p id="extraUnblock"><small>IP: 88.3.173.214, Request ID: abc123==</small></p>
      </body>
    </html>
  `;

  const result = await inspectPublicInfoJobsPage(
    'https://www.infojobs.net/ofertas-trabajo/creacion-contenidos',
    {
      fetchImpl: async () => new Response(html, {
        status: 200,
        headers: { 'content-type': 'text/html; charset=utf-8' },
      }),
    },
  );

  assert.equal(result.blocked, true);
  assert.equal(result.blockType, 'captcha');
  assert.equal(result.requestId, 'abc123==');
  assert.equal(result.url, 'https://www.infojobs.net/ofertas-trabajo/creacion-contenidos');
});

test('searchInfoJobsOffers uses Basic auth and normalizes the search response', async () => {
  let requestedUrl;
  let requestedHeaders;

  const payload = {
    totalResults: 2,
    currentResults: 1,
    totalPages: 2,
    currentPage: 1,
    pageSize: 1,
    offers: [
      {
        id: 'offer-1',
        title: 'Editor de Video',
        link: 'https://www.infojobs.net/oferta-1',
        city: 'Madrid',
        province: { value: 'Madrid' },
        category: { value: 'Marketing y comunicación' },
        subcategory: { value: 'Diseño y artes gráficas' },
        author: { name: '35mm.es' },
        published: '2026-04-09T06:00:00Z',
        teleworking: { value: 'hybrid' },
      },
    ],
  };

  const result = await searchInfoJobsOffers(
    { q: 'editor video', maxResults: 5, page: 1 },
    {
      clientId: 'client-id',
      clientSecret: 'client-secret',
      fetchImpl: async (url, init) => {
        requestedUrl = new URL(url);
        requestedHeaders = init.headers;

        return new Response(JSON.stringify(payload), {
          status: 200,
          headers: { 'content-type': 'application/json' },
        });
      },
    },
  );

  assert.equal(requestedUrl.origin, 'https://api.infojobs.net');
  assert.equal(requestedUrl.pathname, '/api/9/offer');
  assert.equal(requestedUrl.searchParams.get('q'), 'editor video');
  assert.equal(requestedUrl.searchParams.get('maxResults'), '5');
  assert.equal(
    requestedHeaders.Authorization,
    `Basic ${Buffer.from('client-id:client-secret').toString('base64')}`,
  );
  assert.equal(result.totalResults, 2);
  assert.equal(result.offers[0].company, '35mm.es');
  assert.equal(result.offers[0].title, 'Editor de Video');
});

test('searchInfoJobsOffers fails fast when API credentials are missing', async () => {
  await assert.rejects(
    () => searchInfoJobsOffers({ q: 'editor video' }, {
      fetchImpl: async () => {
        throw new Error('should not be called');
      },
    }),
    /INFOJOBS_CLIENT_ID and INFOJOBS_CLIENT_SECRET/,
  );
});

test('run detect prints a JSON diagnosis for a blocked public URL', async () => {
  const stdout = [];
  const stderr = [];

  const exitCode = await run(
    ['detect', 'https://www.infojobs.net/ofertas-trabajo/editor-video'],
    {
      stdout: { write: chunk => stdout.push(String(chunk)) },
      stderr: { write: chunk => stderr.push(String(chunk)) },
      fetchImpl: async () => new Response(
        '<link rel="canonical" href="https://www.infojobs.net/distil/distil/captcha.xhtml" />',
        {
          status: 200,
          headers: { 'content-type': 'text/html; charset=utf-8' },
        },
      ),
      env: {},
    },
  );

  assert.equal(exitCode, 0);
  assert.equal(stderr.join(''), '');

  const payload = JSON.parse(stdout.join(''));
  assert.equal(payload.blocked, true);
  assert.equal(payload.blockType, 'captcha');
});
