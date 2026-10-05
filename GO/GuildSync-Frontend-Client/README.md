# GuildSync desktop client

The Wails desktop client authenticates through Discord, displays GuildSync data, watches ESO SavedVariables exports, and safely writes queued ESO receipt mail when the game is closed. It shares administration concepts with the server-backed browser interface.

- [Everyday user guide and Discord/ESO commands](../../docs/GuildSync-User-Guide.md)
- [Detailed workflows, configuration, and troubleshooting](../../docs/GuildSync-Detailed-Help.md)
- [Release packaging and deployment](../../docs/GuildSync-1.2.7.md)

## Development and builds

Run `wails dev` here for desktop development with the Vite frontend. Run `wails build` for a desktop build. The frontend lives in `frontend`; install its locked dependencies with `npm ci` and build using `npm run build` as described in the release guide. Platform installers are prepared through the repository packaging/release workflow.

## Local settings

Packaged defaults normally suffice. `.env` and `GuildSyncSettings.txt` can override local SavedVariables paths and backend connection settings. The profile's Banking/Roster/Applications watcher switches persist independently. Do not put server secrets in desktop configuration. See the [desktop environment table](../../docs/GuildSync-Detailed-Help.md#desktop-optional-local-overrides).

ESO saves add-on data to disk at reload/logout/exit. Writing a receipt mail batch requires ESO to be fully closed; the queue sends on the next Banking add-on load. Backups are kept under SavedVariables/GuildSyncBackups before cleanup/queue edits.
