# Raffle archive announcements

Configure these in `NodeJS/GuildSync-Discord-Bot/.env`:

```dotenv
GUILDSYNC_RAFFLE_ARCHIVE_CHANNEL_IDS=123456789012345678,234567890123456789
GUILDSYNC_RAFFLE_ARCHIVE_STATE_FILE=data/raffle-archive-announcements.json
```

Replace the examples with channel IDs from your server. Use one ID or a comma-separated list. Blank disables announcements; there is no fallback to the ordinary raffle channel. Restart the bot after changing settings.

Both automatic rollovers and `/gsr raffle archive` publish a completion message with the archive name and clickable Google Sheets link. Manual commands also retain their private result. Messages become eligible only after archive verification, both-tab reset and database replay succeed. The bot polls completed history every minute and on connection, so announcements can take about a minute.

The bot needs View Channel, Send Messages and Read Message History in each destination. Channels must belong to the configured Discord server. Archive access still follows Google sharing; posting a link does not grant access.

Completed events persist in existing `guildsync_settings` rollover state; no schema migration is required. Bot delivery state records each archive/channel independently. Failed channels retry without repeating successful channels. Interrupted deliveries reconcile against bot-authored message history before resending. Preserve the state file on persistent storage and run one announcing bot instance; separate instances are not coordinated by a distributed delivery lock. Deleted Discord messages or discarded state can result in reposts.

Enabling a channel later sends retained completed events not yet delivered to it. Events are recorded from installation of this change forward; archives completed before the change are not backfilled. Disabling announcements retains backend completion history.

Deploy the updated backend and bot and restart both. No Apps Script changes or slash-command redeployment are required for this feature. The private archive response still works when announcements are disabled or a channel is unavailable.
