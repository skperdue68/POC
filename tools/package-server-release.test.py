import importlib.util
import json
import tempfile
import unittest
import zipfile
from pathlib import Path

spec = importlib.util.spec_from_file_location('packager', Path(__file__).with_name('package-server-release.py'))
packager = importlib.util.module_from_spec(spec)
spec.loader.exec_module(packager)

class ReleasePackageTests(unittest.TestCase):
    def test_runtime_bundle_has_one_version_and_excludes_private_or_old_files(self):
        with tempfile.TemporaryDirectory(prefix='guildsync-package-') as temp:
            root = Path(temp)
            def write(name, text):
                file = root / name
                file.parent.mkdir(parents=True, exist_ok=True)
                file.write_text(text)
            write('VERSION', '1.4.0\n')
            server = 'NodeJS/GuildSync-Backend-Server'
            bot = 'NodeJS/GuildSync-Discord-Bot'
            for service in [server, bot]:
                write(service+'/package.json', json.dumps({'version':'1.4.0'}))
                write(service+'/package-lock.json', json.dumps({'version':'1.4.0','packages':{'':{'version':'1.4.0'}}}))
                write(service+'/.env.example', 'SECRET=YOUR_SECRET\n')
                write(service+'/.env', 'SECRET=private\n')
                write(service+'/credentials.json', '{"secret":"private"}')
                write(service+'/node_modules/secret.js', 'private')
            write(server+'/guildsync-backend-server.js', 'export const ok=true;')
            write(server+'/release-version.js', 'export const version="1.4.0";')
            write(server+'/public/index.html', '<script src="assets/app.js"></script>')
            write(server+'/public/assets/app.js', 'const version="1.4.0";')
            write(server+'/public/downloads/old.zip', 'old')
            write(server+'/public/private.json', 'private')
            write(server+'/migrations/test.sql', 'SELECT 1;')
            write(bot+'/src/guildsync-discord-bot.js', 'console.log("bot");')
            write(bot+'/src/commands/raffle.js', 'export const command=true;')
            output = root/'release.zip'
            packager.package_release(root, output, '1.4.0')
            with zipfile.ZipFile(output) as archive:
                names = archive.namelist()
                self.assertIn('GuildSync-Server/VERSION', names)
                self.assertIn('GuildSync-Server/'+bot+'/src/commands/raffle.js', names)
                self.assertIn('GuildSync-Server/'+server+'/public/assets/app.js', names)
                self.assertEqual(archive.read('GuildSync-Server/VERSION').decode().strip(), '1.4.0')
                self.assertFalse(any(name.endswith('/.env') or 'credentials' in name or '/node_modules/' in name or '/downloads/' in name or 'private.json' in name for name in names))
            write(bot+'/package.json', json.dumps({'version':'1.0.0'}))
            with self.assertRaises(ValueError):
                packager.package_release(root, root/'bad.zip', '1.4.0')
            self.assertFalse((root/'bad.zip').exists())

if __name__ == '__main__':
    unittest.main()
