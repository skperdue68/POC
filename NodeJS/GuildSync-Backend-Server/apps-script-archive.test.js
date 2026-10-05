import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import vm from 'node:vm';
import { requestArchive } from './apps-script-archive.js';

test('web app client validates identity and never accepts source as archive', async t => {
  const original = globalThis.fetch;
  const keys = ['GUILDSYNC_GOOGLE_ARCHIVE_WEB_APP_URL', 'GUILDSYNC_GOOGLE_ARCHIVE_SECRET'];
  const old = keys.map(key => process.env[key]);
  t.after(() => { globalThis.fetch = original; keys.forEach((key, i) => old[i] === undefined ? delete process.env[key] : process.env[key] = old[i]); });
  process.env[keys[0]] = 'https://script.google.com/macros/s/test/exec'; process.env[keys[1]] = 'secret';
  const payload = { sourceId: 'source', key: 'closure', name: '260926 Raffle' };
  let result = { ok: true, sourceId: 'source', key: 'closure', archiveId: 'copy' };
  globalThis.fetch = async (url, init) => {
    assert.equal(init.method, 'POST'); assert.equal(new URL(url).search, '');
    assert.equal(JSON.parse(init.body).secret, 'secret');
    return { ok: true, json: async () => result };
  };
  assert.equal(await requestArchive('archive', payload), 'copy');
  result = { ...result, name: '260926 Raffle' };
  assert.equal((await requestArchive('archive', { ...payload, details: true })).name, '260926 Raffle');
  assert.equal(await requestArchive('historical-resolve', { ...payload, archiveId: 'trashed-old-copy' }), 'copy');
  await assert.rejects(requestArchive('historical-read', { ...payload, archiveId: 'trashed-old-copy' }), /verify/);
  await assert.rejects(requestArchive('historical-complete', { ...payload, archiveId: 'trashed-old-copy' }), /verify/);
  for (const override of [{ ok: false }, { sourceId: 'other' }, { key: 'other' }, { archiveId: 'source' }]) {
    result = { ok: true, sourceId: 'source', key: 'closure', archiveId: 'copy', ...override };
    await assert.rejects(requestArchive('archive', payload), /verify/);
  }
  result = { ok: false, error: 'permission failure' };
  await assert.rejects(requestArchive('archive', payload), /Archive web app failed: permission failure/);
  result = { ok: false, error: 'failure secret\nnext line' };
  await assert.rejects(requestArchive('archive', payload), error => { assert.match(error.message, /failure \[redacted\] next line/); return true; });
  result = null;
  await assert.rejects(requestArchive('archive', payload), /verify/);
  globalThis.fetch = async () => ({ ok: true, json: async () => { throw Error('html'); } });
  await assert.rejects(requestArchive('archive', payload), /invalid JSON/);
});

test('deployed Apps Script authenticates, reconciles copies and sharing, and verifies before success', async () => {
  const source = await readFile(new URL('../../scripts/google-apps-script/Archive.gs', import.meta.url), 'utf8');
  let trashed = [], copy, copies = 0, sharingFails = false, locked = false;
  const permissions = { source: [{ type: 'user', role: 'writer', emailAddress: 'service@example.invalid' }, { type: 'anyone', role: 'reader', allowFileDiscovery: false }], copy: [] };
  const properties = { ARCHIVE_SECRET: 'backend-private-secret', SOURCE_SPREADSHEET_ID: 'source', ARCHIVE_FOLDER_ID: 'folder' };
  const context = vm.createContext({ console: { error() {}, log() {} },
    ContentService: { MimeType: { JSON: 'json' }, createTextOutput: text => ({ setMimeType: () => JSON.parse(text) }) },
    PropertiesService: { getScriptProperties: () => ({ getProperty: key => properties[key], setProperty: (key,value) => { properties[key] = value; } }) },
    LockService: { getScriptLock: () => ({ tryLock: () => { assert.equal(locked, false); locked = true; return true; }, releaseLock: () => { locked = false; } }) },
    SpreadsheetApp: { openById: id => ({ getSpreadsheetTimeZone:()=> 'America/New_York',
      getSheetByName:()=>({getRange:()=>({getDisplayValue:()=> '09/26/26', getValues:()=>[],getFormulas:()=>[],getRow:()=>1,getColumn:()=>1})}) }) },
    Drive: {
      Files: { list: options => ({ files: options.q.includes("name=") ? [{id:'old-copy'},{id:'copy'},{id:'source'}] : copy ? [{id:'copy'}] : [] }), update: (body,id) => { assert.equal(body.trashed,true); trashed.push(id); }, copy: (body, id) => {
        assert.equal(id, 'source'); copies++; copy = { id: 'copy', mimeType: 'application/vnd.google-apps.spreadsheet', ...body }; return copy;
      }, get: id => { assert.equal(id, 'copy'); return copy; } },
      Permissions: { list: id => ({ permissions: permissions[id] }), create: (p, id) => { if (sharingFails) throw Error('permission failure backend-private-secret'); permissions[id].push(p); }, update: () => assert.fail('unexpected update') }
    }
  });
  vm.runInContext(source, context);
  context.readRaffleArchive = () => { throw Error('result reads disabled'); };
  const request = { secret: 'backend-private-secret', sourceId: 'source', key: 'a'.repeat(32) + ':raffle-rollover-1000', action: 'archive', eligibleMonthlyDates:['2026-09-26'], name: '260926 Raffle' };
  const call = data => context.doPost({ postData: { contents: JSON.stringify(data) } });
  const fails = (fn, pattern) => { const result = fn(); assert.equal(result.ok, false); assert.match(result.error, pattern); };
  fails(() => call({ ...request, secret: 'bad' }), /Backend secret does not match ARCHIVE_SECRET/); assert.equal(copies, 0);
  for (const property of Object.keys(properties)) {
    const saved = properties[property]; delete properties[property];
    fails(() => call(request), new RegExp(property + ' property is missing'));
    properties[property] = saved;
  }
  fails(() => call({ ...request, sourceId: 'wrong' }), /spreadsheet ID does not match/);
  fails(() => call({ ...request, key: 'wrong' }), /Invalid archive request key/);
  fails(() => call({ ...request, action: 'wrong' }), /Unsupported request action/);
  fails(() => context.doPost({ postData: { contents: '{' } }), /Invalid JSON request/);
  fails(() => call(null), /Request must be a JSON object/);
  assert.doesNotMatch(call({ ...request, secret: 'PRIVATE_VALUE' }).error, /PRIVATE_VALUE|secret;/);
  sharingFails = true; fails(() => call(request), /permission failure/); assert.equal(copies, 1); assert.deepEqual(trashed, []);
  assert.equal(locked, false);
  assert.doesNotMatch(call({ ...request, secret: 'PRIVATE_VALUE' }).error, /PRIVATE_VALUE/);
  assert.doesNotMatch(call(request).error, /secret|PRIVATE_VALUE/);
  sharingFails = false; assert.equal(call(request).ok, true); assert.equal(call(request).results, undefined); assert.equal(copies, 1);
  const retry = call({ ...request, action: 'verify', archiveId: 'copy' });
  assert.equal(retry.ok, true);
  assert.deepEqual(retry.replacedArchiveIds, ['old-copy']);
  assert.equal(permissions.copy.length, 2); assert.ok(trashed.every(id=>id==='old-copy')); assert.equal(copy.name,'260926 Raffle');
  assert.equal(permissions.copy.find(p => p.type === 'anyone').role, 'reader');
  copy.trashed = true; fails(() => call({ ...request, action: 'verify', archiveId: 'copy' }), /Archive verification failed/);
  assert.equal(locked, false);
});
