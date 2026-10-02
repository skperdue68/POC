export function formatArchiveMessage({ name, archiveId, sourceId, requestedBy }) {
  const match = /^(\d{2})(\d{2})(\d{2}) Raffle$/i.exec(name || '');
  const date = match ? new Intl.DateTimeFormat('en-US', {timeZone:'UTC',month:'long',day:'numeric',year:'numeric'}).format(new Date(Date.UTC(2000+Number(match[1]),Number(match[2])-1,Number(match[3])))) : name;
  const requester = requestedBy ? 'by ' + String(requestedBy).replace(/[\\*_~`\[\]<>]/g, '').replace(/[\r\n]+/g, ' ') : 'automatically';
  const link = id => 'https://docs.google.com/spreadsheets/d/' + encodeURIComponent(id) + '/edit';
  return 'The raffle sheet for **' + date + '** has been archived ' + requester + '. View the archived sheet [HERE](' + link(archiveId) + ').\n\nThe working raffle sheet has been reset and populated with current raffle data. View the working sheet [HERE](' + link(sourceId) + ').';
}
