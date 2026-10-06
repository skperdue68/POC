import {GUILDSYNC_ROLES} from './role-permissions.js';
const columns='discord_user_id, username, global_name, guild_member_name, email, allowed, role, requested_at, approved_at, last_login_at, revoked_at';
const fields=columns.split(', ');
const publicUser=row=>Object.fromEntries(fields.map(key=>[key,row[key]??null]));
const snapshot=row=>({allowed:Number(row.allowed),role:row.role,email:row.email??'',guild_member_name:row.guild_member_name??'',revoked_at:row.revoked_at??null});
function id(value){const clean=String(value??'');if(!/^\d{1,32}$/.test(clean))throw Error('Invalid Discord user ID.');return clean;}
function values(payload){
 const result={};
 if(Object.hasOwn(payload,'role')){if(!GUILDSYNC_ROLES.includes(payload.role))throw Error('Role must be viewer, user, or admin.');result.role=payload.role;}
 for(const key of ['email','guild_member_name'])if(Object.hasOwn(payload,key)){
  if(typeof payload[key]!=='string')throw Error(key+' must be text.');
  const text=payload[key].trim();if(text.length>255)throw Error(key+' must be at most 255 characters.');
  if(key==='email'&&text&&!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(text))throw Error('Enter a valid email address or leave it blank.');
  result[key]=text||null;
 }
 return result;
}
export function createUserAdministration(db,{onChange=async()=>{},log=()=>{}}={}){
 const authorize=async actor=>{
  const [rows]=await db.execute('SELECT role, allowed FROM guildsync_users WHERE discord_user_id = ? LIMIT 1',[id(actor)]);
  if(Number(rows[0]?.allowed)!==1||rows[0].role!=='admin')throw Error('Admin access is required to manage GuildSync users.');
 };
 const count=async()=>{const [rows]=await db.execute("SELECT COUNT(*) AS pending_count FROM guildsync_users WHERE revoked_at IS NULL AND (allowed = 0 OR role = 'pending')");return Number(rows[0]?.pending_count)||0;};
 return {
  async list(actor,{include_revoked=false}={}){await authorize(actor);if(typeof include_revoked!=='boolean')throw Error('Invalid revoked account filter.');const [rows]=await db.execute(`SELECT ${columns} FROM guildsync_users ${include_revoked?'':'WHERE revoked_at IS NULL'} ORDER BY allowed, requested_at DESC, username`);return {users:rows.map(publicUser),pending_count:await count()};},
  async pending(actor){await authorize(actor);return {pending_count:await count()};},
  async change(actor,payload={}){
   const actorId=id(actor),target=id(payload.discord_user_id),action=payload.action;
   if(!['save','approve','remove','revoke','reinstate'].includes(action))throw Error('Invalid user administration action.');
   if(Object.keys(payload).some(key=>!['action','discord_user_id','expected','role','email','guild_member_name'].includes(key)))throw Error('Unsupported user field.');
   if(target===actorId&&(action!=='save'||Object.hasOwn(payload,'role')))throw Error('You cannot change your own role, approval, or revoke your own account.');
   const updates=values(payload);let result;const connection=await db.getConnection();
   try{
    await connection.beginTransaction();
    // Lock the administrator set in a consistent order: simultaneous edits cannot remove all admins.
    const [admins]=await connection.execute("SELECT discord_user_id FROM guildsync_users WHERE allowed = 1 AND role = 'admin' ORDER BY discord_user_id FOR UPDATE");
    if(!admins.some(row=>row.discord_user_id===actorId))throw Error('Admin access is required to manage GuildSync users.');
    const [rows]=await connection.execute(`SELECT ${columns} FROM guildsync_users WHERE discord_user_id = ? FOR UPDATE`,[target]);
    const row=rows[0];if(!row)throw Error('This user no longer exists. Refresh the list.');
    const current=snapshot(row),expected=payload.expected;
    if(!expected||Object.keys(current).some(key=>key==='allowed'?Number(expected[key])!==current[key]:key==='revoked_at'?(expected[key]??null)!==current[key]:expected[key]!==current[key]))throw Error('This user changed. Refresh the list before saving.');
    if(action==='remove'||action==='revoke'){
     const revoked_at=new Date().toISOString();
     await connection.execute('DELETE FROM guildsync_login_sessions WHERE discord_user_id = ?',[target]);
     await connection.execute('UPDATE guildsync_users SET allowed = ?, revoked_at = ? WHERE discord_user_id = ?',[0,revoked_at,target]);
     result={removed:true,revoked:true,user:publicUser({...row,allowed:0,revoked_at}),discord_user_id:target};
    }else{
     if(action==='reinstate'){
      if(!row.revoked_at)throw Error('This account is not revoked. Refresh the list.');
      const now=new Date().toISOString();
      updates.allowed=1;updates.revoked_at=null;updates.role=updates.role||(GUILDSYNC_ROLES.includes(row.role)?row.role:'viewer');updates.approved_at=now;updates.requested_at=now;
      await connection.execute('DELETE FROM guildsync_login_sessions WHERE discord_user_id = ?',[target]);
     }else if(row.revoked_at)throw Error('This account has been revoked. Refresh the list.');
     if(action==='approve'){updates.allowed=1;updates.role=updates.role||(GUILDSYNC_ROLES.includes(row.role)?row.role:'viewer');updates.approved_at=new Date().toISOString();}
     const names=Object.keys(updates);if(!names.length)throw Error('No user changes were provided.');
     await connection.execute(`UPDATE guildsync_users SET ${names.map(key=>`${key} = ?`).join(', ')} WHERE discord_user_id = ?`,[...names.map(key=>updates[key]),target]);
     result={removed:false,user:publicUser({...row,...updates}),discord_user_id:target};
    }
    await connection.commit();
   }catch(error){await connection.rollback();throw error;}finally{connection.release();}
   // A notification failure must not turn a committed account change into a failed save.
   try{await onChange({...result,actor_id:actorId,action});}catch(error){log('User administration notification failed: '+error.message);}
   return result;
  }
 };
}
export function registerUserAdministrationSocket(socket,service){
 const route=(event,action)=>socket.on(event,async(payload={},callback)=>{
  if(typeof callback!=='function')return;
  try{
   if(!socket.guildSyncAuthenticated||socket.guildSyncAuthType==='discord-bot'||!socket.guildSyncUser?.discord_user_id)throw Error('Admin access is required to manage GuildSync users.');
   callback({ok:true,...await action(socket.guildSyncUser.discord_user_id,payload)});
  }catch(error){callback({ok:false,message:error.message});}
 });
 route('guildsync:request-users',(actor,payload)=>service.list(actor,payload));
 route('guildsync:request-pending-users',actor=>service.pending(actor));
 route('guildsync:change-user',(actor,payload)=>service.change(actor,payload));
}
