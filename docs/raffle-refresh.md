# Raffle spreadsheet refresh

After updating the backend and Discord bot, restart both. In
`NodeJS/GuildSync-Discord-Bot`, run `npm run deploy` to replace the guild's command
registrations. This removes `/raffle-test` and adds:

Raffle administration has moved from `/gsa` to `/gsr`. Deployment replaces the
guild command list, removing the old `/gsa raffle` and `/gsa test` paths while
retaining `/gsa post`, `/gsa start`, and `/gsa stop` for applications.
Restart the bot as well as running `npm run deploy` so routing matches registration.

- `/gsr raffle refresh` — refresh both Bi-Weekly and 50/50 using the current time.
- `/gsr raffle refresh date:091526` — refresh both periods containing September 15, 2026.
- `/gsr raffle test-preview kind:Sales close raffle:Both` — privately preview reminders.
- `/gsr raffle test-close raffle:Bi-Weekly confirm:true` — actually archive/reset that tab.
- `/gsr test add name:tester gold:5000 raffle:Bi-Weekly` — append synthetic data
  using a generated transaction ID and the current bonus. The name can be invented;
  it needs no GuildSync member or application record. Add `donation:true` to use
  the donation area with zero tickets. This writes only to the spreadsheet and
  returns an ephemeral result; the exact Consigliere role is required.

Every raffle action requires the **exact `Consigliere` role** in the configured
Discord server. Capo, Caporegieme, and differently capitalized role names are not
accepted. The backend also checks its synchronized Discord role records before
writes. If authorization fails unexpectedly, check role synchronization. All
progress, results, and errors are ephemeral. Existing `/gsa post`, `start`, and
`stop` retain their behavior. Discord does not provide per-subcommand visibility
for named roles; execution is restricted even if users can see the command name.

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

## What refresh replaces

Refresh uses the configured original spreadsheet and existing tab names. It is
append-only: it preserves existing cells and asks the live writer to append only
transaction IDs that are not already present. It reuses the live writer's member names, manual notes,
gold-marker removal, bonus handling, and update attribution:

| Data | Bi-Weekly | 50/50 |
| --- | --- | --- |
| Ticket ID / name / gold | D5:F254 | D5:F254 |
| Bonus count and percentage note | H5:H254 | H5:H254 |
| Donation ID / name / gold | P62:R70 | N36:P44 |
| Updater / Eastern timestamp | R3 / R4 | P3 / P4 |

Column G formulas and other cells are preserved. Bonus columns G/H are shown
when exported entries have bonuses enabled. Repeating a refresh skips existing
transaction IDs. An empty result makes no sheet writes, so protected cells are
left alone. Do not store unrelated manual spreadsheet data inside managed ranges.

Live writes and scheduled archive/reset retain their existing behavior.
Historical refresh appends the selected snapshot's missing data; subsequent
deposits and rollover continue normally.
Refresh does not change database entries, raffle dates, or award tickets.

## Environment and migration

No new environment variables, credentials, dependencies, or database migrations
are required. Refresh uses the existing backend Google Sheets configuration and
does **not** depend on `GUILDSYNC_RAFFLE_TEST_COMMANDS_ENABLED`.

For `test-preview` and `test-close`, retain
`GUILDSYNC_RAFFLE_TEST_COMMANDS_ENABLED=true` in the bot `.env`; close also requires
the flag in the backend `.env`. Set it in both for testing. When finished, set
both to `false`, restart, and run `npm run deploy` again: refresh remains available
and the test subcommands disappear. Test-close is a real write operation; use a
test spreadsheet while testing it.

Failures and written rows appear in the existing backend Sheets log. A timeout
can occur after a write was accepted; inspect the log before retrying. Refresh
is safe to repeat, while every confirmed test-close may create another archive.
