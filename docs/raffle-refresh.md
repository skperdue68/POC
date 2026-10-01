# Raffle spreadsheet administration

After updating backend and bot, restart both and run `npm run deploy` from
`NodeJS/GuildSync-Discord-Bot`. Deployment replaces the guild command list,
removing the old test commands and registering these production commands:

| Command | Operation |
| --- | --- |
| `/gsr raffle refresh` | Clear both managed raffle areas, reload current periods and set draw dates. |
| `/gsr raffle refresh date:091526` | Clear/reload both periods containing the supplied date. |
| `/gsr raffle clear` | Clear both managed raffle areas, including R7/P7 draw dates; leave database records intact. |
| `/gsr raffle archive` | Archive immediately, reset both original tabs, and restore current database entries and draw dates. |

All three commands require the **exact Consigliere role**, checked by both bot
and backend. Progress/results/errors are ephemeral. `/gsa post`, `start` and
`stop` retain application-posting behavior. No test enablement flag is required.
Remove `GUILDSYNC_RAFFLE_TEST_COMMANDS_ENABLED` from both .env files.
The `/gsr test` group, test-preview/test-close and legacy `/raffle-test` commands
are retired. Redeploying the command list removes them from Discord.

## Archive and holds

During the automatic four-hour hold, refresh and clear are blocked. Archive
explicitly bypasses the hold and finishes the pending rollover immediately.
Outside a hold it archives and rebuilds the current raffle periods without
advancing their schedules. The archive copy is named for the closed draw during
rollover, or the current Bi-Weekly draw for an on-demand archive before cutoff.
Both tabs are cleared and repopulated, including any ongoing 50/50 entries.

The original spreadsheet ID and public link stay unchanged. Archive must succeed
and be verified before clearing. A failed/partial operation resumes its saved job;
it does not deliberately create another copy on retry. After a completed command,
another archive command requests another snapshot (names may match).

See [Apps Script deployment and environment setup](google-sheets-logging.md#apps-script-setup).
Archive requires the web app; refresh/clear only need Sheets credentials.

## Date selection

Dates must contain exactly six digits, `MMDDYY` (years 2000–2099). Invalid dates,
including February 31 and February 29 in a non-leap year, are rejected before any
sheet update. An omitted date uses the current instant; a supplied date is
evaluated at **7:00 PM America/New_York**, the local timezone used by the repository.
Daylight-saving offsets are calculated for each boundary.

As approved, this uses the repository's existing schedule anchors and its rule
for the last biweekly raffle in a month; there is no stored raffle-period table.
Bi-Weekly and 50/50 are evaluated independently, including 50/50 periods spanning
six weeks. On a transition date the new raffle beginning that evening wins.
Each export includes committed entries at or after the selected start and before
the selected end, never future-dated entries beyond the export's current time.
The response shows the lookup date and both selected periods.

## What refresh and clear remove

Both use the same configured closure ranges. Both preserve G5:G254 and hide G/H
during preparation. Refresh shows G/H again when exported bonus entries require it.

| Cleared area | Bi-Weekly | 50/50 |
| --- | --- | --- |
| Ticket ID/name/gold values | D5:F254 | D5:F254 |
| Bonus values and notes | H5:H254 | H5:H254 |
| Donation ID/name/gold values | P62:R70 | N36:P44 |
| Updater name/time | R3:R4 | P3:P4 |
| Additional values | J5:K254, Q33:Q52 | P25, M28 |
| Draw date | R7 | P7 |

Refresh writes the selected period's draw date into R7/P7 as a real date formatted
`mm/dd/yy` in America/New_York. Clear leaves those dates empty. J5:K254 is
preserved on 50/50. Other cells, formats and protections remain unchanged.

Refresh clears and repopulates both sheets in one atomic batch after capacity
checks. Empty results still clear managed ranges and set dates/attribution.
Manual edits and synthetic test records in managed ranges are removed.
Service-account editing permission is needed on every cleared/date field.

Refresh uses existing member names, manual notes, gold-marker removal and bonus
calculations. It deduplicates input transaction IDs and rebuilds from the database,
so repeated refreshes do not accumulate copies. It changes neither database
entries nor the raffle schedule. Historical refresh fills the original file
with historical data; ordinary live writes and rollover still follow the current
schedule, so use a separate configured test spreadsheet for historical inspection.

## Operations

Clear does not pause later live writes. Use refresh to restore database data after
a clear. During automatic rollover, both tabs are rebuilt from current banking
periods, restoring ongoing 50/50 data as well as deposits received during the hold.
Backend Sheets logs record requests and written rows. If Discord times out,
inspect those logs before retrying; an operation may still be running.
