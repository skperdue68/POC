#!/usr/bin/env bash
set -euo pipefail

PAYLOAD_DIR="${1:?payload directory required}"
OUT_FILE="${2:?output AppImage path required}"
APP_VERSION="${3:-0.0.0}"
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
SRC_DIR="$SCRIPT_DIR/FyneInstaller"
WORK_DIR="$(mktemp -d)"
APPDIR="$WORK_DIR/AppDir"
APPIMAGE_TOOL="$WORK_DIR/appimagetool"
LINUXDEPLOY="$WORK_DIR/linuxdeploy"

cleanup() {
  rm -rf "$WORK_DIR"
}
trap cleanup EXIT

cp -a "$SRC_DIR" "$WORK_DIR/FyneInstaller"
tar -C "$PAYLOAD_DIR" -czf "$WORK_DIR/FyneInstaller/payload.tar.gz" .

pushd "$WORK_DIR/FyneInstaller" >/dev/null
go mod download
go build -trimpath -ldflags "-s -w -X main.installerVersion=$APP_VERSION" -o "$WORK_DIR/GuildSync-Linux-Installer"
popd >/dev/null

mkdir -p "$APPDIR/usr/bin" "$APPDIR/usr/share/applications" "$APPDIR/usr/share/icons/hicolor/256x256/apps"
cp "$WORK_DIR/GuildSync-Linux-Installer" "$APPDIR/usr/bin/GuildSync-Linux-Installer"
chmod +x "$APPDIR/usr/bin/GuildSync-Linux-Installer"

cat > "$APPDIR/guildsync-installer.desktop" <<DESKTOP
[Desktop Entry]
Type=Application
Name=GuildSync Installer
Exec=GuildSync-Linux-Installer
Icon=guildsync-installer
Terminal=false
Categories=Utility;
DESKTOP
cp "$APPDIR/guildsync-installer.desktop" "$APPDIR/usr/share/applications/guildsync-installer.desktop"

python3 - <<'PY' "$APPDIR/usr/share/icons/hicolor/256x256/apps/guildsync-installer.png"
import struct, zlib, sys
out = sys.argv[1]
w = h = 256
# simple transparent PNG with a dark square and GS letters is intentionally avoided
# to keep this script dependency-free; this creates a valid plain PNG icon.
row = bytes([0] + [48, 58, 72, 255] * w)
raw = row * h
def chunk(t, data):
    return struct.pack('>I', len(data)) + t + data + struct.pack('>I', zlib.crc32(t + data) & 0xffffffff)
with open(out, 'wb') as f:
    f.write(b'\x89PNG\r\n\x1a\n')
    f.write(chunk(b'IHDR', struct.pack('>IIBBBBB', w, h, 8, 6, 0, 0, 0)))
    f.write(chunk(b'IDAT', zlib.compress(raw, 9)))
    f.write(chunk(b'IEND', b''))
PY
cp "$APPDIR/usr/share/icons/hicolor/256x256/apps/guildsync-installer.png" "$APPDIR/guildsync-installer.png"

cat > "$APPDIR/AppRun" <<'APPRUN'
#!/usr/bin/env bash
HERE="$(dirname "$(readlink -f "$0")")"
exec "$HERE/usr/bin/GuildSync-Linux-Installer" "$@"
APPRUN
chmod +x "$APPDIR/AppRun"

curl -L --retry 3 -o "$LINUXDEPLOY" "https://github.com/linuxdeploy/linuxdeploy/releases/download/continuous/linuxdeploy-x86_64.AppImage"
curl -L --retry 3 -o "$APPIMAGE_TOOL" "https://github.com/AppImage/AppImageKit/releases/download/continuous/appimagetool-x86_64.AppImage"
chmod +x "$LINUXDEPLOY" "$APPIMAGE_TOOL"

# Extract these tools because GitHub-hosted Ubuntu runners may not have FUSE available.
"$LINUXDEPLOY" --appimage-extract >/dev/null
mv squashfs-root "$WORK_DIR/linuxdeploy-extracted"
"$APPIMAGE_TOOL" --appimage-extract >/dev/null
mv squashfs-root "$WORK_DIR/appimagetool-extracted"

"$WORK_DIR/linuxdeploy-extracted/AppRun" --appdir "$APPDIR"
ARCH=x86_64 "$WORK_DIR/appimagetool-extracted/AppRun" "$APPDIR" "$OUT_FILE"
chmod +x "$OUT_FILE"
