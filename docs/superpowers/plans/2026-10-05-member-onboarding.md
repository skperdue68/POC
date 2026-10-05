# Member Onboarding Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans for native execution, or superpowers:subagent-driven-development if the user selects delegation. Implement and verify tasks in order.

**Goal:** Promote confirmed-linked Gangster members to Associate and deliver configurable private onboarding notifications, including a single reminder for eligible new joins.

**Architecture:** The backend persists configuration activation, membership enrollment, and delivery jobs. An authenticated bot worker claims jobs, verifies current links and Discord membership, applies role changes, delivers notifications, and acknowledges progress. Existing sync and link paths wake the worker; periodic reconciliation recovers missed work.

**Tech Stack:** Existing Node.js ES modules, MySQL/mysql2, Socket.IO, discord.js, and node:test. No new runtime dependency.

**Spec:** `docs/superpowers/specs/2026-10-05-member-onboarding-design.md`

## Global constraints

- Work only on `codex/member-onboarding`; create a PR targeting `master`, never merge automatically.
- Default onboarding disabled; private threads by default; no DMs or public fallback on private delivery failure.
- Only confirmed `linked` records qualify for promotion; fuzzy candidates do not.
- Add Associate before removing Gangster; retain unrelated roles and recover partial changes.
- Enroll reminders only for joins after reminder activation; notify each Discord member once, including across leave/rejoin.
- Persist progress across restarts; a disabled interval must not enroll members retroactively.
- All onboarding socket endpoints require authenticated Discord-bot access and configured guild scope.

## Review focus

- A bot disconnect between role changes: retry removal without issuing a premature or duplicate success message (Task 3).
- Discord accepts a message but acknowledgement fails: reconcile before retry and refuse blind resend on uncertain history (Task 3).
- A member links or leaves while a reminder is claimed: revalidate before send, cancel stale work (Tasks 2 and 3).
- Disable/re-enable while old joins exist: maintain a new cutoff without forgetting previous successful reminders (Task 2).
- A private thread exists but a new Gangster cannot view its parent: diagnose permission failure, never fall back publicly (Task 3).

### Task 1: Configuration and startup schema

**Files:** Create bot `src/member-onboarding-config.js` and `.test.js`; create backend `discord-onboarding-schema.js` and `.test.js`; modify backend `guildsync-database-actions.js` startup initializer.

**Interfaces:** `readOnboardingConfig(env) -> {enabled,promotionEnabled,promotionNotifyEnabled,reminderEnabled,reminderHours,mode,channelId,gangsterRoleId,associateRoleId,promotionMessage,reminderMessage}`; `initializeDiscordOnboardingSchema(db) -> Promise<void>`.

- [x] Write configuration tests: defaults disabled/private/24h; explicit booleans; reject invalid hours/mode, missing destination when notifications enabled, and unknown template placeholders. Disabled defaults do not require a destination.
- [x] Write schema tests: three tables are created idempotently with guild/user and delivery uniqueness; verify the existing initializer invokes the new schema setup.
- [x] Run `node --test` on those files and observe failure before creating production modules.
- [x] Implement `.env` names from the spec; create state, member, and delivery tables with epoch timestamps, lease/retry fields, rendered-message storage, thread/message IDs, and completed timestamps. Use `CREATE TABLE IF NOT EXISTS` plus additive column migrations when necessary.
- [x] Run focused tests; commit configuration and schema.

### Task 2: Backend enrollment, confirmed links, and durable work

**Files:** Create backend `discord-onboarding.js`, `discord-onboarding-socket.js`, and corresponding `.test.js`; modify `guildsync-database-actions.js` member join/sync/link upserts and `guildsync-backend-server.js` socket registration.

**Interfaces:** `createDiscordOnboarding(db,{now,log})` returns `configure(guildId,config)`, `observeMember(guildId,member)`, `observeConfirmedLink(discordUserId)`, `claim(guildId)`, `validate(guildId,deliveryId,claimToken)`, `progress(guildId,deliveryId,claimToken,patch)`, and `finish(guildId,deliveryId,claimToken,result)`. `registerDiscordOnboardingSocket(socket,service)` registers `guildsync:onboarding-configure`, `-claim`, `-validate`, `-progress`, and `-finish` with acknowledgement responses.

- [x] Write tests for first activation, restart cutoff preservation, new join enrollment, no existing-member enrollment, disable/re-enable cutoff, join recovery by actual `joined_at`, leave/rejoin one-time behavior, and confirmed/candidate/blocked links.
- [x] Write tests for unique jobs, lease claims, stale-token rejection, cross-guild rejection, authenticated bot-only endpoints, and canceling reminders after linking/leaving. Reconciliation must recover enqueue failures without rejecting valid existing link writes.
- [x] Run focused tests to observe failure.
- [x] Implement persistent service and endpoints. Hook common confirmed-link upsert, including manual/exact/accepted candidates, and member synchronization. Retain join timestamps needed for reconciliation. Existing linked Gangster members may qualify for promotion even though they are not enrolled for reminders. Resolve a deterministic confirmed ESO name for notification when multiple accounts are linked.
- [x] Persist rendered messages and deterministic delivery identifiers before first send. Progress and completion updates require the current claim token; retries preserve delivery identity. Perform serialized claims using database transactions/row locks.
- [x] Run focused tests; commit backend onboarding.

### Task 3: Discord role changes and private delivery

**Files:** Create bot `src/member-onboarding.js` and `src/member-onboarding.test.js`; reuse config from Task 1 and authenticated endpoints from Task 2.

**Interfaces:** `createOnboardingWorker({client,socket,config,log,now}) -> {tick(),stop()}`. Tick is serialized and reconnect-safe. Role lookup prefers configured IDs, otherwise unambiguous case-insensitive default names.

- [x] Write tests for add-before-remove, Associate already added on retry, no promotion announcement after removal failure, absent Gangster/no demotion, unrelated role preservation, ambiguous/missing/unmanageable roles, and confirmed-link revalidation.
- [x] Write private-thread tests for creating a non-invitable thread, adding the intended member, persisting and reusing its ID, recovering interrupted thread creation via deterministic thread identity, reopening archived threads, and refusing public fallback. Verify parent visibility for Gangster members.
- [x] Write delivery tests for templates and escaping, `allowedMentions` limited to the target user, one-time reminder, link/leave cancellation, uncertain send recovery, legacy retry leases, missing history permission, mode/channel validation, and disabled notification settings.
- [x] Run tests to observe failure.
- [x] Implement fresh member/role fetches and permission checks. Persist progress before moving between role/delivery steps. Private threads use configured text parent and deterministic member-specific names; persist a discovered/created ID before posting. Channel mode uses only the configured guild channel/thread.
- [x] Before sending, persist exact rendered text and delivery attempt time; reconcile bot-authored matching recipient/content within the delivery window and recorded destination, plus Discord nonce where available. History errors retain retryable work without blind resend. Send successful messages once and acknowledge their Discord IDs. A role-only job completes without requiring a notification destination.
- [x] Run focused tests; commit worker.

### Task 4: Bot lifecycle and operator documentation

**Files:** Modify bot `src/guildsync-discord-bot.js`, `.env.example`; create `NodeJS/GuildSync-Discord-Bot/MEMBER-ONBOARDING.md`; extend lifecycle/integration tests.

**Interfaces:** Start worker only when Discord and authenticated backend connection are ready. Register configuration before enrolling or claiming work. Reconfigure on reconnect without resetting cutoff. Join/member/link signals wake tick; retain periodic reconciliation.

- [x] Write tests confirming disabled default is inert, reconnect is serialized, GuildMemberAdd starts eligible enrollment, role discovery includes Gangster, and automatic/manual link changes reach promotion work.
- [x] Run tests to observe failure; wire startup/event hooks without duplicating workers or failing unrelated bot features on onboarding configuration errors.
- [x] Document every `.env` option and template placeholder; example promotion/reminder text; role hierarchy/Manage Roles; private-thread and parent permissions; reminder enable/disable semantics; one-time state tables; logs and retry diagnostics; channel-mode visibility; installation/restart instructions. Leave real `.env` files unchanged.
- [x] Run lifecycle and focused integration tests; commit wiring and documentation.

### Task 5: Verify, review, and submit

- [ ] Run the full repository `node --test`, `git diff --check`, and inspect startup schema and common link paths against the approved spec.
- [ ] Request an independent whole-branch code review; fix important findings and rerun relevant checks.
- [ ] Push `codex/member-onboarding`; create a PR to `master` containing design, plan, implementation, tests, and documentation. Report verified test counts and setup requirements. Do not merge or perform live role/message changes during development.

## Self-review

The tasks cover every approved spec section, including startup migrations, confirmed linking paths, private-thread restrictions, enable cutoffs, durable delivery recovery, and operator documentation. Configuration is bot-owned and synchronized only over bot-authenticated endpoints. Tests exercise the five review-focus failures in their owning tasks. No Google Apps Script changes or slash command registration changes are required.
