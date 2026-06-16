window.GUILDSYNC_WEB = true;

const SESSION_STORAGE_KEY = 'guildsync-web-session';

function readStoredSession() {
  try {
    return JSON.parse(localStorage.getItem(SESSION_STORAGE_KEY) || '{}') || {};
  } catch {
    return {};
  }
}

function writeStoredSession(session) {
  localStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(session || {}));
}

function clearStoredSession() {
  localStorage.removeItem(SESSION_STORAGE_KEY);
}

export async function ShowMainWindow() { return true; }
export async function SaveWindowState() { return true; }
export async function MaximizeWindow() { return true; }
export async function MinimizeWindow() { return true; }
export async function CloseWindow() { return true; }

export async function StartDiscordLogin() {
  window.location.assign('/api/auth/discord/web-login');
  return true;
}

export async function GetGuildSyncSession() {
  const stored = readStoredSession();
  const token = stored.token || localStorage.getItem('guildsync-web-token') || '';

  if (!token) {
    return {
      logged_in: false,
      allowed: false,
      status_message: 'Not logged in.'
    };
  }

  const response = await fetch('/api/auth/session', {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  const result = await response.json().catch(() => ({}));
  if (!response.ok || result.ok === false) {
    clearStoredSession();
    localStorage.removeItem('guildsync-web-token');
    return {
      logged_in: false,
      allowed: false,
      status_message: result.message || 'Session expired. Please log in again.'
    };
  }

  const session = {
    logged_in: true,
    allowed: true,
    token,
    user: result.user,
    discord_user_id: result.user?.discord_user_id || '',
    username: result.user?.username || '',
    global_name: result.user?.global_name || '',
    display_name: result.user?.display_name || result.user?.global_name || result.user?.username || '',
    avatar_url: result.user?.avatar_url || '',
    role: result.user?.role || 'user',
    status_message: 'Logged in.'
  };

  writeStoredSession(session);
  return session;
}

export async function LogoutGuildSync() {
  clearStoredSession();
  localStorage.removeItem('guildsync-web-token');
  return {
    logged_in: false,
    allowed: false,
    status_message: 'Logged out.'
  };
}

export async function StartGuildSyncFileWatcher() {
  return GetGuildSyncFileWatcherStatus();
}

export async function StopGuildSyncFileWatcher() {
  return GetGuildSyncFileWatcherStatus();
}

export async function GetGuildSyncFileWatcherStatus() {
  return {
    watching: false,
    directory: 'Web upload mode',
    files: [
      { key: 'banking', fileName: 'GuildSyncBanking.lua', enabled: true, filePath: 'Drag/drop onto the GuildSync web window' },
      { key: 'roster', fileName: 'GuildSyncRoster.lua', enabled: true, filePath: 'Drag/drop onto the GuildSync web window' }
    ]
  };
}

export async function SetGuildSyncSavedVarsWatchFileEnabled() {
  return GetGuildSyncFileWatcherStatus();
}

export async function CollectGuildSyncBankingData() {
  throw new Error('File watching is not available in the web interface. Drag and drop GuildSync SavedVariables files onto the GuildSync web window.');
}

export async function CommitGuildSyncBankingData() {
  return { ok: true };
}

export async function CollectGuildSyncRosterData() {
  throw new Error('File watching is not available in the web interface. Drag and drop GuildSync SavedVariables files onto the GuildSync web window.');
}

export async function CommitGuildSyncRosterData() {
  return { ok: true };
}
