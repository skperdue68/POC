import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
const source=fs.readFileSync(new URL('./guildsync-backend-server.js',import.meta.url),'utf8');
const start=source.indexOf("  socket.on('guildsync:save-raffle-bonus-settings'");const handler=source.slice(start,source.indexOf("  socket.on('guildsync:checkout-deposit-mail'",start));
test('raffle bonus saves require current database admin access, even with a cached admin role',async()=>{
 let role='user',saves=0,callback;const ctx={socket:{guildSyncAuthenticated:true,guildSyncAuthType:'desktop',guildSyncUser:{discord_user_id:'123',role:'admin'},on:(event,fn)=>callback=fn},loginDB:{execute:async()=>[[{role}]]},applicationDB:{},saveRaffleBonusSettings:async()=>saves++,saveRaffleBonusOverride:async()=>saves++,getRaffleBonusSettings:async()=>({}),broadcastBankingDataUpdate:async()=>{},sendSocketResponse:(socket,event,ack,response)=>ack(response)};
 vm.createContext(ctx);vm.runInContext(handler,ctx);
 for(const payload of [{},{raffleType:'biweekly'}]){let response;await callback(payload,r=>response=r);assert.equal(response.ok,false);assert.match(response.message,/Admin access/)}assert.equal(saves,0);
 role='admin';let response;await callback({},r=>response=r);assert.equal(response.ok,true);assert.equal(saves,1);
});
