import test from 'node:test';
import assert from 'node:assert/strict';
process.env.MARIADB_USER ||= 'test';
process.env.MARIADB_PASSWORD ||= 'test';
const actions = await import('./guildsync-database-actions.js');
const { entriesForRafflePeriods } = await import('./raffle-test-socket.js');
const seconds = text => Date.parse(text) / 1000;
const now = seconds('2026-09-30T16:00:00Z');
function select(date, at = now) {
  assert.equal(typeof actions.getRaffleRefreshSelection, 'function');
  return actions.getRaffleRefreshSelection(date, at);
}
function dates(selection) {
  return selection.raffles.map(({ start, end }) => [start, end].map(time => new Date(time * 1000).toISOString()));
}
test('no date selects both currently active periods independently', () => {
  assert.deepEqual(dates(select()), [
    ['2026-09-26T23:00:00.000Z', '2026-10-10T23:00:00.000Z'],
    ['2026-09-26T23:00:00.000Z', '2026-10-24T23:00:00.000Z']
  ]);
});
test('normal date uses containing periods, including different starting dates', () => {
  assert.deepEqual(dates(select('091526')), [
    ['2026-09-12T23:00:00.000Z', '2026-09-26T23:00:00.000Z'],
    ['2026-08-29T23:00:00.000Z', '2026-09-26T23:00:00.000Z']
  ]);
});
test('shared transition date selects new periods at 7 PM, while no date honors current instant', () => {
  assert.deepEqual(dates(select('092626')), dates(select()));
  assert.equal(select(undefined, seconds('2026-09-26T22:59:59Z')).raffles[0].end, seconds('2026-09-26T23:00:00Z'));
  assert.equal(select(undefined, seconds('2026-09-26T23:00:00Z')).raffles[0].start, seconds('2026-09-26T23:00:00Z'));
  assert.deepEqual(dates(select('091226')), dates(select('091526')));
});
test('local boundaries stay at 7 PM across DST and monthly periods can span six weeks', () => {
  const winter = select('110126');
  assert.deepEqual(dates(winter), [
    ['2026-10-24T23:00:00.000Z', '2026-11-08T00:00:00.000Z'],
    ['2026-10-24T23:00:00.000Z', '2026-11-22T00:00:00.000Z']
  ]);
  const summer = select('080126');
  assert.equal((summer.raffles[1].end - summer.raffles[1].start) / 86400, 42);
});
test('invalid MMDDYY dates are rejected and leap dates accepted', () => {
  for (const date of ['023126', '022926', '133126', '000126', '090026', '91526', '09/15/26', ' 091526', '', 91526]) {
    assert.throws(() => select(date), /valid.*MMDDYY/i);
  }
  assert.equal(select('022928').raffles.length, 2);
});

test('export keeps only selected periods: start inclusive, end exclusive, types independent', () => {
  const selection = select('091526');
  const entries = [
    { type: 'biweekly', time: seconds('2026-09-12T22:59:59Z'), eventId: 'old' },
    { type: 'biweekly', time: seconds('2026-09-12T23:00:00Z'), eventId: 'start' },
    { type: 'biweekly', time: seconds('2026-09-26T22:59:59Z'), eventId: 'last' },
    { type: 'biweekly', time: seconds('2026-09-26T23:00:00Z'), eventId: 'next' },
    { type: 'monthly', time: seconds('2026-09-01T16:00:00Z'), eventId: 'monthly-only', ticketAmount: 0 },
    { type: 'other', time: seconds('2026-09-15T16:00:00Z'), eventId: 'bank' }
  ];
  assert.deepEqual(entriesForRafflePeriods(entries, selection.raffles, selection.asOf).map(e => e.eventId), ['monthly-only', 'start', 'last']);
});
