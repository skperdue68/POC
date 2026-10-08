import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import {readReleaseVersion} from './release-version.js';
test('packaged version wins over stale env, without editing env or package',()=>{
  const dir=fs.mkdtempSync(path.join(os.tmpdir(),'guildsync-runtime-version-'));
  try {const file=path.join(dir,'package.json');const original=JSON.stringify({version:'1.4.0'});fs.writeFileSync(file,original);const warnings=[];
    assert.equal(readReleaseVersion(file,'1.2.7',message=>warnings.push(message)),'1.4.0');assert.equal(warnings.length,1);assert.equal(fs.readFileSync(file,'utf8'),original);
    assert.equal(readReleaseVersion(file,undefined,()=>assert.fail('Unneeded warning')),'1.4.0');
    fs.writeFileSync(file,JSON.stringify({version:'invalid'}));assert.throws(()=>readReleaseVersion(file,undefined,()=>{}));
  } finally {assert.equal(path.dirname(path.resolve(dir)),path.resolve(os.tmpdir()));assert(path.basename(dir).startsWith('guildsync-runtime-version-'));fs.rmSync(dir,{recursive:true,force:true});}
});
