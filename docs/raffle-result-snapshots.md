# Raffle results, historical loads and archive replacement

## Commands

Run `npm run deploy` from `NodeJS/GuildSync-Discord-Bot` after updating the bot. Bulk registration removes the old /gsr command and registers:

- `/gsraffle load [date:MMDDYY]`: rebuild both selected raffle periods from banking records and saved raffle results. No date uses current periods.
- `/gsraffle reset`: clear both tabs' managed values and draw dates without archiving or deleting database records.
- `/gsraffle archive`: archive now, capture results, then prepare and reload both current raffle tabs.

All require the exact **Consigliere** role and respond privately. Existing archive-channel announcements remain enabled through the existing bot .env settings.

The load date may be any day within a period. On a transition date, load selects the NEW period, as before. To load a raffle drawn September 26, 2026, use a date inside its ending period, such as `092526`, rather than its transition date. Bi-Weekly and 50/50 are selected independently.

## Saved fields

| Raffle | Meaning | Cells |
| --- | --- | --- |
| Bi-Weekly | Winners | Q33:Q48 |
| Bi-Weekly | Winnings sent by | O55 |
| Bi-Weekly | Prize amounts to send | S31:S50 |
| Bi-Weekly | Attendance names and bonus tickets | J5:K254 |
| 50/50 | Winner | L23 |
| 50/50 | Winnings sent by | J26 |

Nonempty values retain their exact A1 addresses and types; numeric zero is saved. Formula cells retain both their calculated value at capture and their formula; historical load restores the captured literal value so winners and amounts cannot recalculate. A separate formula-template table supports future resets. Blank literal cells do not create cell entries. Re-archiving a period replaces its saved snapshot, including clearing entries which are now blank.

Snapshots are read from the verified archive, not from a changing live worksheet, and committed before the original is reset. The snapshot identity is raffle type plus period start/end. The period ending on R7/P7 is used for capture; capture does not mistakenly select the new period starting on that date.

50/50 results are saved only when its draw has occurred and its draw date is no later than the Bi-Weekly raffle being archived. Ongoing 50/50 winner/sender cells are preserved during a Bi-Weekly-only rollover without saving them as finalized results.

Historical load clears stale result values and restores the selected period's saved cells to their original rows. Periods with no snapshot have no saved literal results to restore. Existing formulas in managed result cells are preserved when clearing; all other existing layout-preservation rules remain.

## Archive name and replacement

The Apps Script reads **Bi-Weekly R7** and names the copy **YYMMDD Raffle**. October 10, 2026 becomes `261010 Raffle`. R7 must contain a valid Sheets date or MM/DD/YY (or MM/DD/YYYY) text. P7 must also identify a valid 50/50 draw date. The backend verifies both against the raffle schedule.

After creating and verifying the new copy and its sharing, the script moves older same-name spreadsheets in the configured archive folder to **Trash**. It never trashes the original source or the new copy. Replacement creates a new file ID: previously posted links to an old archive do not redirect. The current working spreadsheet link remains unchanged.

Retries use the persisted operation key, not just a filename. Existing archives named with the former YYMMDD convention are not renamed or treated as same-name MMDDYY archives automatically.

## Upgrade and migration

1. Finish any pending archive/reset/replay using the old deployment before this upgrade. Do not remove recovery records or switch script projects mid-recovery.
2. Back up the database and working spreadsheet.
3. Deploy the backend and bot changes. Backend database initialization creates `guildsync_raffle_results` and `guildsync_raffle_result_formulas` idempotently for new or existing installations. A standalone migration is also provided at [20261001_raffle_results.sql](../NodeJS/GuildSync-Backend-Server/migrations/20261001_raffle_results.sql). If migrations are applied separately, run it against the GuildSync application database before starting the updated backend.
4. Copy the updated [Archive.gs](../scripts/google-apps-script/Archive.gs) into the **existing** Apps Script project. Save, then **Deploy ? Manage deployments ? Edit ? New version ? Deploy**. Keep the existing URL and Script Properties.
5. Grant the service account access to all new protected result ranges above, including S31:S50. The Bi-Weekly sheet needs at least column S.
6. Restart backend and bot, then run `npm run deploy` in the bot directory.
7. Verify first on a test spreadsheet/database: archive with known sparse winner/attendance values, load a date inside that period and confirm exact cells; repeat archive and confirm the prior same-name copy is in Trash.

No new .env variables or OAuth credentials are required. The original archive-secret, source-ID, folder and announcement settings remain valid.

The SQL table stores an atomic snapshot header and its sparse cells JSON in one row. This avoids partial header/cell replacement and permits an empty captured snapshot. No existing raffle-result data is automatically backfilled from older archive files. Database failure prevents sheet reset; fix the cause and let the saved operation retry.

After `/gsraffle reset`, run `/gsraffle load` before archiving or leaving automatic rollover enabled: reset deliberately clears the draw dates required to identify an archive.
