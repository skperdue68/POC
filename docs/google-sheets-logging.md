# Google Sheets banking export, rollover, and diagnostics

The current [detailed help](GuildSync-Detailed-Help.md#banking-spreadsheets-archives-and-updates) documents data flow, managed ranges, historical archives, result storage, and recovery. The [environment reference](GuildSync-Detailed-Help.md#backend-google-sheets-and-archives) lists every relevant setting. For Google account setup, follow [Apps Script setup](google-apps-script-setup.md).

## Enablement

Backend Sheets export defaults disabled. Configure `GUILDSYNC_GOOGLE_SHEETS_ENABLED`, working spreadsheet ID, service-account file or inline JSON, and exact tab titles. The account needs editing rights on all managed/protected fields. Spreadsheet writes occur after database commit; failures do not discard banking entries.

Archive/historical load/update require the Apps Script `/exec` URL and matching secret, with the working source/folder IDs configured in Script Properties. The old Google OAuth/folder environment settings are retired.

## Period filtering and rollover

Live export reads Bi-Weekly R7 and 50/50 P7. Incoming purchases outside that tab's displayed raffle remain only in the database until a matching load/rollover. Empty or invalid dates also defer writes. Transaction IDs prevent repeated insertion.

Automatic rollover is independently disabled by default. When enabled, sheet writes pause at sales cutoff while the database continues accepting uploads. After `GUILDSYNC_GOOGLE_SHEETS_ROLLOVER_DELAY_HOURS` (default 4), the owner-authorized copy is verified and result values saved before both original tabs are reset and current entries replayed. An ongoing 50/50 raffle is restored too. Archive name is YYMMDD Raffle; working file ID stays stable. Failures retain recovery state and pause destructive follow-up until fixed.

## Commands and fields

`/gsr` aliases `/gsraffle`; subcommands are `load [date:MMDDYY]`, `update date:MMDDYY`, `reset`, and `archive`. Exact Consigliere is required. Historical load uses its archive and preserves the live file. Boundary clarification applies to Bi-Weekly, with containing 50/50 derived automatically. See [command reference](raffle-refresh.md).

Managed clearing removes ticket/bonus/donation/updater/result values. Bi-Weekly J5:K254 clears managed formatting while retaining borders. G formulas are preserved. Reset empties R7/P7; load restores dates. Sparse saved result fields and additional general result ranges are detailed in [result snapshots](raffle-result-snapshots.md).

## Logs

Backend stdout and `logs/google-sheets.log` report batch summaries, deferred out-of-period counts, filenames, operation/recovery progress, and failures. `GUILDSYNC_GOOGLE_SHEETS_LOG_FILE` overrides the path (relative to backend directory or absolute). Routine transaction read/write value dumps have been reduced. Temporary nonempty archive-field diagnostics remain for Q33:Q52, J5:K254, O55, P25, and M28. No row-debug .env toggle exists.

Bot logs show expected archive name, lookup date/boundary choice, search matches, archive folder, selected name/ID, created flag, and update/read identity. Ticket verification logs show requested account and returned ticket data. Treat operational logs as private member data.

An invalid JSON response can be a deployment/access error or an uncertain completed request. Check the current Apps Script version, /exec URL, matching settings, backend error stage, and saved recovery before blindly rerunning. A Discord operation times out after three minutes but backend work may still finish.

## Optional Discord announcements

Regular raffle announcements use the bot `GUILDSYNC_RAFFLE_CHANNEL_ID`, interval/milestone settings, and positive comma-separated bonus/sales lead hours. Blank destination disables them while commands remain available. Archive announcements use separate `GUILDSYNC_RAFFLE_ARCHIVE_CHANNEL_IDS`. Preserve both announcement state files and Read Message History permissions. See [archive announcements](raffle-archive-announcements.md) and the detailed environment reference.
