# GuildSync account roles

GuildSync account roles control the desktop and web application. They are separate from Discord ranks and ESO guild ranks; changing a GuildSync role does not change the member's Discord roles or slash-command permissions.

| Capability | Viewer | User | Admin |
| --- | --- | --- | --- |
| Browse Discord members, roster, banking data, notes, and history | Yes | Yes | Yes |
| Run reports, filter data, and export banking data locally | Yes | Yes | Yes |
| Inspect raffle bonus policies and administrator configuration | Yes | Yes | Yes |
| Create, approve, remove, or unblock ESO/Discord links; run auto-linking | No | Yes | Yes |
| Add manual banking entries or move entries | No | Yes | Yes |
| Add roster notes or upload ESO SavedVariables | No | Yes | Yes |
| Check out or process deposit receipt mail | No | Yes | Yes |
| Save/reset raffle bonus policies or administrator configuration | No | No | Yes |
| Review, approve, edit, or remove GuildSync login records | No | No | Yes |

Viewers can refresh tabs to load current database data. Their Discord refresh does not start a bot synchronization or automatic linking, and their banking refresh does not upload a local banking file. Upload prompts and editing controls are unavailable; the server also rejects direct write requests. Automatic background uploads and receipt processing are paused for Viewer accounts.

## New accounts and approval

The first Discord login still creates an approved **Admin** when no approved administrator exists. Once an administrator exists, new accounts have **Viewer** selected and remain **pending approval** (`allowed = 0`). An admin uses **Manage GuildSync Users** in the avatar menu to choose **Viewer**, **User**, or **Admin** and approve the request. Merely changing a pending account's role does not approve it.

Existing accounts keep their roles. Legacy pending records show Viewer as their approval default. Admins can change another account's role at any time, but cannot change their own role or remove themselves. Role changes update connected clients; backend write requests recheck the current approved role in the database, so cached permissions cannot authorize an old role's writes.

## Storage and deployment

The roles are stored in **`guildsync_users.role`**. Startup changes that column's insertion default to `viewer` for both existing and newly created login databases; it does not rewrite existing records. No new tables or environment settings are needed. Explicit Discord-login insertion also selects Viewer for new pending accounts after admin bootstrap.

Deploy the backend and updated web assets, restart the backend, and update desktop clients. Authenticated bot operations retain their independent authorization. No Google Apps Script changes are required.
