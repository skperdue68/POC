import importlib.util
import tempfile
import unittest
import zipfile
from pathlib import Path

spec = importlib.util.spec_from_file_location('sync', Path(__file__).with_name('sync-release-downloads.py'))
sync = importlib.util.module_from_spec(spec)
spec.loader.exec_module(sync)

class InstallerSyncTests(unittest.TestCase):
    def make_installers(self, directory, version='1.4.0'):
        names=[]
        for platform, extension in [('Windows','.exe'),('macOS','.pkg'),('Linux-x86_64','.AppImage')]:
            name=f'GuildSync-Setup-{version}-{platform}.zip'
            with zipfile.ZipFile(directory/name,'w') as archive:
                archive.writestr(f'GuildSync-Setup-{version}{extension}',b'installer')
            names.append(name)
        return names

    def test_direct_release_zips_preserved_without_unpacking_installers(self):
        with tempfile.TemporaryDirectory() as temp:
            root=Path(temp);source=root/'assets';source.mkdir();dest=root/'downloads';dest.mkdir()
            old=dest/'GuildSync-Setup-1.3.3-macOS.zip';old.write_bytes(b'keep')
            names=self.make_installers(source)
            sync.sync_release(source,dest,'v1.4.0')
            for name in names:self.assertEqual((source/name).read_bytes(),(dest/name).read_bytes())
            self.assertEqual(old.read_bytes(),b'keep')
            self.assertEqual(len(list(dest.iterdir())),4)

    def test_actions_wrapper_unwrapped_once_to_installer_zip(self):
        with tempfile.TemporaryDirectory() as temp:
            root=Path(temp);nested=root/'nested';nested.mkdir();source=root/'artifacts';source.mkdir()
            names=self.make_installers(nested)
            with zipfile.ZipFile(source/'GuildSync-installers-1.4.0.zip','w') as wrapper:
                for name in names:wrapper.write(nested/name,'release/'+name)
            sync.sync_release(source,root/'downloads','1.4.0')
            self.assertEqual(sorted(p.name for p in (root/'downloads').iterdir()),sorted(names))

    def test_missing_or_wrong_payload_does_not_change_downloads(self):
        with tempfile.TemporaryDirectory() as temp:
            root=Path(temp);source=root/'assets';source.mkdir();dest=root/'downloads';dest.mkdir()
            names=self.make_installers(source)
            with zipfile.ZipFile(source/names[1],'w') as bad:bad.writestr('../../bad.pkg',b'bad')
            with self.assertRaises(ValueError):sync.sync_release(source,dest,'1.4.0')
            self.assertEqual(list(dest.iterdir()),[])
            (source/names[1]).unlink()
            with self.assertRaises(ValueError):sync.sync_release(source,dest,'1.4.0')
            self.assertEqual(list(dest.iterdir()),[])

if __name__=='__main__':unittest.main()
