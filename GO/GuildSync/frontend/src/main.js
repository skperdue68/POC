import './style.css';
import splashImage from './assets/splash.png';
import appIcon from './assets/icon.png';
import guildSyncLogo from './assets/GuildSync-LogoH.png';
import { io } from 'socket.io-client';

import {
  ShowMainWindow,
  SaveWindowState,
  MinimizeWindow,
  CloseWindow,
  StartDiscordLogin,
  GetGuildSyncSession,
  LogoutGuildSync
} from '../wailsjs/go/main/App';

import { EventsOn } from '../wailsjs/runtime/runtime';

const app = document.querySelector('#app');

let saveTimer = null;
let resizeHandlerAttached = false;
let guildSyncSession = {
  logged_in: false,
  allowed: false,
  status_message: 'Not logged in.'
};
let socket = null;

function showSplash() {
  app.innerHTML = `
    <main class="splash-screen">
      <img src="${splashImage}" alt="GuildSync Splash" class="splash-image" />
    </main>
  `;

  setTimeout(async () => {
    await ShowMainWindow();
    await loadExistingSession();
    showMainWindow();
  }, 5000);
}

async function loadExistingSession() {
  try {
    guildSyncSession = await GetGuildSyncSession();
    if (guildSyncSession?.logged_in && guildSyncSession?.allowed && guildSyncSession?.token) {
      connectSocket();
    }
  } catch (error) {
    guildSyncSession = {
      logged_in: false,
      allowed: false,
      status_message: formatError(error)
    };
  }
}

function showMainWindow() {
  app.innerHTML = `
    <main class="main-window">
      <header class="title-bar">
        <div class="title-bar-drag-region">
          <img src="${appIcon}" alt="" class="title-icon" />
          <span class="app-title">GuildSync</span>
        </div>

        <div class="window-buttons">
          <button id="minimizeButton" class="window-button" title="Minimize">−</button>
          <button id="maximizeButton" class="window-button" title="Maximize">□</button>
          <button id="closeButton" class="window-button close-button" title="Close to tray">×</button>
        </div>
      </header>

      <section class="main-surface">
        <div class="top-strip">
          <div class="top-strip-spacer"></div>
          <div id="discordArea" class="discord-area"></div>
        </div>

        <div class="brand-wrap">
          <img src="${guildSyncLogo}" alt="GuildSync" class="brand-logo" />
        </div>

        <div class="version-footer-text">Version 1.0.1</div>

        <footer class="status-bar">
          <div id="statusMessage" class="status-message">${escapeHtml(getStatusText())}</div>
          <div class="status-spacer"></div>
          <div id="statusDot" class="status-dot ${socket?.connected ? 'connected' : ''}" title="Status: ${socket?.connected ? 'Connected' : 'Ready'}"></div>
        </footer>
      </section>
    </main>
  `;

  document
    .querySelector('#minimizeButton')
    .addEventListener('click', async () => {
      await SaveWindowState();
      await MinimizeWindow();
    });

  document
    .querySelector('#closeButton')
    .addEventListener('click', async () => {
      await SaveWindowState();
      await CloseWindow();
    });

  // Visual only for now, per your request.
  document
    .querySelector('#maximizeButton')
    .addEventListener('click', () => {
      // Intentionally left unwired for now.
    });

  renderDiscordArea();

  if (!resizeHandlerAttached) {
    window.addEventListener('resize', debounceSaveWindowState);
    resizeHandlerAttached = true;
  }
}

function renderDiscordArea() {
  const area = document.querySelector('#discordArea');
  if (!area) {
    return;
  }

  if (guildSyncSession?.logged_in && guildSyncSession?.allowed) {
    const displayName = guildSyncSession.user?.display_name || guildSyncSession.user?.username || 'Discord User';
    area.innerHTML = `
      <div class="discord-welcome-wrap">
        <div class="discord-welcome-text">Welcome ${escapeHtml(displayName)}</div>
        <button id="discordLogoutButton" class="discord-secondary-button" type="button">Logout</button>
      </div>
    `;

    document
      .querySelector('#discordLogoutButton')
      .addEventListener('click', logoutGuildSync);

    return;
  }

  area.innerHTML = `
    <button id="discordLoginButton" class="discord-login-button" type="button">
      <span class="discord-icon-wrap" aria-hidden="true">
        <svg class="discord-icon" viewBox="0 0 127.14 96.36" xmlns="http://www.w3.org/2000/svg">
          <path fill="currentColor" d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,33.35-1.71,57.98.54,82.26A105.73,105.73,0,0,0,32.71,96.36a77.7,77.7,0,0,0,6.89-11.26,68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2A75.57,75.57,0,0,0,95.73,78c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.25A105.25,105.25,0,0,0,126.6,82.25C129.24,54.09,122.09,29.69,107.7,8.07ZM42.45,65.69C35.93,65.69,30.6,59.77,30.6,52.49s5.23-13.2,11.85-13.2S54.3,45.21,54.3,52.49,49.06,65.69,42.45,65.69Zm42.24,0c-6.52,0-11.85-5.92-11.85-13.2s5.24-13.2,11.85-13.2S96.54,45.21,96.54,52.49,91.3,65.69,84.69,65.69Z"/>
        </svg>
      </span>
      <span>Login with Discord</span>
    </button>
  `;

  document
    .querySelector('#discordLoginButton')
    .addEventListener('click', startDiscordLogin);
}

async function startDiscordLogin() {
  try {
    setStatus('Opening Discord login...');
    const result = await StartDiscordLogin();
    if (result?.status_message) {
      setStatus(result.status_message);
    }
  } catch (error) {
    setStatus(formatError(error));
  }
}

async function logoutGuildSync() {
  try {
    disconnectSocket();
    guildSyncSession = await LogoutGuildSync();
    showMainWindow();
  } catch (error) {
    setStatus(formatError(error));
  }
}

function connectSocket() {
  if (!guildSyncSession?.token) {
    setStatus('Cannot connect websocket: no GuildSync token.');
    return;
  }

  const socketURL = guildSyncSession.socket_url || 'http://127.0.0.1:3001';

  disconnectSocket();

  socket = io(socketURL, {
    transports: ['websocket', 'polling'],
    auth: {
      token: guildSyncSession.token
    }
  });

  socket.on('connect', () => {
    setStatus(`Websocket connected as ${guildSyncSession.user?.display_name || guildSyncSession.user?.username || 'Discord User'}.`);
    updateStatusDot(true);
  });

  socket.on('connect_error', (error) => {
    setStatus(`Websocket authorization failed: ${error.message}`);
    updateStatusDot(false);
  });

  socket.on('disconnect', (reason) => {
    setStatus(`Websocket disconnected: ${reason}`);
    updateStatusDot(false);
  });

  socket.on('guildsync:server-message', (payload) => {
    if (payload?.message) {
      setStatus(payload.message);
    }
  });
}

function disconnectSocket() {
  if (socket) {
    socket.disconnect();
    socket = null;
  }
  updateStatusDot(false);
}

function setStatus(message) {
  guildSyncSession = {
    ...guildSyncSession,
    status_message: message
  };

  const status = document.querySelector('#statusMessage');
  if (status) {
    status.textContent = message || 'Ready';
  }
}

function getStatusText() {
  return guildSyncSession?.status_message || 'Ready';
}

function updateStatusDot(connected) {
  const dot = document.querySelector('#statusDot');
  if (!dot) {
    return;
  }

  dot.classList.toggle('connected', Boolean(connected));
  dot.title = connected ? 'Status: Connected' : 'Status: Ready';
}

function wireGuildSyncEvents() {
  EventsOn('guildsync-login-complete', (session) => {
    guildSyncSession = session || { logged_in: false, allowed: false };
    renderDiscordArea();
    setStatus(guildSyncSession.status_message || 'Logged in and authorized.');
    connectSocket();
  });

  EventsOn('guildsync-login-denied', (message) => {
    guildSyncSession = {
      logged_in: false,
      allowed: false,
      status_message: message || 'Access denied.'
    };
    renderDiscordArea();
    setStatus(guildSyncSession.status_message);
    disconnectSocket();
  });

  EventsOn('guildsync-login-failed', (message) => {
    guildSyncSession = {
      logged_in: false,
      allowed: false,
      status_message: message || 'Login failed.'
    };
    renderDiscordArea();
    setStatus(guildSyncSession.status_message);
    disconnectSocket();
  });
}

function debounceSaveWindowState() {
  clearTimeout(saveTimer);

  saveTimer = setTimeout(async () => {
    await SaveWindowState();
  }, 500);
}

function formatError(error) {
  if (!error) {
    return 'Unknown error.';
  }

  if (typeof error === 'string') {
    return error;
  }

  return error.message || String(error);
}

function escapeHtml(value) {
  return String(value ?? '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

wireGuildSyncEvents();
showSplash();

