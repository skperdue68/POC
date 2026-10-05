# Discord member linking, promotion, and onboarding notifications

## Approved requirements

Discover the new `gangster` role through the existing Discord role synchronization. When an automatic or manual ESO/Discord link is confirmed, members holding that role receive `Associate` and lose `gangster`. Unconfirmed fuzzy candidates do not trigger promotion. Keep every unrelated role.

Notify the promoted member with their ESO name. Track only members joining after onboarding reminders are enabled. If still unlinked after 24 hours, notify that member once. Do not send DMs. Use a private thread per member by default, with an optional configured channel/thread delivery mode. Configure behavior and message templates through the bot `.env`, with documentation and a separate pull request.

## Existing code verified

- `discord-sync.js` fetches every role except `@everyone` and synchronizes member roles and join timestamps.
- `guildsync-discord-bot.js` listens for role creation/update/deletion and member join/update/leave events.
- `upsertMemberLink` is shared by exact automatic linking, manual linking, and accepted match candidates. Only `link_status = linked` is confirmed.
- Backend link update broadcasts currently go to desktop/web clients, not the bot. Onboarding requires authenticated bot endpoints and a durable work queue rather than relying on that broadcast.

## Components and approach

Extend the existing synchronization and linking flows with a small backend onboarding service and a bot onboarding worker. The backend owns eligibility and durable progress; the bot owns Discord permissions, role changes, private threads, and message delivery. Use immediate wakeups after link/join updates plus periodic reconciliation so reconnects, missed events, and failed attempts recover.

Alternatives considered: an in-memory bot timer loses progress on restart; a local-file watcher ties eligibility to one bot installation and cannot reliably observe every backend link path. Database persistence fits the existing backend and supports startup migrations and auditable state.

## Configuration

Add documented bot `.env.example` entries:

- `GUILDSYNC_ONBOARDING_ENABLED=false`: master switch.
- `GUILDSYNC_ONBOARDING_PROMOTION_ENABLED=true`: linked Gangster-to-Associate promotion.
- `GUILDSYNC_ONBOARDING_PROMOTION_NOTIFY_ENABLED=true`: promotion messages.
- `GUILDSYNC_ONBOARDING_REMINDER_ENABLED=true`: one-time unlinked reminders.
- `GUILDSYNC_ONBOARDING_REMINDER_HOURS=24`: positive reminder delay.
- `GUILDSYNC_ONBOARDING_NOTIFICATION_MODE=private_thread`: also accepts `channel`.
- `GUILDSYNC_ONBOARDING_CHANNEL_ID=`: text parent for private threads, or a channel/thread ID for channel mode.
- `GUILDSYNC_ONBOARDING_GANGSTER_ROLE_ID=` and `GUILDSYNC_ONBOARDING_ASSOCIATE_ROLE_ID=`: prefer IDs; when blank, resolve unique case-insensitive names `gangster` and `Associate`.
- `GUILDSYNC_ONBOARDING_PROMOTION_MESSAGE=` and `GUILDSYNC_ONBOARDING_REMINDER_MESSAGE=`: editable templates with documented defaults.

Templates support `{mention}`, `{eso_name}`, `{associate_role}`, and `{hours}`. Mentions are restricted to the intended user; template text cannot trigger role/everyone pings. Escape inserted ESO names for Discord formatting. Promotion text says the accounts are linked, so it remains accurate for manual linking. Unknown placeholders and invalid configuration produce clear startup diagnostics. Notifications can be disabled without disabling promotion. Apply configuration on startup/reconnect; document restart requirements. No changes to existing deployment secrets.

## Durable state and startup migrations

Create onboarding tables through the existing database startup initializer, using additive, idempotent migrations:

- `guildsync_discord_onboarding_state`: guild configuration activation timestamps and reminder enable/disable history. Record reminder activation server-side, preserving it across restarts. A later re-enable establishes a new eligibility cutoff; do not retroactively enroll members who joined while reminders were disabled.
- `guildsync_discord_onboarding_members`: guild/user key, observed join time, eligible enrollment, private thread ID, successful promotion state, and successful reminder timestamp. Reminder history survives leave/rejoin; a user is reminded at most once.
- `guildsync_discord_onboarding_deliveries`: durable unique promotion/reminder jobs with state, claim lease, retry details, deterministic delivery identifier, selected ESO account, and Discord message ID. A completed job cannot be claimed again. Preserve successful messages even when configuration or display names change.

All new bot endpoints require existing Discord-bot authentication and are scoped to the configured guild. Never accept arbitrary role mutation requests from desktop/web clients. Registering enabled configuration persists the activation cutoff before enrollment begins.

## Join and reminder flow

On a genuine member join, record the join timestamp and enroll only non-bot members joining after the current enabled reminder cutoff. Startup synchronization can recover joins missed during downtime using Discord's actual join timestamp, never the bulk-sync receipt time. Existing members are not newly enrolled on first activation.

The periodic worker checks enrolled members whose delay elapsed. Confirm that the member still belongs to the guild and has no confirmed ESO link immediately before delivery. A candidate or blocked link does not satisfy this requirement. Cancel reminder work when a link is confirmed or the member leaves. Send one successfully delivered reminder, then persist completion. Disabling reminders cancels pending reminders; re-enabling does not revive pre-cutoff enrollments or reset completed reminders.

## Promotion flow

After any confirmed link is persisted, enqueue promotion work. Reconciliation covers confirmed links whose eligible Gangster member was missed while the bot was unavailable. Promotion is not restricted to new reminder enrollments: an existing Gangster member manually or automatically linked while promotion is enabled can qualify.

Fetch the member's current Discord roles before acting. Resolve roles by ID or unambiguous name; verify the bot can manage both. Add Associate first, then remove Gangster. If removal fails, keep the job retryable and do not announce success. On retry, recognize Associate already added and finish removing Gangster. Announce only after the intended role state is reached. Members without Gangster are not demoted or given duplicate announcements; higher and unrelated roles remain unchanged. Re-check that a confirmed link exists before applying role changes.

## Private notification delivery

Create a private, non-invitable thread per member in the configured text channel, add only that member, and tag them in messages. Reuse the stored thread for promotion and reminder messages; reopen an archived thread when appropriate. Gangster members must be able to view the parent channel; private thread membership does not override missing parent access. The bot requires suitable channel access, Create Private Threads, Send Messages in Threads, Read Message History, and permissions to manage its thread lifecycle. Document role hierarchy and Manage Roles separately.

Private threads are visible to their members and moderators with Manage Threads, including administrators. Discord controls notifications; a mention cannot guarantee a push alert. There is no public-channel or DM fallback when private delivery fails. Channel mode intentionally uses the configured visible destination and is explicitly documented as less private.

## Reliability and observability

Use serialized work claims and bounded retries. Persist thread IDs and recover interrupted thread creation before creating another thread. Use a deterministic message nonce plus history reconciliation for uncertain sends; compare delivery identifiers and the intended recipient before resending. A successful send followed by a failed database acknowledgement must recover without knowingly sending a second reminder. If delivery cannot be reconciled safely, retain it for retry/diagnosis instead of blindly resending. Do not promise exactly-once network delivery beyond Discord's API guarantees.

Log enrollment, exclusions, confirmed-link detection, role changes, destination/thread IDs, delivery completion, and actionable permission/configuration failures. Do not log secrets. Promotion failures must not undo or reject an otherwise valid ESO/Discord link.

## Validation and rollout

Test role discovery including Gangster; all confirmed linking paths; fuzzy candidate exclusion; add-before-remove ordering and partial failure recovery; unchanged unrelated roles; new-join-only cutoff across restart/disable/re-enable; leave/rejoin and link cancellation; one-time reminders; template mention filtering; private-thread reuse and permissions; duplicate delivery recovery; unauthorized sockets and guild isolation; and idempotent startup schema setup.

Document setup, example templates, permissions, database tables, restart requirements, and operational logs. Run relevant tests and the existing suite, review the implementation, push `codex/member-onboarding`, and create a PR targeting `master`. Do not merge or deploy automatically. Google Apps Script does not need changes for this feature.
