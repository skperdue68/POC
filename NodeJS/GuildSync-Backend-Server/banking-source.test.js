import test from 'node:test';
import assert from 'node:assert/strict';
import { bankingSource } from './banking-source.js';
process.env.MARIADB_USER ||= 'test';
process.env.MARIADB_PASSWORD ||= 'test';

test('attribution retains the source prefix and fits the expanded column', () => {
  assert.equal(bankingSource('GuildSyncBanking', 'evainefaye'), 'GuildSyncBanking (evainefaye)');
  assert.equal(bankingSource('GuildSyncBanking', ''), 'GuildSyncBanking');
  assert.ok(Array.from(bankingSource('S'.repeat(64), 'x'.repeat(300))).length <= 255);
});

test('manual inserts store attribution for both raffle types', async () => {
  const { addManualBiweeklyTicketEntry } = await import('./guildsync-database-actions.js');
  const previous = process.env.GUILDSYNC_GOOGLE_SHEETS_ENABLED;
  process.env.GUILDSYNC_GOOGLE_SHEETS_ENABLED = 'false';
  try {
    for (const [type, prefix] of [['biweekly', 'ManualBiweeklyTicket'], ['monthly', 'ManualMonthlyTicket']]) {
      const db = { async execute(sql, params) {
        if (sql.includes('INSERT IGNORE')) {
          assert.equal(params[7], `${prefix} (evainefaye)`);
          assert.equal(params[8], 'FFTG');
        }
        return [{ affectedRows: 1 }];
      } };
      const result = await addManualBiweeklyTicketEntry(db, { account_name: 'Buyer', ticket_type: type, tickets: 5, gold_value: 0, addedBy: 'evainefaye', note: 'FFTG' });
      assert.equal(result.entry.dataSource, `${prefix} (evainefaye)`);
      assert.equal(result.entry.note, 'FFTG');
    }
  } finally {
    if (previous === undefined) delete process.env.GUILDSYNC_GOOGLE_SHEETS_ENABLED;
    else process.env.GUILDSYNC_GOOGLE_SHEETS_ENABLED = previous;
  }
});

