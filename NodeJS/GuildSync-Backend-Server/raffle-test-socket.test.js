import test from 'node:test';
import assert from 'node:assert/strict';
import { currentRaffleEntries, registerRaffleTestSocket } from './raffle-test-socket.js';

const snapshot = { asOf: 200, raffles: [
  { type: 'biweekly', salesStart: 101, salesEnd: 250 },
  { type: 'monthly', salesStart: 50, salesEnd: 250 }
] };
const entries = [
  { type: 'biweekly', eventId: 'old', time: 100 },
  { type: 'biweekly', eventId: 'b', time: 101, ticketAmount: 1 },
  { type: 'monthly', eventId: 'm', time: 50, ticketAmount: 0 },
  { type: 'other', eventId: 'other', time: 150 },
  { type: 'biweekly', eventId: 'future', time: 201 }
];
test('test export selects current committed raffle rows including donations, excludes other/future/old rows', () => {
  assert.deepEqual(currentRaffleEntries(entries, snapshot, 'both').map(e => e.eventId), ['m', 'b']);
  assert.deepEqual(currentRaffleEntries(entries, snapshot, 'biweekly').map(e => e.eventId), ['b']);
});

function fixture(t) {
  const keys = ['GUILDSYNC_RAFFLE_TEST_COMMANDS_ENABLED', 'GUILDSYNC_GOOGLE_SHEETS_ENABLED'];
  const old = keys.map(key => process.env[key]);
  keys.forEach(key => process.env[key] = 'true');
  t.after(() => keys.forEach((key, i) => { if (old[i] === undefined) delete process.env[key]; else process.env[key] = old[i]; }));
  let handler;
  const calls = [];
  const socket = { guildSyncAuthenticated: true, guildSyncAuthType: 'discord-bot', on(event, callback) { assert.equal(event, 'guildsync:raffle-test'); handler = callback; } };
  registerRaffleTestSocket(socket, {}, {
    getActiveRaffleSummary: async () => snapshot, getBankingDataJSON: async () => entries,
    sheets: { testClose: async type => { calls.push(['close', type]); return { name: '260926 raffle', archiveId: 'copy' }; } },
    exportEntries: async (rows, options) => { calls.push(['export', rows, options]); return { synced: rows.length }; }, log: async () => {}
  });
  return { socket, calls, request: payload => new Promise(resolve => handler(payload, resolve)) };
}
test('test endpoint requires bot authentication and opt-in even when commands remain registered', async t => {
  const f = fixture(t);
  f.socket.guildSyncAuthType = 'client';
  assert.equal((await f.request({ action: 'export', raffleType: 'both' })).ok, false);
  f.socket.guildSyncAuthType = 'discord-bot';
  process.env.GUILDSYNC_RAFFLE_TEST_COMMANDS_ENABLED = 'false';
  assert.equal((await f.request({ action: 'export', raffleType: 'both' })).ok, false);
  assert.deepEqual(f.calls, []);
});
test('test export reuses normal writer and passes officer attribution', async t => {
  const f = fixture(t);
  const result = await f.request({ action: 'export', raffleType: 'both', requestedBy: 'Evaine' });
  assert.equal(result.ok, true);
  assert.deepEqual(f.calls[0][1].map(e => e.eventId), ['m', 'b']);
  assert.equal(f.calls[0][2].uploadedBy, 'Evaine');
});
test('test reset requires explicit confirmation and a single raffle', async t => {
  const f = fixture(t);
  for (const payload of [{ action: 'close', raffleType: 'biweekly' }, { action: 'close', raffleType: 'both', confirm: true }]) {
    assert.equal((await f.request(payload)).ok, false);
  }
  assert.deepEqual(f.calls, []);
  const result = await f.request({ action: 'close', raffleType: 'monthly', confirm: true });
  assert.equal(result.ok, true);
  assert.deepEqual(f.calls, [['close', 'monthly']]);
  assert.match(result.message, /260926 raffle/);
});
