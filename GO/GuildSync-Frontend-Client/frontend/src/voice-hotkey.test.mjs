import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
const source = await readFile(new URL('./voice-hotkey.js', import.meta.url), 'utf8');
const {createVoiceHotkeyController} = await import(`data:text/javascript;base64,${Buffer.from(source).toString('base64')}`);

test('menu is hidden unless policy and Discord role access are both confirmed',async()=>{
 let response={ok:true,enabled:false,allowed:false};const active=[];
 const socket={connected:true,emit(event,payload,ack){if(event==='guildsync:voice-mute-access')ack(response)}};
 const bridge={GetVoiceHotkeySettings:async()=>({enabled:true,shortcut:'Ctrl+M',supported:true}),SetVoiceHotkeyActive:async value=>active.push(value)};
 const control=createVoiceHotkeyController({bridge,eventsOn(){},getSocket:()=>socket,authenticated:()=>true});
 assert.equal(control.render(),'');await control.connection(true);assert.equal(control.render(),'');
 response={ok:true,enabled:true,allowed:false};await control.refreshAccess();assert.equal(control.render(),'');
 response={ok:true,enabled:true,allowed:true};await control.refreshAccess();assert.match(control.render(),/Voice Channel Mute/);assert.deepEqual(active,[true]);
 await control.refreshAccess();assert.deepEqual(active,[true],'poll must not restart a permitted listener');
 response={ok:false,enabled:true,allowed:true};await control.refreshAccess();assert.equal(control.render(),'');assert.deepEqual(active,[true,false]);control.stop();
});
test('access loss releases an active hold and hides the controls',async()=>{
 let edge,allowed=true;const sent=[];
 const socket={connected:true,emit(event,payload,ack){if(event==='guildsync:voice-mute-access'){ack({ok:true,enabled:true,allowed});return;}sent.push(payload.state);ack?.({ok:true})}};
 const control=createVoiceHotkeyController({bridge:{GetVoiceHotkeySettings:async()=>({enabled:true,shortcut:'Ctrl+M',supported:true}),SetVoiceHotkeyActive:async()=>{}},eventsOn(_,fn){edge=fn},getSocket:()=>socket,authenticated:()=>true});
 await control.connection(true);edge({state:'pressed'});allowed=false;await control.refreshAccess();assert.deepEqual(sent,['pressed','released']);assert.equal(control.render(),'');control.stop();
});

test('an obsolete access response cannot re-enable the listener after disconnect',async()=>{
 let reply;const active=[];const socket={connected:true,emit(event,payload,ack){reply=ack}};
 const control=createVoiceHotkeyController({bridge:{GetVoiceHotkeySettings:async()=>({enabled:true,shortcut:'Ctrl+M',supported:true}),SetVoiceHotkeyActive:async value=>active.push(value)},eventsOn(){},getSocket:()=>socket,authenticated:()=>true});
 const connecting=control.connection(true);await new Promise(resolve=>setImmediate(resolve));socket.connected=false;await control.connection(false);reply({ok:true,enabled:true,allowed:true});await connecting;
 assert.equal(control.render(),'');assert.deepEqual(active,[]);control.stop();
});
test('disconnect releases owner, blocks held replay, fresh press gets a new nonce', async () => {
  globalThis.crypto ??= (await import('node:crypto')).webcrypto;
  let edge; const calls = []; let connected = true;
  const socket = {get connected() {return connected;}, emit(event,payload,ack) {if(event==="guildsync:voice-mute-access"){ack?.({ok:true,enabled:true,allowed:true});return;} calls.push({event,...payload}); ack?.({ok:true});}};
  const bridge = {GetVoiceHotkeySettings:async()=>({enabled:true,shortcut:'Ctrl+M',supported:true}),SetVoiceHotkeyActive:async()=>{}};
  const control = createVoiceHotkeyController({bridge,eventsOn:(_,fn)=>edge=fn,getSocket:()=>socket,authenticated:()=>true});
  await control.connection(true);
  edge({state:'pressed'}); edge({state:'pressed'});
  assert.equal(calls.length,1); const first = calls[0].sessionId;
  await control.connection(false);
  assert.equal(calls[1].state,'released'); assert.equal(calls[1].sessionId,first);
  connected = false; edge({state:'pressed'}); connected = true;
  await control.connection(true); edge({state:'pressed'});
  assert.equal(calls.length,2);
  edge({state:'released'}); edge({state:'pressed'});
  assert.equal(calls.length,3); assert.notEqual(calls[2].sessionId,first);
  control.stop(); assert.equal(calls[3].state,'released');
});
test('rejected press never retries until release', async () => {
  let edge; let presses=0;
  const bridge = {GetVoiceHotkeySettings:async()=>({enabled:true,shortcut:'Ctrl+M',supported:true}),SetVoiceHotkeyActive:async()=>{}};
  const socket={connected:true,emit(event,payload,ack){if(event==='guildsync:voice-mute-access'){ack?.({ok:true,enabled:true,allowed:true});return;} if(payload.state==='pressed')presses++; ack?.({ok:false,message:'Forbidden'});}};
  const control = createVoiceHotkeyController({bridge,eventsOn:(_,fn)=>edge=fn,getSocket:()=>socket,authenticated:()=>true});
  await control.connection(true); edge({state:'pressed'}); edge({state:'pressed'});
  assert.equal(presses,1); control.stop();
});
