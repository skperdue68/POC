import test from 'node:test';
import assert from 'node:assert/strict';
import { MessageFlags } from 'discord.js';
import { createGsrCommand } from './gsa-raffle.js';

test('clear/archive act on both raffles, reply privately and retire old commands', async () => {
  const calls = [], replies = [];
  let action = 'clear';
  const interaction = {
    guildId: process.env.DISCORD_GUILD_ID || 'guild', user: { id: 'officer' },
    member: { displayName: 'Officer', roles: { cache: [{ name: 'Consigliere' }] } },
    options: { getSubcommand: () => action },
    reply: async value => replies.push(value), deferReply: async value => replies.push(value), editReply: async value => replies.push(value)
  };
  const socket = { connected: true, timeout() { return this; }, emit(event, payload, callback) {
    calls.push({ event, payload }); callback(null, { ok: true, message: 'Both sheets updated.' });
  } };
  const command = createGsrCommand();
  for (action of ['reset', 'archive']) {
    const start = replies.length;
    await command.execute(interaction, socket);
    assert.equal(replies[start].flags, MessageFlags.Ephemeral);
    assert.equal(calls.at(-1).event, 'guildsync:raffle-manage');
    assert.deepEqual(calls.at(-1).payload, { action: action === 'reset' ? 'clear' : action, discordUserId: 'officer', requestedBy: 'Officer' });
  }
  for (action of ['add', 'refresh', 'clear', 'test-preview', 'test-close']) {
    await command.execute(interaction, socket);
    assert.match(replies.at(-1).content, /retired/);
  }
  assert.equal(calls.length, 2);
});
