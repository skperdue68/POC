#!/usr/bin/env bash
set -euo pipefail
ROOT="$(cd "$(dirname "$0")" && pwd)"
TEST_DIR="$(mktemp -d)"
trap 'rm -rf "$TEST_DIR"' EXIT
source "$ROOT/install-guildsync.sh"
mkdir -p "$TEST_DIR/payload/GuildSync.app/Contents/MacOS" "$TEST_DIR/apps" "$TEST_DIR/live/AddOns" "$TEST_DIR/payload/ESO/GuildSyncRoster"
printf 'app' > "$TEST_DIR/payload/GuildSync.app/Contents/MacOS/GuildSync"
printf 'new' > "$TEST_DIR/payload/ESO/GuildSyncRoster/GuildSyncRoster.lua"
printf 'defaults' > "$TEST_DIR/payload/GuildSyncSettings.txt"
printf 'custom' > "$TEST_DIR/apps/GuildSyncSettings.txt"
install_application "$TEST_DIR/payload" "$TEST_DIR/apps"
[[ "$(cat "$TEST_DIR/apps/GuildSyncSettings.txt")" == custom ]]
replace_managed_path "$TEST_DIR/payload/ESO/GuildSyncRoster" "$TEST_DIR/live/AddOns" GuildSyncRoster
printf 'stale' > "$TEST_DIR/live/AddOns/GuildSyncRoster/obsolete.lua"
replace_managed_path "$TEST_DIR/payload/ESO/GuildSyncRoster" "$TEST_DIR/live/AddOns" GuildSyncRoster
[[ ! -e "$TEST_DIR/live/AddOns/GuildSyncRoster/obsolete.lua" ]]
[[ ! -e "$TEST_DIR/live/AddOns/GuildSyncRoster/GuildSyncRoster" ]]
[[ "$(cat "$TEST_DIR/live/AddOns/GuildSyncRoster/GuildSyncRoster.lua")" == new ]]
cp() { return 1; }
if replace_managed_path "$TEST_DIR/payload/ESO/GuildSyncRoster" "$TEST_DIR/live/AddOns" GuildSyncRoster; then echo 'Copy failure ignored' >&2; exit 1; fi
unset -f cp
[[ "$(cat "$TEST_DIR/live/AddOns/GuildSyncRoster/GuildSyncRoster.lua")" == new ]]
mv() {
  case "$1" in */GuildSyncRoster) if [[ "$1" == */.GuildSync-install.*/GuildSyncRoster ]]; then return 1; fi ;; esac
  command mv "$@"
}
if replace_managed_path "$TEST_DIR/payload/ESO/GuildSyncRoster" "$TEST_DIR/live/AddOns" GuildSyncRoster; then echo 'Promotion failure ignored' >&2; exit 1; fi
unset -f mv
[[ "$(cat "$TEST_DIR/live/AddOns/GuildSyncRoster/GuildSyncRoster.lua")" == new ]]
[[ "$(find "$TEST_DIR/live/AddOns" -mindepth 1 -maxdepth 1 | wc -l | tr -d ' ')" == 1 ]]
mkdir -p "$TEST_DIR/elsewhere"
ln -s "$TEST_DIR/elsewhere" "$TEST_DIR/apps/GuildSyncRoster"
if [[ -L "$TEST_DIR/apps/GuildSyncRoster" ]]; then
  if replace_managed_path "$TEST_DIR/payload/ESO/GuildSyncRoster" "$TEST_DIR/apps" GuildSyncRoster; then echo 'Symlink destination accepted' >&2; exit 1; fi
else echo 'NOTE: host emulates symbolic links; real symlink rejection requires macOS/Linux test.'; fi
if replace_managed_path "$TEST_DIR/payload/ESO/GuildSyncRoster" "$TEST_DIR/apps" ../outside; then echo 'Unsafe name accepted' >&2; exit 1; fi
if replace_managed_path "$TEST_DIR/missing" "$TEST_DIR/live/AddOns" GuildSyncRoster; then echo 'Missing source accepted' >&2; exit 1; fi
[[ "$(cat "$TEST_DIR/live/AddOns/GuildSyncRoster/GuildSyncRoster.lua")" == new ]]
validate_addons_dir "$TEST_DIR/live/AddOns"
[[ "$(default_addons_location "$TEST_DIR")" == "$TEST_DIR" ]]
[[ ! -e "$TEST_DIR/Documents" ]]
mkdir -p "$TEST_DIR/Documents/Elder Scrolls Online/liveeu/AddOns"
[[ "$(default_addons_location "$TEST_DIR")" == "$TEST_DIR/Documents/Elder Scrolls Online/liveeu/AddOns" ]]
if validate_addons_dir "$TEST_DIR/live/AddOns/GuildSyncRoster"; then echo 'Nested add-on directory accepted' >&2; exit 1; fi
mkdir -p "$TEST_DIR/Downloads" "$TEST_DIR/other"
APP_VERSION=1.2.7
DOWNLOADS_DIR="$TEST_DIR/Downloads"
touch "$TEST_DIR/Downloads/GuildSync-Setup-1.2.7-macOS.pkg" "$TEST_DIR/Downloads/GuildSync-Setup-1.2.7-macOS.zip" "$TEST_DIR/Downloads/unrelated.zip"
is_cleanup_download "$TEST_DIR/Downloads/GuildSync-Setup-1.2.7-macOS.pkg"
is_cleanup_download "$TEST_DIR/Downloads/GuildSync-Setup-1.2.7-macOS.zip"
if is_cleanup_download "$TEST_DIR/Downloads/unrelated.zip"; then exit 1; fi
touch "$TEST_DIR/other/GuildSync-Setup-1.2.7-macOS.pkg"
if is_cleanup_download "$TEST_DIR/other/GuildSync-Setup-1.2.7-macOS.pkg"; then exit 1; fi
ln -s "$TEST_DIR/other/GuildSync-Setup-1.2.7-macOS.pkg" "$TEST_DIR/Downloads/link.pkg"
if is_cleanup_download "$TEST_DIR/Downloads/link.pkg"; then exit 1; fi
[[ "$(shell_quote "a'b")" == "'a'\''b'" ]]
echo 'PASS: reinstall without nesting; custom settings retained; copy/promotion failures preserve existing files; unsafe names rejected; AddOns validation; exact-version Downloads cleanup boundaries; shell quoting. Symlink checks run only on hosts with native symlinks.'
