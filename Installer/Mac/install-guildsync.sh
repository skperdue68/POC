#!/usr/bin/env bash
# Embedded into GuildSync Installer.app by make-macos-installer.sh.
set -Eeuo pipefail
APP_VERSION="__GUILDSYNC_APP_VERSION__"

replace_managed_path() {
  local source="$1" parent="$2" name="$3" stage
  case "$name" in
    GuildSync.app|GuildSyncSettings.txt|.env.example|.env|GuildSyncBanking|GuildSyncRoster|GuildSyncApplications) ;;
    *) echo "Refusing unmanaged destination: $name" >&2; return 1 ;;
  esac
  [[ -e "$source" && ! -L "$source" ]] || { echo "Missing or linked payload: $source" >&2; return 1; }
  [[ -d "$parent" && ! -L "$parent/$name" ]] || { echo "Invalid or linked destination: $parent/$name" >&2; return 1; }
  parent="$(cd "$parent" && pwd -P)"
  stage="$(mktemp -d "$parent/.GuildSync-install.XXXXXX")"
  if ! cp -a "$source" "$stage/$name"; then rm -rf "$stage"; return 1; fi
  if [[ -e "$parent/$name" ]]; then
    if ! mv "$parent/$name" "$stage/previous"; then rm -rf "$stage"; return 1; fi
  fi
  if ! mv "$stage/$name" "$parent/$name"; then
    if [[ -e "$stage/previous" ]]; then mv "$stage/previous" "$parent/$name"; fi
    # Keep the backup if restoring it fails; do not erase the user's old copy.
    if [[ ! -e "$stage/previous" ]]; then rm -rf "$stage"; fi
    return 1
  fi
  rm -rf "$stage"
}

install_application() {
  local payload="$1" parent="$2" file
  [[ -d "$payload/GuildSync.app/Contents/MacOS" ]] || { echo 'Payload contains no GuildSync.app' >&2; return 1; }
  replace_managed_path "$payload/GuildSync.app" "$parent" GuildSync.app || return 1
  for file in GuildSyncSettings.txt .env.example .env; do
    if [[ -f "$payload/$file" && ! -e "$parent/$file" && ! -L "$parent/$file" ]]; then
      replace_managed_path "$payload/$file" "$parent" "$file" || return 1
    fi
  done
  if [[ -f "$parent/.env.example" && ! -e "$parent/.env" && ! -L "$parent/.env" ]]; then
    replace_managed_path "$parent/.env.example" "$parent" .env || return 1
  fi
}

validate_addons_dir() {
  [[ -d "$1" && "$(basename "$1")" == AddOns ]] || {
    echo 'Choose the AddOns folder itself, not live, ESO, or an individual GuildSync add-on folder.' >&2
    return 1
  }
}

default_addons_location() {
  local user_home="${1:-$HOME}" candidate
  for candidate in "$user_home/Documents/Elder Scrolls Online/live/AddOns" "$user_home/Documents/Elder Scrolls Online/liveeu/AddOns" "$user_home"; do
    if [[ -d "$candidate" && -r "$candidate" && -x "$candidate" ]]; then printf '%s\n' "$candidate"; return 0; fi
  done
  return 1
}

is_cleanup_download() {
  local file="$1" parent base downloads
  [[ -f "$file" && ! -L "$file" ]] || return 1
  downloads="${DOWNLOADS_DIR:-$HOME/Downloads}"
  [[ -d "$downloads" ]] || return 1
  downloads="$(cd "$downloads" && pwd -P)"
  parent="$(cd "$(dirname "$file")" && pwd -P)"
  case "$parent/" in "$downloads/"*) ;; *) return 1 ;; esac
  base="$(basename "$file")"
  [[ "$base" == "GuildSync-Setup-$APP_VERSION-macOS.pkg" || "$base" == "GuildSync-Setup-$APP_VERSION-macOS.zip" ]]
}

message() {
  /usr/bin/osascript - "$1" <<'OSA'
on run args
  with timeout of 600 seconds
    tell me to activate
    display dialog (item 1 of args) buttons {"OK"} default button "OK" with title "GuildSync Installer"
  end timeout
end run
OSA
}

choose_folder() {
  /usr/bin/osascript - "$1" "$2" <<'OSA'
on run args
  with timeout of 600 seconds
    tell me to activate
    set chosen to choose folder with prompt (item 1 of args) default location (POSIX file (item 2 of args))
    return POSIX path of chosen
  end timeout
end run
OSA
}

trash_file() {
  /usr/bin/osascript - "$1" <<'OSA'
on run args
  with timeout of 120 seconds
    tell application "Finder"
      activate
      delete (POSIX file (item 1 of args))
    end tell
  end timeout
end run
OSA
}

shell_quote() { printf "'%s'" "$(printf '%s' "$1" | sed "s/'/'\\\\''/g")"; }

installer_error() {
  local status="$?"
  trap - ERR
  echo "Installation stopped (exit $status). Installer and downloads retained."
  message "GuildSync installation did not finish. Installer and download files have been kept.\n\nSee the error details in:\n$LOG_FILE" || true
  exit "$status"
}

cleanup_session() {
  [[ -z "${TMP_PAYLOAD:-}" ]] || rm -rf "$TMP_PAYLOAD"
  if [[ "${LOCK_OWNED:-no}" == yes ]]; then rm -f "$LOCK_DIR/pid"; rmdir "$LOCK_DIR" || true; fi
}

main() {
  local bundle resources archive install_parent addons_dir addon source_pkg cleanup_choice file failures=0 command
  bundle="$(cd "$(dirname "$0")/.." && pwd -P)"
  resources="$bundle/Resources"
  archive="$resources/guildsync-payload.tar.gz"
  source_pkg="${1:-}"
  LOG_FILE="$HOME/Library/Logs/GuildSync/installer.log"
  mkdir -p "$(dirname "$LOG_FILE")"
  chmod 700 "$(dirname "$LOG_FILE")"
  touch "$LOG_FILE"; chmod 600 "$LOG_FILE"
  exec > >(tee -a "$LOG_FILE") 2>&1
  echo "Starting GuildSync $APP_VERSION installation: $(date)"
  trap installer_error ERR
  trap cleanup_session EXIT
  LOCK_DIR="$HOME/Library/Application Support/GuildSync/installer.lock"
  mkdir -p "$(dirname "$LOCK_DIR")"
  if ! mkdir "$LOCK_DIR" 2>/dev/null; then
    local pid=""
    [[ ! -f "$LOCK_DIR/pid" ]] || pid="$(cat "$LOCK_DIR/pid")"
    if [[ "$pid" =~ ^[0-9]+$ ]] && kill -0 "$pid" 2>/dev/null; then
      message 'A GuildSync installation is already running. Complete or close its dialogs before starting another.'
      return 0
    fi
    # Do not remove a lock that another process has only just created.
    [[ -f "$LOCK_DIR/pid" ]] || { message 'Another installer may be starting. Try again shortly.'; return 1; }
    rm -f "$LOCK_DIR/pid"; rmdir "$LOCK_DIR"; mkdir "$LOCK_DIR"
  fi
  LOCK_OWNED=yes
  printf '%s\n' "$$" > "$LOCK_DIR/pid"
  [[ -f "$archive" ]] || { echo 'Installer payload missing' >&2; return 1; }
  # Every prompt activates its UI and has a timeout; cancellation is reported.
  install_parent="$(choose_folder 'Choose where to install GuildSync. Applications is the default.' /Applications)"
  install_parent="$(cd "$install_parent" && pwd -P)"
  case "$install_parent" in /|*.app|*.app/*) echo 'Choose an application parent folder, not an app bundle or filesystem root.' >&2; return 1 ;; esac
  addons_dir="$(choose_folder 'Select the ESO AddOns folder itself (not a GuildSync subfolder). Navigate to your ESO installation if needed.' "$(default_addons_location)")"
  addons_dir="$(cd "$addons_dir" && pwd -P)"
  validate_addons_dir "$addons_dir"
  [[ -w "$addons_dir" ]] || { echo "ESO AddOns is not writable: $addons_dir" >&2; return 1; }
  case "$install_parent/" in "$addons_dir/"*) echo 'Install the desktop application outside ESO AddOns.' >&2; return 1 ;; esac
  TMP_PAYLOAD="$(mktemp -d)"
  tar -xzf "$archive" -C "$TMP_PAYLOAD"
  [[ -d "$TMP_PAYLOAD/GuildSync.app/Contents/MacOS" ]] || { echo 'Application missing from payload' >&2; return 1; }
  for addon in GuildSyncBanking GuildSyncRoster GuildSyncApplications; do
    [[ -f "$TMP_PAYLOAD/ESO/$addon/$addon.txt" ]] || { echo "Incomplete add-on payload: $addon" >&2; return 1; }
  done
  # Check existing objects too: a writable parent can contain root-owned app/settings.
  if [[ -w "$install_parent" && ( ! -e "$install_parent/GuildSync.app" || -w "$install_parent/GuildSync.app" ) ]]; then
    install_application "$TMP_PAYLOAD" "$install_parent"
  else
    cp "$0" "$TMP_PAYLOAD/install-helper.sh"
    command="/bin/bash $(shell_quote "$TMP_PAYLOAD/install-helper.sh") --copy-app $(shell_quote "$TMP_PAYLOAD") $(shell_quote "$install_parent")"
    /usr/bin/osascript - "$command" <<'OSA'
on run args
  with timeout of 600 seconds
    tell me to activate
    do shell script (item 1 of args) with administrator privileges
  end timeout
end run
OSA
  fi
  for addon in GuildSyncBanking GuildSyncRoster GuildSyncApplications; do
    replace_managed_path "$TMP_PAYLOAD/ESO/$addon" "$addons_dir" "$addon"
  done
  [[ -d "$install_parent/GuildSync.app/Contents/MacOS" ]] || { echo 'Application verification failed' >&2; return 1; }
  if [[ -d "$HOME/Desktop" && ( ! -e "$HOME/Desktop/GuildSync.app" || -L "$HOME/Desktop/GuildSync.app" ) ]]; then
    ln -sfn "$install_parent/GuildSync.app" "$HOME/Desktop/GuildSync.app" || echo 'Could not create desktop shortcut; application is installed.'
  fi
  # No cleanup is offered until both application and add-ons have been installed.
  cleanup_choice="$(/usr/bin/osascript - "$install_parent" "$addons_dir" <<'OSA'
on run args
  with timeout of 600 seconds
    tell me to activate
    set resultDialog to display dialog ("GuildSync installation is complete.\n\nApplication: " & item 1 of args & "/GuildSync.app\nAdd-ons: " & item 2 of args & "\n\nMove GuildSync Installer and identifiable installer downloads for this version to Trash?") buttons {"Keep Installers", "Clean Up"} default button "Clean Up" with title "GuildSync Installer"
    return button returned of resultDialog
  end timeout
end run
OSA
)" || cleanup_choice='Keep Installers'
  if [[ "$cleanup_choice" == 'Clean Up' ]]; then
    # Exact version names only. Never delete the user's Downloads directory or arbitrary ZIPs.
    for file in "$source_pkg" "$HOME/Downloads/GuildSync-Setup-$APP_VERSION-macOS.pkg" "$HOME/Downloads/GuildSync-Setup-$APP_VERSION-macOS.zip"; do
      if is_cleanup_download "$file"; then trash_file "$file" || failures=$((failures + 1)); fi
    done
    if [[ "$(basename "$(dirname "$bundle")")" == 'GuildSync Installer.app' && "$bundle" == '/Applications/GuildSync Installer.app/Contents' ]]; then
      trash_file '/Applications/GuildSync Installer.app' || failures=$((failures + 1))
    fi
    if [[ "$failures" -gt 0 ]]; then message 'GuildSync is installed, but some installer files could not be moved to Trash. You can remove them manually.' || true; fi
  fi
  echo "Installation complete: $install_parent/GuildSync.app; add-ons: $addons_dir"
  # Reveal the installed application without automatically starting it.
  /usr/bin/open -R "$install_parent/GuildSync.app" || true
}

if [[ "${BASH_SOURCE[0]}" == "$0" ]]; then
  if [[ "${1:-}" == --copy-app ]]; then install_application "$2" "$3"; else main "$@"; fi
fi
