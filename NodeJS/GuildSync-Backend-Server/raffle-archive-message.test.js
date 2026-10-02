import test from 'node:test';
import assert from 'node:assert/strict';
import { formatArchiveMessage } from './raffle-archive-message.js';
test('archive message shows date, requester and short archive/working links', () => {
 const message = formatArchiveMessage({name:'261010 Raffle',archiveId:'copy',sourceId:'working',requestedBy:'EvaineFaye'});
 assert.match(message,/October 10, 2026.*archived by EvaineFaye/);
 assert.match(message,/\[HERE\]\(https:\/\/docs.google.com\/spreadsheets\/d\/copy\/edit\)/);
 assert.match(message,/\n\nThe working raffle sheet has been reset.*\[HERE\].*working\/edit/);
 assert.match(formatArchiveMessage({name:'261010 Raffle',archiveId:'copy',sourceId:'working'}),/archived automatically/);
});
