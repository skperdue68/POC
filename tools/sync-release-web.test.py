import importlib.util
import json
import tempfile
import unittest
import zipfile
from pathlib import Path
spec=importlib.util.spec_from_file_location('sync',Path(__file__).with_name('sync-release-web.py'))
sync=importlib.util.module_from_spec(spec);spec.loader.exec_module(sync)
class WebSyncTests(unittest.TestCase):
    def bundle(self,path,version='1.3.6',bad=False):
        prefix='GuildSync-Server/NodeJS/GuildSync-Backend-Server/'
        with zipfile.ZipFile(path,'w') as z:
            z.writestr(prefix+'package.json',json.dumps({'version':version}))
            z.writestr(prefix+'public/index.html','<script src="/assets/new.js"></script>')
            z.writestr(prefix+('public/assets/../../secret' if bad else 'public/assets/new.js'),'const version="'+version+'";')
            z.writestr(prefix+'public/downloads/old.zip','excluded')
    def test_served_and_dist_files_match_and_downloads_remain(self):
        with tempfile.TemporaryDirectory() as d:
            root=Path(d);bundle=root/'release.zip';self.bundle(bundle)
            server=root/'NodeJS/GuildSync-Backend-Server';(server/'public/downloads').mkdir(parents=True)
            (server/'public/downloads/keep.zip').write_text('keep');(server/'public/assets').mkdir();(server/'public/assets/old.js').write_text('stale')
            sync.sync_web(bundle,root,'v1.3.6')
            self.assertEqual((server/'public/index.html').read_bytes(),(server/'web/dist/index.html').read_bytes())
            self.assertTrue((server/'public/assets/new.js').exists());self.assertFalse((server/'public/assets/old.js').exists())
            self.assertEqual((server/'public/downloads/keep.zip').read_text(),'keep')
            self.assertFalse((server/'public/downloads/old.zip').exists())
    def test_wrong_version_or_unsafe_zip_leaves_existing_site(self):
        with tempfile.TemporaryDirectory() as d:
            root=Path(d);server=root/'NodeJS/GuildSync-Backend-Server';(server/'public').mkdir(parents=True);(server/'public/index.html').write_text('keep')
            for version,bad in [('1.0.0',False),('1.3.6',True)]:
                bundle=root/'release.zip';self.bundle(bundle,version,bad)
                with self.assertRaises(ValueError):sync.sync_web(bundle,root,'1.3.6')
                self.assertEqual((server/'public/index.html').read_text(),'keep')
if __name__=='__main__':unittest.main()
