# GuildSync voice hotkey integration

## Purpose and scope

Integrate the Windows mutebot companion's hold-to-mute behavior into the GuildSync desktop client, with mute management in the existing GuildSync Discord bot. Preserve moderator mutes and recover temporary mutes after lost releases, disconnects, crashes, and restarts. All implementation will use a codex/ branch in an isolated worktree and a pull request; leave the user's master checkout and existing local files untouched.

The first integration supports Windows global shortcuts, matching the supplied companion. macOS, Linux, and the browser must display an explicit unsupported-global-hotkey notice rather than pretend to support it. A separate distributable companion remains a follow-up: its authenticated protocol will reuse this feature, without exposing bot credentials.

## Personal configuration

Add Voice Channel Mute to the desktop profile menu. Include an enable switch, current shortcut, Set Hotkey capture, and Return to Default (Ctrl+M). Persist per computer in the application's user configuration directory, not the repository. Default to disabled until the person enables it. Save and apply immediately, ending an active session before changing the shortcut or disabling it.

Require a modifier plus a non-modifier key; reject incomplete combinations and Windows-reserved shortcuts that cannot be supported. Escape cancels capture. Suppress mute activation during capture, and keep ordinary keyboard input working. Poll the held state as well as processing key events to detect missed releases. Windows keyboard hook callbacks must never perform network I/O. Stop the hook and release the session at logout and shutdown.

## Server policy and authentication

Add grouped Voice Channel Mute settings to Administrator Configuration, using the established view-for-users/edit-for-admin rules and Return to Default behavior. Proposed environment defaults: GUILDSYNC_VOICE_MUTE_ENABLED=false and GUILDSYNC_VOICE_MUTE_ALLOWED_ROLE_IDS (empty means nobody may trigger a session). Rank order uses configured guild-rank role IDs rather than decorative Discord roles. Default guild ranks follow the existing Gangsters, Associates, Soldiers, Capos, Caporegime, Consigliere, Kingpin order. Unknown rank is rejected.

The existing authenticated client socket sends only pressed/released/heartbeat state and a session nonce. The backend derives requester identity from the authenticated session, never a supplied discordUserId. The bot independently fetches current member/channel/roles and enforces policy. Viewers do not receive this new write permission by default. Administrators of GuildSync do not bypass Discord rank protection.

Permit only strictly lower-ranked targets, exclude the requester and bots, and protect the server owner. Check the bot's effective Mute Members permission and current Discord API eligibility. This policy is checked for initial occupants and later joiners. Do not rename channels on each press; show status in the client and bot logs to avoid rename limits and modifying existing names.

## Persistent state

Initialize and migrate tables at backend startup for the existing MySQL/MariaDB backend using its established schema patterns:

- guildsync_discord_mutes: unique (guild_id, discord_user_id), muted_by_discord_id, muted_at, reason, audit_entry_id. Stores confirmed external moderator/application mutes. External means any actor other than the GuildSync bot itself.
- guildsync_voice_mute_sessions: session_id, guild_id, channel_id, requester_discord_id, connection_id, last_heartbeat_at, expires_at, state. At most one active session per channel. Only the owning connection may refresh or release it.
- guildsync_voice_mute_targets: session_id, guild_id, discord_user_id, state, last_attempt_at, last_error. States include pending, applied, releasing, unresolved. Durable intent must be written before the bot calls Discord. Unknown outcomes are not presumed safe to unmute.

Moderator records are upserted on confirmed external mute and removed on confirmed external unmute. Keep temporary target records until cleanup is confirmed. Keys include guild ID to avoid cross-server collisions.

## Session lifecycle

Pressed creates an authenticated session only if enabled, connected, and authorized in the requester's current voice channel. The client sends a heartbeat every 2 seconds while keys are held. Session lease expires after 8 seconds without heartbeat. A duplicate press is idempotent; another requester is told the channel is already active.

Serialize operations per channel/member. Recheck session validity immediately before each mute call and queue cleanup after any in-flight request completes. Already moderator-muted members are preserved and not claimed as temporary mutes. Record only eligible targets owned by the feature.

Release, lease expiry, client disconnect, logout, configuration disable, or requester channel departure ends the session. Reconcile owned targets even if they moved to another channel. If they entered another active session, transfer temporary ownership rather than unmuting them. If disconnected from voice, retain cleanup state and reconcile when they reconnect.

On channel entry or move, check persistent moderator state and the destination's active session. Preserve confirmed moderator mutes. Apply an eligible active session's mute. Otherwise clear confirmed feature-owned stale mutes. For a muted person with no moderator record and no temporary ownership, reconcile audit history first; do not blindly clear an unattributed mute.

On startup, reconcile retained target records and expired sessions before allowing new sessions. Retry failed cleanup with bounded backoff, keeping unresolved records durable and logging the member/session/error. A worker periodically revisits unresolved cleanup. If the database is unavailable, reject new sessions; do not guess mute ownership.

## Discord attribution and limits

Use voiceStateUpdate for serverMute changes and actual channel changes, and audit-log events/fetches for actor attribution. Add the relevant moderation intent and require View Audit Log. Match affected member, mute change, and entry time/ID; deduplicate entries and process them in order. Audit arrival may lag, so hold ambiguous cleanup for reconciliation rather than acting on the newest unrelated entry.

Track the bot's own operations with session IDs and audit reasons. A confirmed external mute takes precedence over temporary ownership. A confirmed external unmute removes the moderator record; while that session remains active, treat it as a moderator override for that member rather than immediately fighting the unmute.

Discord has one server-mute boolean. A moderator reapplying mute while someone is already temporarily muted can produce no observable change. The system cannot guarantee detection of that intent. Also, history older than Discord's 45-day retention and changes while offline may remain unattributable. Preserve uncertain mutes and log them for review. Never clear self-mute, self-deafen, or timeout state.

## Validation and delivery

Test authentication/spoofing, equal/higher/unknown ranks, initial occupants and joiners, moderator mute and unmute during sessions, delayed audits, repeated requests, release before a slow mute completes, heartbeat expiry, channel transfer, lost connections, restart recovery, database failure, and unmute retry. Test migrations/idempotency on both supported database adapters and settings persistence/capture validation. Build desktop and web, compile supported platforms without introducing Windows imports into shared files, and run the backend/bot suites.

Document configuration, permissions, Windows scope, recovery behavior, and the unavoidable attribution limitation in user and detailed help. Discord live behavior requires a controlled voice-channel test after deployment; unit tests cannot prove permissions or audit timing on the live server. No Google Apps Script changes are required.
