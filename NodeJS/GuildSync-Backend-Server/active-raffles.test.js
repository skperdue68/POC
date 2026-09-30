import test from 'node:test';
import assert from 'node:assert/strict';
process.env.MARIADB_USER ||= 'test';
process.env.MARIADB_PASSWORD ||= 'test';
const actions = await import('./guildsync-database-actions.js');

const cutoff = 1781996400;
const draw = cutoff + 3600;
function db(entries) {
  return { async execute(sql) {
    if (sql.includes('JSON_ARRAYAGG')) return [[{ banking_json: entries }]];
    if (sql.includes('guildsync_raffle_bonus')) return [[]];
    throw new Error(sql);
  } };
}
const rows = [
  { type: 'biweekly', time: cutoff - 100, amount: 1000001, ticketAmount: 100 },
  { type: 'monthly', time: cutoff - 100, amount: 2000003, ticketAmount: 200 },
  { type: 'biweekly', time: cutoff + 100, amount: 9000001, ticketAmount: 900 },
  { type: 'monthly', time: cutoff + 100, amount: 9000003, ticketAmount: 900 }
];
test('reports prize pots and fixed draws, retaining the closing raffle until draw time', async () => {
  assert.equal(typeof actions.getActiveRaffleSummary, 'function');
  for (const now of [cutoff - 1, cutoff, cutoff + 1, draw - 1]) {
    const result = await actions.getActiveRaffleSummary(db(rows), now);
    const [biweekly, monthly] = result.raffles;
    assert.equal(biweekly.prizeGold, 600000);
    assert.equal(biweekly.drawCount, 3);
    assert.equal(biweekly.totalTickets, 100);
    assert.equal(monthly.prizeGold, 1000000);
    assert.equal(monthly.totalTickets, 200);
    assert.equal(biweekly.drawTime, draw);
    assert.equal(biweekly.salesOpen, now < cutoff);
  }
});
test('at draw time switches to the next raffle, preserving the actual sales window', async () => {
  const result = await actions.getActiveRaffleSummary(db(rows), draw);
  for (const raffle of result.raffles) {
    assert.ok(raffle.drawTime > draw);
    assert.equal(raffle.totalTickets, 900);
    assert.equal(raffle.activeStart, draw);
  }
});
test('empty raffles advertise zero prize gold and zero draws', async () => {
  const result = await actions.getActiveRaffleSummary(db([]), cutoff);
  assert.equal(result.raffles[0].prizeGold, 0);
  assert.equal(result.raffles[0].drawCount, 0);
  assert.equal(result.raffles[1].prizeGold, 0);
});

test('Sheets cutoff windows advance immediately after sales end while public draw remains pending', () => {
  assert.equal(typeof actions.getSheetsRaffleWindows, 'function');
  const closing = actions.getSheetsRaffleWindows(cutoff);
  assert.deepEqual(closing.map(window => window.salesEnd), [cutoff, cutoff]);
  assert.deepEqual(closing.map(window => window.drawTime), [draw, draw]);
  const next = actions.getSheetsRaffleWindows(cutoff + 1);
  assert.ok(next.every(window => window.salesEnd > cutoff));
});
