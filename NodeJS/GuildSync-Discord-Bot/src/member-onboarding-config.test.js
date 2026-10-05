import test from 'node:test';
import assert from 'node:assert/strict';
import { readOnboardingConfig, renderOnboardingMessage } from './member-onboarding-config.js';

test('onboarding defaults disabled, private, and 24 hours',()=>{
 const config=readOnboardingConfig({});
 assert.equal(config.enabled,false);assert.equal(config.mode,'private_thread');assert.equal(config.reminderHours,24);
});
test('onboarding configuration validates toggles, destination, delay and templates',()=>{
 const valid={GUILDSYNC_ONBOARDING_ENABLED:'true',GUILDSYNC_ONBOARDING_CHANNEL_ID:'123'};
 assert.equal(readOnboardingConfig(valid).enabled,true);
 for(const extra of [{GUILDSYNC_ONBOARDING_REMINDER_HOURS:'0'},{GUILDSYNC_ONBOARDING_NOTIFICATION_MODE:'dm'},{GUILDSYNC_ONBOARDING_PROMOTION_MESSAGE:'{unknown}'},{GUILDSYNC_ONBOARDING_ENABLED:'maybe'}])
  assert.throws(()=>readOnboardingConfig({...valid,...extra}));
 assert.throws(()=>readOnboardingConfig({GUILDSYNC_ONBOARDING_ENABLED:'true'}),/CHANNEL_ID/);
 assert.doesNotThrow(()=>readOnboardingConfig({GUILDSYNC_ONBOARDING_ENABLED:'true',GUILDSYNC_ONBOARDING_REMINDER_ENABLED:'false',GUILDSYNC_ONBOARDING_PROMOTION_NOTIFY_ENABLED:'false'}));
});
test('templates escape inserted names and limit ping to intended user',()=>{
 const result=renderOnboardingMessage('{mention} linked to {eso_name}. {associate_role} after {hours} hours.',{userId:'123',esoName:'@everyone **bob**',associateRole:'Associate',hours:24});
 assert.deepEqual(result.allowedMentions,{parse:[],users:['123']});
 assert.match(result.content,/<@123>/);assert.doesNotMatch(result.content,/\*\*bob\*\*/);
});
test('a customized template still tags the intended member when placeholder is omitted',()=>{
 assert.match(renderOnboardingMessage('Please link your account.',{userId:'123'}).content,/^<@123> /);
});
