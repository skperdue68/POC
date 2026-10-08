# Installing GuildSync on a Mac

GuildSync's Mac installer is currently unsigned. macOS may block the installer or app because it cannot verify the developer. You can approve GuildSync through **System Settings → Privacy & Security** using the steps below.

**Installation has two stages.** After the standard Apple package installer finishes, GuildSync's own installer still needs you to choose the application and ESO add-on directories. Wait for that second stage to finish before looking for the installed GuildSync app.

## 1. Download and open the package

1. Download the GuildSync **macOS** installer ZIP from your guild's GuildSync download page or the project's release assets.
2. Double-click the ZIP to extract it. Open the file named `GuildSync-Setup-<version>-macOS.pkg` inside it.
3. If macOS blocks the package, approve it using the instructions below, then continue through the Apple installer. Enter your administrator password if requested.

## If macOS blocks GuildSync: Open Anyway

1. Try opening the GuildSync package or app first so macOS records the blocked attempt. Dismiss the warning.
2. Open the **Apple menu → System Settings → Privacy & Security**.
3. Scroll down to the **Security** section. Look for the message saying the GuildSync package or app was blocked.
4. Check that the message refers to the GuildSync file you just opened, then click **Open Anyway**.
5. Authenticate with your password or Touch ID if requested, and confirm **Open** or the install confirmation when prompted. Continue opening the package or app.

You may need to repeat these steps for the package, **GuildSync Installer.app**, or **GuildSync.app** if macOS blocks them separately. If the blocked message or Open Anyway button is missing, try opening that specific GuildSync file again, then return to Privacy & Security.

These steps follow Apple's [instructions for opening an app from an unidentified developer](https://support.apple.com/en-us/102445).

## 2. Complete the GuildSync installer

The Apple package installs **GuildSync Installer.app** in `/Applications` and attempts to open it. **The Apple installer's success message is the end of stage one, not the end of the whole GuildSync installation.**

Afterward, you should still see GuildSync prompts asking you to select folders:

1. **GuildSync application destination:** choose **Applications** unless you want the app elsewhere. With this default, the installed application will be `/Applications/GuildSync.app`.
2. **ESO add-on destination:** choose your actual ESO **AddOns** folder. For the usual North American setup, this is `~/Documents/Elder Scrolls Online/live/AddOns`. An EU setup may use `~/Documents/Elder Scrolls Online/liveeu/AddOns`; use the folder your ESO installation actually uses.

Select **AddOns itself**, not `live` and not an individual `GuildSyncBanking`, `GuildSyncRoster`, or `GuildSyncApplications` folder. The installer places those three add-on folders inside AddOns for you.

If no GuildSync prompts appear, check behind other windows. Open **Finder → Applications → GuildSync Installer** manually if necessary. If macOS blocks that app, use **Open Anyway** for it as described above. Avoid starting another copy while an installer is already waiting for your folder choices.

Cancelling a folder prompt can leave the second stage unfinished. The presence of **GuildSync Installer.app** alone does not mean **GuildSync.app** has been installed.

## Finish and launch GuildSync

Wait for GuildSync's own **installation is complete** message. If your installer offers cleanup, use it only after this second stage succeeds; otherwise, keep the download and installer until you have confirmed that GuildSync was installed.

Open **Finder → Applications → GuildSync**, or open `GuildSync.app` in the destination you selected. Use **Open Anyway** again if macOS blocks the installed application on its first launch.

If you can find only **GuildSync Installer**, return to stage two above. If an error appears or the installer never finishes, note the message and ask your GuildSync administrator for help before retrying.
