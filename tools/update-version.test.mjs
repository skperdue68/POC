import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import {spawnSync} from 'node:child_process';
import {fileURLToPath} from 'node:url';
const updater = fileURLToPath(new URL('./update-version.go', import.meta.url));
const packages = ['GO/GuildSync-Frontend-Client/frontend', 'NodeJS/GuildSync-Backend-Server', 'NodeJS/GuildSync-Backend-Server/web', 'NodeJS/GuildSync-Discord-Bot'];
function fixture() {
 const dir=fs.mkdtempSync(path.join(os.tmpdir(),'guildsync-version-'));
 const write=(file,text)=>{const target=path.join(dir,file);fs.mkdirSync(path.dirname(target),{recursive:true});fs.writeFileSync(target,text);};
 write('VERSION','1.3.3\n');
 for(const file of ['GO/GuildSync-Frontend-Client/frontend/src/main.js','NodeJS/GuildSync-Backend-Server/web/src/main.js'])write(file,"const GUILDSYNC_APP_VERSION = '1.0.0';\n");
 write('GO/GuildSync-Frontend-Client/wails.json',JSON.stringify({info:{productVersion:'1.0.0'}}));
 for(const pkg of packages){
  write(pkg+'/package.json',JSON.stringify({name:'test',version:'1.0.0'}));
  write(pkg+'/package-lock.json',JSON.stringify({version:'1.0.0',packages:{'':{version:'1.0.0'},'node_modules/dependency':{version:'9.9.9'}}}));
 }
 for(const addon of ['Banking','Roster','Applications'])write('ESO/GuildSync'+addon+'/GuildSync'+addon+'.txt','## Version: 1.0.0\n');
 write('ESO/GuildSyncApplications/GuildSyncApplications.lua','GSA.version = "1.0.0"\n');
 write('Installer/Windows/GuildSyncInstaller.iss','#define MyAppVersion "1.0.0"\n#define MyAppNumericVersion "1.0.0"\nOutputBaseFilename=old\n');
 write('NodeJS/GuildSync-Backend-Server/.env','SECRET=keep-me\nGUILDSYNC_CLIENT_VERSION=1.0.0\n');
 write('NodeJS/GuildSync-Backend-Server/.env.example','# Version comes from package.json\n');
 return {dir,write,read:file=>fs.readFileSync(path.join(dir,file),'utf8'),remove(){assert.equal(path.dirname(path.resolve(dir)),path.resolve(os.tmpdir()));assert(path.basename(dir).startsWith('guildsync-version-'));fs.rmSync(dir,{recursive:true,force:true});}};
}
function run(dir,...args){return spawnSync('go',['run',updater,...args],{cwd:dir,encoding:'utf8'});}
test('tag stamps all components; dependencies and private env stay unchanged',()=>{
 const f=fixture();try{
  const r=run(f.dir,'v1.4.0');assert.equal(r.status,0,r.stderr);
  assert.equal(f.read('VERSION'),'1.4.0\n');
  for(const pkg of packages){assert.equal(JSON.parse(f.read(pkg+'/package.json')).version,'1.4.0');const lock=JSON.parse(f.read(pkg+'/package-lock.json'));assert.equal(lock.version,'1.4.0');assert.equal(lock.packages[''].version,'1.4.0');assert.equal(lock.packages['node_modules/dependency'].version,'9.9.9');}
  assert.equal(f.read('NodeJS/GuildSync-Backend-Server/.env'),'SECRET=keep-me\nGUILDSYNC_CLIENT_VERSION=1.0.0\n');
  assert.equal(run(f.dir,'--check','v1.4.0').status,0);
  const lockFile=packages[3]+'/package-lock.json';const stale=JSON.parse(f.read(lockFile));stale.packages[''].version='1.0.0';f.write(lockFile,JSON.stringify(stale));const before=f.read(lockFile);
  assert.notEqual(run(f.dir,'--check','1.4.0').status,0);assert.equal(f.read(lockFile),before);assert.equal(run(f.dir,'v1.4.0-beta.1+build.2').status,0);assert.equal(run(f.dir,'--check','1.4.0-beta.1+build.2').status,0);
  f.write('ESO/GuildSyncRoster/GuildSyncRoster.txt','## Version: 1.0.0\n');
  assert.notEqual(run(f.dir,'--check','1.4.0').status,0);
 }finally{f.remove();}
});
test('default reads VERSION; check rejects missing required files',()=>{
 const f=fixture();try{const r=run(f.dir);assert.equal(r.status,0,r.stderr);assert.equal(JSON.parse(f.read(packages[3]+'/package.json')).version,'1.3.3');assert.equal(run(f.dir,'--check').status,0);fs.unlinkSync(path.join(f.dir,packages[3]+'/package.json'));assert.notEqual(run(f.dir,'--check').status,0);}finally{f.remove();}
});
test('invalid version leaves files untouched',()=>{
 const f=fixture();try{assert.notEqual(run(f.dir,'v1.2').status,0);assert.equal(f.read('VERSION'),'1.3.3\n');}finally{f.remove();}
});

