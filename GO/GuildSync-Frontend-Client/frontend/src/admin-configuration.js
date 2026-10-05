const escape=value=>String(value ?? '').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
export function createAccordionState(){return {open:'',toggle(id){this.open=this.open===id?'':id;},close(){this.open='';}};}
export function draftSetting(setting,changes){
 if(Object.hasOwn(changes,setting.key))return changes[setting.key]===null?{value:setting.defaultValue,override:false,source:'Default (pending Save)'}:{value:changes[setting.key],override:true,source:'GuildSync override (pending Save)'};
 return {value:setting.value,override:setting.source==='GuildSync override',source:setting.source==='.env'?'Default':setting.source};
}
export function formatConfigurationValue(setting,value) {
 if(setting.type==='boolean')return value===true || String(value).toLowerCase()==='true'?'Enabled':'Disabled';
 if(setting.type==='select')return ({private_thread:'Private thread (public fallback)',channel:'Channel or thread'})[value] || String(value);
 return value===undefined || value===null || value===''?'Not configured':String(value);
}
export function receiptPreview(template,{body=false}={}){
 const values={recipient:'@ExampleMember',account_name:'@ExampleMember',display_name:'@ExampleMember',amount:'10,001',deposit_amount:'10,001',raw_amount:'10001',raw_deposit_amount:'10001',event_id:'123456789',ticket_quantity:'20',tickets:'20',purchased_tickets:'20',bonus_percent:'20',bonus_tickets:'4',total_tickets:'24',bonus_deadline:'October 9, 2026 at 7:00 PM Eastern',bonus_block:`Early Purchase Bonus: 20% for purchases before October 9, 2026 at 7:00 PM ET.
Bonus Tickets: 4
Total Tickets: 24`,note:'',note_block:'',ticket_type:'Bi-Weekly',ticket_type_raw:'biweekly',transaction_type:'biweekly',ticket_gold_cost:'10,001',gold_cost:'10,001',raw_gold_cost:'10001',raw_ticket_gold_cost:'10001',purchase_date:'October 5, 2026',data_source:'Guild bank',event_datetime:'2026-10-05T12:00:00Z',event_timestamp:'1791201600',raffle_datetime_eastern:'October 10, 2026 at 8:00 PM Eastern',raffle_date_time_eastern:'October 10, 2026 at 8:00 PM Eastern',raffle_datetime:'October 10, 2026 at 8:00 PM Eastern',mail_request_id:'example',mail_batch_id:'example'};
 const rendered=String(template).replace(/{([a-zA-Z0-9_]+)}/g,(match,key)=>values[key] ?? match);
 return body&&!String(template).includes('{bonus_block}')?rendered+'\n\n'+values.bonus_block:rendered;
}
export function wireReportAccordions(accordion){
 const refresh=()=>{
  for(const button of document.querySelectorAll('[data-report-toggle]')){
   const open=button.dataset.reportToggle===accordion.open;
   button.setAttribute('aria-expanded',String(open));
   const content=document.getElementById(button.getAttribute('aria-controls'));
   if(content){content.classList.toggle('is-open',open);content.inert=!open;}
  }
 };
 for(const button of document.querySelectorAll('[data-report-toggle]'))button.addEventListener('click',()=>{accordion.toggle(button.dataset.reportToggle);refresh();});
 for(const button of document.querySelectorAll('.reports-panel .report-run-button:not([type="submit"])'))button.addEventListener('click',()=>{accordion.close();refresh();});
 refresh();
}
export function createConfigurationPanel(){
 let configuration=null,changes={},loading=false,message='',saving=false;
 const input=(setting,draft)=>{
  const attrs=`data-config-value="${escape(setting.key)}" id="config-${escape(setting.key)}" ${draft.override?'':'disabled'}`;
  if(setting.type==='boolean')return `<select ${attrs}><option value="true" ${String(draft.value)==='true'?'selected':''}>Enabled</option><option value="false" ${String(draft.value)==='false'?'selected':''}>Disabled</option></select>`;
  if(setting.type==='select')return `<select ${attrs}>${setting.options.map(value=>`<option value="${escape(value)}" ${value===draft.value?'selected':''}>${escape(formatConfigurationValue(setting,value))}</option>`).join('')}</select>`;
  if(setting.type==='template')return `<textarea ${attrs} rows="${setting.key.includes('BODY')?9:3}" maxlength="${setting.maxLength}">${escape(draft.value)}</textarea>`;
  return `<input ${attrs} type="${setting.type==='number'?'number':'text'}" ${setting.type==='number'?`min="${setting.min}" max="${setting.max}" step="any"`:''} value="${escape(draft.value)}" placeholder="Not configured">`;
 };
 const render=()=>{
  const groups=configuration?[...new Set(configuration.settings.map(s=>s.group))]:[];
  return `<article class="report-option-card admin-configuration-card"><div class="report-option-copy">
   <h3><button type="button" class="report-section-toggle" data-report-toggle="configuration" aria-expanded="false" aria-controls="adminConfigurationContent">Administrator Configuration <span aria-hidden="true">▾</span></button></h3>
   <div id="adminConfigurationContent" class="report-section-content" inert><div class="report-section-inner">
   <p>Changes take effect only after Save. Return to default to remove a saved override. Settings apply live; active deliveries finish safely.</p>
   <p role="status" class="configuration-status">${escape(message)}</p>
   ${!configuration?`<p>${loading?'Loading configuration...':'Configuration is not loaded.'}</p><button type="button" id="reloadAdminConfiguration">Load configuration</button>`:`
   ${configuration.botDefaultsReported?'':'<p>Bot defaults have not been reported yet. Connect the updated bot before editing its settings.</p>'}
   <form id="adminConfigurationForm">
    ${groups.map(group=>`<fieldset class="configuration-group" ${saving?'disabled':''}><legend>${escape(group)}</legend>
     ${configuration.settings.filter(s=>s.group===group).map(setting=>{const draft=draftSetting(setting,changes);return `<div class="configuration-setting">
      <label for="config-${escape(setting.key)}">${escape(setting.label)}</label>
      <small>${escape(setting.key)} · <span data-config-source="${escape(setting.key)}">${escape(draft.source)}</span></small>
      <label class="configuration-override"><input type="checkbox" data-config-override="${escape(setting.key)}" ${draft.override?'checked':''}> Use a GuildSync override</label>
      <div class="configuration-values">
       <div class="configuration-selected-value"><span>Current selection</span>${input(setting,draft)}</div>
       <div class="configuration-default-value"><span>Default value</span><output>${escape(formatConfigurationValue(setting,setting.defaultValue))}</output></div>
      </div>
      <button type="button" class="configuration-default" data-config-default="${escape(setting.key)}" aria-label="Return ${escape(setting.label)} to default: ${escape(formatConfigurationValue(setting,setting.defaultValue))}">Return to default</button>
      ${setting.placeholders?`<small>Placeholders: ${setting.placeholders.map(k=>escape('{'+k+'}')).join(', ')}</small>`:''}
      ${setting.group==='Receipt messages'?`<label>Example preview (20% bonus)<pre data-config-preview="${escape(setting.key)}">${escape(receiptPreview(draft.value,{body:setting.key.endsWith('BODY_TEMPLATE')}))}</pre></label>`:''}
     </div>`;}).join('')}
    </fieldset>`).join('')}
    <div class="configuration-actions"><button type="submit" ${saving?'disabled':''}>${saving?'Saving...':'Save Configuration'}</button><button type="button" id="reloadAdminConfiguration" ${saving?'disabled':''}>Discard edits and reload</button></div>
   </form>`}
   </div></div></div></article>`;
 };
 const wire=({request,rerender})=>{
  const load=async()=>{if(loading)return;loading=true;message='';try{const response=await request('guildsync:request-admin-configuration',{});if(!response?.ok)throw Error(response?.message || 'Could not load configuration.');configuration=response.configuration;changes={};}catch(error){message=error.message;}finally{loading=false;rerender();}};
  if(!configuration&&!loading&&!message)void load();
  document.getElementById('reloadAdminConfiguration')?.addEventListener('click',()=>void load());
  for(const element of document.querySelectorAll('[data-config-value]'))element.addEventListener('input',()=>{
   const key=element.dataset.configValue;changes[key]=element.value;
   const source=document.querySelector(`[data-config-source="${key}"]`);if(source)source.textContent='GuildSync override (pending Save)';
   const preview=document.querySelector(`[data-config-preview="${key}"]`);if(preview)preview.textContent=receiptPreview(element.value,{body:key.endsWith('BODY_TEMPLATE')});
  });
  for(const element of document.querySelectorAll('[data-config-override]'))element.addEventListener('change',()=>{
   const key=element.dataset.configOverride;const setting=configuration.settings.find(s=>s.key===key);changes[key]=element.checked?draftSetting(setting,changes).value:null;rerender();
  });
  for(const element of document.querySelectorAll('[data-config-default]'))element.addEventListener('click',()=>{changes[element.dataset.configDefault]=null;rerender();});
  document.getElementById('adminConfigurationForm')?.addEventListener('submit',async event=>{
   event.preventDefault();if(saving)return;if(!Object.keys(changes).length){message='No changes to save.';rerender();return;}saving=true;message='';
   const pending={...changes};
   // Freeze this form during save so edits cannot be silently lost in the acknowledgement.
   rerender();document.getElementById('adminConfigurationForm')?.querySelectorAll('input,select,textarea,button').forEach(e=>e.disabled=true);
   try{const response=await request('guildsync:save-admin-configuration',{revision:configuration.revision,changes:pending});if(!response?.ok)throw Error(response?.message || 'Could not save configuration.');configuration=response.configuration;changes={};message='Configuration saved. Backend settings are active; the connected bot applies its settings after active deliveries finish. An offline bot applies them when it reconnects.';}
   catch(error){message=error.message;}finally{saving=false;rerender();}
  });
 };
 return {render,wire,clear(){configuration=null;changes={};message='';}};
}
