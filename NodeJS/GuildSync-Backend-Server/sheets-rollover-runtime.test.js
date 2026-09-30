import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { resetRequests, startSheetsRollover } from './sheets-rollover-runtime.js';
import { configureSheetsCoordinator } from './google-sheets-banking-sync.js';

for (const [type, donationRows, donationColumns] of [['biweekly', [61, 70], [14, 17]], ['monthly', [35, 44], [12, 15]]]) {
  test(`${type} reset touches exact values/notes ranges, hides G and replaces only prior markers`, () => {
    const requests = resetRequests(7, type, 'next-key', [{ metadataId: 23 }]);
    assert.deepEqual(requests, [
      { updateCells: { range: { sheetId: 7, startRowIndex: 4, endRowIndex: 254, startColumnIndex: 3, endColumnIndex: 7 }, fields: 'userEnteredValue' } },
      { updateCells: { range: { sheetId: 7, startRowIndex: 4, endRowIndex: 254, startColumnIndex: 6, endColumnIndex: 7 }, fields: 'note' } },
      { updateDimensionProperties: { range: { sheetId: 7, dimension: 'COLUMNS', startIndex: 6, endIndex: 7 }, properties: { hiddenByUser: true }, fields: 'hiddenByUser' } },
      { updateCells: { range: { sheetId: 7, startRowIndex: donationRows[0], endRowIndex: donationRows[1], startColumnIndex: donationColumns[0], endColumnIndex: donationColumns[1] }, fields: 'userEnteredValue' } },
      { deleteDeveloperMetadata: { dataFilter: { developerMetadataLookup: { metadataId: 23 } } } },
      { createDeveloperMetadata: { developerMetadata: { metadataKey: 'guildsync_last_rollover', metadataValue: 'next-key', visibility: 'DOCUMENT', location: { sheetId: 7 } } } }
    ]);
    assert.equal(JSON.stringify(requests).includes('userEnteredFormat'), false);
  });
}

async function fixture(t, { copyFailure = false, uncertainClear = false, sourceAsCopy = false } = {}) {
  const dir = await mkdtemp(path.join(tmpdir(), 'guildsync-rollover-test-'));
  const env = {
    GUILDSYNC_GOOGLE_SHEETS_ENABLED: 'true', GUILDSYNC_GOOGLE_SHEETS_ROLLOVER_ENABLED: 'true',
    GUILDSYNC_RAFFLE_TEST_COMMANDS_ENABLED: 'true',
    GUILDSYNC_GOOGLE_SHEETS_SPREADSHEET_ID: 'original-source', GUILDSYNC_GOOGLE_SHEETS_ARCHIVE_FOLDER_ID: 'archives',
    GUILDSYNC_GOOGLE_OAUTH_REFRESH_TOKEN: 'fake-refresh', GUILDSYNC_GOOGLE_OAUTH_CLIENT_ID: 'fake-client',
    GUILDSYNC_GOOGLE_OAUTH_CLIENT_SECRET: 'fake-secret', GUILDSYNC_GOOGLE_SHEETS_LOG_FILE: path.join(dir, 'test.log'),
    GUILDSYNC_GOOGLE_SHEETS_BIWEEKLY_TAB: 'bi-weekly raffle', GUILDSYNC_GOOGLE_SHEETS_5050_TAB: '50/50'
  };
  const previous = Object.fromEntries(Object.keys(env).map(key => [key, process.env[key]]));
  Object.assign(process.env, env);
  const originalFetch = globalThis.fetch;
  const calls = [], mutations = [], markers = [];
  let state = { version: 1, windows: [{ type: 'biweekly', salesEnd: 1000, drawTime: 2000 }, { type: 'monthly', salesEnd: 3000, drawTime: 4000 }], lastClosedSalesEnd: {}, pending: null };
  let copy, released = 0, failClear = uncertainClear;
  const connection = {
    async execute(sql, params) {
      if (sql.includes('GET_LOCK')) return [[{ acquired: 1 }]];
      if (sql.includes('RELEASE_LOCK')) return [[{ released: 1 }]];
      if (sql.startsWith('SELECT value')) return [[{ value: JSON.stringify(state) }]];
      if (sql.startsWith('INSERT')) { state = JSON.parse(params[1]); return [{}]; }
      throw new Error('Unexpected SQL: ' + sql);
    },
    release() { released++; }
  };
  const db = { getConnection: async () => connection };
  globalThis.fetch = async (url, init = {}) => {
    url = String(url); calls.push(url);
    let body;
    if (url.includes('oauth2.googleapis.com')) body = { access_token: 'test-token' };
    else if (url.includes('/drive/v3/files?')) body = { files: copy ? [copy] : [] };
    else if (url.includes('/original-source/copy?')) {
      mutations.push('archive');
      if (copyFailure) return { ok: false, status: 403, json: async () => ({ error: { message: 'copy denied' } }) };
      copy = { id: sourceAsCopy ? 'original-source' : 'archive-copy', mimeType: 'application/vnd.google-apps.spreadsheet', ...JSON.parse(init.body) };
      body = { id: copy.id };
    } else if (url.includes('/drive/v3/files/archive-copy?')) { mutations.push('verify'); body = copy; }
    else if (url.endsWith(':batchUpdate')) {
      assert.equal(url, 'https://sheets.googleapis.com/v4/spreadsheets/original-source:batchUpdate');
      mutations.push('clear');
      const requests = JSON.parse(init.body).requests;
      assert.ok(requests.every(request => (request.updateCells?.range.sheetId ?? request.updateDimensionProperties?.range.sheetId ?? request.createDeveloperMetadata?.developerMetadata.location.sheetId) === 7));
      markers.push(...requests.filter(request => request.createDeveloperMetadata).map(request => request.createDeveloperMetadata.developerMetadata));
      if (failClear) { failClear = false; throw new Error('response lost after clear'); }
      body = {};
    } else if (url.startsWith('https://sheets.googleapis.com/v4/spreadsheets/original-source?')) body = {
      sheets: [{ properties: { sheetId: 7, title: 'bi-weekly raffle' }, developerMetadata: markers }, { properties: { sheetId: 8, title: '50/50' } }]
    };
    else throw new Error('Unexpected URL: ' + url);
    return { ok: true, json: async () => structuredClone(body) };
  };
  const start = () => startSheetsRollover(db, () => [{ type: 'biweekly', salesEnd: 5000, drawTime: 6000 }, { type: 'monthly', salesEnd: 3000, drawTime: 4000 }], { now: () => 1000, schedule: false });
  t.after(async () => {
    globalThis.fetch = originalFetch;
    configureSheetsCoordinator(async operation => operation({}));
    for (const [key, value] of Object.entries(previous)) { if (value === undefined) delete process.env[key]; else process.env[key] = value; }
    await rm(dir, { recursive: true, force: true });
  });
  return { start, calls, mutations, state: () => state, released: () => released };
}

test('explicit test close archives and resets with automatic rollover off without advancing schedule', async t => {
  const f = await fixture(t);
  process.env.GUILDSYNC_GOOGLE_SHEETS_ROLLOVER_ENABLED = 'false';
  const before = structuredClone(f.state());
  const result = await f.start().testClose('biweekly');
  assert.equal(result.archiveId, 'archive-copy');
  assert.deepEqual(f.mutations, ['archive', 'verify', 'verify', 'clear']);
  assert.deepEqual(f.state(), before, 'testing must not update actual cutoff state');
  assert.equal(f.released(), 1);
});

test('runtime verifies archive before clearing only closed tab in original spreadsheet, then exports', async t => {
  const f = await fixture(t);
  const runtime = f.start();
  await runtime.run(async state => { assert.equal(state.lastClosedSalesEnd.biweekly, 1000); f.mutations.push('export'); });
  assert.deepEqual(f.mutations, ['archive', 'verify', 'verify', 'clear', 'export']);
  assert.equal(f.state().pending, null);
  assert.equal(f.released(), 1);
  assert.ok(f.calls.filter(url => url.includes('sheets.googleapis.com')).every(url => url.includes('/original-source')));
});

test('archive copy failure blocks both clear and queued export and releases database lock', async t => {
  const f = await fixture(t, { copyFailure: true });
  await assert.rejects(f.start().run(() => f.mutations.push('export')), /copy denied/);
  assert.deepEqual(f.mutations, ['archive']);
  assert.equal(f.state().pending.archiveId, null);
  assert.equal(f.released(), 1);
});

test('source ID returned as archive is rejected before any clear or export', async t => {
  const f = await fixture(t, { sourceAsCopy: true });
  await assert.rejects(f.start().run(() => f.mutations.push('export')), /distinct file ID/);
  assert.deepEqual(f.mutations, ['archive']);
});

test('restart after uncertain reset uses atomic marker and never clears twice', async t => {
  const f = await fixture(t, { uncertainClear: true });
  await assert.rejects(f.start().run(() => f.mutations.push('export')), /response lost/);
  assert.equal(f.state().pending.archiveId, 'archive-copy');
  await f.start().run(() => f.mutations.push('export'));
  assert.equal(f.mutations.filter(item => item === 'archive').length, 1);
  assert.equal(f.mutations.filter(item => item === 'clear').length, 1);
  assert.equal(f.mutations.filter(item => item === 'export').length, 1);
  assert.equal(f.state().pending, null);
  assert.equal(f.released(), 2);
});
