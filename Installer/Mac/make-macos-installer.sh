#!/usr/bin/env bash
set -euo pipefail

PAYLOAD_DIR="${1:?payload directory required}"
OUT_FILE="${2:?output installer path required}"
APP_VERSION="${3:-0.0.0}"

PKG_ID="me.perdues.guildsync.installer"
INSTALLER_APP_NAME="GuildSync Installer.app"
TMP_DIR="$(mktemp -d)"
trap 'rm -rf "$TMP_DIR"' EXIT

APP_DIR="$TMP_DIR/root/Applications/$INSTALLER_APP_NAME"
RESOURCES_DIR="$APP_DIR/Contents/Resources"
MACOS_DIR="$APP_DIR/Contents/MacOS"
SCRIPTS_DIR="$TMP_DIR/scripts"

mkdir -p "$RESOURCES_DIR" "$MACOS_DIR" "$SCRIPTS_DIR"

tar -C "$PAYLOAD_DIR" -czf "$RESOURCES_DIR/guildsync-payload.tar.gz" .

cat > "$APP_DIR/Contents/Info.plist" <<PLIST
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
  <key>CFBundleDevelopmentRegion</key>
  <string>en</string>
  <key>CFBundleDisplayName</key>
  <string>GuildSync Installer</string>
  <key>CFBundleExecutable</key>
  <string>GuildSync Installer</string>
  <key>CFBundleIdentifier</key>
  <string>me.perdues.guildsync.installerapp</string>
  <key>CFBundleInfoDictionaryVersion</key>
  <string>6.0</string>
  <key>CFBundleName</key>
  <string>GuildSync Installer</string>
  <key>CFBundlePackageType</key>
  <string>APPL</string>
  <key>CFBundleShortVersionString</key>
  <string>$APP_VERSION</string>
  <key>CFBundleVersion</key>
  <string>$APP_VERSION</string>
  <key>LSMinimumSystemVersion</key>
  <string>10.13</string>
</dict>
</plist>
PLIST

cp "$(dirname "$0")/install-guildsync.sh" "$MACOS_DIR/GuildSync Installer"

perl -0pi -e "s/__GUILDSYNC_APP_VERSION__/\Q$APP_VERSION\E/g" "$MACOS_DIR/GuildSync Installer"
chmod +x "$MACOS_DIR/GuildSync Installer"

cat > "$SCRIPTS_DIR/postinstall" <<'SCRIPT'
#!/usr/bin/env bash
set -euo pipefail
APP_PATH="/Applications/GuildSync Installer.app"
CONSOLE_USER="$(/usr/bin/stat -f %Su /dev/console)"
# The package path is passed to the second stage for narrowly scoped download cleanup.
SOURCE_PACKAGE="${1:-}"
if [[ "$CONSOLE_USER" == root || "$CONSOLE_USER" == loginwindow || -z "$CONSOLE_USER" ]]; then
  /usr/bin/logger -t GuildSync 'Open /Applications/GuildSync Installer.app after signing in to finish installation.'
  exit 0
fi
CONSOLE_UID="$(/usr/bin/id -u "$CONSOLE_USER")"
if ! /bin/launchctl asuser "$CONSOLE_UID" /usr/bin/sudo -u "$CONSOLE_USER" /usr/bin/open -a "$APP_PATH" --args "$SOURCE_PACKAGE"; then
  /usr/bin/logger -t GuildSync 'Second-stage launch failed. Open /Applications/GuildSync Installer.app manually.'
fi
exit 0
SCRIPT
chmod +x "$SCRIPTS_DIR/postinstall"

rm -f "$OUT_FILE"
pkgbuild \
  --root "$TMP_DIR/root" \
  --scripts "$SCRIPTS_DIR" \
  --identifier "$PKG_ID" \
  --version "$APP_VERSION" \
  --install-location "/" \
  "$OUT_FILE"

