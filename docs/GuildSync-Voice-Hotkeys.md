# Voice Channel Mute on Windows, Mac and Linux

The desktop client can use a global hold-to-mute shortcut while another application is focused. Hold the configured shortcut to mute the eligible lower-ranked members in your Discord voice channel; release it to end your mute session. Existing server policy, Discord identity and role permissions still determine who can use this feature. Enable Voice Channel Mute in your desktop profile after connecting. The default shortcut is Ctrl+M.

Windows uses its native keyboard hook. Mac uses CoreGraphics key-state capture. Linux X11 uses X11 keyboard state; Wayland uses the desktop Global Shortcuts portal. Browser clients do not provide global desktop keyboard capture.

## Mac setup

Enable the hotkey in GuildSync. If macOS requests keyboard access, allow GuildSync under System Settings â†’ Privacy & Security â†’ Input Monitoring, then quit and restart GuildSync. The client displays a setup message if permission is missing or removed. Ctrl means Control, and Alt means Option. This support uses the normal GuildSync Mac build requirements; it does not lower the application's supported macOS version. If you switch keyboard layouts, re-save the shortcut.

## Linux setup

On X11, no separate root access or raw keyboard-device permission is needed. The application needs access to your graphical X11 session and the standard libX11 runtime, normally installed with the desktop.

On Wayland, your desktop must provide the org.freedesktop.portal.GlobalShortcuts interface through xdg-desktop-portal and its desktop backend. Enabling the hotkey may open a desktop shortcut approval/configuration dialog. Approve it and use the assigned shortcut; GuildSync displays the actual trigger description the desktop returns. Wayland accepts a single ordinary key with optional Ctrl, Alt and Shift modifiers, rather than arbitrary multiple-letter chords or modifier-only shortcuts. Windows, Mac and X11 retain the existing multiple-key support.

Missing portal support does not prevent installation or startup. Only voice mute is unavailable, and the profile menu explains the reason. A failed or cancelled request is not retried by periodic access checks; disable and re-enable the hotkey to retry.

Some Wayland desktops or older portal versions do not provide this API. GuildSync reports that limitation rather than pretending that XWayland can capture keys from native Wayland applications. Use an X11 desktop session if your desktop cannot supply Global Shortcuts. The Linux client creates a hidden desktop identity entry for portal registration when needed; this does not add a duplicate application-menu item.

## Test before using in a guild session

Use a test Discord voice channel and accounts with the intended role hierarchy. Confirm mute starts while holding the shortcut with GuildSync unfocused, remains active while held, and ends on release. Check disabling the setting, changing the shortcut, disconnecting, removing permission, or closing GuildSync ends the hold. On Wayland, also test cancelling the approval dialog and reconnecting after a desktop portal restart. Verify existing manual server mutes remain subject to the backend's ownership rules.

Automated native checks compile the real platform hotkey files, test shared listener lifecycle and shortcut mappings, and exercise X11 keyboard input in a virtual display. Mac permission prompts and real Wayland desktop consent still require interactive acceptance testing. These checks do not build or publish installers; installers continue to build only on releases.
