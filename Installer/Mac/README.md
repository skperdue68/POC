# macOS installer lifecycle

The package puts `GuildSync Installer.app` in `/Applications` and asks LaunchServices in the signed-in user's GUI session to open it. That second-stage app prompts for the application destination and the ESO `AddOns` folder. If it does not open automatically, open it manually from Applications. A successful package installation alone does not mean the second stage has finished.

The second stage activates its prompts, logs to `~/Library/Logs/GuildSync/installer.log`, and reports failures in a dialog. Folder dialogs time out after ten minutes instead of waiting indefinitely. A per-user lock prevents concurrent second-stage installations. The app requests administrator authorization when its application destination or existing app is not writable. ESO add-ons are always installed as the user.

Select the `AddOns` folder itself. Selecting `live` or an individual add-on subfolder is rejected. The chooser defaults to an accessible existing `live/AddOns` or `liveeu/AddOns`, then the home directory; it never creates an unused default ESO tree. Each GuildSync add-on replaces its own folder directly; a rerun removes stale files without producing `GuildSyncRoster/GuildSyncRoster` nesting. Other add-ons are untouched. Copying is staged before replacement, with restoration of the previous managed object if the final rename fails. Existing `.env` and `GuildSyncSettings.txt` are preserved. Successfully replaced objects are not rolled back as a group if a later separate object fails; cleanup is offered only after all installs succeed.

After success, **Clean Up** moves the second-stage installer to Trash and attempts to move only exact-version GuildSync `.pkg`/`.zip` files identifiable within the user's Downloads folder. The originating package path is passed by the package's postinstall script. The standard matching ZIP and PKG names directly in Downloads are also checked. Files elsewhere, unrelated downloads, symlinks, unknown extraction directories, and other-version installers are retained. **Keep Installers** skips cleanup. Cleanup failures are reported without treating a successful application installation as a failure. Temporary staging files are removed on normal exit or error; retained backups are not deleted if restoring them failed.

The desktop shortcut is created only when it will not replace a real existing file or directory. Finder reveals the installed `GuildSync.app` after completion. The installer does not start GuildSync automatically.

## Verification

Run `bash Installer/Mac/installer.test.sh` on macOS. Tests cover repeated installs, settings preservation, copying/promotion failures, destination symlinks, AddOns validation, and cleanup file boundaries. The GitHub macOS build runs these checks before packaging.

For a native GUI acceptance check, build a new installer ZIP from this revision and test:

1. Unzip and open the `.pkg` in a signed-in desktop session. Confirm the second-stage folder prompt comes forward. Also test manual launch from Applications.
2. Choose Applications; test with a destination requiring administrator authorization. Cancel authorization and confirm a visible failure and retained installer/download files.
3. Select `AddOns`; then rerun and select an individual add-on folder to confirm rejection without nested files.
4. Complete installation twice; verify app, all three add-on manifests, existing custom settings, and absence of stale add-on files/nested folders.
5. Choose Clean Up and confirm the installer and identifiable downloads are in Trash, the installed app remains, and other downloads/add-ons remain. Repeat choosing Keep Installers.
6. Cancel a folder prompt, simulate an unwritable AddOns folder, and confirm the log/error message. Launch twice and confirm the second process reports an installation already running.

Windows Git Bash can exercise file operations but may emulate symlinks; it cannot validate AppleScript dialogs, administrator authorization, package postinstall behavior, Finder cleanup, or actual macOS permissions. Native GUI checks are required before releasing this build to users.
