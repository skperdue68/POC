import test from 'node:test';
import assert from 'node:assert/strict';
import { deliverArchives, parseArchiveChannels } from './archive-announcements.js';

test('archive channels are optional and deduplicated', () => {
  assert.deepEqual(parseArchiveChannels(''), []);
  assert.deepEqual(parseArchiveChannels('123, 456,123'), ['123','456']);
  assert.throws(() => parseArchiveChannels('bad'), /channel/);
});
test('delivery persists each channel and retries failures without repeating success', async () => {
  let state = {}; const sent = [];
  const archives = [{ archiveId: 'copy', name: '261010 raffle', completedAt: 123, message: 'Shared completion message https://docs.google.com/spreadsheets/d/copy/edit' }];
  const args = { archives, channels: ['123','456'], state, save: async () => {},
    send: async (channel, content) => { if (channel === '456') throw Error('unavailable'); sent.push(content); } };
  await assert.rejects(deliverArchives(args), /unavailable/);
  assert.equal(sent.length, 1);
  assert.equal(sent[0], archives[0].message);
  assert.match(sent[0], /https:\/\/docs.google.com\/spreadsheets\/d\/copy\/edit/);
  args.send = async (channel) => { sent.push(channel); };
  await deliverArchives(args);
  await deliverArchives(args);
  assert.deepEqual(sent.slice(1), ['456']);
});

test('restart reconciles uncertain deliveries and does not send when initial save fails', async () => {
  const state = {};
  const archives = [{ archiveId: 'copy', name: '261010 raffle' }];
  let sends = 0, reconcile;
  await assert.rejects(deliverArchives({ archives, channels: ['123'], state,
    save: async () => { throw Error('disk'); }, send: async () => sends++ }), /disk/);
  assert.equal(sends, 0);
  await deliverArchives({ archives, channels: ['123'], state,
    save: async () => {}, send: async (channel, content, delivery) => { reconcile = delivery.reconcile; } });
  assert.equal(reconcile, true);
});
