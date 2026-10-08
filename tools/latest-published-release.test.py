import importlib.util
import unittest
from pathlib import Path

spec=importlib.util.spec_from_file_location('query',Path(__file__).with_name('latest-published-release.py'))
query=importlib.util.module_from_spec(spec)
spec.loader.exec_module(query)

class ReleaseQueryTests(unittest.TestCase):
    def test_all_pages_and_publication_date_include_old_draft_published_today(self):
        pages=[[{'tag_name':'v1.3.6','draft':False,'published_at':'2026-10-07T10:00:00Z'}],
               [{'tag_name':'v1.2.8','draft':False,'published_at':'2026-10-07T11:00:00Z'},
                {'tag_name':'v9.0.0','draft':True,'published_at':None}]]
        self.assertEqual(query.latest_tag(pages),'v1.2.8')
    def test_prereleases_are_published_releases(self):
        self.assertEqual(query.latest_tag([[{'tag_name':'v1.4.0-beta.1','draft':False,'prerelease':True,'published_at':'2026-10-07T11:00:00Z'}]]),'v1.4.0-beta.1')
    def test_empty_or_invalid_response_fails(self):
        for response in [[],[[]],{},[[{'tag_name':'v1.0.0','draft':False,'published_at':None}]]]:
            with self.assertRaises(ValueError):query.latest_tag(response)

if __name__=='__main__':unittest.main()

