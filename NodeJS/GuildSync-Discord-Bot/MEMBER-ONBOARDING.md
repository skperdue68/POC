# Member onboarding

GuildSync already synchronizes every Discord role except `@everyone`, including newly created roles. No role whitelist needs updating for `Gangsters`.

This optional feature promotes Gangsters members when their Discord account has a confirmed ESO link. It also sends one account-linking reminder to new members who remain unlinked for 24 hours. Automatic exact matches, manual links, and accepted candidates count as confirmed links; unaccepted fuzzy candidates do not.

## Enable

Deploy the backend and bot from the same merged PR. Backend startup automatically creates the onboarding tables. Keep your existing database when restarting or redeploying.

Create the Gangsters and Associates Discord roles. Configure Associates' server permissions to provide the intended full access; GuildSync assigns roles, not channel permissions. Place the bot's highest role above both roles and grant **Manage Roles**. GuildSync adds Associates before removing Gangsters and leaves other roles unchanged. If the member already holds Soldiers, Capo, Caporegime, Consigliere, Kingpin, or a recognized singular/plural variant, GuildSync removes only Gangsters. It preserves higher ranks and any existing Associates role, does not add Associates, and does not send an Associate-promotion notification for that cleanup. The result is recorded in the bot log; cleanup retries remain safe after an uncertain removal response. Rank matching ignores case, spaces, and decorative punctuation; unrelated roles do not qualify as a higher guild rank.

Create a normal text channel for onboarding threads. Both Gangsters and Associates members need **View Channel** on that parent. Grant the bot **View Channel**, **Create Private Threads**, **Create Public Threads** (for fallback), **Send Messages in Threads**, **Read Message History**, and preferably **Manage Threads** for full private archive discovery/moderation. Without Manage Threads, discovery uses only joined private threads. Moderators with Manage Threads and administrators can see private threads; ordinary uninvited members cannot. Each private thread is non-invitable and includes the intended member. Notifications tag only that member; Discord/user notification settings can still suppress push alerts.

Copy the following into the **Discord bot's** `.env` and replace the IDs:

```dotenv
DISCORD_GUILD_ID=YOUR_SERVER_ID
GUILDSYNC_ONBOARDING_ENABLED=true
GUILDSYNC_ONBOARDING_PROMOTION_ENABLED=true
GUILDSYNC_ONBOARDING_PROMOTION_NOTIFY_ENABLED=true
GUILDSYNC_ONBOARDING_REMINDER_ENABLED=true
GUILDSYNC_ONBOARDING_REMINDER_HOURS=24
GUILDSYNC_ONBOARDING_NOTIFICATION_MODE=private_thread
GUILDSYNC_ONBOARDING_CHANNEL_ID=YOUR_ONBOARDING_TEXT_CHANNEL_ID
GUILDSYNC_ONBOARDING_GANGSTER_ROLE_ID=YOUR_GANGSTER_ROLE_ID
GUILDSYNC_ONBOARDING_ASSOCIATE_ROLE_ID=YOUR_ASSOCIATE_ROLE_ID
```

Restart the backend and bot. No slash command redeployment or Google Apps Script update is needed. The bot registers its configuration with the backend when ready and rechecks pending work every minute. First activation begins at successful registration, not when you edit the `.env` file.

## Settings

| Bot `.env` setting | Default | Purpose |
| --- | --- | --- |
| `GUILDSYNC_ONBOARDING_ENABLED` | `false` | Master switch; disables role changes and notifications. |
| `GUILDSYNC_ONBOARDING_PROMOTION_ENABLED` | `true` | Promote confirmed-linked Gangsters members. |
| `GUILDSYNC_ONBOARDING_PROMOTION_NOTIFY_ENABLED` | `true` | Notify after successful promotion; disable for silent role changes. |
| `GUILDSYNC_ONBOARDING_REMINDER_ENABLED` | `true` | Enroll new joins and send one unlinked reminder. |
| `GUILDSYNC_ONBOARDING_REMINDER_HOURS` | `24` | Positive delay, at most 8760 hours. |
| `GUILDSYNC_ONBOARDING_NOTIFICATION_MODE` | `private_thread` | `private_thread` (private first, public thread fallback) or direct `channel`; no DM mode. |
| `GUILDSYNC_ONBOARDING_CHANNEL_ID` | blank | Member-thread text parent, or channel/thread destination in `channel` mode. Required for enabled notifications. |
| `GUILDSYNC_ONBOARDING_GANGSTER_ROLE_ID` | blank | Prefer a stable role ID; blank requires a unique case-insensitive `Gangsters` name. |
| `GUILDSYNC_ONBOARDING_ASSOCIATE_ROLE_ID` | blank | Prefer a stable role ID; blank requires a unique case-insensitive `Associates` name. |
| `GUILDSYNC_ONBOARDING_PROMOTION_MESSAGE` | blank | Use default or supply an editable message template. |
| `GUILDSYNC_ONBOARDING_REMINDER_MESSAGE` | blank | Use default or supply an editable message template. |

Restart the bot after editing `.env`. Operational overrides saved in **Reports & Admin → Administrator Configuration** apply live; use **Return to default** and Save to remove an override. Use one bot instance/configuration per guild. `channel` mode sends ordinary visible messages to the configured channel or thread. It intentionally does not provide the privacy of per-member private threads. If private-thread creation permission is unavailable or Discord rejects creation for permission/access reasons, GuildSync creates a public thread under the same configured channel. That thread is visible to members with parent-channel access, is logged, and is reused afterward. Network failures and unreadable history remain retryable rather than triggering fallback. No DMs are sent.

## Message templates

Supported placeholders: `{mention}` tags the intended member; `{eso_name}` inserts the linked ESO account; `{associate_role}` inserts the role name; `{hours}` inserts the configured delay. ESO account is empty for an unlinked reminder. If several ESO accounts are confirmed, the backend selects the first account alphabetically for the notification.

Example messages for Consigliere to customize:

```dotenv
GUILDSYNC_ONBOARDING_PROMOTION_MESSAGE="{mention}, your Discord account is now linked to ESO account **{eso_name}**. You have been promoted to {associate_role} and should now have full server access."
GUILDSYNC_ONBOARDING_REMINDER_MESSAGE="{mention}, please update your Discord server nickname to match your ESO account name so GuildSync can link your accounts and grant full server access."
```

Blank values use these defaults. Quote templates in `.env` when they contain `#`. Unknown placeholders and templates longer than 1800 characters are rejected. Notifications include an account-linking heading. If a custom template omits `{mention}`, GuildSync adds the member mention automatically. Only the intended user's mention is allowed; role/everyone mentions are suppressed. Inserted ESO names are escaped. The rendered message is persisted before delivery, so edits to templates do not change an already pending notification.

## Eligibility and recovery

Reminder enrollment includes only non-bot members whose actual Discord join timestamp is after the enabled cutoff. Existing members are excluded on first enable. Restarting or reconnecting preserves the cutoff. Startup checks recover joins missed during downtime using their true join time, not the time of synchronization.

Disabling reminders/master onboarding and restarting the bot ends enrollment and clears pending eligibility. Re-enabling establishes a new cutoff; members joining while disabled are excluded. A completed reminder is retained across leave/rejoin, so the same Discord member is not reminded again. Linking or leaving cancels pending reminder work. A member who rejoins with Gangsters can be promoted again; each promotion keeps a separate delivery identity, while reminders remain once per member. Existing linked Gangsters members can still qualify for promotion; promotion is independent of new-join reminder enrollment.

Member threads, including public fallback threads, are reused for the member's reminder and later promotion message. Archived threads are reopened. Role-change retries finish a partial promotion without announcing premature success. Message retries reconcile history before resending after an uncertain acknowledgement. Missing history/permissions stops delivery until corrected. This avoids knowingly repeating a reminder, although no distributed network operation can guarantee exactly-once delivery in every failure scenario.

If you change the destination while a notification is pending, that job retains its original delivery destination and rendered content so it can reconcile safely. New jobs use the new destination. Disabled promotion notifications pause already pending notification retries; they resume when re-enabled.

## Database and logs

Backend startup creates these persistent tables:

- `guildsync_discord_onboarding_state`: enabled configuration and reminder cutoff per guild.
- `guildsync_discord_onboarding_members`: join enrollment, private thread ID, and completed promotion/reminder times per guild/member.
- `guildsync_discord_onboarding_deliveries`: unique durable jobs, claim leases, message IDs, retry details, and rendered message content.

Keep these tables through deployments. Completed reminder records enforce the one-time rule; deleting them can permit another notification. Onboarding jobs do not undo a valid ESO link if promotion fails.

Logs use `Onboarding` / `Member onboarding` and identify queueing, successful role changes, notification recipient/destination, recovery, and failures. For problems, inspect role IDs/hierarchy, parent-channel visibility for Gangsters, private-thread permissions, backend connection, and the delivery table's `last_error`. Invalid configuration prevents the worker from starting and is logged clearly. Pending jobs retry after roughly one minute; claims expire after five minutes if a worker disappears.

Discord references: [private thread access and permissions](https://discord.com/developers/docs/topics/threads), [role management](https://discord.com/developers/docs/topics/permissions).

See the [user guide](../../docs/GuildSync-User-Guide.md) and [complete technical/environment reference](../../docs/GuildSync-Detailed-Help.md) for the other systems and commands.
