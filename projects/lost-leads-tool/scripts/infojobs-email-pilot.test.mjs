import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

import {
  extractUrlsFromText,
  normalizeInfoJobsEmailMessage,
  resolveInfoJobsTrackingLinks,
  run,
} from './infojobs-email-pilot.mjs';

const verificationEmail = {
  id: 'message-1',
  from_: '"Mensajes InfoJobs.net" pushinfojobs@comms.infojobs.net',
  subject: 'Alberto, verifica tu email... ¡y empecemos!',
  email_ts: '2026-04-10T09:36:30',
  body: [
    '( https://link.comms.infojobs.net/ls/click?upn=abc123 )',
    '',
    'Verifica tu email, entra a tu nuevo trabajo',
    '',
    'Verifica tu email ( https://link.comms.infojobs.net/ls/click?upn=def456 )',
    '',
    'Este mensaje ha sido enviado a persona@example.com por un sistema automático.',
  ].join('\n'),
};

test('extractUrlsFromText returns markdown-wrapped tracking links in order', () => {
  assert.deepEqual(
    extractUrlsFromText(verificationEmail.body),
    [
      'https://link.comms.infojobs.net/ls/click?upn=abc123',
      'https://link.comms.infojobs.net/ls/click?upn=def456',
    ],
  );
});

test('normalizeInfoJobsEmailMessage classifies verification messages and keeps raw links', () => {
  const result = normalizeInfoJobsEmailMessage(verificationEmail);

  assert.equal(result.source, 'infojobs-email');
  assert.equal(result.messageId, 'message-1');
  assert.equal(result.emailType, 'account-verification');
  assert.equal(result.sender.email, 'pushinfojobs@comms.infojobs.net');
  assert.equal(result.sender.displayName, 'Mensajes InfoJobs.net');
  assert.equal(result.urls.length, 2);
  assert.equal(result.offerCandidates.length, 0);
});

test('resolveInfoJobsTrackingLinks follows tracking redirects to final InfoJobs URLs', async () => {
  const result = await resolveInfoJobsTrackingLinks(
    [
      'https://link.comms.infojobs.net/ls/click?upn=offer-1',
      'https://link.comms.infojobs.net/ls/click?upn=offer-2',
    ],
    {
      fetchImpl: async url => ({
        ok: true,
        status: 200,
        url: String(url).includes('offer-1')
          ? 'https://www.infojobs.net/madrid/editor-video/of-i123'
          : 'https://www.infojobs.net/barcelona/motion-designer/of-i456',
      }),
    },
  );

  assert.deepEqual(
    result.map(entry => entry.finalUrl),
    [
      'https://www.infojobs.net/madrid/editor-video/of-i123',
      'https://www.infojobs.net/barcelona/motion-designer/of-i456',
    ],
  );
});

test('run extract prints normalized JSON for a saved Gmail message payload', async () => {
  const tempDir = mkdtempSync(join(tmpdir(), 'infojobs-email-pilot-'));
  const inputPath = join(tempDir, 'message.json');
  const stdout = [];
  const stderr = [];

  writeFileSync(inputPath, JSON.stringify(verificationEmail, null, 2));

  const exitCode = await run(
    ['extract', inputPath],
    {
      stdout: { write: chunk => stdout.push(String(chunk)) },
      stderr: { write: chunk => stderr.push(String(chunk)) },
    },
  );

  assert.equal(exitCode, 0);
  assert.equal(stderr.join(''), '');

  const payload = JSON.parse(stdout.join(''));
  assert.equal(payload.emailType, 'account-verification');
  assert.equal(payload.sender.email, 'pushinfojobs@comms.infojobs.net');
  assert.equal(payload.urls[0], 'https://link.comms.infojobs.net/ls/click?upn=abc123');
  assert.equal(readFileSync(inputPath, 'utf8').includes('"message-1"'), true);

  rmSync(tempDir, { recursive: true, force: true });
});
