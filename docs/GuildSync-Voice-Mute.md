# Voice Channel Mute

## Using the shortcut

This optional feature lets an authorized officer hold a shortcut to temporarily mute lower-ranked people in the **same Discord voice channel**. It defaults to disabled. In the Windows desktop app, open your avatar menu and find **Voice Channel Mute**. Enable it locally, or choose **Set Hotkey** and press a combination such as Ctrl+M. Settings are saved immediately on that computer.

Hold the combination to start a session; releasing a required key ends it. Equal, higher and unknown guild ranks, bots, and the server owner are protected. Joiners follow the same rank checks. If a member moves to an ordinary channel, their temporary mute is removed. If they enter another applicable active session, ownership transfers without briefly unmuting them. When the requester leaves or changes channels, their session ends and never follows them: release and press again to start in the new channel.

Confirmed moderator mutes are preserved. A moderator unmute overrides the current hotkey session. Self-mute, self-deafen and Discord timeouts are untouched. Ordinary keys continue reaching applications, so choose a shortcut that does not conflict with ESO or other software.

Global shortcuts initially support **Windows desktop only**. The web app does not display these controls. Authorized macOS and Linux desktop users see an unsupported notice.

## Administrator setup

1. Deploy the updated backend, Discord bot and Windows desktop client. Backend startup creates the tables automatically. **No Google Apps Script update is needed.**
2. Give the bot **View Audit Log** and **Mute Members** permission in affected voice channels. Its existing Guild Members intent must remain enabled; it also subscribes to Guild Voice States and Guild Moderation.
3. In **Reports and Admin → Administrator Configuration → Voice channel mute**, set the allowed requester roles (names or IDs), verify rank order, and enable the feature. Save server settings to apply them live. Return to Default restores the bot environment default.
4. Requesters need approved GuildSync **User** or **Admin** access plus an allowed Discord role. Viewers and admin previews as Viewer cannot request mutes. GuildSync Admin does not bypass Discord rank protection.
5. Test in a controlled Discord voice channel before using this during an event.

These optional settings belong in `NodeJS/GuildSync-Discord-Bot/.env`; live Administrator Configuration overrides are supported. No bot credentials are stored in desktop shortcut settings.

| Setting | Default | Meaning |
| --- | --- | --- |
| `GUILDSYNC_VOICE_MUTE_ENABLED` | `false` / Disabled | Allows new sessions. Disabling ends existing sessions and cleans known temporary mutes. |
| `GUILDSYNC_VOICE_MUTE_ALLOWED_ROLE_IDS` | Blank | Comma-separated role names or numeric IDs, such as `Kingpin, Consigliere`. Names are case insensitive; omit `@`. Blank permits nobody. |
| `GUILDSYNC_VOICE_MUTE_RANK_ROLE_IDS` | Blank | Guild-rank role names or numeric IDs from lowest to highest. Blank discovers Gangsters, Associates, Soldiers, Capos, Caporegime, Consigliere and Kingpin, including supported singular/plural aliases. Decorative roles are ignored. |

The personal menu shows mute controls only when the server feature is enabled and your approved User/Admin account has an allowed Discord role and a recognized guild rank. Access is checked when connecting, opening the menu, after relevant updates, and every 30 seconds. Losing access hides the controls and stops the shortcut listener, while retaining your personal preferences. The `_ROLE_IDS` setting names remain unchanged for compatibility, even when you enter role names.

Local Windows settings are in `%APPDATA%\GuildSync\voice-hotkey.json`: `enabled` defaults to false, `shortcut` to `Ctrl+M`. Shortcuts require Ctrl, Alt or Shift plus a letter, number or F1–F12; invalid/reserved combinations are rejected. Escape cancels capture. Disabling/changing settings ends the active session.

## Database and recovery

Tables are created additively in the existing MySQL/MariaDB database; account records are untouched.

| Table | Contents |
| --- | --- |
| `guildsync_discord_mutes` | Confirmed external moderator/application mutes, unique by server/member. Actor, time, reason and audit entry ID are stored; external unmute removes the record. |
| `guildsync_voice_mute_sessions` | Requester, connection, channel, heartbeat, expiry and recovery metadata. |
| `guildsync_voice_mute_targets` | Temporary ownership, API attempt information, errors and moderation overrides. |
| `guildsync_voice_mute_state` | Snapshot revision, worker lease, audit cursor, deduplication and per-member audit ordering. |

Client heartbeats run every two seconds; sessions expire after eight seconds without one. Release, logout, disconnect, requester departure or feature disable ends a session. Intent is persisted **before** a Discord mute call and successful ownership afterward. Restart recovery ends prior sessions and reconciles known temporary mutes even when new sessions are disabled. Disconnected targets wait for reconnect before an unmute can be attempted.

A 20-second database lease, renewed every five seconds even during startup recovery, permits one worker per Discord server. Failed unmute requests stay durable and retry after five seconds. Database or lease failure pauses actions until ownership is reclaimed. Unknown API outcomes remain unresolved until matching audit attribution confirms them. Logs identify unresolved member/session IDs and errors.

Audit reads overlap and track external ordering separately for each member. Delayed entries are not discarded merely because an unrelated newer entry arrived. Channel entry refreshes attribution and does not automatically reapply stale moderator mutes to someone who was unmuted.

## Limitations and verification

Discord has a single server-mute flag. A moderator reapplying mute while someone is already hotkey-muted may produce no observable change. Actors can be unavailable, entries delayed, and audit history is retained for 45 days. Unattributed pre-existing mutes and uncertain ownership are preserved for review. Extremely large audit backlogs defer recovery. Cleanup cannot be guaranteed while Discord, permissions or attribution are unavailable. [Discord audit-log reference](https://github.com/discord/discord-api-docs/blob/main/developers/resources/audit-log.mdx).

Test lower/equal/higher ranks, join/leave, requester departure while held, key release, client disconnect, bot restart and moderator mute/unmute. Automated tests cover controllers and protocol; live Discord permissions, audit timing and the Windows hook in ESO require a controlled deployment test.

For troubleshooting, the Discord bot logs received hotkey **pressed** and **released** events with the guild name, requester server display name (falling back to their Discord username), and guild/requester/connection/session IDs. Names come from cached Discord data so logging never waits on an API lookup; unavailable names show as Unknown while retaining their IDs. Rejected requests also log their reason. Heartbeats are not logged. A received event confirms transport to the bot; it does not by itself confirm anyone was muted.

Mute troubleshooting also logs the selected voice channel, requester rank, and channel member count. Each considered member is logged as attempting, applied, failed, or skipped with a specific reason (rank protection, bot/server owner, role hierarchy, existing moderator/server mute, changed channel, ended session, or uncertain prior ownership). Discord failures include the API error. Access checks log effective allowed/rank roles and current member roles when the diagnostic changes; unchanged periodic checks do not repeat the same diagnostic. Bot environment-default reports notify connected clients to recheck mute access. These diagnostics use the existing bot/backend logs and need no new environment setting.
