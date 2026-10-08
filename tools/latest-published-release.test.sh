#!/usr/bin/env bash
set -euo pipefail
TOOLS="$(cd "$(dirname "$0")" && pwd)"
WORKFLOW="$TOOLS/../.github/workflows/publishguildsyncdownloads.yml"
PYTHON="${PYTHON:-python3}"
TEMP="$(mktemp -d)"
trap 'rm -rf "$TEMP"' EXIT
mkdir -p "$TEMP/downloads-repository" "$TEMP/release-source/tools"
cp "$TOOLS/latest-published-release.py" "$TEMP/release-source/tools/"
export GH_REPO=example/test
gh() {
  [[ "$1" == api ]]
  [[ " $* " == *' --paginate '* && " $* " == *' --slurp '* ]]
  if [[ " $* " == *' --jq '* || " $* " == *' --template '* ]]; then
    echo 'Unsupported gh flag combination' >&2; return 1
  fi
  printf '%s\n' '[[{"tag_name":"v1.3.5","draft":false,"published_at":"2026-10-07T01:00:00Z"}],[{"tag_name":"v1.3.6","draft":false,"published_at":"2026-10-07T02:00:00Z"}]]'
}
python3() { command "$PYTHON" "$@"; }
QUERY_LINES="$("$PYTHON" -c 'import pathlib,sys; print("\n".join(line.strip() for line in pathlib.Path(sys.argv[1]).read_text().splitlines() if "gh api --paginate" in line))' "$WORKFLOW")"
cd "$TEMP/downloads-repository"
COUNT=0
while IFS= read -r line; do
  eval "$line"
  COUNT=$((COUNT+1))
done <<< "$QUERY_LINES"
[[ "$COUNT" == 2 && "$LATEST_TAG" == v1.3.6 && "$CURRENT_LATEST" == v1.3.6 ]]
echo 'Both workflow release queries passed (mock GitHub API).'
