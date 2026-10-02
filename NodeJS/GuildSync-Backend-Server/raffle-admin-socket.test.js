import test from 'node:test';
import assert from 'node:assert/strict';
import * as endpoints from './raffle-admin-socket.js';
const entries = [
  { type: 'biweekly', eventId: 'old', time: 100 },
  { type: 'biweekly', eventId: 'b', time: 101, ticketAmount: 1 },
  { type: 'monthly', eventId: 'm', time: 50, ticketAmount: 0 },
  { type: 'other', eventId: 'other', time: 150 },
  { type: 'biweekly', eventId: 'future', time: 201 }
];

test('refresh endpoint uses both independently selected windows without test enablement', async t => {
  const old = process.env.GUILDSYNC_RAFFLE_TEST_COMMANDS_ENABLED;
  process.env.GUILDSYNC_RAFFLE_TEST_COMMANDS_ENABLED = 'false';
  t.after(() => old === undefined ? delete process.env.GUILDSYNC_RAFFLE_TEST_COMMANDS_ENABLED : process.env.GUILDSYNC_RAFFLE_TEST_COMMANDS_ENABLED = old);
  assert.equal(typeof endpoints.registerRaffleRefreshSocket, 'function');
  const selection = { asOf: 200, raffles: [{ type: 'biweekly', start: 101, end: 250 }, { type: 'monthly', start: 50, end: 250 }] };
  const calls = []; let handler;
  const socket = { guildSyncAuthenticated: true, guildSyncAuthType: 'discord-bot', on(_event, cb) { handler = cb; } };
  endpoints.registerRaffleRefreshSocket(socket, {}, {
    getRaffleRefreshSelection: date => { calls.push(['date', date]); return selection; },
    loadResults: async () => ({}), loadTemplates: async () => ({}),
    getBankingDataJSON: async () => [...entries, { type: 'monthly', time: 250, eventId: 'end' }],
    authorize: async (_db, id) => id === 'officer',
    refreshEntries: async (load, options) => { const snapshot = await load(); assert.deepEqual(snapshot.periods, selection.raffles); calls.push(['rows', snapshot.entries, options]); return { synced: 2 }; }, log: async () => {}
  });
  const request = payload => new Promise(resolve => handler(payload, resolve));
  for (const action of ['plan', 'export']) {
    const result = await request({ action, date: '091526', discordUserId: 'officer', requestedBy: 'Display Name' });
    assert.equal(result.ok, true); assert.deepEqual(result.selection, selection);
  }
  const exported = calls.find(call => call[0] === 'rows');
  assert.deepEqual(exported[1].map(row => row.eventId), ['m', 'b']);
  assert.equal(exported[2].uploadedBy, 'Display Name');
  const count = calls.length;
  assert.equal((await request({ action: 'export', discordUserId: 'member' })).ok, false);
  assert.equal(calls.length, count);
  socket.guildSyncAuthType = 'client';
  assert.equal((await request({ action: 'plan', discordUserId: 'officer' })).ok, false);
});

test('database authorization compares exact role names despite case-insensitive database collation', async () => {
  assert.equal(typeof endpoints.isConsigliere, 'function');
  for (const role of ['Consigliere', 'consigliere', 'Capo', 'Consigliere ']) {
    const db = { execute: async (sql, args) => { assert.match(sql, /discord_member_roles/); assert.deepEqual(args, ['123']); return [[{ role_name: role }]]; } };
    assert.equal(await endpoints.isConsigliere(db, '123'), role === 'Consigliere');
    assert.equal(await endpoints.isConsigliere(db, ''), false);
  }
});

test('production clear/archive require bot authentication and exact role without test flags', async t => {
  const before = process.env.GUILDSYNC_GOOGLE_SHEETS_ENABLED;
  process.env.GUILDSYNC_GOOGLE_SHEETS_ENABLED = 'true';
  t.after(() => before === undefined ? delete process.env.GUILDSYNC_GOOGLE_SHEETS_ENABLED : process.env.GUILDSYNC_GOOGLE_SHEETS_ENABLED = before);
  let handler; const calls = [];
  const socket = { guildSyncAuthenticated: true, guildSyncAuthType: 'discord-bot', on(event, cb) { assert.equal(event, 'guildsync:raffle-manage'); handler = cb; } };
  endpoints.registerRaffleManagementSocket(socket, {}, { authorize: async (_, id) => id === 'officer', log: async () => {},
    sheets: { clear: async () => calls.push('clear'), archive: async () => { calls.push('archive'); return { archiveId: 'copy', name: '260926 raffle' }; } } });
  const request = data => new Promise(resolve => handler(data, resolve));
  for (const action of ['clear', 'archive']) {
    assert.equal((await request({ action, discordUserId: 'member', requestedBy: 'Member' })).ok, false);
    const result = await request({ action, discordUserId: 'officer', requestedBy: 'Officer' });
    assert.equal(result.ok, true); assert.match(result.message, /[Bb]oth/);
  }
  assert.deepEqual(calls, ['clear', 'archive']);
  socket.guildSyncAuthType = 'client';
  assert.equal((await request({ action: 'clear', discordUserId: 'officer' })).ok, false);
  assert.equal(calls.length, 2);
});
