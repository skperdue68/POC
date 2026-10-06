export function createVoiceHotkeyController({ bridge, eventsOn, getSocket, authenticated, changed = () => {} }) {
  let settings = { enabled: false, shortcut: 'Ctrl+M', supported: false };
  let held = false, sessionId = null, timer = null, capturing = false, message = '', initialized = false;
  let eligible=false, nativeActive=false, accessTimer=null, accessGeneration=0, accessPending=null;
  const notify = () => changed();
  const request = (state, id, callback) => {
    const socket = getSocket();
    if (socket?.connected) socket.emit('guildsync:voice-mute-hotkey', { state, sessionId: id }, callback);
  };
  function release() {
    clearInterval(timer); timer = null;
    const id = sessionId; sessionId = null;
    if (id) request('released', id);
  }
  function edge({ state }) {
    if (state === 'released') { held = false; release(); return; }
    if (state !== 'pressed' || held) return;
    held = true;
    if (!eligible || !settings.enabled || capturing || !authenticated() || !getSocket()?.connected) return;
    const id = crypto.randomUUID(); sessionId = id;
    request('pressed', id, response => {
      if (id !== sessionId) return;
      if (!response?.ok) { message = response?.message || 'Voice mute was rejected.'; release(); notify(); return; }
      message = 'Hold to mute active'; notify();
    });
    if (sessionId !== id) return;
    timer = setInterval(() => {
      if (!eligible || !held || !authenticated() || !getSocket()?.connected) { release(); return; }
      if (sessionId !== id) { release(); return; }
      request('heartbeat', id, response => {
        if (id === sessionId && !response?.ok) { message = response?.message || 'Voice mute ended.'; release(); notify(); }
      });
    }, 2000);
  }
  async function initialize() {
    if (initialized) return; initialized = true;
    eventsOn('guildsync:voice-hotkey', edge);
    try { settings = await bridge.GetVoiceHotkeySettings(); } catch (error) { message = String(error); }
    notify();
  }
  async function connection(connected) {
    await initialize();
    clearInterval(accessTimer);accessTimer=null;
    if (!connected) { accessGeneration++;accessPending=null;eligible=false;release();cancelCapture();await listener(false);notify();return; }
    await refreshAccess();
    if(getSocket()?.connected){accessTimer=setInterval(()=>void refreshAccess(),30000);accessTimer.unref?.();}
  }
  async function listener(active) {
    if(nativeActive===active)return;nativeActive=active;
    try{await bridge.SetVoiceHotkeyActive(active);}catch(error){nativeActive=false;message=String(error);notify();}
  }
  async function refreshAccess() {
    if(accessPending)return accessPending;
    const generation=++accessGeneration,current=getSocket();
    const pending=(async()=>{
      await initialize();let response;
      if(authenticated()&&current?.connected)response=await new Promise(resolve=>{
        const timeout=setTimeout(()=>resolve(null),5000);
        current.emit('guildsync:voice-mute-access',{},value=>{clearTimeout(timeout);resolve(value);});
      });
      if(generation!==accessGeneration||current!==getSocket())return;
      const next=Boolean(current?.connected&&authenticated()&&response?.ok===true&&response.enabled===true&&response.allowed===true);
      const changedAccess=eligible!==next;eligible=next;
      if(!eligible){release();cancelCapture();}
      await listener(eligible);
      if(changedAccess)notify();
    })();
    accessPending=pending;
    try{await pending;}finally{if(accessPending===pending)accessPending=null;}
  }
  async function invalidateAccess() {
    accessGeneration++;accessPending=null;eligible=false;release();cancelCapture();notify();await listener(false);
    await refreshAccess();
  }
  async function save(enabled, shortcut) {
    release(); cancelCapture();
    try { settings = await bridge.SetVoiceHotkeySettings(enabled, shortcut); message = ''; }
    catch (error) { message = String(error); }
    notify();
  }
  function cancelCapture() {
    if (!capturing) return;
    capturing = false; document.removeEventListener('keydown', capture, true);
    void bridge.SetVoiceHotkeyCapture(false);
  }
  function capture(event) {
    event.preventDefault(); event.stopImmediatePropagation();
    if (event.key === 'Escape') { cancelCapture(); message = ''; notify(); return; }
    if (['Control','Alt','Shift','Meta'].includes(event.key)) return;
    const keys = [event.ctrlKey && 'Ctrl', event.altKey && 'Alt', event.shiftKey && 'Shift'].filter(Boolean);
    if (event.metaKey || !keys.length) { message = 'Use Ctrl, Alt, or Shift plus a letter, number, or function key.'; notify(); return; }
    keys.push(event.key.toUpperCase()); void save(settings.enabled, keys.join('+'));
  }
  function render() {
    if(!eligible)return '';
    if (!settings.supported) return '<div id="voiceHotkeySection" class="profile-section"><strong>Voice Channel Mute</strong><p>Global voice hotkeys require the Windows desktop client.</p></div>';
    // Shortcut labels are validated by Go; messages are inserted using textContent below.
    return `<div id="voiceHotkeySection" class="profile-section"><strong>Voice Channel Mute</strong><label class="profile-row voice-hotkey-row">Enable <input id="voiceHotkeyEnabled" type="checkbox" ${settings.enabled ? 'checked' : ''}></label><div class="profile-row voice-hotkey-row">Shortcut <span>${settings.shortcut}</span></div><button id="voiceHotkeyCapture" type="button" class="voice-hotkey-capture-button">${capturing ? 'Press shortcut (Escape cancels)' : 'Set Hotkey'}</button><p id="voiceHotkeyStatus" class="voice-hotkey-help" role="status"></p><p class="voice-hotkey-help">Hold the shortcut to mute eligible lower-ranked channel members. Server permission is required.</p></div>`;
  }
  function wire(menu) {
    menu.querySelector('#voiceHotkeyEnabled')?.addEventListener('change', event => void save(event.target.checked, settings.shortcut));
    menu.querySelector('#voiceHotkeyCapture')?.addEventListener('click', async () => {
      release(); capturing = true; message = ''; await bridge.SetVoiceHotkeyCapture(true);
      document.addEventListener('keydown', capture, true); notify();
    });
    const status = menu.querySelector('#voiceHotkeyStatus'); if (status) status.textContent = message;
  }
  function close() { cancelCapture(); }
  function stop() { accessGeneration++;accessPending=null;clearInterval(accessTimer);accessTimer=null;eligible=false;release();cancelCapture();void listener(false);notify(); }
  return { initialize, connection, refreshAccess, invalidateAccess, render, wire, close, stop };
}
