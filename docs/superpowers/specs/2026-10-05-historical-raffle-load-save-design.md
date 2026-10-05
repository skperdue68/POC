# Historical raffle load and save design

## Approved intent

Historical raffle loads operate on archive spreadsheets, preserving the working spreadsheet for the current raffle. `/gsraffle save <date>` and `/gsr save <date>` capture editable result fields from an archive without resetting it. All implementation changes belong on `feat/historical-raffle-load-save` and go through a pull request; never merge directly to master.

## Commands and date selection

- `/gsr load` and `/gsraffle load` without a date retain current-raffle behavior.
- An explicit date uses the existing MMDDYY resolver. Dates inside a period require no question. On a Bi-Weekly boundary, ask whether the user means the raffle starting or ending on that date. Derive the containing 50/50 raffle from that choice.
- `/gsraffle save date:<MMDDYY>` and its alias `/gsr save date:<MMDDYY>` require a date, the configured Discord guild, and the exact Consigliere role. Add the save subcommand to both existing command builders; do not register a standalone `/save` command. Enforce authorization in both bot and backend. Use the same resolver and boundary buttons as load. Cancel without writes on timeout.
- Preserve the original date argument in responses. A historical load for `091526` instructs the user to use `/gsr save date:091526`, regardless of the selected ending draw date.
- Boundary choices apply to the individual invocation. Saving on a boundary asks again rather than depending on another user's or an earlier command's state.

## Spreadsheet targeting

Resolve the selected periods before any mutation. An explicit date routes to the working spreadsheet only when the selected raffle dates match the working tabs' displayed dates (Bi-Weekly R7 and 50/50 P7) and the selected Bi-Weekly period is current. Any other selection uses an archive, including historical dates and noncurrent future periods. Blank or invalid working dates must never cause a historical selection to overwrite the working spreadsheet.

Each archive contains the selected Bi-Weekly raffle and its containing 50/50 raffle. Locate the archive by selected Bi-Weekly draw date, configured source identity, and archive folder. Verify both tab draw dates against the selected periods before changing an existing archive. Archive names remain `YYMMDD Raffle`, based on the selected Bi-Weekly draw date.

Use a database registry with one canonical archive per configured source and selected Bi-Weekly draw date. Store the archive spreadsheet ID, both raffle periods/draw dates, and preparation/completion status in the existing startup-created `guildsync_settings` table under `raffle_archive_<source-and-date hash>` keys; no new schema is necessary. Bootstrap older archives by a folder lookup and verification of spreadsheet dates, not filename alone. Reject ambiguous duplicates instead of choosing an arbitrary file.

The Apps Script must verify that targets are Google spreadsheets in the configured archive folder, belong to the configured source, and are never the working spreadsheet. Requests may not supply an arbitrary spreadsheet to clear or save.

## Existing archive load

1. Resolve and verify the archive and selected dates.
2. Capture its editable result fields and persist a complete snapshot before clearing. Saving must succeed before any destructive sheet write.
3. Read selected banking entries and saved result values from the database, with existing bonus calculation and period selection.
4. Preflight both tabs and row capacity. Clear/repopulate the target archive in one sheet batch, restore saved result fields and formulas, and write the correct R7/P7 dates.
5. Verify the completed target and return its link, period information, entry count, and `/gsr save` instruction with the original requested date.

Do not append ticket purchases to existing rows. Rebuild from the selected database snapshot, preventing duplicates and removing outdated entries. Preserve formatting and borders using the existing reset implementation.

## Missing archive load

Create a copy of the configured working spreadsheet and place it in the configured archive folder, inheriting the existing archive sharing rules. Give it the selected `YYMMDD Raffle` name. All further writes explicitly target that copy.

Do not capture copied working result values as historical results. Clear copied transaction/result values, preserve template formulas and layout, then populate selected database entries and saved historical result fields. Set Bi-Weekly R7 and 50/50 P7 to the selected ending draw dates even when there are zero entries. Never leave the source's current dates or current winners in the historical copy.

Persist the newly created file ID and preparation state before replay so retries reuse the same copy. Mark it ready only after loading and verification succeed. Do not report success or publish a completion notification for a partial copy. Never trash another archive or advance rollover state as a side effect of historical load.

## Save behavior and persistence

`/gsraffle save` and `/gsr save` locate and verify an existing archive for the selected periods; they do not create an archive, clear cells, reload purchases, or reset the working spreadsheet. If no matching archive exists, return a useful error recommending the matching historical load first.

Capture the existing managed fields:

- Bi-Weekly: Q33:Q52, J5:K254, O55.
- 50/50: P25, M28.

Save nonempty values with their exact cell addresses, raffle type, draw date, and actual archive spreadsheet ID using `guildsync_raffle_archive_cells`. Preserve zero-valued cells. Replace each raffle snapshot transactionally, including deletion of previously saved values now blank. Retain existing formula/template handling; ticket purchase rows are not edited or imported into the banking database by save.

Historical saves must read the selected 50/50 results even if that monthly period was still ongoing when the Bi-Weekly archive was initially created. Monthly result snapshots are keyed by their own draw date and shared across Bi-Weekly archives of the same 50/50 raffle. The latest explicit successful capture is authoritative; an older archive can replace this snapshot when explicitly saved or refreshed. Document this in the save/load response when applicable.

If an archive is replaced through the existing archive operation, migrate registry and saved-result references from the known old archive ID to the new ID. Source ID alone never identifies the replaced file.

## Isolation, concurrency, and recovery

Use the existing Sheets coordination lock for choosing targets, capturing values, and writing data so load/save cannot race rollover or another administrative operation. Do not temporarily mutate the global configured spreadsheet ID. Parameterize the target context for historical operations; ordinary live exports continue targeting the working spreadsheet.

Apps Script operations for historical lookup/copy/read must be idempotent and isolated from rollover's same-name replacement and trashing logic. Validate source, folder, target ID, dates, and registry state again on retry. Share authentication and JSON/error diagnostics with the existing archive client.

Persist complete captures before clearing; on capture/database failures leave sheets intact. On sheet-write failures keep the target's recovery state and report its link as incomplete if useful, without claiming a completed load. Saving failures must not partially replace database snapshots.

## Discord responses

Keep administrative responses ephemeral. Current loads link to the working sheet. Historical loads link to the archive and say:

> Raffle data has been loaded to the archived raffle sheet [HERE](archive-link).
> After updating winners, attendance, bonus tickets, or other result fields, use `/gsr save date:<original MMDDYY>` to save those changes to the database.

Save completion identifies the selected raffle dates, archive link, and number of captured fields. Do not broadcast an ordinary archive-rollover announcement for historical load/save. Existing `/gsr archive` continues archiving the current working raffle and advancing it as before.

## Validation and deployment

Regression tests must prove current loads still target the working sheet, historical loads never mutate it, existing archives save-before-clear, missing archives do not capture copied live results, both new-copy draw dates are correct, blanks delete old records, zero values persist, boundary choices apply to load/save, exact Consigliere authorization is enforced, and retries/concurrent requests cannot create duplicate canonical archives.

Test ambiguous/missing archives, mismatched tab dates, insufficient capacity, capture/database/Google failures, and monthly periods spanning multiple Bi-Weekly raffles. Run the full Node test suite and Apps Script mocked tests. Request code review before commit/PR completion.

Deployment requires backend and Discord bot updates, re-registration of `/gsraffle` and `/gsr` with their new save subcommand, and redeployment of the Apps Script web app for historical archive lookup/copy/read support. Do not perform live Sheets operations or deployment during development without explicit authorization.
