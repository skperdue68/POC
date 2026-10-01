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
  const payload = { sourceId: 'source', key: 'closure', name: '260926 raffle' };
  let result = { ok: true, sourceId: 'source', key: 'closure', archiveId: 'copy' };
  globalThis.fetch = async (url, init) => {
    assert.equal(init.method, 'POST'); assert.equal(new URL(url).search, '');
    assert.equal(JSON.parse(init.body).secret, 'secret');
    return { ok: true, json: async () => result };
  };
  assert.equal(await requestArchive('archive', payload), 'copy');
  for (const override of [{ ok: false }, { sourceId: 'other' }, { key: 'other' }, { archiveId: 'source' }]) {
    result = { ok: true, sourceId: 'source', key: 'closure', archiveId: 'copy', ...override };
    await assert.rejects(requestArchive('archive', payload), /verify/);
  }
  globalThis.fetch = async () => ({ ok: true, json: async () => { throw Error('html'); } });
  await assert.rejects(requestArchive('archive', payload), /invalid JSON/);
});

test('deployed Apps Script authenticates, reconciles copies and sharing, and verifies before success', async () => {
  const source = await readFile(new URL('../../scripts/google-apps-script/Archive.gs', import.meta.url), 'utf8');
  let copy, copies = 0, sharingFails = false, locked = false;
  const permissions = { source: [{ type: 'user', role: 'writer', emailAddress: 'service@example.invalid' }, { type: 'anyone', role: 'reader', allowFileDiscovery: false }], copy: [] };
  const properties = { ARCHIVE_SECRET: 'secret', SOURCE_SPREADSHEET_ID: 'source', ARCHIVE_FOLDER_ID: 'folder' };
  const context = vm.createContext({ console: { error() {} },
    ContentService: { MimeType: { JSON: 'json' }, createTextOutput: text => ({ setMimeType: () => JSON.parse(text) }) },
    PropertiesService: { getScriptProperties: () => ({ getProperty: key => properties[key] }) },
    LockService: { getScriptLock: () => ({ tryLock: () => { assert.equal(locked, false); locked = true; return true; }, releaseLock: () => { locked = false; } }) },
    SpreadsheetApp: { openById: id => { assert.equal(id, 'copy'); return { getSheets: () => [] }; } },
    Drive: {
      Files: { list: () => ({ files: copy ? [{ id: 'copy' }] : [] }), copy: (body, id) => {
        assert.equal(id, 'source'); copies++; copy = { id: 'copy', mimeType: 'application/vnd.google-apps.spreadsheet', ...body }; return copy;
      }, get: id => { assert.equal(id, 'copy'); return copy; } },
      Permissions: { list: id => ({ permissions: permissions[id] }), create: (p, id) => { if (sharingFails) throw Error('permission failure'); permissions[id].push(p); }, update: () => assert.fail('unexpected update') }
    }
  });
  vm.runInContext(source, context);
  const request = { secret: 'secret', sourceId: 'source', key: 'a'.repeat(32) + ':raffle-rollover-1000', action: 'archive', name: '260926 raffle' };
  const call = data => context.doPost({ postData: { contents: JSON.stringify(data) } });
  assert.equal(call({ ...request, secret: 'bad' }).ok, false); assert.equal(copies, 0);
  sharingFails = true; assert.equal(call(request).ok, false); assert.equal(copies, 1);
  sharingFails = false; assert.equal(call(request).ok, true); assert.equal(copies, 1);
  assert.equal(call({ ...request, action: 'verify', archiveId: 'copy' }).ok, true);
  assert.equal(permissions.copy.length, 2);
  assert.equal(permissions.copy.find(p => p.type === 'anyone').role, 'reader');
  copy.trashed = true; assert.equal(call({ ...request, action: 'verify', archiveId: 'copy' }).ok, false);
  assert.equal(locked, false);
});
