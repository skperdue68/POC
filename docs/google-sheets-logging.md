# Raffle spreadsheet export, archives, and testing

Configure Google access in `NodeJS/GuildSync-Backend-Server/.env`. Restart the
backend after changes. Keep the original spreadsheet ID: rollover creates an
archive copy and prepares the original for new entries.

## Cell layout

| Entries | Rows | Transaction ID | ESO name | Gold | Bonus |
| --- | --- | --- | --- | --- | --- |
| Tickets, both tabs | 5–254 | D | E | F | H |
| Bi-weekly donations | 62–70 | P | Q | R | — |
| 50/50 donations | 36–44 | N | O | P | — |

The first row with both ID and name blank is selected within these bounds.
Duplicate IDs are skipped. A full section produces an error without writing past
its last row. Hidden columns do not affect cell addresses.
Zero-ticket raffle entries are donations; other guild-bank deposits are excluded.
Gold ending in a raffle marker of 1 or 3 has that marker removed; other gold is
unchanged. Manual entries append their note in parentheses after the name.

H contains the awarded bonus-ticket count with a cell note `Bonus: N%` when that
raffle's bonus policy is enabled. Manual tickets always receive 0 extra bonus
tickets and 0%. G and H become visible when bonuses are enabled. No purchased/total
ticket count is written; the sheet calculates it. Disabled bonuses clear H5:H254
values and notes, clear the new row's G value/note, and hide G:H. Other formulas
and formatting are preserved.

Each successful entry write updates bi-weekly R3/R4 or 50/50 P3/P4 with uploader
`name (GuildSync)` and Eastern time, e.g. `9/27/2026 11:07am ET`.
Entry values, bonus note, and metadata form one atomic Sheets batch.
Normal exports still require a successful database insertion/commit.

**Before deploying this layout:** back up your sheet and move existing IDs,
names, and gold to the new columns, or use a fresh test copy with this layout.
This code does not migrate old cells. Duplicate detection uses the new ID columns.

## Delayed archive/reset (personal My Drive)

The original spreadsheet and public link stay unchanged. At sales cutoff,
automatic writes to **both tabs** stop, while committed banking entries continue
to accumulate in MariaDB. After a default four-hour hold, Apps Script copies
the whole spreadsheet as `YYMMDD raffle` using the closed raffle's Eastern draw
date. Only after verifying the copy and its sharing does the backend clear the
closed tab(s), set their next draw dates, and replay missing current-period
database records with the normal bonus policy and transaction-ID deduplication.

Bi-Weekly-only closure preserves the ongoing 50/50 tab. Both closing together
produce one archive. Replay also catches up held entries for an ongoing 50/50.
Entries from closed periods are not inserted into the new raffle. Manually
entered spreadsheet results during the hold are included in the archive.
Keep GuildSync running before cutoff: first enablement arms the next cutoff,
rather than retroactively archiving an unknown existing sheet.

### Apps Script setup

1. In your personal Google Drive, create an archive folder. Prefer a private
   folder so inherited folder permissions do not broaden archive access.
   Copy its ID from the part after `/folders/` in its URL.
2. Open [Apps Script](https://script.google.com/) as the Google account that owns
   the original spreadsheet. Create a standalone project and paste the contents
   of [Archive.gs](../scripts/google-apps-script/Archive.gs) into its code editor.
3. Beside **Services**, click **+**, select **Drive API**, version **v3**, and
   click **Add**. The script uses this advanced service to attach a closure ID
   when creating the copy, so retries can find an already-created archive.
   For a default Apps Script Cloud project the API is enabled automatically;
   for a linked standard Cloud project also enable Google Drive API there.
4. In **Project Settings → Script Properties**, set:
   - `SOURCE_SPREADSHEET_ID`: the existing raffle spreadsheet ID.
   - `ARCHIVE_FOLDER_ID`: the folder ID from step 1.
   - `ARCHIVE_SECRET`: a long random secret (for example 32 random bytes as hex).
   Generate it locally with `node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"`.
5. Choose **Deploy → New deployment → Web app**. Set **Execute as: Me** and
   **Who has access: Anyone**. Authorize the requested Google permissions.
   Copy the deployed URL ending in `/exec`, not the editor or `/dev` URL.
   The endpoint checks the secret in the POST body and only accepts the
   configured source spreadsheet. Do not put the secret in a query string.
6. Keep the service account as an Editor on the original spreadsheet and allow
   it to edit all reset fields, including Bi-Weekly R7 and 50/50 P7.
   Apps Script creates the copy as you; service-account credentials still
   perform normal writes and reset the original.
7. For later script changes, use **Deploy → Manage deployments → Edit → New
   version → Deploy**, retaining the same deployment URL and Script Properties.

The script recreates and checks source user/group/domain/link sharing on the
archive, including anyone-with-link viewer access when present on the source.
It does not change original permissions. Google copying preserves the workbook
content; inspect protected-range behavior during the first live test. It does
not transfer ownership away from your personal account. Sharing or copy failures
block clearing and are detailed in Apps Script's **Executions** log.

### Backend environment

All of these belong in `NodeJS/GuildSync-Backend-Server/.env`:

```dotenv
# Keep existing Sheets ID, service-account file/JSON and tab configuration.
GUILDSYNC_GOOGLE_SHEETS_ROLLOVER_ENABLED=false
GUILDSYNC_GOOGLE_SHEETS_ROLLOVER_DELAY_HOURS=4
GUILDSYNC_GOOGLE_ARCHIVE_WEB_APP_URL=https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec
GUILDSYNC_GOOGLE_ARCHIVE_SECRET=THE_SAME_SECRET_AS_SCRIPT_PROPERTIES
```

The delay is measured from **ticket-sales cutoff**, not draw time. It accepts
non-negative hours (fractions must resolve to whole seconds); 0 means immediate
rollover. A hold's deadline is saved once, so changing the setting does not
shorten an already-started hold. No new bot environment settings are needed.

Remove these obsolete backend settings; the backend no longer reads them:

```dotenv
GUILDSYNC_GOOGLE_OAUTH_CLIENT_ID
GUILDSYNC_GOOGLE_OAUTH_CLIENT_SECRET
GUILDSYNC_GOOGLE_OAUTH_REFRESH_TOKEN
GUILDSYNC_GOOGLE_SHEETS_ARCHIVE_FOLDER_ID
```

The archive folder ID now lives in Apps Script's `ARCHIVE_FOLDER_ID` property.
Keep `GUILDSYNC_GOOGLE_SERVICE_ACCOUNT_FILE` (or JSON) configured. OAuth-only
installations must configure service-account credentials before restarting.
No database schema migration is required. Preserve existing `sheets_rollover_*`
records in `guildsync_settings`: they hold deadlines, archive IDs and recovery
progress. Do not change the source ID or delete recovery state during rollover.
Finish any pending legacy Drive archive/reset before upgrading: its private
archive markers belong to the old application and cannot be verified by the new script.

### Test, then enable

Use a test spreadsheet first. With automatic rollover disabled, enable
`GUILDSYNC_RAFFLE_TEST_COMMANDS_ENABLED=true` in both backend and bot,
restart the services, then run
`/gsr raffle test-close raffle:Bi-Weekly confirm:true`.
This performs an immediate real archive/reset, bypassing the four-hour wait;
it does not advance saved raffle schedules or automatically replay the database.
Inspect the dated archive and the original tab, including R7/P7. Use
`/gsr raffle refresh` to test deduplicated database export afterward.
Test-close writes the next scheduled draw date only on the selected tab;
`/gsr test reset` continues to clear fields without archiving or changing dates.

Once the test succeeds, set `GUILDSYNC_GOOGLE_SHEETS_ROLLOVER_ENABLED=true`
and restart the backend. The existing one-minute scheduler checks whether the
saved deadline has arrived. All spreadsheet-writing commands (including refresh,
test-add, test-close and test-reset) are blocked during a live hold or pending
recovery. Read-only raffle commands and announcement previews remain available.

Archive/reset/replay failures keep writes paused and retry on subsequent ticks.
Retries reuse the archive and atomic reset markers; replay skips IDs already
written. A failed or partial replay is retried before accepting new live writes.
The database remains the durable source for held entries. Backend details are in
`logs/google-sheets.log`; script failures are in Apps Script **Executions**.

### Cleared fields

Both tabs clear D5:F254 values and H5:H254 values/notes, preserve G5:G254,
and hide G/H. Bi-Weekly additionally clears J5:K254, P62:R70, R3:R4 and Q33:Q52.
50/50 additionally clears N36:P44, P3:P4, P25 and M28, preserving J5:K254.
After automatic archive/reset, the next draw date goes in Bi-Weekly R7 and/or
50/50 P7 as a real date formatted `mm/dd/yy`, using America/New_York.
Only closing tabs are prepared. The original file is never renamed or replaced.

References: [Apps Script web apps](https://developers.google.com/apps-script/guides/web),
[advanced Drive service](https://developers.google.com/apps-script/advanced/drive),
[enabling advanced services](https://developers.google.com/apps-script/guides/services/advanced).

## Discord reminders

In `NodeJS/GuildSync-Discord-Bot/.env` (defaults shown):

```dotenv
GUILDSYNC_RAFFLE_BONUS_REMINDER_HOURS=1
GUILDSYNC_RAFFLE_SALES_CLOSE_REMINDER_HOURS=2
```

Comma-separated positive hours enable multiple warnings, such as `6,4,2`.
Messages use the existing `GUILDSYNC_RAFFLE_CHANNEL_ID`. Bonus reminders describe
the active tier's next change/expiration. Reminders appear before the “As of”
line. Simultaneous reminders of the same kind are combined.

## Discord command registration

From `NodeJS/GuildSync-Discord-Bot`, run `npm run deploy` if test commands need
registering after enabling the existing test flag. The prior `/raffle-test`
command is removed. Raffle administration requires the exact **Consigliere**
role and replies privately. `/gsr raffle refresh [date:MMDDYY]` appends missing
selected-period entries and remains available with test commands disabled,
but sheet writes are blocked during a rollover hold. See
[raffle command documentation](raffle-refresh.md) for other commands and examples.

## Diagnostics

Backend stdout and `NodeJS/GuildSync-Backend-Server/logs/google-sheets.log` record
export starts, reads, rows, written values, duplicates, bounds errors and rollover
progress. `GUILDSYNC_GOOGLE_SHEETS_LOG_FILE` overrides the path (absolute or
relative to the backend directory). The backend needs write permission.
Logs contain member names and transaction details; keep them private.

