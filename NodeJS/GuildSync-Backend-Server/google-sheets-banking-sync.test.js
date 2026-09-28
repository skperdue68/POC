import test from 'node:test';
import assert from 'node:assert/strict';
import { generateKeyPairSync } from 'node:crypto';
import { syncBankingEntriesToGoogleSheets } from './google-sheets-banking-sync.js';

test('writes only D/E and X at the first gap, logs before writing, preserves metadata destinations', async () => {
  const originalFetch = globalThis.fetch;
  const keys = ['GUILDSYNC_GOOGLE_SHEETS_ENABLED', 'GUILDSYNC_GOOGLE_SHEETS_SPREADSHEET_ID', 'GUILDSYNC_GOOGLE_SERVICE_ACCOUNT_JSON'];
  const previous = keys.map(key => process.env[key]);
  const { privateKey } = generateKeyPairSync('rsa', { modulusLength: 2048 });
  process.env[keys[0]] = 'true'; process.env[keys[1]] = 'fixture';
  process.env[keys[2]] = JSON.stringify({ client_email: 'fixture@example.test', private_key: privateKey.export({ type: 'pkcs8', format: 'pem' }) });
  const logs = [], writes = [], metadata = [];
  globalThis.fetch = async (url, options = {}) => {
    const decoded = decodeURIComponent(url);
    let response = {};
    if (url.includes('oauth2')) response = { access_token: 'fixture-token' };
    else if (url.endsWith(':batchUpdate')) {
      assert.ok(logs.at(-1).startsWith('Writing '));
      const body = JSON.parse(options.body);
      assert.equal(body.valueInputOption, 'RAW');
      writes.push(body.data);
      response = { responses: body.data.map(item => ({ updatedRange: item.range })) };
    } else if (options.method === 'PUT') {
      assert.equal(JSON.parse(options.body).values[0][0], 'EvaineFaye (GuildSync)');
      metadata.push(decoded);
    }
    else if (decoded.includes('!D')) response = { range: 'D6:D256', values: [['Alice', 'Bob', '', 'Later']] };
    else if (decoded.includes('!X')) response = { values: [] };
    else throw new Error(decoded);
    return { ok: true, json: async () => response };
  };
  try {
    await syncBankingEntriesToGoogleSheets([
      { type: 'biweekly', eventId: '123', displayName: 'Player', amount: 200001 },
      { type: 'monthly', eventId: '124', displayName: 'Other', amount: 300003 }
    ], { log: message => logs.push(message), uploadedBy: 'EvaineFaye' });
    assert.deepEqual(writes[0], [
      { range: "'bi-weekly raffle'!D8:E8", values: [['Player', 200000]] },
      { range: "'bi-weekly raffle'!X8", values: [['123']] }
    ]);
    assert.equal(writes[1][0].range, "'50/50'!D7:E7");
    assert.equal(writes[1][1].range, "'50/50'!X7");
    assert.ok(metadata[0].includes('N4:N5'));
    assert.ok(metadata[1].includes('L3:L4'));
    assert.ok(logs.some(line => line.includes('selected=D8')));
    assert.ok(logs.some(line => line.includes('confirmedRanges')));
  } finally {
    globalThis.fetch = originalFetch;
    keys.forEach((key, i) => { if (previous[i] === undefined) delete process.env[key]; else process.env[key] = previous[i]; });
  }
});

