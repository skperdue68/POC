# Historical raffle load and save implementation plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox syntax for tracking.

**Goal:** Route noncurrent dated loads to archives and save editable archive results through `/gsraffle save` and `/gsr save`.

**Architecture:** Parameterize Sheets writes by target ID under the existing coordination lock. A historical archive service resolves current dates, requests validated archive lookup/copy/read through Apps Script, captures existing results before refresh, and records preparation/ready state in the existing settings table. Share date/boundary handling between Discord load and save.

**Tech Stack:** Node ES modules, MariaDB, Google Sheets REST, Apps Script advanced Drive service, discord.js.

**Spec:** ../specs/2026-10-05-historical-raffle-load-save-design.md

## Global constraints

- Working spreadsheet must remain untouched during historical operations, including automatic rollover processing.
- Exact Consigliere role, authenticated bot, configured guild, MMDDYY, Bi-Weekly boundary choice.
- Preserve original requested date in save reminder and write selected dates to R7/P7.
- Existing archive snapshots save before clear; new copies must not capture inherited working results.
- Branch and pull request only; report required Apps Script deployment.

## Review focus

- Uncertain copy/write responses reuse preparing archive without capturing current inherited values.
- Archive date/source/folder identity cannot redirect writes to an arbitrary or working spreadsheet.
- Boundary timeout and missing archive on save produce no mutation.
- Shared monthly results and blank fields replace snapshots consistently.
- Pending rollover blocks admin work instead of changing live sheet during historical load.

## Tasks

- [x] Add historical service and target-write tests; implement explicit target context and no-rollover coordinated operations.
- [x] Add Apps Script tests; implement idempotent historical resolve/read/complete actions with source/folder/date validation and sharing reconciliation.
- [x] Implement historical service with settings registry, save-before-clear, database capture transaction, correct target dates, and safe retry state.
- [x] Extend authenticated refresh endpoint to route dated loads and save through this service, preserving existing selection and authorization.
- [x] Add failing bot tests; add save subcommand to both aliases, reuse boundary prompts, and return target link plus original-date save reminder.
- [x] Run full regression suite and syntax checks; request review. All 165 tests pass and review has no remaining substantive findings.
- [ ] Commit/push feature branch and create PR. Include Apps Script redeployment in handoff.

## Execution record

- Ruling: use `guildsync_settings` for the archive registry, since its existing startup schema already supports keyed JSON records; no new migration is needed.
- Historical requests use the existing advisory/local export lock with rollover disabled, so choosing an archive cannot advance the working raffle.
- A new or unfinished copy is captured only after its historical write and date verification succeed, keeping inherited current winners out of saved history.
- Replaced archive IDs update registry references in the same transaction as existing archive result reconciliation.
- Service and bot regressions failed before implementation; final review covers Apps Script identity, sharing, and retry paths as well.
- Review fixed stale registry recovery: only resolve accepts a replacement ID; read/complete remain pinned to the requested archive ID. Client, service, and Apps Script regressions cover recovery and folder filtering.
