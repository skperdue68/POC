"""Select the most recently published release from gh api --paginate --slurp JSON."""
import json
import sys
from datetime import datetime

def latest_tag(pages):
    if not isinstance(pages,list) or any(not isinstance(page,list) for page in pages):
        raise ValueError('Expected a JSON array of release pages')
    releases=[]
    for page in pages:
        for release in page:
            if not isinstance(release,dict):raise ValueError('Invalid release response')
            if release.get('draft'):continue
            tag,published=release.get('tag_name'),release.get('published_at')
            if not isinstance(tag,str) or not tag or not isinstance(published,str):
                raise ValueError('Published release is missing tag or publication date')
            date=datetime.fromisoformat(published.replace('Z','+00:00'))
            if date.tzinfo is None:raise ValueError('Release publication date has no timezone')
            releases.append((date,tag))
    if not releases:raise ValueError('No published releases found')
    return max(releases)[1]

if __name__=='__main__':
    print(latest_tag(json.load(sys.stdin)))
