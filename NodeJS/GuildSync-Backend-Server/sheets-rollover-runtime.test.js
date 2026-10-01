import test from 'node:test';
import { generateKeyPairSync } from 'node:crypto';
const testAccount = JSON.stringify({ client_email: 'test@example.invalid', private_key: generateKeyPairSync('rsa', { modulusLength: 2048 }).privateKey.export({ type: 'pkcs8', format: 'pem' }) });
import assert from 'node:assert/strict';
import { mkdtemp, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { resetRequests, startSheetsRollover, drawDateRequest } from './sheets-rollover-runtime.js';
import { configureSheetsCoordinator } from './google-sheets-banking-sync.js';

for (const [type, donationRows, donationColumns] of [['biweekly', [61, 70], [15, 18]], ['monthly', [35, 44], [13, 16]]]) {
  test(`${type} reset touches exact values/notes ranges, hides G and replaces only prior markers`, () => {
    const requests = resetRequests(7, type, 'next-key', [{ metadataId: 23 }]);
    const ranges = requests.filter(request => request.updateCells).map(request => request.updateCells.range);
    assert.ok(ranges.some(range => range.startRowIndex === 4 && range.endRowIndex === 254 && range.startColumnIndex === 3 && range.endColumnIndex === 6));
    assert.equal(ranges.some(range => range.startRowIndex === 4 && range.endRowIndex === 254 && range.startColumnIndex === 9 && range.endColumnIndex === 11), type === 'biweekly');
    const touches = column => ranges.some(range => range.startRowIndex < 254 && range.endRowIndex > 4 && range.startColumnIndex <= column && range.endColumnIndex > column);
    assert.equal(touches(6), false, 'preserve G values, formulas and notes');
    if (type === 'monthly') {
      assert.equal(touches(9), false, 'preserve 50/50 J');
      assert.equal(touches(10), false, 'preserve 50/50 K');
    }
    assert.ok(requests.some(({ updateCells: cell }) => cell?.range.startRowIndex === 4 && cell.range.endRowIndex === 254 && cell.range.startColumnIndex === 7 && cell.range.endColumnIndex === 8 && cell.fields === 'userEnteredValue,note'));
    assert.ok(ranges.some(range => range.startRowIndex === donationRows[0] && range.endRowIndex === donationRows[1] && range.startColumnIndex === donationColumns[0] && range.endColumnIndex === donationColumns[1]));
    if (type === 'biweekly') {
      assert.ok(ranges.some(range => range.startRowIndex === 2 && range.endRowIndex === 4 && range.startColumnIndex === 17 && range.endColumnIndex === 18));
      assert.ok(ranges.some(range => range.startRowIndex === 32 && range.endRowIndex === 52 && range.startColumnIndex === 16 && range.endColumnIndex === 17));
    } else {
      assert.ok(ranges.some(range => range.startRowIndex === 2 && range.endRowIndex === 4 && range.startColumnIndex === 15 && range.endColumnIndex === 16));
      assert.ok(ranges.some(range => range.startRowIndex === 24 && range.endRowIndex === 25 && range.startColumnIndex === 15 && range.endColumnIndex === 16));
      assert.ok(ranges.some(range => range.startRowIndex === 27 && range.endRowIndex === 28 && range.startColumnIndex === 12 && range.endColumnIndex === 13));
    }
    assert.ok(requests.some(request => request.deleteDeveloperMetadata));
    assert.ok(requests.some(request => request.createDeveloperMetadata));
    assert.equal(JSON.stringify(requests).includes('userEnteredFormat'), false);
  });
}

async function fixture(t, { copyFailure = false, uncertainClear = false, sourceAsCopy = false, targetSheet = 7, loadCatchupEntries = async () => [] } = {}) {
  const dir = await mkdtemp(path.join(tmpdir(), 'guildsync-rollover-test-'));
  const env = {
    GUILDSYNC_GOOGLE_SHEETS_ENABLED: 'true', GUILDSYNC_GOOGLE_SHEETS_ROLLOVER_ENABLED: 'true',
    GUILDSYNC_RAFFLE_TEST_COMMANDS_ENABLED: 'true',
    GUILDSYNC_GOOGLE_SHEETS_SPREADSHEET_ID: 'original-source', GUILDSYNC_GOOGLE_ARCHIVE_WEB_APP_URL: 'https://script.google.com/macros/s/test/exec',
    GUILDSYNC_GOOGLE_ARCHIVE_SECRET: 'fixture-secret', GUILDSYNC_GOOGLE_SHEETS_ROLLOVER_DELAY_HOURS: '0',
    GUILDSYNC_GOOGLE_SERVICE_ACCOUNT_JSON: testAccount, GUILDSYNC_GOOGLE_SHEETS_LOG_FILE: path.join(dir, 'test.log'),
    GUILDSYNC_GOOGLE_SHEETS_BIWEEKLY_TAB: 'bi-weekly raffle', GUILDSYNC_GOOGLE_SHEETS_5050_TAB: '50/50'
  };
  const previous = Object.fromEntries(Object.keys(env).map(key => [key, process.env[key]]));
  Object.assign(process.env, env);
  const originalFetch = globalThis.fetch;
  const calls = [], mutations = [], markers = [], batches = [];
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
    else if (url.startsWith('https://script.google.com/')) {
      const payload = JSON.parse(init.body);
      assert.equal(payload.secret, 'fixture-secret');
      if (payload.action === 'archive') {
        mutations.push('archive');
        if (copyFailure) return { ok: false, status: 403 };
        copy = { ok: true, sourceId: payload.sourceId, key: payload.key, archiveId: sourceAsCopy ? payload.sourceId : 'archive-copy' };
      } else mutations.push('verify');
      body = copy;
    }
    else if (url.endsWith(':batchUpdate')) {
      assert.equal(url, 'https://sheets.googleapis.com/v4/spreadsheets/original-source:batchUpdate');
      mutations.push('clear');
      const requests = JSON.parse(init.body).requests;
      batches.push(requests);
      assert.ok(requests.every(request => (request.updateCells?.range.sheetId ?? request.updateDimensionProperties?.range.sheetId ?? request.createDeveloperMetadata?.developerMetadata.location.sheetId) === targetSheet));
      markers.push(...requests.filter(request => request.createDeveloperMetadata).map(request => request.createDeveloperMetadata.developerMetadata));
      if (failClear) { failClear = false; throw new Error('response lost after clear'); }
      body = {};
    } else if (url.startsWith('https://sheets.googleapis.com/v4/spreadsheets/original-source?')) body = {
      sheets: [{ properties: { sheetId: 7, title: 'bi-weekly raffle' }, developerMetadata: markers }, { properties: { sheetId: 8, title: '50/50' } }]
    };
    else throw new Error('Unexpected URL: ' + url);
    return { ok: true, json: async () => structuredClone(body) };
  };
  const start = () => startSheetsRollover(db, () => [{ type: 'biweekly', salesEnd: 5000, drawTime: 6000 }, { type: 'monthly', salesEnd: 3000, drawTime: 4000 }], { now: () => 1000, schedule: false, loadCatchupEntries });
  t.after(async () => {
    globalThis.fetch = originalFetch;
    configureSheetsCoordinator(async operation => operation({}));
    for (const [key, value] of Object.entries(previous)) { if (value === undefined) delete process.env[key]; else process.env[key] = value; }
    await rm(dir, { recursive: true, force: true });
  });
  return { start, calls, mutations, batches, state: () => state, released: () => released };
}

for (const [type, sheetId] of [['biweekly', 7], ['monthly', 8]]) {
  test(`test reset clears ${type} closure fields without archiving or advancing overdue rollover`, async t => {
    const f = await fixture(t, { targetSheet: sheetId });
    process.env.GUILDSYNC_GOOGLE_SHEETS_ROLLOVER_ENABLED = 'false';
    const before = structuredClone(f.state());
    const runtime = f.start();
    assert.equal(typeof runtime.testReset, 'function');
    await runtime.testReset(type);
    assert.deepEqual(f.mutations, ['clear']);
    assert.ok(f.calls.every(url => !url.includes('/drive/v3/')));
    assert.deepEqual(f.state(), before);
    assert.deepEqual(f.batches[0], resetRequests(sheetId, type, 'unused').filter(request => request.updateCells || request.updateDimensionProperties));
    assert.equal(f.released(), 1);
  });
}

test('test reset refuses disabled testing, invalid raffle and pending rollover without Google writes', async t => {
  const f = await fixture(t);
  const runtime = f.start();
  assert.equal(typeof runtime.testReset, 'function');
  await assert.rejects(runtime.testReset('both'), /Select biweekly or monthly/);
  process.env.GUILDSYNC_RAFFLE_TEST_COMMANDS_ENABLED = 'false';
  await assert.rejects(runtime.testReset('biweekly'), /disabled/);
  process.env.GUILDSYNC_RAFFLE_TEST_COMMANDS_ENABLED = 'true';
  f.state().pending = { key: 'incomplete-archive' };
  await assert.rejects(runtime.testReset('biweekly'), /hold/i);
  assert.deepEqual(f.mutations, []);
  assert.deepEqual(f.calls, []);
});

test('hold blocks exports and tests without Google writes and persists deadline', async t => {
  const f = await fixture(t);
  process.env.GUILDSYNC_GOOGLE_SHEETS_ROLLOVER_DELAY_HOURS = '4';
  const runtime = f.start();
  await assert.rejects(runtime.run(() => assert.fail('must not export')), /hold/);
  assert.equal(f.state().pending.readyAt, 15400);
  await assert.rejects(runtime.testReset('biweekly'), /hold/);
  await assert.rejects(runtime.testClose('monthly'), /hold/);
  assert.deepEqual(f.calls, []);
});

test('failed catchup remains durable and retries without clearing again', async t => {
  let failed = true, replays = 0;
  const f = await fixture(t, { loadCatchupEntries: async () => { replays++; if (failed) throw new Error('database unavailable'); return []; } });
  await assert.rejects(f.start().run(() => assert.fail('no export')), /database unavailable/);
  assert.equal(f.state().catchupRequired, true);
  failed = false;
  await f.start().run(() => f.mutations.push('export'));
  assert.equal(replays, 2);
  assert.equal(f.mutations.filter(item => item === 'clear').length, 1);
  assert.equal(f.state().catchupRequired, false);
});

test('next draw dates use Eastern dates in R7/P7 with mm/dd/yy format', () => {
  for (const [type, column] of [['biweekly', 17], ['monthly', 15]]) {
    const cell = drawDateRequest(7, type, Date.parse('2026-10-01T02:00:00Z') / 1000).updateCells;
    assert.equal(cell.range.startRowIndex, 6); assert.equal(cell.range.startColumnIndex, column);
    assert.equal(cell.rows[0].values[0].userEnteredValue.numberValue, Date.UTC(2026, 8, 30) / 86400000 + 25569);
    assert.equal(cell.rows[0].values[0].userEnteredFormat.numberFormat.pattern, 'mm/dd/yy');
  }
});

test('explicit test close archives and resets with automatic rollover off without advancing schedule', async t => {
  const f = await fixture(t);
  process.env.GUILDSYNC_GOOGLE_SHEETS_ROLLOVER_ENABLED = 'false';
  const before = structuredClone(f.state());
  const result = await f.start().testClose('biweekly');
  assert.equal(result.archiveId, 'archive-copy');
  assert.deepEqual(f.mutations, ['archive', 'verify', 'clear']);
  assert.deepEqual(f.state(), before, 'testing must not update actual cutoff state');
  assert.equal(f.released(), 1);
});

test('runtime verifies archive before clearing only closed tab in original spreadsheet, then exports', async t => {
  const f = await fixture(t);
  const runtime = f.start();
  await runtime.run(async state => { assert.equal(state.lastClosedSalesEnd.biweekly, 1000); f.mutations.push('export'); });
  assert.deepEqual(f.mutations, ['archive', 'verify', 'clear', 'export']);
  assert.equal(f.state().pending, null);
  assert.equal(f.released(), 1);
  assert.ok(f.calls.filter(url => url.includes('sheets.googleapis.com')).every(url => url.includes('/original-source')));
});

test('archive copy failure blocks both clear and queued export and releases database lock', async t => {
  const f = await fixture(t, { copyFailure: true });
  await assert.rejects(f.start().run(() => f.mutations.push('export')), /403/);
  assert.deepEqual(f.mutations, ['archive']);
  assert.equal(f.state().pending.archiveId, null);
  assert.equal(f.released(), 1);
});

test('source ID returned as archive is rejected before any clear or export', async t => {
  const f = await fixture(t, { sourceAsCopy: true });
  await assert.rejects(f.start().run(() => f.mutations.push('export')), /verify/);
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
