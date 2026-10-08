"""Keep installer ZIPs intact while removing optional GitHub Actions ZIP wrappers."""
import argparse
import base64
import io
import os
import re
import tempfile
import zipfile
from pathlib import Path, PurePosixPath

MAX_ZIP_BYTES = 1024 * 1024 * 1024

def sync_release(source, destination, version):
    version=version.removeprefix('v')
    if not re.fullmatch(r'(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-[0-9A-Za-z.-]+)?(?:\+[0-9A-Za-z.-]+)?', version):
        raise ValueError('Invalid release version')
    source, destination=Path(source),Path(destination)
    expected={f'GuildSync-Setup-{version}-{platform}.zip':extension for platform,extension in
              [('Windows','.exe'),('macOS','.pkg'),('Linux-x86_64','.AppImage')]}
    found={}
    def inspect(name, data, depth):
        if len(data)>MAX_ZIP_BYTES:raise ValueError('Installer ZIP too large')
        with zipfile.ZipFile(io.BytesIO(data)) as archive:
            if name in expected:
                files=[item for item in archive.infolist() if not item.is_dir()]
                if len(files)!=1 or not files[0].filename.endswith(expected[name]):
                    raise ValueError(f'{name} must contain exactly one installer')
                path=PurePosixPath(files[0].filename)
                if path.is_absolute() or '..' in path.parts or '\\' in files[0].filename:
                    raise ValueError(f'Unsafe installer path in {name}')
                if files[0].file_size>MAX_ZIP_BYTES or archive.testzip() is not None:
                    raise ValueError(f'Invalid installer ZIP: {name}')
                if name in found:raise ValueError(f'Duplicate release installer: {name}')
                found[name]=data
            elif depth<2:
                for item in archive.infolist():
                    if item.filename.endswith('.zip'):
                        if item.file_size>MAX_ZIP_BYTES:raise ValueError('Nested ZIP too large')
                        inspect(PurePosixPath(item.filename).name,archive.read(item),depth+1)
    for file in sorted(source.rglob('*.zip')):
        if file.is_symlink():raise ValueError('Symlink release asset rejected')
        if file.stat().st_size>MAX_ZIP_BYTES:raise ValueError('Release ZIP too large')
        inspect(file.name,file.read_bytes(),0)
    missing=set(expected)-set(found)
    if missing:raise ValueError('Missing release installer ZIPs: '+', '.join(sorted(missing)))
    if destination.is_symlink():raise ValueError('Symlink downloads directory rejected')
    destination.mkdir(parents=True,exist_ok=True)
    for name,data in found.items():
        target=destination/name
        if target.is_symlink():raise ValueError('Symlink installer destination rejected')
    # Validate the complete set before changing any published file; each promotion is atomic.
    for name,data in sorted(found.items()):
        temporary=None
        try:
            with tempfile.NamedTemporaryFile(dir=destination,prefix='.guildsync-',suffix='.tmp',delete=False) as stream:
                temporary=Path(stream.name);stream.write(data)
            temporary.chmod(0o644)
            os.replace(temporary,destination/name)
        finally:
            if temporary is not None:temporary.unlink(missing_ok=True)
    return sorted(found)

if __name__=='__main__':
    parser=argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--source',required=True)
    locations=parser.add_mutually_exclusive_group()
    locations.add_argument('--destination')
    locations.add_argument('--destination-base64',help='Encoded absolute server downloads path for SSH transport')
    parser.add_argument('--version',required=True)
    args=parser.parse_args()
    destination=args.destination or 'NodeJS/GuildSync-Backend-Server/public/downloads'
    if args.destination_base64:
        destination=base64.b64decode(args.destination_base64,validate=True).decode('utf-8')
        if not Path(destination).is_absolute():parser.error('Server downloads path must be absolute')
    for name in sync_release(args.source,destination,args.version):print(name)
