#!/usr/bin/env bash
set -euo pipefail

PAYLOAD_DIR="${1:?payload directory required}"
OUT_FILE="${2:?output installer path required}"
APP_VERSION="${3:-0.0.0}"

PKG_ROOT="$(mktemp -d)"
SCRIPTS_DIR="$(mktemp -d)"
trap 'rm -rf "$PKG_ROOT" "$SCRIPTS_DIR"' EXIT

PAYLOAD_INSTALL_DIR="$PKG_ROOT/private/tmp/guildsync-pkg-payload"
mkdir -p "$PAYLOAD_INSTALL_DIR"
cp -a "$PAYLOAD_DIR"/. "$PAYLOAD_INSTALL_DIR"/

cat > "$SCRIPTS_DIR/postinstall" <<'SCRIPT'
#!/usr/bin/env bash
set -euo pipefail

APP_VERSION="__GUILDSYNC_APP_VERSION__"
PAYLOAD_DIR="/private/tmp/guildsync-pkg-payload"

CONSOLE_USER="$(stat -f %Su /dev/console 2>/dev/null || true)"
if [ -z "$CONSOLE_USER" ] || [ "$CONSOLE_USER" = "root" ] || [ "$CONSOLE_USER" = "loginwindow" ]; then
  CONSOLE_USER="${SUDO_USER:-${USER:-}}"
fi

USER_HOME=""
if [ -n "$CONSOLE_USER" ]; then
  USER_HOME="$(dscl . -read "/Users/$CONSOLE_USER" NFSHomeDirectory 2>/dev/null | awk '{print $2}' || true)"
fi
if [ -z "$USER_HOME" ] || [ ! -d "$USER_HOME" ]; then
  USER_HOME="$HOME"
fi

DEFAULT_INSTALL_DIR="$USER_HOME/Applications/GuildSync"
DEFAULT_ADDONS_DIR="$USER_HOME/Documents/Elder Scrolls Online/live/AddOns"

run_as_user() {
  if [ -n "$CONSOLE_USER" ] && [ "$CONSOLE_USER" != "root" ]; then
    local uid
    uid="$(id -u "$CONSOLE_USER" 2>/dev/null || true)"
    if [ -n "$uid" ]; then
      launchctl asuser "$uid" sudo -u "$CONSOLE_USER" "$@"
      return $?
    fi
  fi
  "$@"
}

ask_dir() {
  local prompt="$1"
  local default_dir="$2"
  local result=""
  if command -v osascript >/dev/null 2>&1; then
    result="$(run_as_user osascript -e 'POSIX path of (choose folder with prompt "'"$prompt"'" default location POSIX file "'"$default_dir"'")' 2>/dev/null || true)"
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

mkdir -p "$USER_HOME/Applications" "$DEFAULT_ADDONS_DIR" 2>/dev/null || true
INSTALL_DIR="$(ask_dir "Where should GuildSync version $APP_VERSION be installed?" "$DEFAULT_INSTALL_DIR")"
ADDONS_DIR="$(ask_dir "Where is your ESO AddOns directory for GuildSync version $APP_VERSION?" "$DEFAULT_ADDONS_DIR")"

mkdir -p "$INSTALL_DIR" "$ADDONS_DIR"
PRESERVED_SETTINGS=""
if [ -f "$INSTALL_DIR/GuildSyncSettings.txt" ]; then
  PRESERVED_SETTINGS="$(mktemp)"
  cp "$INSTALL_DIR/GuildSyncSettings.txt" "$PRESERVED_SETTINGS"
fi

cp -a "$PAYLOAD_DIR"/. "$INSTALL_DIR"/

if [ -n "$PRESERVED_SETTINGS" ] && [ -f "$PRESERVED_SETTINGS" ]; then
  cp "$PRESERVED_SETTINGS" "$INSTALL_DIR/GuildSyncSettings.txt"
  rm -f "$PRESERVED_SETTINGS"
fi

if [ -d "$PAYLOAD_DIR/ESO" ]; then
  cp -a "$PAYLOAD_DIR/ESO/GuildSyncBanking" "$ADDONS_DIR/" 2>/dev/null || true
  cp -a "$PAYLOAD_DIR/ESO/GuildSyncRoster" "$ADDONS_DIR/" 2>/dev/null || true
  cp -a "$PAYLOAD_DIR/ESO/GuildSyncApplications" "$ADDONS_DIR/" 2>/dev/null || true
fi

APP_PATH="$(find "$INSTALL_DIR" -maxdepth 2 -name 'GuildSync.app' -print -quit)"
if [ -n "$APP_PATH" ] && [ -d "$USER_HOME/Desktop" ]; then
  ln -sfn "$APP_PATH" "$USER_HOME/Desktop/GuildSync.app"
fi

if [ -n "$CONSOLE_USER" ] && [ "$CONSOLE_USER" != "root" ]; then
  chown -R "$CONSOLE_USER" "$INSTALL_DIR" "$ADDONS_DIR" 2>/dev/null || true
  [ -L "$USER_HOME/Desktop/GuildSync.app" ] && chown -h "$CONSOLE_USER" "$USER_HOME/Desktop/GuildSync.app" 2>/dev/null || true
fi

rm -rf "$PAYLOAD_DIR"

if command -v osascript >/dev/null 2>&1; then
  run_as_user osascript -e 'display dialog "GuildSync version '"$APP_VERSION"' installation is complete." buttons {"OK"} default button "OK"' >/dev/null 2>&1 || true
fi
printf '\nGuildSync version %s installed to: %s\nESO add-ons copied to: %s\n\n' "$APP_VERSION" "$INSTALL_DIR" "$ADDONS_DIR"
SCRIPT

perl -0pi -e "s/__GUILDSYNC_APP_VERSION__/\Q$APP_VERSION\E/g" "$SCRIPTS_DIR/postinstall"
chmod +x "$SCRIPTS_DIR/postinstall"

mkdir -p "$(dirname "$OUT_FILE")"
rm -f "$OUT_FILE"
pkgbuild \
  --root "$PKG_ROOT" \
  --scripts "$SCRIPTS_DIR" \
  --identifier "me.perdues.guildsync.installer" \
  --version "$APP_VERSION" \
  --install-location "/" \
  "$OUT_FILE"
