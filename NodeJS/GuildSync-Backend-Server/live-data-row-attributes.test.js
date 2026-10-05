import test from 'node:test';
import assert from 'node:assert/strict';
import {reconcileDataRows} from './web/src/live-data-view.js';
function row(attrs) {
 const values={...attrs};return {children:[],get attributes(){return Object.entries(values).map(([name,value])=>({name,value}))},getAttribute:name=>values[name]??null,hasAttribute:name=>name in values,setAttribute:(name,value)=>values[name]=value,removeAttribute:name=>delete values[name],isEqualNode:other=>JSON.stringify(values)===JSON.stringify(Object.fromEntries(other.attributes.map(a=>[a.name,a.value])))};
}
test('retained roster rows update their position, highlight and rank color without replacement',()=>{
 const currentRow=row({'data-eso-account-name':'Evaine','data-roster-row-index':'3',class:'eso-roster-row roster-search-active-row',style:'color: red;'});
 const wanted=row({'data-eso-account-name':'Evaine','data-roster-row-index':'2',class:'eso-roster-row'});
 const current={children:[currentRow]},incoming={children:[wanted]};reconcileDataRows(current,incoming,'data-eso-account-name');
 assert.equal(current.children[0],currentRow);assert.equal(currentRow.getAttribute('data-roster-row-index'),'2');assert.equal(currentRow.getAttribute('class'),'eso-roster-row');assert.equal(currentRow.getAttribute('style'),null);
});
