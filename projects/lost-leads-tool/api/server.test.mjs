import test from 'node:test';
import assert from 'node:assert/strict';
import { once } from 'node:events';

import { createApp } from './server.mjs';

test('GET /api/health returns runtime and database status', async (t) => {
  const app = createApp({ port: 0 });
  app.server.listen(0, '127.0.0.1');
  await once(app.server, 'listening');

  t.after(async () => {
    await app.close();
  });

  const address = app.server.address();
  const res = await fetch(`http://127.0.0.1:${address.port}/api/health`);
  assert.equal(res.status, 200);

  const payload = await res.json();
  assert.equal(payload.status, 'ok');
  assert.equal(payload.database, 'ok');
  assert.equal(payload.port, address.port);
});
