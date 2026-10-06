export function createVoiceHotkeyController({ bridge, eventsOn, getSocket, authenticated, changed = () => {} }) {
  let settings = { enabled: false, shortcut: 'Ctrl+M', supported: false };
  let held = false, sessionId = null, timer = null, capturing = false, message = '', initialized = false;
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
    if (!settings.enabled || capturing || !authenticated() || !getSocket()?.connected) return;
    const id = crypto.randomUUID(); sessionId = id;
    request('pressed', id, response => {
      if (id !== sessionId) return;
      if (!response?.ok) { message = response?.message || 'Voice mute was rejected.'; release(); notify(); return; }
      message = 'Hold to mute active'; notify();
    });
    if (sessionId !== id) return;
    timer = setInterval(() => {
      if (!held || !authenticated() || !getSocket()?.connected) { release(); return; }
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
    if (!connected) { release(); cancelCapture(); }
    try { await bridge.SetVoiceHotkeyActive(connected && authenticated() && Boolean(getSocket()?.connected)); } catch (error) { message = String(error); notify(); }
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
    if (!settings.supported) return '<div id="voiceHotkeySection" class="profile-section"><strong>Voice Channel Mute</strong><p>Global voice hotkeys require the Windows desktop client.</p></div>';
    // Shortcut labels are validated by Go; messages are inserted using textContent below.
    return `<div id="voiceHotkeySection" class="profile-section"><strong>Voice Channel Mute</strong><label class="profile-row">Enable <input id="voiceHotkeyEnabled" type="checkbox" ${settings.enabled ? 'checked' : ''}></label><div class="profile-row">Shortcut <span>${settings.shortcut}</span></div><button id="voiceHotkeyCapture" type="button" class="discord-secondary-button">${capturing ? 'Press shortcut (Escape cancels)' : 'Set Hotkey'}</button><button id="voiceHotkeyDefault" type="button" class="discord-secondary-button">Return to Default</button><p id="voiceHotkeyStatus" role="status"></p><p>Hold the shortcut to mute eligible lower-ranked channel members. Server permission is required.</p></div>`;
  }
  function wire(menu) {
    menu.querySelector('#voiceHotkeyEnabled')?.addEventListener('change', event => void save(event.target.checked, settings.shortcut));
    menu.querySelector('#voiceHotkeyDefault')?.addEventListener('click', () => void save(settings.enabled, 'Ctrl+M'));
    menu.querySelector('#voiceHotkeyCapture')?.addEventListener('click', async () => {
      release(); capturing = true; message = ''; await bridge.SetVoiceHotkeyCapture(true);
      document.addEventListener('keydown', capture, true); notify();
    });
    const status = menu.querySelector('#voiceHotkeyStatus'); if (status) status.textContent = message;
  }
  function close() { cancelCapture(); }
  function stop() { release(); cancelCapture(); void bridge.SetVoiceHotkeyActive(false); }
  return { initialize, connection, render, wire, close, stop };
}
