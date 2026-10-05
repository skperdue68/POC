# Raffle spreadsheet commands

Updated October 5, 2026. The [user guide](GuildSync-User-Guide.md) is the everyday reference; the [detailed help](GuildSync-Detailed-Help.md#banking-spreadsheets-archives-and-updates) covers selection, recovery, and configuration.

All commands below require the exact **Consigliere** Discord role, checked by the bot and synced backend role records, and respond privately. `/gsr` is an exact alias of `/gsraffle`.

| Command | Operation |
| --- | --- |
| `/gsraffle load` | Rebuild both current working tabs from the database and set draw dates. |
| `/gsraffle load date:092526` | Load the Bi-Weekly raffle containing September 25, 2026, and its containing 50/50 period. Historical selections rebuild their archive, not the working sheet. A missing historical archive is created in the archive folder. |
| `/gsraffle update date:092526` | Save supported editable result fields from the matching ready archive to the database; keep the sheet contents/ID. |
| `/gsraffle reset` | Clear managed working data and R7/P7; retain database records. Run `load` afterward. |
| `/gsraffle archive` | Archive the current file, save result fields, reset both working tabs, and restore current database data. |

Canonical dates are valid zero-padded **MMDDYY** dates in 2000–2099, interpreted in America/New_York. **MM/DD/YY** and **MM-DD-YY** translate automatically. Unpadded month/day input is offered for confirmation only when it has one valid interpretation; ambiguous/impossible input fails and specifies the format. Confirm within one minute before any change, or the operation cancels. At a Bi-Weekly boundary, choose **Starts on this date** or **Ends on this date** within one minute. The containing 50/50 raffle is selected automatically. Use the normalized zero-padded lookup date and the same boundary choice when running `update` after a historical load.

Historical load finds the archive by `YYMMDD Raffle` name inside the configured archive folder. It preserves an existing ID, captures supported edits before rebuilding, or creates/prepares a new copy with the requested dates. Update requires an existing ready archive and imports result fields, not ticket purchases. Details and persistence tables are in [result snapshots](raffle-result-snapshots.md).

Current load/reset are blocked during an unfinished rollover hold. Manual archive can complete the delayed rollover immediately. All archive operations verify the copy and save results before clearing originals. Failure recovery retains database records and reuses persisted operation identity. The working link stays stable; deliberate replacement of a same-name archive creates a new archive ID.

Reset clears ticket/donation/result values, bonus notes, updater values, and draw dates. G formulas remain. Bi-Weekly J5:K254 has managed formatting cleared **except borders**; 50/50 J5:K254 is preserved. See the detailed help for exact ranges.

After slash command definitions change, run `npm run deploy` in the bot directory. Retired `/save`, `/gsr save`, `/gsr raffle refresh`, `clear`, and test command forms are not the current Discord commands. No test enablement flag is required. For archive/historical setup, use the [Apps Script guide](google-apps-script-setup.md).
