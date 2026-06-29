#!/usr/bin/env bash
set -euo pipefail

PAYLOAD_DIR="${1:?payload directory required}"
OUT_FILE="${2:?output installer path required}"
APP_VERSION="${3:-0.0.0}"
TMP_TAR="$(mktemp)"

(
  cd "$PAYLOAD_DIR"
  tar --sort=name \
    --owner=0 --group=0 --numeric-owner \
    --format=gnu \
    -czf "$TMP_TAR" \
    GuildSync \
    GuildSyncSettings.txt \
    .env.example \
    ESO
)
cat > "$OUT_FILE" <<'SCRIPT'
#!/usr/bin/env bash
set -euo pipefail
APP_VERSION="__GUILDSYNC_APP_VERSION__"
DEFAULT_INSTALL_DIR="$HOME/Applications/GuildSync"
DEFAULT_ADDONS_DIR="$HOME/Documents/Elder Scrolls Online/live/AddOns"

ask_dir() {
  local prompt="$1"
  local default_dir="$2"
  local result=""
  if command -v osascript >/dev/null 2>&1; then
    result="$(osascript -e 'POSIX path of (choose folder with prompt "'"$prompt"'" default location POSIX file "'"$default_dir"'")' 2>/dev/null || true)"
    result="${result%/}"
  fi
  if [ -z "$result" ]; then
    printf '%s [%s]: ' "$prompt" "$default_dir"
    read -r result || true
  fi
  if [ -z "$result" ]; then
    result="$default_dir"
  fi
  printf '%s' "$result"
}

mkdir -p "$HOME/Applications" "$DEFAULT_ADDONS_DIR" 2>/dev/null || true
INSTALL_DIR="$(ask_dir "Where should GuildSync version $APP_VERSION be installed?" "$DEFAULT_INSTALL_DIR")"
ADDONS_DIR="$(ask_dir "Where is your ESO AddOns directory for GuildSync version $APP_VERSION?" "$DEFAULT_ADDONS_DIR")"

TMP_DIR="$(mktemp -d)"
trap 'rm -rf "$TMP_DIR"' EXIT
ARCHIVE_LINE=$(awk '/^__GUILDSYNC_PAYLOAD_BELOW__$/ { print NR + 1; exit 0; }' "$0")
tail -n +"$ARCHIVE_LINE" "$0" | tar -xz -C "$TMP_DIR"

mkdir -p "$INSTALL_DIR" "$ADDONS_DIR"
PRESERVED_SETTINGS=""
if [ -f "$INSTALL_DIR/GuildSyncSettings.txt" ]; then
  PRESERVED_SETTINGS="$TMP_DIR/.GuildSyncSettings.txt.existing"
  if ! cp "$INSTALL_DIR/GuildSyncSettings.txt" "$PRESERVED_SETTINGS"; then
    echo "GuildSync could not preserve the existing GuildSyncSettings.txt before installing."
    echo
    echo "Please make sure the file is not open in another program and that you have write permission to the GuildSync installation folder, then run the installer again."
    exit 1
  fi

  # Do not let the payload copy overwrite the user's existing settings file.
  rm -f "$TMP_DIR/GuildSyncSettings.txt"
fi

cp -a "$TMP_DIR"/. "$INSTALL_DIR"/

if [ -n "$PRESERVED_SETTINGS" ] && [ -f "$PRESERVED_SETTINGS" ]; then
  if ! cp "$PRESERVED_SETTINGS" "$INSTALL_DIR/GuildSyncSettings.txt"; then
    echo "GuildSync could not restore your existing GuildSyncSettings.txt after installing."
    echo
    echo "Please make sure you have write permission to the GuildSync installation folder."
    exit 1
  fi
fi

if [ -d "$TMP_DIR/ESO" ]; then
  cp -a "$TMP_DIR/ESO/GuildSyncBanking" "$ADDONS_DIR/" 2>/dev/null || true
  cp -a "$TMP_DIR/ESO/GuildSyncRoster" "$ADDONS_DIR/" 2>/dev/null || true
  cp -a "$TMP_DIR/ESO/GuildSyncApplications" "$ADDONS_DIR/" 2>/dev/null || true
fi

APP_PATH="$(find "$INSTALL_DIR" -maxdepth 2 -name 'GuildSync.app' -print -quit)"
if [ -n "$APP_PATH" ] && [ -d "$HOME/Desktop" ]; then
  ln -sfn "$APP_PATH" "$HOME/Desktop/GuildSync.app"
fi

if command -v osascript >/dev/null 2>&1; then
  osascript -e 'display dialog "GuildSync version '"$APP_VERSION"' installation is complete." buttons {"OK"} default button "OK"' >/dev/null 2>&1 || true
fi
printf '\nGuildSync version %s installed to: %s\nESO add-ons copied to: %s\n\n' "$APP_VERSION" "$INSTALL_DIR" "$ADDONS_DIR"
SCRIPT
perl -0pi -e "s/__GUILDSYNC_APP_VERSION__/\Q$APP_VERSION\E/g" "$OUT_FILE"
echo "exit 0" >> "$OUT_FILE"
echo "__GUILDSYNC_PAYLOAD_BELOW__" >> "$OUT_FILE"
cat "$TMP_TAR" >> "$OUT_FILE"
chmod +x "$OUT_FILE"
rm -f "$TMP_TAR"
