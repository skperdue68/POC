#!/usr/bin/env bash
set -euo pipefail
SCRIPT="$(cd "$(dirname "$0")" && pwd)/upload-release-downloads.sh"
TEST_ROOT="$(mktemp -d)"
trap 'rm -rf "$TEST_ROOT"' EXIT
mkdir -p "$TEST_ROOT/bin" "$TEST_ROOT/installers" "$TEST_ROOT/release-source/tools"
cat > "$TEST_ROOT/bin/ssh" <<'MOCK'
#!/usr/bin/env bash
printf 'SSH\n' >> "$MOCK_LOG"
printf '%s\n' "$@" >> "$MOCK_LOG"
exit "${MOCK_SSH_FAILURE:-0}"
MOCK
cat > "$TEST_ROOT/bin/scp" <<'MOCK'
#!/usr/bin/env bash
printf 'SCP\n' >> "$MOCK_LOG"
printf '%s\n' "$@" >> "$MOCK_LOG"
MOCK
chmod +x "$TEST_ROOT/bin/ssh" "$TEST_ROOT/bin/scp"
export PATH="$TEST_ROOT/bin:$PATH"
export MSYS_NO_PATHCONV=1
export MOCK_LOG="$TEST_ROOT/log"
export GUILDSYNC_DEPLOY_HOST=downloads.example.org GUILDSYNC_DEPLOY_USER=guildsync
export GUILDSYNC_DEPLOY_SSH_KEY=fake-test-key GUILDSYNC_DEPLOY_KNOWN_HOSTS=fake-test-host-key
export GUILDSYNC_DEPLOY_DOWNLOADS_DIR="/srv/Guild Sync's/public/downloads"
export GITHUB_RUN_ID=123 GITHUB_RUN_ATTEMPT=2 RELEASE_TAG=v1.4.0
cd "$TEST_ROOT"
bash "$SCRIPT"
grep -q 'StrictHostKeyChecking=yes' "$MOCK_LOG"
grep -q -- '--destination-base64' "$MOCK_LOG"
grep -q '/tmp/guildsync-release-123-2' "$MOCK_LOG"
grep -q 'SCP' "$MOCK_LOG"
ENCODED="$(printf '%s' "$GUILDSYNC_DEPLOY_DOWNLOADS_DIR" | base64 | tr -d '\n')"
grep -Fq "$ENCODED" "$MOCK_LOG"
if grep -Fq "$GUILDSYNC_DEPLOY_SSH_KEY" "$MOCK_LOG"; then echo 'Key leaked into command arguments' >&2; exit 1; fi
rm "$MOCK_LOG"
if GUILDSYNC_DEPLOY_PORT='22; touch bad' bash "$SCRIPT"; then echo 'Invalid port accepted' >&2; exit 1; fi
[[ ! -e "$MOCK_LOG" && ! -e bad ]]
if GUILDSYNC_DEPLOY_DOWNLOADS_DIR=/ bash "$SCRIPT"; then echo 'Root destination accepted' >&2; exit 1; fi
[[ ! -e "$MOCK_LOG" ]]
if MOCK_SSH_FAILURE=1 bash "$SCRIPT"; then echo 'SSH failure hidden' >&2; exit 1; fi
echo 'SSH transport tests passed (mock server).'
