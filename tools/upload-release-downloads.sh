#!/usr/bin/env bash
set -euo pipefail

# Credentials are injected through Actions secrets, never committed to the repository.
: "${GUILDSYNC_DEPLOY_HOST:?Set the deployment host secret}"
: "${GUILDSYNC_DEPLOY_USER:?Set the deployment user secret}"
: "${GUILDSYNC_DEPLOY_SSH_KEY:?Set the SSH private key secret}"
: "${GUILDSYNC_DEPLOY_KNOWN_HOSTS:?Set verified SSH host keys}"
: "${GUILDSYNC_DEPLOY_DOWNLOADS_DIR:?Set the absolute server downloads path}"
PORT="${GUILDSYNC_DEPLOY_PORT:-22}"
VERSION="${RELEASE_TAG#v}"
[[ "$GUILDSYNC_DEPLOY_HOST" =~ ^[A-Za-z0-9][A-Za-z0-9.-]*$ ]]
[[ "$GUILDSYNC_DEPLOY_USER" =~ ^[A-Za-z_][A-Za-z0-9_-]*$ ]]
if [[ ! "$PORT" =~ ^[0-9]+$ ]] || (( 10#$PORT < 1 || 10#$PORT > 65535 )); then
  echo 'Invalid SSH port' >&2
  exit 1
fi
[[ "$VERSION" =~ ^[0-9]+\.[0-9]+\.[0-9]+(-[0-9A-Za-z.-]+)?(\+[0-9A-Za-z.-]+)?$ ]]
[[ "$GITHUB_RUN_ID" =~ ^[0-9]+$ && "$GITHUB_RUN_ATTEMPT" =~ ^[0-9]+$ ]]
[[ "$GUILDSYNC_DEPLOY_DOWNLOADS_DIR" == /* && "$GUILDSYNC_DEPLOY_DOWNLOADS_DIR" != / ]]

AUTH_DIR="$(mktemp -d)"
STAGE="/tmp/guildsync-release-${GITHUB_RUN_ID}-${GITHUB_RUN_ATTEMPT}"
TARGET="$GUILDSYNC_DEPLOY_USER@$GUILDSYNC_DEPLOY_HOST"
printf '%s\n' "$GUILDSYNC_DEPLOY_SSH_KEY" > "$AUTH_DIR/key"
printf '%s\n' "$GUILDSYNC_DEPLOY_KNOWN_HOSTS" > "$AUTH_DIR/known_hosts"
chmod 600 "$AUTH_DIR/key" "$AUTH_DIR/known_hosts"
SSH_ARGS=(-i "$AUTH_DIR/key" -o IdentitiesOnly=yes -o BatchMode=yes -o StrictHostKeyChecking=yes -o "UserKnownHostsFile=$AUTH_DIR/known_hosts")
cleanup() {
  ssh "${SSH_ARGS[@]}" -p "$PORT" "$TARGET" "python3 -c 'import pathlib,shutil; p=pathlib.Path(\"$STAGE\"); assert p.parent==pathlib.Path(\"/tmp\") and p.name.startswith(\"guildsync-release-\"); shutil.rmtree(p,ignore_errors=True)'" || true
  rm -f "$AUTH_DIR/key" "$AUTH_DIR/known_hosts"
  rmdir "$AUTH_DIR"
}
trap cleanup EXIT
ssh "${SSH_ARGS[@]}" -p "$PORT" "$TARGET" "mkdir -m 700 '$STAGE'"
scp "${SSH_ARGS[@]}" -P "$PORT" release-source/tools/sync-release-downloads.py installers/*.zip "$TARGET:$STAGE/"
ENCODED_DIR="$(printf '%s' "$GUILDSYNC_DEPLOY_DOWNLOADS_DIR" | base64 | tr -d '\n')"
ssh "${SSH_ARGS[@]}" -p "$PORT" "$TARGET" "python3 '$STAGE/sync-release-downloads.py' --source '$STAGE' --destination-base64 '$ENCODED_DIR' --version '$VERSION'"
