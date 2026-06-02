import './style.css';

import {
  CloseWindow,
  GetDiscordSession,
  LogoutDiscord,
  MinimizeWindow,
  SaveWindowState,
  ShowMainWindow,
  StartDiscordLogin
} from '../wailsjs/go/main/App';

import { EventsOn } from '../wailsjs/runtime/runtime';

import guildSyncLogo from './assets/guildsync-logo.png';
import splashImage from './assets/splash.png';

const SPLASH_DURATION_MS = 3000;
const VERSION_TEXT = 'Version 1.0.1';

let saveTimer = null;
let resizeHandlerAttached = false;
let discordSession = {
  logged_in: false
};

async function showSplash() {
  document.querySelector('#app').innerHTML = `
    <div class="splash-screen">
      <img class="splash-image" src="${splashImage}" alt="GuildSync loading" />
    </div>
  `;

  setTimeout(async () => {
    await ShowMainWindow();
    await loadDiscordSession();
    showMainWindow();
  }, SPLASH_DURATION_MS);
}

async function loadDiscordSession() {
  try {
    discordSession = await GetDiscordSession();
  } catch {
    discordSession = {
      logged_in: false
    };
  }
}

async function startDiscordLogin() {
  try {
    setDiscordStatus('Opening Discord login...');
    const result = await StartDiscordLogin();

    if (result?.status_message) {
      setDiscordStatus(result.status_message);
    }
  } catch (error) {
    setDiscordStatus(formatError(error));
  }
}

async function logoutDiscord() {
  try {
    discordSession = await LogoutDiscord();
    showMainWindow();
  } catch (error) {
    setDiscordStatus(formatError(error));
  }
}

function showMainWindow() {
  document.querySelector('#app').innerHTML = `
    <div class="main-window">
      <header class="title-bar">
        <div class="title-bar-drag-region">
          <img class="title-icon" src="${guildSyncLogo}" alt="" />
          <span class="app-title">GuildSync</span>
        </div>

        <div class="window-buttons">
          <button id="minimizeButton" class="window-button" type="button" aria-label="Minimize">−</button>
          <button id="maximizeButton" class="window-button" type="button" aria-label="Maximize">□</button>
          <button id="closeButton" class="window-button close-button" type="button" aria-label="Close">×</button>
        </div>
      </header>

      <main class="main-surface">
        <section class="top-strip">
          <div class="top-strip-spacer"></div>
          <div id="discordArea" class="discord-area"></div>
        </section>

        <section class="brand-wrap" aria-label="GuildSync">
          <img class="brand-logo" src="${guildSyncLogo}" alt="GuildSync" />
        </section>

        <div class="version-footer-text">${VERSION_TEXT}</div>

        <footer class="status-bar">
          <div id="statusMessage" class="status-message">
            ${escapeHtml(discordSession?.status_message || 'Ready')}
          </div>
          <div class="status-spacer"></div>
          <div class="status-dot" title="Ready"></div>
        </footer>
      </main>
    </div>
  `;

  document
    .querySelector('#minimizeButton')
    .addEventListener('click', MinimizeWindow);

  document
    .querySelector('#closeButton')
    .addEventListener('click', CloseWindow);

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

  if (discordSession?.logged_in) {
    const displayName = discordSession.user?.global_name || discordSession.user?.username || 'Discord User';
    area.innerHTML = `
      <div class="discord-welcome-wrap">
        <div class="discord-welcome-text">Welcome ${escapeHtml(displayName)}</div>
        <button id="discordLogoutButton" class="discord-secondary-button" type="button">Logout</button>
      </div>
    `;

    document
      .querySelector('#discordLogoutButton')
      .addEventListener('click', logoutDiscord);

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

function setDiscordStatus(message) {
  discordSession = {
    ...discordSession,
    status_message: message
  };

  const status = document.querySelector('#statusMessage');
  if (status) {
    status.textContent = message || 'Ready';
  }
}

function wireDiscordEvents() {
  EventsOn('discord-login-complete', (session) => {
    discordSession = session || { logged_in: false };
    setDiscordStatus(discordSession.status_message || 'Logged in with Discord.');
    renderDiscordArea();
  });

  EventsOn('discord-login-failed', (message) => {
    setDiscordStatus(message || 'Discord login failed.');
    renderDiscordArea();
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
    return 'Unknown Discord login error.';
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

wireDiscordEvents();
showSplash();
