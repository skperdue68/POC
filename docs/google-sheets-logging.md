# Raffle spreadsheet export, archives, and testing

Configure Google access in `NodeJS/GuildSync-Backend-Server/.env`. Restart the
backend after changes. Keep the original spreadsheet ID: rollover creates an
archive copy and prepares the original for new entries.

## Cell layout

| Entries | Rows | Transaction ID | ESO name | Gold | Bonus |
| --- | --- | --- | --- | --- | --- |
| Tickets, both tabs | 5–254 | D | E | F | G |
| Bi-weekly donations | 63–70 | O | P | Q | — |
| 50/50 donations | 36–44 | M | N | O | — |

The first row with both ID and name blank is selected within these bounds.
Duplicate IDs are skipped. A full section produces an error without writing past
its last row. Hidden columns do not affect cell addresses.
Zero-ticket raffle entries are donations; other guild-bank deposits are excluded.
Gold ending in a raffle marker of 1 or 3 has that marker removed; other gold is
unchanged. Manual entries append their note in parentheses after the name.

G contains the awarded bonus-ticket count with a cell note `Bonus: N%` when that
raffle's bonus policy is enabled. Manual tickets always receive 0 extra bonus
tickets and 0%. G becomes visible for a bonus entry. No purchased/total ticket
count is written; the sheet calculates it. Disabled bonuses clear G's value and
note on the newly written row. Other formulas and formatting are preserved.

Each successful entry write updates Q3/Q4 on either raffle sheet with uploader
`name (GuildSync)` and Eastern time, e.g. `9/27/2026 11:07am ET`.
Entry values, bonus note, and metadata form one atomic Sheets batch.
Normal exports still require a successful database insertion/commit.

**Before deploying this layout:** back up your sheet and move existing IDs,
names, and gold to the new columns, or use a fresh test copy with this layout.
This code does not migrate old cells. Duplicate detection uses the new ID columns.

## Automatic archive/reset

Backend `.env`:

```dotenv
GUILDSYNC_GOOGLE_SHEETS_ROLLOVER_ENABLED=true
GUILDSYNC_GOOGLE_SHEETS_ARCHIVE_FOLDER_ID=your_destination_folder_id
```

The folder ID is the part after `/folders/` in its Drive URL, not its name.
Enable **Google Drive API** as well as **Google Sheets API** in your Cloud project.
Configure one of the authentication options below before enabling rollover.
Ordinary exports work with rollover disabled (the default).

At sales cutoff, checked every minute, the backend copies the entire spreadsheet
as `YYMMDD raffle`, using the just-closed raffle's Eastern draw date. For example,
September 26, 2026 becomes `260926 raffle`. It verifies the archive before
resetting the original. A copy failure never clears the original. When both
raffles close together, one archive preserves both before both reset.

Only the closing raffle tab is cleared:

- D5:G254 values and G5:G254 notes; column G is hidden.
- Bi-weekly O62:Q70 values, or 50/50 M36:O44 values.

Other cells, formatting, metadata fields, and the non-closing tab stay intact.
New entries keep using the original spreadsheet ID. Archives are snapshots;
GuildSync does not write subsequent entries into them.

First enablement arms the next cutoff without clearing existing data. Preserve
the `sheets_rollover_*` records in `guildsync_settings`, which track progress
across restarts. A database lock serializes exports and rollover; atomic sheet
markers prevent repeat clearing after a lost response. Failed rollover blocks
exports until it finishes. Late entries for already archived periods are logged
and skipped; reconcile these in the archive manually. No manual schema changes
are required.

## Personal Drive authentication

A service account can edit an existing spreadsheet shared with it, but cannot
own new Drive files. To archive in your personal **My Drive**, use your Google
account's OAuth credentials: the backend then makes copies as you. The source
spreadsheet ID stays the same and the spreadsheet need not be public.

1. Enable Sheets API and Drive API. Configure the Google Auth Platform consent
   screen; while testing, add your own account as a test user.
2. Create an OAuth client of type **Web application** with authorized redirect URI
   `https://developers.google.com/oauthplayground`.
3. Open [Google OAuth Playground](https://developers.google.com/oauthplayground/).
   In settings, select **Use your own OAuth credentials**, enter the client ID
   and secret, and use offline access with consent prompted.
4. Authorize these two scopes, signing in with the account that can edit the
   source spreadsheet and create files in the archive folder:
   `https://www.googleapis.com/auth/spreadsheets` and
   `https://www.googleapis.com/auth/drive`.
5. Exchange the authorization code for tokens. Put the **refresh token**, not
   the short-lived access token, in the backend `.env`:

```dotenv
GUILDSYNC_GOOGLE_OAUTH_CLIENT_ID=your_client_id
GUILDSYNC_GOOGLE_OAUTH_CLIENT_SECRET=your_client_secret
GUILDSYNC_GOOGLE_OAUTH_REFRESH_TOKEN=your_refresh_token
```

A refresh token takes precedence over service-account JSON. Keep these credentials
private on the backend. External OAuth apps in **Testing** mode normally issue
refresh tokens expiring after seven days for these scopes; configure the consent
screen appropriately before ongoing production use.

Alternatively, keep service-account authentication and use an archive folder in
a Google Workspace **Shared Drive**, granting the service account permission to
create files there and edit the source. A shared folder in personal My Drive is
**not** a Shared Drive. Leave the OAuth variables empty for this option.

Google references: [Shared Drive ownership](https://developers.google.com/workspace/drive/api/guides/about-shareddrives),
[offline OAuth](https://developers.google.com/identity/protocols/oauth2/web-server#offline),
[refresh-token expiration](https://developers.google.com/identity/protocols/oauth2#expiration).

## Discord reminders

In `NodeJS/GuildSync-Discord-Bot/.env` (defaults shown):

```dotenv
GUILDSYNC_RAFFLE_BONUS_REMINDER_HOURS=1
GUILDSYNC_RAFFLE_SALES_CLOSE_REMINDER_HOURS=2
```

Comma-separated positive hours enable multiple warnings: e.g. sales close
`2,0.5` for two hours and thirty minutes before cutoff. Messages use the existing
`GUILDSYNC_RAFFLE_CHANNEL_ID`. Bonus reminders describe the active tier's next
change/expiration. Deliveries use durable deduplication alongside regular
announcements. The “As of” line appears first.

## Temporary Discord test commands

Use a **test spreadsheet ID and archive folder** while testing: export and close
commands write to the configured sheet. Enable this in **both** `.env` files:

```dotenv
GUILDSYNC_RAFFLE_TEST_COMMANDS_ENABLED=true
```

Restart both processes. From `NodeJS/GuildSync-Discord-Bot`, run `npm run deploy`
to register `/raffle-test`. Execution requires a Consigliere, Capo, or Caporegieme
role in the configured server. Every response is ephemeral.

- `/raffle-test export raffle:Bi-Weekly` (or `50/50`/`Both`) exports current-period
  database entries, including donations, through the normal writer with duplicate
  checks, bonus handling, and bounds. It does not insert database rows or grant tickets.
- `/raffle-test preview kind:Bonus change or expiration raffle:Bi-Weekly`, or choose
  `Sales close`, previews the warning with current raffle data. It does not change
  settings, clocks, announcement state, or post publicly. No active bonus produces
  an explanatory response.
- `/raffle-test close raffle:Bi-Weekly confirm:true` (or `50/50`) makes a real
  archive and clears only the selected tab in the configured original. The name
  uses that raffle's draw date. It does not advance actual dates, close sales, or
  change automatic rollover progress. Keep automatic rollover disabled for an
  isolated test; export again to refill from the database after testing reset.

If a command times out, check the sheet and backend log before retrying; a running
operation may still finish. Each explicit close test can create another archive.
When done, set the test flag to `false` in both files, restart, and run
`npm run deploy` again to remove the command from Discord.

## Diagnostics

Backend stdout and `NodeJS/GuildSync-Backend-Server/logs/google-sheets.log` record
export starts, reads, chosen rows, exact written columns/values, duplicates,
bounds errors, archive IDs, resets, and Google error details.
`GUILDSYNC_GOOGLE_SHEETS_LOG_FILE` overrides the path (absolute, or relative to
the backend directory). The backend needs write permission. Logs contain member
names and transaction details; keep them private.

