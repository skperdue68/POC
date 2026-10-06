# Voice Channel Mute Implementation Plan

**Goal:** Add an authenticated, configurable Windows hold-to-mute feature that preserves moderator mutes and recovers stale temporary mutes.

**Architecture:** The desktop publishes key state over its existing authenticated client socket. The backend derives identity, routes requests, and persists bot snapshots transactionally. A single leased Discord worker owns channel sessions, rank policy, audit reconciliation, and recovery.

**Spec:** ../specs/2026-10-05-voice-mute-design.md

**Constraints:** Keep master and local changes untouched. Default disabled. Only the requester's voice channel is affected. Equal/higher ranks are excluded. No Google Apps Script changes. Windows global hotkeys first; other platforms show unsupported. No bot credentials in clients.

## Tasks and interfaces

1. Backend storage and routing: create voice-mute-schema.js, voice-mute-store.js, voice-mute-socket.js and tests; wire startup and connection registration. `guildsync:voice-mute-state` is bot-only with claim/read/save actions, 20-second single-worker lease, revision compare-and-swap, and snapshot `{revision,moderatorMutes,sessions,targets,auditCursor}`. `guildsync:voice-mute-hotkey` derives requesterId/connectionId and forwards pressed/released/heartbeat; disconnect forwards cleanup. Test spoofing, revoked/viewer callers, wrong guild, missing lease, stale revision, atomic replacement and retries.
2. Bot controller: voice-mute.js and tests plus integration in guildsync-discord-bot.js. Consume storage RPC and `guildsync:voice-mute-request`. Serialize operations; persist intent before API requests; own applied mutes, preserve moderator mutes, reconcile audit attribution, heartbeat expiry, destination transfer and restart. Test lower/equal/higher roles, lost releases, requester departure, slow calls, external moderation and retry recovery.
3. Desktop: platform-specific Go hotkey implementation and local configuration, profile settings in desktop/web source. Wails events feed the existing authenticated socket; unique session ID and 2-second heartbeats. Test key validation, setting persistence, activation/release and unsupported platforms. Build both frontends and Go client.
4. Configuration/help: add bot settings to the admin catalog with grouping/help and default reset behavior. Document permissions, tables, configuration, recovery, and Windows limitation in user and technical guides.
5. Integration verification and independent code review: run backend/bot suites, frontend builds, Go checks and diff validation; fix substantive findings, then commit branch, push and open PR against master.

## Review focus

- A mute request finishes after release: queue cleanup and leave no owned mute behind.
- Audit arrives after a voice event: do not clear a newly moderator-muted member.
- Requester changes channel while held: end session, never follow into the destination.
- Bot/client/database disappears: retain durable ownership, expire sessions and retry only known-owned cleanup.
- GuildSync privilege changes or two bot instances connect: fresh account checks and one leased worker.

## Execution ledger

- Native execution with parallel isolated file ownership for desktop and bot; backend and final integration owned by root.
- Baseline: backend 281/281; existing bot tests 79/79 (new agent test was added during baseline collection and initially fails as expected).
- Ruling: actual backend uses MySQL/MariaDB only; do not introduce a new SQLite production adapter. SQL-contract tests plus the existing suite cover migration paths; live MariaDB verification is a deployment check.
- Ruling: standalone distributable is a follow-up, as described in the approved design; this PR builds its shared authenticated server behavior.
- Tasks 1–4 complete: storage/protocol integration, bot controller/worker, desktop hotkey, settings/help. Native and cross-platform compile checks passed; live Discord/ESO keyboard behavior remains a controlled deployment check.
- Independent review: fixed delayed audit ordering with overlapping reads and persisted per-member watermarks; stale moderator restore removed after attribution refresh; startup lease renewal separated from recovery. Three regression tests failed first and then passed.
- Added slow-API receipt tests: heartbeats keep a held session alive during a blocked API request, and a received release stops additional muting immediately while cleanup stays serialized. Both tests failed before the fix.
- Ruling: preserve actual external moderation state rather than forcibly reapply a stale moderator record on channel entry. Confirmed moderator mutes block feature-owned cleanup; an unmuted person is not remuted from stale history.
- Ruling: an unowned, unattributed server mute is preserved for review even if there is no moderator table record. The absence of a record cannot prove the bot owns the mute, particularly after offline periods or expired audit history.
- Final verification: backend 293/293, bot 98/98, desktop frontend lifecycle 2/2, Go race tests and Windows build passed, desktop and web Vite builds passed. Linux/Darwin cross-builds passed during the desktop task. Generated public assets match web/dist. Diff whitespace check passed.
