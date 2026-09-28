import test from 'node:test';
import assert from 'node:assert/strict';
import { generateKeyPairSync } from 'node:crypto';
import { syncBankingEntriesToGoogleSheets, sheetsRequest } from './google-sheets-banking-sync.js';

test('failed Sheets requests log the operation, range and Google explanation without credentials', async () => {
  const originalFetch = globalThis.fetch;
  const logs = [];
  globalThis.fetch = async () => ({ ok: false, status: 400, json: async () => ({ error: { status: 'INVALID_ARGUMENT', message: 'Range exceeds grid limits. Max columns: 24' } }) });
  try {
    await assert.rejects(sheetsRequest('secret-token', 'https://sheets.googleapis.com/v4/spreadsheets/fixture/values/%2750%2F50%27!Y34%3AY', {}, message => logs.push(message)), /Range exceeds grid limits/);
    assert.match(logs[0], /GET.*Y34:Y.*400.*INVALID_ARGUMENT/);
    assert.ok(!logs[0].includes('secret-token'));
  } finally { globalThis.fetch = originalFetch; }
});

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
    else if (/![DKM]/.test(decoded)) response = { range: 'fixture', values: [['Alice', 'Bob', '', 'Later']] };
    else if (decoded.includes('!W') || decoded.includes('!X')) response = { values: [['duplicate']] };
    else throw new Error(decoded);
    return { ok: true, json: async () => response };
  };
  try {
    await syncBankingEntriesToGoogleSheets([
      { type: 'biweekly', eventId: '123', displayName: 'Player', amount: 200001 },
      { type: 'monthly', eventId: '124', displayName: 'Other', amount: 300003 },
      { type: 'monthly', eventId: '125', displayName: 'Donor', amount: 500003, ticketAmount: 0 },
      { type: 'biweekly', eventId: '126', displayName: 'ManualDonor', amount: 800000, ticketAmount: 0, dataSource: 'ManualBiweeklyTicket', note: 'Guild donation' },
      { type: 'biweekly', eventId: '127', displayName: 'Winner', amount: 0, ticketAmount: 20, dataSource: 'ManualBiweeklyTicket', note: 'FFTG' },
      { type: 'other', eventId: '128', displayName: 'Bank', amount: 999, ticketAmount: 0 },
      { type: 'monthly', eventId: 'duplicate', displayName: 'Skip', amount: 10, ticketAmount: 0 }
    ], { log: message => logs.push(message), uploadedBy: 'EvaineFaye' });
    assert.deepEqual(writes[0], [
      { range: "'bi-weekly raffle'!D7:E7", values: [['Player', 200000]] },
      { range: "'bi-weekly raffle'!W7", values: [['123']] }
    ]);
    assert.equal(writes[1][0].range, "'50/50'!D7:E7");
    assert.equal(writes[1][1].range, "'50/50'!W7");
    assert.equal(writes.length, 5);
    assert.deepEqual(writes[2], [
      { range: "'50/50'!K36:L36", values: [['Donor', 500000]] },
      { range: "'50/50'!X36", values: [['125']] }
    ]);
    assert.deepEqual(writes[3], [
      { range: "'bi-weekly raffle'!M64:N64", values: [['ManualDonor (Guild donation)', 800000]] },
      { range: "'bi-weekly raffle'!X64", values: [['126']] }
    ]);
    assert.equal(writes[4][0].values[0][0], 'Winner (FFTG)');
    assert.equal(metadata.length, 2);
    assert.ok(metadata[0].includes("'bi-weekly raffle'!N3:N4"));
    assert.ok(metadata[1].includes("'50/50'!L3:L4"));
    assert.ok(logs.some(line => line.includes('selected=D7')));
    assert.ok(logs.some(line => line.includes('confirmedRanges')));
  } finally {
    globalThis.fetch = originalFetch;
    keys.forEach((key, i) => { if (previous[i] === undefined) delete process.env[key]; else process.env[key] = previous[i]; });
  }
});

