"""Package server runtime and compiled web assets without local secrets or downloads."""
import argparse
import json
import re
import zipfile
from pathlib import Path

def package_release(root, output, version):
    root, output = Path(root).resolve(), Path(output).resolve()
    if not re.fullmatch(r'(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-[0-9A-Za-z.-]+)?(?:\+[0-9A-Za-z.-]+)?', version):
        raise ValueError('Invalid release version')
    if (root / 'VERSION').read_text().strip() != version:
        raise ValueError('VERSION does not match release')
    files = [root / 'VERSION']
    for service in ['GuildSync-Backend-Server', 'GuildSync-Discord-Bot']:
        directory = root / 'NodeJS' / service
        package = json.loads((directory / 'package.json').read_text())
        lock = json.loads((directory / 'package-lock.json').read_text())
        if package.get('version') != version or lock.get('version') != version or lock.get('packages', {}).get('', {}).get('version') != version:
            raise ValueError(f'{service} version does not match release')
        files.extend(directory / name for name in ['package.json', 'package-lock.json', '.env.example'])
        if service == 'GuildSync-Backend-Server':
            files.extend(p for p in directory.glob('*.js') if not p.name.endswith('.test.js'))
            files.extend((directory / 'migrations').glob('*.sql'))
            files.append(directory / 'public/index.html')
            files.extend(p for p in (directory / 'public/assets').rglob('*') if p.is_file())
            required = directory / 'guildsync-backend-server.js'
        else:
            files.extend(p for p in (directory / 'src').rglob('*.js') if not p.name.endswith('.test.js'))
            required = directory / 'src/guildsync-discord-bot.js'
        if required not in files or not required.is_file():
            raise ValueError(f'Missing runtime entry: {required}')
    for file in files:
        if not file.is_file() or file.is_symlink() or any(p.is_symlink() for p in file.parents if p != root):
            raise ValueError(f'Missing or unsafe release input: {file}')
    output.parent.mkdir(parents=True, exist_ok=True)
    temporary = output.with_suffix(output.suffix + '.tmp')
    try:
        with zipfile.ZipFile(temporary, 'w', zipfile.ZIP_DEFLATED) as archive:
            for file in sorted(set(files)):
                archive.write(file, 'GuildSync-Server/' + file.relative_to(root).as_posix())
        temporary.replace(output)
    finally:
        temporary.unlink(missing_ok=True)

if __name__ == '__main__':
    parser = argparse.ArgumentParser()
    parser.add_argument('--root', default='.')
    parser.add_argument('--output', required=True)
    parser.add_argument('--version', required=True)
    args = parser.parse_args()
    package_release(args.root, args.output, args.version)
