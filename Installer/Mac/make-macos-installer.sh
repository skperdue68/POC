#!/usr/bin/env bash
set -euo pipefail

PAYLOAD_DIR="${1:?payload directory required}"
OUT_FILE="${2:?output pkg path required}"
APP_VERSION="${3:-0.0.0}"

if [[ ! -d "$PAYLOAD_DIR" ]]; then
  echo "Payload directory does not exist: $PAYLOAD_DIR" >&2
  exit 1
fi

if ! command -v pkgbuild >/dev/null 2>&1; then
  echo "pkgbuild is required and must be run on macOS." >&2
  exit 1
fi

PKG_ID="me.perdues.guildsync.installer"
PKG_NAME="GuildSync-Setup-${APP_VERSION}-macOS.pkg"
WORK_DIR="$(mktemp -d)"
STAGING_DIR="$WORK_DIR/staging"
SCRIPTS_DIR="$WORK_DIR/scripts"
PAYLOAD_STAGING_DIR="$STAGING_DIR/private/tmp/GuildSyncInstallerPayload"

cleanup() {
  rm -rf "$WORK_DIR"
}
trap cleanup EXIT

mkdir -p "$PAYLOAD_STAGING_DIR" "$SCRIPTS_DIR" "$(dirname "$OUT_FILE")"

# Stage the full GuildSync payload inside the package. The postinstall script asks
# the user where to install the app files and ESO add-ons, then copies from here.
cp -a "$PAYLOAD_DIR"/. "$PAYLOAD_STAGING_DIR"/

cat > "$SCRIPTS_DIR/postinstall" <<'SCRIPT'
#!/usr/bin/env bash
set -euo pipefail

APP_VERSION="__GUILDSYNC_APP_VERSION__"
PAYLOAD_DIR="/private/tmp/GuildSyncInstallerPayload"
PKG_PAYLOAD_ROOT="/private/tmp/GuildSyncInstallerPayload"

console_user="$(stat -f '%Su' /dev/console 2>/dev/null || true)"
if [[ -z "$console_user" || "$console_user" == "root" || "$console_user" == "loginwindow" ]]; then
  console_user="$(ls -l /dev/console 2>/dev/null | awk '{print $3}' || true)"
fi

user_home=""
if [[ -n "$console_user" && "$console_user" != "root" && "$console_user" != "loginwindow" ]]; then
  user_home="$(dscl . -read "/Users/$console_user" NFSHomeDirectory 2>/dev/null | awk '{print $2}' || true)"
fi
if [[ -z "$user_home" || ! -d "$user_home" ]]; then
  user_home="$HOME"
fi

DEFAULT_INSTALL_DIR="$user_home/Applications/GuildSync"
DEFAULT_ADDONS_DIR="$user_home/Documents/Elder Scrolls Online/live/AddOns"

run_as_user() {
  local uid
  if [[ -z "$console_user" || "$console_user" == "root" || "$console_user" == "loginwindow" ]]; then
    return 1
  fi
  uid="$(id -u "$console_user" 2>/dev/null || true)"
  if [[ -z "$uid" ]]; then
    return 1
  fi
  launchctl asuser "$uid" sudo -u "$console_user" "$@"
}

escape_for_osascript() {
  printf '%s' "$1" | sed 's/\\/\\\\/g; s/"/\\"/g'
}

ask_dir() {
  local prompt="$1"
  local default_dir="$2"
  local result=""

  mkdir -p "$default_dir" 2>/dev/null || true

  if command -v osascript >/dev/null 2>&1; then
    local prompt_escaped default_escaped
    prompt_escaped="$(escape_for_osascript "$prompt")"
    default_escaped="$(escape_for_osascript "$default_dir")"
    result="$(run_as_user osascript \
      -e "POSIX path of (choose folder with prompt \"$prompt_escaped\" default location POSIX file \"$default_escaped\")" \
      2>/dev/null || true)"
    result="${result%/}"
  fi

  if [[ -z "$result" ]]; then
    result="$default_dir"
  fi

  printf '%s' "$result"
}

INSTALL_DIR="$(ask_dir "Where should GuildSync version $APP_VERSION be installed?" "$DEFAULT_INSTALL_DIR")"
ADDONS_DIR="$(ask_dir "Where is your ESO AddOns directory for GuildSync version $APP_VERSION?" "$DEFAULT_ADDONS_DIR")"

mkdir -p "$INSTALL_DIR" "$ADDONS_DIR"

# Preserve user settings. GuildSyncSettings.txt is copied only when it does not
# already exist, matching the Windows installer behavior.
settings_backup=""
if [[ -f "$INSTALL_DIR/GuildSyncSettings.txt" ]]; then
  settings_backup="$(mktemp)"
  cp "$INSTALL_DIR/GuildSyncSettings.txt" "$settings_backup"
fi

# Install application files, excluding ESO add-ons because those go to the ESO
# AddOns directory selected by the user.
rsync -a --delete --exclude 'ESO' "$PKG_PAYLOAD_ROOT"/ "$INSTALL_DIR"/

if [[ -n "$settings_backup" && -f "$settings_backup" ]]; then
  cp "$settings_backup" "$INSTALL_DIR/GuildSyncSettings.txt"
  rm -f "$settings_backup"
elif [[ ! -f "$INSTALL_DIR/GuildSyncSettings.txt" && -f "$PKG_PAYLOAD_ROOT/GuildSyncSettings.txt" ]]; then
  cp "$PKG_PAYLOAD_ROOT/GuildSyncSettings.txt" "$INSTALL_DIR/GuildSyncSettings.txt"
fi

# Create .env from .env.example only if .env is not already present.
if [[ ! -f "$INSTALL_DIR/.env" && -f "$INSTALL_DIR/.env.example" ]]; then
  cp "$INSTALL_DIR/.env.example" "$INSTALL_DIR/.env"
fi

# Install/update the ESO add-ons.
if [[ -d "$PKG_PAYLOAD_ROOT/ESO" ]]; then
  for addon in GuildSyncBanking GuildSyncRoster GuildSyncApplications; do
    if [[ -d "$PKG_PAYLOAD_ROOT/ESO/$addon" ]]; then
      rm -rf "$ADDONS_DIR/$addon"
      cp -a "$PKG_PAYLOAD_ROOT/ESO/$addon" "$ADDONS_DIR/$addon"
    fi
  done
fi

# Make files owned by the logged-in user when installing into that user's home.
if [[ -n "$console_user" && "$console_user" != "root" && "$console_user" != "loginwindow" ]]; then
  chown -R "$console_user":staff "$INSTALL_DIR" "$ADDONS_DIR/GuildSyncBanking" "$ADDONS_DIR/GuildSyncRoster" "$ADDONS_DIR/GuildSyncApplications" 2>/dev/null || true
fi

APP_PATH="$(find "$INSTALL_DIR" -maxdepth 2 -name 'GuildSync.app' -print -quit 2>/dev/null || true)"
if [[ -n "$APP_PATH" && -d "$user_home/Desktop" ]]; then
  ln -sfn "$APP_PATH" "$user_home/Desktop/GuildSync.app"
  if [[ -n "$console_user" && "$console_user" != "root" && "$console_user" != "loginwindow" ]]; then
    chown -h "$console_user":staff "$user_home/Desktop/GuildSync.app" 2>/dev/null || true
  fi
fi

rm -rf "$PAYLOAD_DIR" 2>/dev/null || true

if command -v osascript >/dev/null 2>&1; then
  run_as_user osascript \
    -e "display dialog \"GuildSync version $APP_VERSION installation is complete.\" buttons {\"OK\"} default button \"OK\"" \
    >/dev/null 2>&1 || true
fi

exit 0
SCRIPT

perl -0pi -e "s/__GUILDSYNC_APP_VERSION__/\Q$APP_VERSION\E/g" "$SCRIPTS_DIR/postinstall"
chmod +x "$SCRIPTS_DIR/postinstall"

rm -f "$OUT_FILE"
pkgbuild \
  --root "$STAGING_DIR" \
  --scripts "$SCRIPTS_DIR" \
  --identifier "$PKG_ID" \
  --version "$APP_VERSION" \
  --install-location / \
  "$OUT_FILE"

echo "Created macOS PKG installer: $OUT_FILE"
