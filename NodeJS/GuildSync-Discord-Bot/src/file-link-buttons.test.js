import test from 'node:test';
import assert from 'node:assert/strict';
import { fileLinkButtons } from './file-link-buttons.js';
test('spreadsheet links become labeled Discord link buttons with no duplicate URLs',()=>{
 const rows=fileLinkButtons('View archive [HERE](https://docs.google.com/spreadsheets/d/archive/edit). Working [HERE](https://docs.google.com/spreadsheets/d/working/edit).');
 const buttons=rows[0].toJSON().components;
 assert.equal(buttons[0].style,5);assert.equal(buttons[0].url,'https://docs.google.com/spreadsheets/d/archive/edit');
 assert.equal(buttons[0].label,'Open Archived Raffle');assert.equal(buttons[1].label,'Open Working Raffle');
 assert.equal(fileLinkButtons('No sheet link.').length,0);
 assert.equal(fileLinkButtons('[HERE](https://example.com/spreadsheets/d/other/edit)').length,0);
 assert.equal(fileLinkButtons('[HERE](https://docs.google.com/spreadsheets/d/a/edit) [HERE](https://docs.google.com/spreadsheets/d/a/edit)')[0].toJSON().components.length,1);
});

test('labels follow context instead of position and support Google documents and Drive',()=>{
 const buttons=fileLinkButtons('Working raffle sheet [HERE](https://docs.google.com/spreadsheets/d/working/edit).\nArchived raffle sheet [HERE](https://docs.google.com/spreadsheets/d/archive/edit).')[0].toJSON().components;
 assert.equal(buttons[0].label,'Open Working Raffle');assert.equal(buttons[1].label,'Open Archived Raffle');
 assert.equal(fileLinkButtons('Application [Open document](https://docs.google.com/document/d/doc/edit)')[0].toJSON().components[0].label,'Open document');
 assert.equal(fileLinkButtons('File [HERE](https://drive.google.com/file/d/file/view)')[0].toJSON().components[0].label,'Open Google Drive File');
});
