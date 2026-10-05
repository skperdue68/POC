# Managing GuildSync users

Open your Discord avatar menu in the upper-right corner and select **Manage GuildSync Users**. This option is visible only to approved GuildSync admins. A numbered circle on the avatar shows accounts awaiting approval. The menu labels your GuildSync access level as **Role**; this is separate from your Discord rank.

Search by name, email, role, or Discord ID, or select **Pending approval** to review new requests. Each record shows the account's Discord identity, guild member name, email, role, approval status, request date, and last login.

- **Approve account** grants access. New pending accounts default to **Viewer**. Select **User** for normal data editing or **Admin** for administrative access. See the [role permissions](GuildSync-Roles.md).
- **Save changes** updates the email, guild member name, and selected role. Saving a pending record does not approve it; use **Approve account** for that.
- **Remove account** asks for confirmation, deletes the GuildSync login record, clears its saved sessions, and disconnects active clients. This does not remove the person from Discord or delete their ESO records. Their next Discord login creates a new pending approval request.

You can edit your own email and guild member name, but cannot change your own role or remove your own account. These restrictions are enforced on the server as well as in the interface. Another admin can change your role or remove your account.

GuildSync admins can change both administrator configuration and raffle bonus configuration. Approved Viewers and Users can view these sections but cannot save or reset them. Viewers can browse data, run reports, upload ESO history, and use automatic linking, but cannot manually edit links, banking entries, or notes or process receipts. Account management itself is restricted to admins. The same avatar menu offers Admin-only preview modes; see [role permissions and preview modes](GuildSync-Roles.md).

## Updates and unsaved edits

Pending counts update when accounts change, when new login requests arrive, on reconnection, and once a minute while connected. Background notifications preserve account edits and do not refresh other screens. **Refresh list (discard edits)** reloads current records. If another admin changed the same record, saving fails with a request to refresh rather than silently overwriting their edits.

Role changes update active client permissions. The backend checks the current database role for every account-management request. Removing an account also invalidates legacy login tokens by requiring an existing approved user record.

## Storage and deployment

Records remain in the existing login database table **`guildsync_users`**. Editable fields are `email`, `guild_member_name`, and `role`; approval also updates `allowed` and `approved_at`. Removal clears the associated rows in **`guildsync_login_sessions`**. No new tables or environment settings are required. Startup automatically changes the role column's insertion default to Viewer without changing existing account roles.

Discord supplies the initial email on first login. Subsequent logins preserve the stored email, including a blank email entered by an admin. Discord username, global name, and avatar continue to update from Discord.

Deploy the updated backend and web assets, then restart the backend. Desktop users need the updated client build. No Google Apps Script deployment changes are needed.
