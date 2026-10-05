import test from 'node:test';
import assert from 'node:assert/strict';
import { Collection } from 'discord.js';
import { sendRaffleAnnouncement } from './raffle-announcements.js';
import { formatRaffles } from './raffle.js';

const snapshot = { asOf: 1000, raffles: [{ type: 'biweekly', prizeGold: 200000, drawCount: 1, totalTickets: 10, drawTime: 10000, salesEnd: 6400, salesOpen: true }] };
const delivery = { id: 'saved-delivery', createdAt: 1000, reconcile: true };
function fixture(messages) {
  let sends = 0;
  const channel = { guildId: 'guild', isTextBased: () => true, permissionsFor: () => ({ has: () => true }),
    messages: { fetch: async () => new Collection(messages.map((message, i) => [String(i), message])) },
    send: async options => { sends++; assert.equal(options.nonce, delivery.id); assert.equal(options.enforceNonce, true); } };
  const client = { user: { id: 'bot' }, channels: { fetch: async () => channel } };
  return { client, channel, sends: () => sends };
}
test('restart reconciliation finds an already accepted announcement without sending again', async () => {
  const f = fixture([{ author: { id: 'bot' }, content: formatRaffles(snapshot), createdTimestamp: 1000000 }]);
  await sendRaffleAnnouncement(f.client, 'channel', 'guild', snapshot, delivery);
  assert.equal(f.sends(), 0);
});
test('slash responses do not suppress announcements and history errors do not cause blind resends', async () => {
  const f = fixture([{ author: { id: 'bot' }, content: formatRaffles(snapshot), createdTimestamp: 1000000, interactionMetadata: {} }]);
  await sendRaffleAnnouncement(f.client, 'channel', 'guild', snapshot, delivery);
  assert.equal(f.sends(), 1);
  f.channel.messages.fetch = async () => { throw new Error('history unavailable'); };
  await assert.rejects(sendRaffleAnnouncement(f.client, 'channel', 'guild', snapshot, delivery), /history unavailable/);
  assert.equal(f.sends(), 1);
});

test('a reminder that expires during channel lookup is not posted', async () => {
  const f = fixture([]);
  await sendRaffleAnnouncement(f.client, 'channel', 'guild', snapshot, { ...delivery, reconcile: false, expiresAt: 1 });
  assert.equal(f.sends(), 0);
});

test('channel archive notification includes sheet link buttons without changing reconciliation content',async()=>{
 const f=fixture([]);
 const content='Archived [HERE](https://docs.google.com/spreadsheets/d/archive/edit). Working [HERE](https://docs.google.com/spreadsheets/d/working/edit).';
 let sent;f.channel.send=async value=>{sent=value;};
 await sendRaffleAnnouncement(f.client,'channel','guild',null,{...delivery,reconcile:false,content});
 assert.equal(sent.content,content);
 assert.deepEqual(sent.components[0].toJSON().components.map(button=>button.url),[
  'https://docs.google.com/spreadsheets/d/archive/edit','https://docs.google.com/spreadsheets/d/working/edit']);
});
