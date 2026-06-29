#!/usr/bin/env bash
set -euo pipefail

SOURCE_DIR="${1:?Missing source payload directory}"
OUTPUT_APPIMAGE="${2:?Missing output AppImage path}"
VERSION="${3:?Missing version}"

SOURCE_DIR="$(cd "$SOURCE_DIR" && pwd)"
OUTPUT_APPIMAGE="$(realpath -m "$OUTPUT_APPIMAGE")"

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
TMP_DIR="$(mktemp -d)"
trap 'rm -rf "$TMP_DIR"' EXIT

INSTALLER_DIR="$TMP_DIR/installer"
PAYLOAD_ZIP="$INSTALLER_DIR/payload.zip"

mkdir -p "$INSTALLER_DIR"

echo "Creating safe installer payload..."

(
  cd "$SOURCE_DIR"

  rm -f "$PAYLOAD_ZIP"

  zip -r "$PAYLOAD_ZIP" \
    GuildSync \
    GuildSyncSettings.txt \
    .env.example \
    ESO
)

python3 - <<PY
import zipfile
from pathlib import Path

payload = Path("$PAYLOAD_ZIP")

with zipfile.ZipFile(payload, "r") as zf:
    for name in zf.namelist():
        if (
            name == "."
            or name == "./"
            or name.startswith("./")
            or name.startswith("/")
            or ".." in Path(name).parts
        ):
            raise RuntimeError(f"Unsafe path in installer payload: {name}")

print(f"Verified safe installer payload: {payload}")
PY

cp -a "$SCRIPT_DIR/main.go" "$INSTALLER_DIR/main.go"

if [[ -f "$SCRIPT_DIR/go.mod" ]]; then
  cp -a "$SCRIPT_DIR/go.mod" "$INSTALLER_DIR/go.mod"
fi

if [[ -f "$SCRIPT_DIR/go.sum" ]]; then
  cp -a "$SCRIPT_DIR/go.sum" "$INSTALLER_DIR/go.sum"
fi

if [[ -d "$SCRIPT_DIR/assets" ]]; then
  cp -a "$SCRIPT_DIR/assets" "$INSTALLER_DIR/assets"
fi

cd "$INSTALLER_DIR"

go mod tidy
go build -o GuildSync-Linux-Installer .

APPDIR="$TMP_DIR/AppDir"
mkdir -p "$APPDIR/usr/bin"
mkdir -p "$APPDIR/usr/share/applications"
mkdir -p "$APPDIR/usr/share/icons/hicolor/256x256/apps"

cp -a GuildSync-Linux-Installer "$APPDIR/usr/bin/GuildSync-Linux-Installer"

cat > "$APPDIR/usr/share/applications/guildsync-installer.desktop" <<EOF
[Desktop Entry]
Type=Application
Name=GuildSync Installer
Exec=GuildSync-Linux-Installer
Icon=guildsync-installer
Categories=Utility;
Terminal=false
EOF

if [[ -f "$SCRIPT_DIR/assets/guildsync.png" ]]; then
  cp -a "$SCRIPT_DIR/assets/guildsync.png" "$APPDIR/usr/share/icons/hicolor/256x256/apps/guildsync-installer.png"
else
  convert -size 256x256 xc:transparent "$APPDIR/usr/share/icons/hicolor/256x256/apps/guildsync-installer.png"
fi

cat > "$APPDIR/AppRun" <<'EOF'
#!/usr/bin/env bash
HERE="$(dirname "$(readlink -f "$0")")"
exec "$HERE/usr/bin/GuildSync-Linux-Installer" "$@"
EOF
chmod +x "$APPDIR/AppRun"

LINUXDEPLOY="$TMP_DIR/linuxdeploy-x86_64.AppImage"
APPIMAGETOOL="$TMP_DIR/appimagetool-x86_64.AppImage"

curl -L -o "$LINUXDEPLOY" \
  "https://github.com/linuxdeploy/linuxdeploy/releases/download/continuous/linuxdeploy-x86_64.AppImage"

curl -L -o "$APPIMAGETOOL" \
  "https://github.com/AppImage/AppImageKit/releases/download/continuous/appimagetool-x86_64.AppImage"

chmod +x "$LINUXDEPLOY" "$APPIMAGETOOL"

"$LINUXDEPLOY" \
  --appdir "$APPDIR" \
  --desktop-file "$APPDIR/usr/share/applications/guildsync-installer.desktop" \
  --icon-file "$APPDIR/usr/share/icons/hicolor/256x256/apps/guildsync-installer.png"

ARCH=x86_64 "$APPIMAGETOOL" "$APPDIR" "$OUTPUT_APPIMAGE"

chmod +x "$OUTPUT_APPIMAGE"

echo "Created Linux Fyne installer AppImage: $OUTPUT_APPIMAGE"
