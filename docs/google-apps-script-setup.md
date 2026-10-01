# GuildSync raffle archives: setup and account migration

This guide sets up archiving in a personal Google Drive. Follow it from the beginning for a new account. You create a **standalone Google Apps Script project in your browser**, not a spreadsheet cell or a new Google Cloud project.

## What each part does

| Part | Purpose |
| --- | --- |
| Current raffle spreadsheet | The working file GuildSync updates, containing both raffle tabs. Its ID and public link stay unchanged during rollover. |
| Clean master/template | A spare template. Do not configure it as the source. |
| Archive folder | Receives dated copies such as `260926 raffle`. |
| Apps Script | Runs as your personal Google account, copies the file and checks sharing. |
| Service account | Continues writing entries and resetting the original spreadsheet. Its JSON credentials stay on the backend machine. |
| GuildSync database | Retains entries and rollover recovery state. Rebuilds both tabs after archiving. |

At ticket-sales cutoff, automatic writes to both tabs pause. Banking records still enter the database. After the configured delay (normally four hours), the whole file is copied; after successful verification, both original tabs are reset and current database records restored. An ongoing 50/50 period is restored too.

## 1. Prepare your Google account and files

1. Sign into the personal Google account that owns the working spreadsheet.
2. Start with a test spreadsheet if this is your first setup.
3. In Google Drive, create a folder named **GuildSync Raffle Archives**. Prefer a private folder: inherited folder sharing can give archives additional access.
4. Open that folder and copy its ID from the URL:

   ```text
   https://drive.google.com/drive/folders/YOUR_FOLDER_ID
   ```

5. Open the **current working spreadsheet** and copy its ID:

   ```text
   https://docs.google.com/spreadsheets/d/YOUR_SPREADSHEET_ID/edit
   ```

   Copy only the part between `/d/` and `/edit`. Do not include `#gid=...`; that identifies a tab, not the file.
6. Share the working spreadsheet with the service account's `client_email` as **Editor**. Find this address in your existing service-account JSON file; do not paste that JSON into Apps Script.
7. Allow that service account to edit protected ranges touched by GuildSync, including draw-date cells **R7** on Bi-Weekly and **P7** on 50/50. File-level Editor access alone does not override restricted ranges. See the [managed field list](google-sheets-logging.md#cleared-fields).

## 2. Create the Apps Script project

1. Open [script.google.com](https://script.google.com/) using the spreadsheet owner's account.
2. Click **New project**.
3. Click **Untitled project** at the top. Name it **GuildSync Raffle Archive**.
4. Click **Code.gs** under **Files**.
5. Delete the starter `myFunction` code.
6. Copy all of [Archive.gs](../scripts/google-apps-script/Archive.gs) from this repository into the editor. The file may stay named `Code.gs`.
7. Save with **Ctrl+S** or the Save button.

You only create this project once per setup. Return to it for later updates.

## 3. Enable the advanced Drive service

1. In the editor, click **+** beside **Services**.
2. Select **Drive API**, version **v3**, identifier **Drive**.
3. Click **Add**.

With Apps Script's default Cloud project, enabling the service also enables its API. If you linked a separate standard Cloud project, enable Google Drive API in that project's Cloud console too. [Google's service setup guide](https://developers.google.com/apps-script/guides/services/advanced)

## 4. Create a secret and enter Script Properties

Generate a private random secret with your password manager, or run this locally where Node.js is installed:

```powershell
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

This prints 64 random hexadecimal characters. Save the generated value privately. It is not your Google password or service-account private key.

1. Click **Project Settings** (gear icon on the left).
2. Find **Script Properties**.
3. Click **Add script property**; use **Edit script properties** if entries already exist.
4. Add the following, without surrounding quotation marks.
5. Click **Save script properties**.

| Property | What to enter |
| --- | --- |
| `ARCHIVE_SECRET` | Your generated secret. The backend must use exactly the same value. |
| `SOURCE_SPREADSHEET_ID` | The current working spreadsheet ID from step 1, not the clean master or archive. |
| `ARCHIVE_FOLDER_ID` | The destination folder ID from step 1. |

The source ID identifies the entire workbook containing both raffle tabs. [Google's Script Properties instructions](https://developers.google.com/apps-script/guides/properties)

## 5. Deploy the web app

1. Save the script.
2. Click **Deploy → New deployment**.
3. Beside **Select type**, click the gear and select **Web app**.
4. Set the description to **GuildSync Raffle Archive**.
5. Set **Execute as** to **Me** (the spreadsheet owner's account).
6. Set **Who has access** to **Anyone**, so the backend can call it without a Google browser login.
7. Click **Deploy**, select your account and authorize the requested access.
8. Copy the **Web app URL** ending in `/exec`.

The script validates a secret and source ID before copying. Execution uses the deploying account's Drive access. [Google's web-app guide](https://developers.google.com/apps-script/guides/web)

If authorization shows an unverified-app warning, check that it is your own project and account before proceeding. If account policy prevents deployment to Anyone, resolve that policy with the administrator; a login-only deployment will not work with this backend.

Do not use the editor URL, a deployment ID by itself, or the testing URL ending in `/dev`.

## 6. Configure the GuildSync backend

Edit **`NodeJS/GuildSync-Backend-Server/.env`** on the machine running the backend. These are not Discord bot settings.

Replace all placeholders below. Keep existing service-account credentials and exact tab names if already working.

```dotenv
GUILDSYNC_GOOGLE_SHEETS_ENABLED=true
GUILDSYNC_GOOGLE_SHEETS_SPREADSHEET_ID=YOUR_CURRENT_SPREADSHEET_ID
GUILDSYNC_GOOGLE_SERVICE_ACCOUNT_FILE=C:/path/to/guildsync-service-account.json
GUILDSYNC_GOOGLE_SHEETS_BIWEEKLY_TAB=bi-weekly raffle
GUILDSYNC_GOOGLE_SHEETS_5050_TAB=50/50

GUILDSYNC_GOOGLE_ARCHIVE_WEB_APP_URL=https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec
GUILDSYNC_GOOGLE_ARCHIVE_SECRET=YOUR_GENERATED_SECRET
GUILDSYNC_GOOGLE_SHEETS_ROLLOVER_ENABLED=false
GUILDSYNC_GOOGLE_SHEETS_ROLLOVER_DELAY_HOURS=4
```

The JSON path points to a separate, existing file readable by the backend. An existing `GUILDSYNC_GOOGLE_SERVICE_ACCOUNT_JSON` configuration is also supported; do not leave an old inline JSON value when switching credentials to a file.

Check these two matches:

- Backend `GUILDSYNC_GOOGLE_SHEETS_SPREADSHEET_ID` = Apps Script `SOURCE_SPREADSHEET_ID`.
- Backend `GUILDSYNC_GOOGLE_ARCHIVE_SECRET` = Apps Script `ARCHIVE_SECRET`.

Start with automatic rollover disabled for a fresh test setup. This does **not** disable ordinary spreadsheet writes or the manual archive command. The delay is measured from **sales cutoff**, not draw time. Changing it does not shorten an already-saved hold deadline.

Remove obsolete backend variables if present:

```text
GUILDSYNC_GOOGLE_OAUTH_CLIENT_ID
GUILDSYNC_GOOGLE_OAUTH_CLIENT_SECRET
GUILDSYNC_GOOGLE_OAUTH_REFRESH_TOKEN
GUILDSYNC_GOOGLE_SHEETS_ARCHIVE_FOLDER_ID
```

The folder ID now belongs in Apps Script's properties. Remove `GUILDSYNC_RAFFLE_TEST_COMMANDS_ENABLED` from both backend and Discord bot .env files. The old test commands are retired. Never commit your .env, generated secret or credentials JSON.

## 7. Register commands and verify the setup

1. Deploy the matching GuildSync backend and bot code, then restart both services.
2. In a terminal opened in **NodeJS/GuildSync-Discord-Bot**, run:

   ```powershell
   npm run deploy
   ```

3. Sign into Discord with the exact **Consigliere** role.
4. On your test spreadsheet, run **`/gsr raffle archive`**.

This command performs a real archive, resets both original tabs and reloads current database records. It bypasses a live hold immediately. Outside a hold it does not advance the raffle schedule.

Verify:

- A dated archive exists in the configured folder and retains the pre-reset data.
- Its sharing includes the intended source permissions, including anyone-with-link Viewer if enabled on the source. Folder inheritance may grant additional permissions.
- The original file ID and public link are unchanged.
- Both original tabs contain their current database records, including an ongoing 50/50 period.
- Bi-Weekly R7 and 50/50 P7 show applicable draw dates in `mm/dd/yy`.
- Bonus counts/notes and updater fields match the exported data.

Other production commands, all private and restricted to Consigliere:

| Command | Effect |
| --- | --- |
| `/gsr raffle refresh` | Clears managed fields on both tabs and reloads current periods and draw dates. |
| `/gsr raffle refresh date:MMDDYY` | Rebuilds both tabs for periods selected by that local date. Use a test file for historical exports. |
| `/gsr raffle clear` | Clears managed fields on both tabs, including draw dates; database records remain. It does not permanently pause future writes. |

Refresh and clear are blocked during an active rollover hold/recovery. See [command details](raffle-refresh.md).

When verification succeeds, set `GUILDSYNC_GOOGLE_SHEETS_ROLLOVER_ENABLED=true` and restart the backend. Keep it running before the next cutoff; initial setup does not retroactively archive an unknown existing sheet.

## 8. Update the script later

1. Open your existing **GuildSync Raffle Archive** project at [script.google.com](https://script.google.com/).
2. Replace Code.gs with the repository's updated Archive.gs and save.
3. Select **Deploy → Manage deployments**.
4. Select the existing deployment and click **Edit** (pencil).
5. Choose **New version**, then **Deploy**.

The existing deployment URL and Script Properties remain. Saving code alone does not update the deployed version.

## 9. Move to another Google account

Plan the move outside a sales-cutoff hold. Finish any pending archive/reset/database replay **under the old setup first**. Archive identifiers use Apps Script application-private Drive metadata; a newly created script project must not be used to recover an old project's unfinished archive.

1. Record the working file ID, tab names, archive folder ID and deployment URL privately. Back up the spreadsheet and database.
2. Stop the backend during the actual configuration switch so old and new configurations do not write concurrently. Banking uploads cannot be processed while it is stopped.
3. Decide how to move the working file:
   - If Google permits ownership transfer between these accounts, transfer the existing file and verify the new owner. Keeping that file preserves its ID and public link.
   - Otherwise, have the new account make a working copy. This creates a **new ID and link**; update your published link and both source-ID settings. Do not assume copying transfers sharing exactly.
4. Under the new account, create a private archive folder. Keep old archives available separately; a new script does not need them to start new rollover jobs.
5. Create a **new standalone Apps Script project** using steps 2–5. Generate a new secret and authorize/deploy as the new owner. Do not rely on the old deployment executing as the new account.
6. Share the working file with the service account as Editor and grant protected-range access. Restore your intended public/link sharing.
7. If keeping the same service account, its JSON can stay unchanged. If replacing it, update backend credentials and use the new JSON's `client_email` for sharing.
8. Update the backend's URL, secret and (only if the working file changed) spreadsheet ID. Update Apps Script's source/folder IDs. Preserve configured tab names.
9. Preserve `guildsync_settings` and existing `sheets_rollover_*` records; do not delete state to bypass errors. A different spreadsheet ID has separate rollover state. Keeping the ID preserves existing state.
10. Restart the backend and verify the setup using step 7, understanding archive is a real reset/reload. For a rehearsal, use a separate test backend/database and spreadsheet so production rollover state is untouched.
11. Enable automatic rollover and restart if it was disabled. Confirm the next cutoff is armed before leaving the setup unattended.
12. Once the new deployment works, retire the old web-app deployment through **Manage deployments** (archive the deployment). Remove old account/service-account access only when it is no longer needed.

Ownership-transfer availability depends on Google's account policies. Google's [web-app documentation](https://developers.google.com/apps-script/guides/web) also notes that ownership moves across domains can require redeployment. Creating and authorizing a new project under the destination account makes the execution identity explicit.

## 10. Troubleshooting

| Symptom | What to check |
| --- | --- |
| `Drive is not defined` | Add the advanced Drive API v3 service in Apps Script. |
| API disabled/access not configured | For a linked standard Cloud project, enable Google Drive API there. |
| Missing `doGet` when opening URL | Expected: this script accepts backend POST requests, not browser GET requests. |
| Editor Run returns `ok: false` | doPost requires a request body; do not test it with Run. |
| Login page or unexpected HTML | Use the deployed /exec URL, Execute as Me and access Anyone. |
| Archive returns `ok: false` | Check exact secret/source ID, folder access, deployed version and Apps Script Executions. Initial validation failures can return false without an error log. |
| Sharing verification fails | Check source sharing, archive-folder inheritance and deploying account permissions. The backend will not reset until verification succeeds. |
| Protected cell error | Give the backend service account access to the affected protected range; being file Editor alone is insufficient. |
| Copy exists but replay failed | Fix the logged cause and let saved recovery retry. Do not delete state/markers or switch projects mid-recovery. |
| /gsr commands missing | Run npm run deploy in the Discord bot directory and restart the bot with updated code. |

Apps Script errors appear under **Executions** in its left sidebar. Backend details appear in **NodeJS/GuildSync-Backend-Server/logs/google-sheets.log** unless overridden by `GUILDSYNC_GOOGLE_SHEETS_LOG_FILE`.

For exact cell ranges and operational details, see [spreadsheet export documentation](google-sheets-logging.md).
