export async function requestArchive(action, { sourceId, key, name, archiveId, biweeklyTab, fiftyFiftyTab, eligibleMonthlyDates, details = false }) {
  const url = String(process.env.GUILDSYNC_GOOGLE_ARCHIVE_WEB_APP_URL || '').trim();
  const secret = String(process.env.GUILDSYNC_GOOGLE_ARCHIVE_SECRET || '');
  if (!/^https:\/\/script\.google\.com\/macros\/s\/[\w-]+\/exec$/.test(url) || !secret) {
    throw new Error('Configure GUILDSYNC_GOOGLE_ARCHIVE_WEB_APP_URL and GUILDSYNC_GOOGLE_ARCHIVE_SECRET.');
  }
  let response;
  try {
    response = await fetch(url, {
      method: 'POST', headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ action, sourceId, key, name, archiveId, biweeklyTab, fiftyFiftyTab, eligibleMonthlyDates, secret }), signal: AbortSignal.timeout(120000)
    });
  } catch { throw new Error('Archive web app request failed or timed out; original remains intact.'); }
  if (!response.ok) throw new Error(`Archive web app request failed (${response.status}).`);
  let result;
  try { result = await response.json(); } catch { throw new Error('Archive web app returned invalid JSON; check Apps Script execution errors and deployment access.'); }
  if (result?.ok === false && typeof result.error === 'string' && result.error.trim()) {
    const message = result.error.split(secret).join('[redacted]').replace(/[\r\n]+/g, ' ').slice(0, 1000);
    throw new Error('Archive web app failed: ' + message);
  }
  if (!result || result.ok !== true || result.sourceId !== sourceId || result.key !== key || typeof result.archiveId !== 'string' ||
    !result.archiveId || result.archiveId === sourceId || (archiveId && result.archiveId !== archiveId)) {
    throw new Error('Archive web app could not verify the requested copy; check Apps Script execution logs.');
  }
  if (details && (!result.results || !/^\d{6} Raffle$/.test(result.name || ''))) {
    console.error('Archive response diagnostic:', JSON.stringify({
      action,
      returnedFields: Object.keys(result),
      hasResults: Boolean(result.results),
      archiveName: result.name ?? '(missing)'
    }));
    throw new Error('Archive response is missing results or has an invalid name; check the backend diagnostic log.');
  }
  return details ? result : result.archiveId;
}
