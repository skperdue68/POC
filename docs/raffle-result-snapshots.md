# Raffle results and historical archive identity

Updated October 5, 2026. See the [detailed help](GuildSync-Detailed-Help.md#result-persistence-and-update) for the authoritative field/table reference and the [user guide](GuildSync-User-Guide.md#discord-raffle-commands-for-consigliere) for everyday commands.

## Commands

`/gsraffle` and `/gsr` expose `load [date:MMDDYY]`, `update date:MMDDYY`, `reset`, and `archive`. All require exact **Consigliere** and return private results. Dates normalize to zero-padded MMDDYY. MM/DD/YY and MM-DD-YY convert directly; uniquely interpretable unpadded input needs confirmation, and ambiguous/invalid input fails. On a Bi-Weekly date boundary, choose starts or ends; the enclosing 50/50 period follows that choice. `/save` is retired. Run `npm run deploy` in the bot directory when changing registered commands.

Current `load` uses the working file. A historical `load` searches the archive folder by ending-date filename, reuses a ready archive or creates one if absent, captures supported existing edits, and rebuilds only that archive. The live file remains unchanged. New copies are populated with the requested dates before their historical result fields are saved. Copied live winners are not treated as historical results.

`update` explicitly reads supported results from the matching ready archive and replaces saved database cells. It does not clear or replace the archive, create a missing file, or import ticket purchase rows. Use the date and boundary answer from the load. Discord supplies a button to the chosen spreadsheet.

## Saved fields and storage

| Raffle | Current sparse archive-cell fields |
| --- | --- |
| Bi-Weekly | Q33:Q52; J5:K254 attendance/bonus; O55 winnings sent by |
| 50/50 | P25 winner; M28 winnings sent by |

`guildsync_raffle_archive_cells` stores nonempty displayed values by archive ID/type/cell with draw date, source ID, tab, and capture time. Numeric zero is nonempty. Save clears the previous source/type/draw-date cells transactionally before writing the replacement, so deleted sheet entries disappear from the database. Historical load restores the chosen raffle's cells; K bonus amounts are numeric where valid.

General typed-result support in `guildsync_raffle_results` also defines Bi-Weekly S31:S50 and 50/50 L23/J26, with formula templates in `guildsync_raffle_result_formulas`. Its snapshot identity is type/start/end; this is distinct from the current sparse historical load/update path. Do not assume every general-layout field is imported by historical `update`.

Backend startup creates these tables idempotently. The standalone [raffle-results migration](../NodeJS/GuildSync-Backend-Server/migrations/20261001_raffle_results.sql) covers the typed result/formula tables; startup also creates the archive-cell table. Existing Drive archives are not automatically backfilled en masse.

## Naming, reuse, and replacement

R7 supplies the Bi-Weekly date and P7 the 50/50 date. Names are **YYMMDD Raffle**: October 10, 2026 is `261010 Raffle`. R7 must be valid; P7 is required when capturing nonempty 50/50 fields. A blank required date fails before reset instead of substituting today's date.

Loading/updating an existing historical file keeps its ID. A deliberate live archive replacement verifies a new copy, moves older same-name files in the configured folder to Trash, and reports their old IDs. Database result/registry references are updated to the new ID and fresh cell snapshots replace old ones. The source is reused indefinitely, so source ID alone does not identify an individual archived raffle. Old external links do not redirect; the working file link stays unchanged.

Persisted operation markers permit recovery after uncertain responses without intentionally making duplicate copies. Preserve rollover/registry state in `guildsync_settings`; finish pending recovery before changing source/project configuration.

## Setup and validation

Use the [Apps Script deployment guide](google-apps-script-setup.md), including owner execution, Drive v3 service, three Script Properties, matching backend secret/source ID, service-account editor/protected-range access, and `/exec` deployment. Changes to Archive.gs require saving and deploying a new version of the existing project. This documentation/onboarding update does not change Archive.gs.

Test with a spare spreadsheet/database: archive known sparse values, reload a historical date, edit and update that same file, and verify removed cells are removed from storage. Check bot lookup logs for filename, folder, matches, selected ID, and created flag. After reset, run current load to restore R7/P7 before archiving.
