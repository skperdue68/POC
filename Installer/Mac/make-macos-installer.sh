#!/usr/bin/env bash
set -euo pipefail

PAYLOAD_DIR="${1:?payload directory required}"
OUT_FILE="${2:?output installer path required}"
APP_VERSION="${3:-0.0.0}"
TMP_TAR="$(mktemp)"

tar -C "$PAYLOAD_DIR" -czf "$TMP_TAR" .
cat > "$OUT_FILE" <<'SCRIPT'
#!/usr/bin/env bash
set -euo pipefail
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
INSTALL_DIR="$(ask_dir "Where should GuildSync be installed?" "$DEFAULT_INSTALL_DIR")"
ADDONS_DIR="$(ask_dir "Where is your ESO AddOns directory?" "$DEFAULT_ADDONS_DIR")"

TMP_DIR="$(mktemp -d)"
trap 'rm -rf "$TMP_DIR"' EXIT
ARCHIVE_LINE=$(awk '/^__GUILDSYNC_PAYLOAD_BELOW__$/ { print NR + 1; exit 0; }' "$0")
tail -n +"$ARCHIVE_LINE" "$0" | tar -xz -C "$TMP_DIR"

mkdir -p "$INSTALL_DIR" "$ADDONS_DIR"
cp -a "$TMP_DIR"/. "$INSTALL_DIR"/

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
  osascript -e 'display dialog "GuildSync installation is complete." buttons {"OK"} default button "OK"' >/dev/null 2>&1 || true
fi
printf '\nGuildSync installed to: %s\nESO add-ons copied to: %s\n\n' "$INSTALL_DIR" "$ADDONS_DIR"
SCRIPT
printf 'APP_VERSION=%q\n' "$APP_VERSION" >> "$OUT_FILE"
echo "exit 0" >> "$OUT_FILE"
echo "__GUILDSYNC_PAYLOAD_BELOW__" >> "$OUT_FILE"
cat "$TMP_TAR" >> "$OUT_FILE"
chmod +x "$OUT_FILE"
rm -f "$TMP_TAR"
