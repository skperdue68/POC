/* Deploy as a Web App: execute as Me, access Anyone. Enable the advanced Drive service.
 * Script Properties: ARCHIVE_SECRET, SOURCE_SPREADSHEET_ID, ARCHIVE_FOLDER_ID.
 * Only copies files. Clearing and database replay remain in the GuildSync backend.
 */
function doPost(e) {
  const json = value => ContentService.createTextOutput(JSON.stringify(value)).setMimeType(ContentService.MimeType.JSON);
  const properties = PropertiesService.getScriptProperties();
  let request;
  try { request = JSON.parse(e.postData.contents); } catch (_) { throw new Error('GuildSync archive: Invalid JSON request'); }
  if (!request || typeof request !== 'object' || Array.isArray(request)) throw new Error('GuildSync archive: Request must be a JSON object');
  const secret = properties.getProperty('ARCHIVE_SECRET');
  const sourceId = properties.getProperty('SOURCE_SPREADSHEET_ID');
  const folderId = properties.getProperty('ARCHIVE_FOLDER_ID');
  // Report validation failures without logging credentials or request contents.
  const problems = [];
  if (!secret) problems.push('ARCHIVE_SECRET property is missing');
  else if (request.secret !== secret) problems.push('Backend secret does not match ARCHIVE_SECRET');
  if (!sourceId) problems.push('SOURCE_SPREADSHEET_ID property is missing');
  else if (request.sourceId !== sourceId) problems.push('Backend spreadsheet ID does not match SOURCE_SPREADSHEET_ID');
  if (!folderId) problems.push('ARCHIVE_FOLDER_ID property is missing');
  if (!['archive', 'verify'].includes(request.action)) problems.push('Unsupported request action');
  if (!/^[a-f0-9]{32}:(raffle-rollover-\d+|raffle-manual-[a-f0-9-]+)$/.test(request.key || '')) problems.push('Invalid archive request key');
  if (problems.length) throw new Error('GuildSync archive: ' + problems.join('; '));
  const lock = LockService.getScriptLock();
  if (!lock.tryLock(30000)) throw new Error('GuildSync archive: Another archive operation holds the lock; retry later');
  try {
    const escape = value => String(value).replace(/\\/g, '\\\\').replace(/'/g, "\\'");
    let archive;
    if (request.action === 'archive') {
      if (!/^\d{6} raffle$/.test(request.name || '')) throw new Error('Invalid archive name');
      const found = Drive.Files.list({ q: "'" + escape(folderId) + "' in parents and trashed=false and appProperties has { key='guildsyncArchive' and value='" + escape(request.key) + "' }",
        fields: 'files(id)', pageSize: 100 });
      if ((found.files || []).length > 1) throw new Error('Multiple archives found for closure');
      archive = found.files && found.files[0];
      if (!archive) archive = Drive.Files.copy({ name: request.name, parents: [folderId],
        appProperties: { guildsyncArchive: request.key, guildsyncSource: sourceId } }, sourceId, { fields: 'id' });
    } else archive = { id: request.archiveId };
    if (!archive.id || archive.id === sourceId) throw new Error('Invalid copy ID');
    const file = Drive.Files.get(archive.id, { fields: 'id,trashed,mimeType,parents,appProperties' });
    if (file.trashed || file.mimeType !== 'application/vnd.google-apps.spreadsheet' ||
        !file.parents || file.parents.indexOf(folderId) < 0 || file.appProperties.guildsyncArchive !== request.key ||
        file.appProperties.guildsyncSource !== sourceId) throw new Error('Archive verification failed');
    // Reconcile sharing on every retry before declaring the archive ready.
    const list = id => {
      let permissions = [], pageToken;
      do {
        const page = Drive.Permissions.list(id, { fields: 'nextPageToken,permissions(id,type,role,emailAddress,domain,allowFileDiscovery,deleted)', pageToken: pageToken });
        permissions = permissions.concat(page.permissions || []); pageToken = page.nextPageToken;
      } while (pageToken);
      return permissions;
    };
    const desired = list(sourceId).filter(p => !p.deleted && p.role !== 'owner');
    let existing = list(archive.id);
    desired.forEach(p => {
      const match = existing.find(q => q.type === p.type && (p.type === 'anyone' || (p.type === 'domain' ? q.domain === p.domain : q.emailAddress === p.emailAddress)));
      const permission = { type: p.type, role: p.role };
      if (p.emailAddress) permission.emailAddress = p.emailAddress;
      if (p.domain) permission.domain = p.domain;
      if (p.allowFileDiscovery !== undefined) permission.allowFileDiscovery = p.allowFileDiscovery;
      if (!match) Drive.Permissions.create(permission, archive.id, { sendNotificationEmail: false });
      else if (match.role !== p.role || match.allowFileDiscovery !== p.allowFileDiscovery) {
        const update = { role: p.role };
        if (p.allowFileDiscovery !== undefined) update.allowFileDiscovery = p.allowFileDiscovery;
        Drive.Permissions.update(update, archive.id, match.id);
      }
    });
    existing = list(archive.id);
    if (!desired.every(p => existing.some(q => q.type === p.type && q.role === p.role && q.allowFileDiscovery === p.allowFileDiscovery &&
        (p.type === 'anyone' || (p.type === 'domain' ? q.domain === p.domain : q.emailAddress === p.emailAddress))))) throw new Error('Archive sharing verification failed');
    // Verify the file can actually be opened as a spreadsheet before allowing reset.
    SpreadsheetApp.openById(archive.id).getSheets();
    return json({ ok: true, sourceId: sourceId, key: request.key, archiveId: archive.id });
  } catch (error) {
    console.error(String(error));
    throw error;
  } finally { lock.releaseLock(); }
}
