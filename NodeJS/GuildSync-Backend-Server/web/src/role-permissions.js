export const GUILDSYNC_ROLES = ['viewer', 'user', 'admin'];
export const canEditGuildSyncRole = role => role === 'user' || role === 'admin';

// Explicit read allowlist: new operations are never implicitly available to viewers.
const readEvents = new Set([
  'guildsync:client-version',
  'guildsync:request-discord-data-date',
  'guildsync:request-discord-member-dataJSON',
  'guildsync:request-banking-data',
  'guildsync:request-roster-data',
  'guildsync:request-roster-member-notes',
  'guildsync:request-banking-history-matches',
  'guildsync:request-banking-history-records',
  'guildsync:request-roster-rank-history',
  'guildsync:request-roster-stream-history',
  'guildsync:request-discord-member-history',
  'guildsync:request-discord-member-history-events',
  'guildsync:request-associate-ticket-report',
  'guildsync:request-discord-rank-audit-report',
  'guildsync:request-member-links',
  'guildsync:request-member-link-options',
  'guildsync:request-admin-configuration',
  'guildsync:request-active-raffles',
  'guildsync:request-raffle-archives'
]);
export const isReadOnlyGuildSyncEvent = event => readEvents.has(event);
