# Voice Channel Mute

This feature is disabled by default. Enable `GUILDSYNC_VOICE_MUTE_ENABLED` and set `GUILDSYNC_VOICE_MUTE_ALLOWED_ROLE_IDS` to a comma-separated list of Discord role IDs. An empty allowed-role list authorizes nobody. Administrator Configuration can override these defaults live.

`GUILDSYNC_VOICE_MUTE_RANK_ROLE_IDS` lists guild-rank role IDs from lowest to highest. If empty, recognized names follow Gangsters, Associates, Soldiers, Capos, Caporegime, Consigliere and Kingpin, including established singular/plural aliases. Decorative role positions do not affect rank. Unknown, equal and higher ranks, bots and the guild owner are protected.

The bot requires **Mute Members** in affected voice channels and **View Audit Log**, and subscribes to the Guild Moderation gateway intent. The authenticated backend supplies requester and connection identity. The bot fetches current membership and derives the channel itself.

The Windows desktop shortcut uses a two-second heartbeat and an eight-second session lease. Release, requester departure, client disconnect, lost heartbeat or disabling the configuration ends ownership. Moving a target between active channels transfers ownership without an unmute/mute flicker. Channel names are unchanged.

The backend stores sessions, temporary target ownership and confirmed moderator mutes. Discord mutation intent is saved before an API call. A worker renews its exclusive backend claim every five seconds and pauses when the backend disconnects or storage fails. Restart recovery ends prior sessions and cleans confirmed temporary mutes even when this feature is disabled. Disconnected targets wait for reconnect. Failed unmute attempts remain durable and retry after five seconds.

Moderator mutes take precedence. A moderator unmute overrides the current active session. Overlapping audit reads and persisted per-member ordering capture delayed entries without applying older external actions over newer ones. Unattributed mute changes hold cleanup until actor attribution arrives. An API call with an unknown result remains unresolved unless the bot's matching session audit reason confirms it. Unattributed pre-existing server mutes are never claimed or cleared. Channel entry refreshes attribution without forcibly reapplying a stale moderator mute. Full setup and database details are in [the voice-mute guide](../../docs/GuildSync-Voice-Mute.md).

Discord exposes one server-mute boolean. Reapplying an existing mute may produce no observable event; records older than Discord's 45-day audit retention may also remain unattributable. Uncertain ownership is retained and logged for review. Self-mute, self-deafen and timeout are untouched. See [Discord audit documentation](https://docs.discord.com/developers/resources/audit-log).

Run `node --test` from this directory. Before enabling in production, test in a controlled Discord voice channel with lower/equal/higher ranks, moderator changes, transfers, client disconnect and bot restart; local tests cannot verify live channel permissions or audit timing.
