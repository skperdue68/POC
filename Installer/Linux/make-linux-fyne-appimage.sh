#!/usr/bin/env bash
set -euo pipefail

SOURCE_DIR="${1:?Missing source payload directory}"
OUTPUT_APPIMAGE="${2:?Missing output AppImage path}"
VERSION="${3:?Missing version}"

SOURCE_DIR="$(cd "$SOURCE_DIR" && pwd)"
OUTPUT_APPIMAGE="$(realpath -m "$OUTPUT_APPIMAGE")"

case "$OUTPUT_APPIMAGE" in
  *.AppImage) ;;
  *)
    echo "Output filename must end with .AppImage"
    echo "Got: $OUTPUT_APPIMAGE"
    exit 1
    ;;
esac

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
FYNE_INSTALLER_SOURCE="$SCRIPT_DIR/FyneInstaller"

TMP_DIR="$(mktemp -d)"
trap 'rm -rf "$TMP_DIR"' EXIT

INSTALLER_DIR="$TMP_DIR/installer"
PAYLOAD_TAR="$INSTALLER_DIR/payload.tar.gz"

mkdir -p "$INSTALLER_DIR"

echo "Creating safe installer payload..."

(
  cd "$SOURCE_DIR"

  rm -f "$PAYLOAD_TAR"

  tar --sort=name \
    --owner=0 --group=0 --numeric-owner \
    --format=gnu \
    -czf "$PAYLOAD_TAR" \
    GuildSync \
    GuildSyncSettings.txt \
    .env.example \
    ESO
)

python3 - <<PY
import tarfile
from pathlib import Path

payload = Path("$PAYLOAD_TAR")

with tarfile.open(payload, "r:gz") as tf:
    for member in tf.getmembers():
        name = member.name
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

if [[ ! -f "$FYNE_INSTALLER_SOURCE/main.go" ]]; then
  echo "Could not find Fyne installer source:"
  echo "  $FYNE_INSTALLER_SOURCE/main.go"
  exit 1
fi

cp -a "$FYNE_INSTALLER_SOURCE/main.go" "$INSTALLER_DIR/main.go"

if [[ -f "$FYNE_INSTALLER_SOURCE/go.mod" ]]; then
  cp -a "$FYNE_INSTALLER_SOURCE/go.mod" "$INSTALLER_DIR/go.mod"
fi

if [[ -f "$FYNE_INSTALLER_SOURCE/go.sum" ]]; then
  cp -a "$FYNE_INSTALLER_SOURCE/go.sum" "$INSTALLER_DIR/go.sum"
fi

if [[ -d "$FYNE_INSTALLER_SOURCE/assets" ]]; then
  cp -a "$FYNE_INSTALLER_SOURCE/assets" "$INSTALLER_DIR/assets"
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

if [[ -f "$FYNE_INSTALLER_SOURCE/assets/guildsync.png" ]]; then
  cp -a "$FYNE_INSTALLER_SOURCE/assets/guildsync.png" "$APPDIR/usr/share/icons/hicolor/256x256/apps/guildsync-installer.png"
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
