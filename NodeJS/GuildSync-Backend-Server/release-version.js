import fs from 'node:fs';

export function readReleaseVersion(packageFile = new URL('./package.json', import.meta.url), legacyVersion = process.env.GUILDSYNC_CLIENT_VERSION, warn = console.warn) {
  const {version} = JSON.parse(fs.readFileSync(packageFile, 'utf8'));
  if (typeof version !== 'string' || !/^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-[0-9A-Za-z.-]+)?(?:\+[0-9A-Za-z.-]+)?$/.test(version)) {
    throw new Error('Missing or invalid GuildSync version in package.json');
  }
  if (legacyVersion && legacyVersion.trim() !== version) warn(`Ignoring obsolete GUILDSYNC_CLIENT_VERSION=${legacyVersion}; packaged GuildSync version is ${version}.`);
  return version;
}
