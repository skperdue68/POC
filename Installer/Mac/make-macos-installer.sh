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

cat > "$MACOS_DIR/GuildSync Installer" <<'SCRIPT'
#!/usr/bin/env bash
set -euo pipefail

APP_VERSION="__GUILDSYNC_APP_VERSION__"
APP_BUNDLE_DIR="$(cd "$(dirname "$0")/.." && pwd)"
PAYLOAD_ARCHIVE="$APP_BUNDLE_DIR/Resources/guildsync-payload.tar.gz"
DEFAULT_INSTALL_PARENT="/Applications"
DEFAULT_ADDONS_DIR="$HOME/Documents/Elder Scrolls Online/live/AddOns"

escape_for_applescript() {
  printf '%s' "$1" | sed 's/\\/\\\\/g; s/"/\\"/g'
}

show_error() {
  local message
  message="$(escape_for_applescript "$1")"
  /usr/bin/osascript -e "display dialog \"$message\" buttons {\"OK\"} default button \"OK\" with icon stop" >/dev/null 2>&1 || true
}

choose_folder() {
  local prompt="$1"
  local default_dir="$2"
  local result=""
  mkdir -p "$default_dir" 2>/dev/null || true
  result="$(/usr/bin/osascript <<OSA 2>/dev/null || true
set promptText to "$(escape_for_applescript "$prompt")"
set defaultPath to POSIX file "$(escape_for_applescript "$default_dir")"
POSIX path of (choose folder with prompt promptText default location defaultPath)
OSA
)"
  result="${result%/}"
  printf '%s' "$result"
}

if [ ! -f "$PAYLOAD_ARCHIVE" ]; then
  show_error "GuildSync installer payload was not found."
  exit 1
fi

INSTALL_PARENT="$(choose_folder "Choose where GuildSync should be installed. If unsure, choose Applications." "$DEFAULT_INSTALL_PARENT")"
if [ -z "$INSTALL_PARENT" ]; then
  exit 0
fi

ADDONS_DIR="$(choose_folder "Choose your Elder Scrolls Online AddOns directory." "$DEFAULT_ADDONS_DIR")"
if [ -z "$ADDONS_DIR" ]; then
  exit 0
fi

TMP_PAYLOAD="$(mktemp -d)"
trap 'rm -rf "$TMP_PAYLOAD"' EXIT

tar -xzf "$PAYLOAD_ARCHIVE" -C "$TMP_PAYLOAD"
mkdir -p "$INSTALL_PARENT" "$ADDONS_DIR"

PRESERVED_SETTINGS=""
if [ -f "$INSTALL_PARENT/GuildSyncSettings.txt" ]; then
  PRESERVED_SETTINGS="$TMP_PAYLOAD/.GuildSyncSettings.txt.existing"
  cp "$INSTALL_PARENT/GuildSyncSettings.txt" "$PRESERVED_SETTINGS"
fi

# Copy the GuildSync application/files to the selected install folder, but do not copy ESO add-on folders there.
shopt -s dotglob nullglob
for item in "$TMP_PAYLOAD"/*; do
  base="$(basename "$item")"
  if [ "$base" = "ESO" ]; then
    continue
  fi
  rm -rf "$INSTALL_PARENT/$base"
  cp -a "$item" "$INSTALL_PARENT/"
done
shopt -u dotglob nullglob

if [ -n "$PRESERVED_SETTINGS" ] && [ -f "$PRESERVED_SETTINGS" ]; then
  cp "$PRESERVED_SETTINGS" "$INSTALL_PARENT/GuildSyncSettings.txt"
fi

if [ -f "$INSTALL_PARENT/.env.example" ] && [ ! -f "$INSTALL_PARENT/.env" ]; then
  cp "$INSTALL_PARENT/.env.example" "$INSTALL_PARENT/.env"
fi

if [ -d "$TMP_PAYLOAD/ESO" ]; then
  for addon in GuildSyncBanking GuildSyncRoster GuildSyncApplications; do
    if [ -d "$TMP_PAYLOAD/ESO/$addon" ]; then
      rm -rf "$ADDONS_DIR/$addon"
      cp -a "$TMP_PAYLOAD/ESO/$addon" "$ADDONS_DIR/"
    fi
  done
fi

APP_PATH="$(find "$INSTALL_PARENT" -maxdepth 2 -name 'GuildSync.app' -print -quit)"
if [ -n "$APP_PATH" ] && [ -d "$HOME/Desktop" ]; then
  ln -sfn "$APP_PATH" "$HOME/Desktop/GuildSync.app" 2>/dev/null || true
fi

/usr/bin/osascript <<OSA >/dev/null 2>&1 || true
display dialog "GuildSync version $APP_VERSION installation is complete.\n\nGuildSync installed to:\n$INSTALL_PARENT\n\nESO add-ons installed to:\n$ADDONS_DIR" buttons {"OK"} default button "OK" with icon note
OSA
SCRIPT

perl -0pi -e "s/__GUILDSYNC_APP_VERSION__/\Q$APP_VERSION\E/g" "$MACOS_DIR/GuildSync Installer"
chmod +x "$MACOS_DIR/GuildSync Installer"

cat > "$SCRIPTS_DIR/postinstall" <<'SCRIPT'
#!/usr/bin/env bash
set -euo pipefail

APP_PATH="/Applications/GuildSync Installer.app"
CONSOLE_USER="$(/usr/bin/stat -f %Su /dev/console 2>/dev/null || true)"

if [ -d "$APP_PATH" ]; then
  if [ -n "$CONSOLE_USER" ] && [ "$CONSOLE_USER" != "root" ]; then
    /usr/bin/su -l "$CONSOLE_USER" -c "/usr/bin/open '$APP_PATH'" >/dev/null 2>&1 || /usr/bin/open "$APP_PATH" >/dev/null 2>&1 || true
  else
    /usr/bin/open "$APP_PATH" >/dev/null 2>&1 || true
  fi
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
