"""Copy compiled web files from a server release ZIP without changing runtime data."""
import argparse
import json
import re
import stat
import tempfile
import zipfile
from pathlib import Path, PurePosixPath

def sync_web(bundle,root,version):
    version=version.removeprefix('v')
    if not re.fullmatch(r'\d+\.\d+\.\d+(?:-[0-9A-Za-z.-]+)?(?:\+[0-9A-Za-z.-]+)?',version):raise ValueError('Invalid version')
    root=Path(root).resolve();server=root/'NodeJS/GuildSync-Backend-Server'
    prefix='GuildSync-Server/NodeJS/GuildSync-Backend-Server/'
    files={}
    with zipfile.ZipFile(bundle) as archive:
        if json.loads(archive.read(prefix+'package.json')).get('version')!=version:raise ValueError('Server bundle version mismatch')
        for item in archive.infolist():
            if item.is_dir() or not item.filename.startswith(prefix+'public/'):continue
            name=item.filename[len(prefix+'public/'):];path=PurePosixPath(name)
            if path.is_absolute() or '..' in path.parts or '\\' in name:raise ValueError('Unsafe web asset path')
            if name!='index.html' and not name.startswith('assets/'):continue
            if stat.S_ISLNK(item.external_attr>>16) or item.file_size>100*1024*1024:raise ValueError('Unsafe web asset')
            if name in files:raise ValueError('Duplicate web asset')
            files[name]=archive.read(item)
    if 'index.html' not in files or not any(name.startswith('assets/') for name in files):raise ValueError('Missing compiled web files')
    destinations=[server/'public',server/'web/dist']
    for destination in destinations:
        for target in [destination,destination/'assets',destination/'index.html']:
            if target.is_symlink() or any(parent.is_symlink() for parent in target.parents if parent!=root):raise ValueError('Symlink web destination rejected')
    # Validate all archive inputs and destination paths before changing either generated tree.
    for destination in destinations:
        destination.mkdir(parents=True,exist_ok=True)
        with tempfile.TemporaryDirectory(prefix='.guildsync-web-',dir=destination) as temporary:
            stage=Path(temporary)
            for name,data in files.items():
                file=stage/name;file.parent.mkdir(parents=True,exist_ok=True);file.write_bytes(data)
            assets=destination/'assets'
            if assets.exists():
                backup=stage/'old-assets';assets.rename(backup)
            try:(stage/'assets').rename(assets)
            except Exception:
                if (stage/'old-assets').exists():(stage/'old-assets').rename(assets)
                raise
            (stage/'index.html').replace(destination/'index.html')
    return sorted(files)

if __name__=='__main__':
    parser=argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--bundle',required=True);parser.add_argument('--root',default='.');parser.add_argument('--version',required=True)
    args=parser.parse_args()
    for name in sync_web(args.bundle,args.root,args.version):print(name)
