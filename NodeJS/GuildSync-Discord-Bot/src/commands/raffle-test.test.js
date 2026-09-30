import test from 'node:test';
import assert from 'node:assert/strict';
import { MessageFlags } from 'discord.js';

function fixture({ action = 'export', raffle = 'both', kind = 'bonus', confirm = true, role = 'Capo', guild = true } = {}) {
  const replies = [], requests = [];
  const interaction = {
    guildId: guild ? (process.env.DISCORD_GUILD_ID || 'guild') : null,
    user: { id: 'user', username: 'fallback' }, member: { displayName: 'Officer Name', roles: { cache: [{ name: role }] } },
    options: { getSubcommand: () => action, getString: name => name === 'raffle' ? raffle : kind, getBoolean: () => confirm },
    reply: async value => replies.push(value), deferReply: async value => replies.push(value), editReply: async value => replies.push(value)
  };
  const socket = { connected: true, timeout(ms) { this.ms = ms; return this; }, emit(event, payload, cb) { requests.push({ event, payload, ms: this.ms }); cb(null, { ok: true, message: 'Test complete.' }); } };
  return { interaction, socket, replies, requests };
}
async function enabled(t) {
  const previous = process.env.GUILDSYNC_RAFFLE_TEST_COMMANDS_ENABLED;
  process.env.GUILDSYNC_RAFFLE_TEST_COMMANDS_ENABLED = 'true';
  t.after(() => { if (previous === undefined) delete process.env.GUILDSYNC_RAFFLE_TEST_COMMANDS_ENABLED; else process.env.GUILDSYNC_RAFFLE_TEST_COMMANDS_ENABLED = previous; });
  return import('./raffle-test.js');
}

test('test command registration is opt-in and exposes only supported actions and choices', async t => {
  const command = await enabled(t);
  assert.equal(command.registrationData({}).length, 0);
  const [definition] = command.registrationData({ GUILDSYNC_RAFFLE_TEST_COMMANDS_ENABLED: 'true' });
  assert.equal(definition.name, 'raffle-test');
  assert.deepEqual(definition.options.map(item => item.name), ['export', 'preview', 'close']);
  assert.equal(definition.options[2].options.find(item => item.name === 'confirm').required, true);
  assert.deepEqual(definition.options[2].options.find(item => item.name === 'raffle').choices.map(item => item.value), ['biweekly', 'monthly']);
});

test('test commands reject disabled execution, missing officer role, DMs and unconfirmed close without requests', async t => {
  const command = await enabled(t);
  for (const options of [{ role: 'Member' }, { guild: false }, { action: 'close', raffle: 'biweekly', confirm: false }]) {
    const f = fixture(options); await command.execute(f.interaction, f.socket);
    assert.equal(f.requests.length, 0); assert.equal(f.replies[0].flags, MessageFlags.Ephemeral);
  }
  process.env.GUILDSYNC_RAFFLE_TEST_COMMANDS_ENABLED = 'false';
  const f = fixture(); await command.execute(f.interaction, f.socket);
  assert.equal(f.requests.length, 0); assert.match(f.replies[0].content, /disabled/i);
});

test('officer exports and confirmed close send bounded writes with display-name attribution and private replies', async t => {
  const command = await enabled(t);
  for (const [action, raffle] of [['export', 'both'], ['close', 'monthly']]) {
    const f = fixture({ action, raffle }); await command.execute(f.interaction, f.socket);
    assert.equal(f.replies[0].flags, MessageFlags.Ephemeral);
    assert.deepEqual(f.requests, [{ event: 'guildsync:raffle-test', ms: 120000, payload: { action, raffleType: raffle, confirm: true, requestedBy: 'Officer Name' } }]);
    assert.match(f.replies[1].content, /Test complete/);
    assert.deepEqual(f.replies[1].allowedMentions, { parse: [] });
  }
});

test('preview uses real snapshot without a write event, labels test output and displays boundary details', async t => {
  const command = await enabled(t);
  for (const kind of ['bonus', 'sales']) {
    const f = fixture({ action: 'preview', raffle: 'biweekly', kind });
    const snapshot = { ok: true, asOf: 100, raffles: [{ type: 'biweekly', bonusEnabled: true, bonusPercent: 25, nextBonusPercent: 10, bonusExpiresAt: 1000, salesEnd: 2000, salesOpen: true, prizeGold: 200000 }] };
    f.socket.emit = (event, payload, cb) => { f.requests.push({ event }); cb(null, structuredClone(snapshot)); };
    await command.execute(f.interaction, f.socket);
    assert.deepEqual(f.requests, [{ event: 'guildsync:request-active-raffles' }]);
    assert.equal(f.replies[0].flags, MessageFlags.Ephemeral);
    assert.match(f.replies[1].content, /TEST PREVIEW/);
    assert.match(f.replies[1].content, kind === 'bonus' ? /25% ticket bonus changes to 10%.*<t:1000:F>/ : /sales close.*<t:2000:F>/);
    assert.equal(snapshot.reminders, undefined);
  }
});

test('preview explains absent bonus and backend write failures are reported privately', async t => {
  const command = await enabled(t);
  const f = fixture({ action: 'preview', raffle: 'monthly' });
  f.socket.emit = (_event, _payload, cb) => cb(null, { ok: true, raffles: [{ type: 'monthly', bonusEnabled: false }] });
  await command.execute(f.interaction, f.socket);
  assert.match(f.replies[1].content, /no active.*bonus/i);
  for (const failure of ['timeout', 'rejected', 'disconnected']) {
    const write = fixture();
    write.socket.connected = failure !== 'disconnected';
    write.socket.emit = (_event, _payload, cb) => failure === 'timeout' ? cb(new Error('timeout')) : cb(null, { ok: false, message: 'Archive refused.' });
    await command.execute(write.interaction, write.socket);
    assert.match(write.replies[1].content, /timed out|Archive refused|unavailable/i);
    assert.equal(write.replies[0].flags, MessageFlags.Ephemeral);
  }
});
