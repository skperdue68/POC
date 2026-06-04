import './style.css';
import splashImage from './assets/splash.png';
import appIcon from './assets/icon.png';
import guildSyncLogo from './assets/GuildSync-LogoH.png';
import { io } from 'socket.io-client';

import {
  ShowMainWindow,
  SaveWindowState,
  MaximizeWindow,
  MinimizeWindow,
  CloseWindow,
  StartDiscordLogin,
  GetGuildSyncSession,
  LogoutGuildSync
} from '../wailsjs/go/main/App';

import { EventsOn } from '../wailsjs/runtime/runtime';

const GUILDSYNC_APP_VERSION = '1.0.3';
const VERSION_CHECK_INTERVAL_MS = 30 * 60 * 1000;

const TRANSIENT_MESSAGE_TTL_MS = 60 * 1000;
const MESSAGE_VISIBLE_MS = 7000;
const MESSAGE_FADE_MS = 1400;
const LONG_MESSAGE_INITIAL_WAIT_MS = 2400;
const LONG_MESSAGE_REPEAT_WAIT_MS = 4000;
const LONG_MESSAGE_SCROLL_PIXELS_PER_SECOND = 38;

const app = document.querySelector('#app');

let saveTimer = null;
let resizeObserver = null;
let resizeHandlerAttached = false;
let profileMenuOpen = false;
let versionCheckTimer = null;

let systemMessages = new Map();
let systemMessageTimers = new Map();

let activeSystemMessageID = '';
let systemMessageDisplayActive = false;
let systemMessageIsTransitioning = false;
let systemMessageTimeouts = [];

let guildSyncSession = {
  logged_in: false,
  allowed: false,
  status_message: ''
};

let socket = null;

const GUILDSYNC_TABS = [
  { id: 'discord-members', label: 'Discord Member Data', icon: 'discord' },
  { id: 'eso-members', label: 'ESO Member Data', icon: 'swords' },
  { id: 'settings', label: 'Settings', icon: 'gear' },
  { id: 'more', label: 'More', icon: 'more' }
];

let activeGuildSyncTab = GUILDSYNC_TABS[0].id;

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
    connectSocket();
  }, 5000);
}

async function loadExistingSession() {
  try {
    guildSyncSession = await GetGuildSyncSession();
  } catch (error) {
    guildSyncSession = {
      logged_in: false,
      allowed: false,
      status_message: ''
    };

    addSystemMessage('session-error', formatError(error), {
      ttlMs: TRANSIENT_MESSAGE_TTL_MS
    });
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

        <nav class="guildsync-tabs" aria-label="GuildSync sections">
          ${renderGuildSyncTabs()}
        </nav>

        <section id="guildSyncTabContent" class="guildsync-tab-content" aria-live="polite">
          ${renderGuildSyncTabContent()}
        </section>

        <footer class="status-bar">
          <div id="statusMessageViewport" class="status-message-viewport" aria-live="polite">
            <div id="statusMessageTrack" class="status-message-track"></div>
          </div>
          <div class="status-spacer"></div>
          <div id="statusDot" class="status-dot" title="Websocket not connected"></div>
        </footer>
      </section>
    </main>
  `;

  document
    .querySelector('#minimizeButton')
    .addEventListener('click', async () => {
      await MinimizeWindow();
    });

  document
    .querySelector('#closeButton')
    .addEventListener('click', async () => {
      await SaveWindowState();
      await CloseWindow();
    });

  document
    .querySelector('#maximizeButton')
    .addEventListener('click', async () => {
      await MaximizeWindow();
    });

  renderDiscordArea();
  wireGuildSyncTabs();
  updateStatusDot();
  requestSystemMessageDisplayUpdate();

  if (!resizeHandlerAttached) {
    window.addEventListener('resize', () => {
      debounceSaveWindowState();
      recalculateCurrentSystemMessage();
    });

    startWindowResizeObserver();

    resizeHandlerAttached = true;
  }
}


function renderGuildSyncTabs() {
  return GUILDSYNC_TABS
    .map((tab) => {
      const isActive = tab.id === activeGuildSyncTab;

      return `
        <button
          class="guildsync-tab${isActive ? ' active' : ''}"
          type="button"
          data-tab-id="${escapeAttribute(tab.id)}"
          aria-selected="${isActive ? 'true' : 'false'}"
        >
          <span class="guildsync-tab-icon" aria-hidden="true">${getGuildSyncTabIcon(tab.icon)}</span>
          <span class="guildsync-tab-label">${escapeHtml(tab.label)}</span>
        </button>
      `;
    })
    .join('');
}

function getGuildSyncTabIcon(icon) {
  if (icon === 'discord') {
    return `
      <svg class="guildsync-tab-svg" viewBox="0 0 127.14 96.36" xmlns="http://www.w3.org/2000/svg">
        <path fill="currentColor" d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,33.35-1.71,57.98.54,82.26A105.73,105.73,0,0,0,32.71,96.36a77.7,77.7,0,0,0,6.89-11.26,68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2A75.57,75.57,0,0,0,95.73,78c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.25A105.25,105.25,0,0,0,126.6,82.25C129.24,54.09,122.09,29.69,107.7,8.07ZM42.45,65.69C35.93,65.69,30.6,59.77,30.6,52.49s5.23-13.2,11.85-13.2S54.3,45.21,54.3,52.49,49.06,65.69,42.45,65.69Zm42.24,0c-6.52,0-11.85-5.92-11.85-13.2s5.24-13.2,11.85-13.2S96.54,45.21,96.54,52.49,91.3,65.69,84.69,65.69Z"/>
      </svg>
    `;
  }

  if (icon === 'swords') {
    return '⚔';
  }

  if (icon === 'gear') {
    return '⚙';
  }

  return '…';
}

function renderGuildSyncTabContent() {
  const activeTab = GUILDSYNC_TABS.find((tab) => tab.id === activeGuildSyncTab) || GUILDSYNC_TABS[0];

  return `
    <div class="guildsync-tab-panel" data-active-tab="${escapeAttribute(activeTab.id)}">
      <div class="guildsync-tab-panel-placeholder">
        ${escapeHtml(activeTab.label)} content will appear here.
      </div>
    </div>
  `;
}

function wireGuildSyncTabs() {
  document.querySelectorAll('.guildsync-tab').forEach((tabButton) => {
    tabButton.addEventListener('click', () => {
      const nextTab = tabButton.dataset.tabId;

      if (!nextTab || nextTab === activeGuildSyncTab) {
        return;
      }

      activeGuildSyncTab = nextTab;
      renderGuildSyncTabLayout();
    });
  });
}

function renderGuildSyncTabLayout() {
  const tabBar = document.querySelector('.guildsync-tabs');
  const content = document.querySelector('#guildSyncTabContent');

  if (tabBar) {
    tabBar.innerHTML = renderGuildSyncTabs();
  }

  if (content) {
    content.innerHTML = renderGuildSyncTabContent();
  }

  wireGuildSyncTabs();
}

function renderDiscordArea() {
  const area = document.querySelector('#discordArea');
  if (!area) {
    return;
  }

  closeProfileMenu(false);

  if (isAuthenticatedSession()) {
    const user = guildSyncSession.user || {};
    const displayName = getDisplayName();
    const avatarURL = getAvatarURL(user);
    const initials = getInitials(displayName);

    area.innerHTML = `
      <div class="discord-profile-wrap">
        <button id="discordAvatarButton" class="discord-avatar-button" type="button" title="Right-click for profile menu" aria-label="GuildSync profile menu">
          ${avatarURL
        ? `<img src="${escapeAttribute(avatarURL)}" alt="${escapeAttribute(displayName)}" class="discord-avatar-image" />`
        : `<span class="discord-avatar-fallback">${escapeHtml(initials)}</span>`
      }
        </button>
        <div id="discordProfileMenu" class="discord-profile-menu" aria-hidden="true"></div>
      </div>
    `;

    const avatarButton = document.querySelector('#discordAvatarButton');

    avatarButton.addEventListener('contextmenu', (event) => {
      event.preventDefault();
      toggleProfileMenu();
    });

    avatarButton.addEventListener('click', () => {
      toggleProfileMenu();
    });

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

function toggleProfileMenu() {
  if (profileMenuOpen) {
    closeProfileMenu();
    return;
  }

  openProfileMenu();
}

function openProfileMenu() {
  const menu = document.querySelector('#discordProfileMenu');
  if (!menu) {
    return;
  }

  const displayName = getDisplayName();
  const rank = guildSyncSession.user?.role || 'member';

  menu.innerHTML = `
    <section class="profile-card">
      <div class="profile-card-title">GuildSync Profile</div>
      <div class="profile-row">
        <span class="profile-label">Name</span>
        <span class="profile-value">${escapeHtml(displayName)}</span>
      </div>
      <div class="profile-row">
        <span class="profile-label">Rank</span>
        <span class="profile-value">${escapeHtml(formatRank(rank))}</span>
      </div>
      <div class="profile-row">
        <span class="profile-label">Client Version</span>
        <span class="profile-value">${escapeHtml(GUILDSYNC_APP_VERSION)}</span>
      </div>
      <button id="discordLogoutButton" class="discord-secondary-button profile-logout-button" type="button">Logout</button>    </section>
  `;

  menu.classList.add('open');
  menu.setAttribute('aria-hidden', 'false');
  profileMenuOpen = true;

  document
    .querySelector('#discordLogoutButton')
    .addEventListener('click', logoutGuildSync);

  setTimeout(() => {
    window.addEventListener('click', closeProfileMenuOnOutsideClick);
    window.addEventListener('keydown', closeProfileMenuOnEscape);
  }, 0);
}

function closeProfileMenu(removeListeners = true) {
  const menu = document.querySelector('#discordProfileMenu');
  if (menu) {
    menu.classList.remove('open');
    menu.setAttribute('aria-hidden', 'true');
  }

  profileMenuOpen = false;

  if (removeListeners) {
    window.removeEventListener('click', closeProfileMenuOnOutsideClick);
    window.removeEventListener('keydown', closeProfileMenuOnEscape);
  }
}

function closeProfileMenuOnOutsideClick(event) {
  const wrap = document.querySelector('.discord-profile-wrap');
  if (wrap && !wrap.contains(event.target)) {
    closeProfileMenu();
  }
}

function closeProfileMenuOnEscape(event) {
  if (event.key === 'Escape') {
    closeProfileMenu();
  }
}

async function startDiscordLogin() {
  try {
    addSystemMessage('auth', 'Opening Discord login...', {
      ttlMs: TRANSIENT_MESSAGE_TTL_MS
    });

    const result = await StartDiscordLogin();

    if (result?.status_message) {
      addSystemMessage('auth', result.status_message, {
        ttlMs: TRANSIENT_MESSAGE_TTL_MS
      });
    }

    updateStatusDot();
  } catch (error) {
    addSystemMessage('auth-error', formatError(error), {
      ttlMs: TRANSIENT_MESSAGE_TTL_MS
    });

    updateStatusDot();
  }
}

async function logoutGuildSync() {
  try {
    guildSyncSession = await LogoutGuildSync();

    addSystemMessage('auth', guildSyncSession.status_message || 'Logged out.', {
      ttlMs: TRANSIENT_MESSAGE_TTL_MS
    });

    showMainWindow();
    connectSocket();
  } catch (error) {
    addSystemMessage('auth-error', formatError(error), {
      ttlMs: TRANSIENT_MESSAGE_TTL_MS
    });

    updateStatusDot();
  }
}

function connectSocket() {
  const socketURL = guildSyncSession.socket_url || 'http://127.0.0.1:3001';

  disconnectSocket(false);

  const socketOptions = {
    transports: ['websocket', 'polling'],
    reconnection: true,
    reconnectionAttempts: Infinity,
    reconnectionDelay: 1000,
    reconnectionDelayMax: 5000
  };

  if (guildSyncSession?.token) {
    socketOptions.auth = {
      token: guildSyncSession.token
    };
  }

  socket = io(socketURL, socketOptions);

  socket.on('connect', () => {
    updateStatusDot();
    sendVersionCheck();
    startVersionCheckTimer();
  });

  socket.on('connect_error', () => {
    updateStatusDot();
    stopVersionCheckTimer();
  });

  socket.on('disconnect', () => {
    updateStatusDot();
    stopVersionCheckTimer();
  });

  socket.on('guildsync:version-status', (payload) => {
    handleVersionStatus(payload);
  });
}

function disconnectSocket(updateDot = true) {
  stopVersionCheckTimer();

  if (socket) {
    socket.disconnect();
    socket = null;
  }

  if (updateDot) {
    updateStatusDot();
  }
}

function sendVersionCheck() {
  if (!socket?.connected) {
    return;
  }

  socket.emit('guildsync:client-version', {
    version: GUILDSYNC_APP_VERSION
  });
}

function startVersionCheckTimer() {
  stopVersionCheckTimer();

  versionCheckTimer = window.setInterval(() => {
    sendVersionCheck();
  }, VERSION_CHECK_INTERVAL_MS);
}

function stopVersionCheckTimer() {
  if (versionCheckTimer) {
    window.clearInterval(versionCheckTimer);
    versionCheckTimer = null;
  }
}

function handleVersionStatus(payload) {
  if (!payload || typeof payload !== 'object') {
    return;
  }

  if (payload.update_required) {
    const latestVersion = payload.latest_version || 'unknown';

    addSystemMessage(
      'version',
      `GuildSync is out of date. Current version: ${GUILDSYNC_APP_VERSION}. Latest version: ${latestVersion}.`
    );

    return;
  }

  removeSystemMessage('version');
}

function addSystemMessage(id, text, options = {}) {
  const cleanID = String(id || '').trim();
  const cleanText = String(text || '').trim();

  if (!cleanID || !cleanText) {
    return;
  }

  systemMessages.set(cleanID, cleanText);

  if (systemMessageTimers.has(cleanID)) {
    window.clearTimeout(systemMessageTimers.get(cleanID));
    systemMessageTimers.delete(cleanID);
  }

  if (options.ttlMs && Number(options.ttlMs) > 0) {
    const timer = window.setTimeout(() => {
      removeSystemMessage(cleanID);
    }, Number(options.ttlMs));

    systemMessageTimers.set(cleanID, timer);
  }

  requestSystemMessageDisplayUpdate();
}

function removeSystemMessage(id) {
  const cleanID = String(id || '').trim();

  if (!cleanID) {
    return;
  }

  systemMessages.delete(cleanID);

  if (systemMessageTimers.has(cleanID)) {
    window.clearTimeout(systemMessageTimers.get(cleanID));
    systemMessageTimers.delete(cleanID);
  }

  if (activeSystemMessageID === cleanID) {
    fadeOutCurrentSystemMessage(() => {
      activeSystemMessageID = '';
      requestSystemMessageDisplayUpdate();
    });

    return;
  }

  requestSystemMessageDisplayUpdate();
}

function requestSystemMessageDisplayUpdate() {
  const ids = getSystemMessageIDs();

  if (ids.length === 0) {
    if (systemMessageDisplayActive) {
      fadeOutCurrentSystemMessage(clearSystemMessageDisplay);
    } else {
      clearSystemMessageDisplay();
    }

    return;
  }

  if (!systemMessageDisplayActive && !systemMessageIsTransitioning) {
    showSystemMessage(ids[0]);
  }
}

function getSystemMessageIDs() {
  return Array.from(systemMessages.keys());
}

function getNextSystemMessageID() {
  const ids = getSystemMessageIDs();

  if (ids.length === 0) {
    return '';
  }

  if (!activeSystemMessageID) {
    return ids[0];
  }

  const currentIndex = ids.indexOf(activeSystemMessageID);

  if (currentIndex < 0) {
    return ids[0];
  }

  return ids[(currentIndex + 1) % ids.length];
}

function showSystemMessage(id) {
  const track = document.querySelector('#statusMessageTrack');

  if (!track || !systemMessages.has(id)) {
    clearSystemMessageDisplay();
    return;
  }

  clearSystemMessageTimeouts();

  const message = systemMessages.get(id);

  activeSystemMessageID = id;
  systemMessageDisplayActive = true;
  systemMessageIsTransitioning = true;

  track.classList.remove('fade-in', 'fade-out', 'long-scroll');
  track.style.removeProperty('--message-fade-duration');
  track.style.removeProperty('--long-scroll-distance');
  track.style.removeProperty('--long-scroll-duration');
  track.style.opacity = '0';
  track.style.transform = 'translateX(0) translateY(-50%)';
  track.textContent = message;

  track.style.setProperty('--message-fade-duration', `${MESSAGE_FADE_MS}ms`);

  requestAnimationFrame(() => {
    track.classList.add('fade-in');

    track.addEventListener(
      'animationend',
      () => {
        track.classList.remove('fade-in');
        track.style.opacity = '1';
        track.style.transform = 'translateX(0) translateY(-50%)';
        systemMessageIsTransitioning = false;
        scheduleCurrentSystemMessage();
      },
      { once: true }
    );
  });
}

function scheduleCurrentSystemMessage() {
  const ids = getSystemMessageIDs();

  if (!activeSystemMessageID || !systemMessages.has(activeSystemMessageID)) {
    requestSystemMessageDisplayUpdate();
    return;
  }

  if (ids.length <= 1) {
    scheduleLongMessageScrollIfNeeded(false);
    return;
  }

  scheduleLongMessageScrollIfNeeded(true);
}

function scheduleLongMessageScrollIfNeeded(rotateAfterDisplay) {
  const viewport = document.querySelector('#statusMessageViewport');
  const track = document.querySelector('#statusMessageTrack');

  if (!viewport || !track) {
    return;
  }

  const overflowDistance = Math.max(0, track.scrollWidth - viewport.clientWidth);

  if (overflowDistance <= 0) {
    if (rotateAfterDisplay) {
      queueSystemMessageTimeout(() => {
        fadeOutCurrentSystemMessage(() => {
          const nextID = getNextSystemMessageID();
          activeSystemMessageID = '';

          if (nextID) {
            showSystemMessage(nextID);
          } else {
            clearSystemMessageDisplay();
          }
        });
      }, MESSAGE_VISIBLE_MS);
    }

    return;
  }

  queueSystemMessageTimeout(() => {
    startLongMessageScroll(overflowDistance, rotateAfterDisplay);
  }, LONG_MESSAGE_INITIAL_WAIT_MS);
}

function startLongMessageScroll(overflowDistance, rotateAfterDisplay) {
  const track = document.querySelector('#statusMessageTrack');

  if (!track || !activeSystemMessageID || !systemMessages.has(activeSystemMessageID)) {
    return;
  }

  const durationSeconds = Math.max(
    4,
    Math.ceil(overflowDistance / LONG_MESSAGE_SCROLL_PIXELS_PER_SECOND)
  );

  track.style.setProperty('--long-scroll-distance', `${overflowDistance}px`);
  track.style.setProperty('--long-scroll-duration', `${durationSeconds}s`);
  track.classList.add('long-scroll');

  track.addEventListener(
    'animationend',
    () => {
      track.classList.remove('long-scroll');
      track.style.transform = `translateX(-${overflowDistance}px) translateY(-50%)`;

      if (rotateAfterDisplay) {
        queueSystemMessageTimeout(() => {
          fadeOutCurrentSystemMessage(() => {
            const nextID = getNextSystemMessageID();
            activeSystemMessageID = '';

            if (nextID) {
              showSystemMessage(nextID);
            } else {
              clearSystemMessageDisplay();
            }
          });
        }, MESSAGE_VISIBLE_MS);

        return;
      }

      queueSystemMessageTimeout(() => {
        restartSingleLongMessageScroll();
      }, LONG_MESSAGE_REPEAT_WAIT_MS);
    },
    { once: true }
  );
}

function restartSingleLongMessageScroll() {
  const viewport = document.querySelector('#statusMessageViewport');
  const track = document.querySelector('#statusMessageTrack');

  if (!viewport || !track || !activeSystemMessageID || !systemMessages.has(activeSystemMessageID)) {
    return;
  }

  const ids = getSystemMessageIDs();

  if (ids.length !== 1) {
    requestSystemMessageDisplayUpdate();
    return;
  }

  track.classList.remove('long-scroll');
  track.style.removeProperty('--long-scroll-distance');
  track.style.removeProperty('--long-scroll-duration');
  track.style.transform = 'translateX(0) translateY(-50%)';

  const overflowDistance = Math.max(0, track.scrollWidth - viewport.clientWidth);

  if (overflowDistance <= 0) {
    return;
  }

  queueSystemMessageTimeout(() => {
    startLongMessageScroll(overflowDistance, false);
  }, LONG_MESSAGE_INITIAL_WAIT_MS);
}

function fadeOutCurrentSystemMessage(callback) {
  const track = document.querySelector('#statusMessageTrack');

  clearSystemMessageTimeouts();

  if (!track || !systemMessageDisplayActive) {
    if (typeof callback === 'function') {
      callback();
    }

    return;
  }

  systemMessageIsTransitioning = true;

  track.classList.remove('fade-in', 'long-scroll');
  track.style.setProperty('--message-fade-duration', `${MESSAGE_FADE_MS}ms`);
  track.classList.add('fade-out');

  track.addEventListener(
    'animationend',
    () => {
      track.classList.remove('fade-out');
      track.style.opacity = '0';
      track.style.transform = 'translateX(0) translateY(-50%)';
      systemMessageDisplayActive = false;
      systemMessageIsTransitioning = false;

      if (typeof callback === 'function') {
        callback();
      }
    },
    { once: true }
  );
}

function clearSystemMessageDisplay() {
  const track = document.querySelector('#statusMessageTrack');

  clearSystemMessageTimeouts();

  activeSystemMessageID = '';
  systemMessageDisplayActive = false;
  systemMessageIsTransitioning = false;

  if (track) {
    track.classList.remove('fade-in', 'fade-out', 'long-scroll');
    track.style.removeProperty('--message-fade-duration');
    track.style.removeProperty('--long-scroll-distance');
    track.style.removeProperty('--long-scroll-duration');
    track.style.opacity = '0';
    track.style.transform = 'translateX(0) translateY(-50%)';
    track.textContent = '';
  }
}

function queueSystemMessageTimeout(callback, delay) {
  const timer = window.setTimeout(() => {
    systemMessageTimeouts = systemMessageTimeouts.filter((item) => item !== timer);
    callback();
  }, delay);

  systemMessageTimeouts.push(timer);
}

function clearSystemMessageTimeouts() {
  for (const timer of systemMessageTimeouts) {
    window.clearTimeout(timer);
  }

  systemMessageTimeouts = [];
}

function recalculateCurrentSystemMessage() {
  if (!systemMessageDisplayActive || systemMessageIsTransitioning || !activeSystemMessageID) {
    return;
  }

  const currentID = activeSystemMessageID;

  clearSystemMessageTimeouts();

  showSystemMessage(currentID);
}

function updateStatusDot() {
  const dot = document.querySelector('#statusDot');
  if (!dot) {
    return;
  }

  dot.classList.remove('status-red', 'status-yellow', 'status-green');

  if (!socket?.connected) {
    dot.classList.add('status-red');
    dot.title = 'Websocket not connected';
    return;
  }

  if (!isAuthenticatedSession()) {
    dot.classList.add('status-yellow');
    dot.title = 'Websocket connected. User is not authenticated.';
    return;
  }

  dot.classList.add('status-green');
  dot.title = `Websocket connected. Authenticated as ${getDisplayName()}.`;
}

function wireGuildSyncEvents() {
  EventsOn('guildsync-login-complete', (session) => {
    guildSyncSession = session || { logged_in: false, allowed: false };

    renderDiscordArea();

    addSystemMessage(
      'auth',
      guildSyncSession.status_message || `Logged in and authorized as ${getDisplayName()}.`,
      {
        ttlMs: TRANSIENT_MESSAGE_TTL_MS
      }
    );

    connectSocket();
  });

  EventsOn('guildsync-login-denied', (message) => {
    guildSyncSession = {
      logged_in: false,
      allowed: false,
      status_message: ''
    };

    renderDiscordArea();

    addSystemMessage('auth', message || 'Access denied.', {
      ttlMs: TRANSIENT_MESSAGE_TTL_MS
    });

    connectSocket();
  });

  EventsOn('guildsync-login-failed', (message) => {
    guildSyncSession = {
      logged_in: false,
      allowed: false,
      status_message: ''
    };

    renderDiscordArea();

    addSystemMessage('auth', message || 'Login failed.', {
      ttlMs: TRANSIENT_MESSAGE_TTL_MS
    });

    connectSocket();
  });
}

function isAuthenticatedSession() {
  return Boolean(guildSyncSession?.logged_in && guildSyncSession?.allowed && guildSyncSession?.token);
}

function getDisplayName() {
  return guildSyncSession.user?.display_name || guildSyncSession.user?.username || 'Discord User';
}

function getAvatarURL(user) {
  if (!user) {
    return '';
  }

  if (user.avatar_url) {
    return user.avatar_url;
  }

  const avatar = String(user.avatar || '').trim();
  const discordUserID = String(user.discord_user_id || '').trim();

  if (!avatar || !discordUserID) {
    return '';
  }

  if (avatar.startsWith('http://') || avatar.startsWith('https://')) {
    return avatar;
  }

  const extension = avatar.startsWith('a_') ? 'gif' : 'png';

  return `https://cdn.discordapp.com/avatars/${encodeURIComponent(discordUserID)}/${encodeURIComponent(avatar)}.${extension}?size=128`;
}

function getInitials(name) {
  const parts = String(name || '')
    .trim()
    .split(/\s+/)
    .filter(Boolean);

  if (parts.length === 0) {
    return 'GS';
  }

  if (parts.length === 1) {
    return parts[0].slice(0, 2).toUpperCase();
  }

  return `${parts[0][0]}${parts[parts.length - 1][0]}`.toUpperCase();
}

function formatRank(rank) {
  return String(rank || 'member')
    .replaceAll('_', ' ')
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
}

function startWindowResizeObserver() {
  if (resizeObserver) {
    resizeObserver.disconnect();
    resizeObserver = null;
  }

  const target = document.querySelector('.main-window') || document.querySelector('#app');

  if (!target || typeof ResizeObserver === 'undefined') {
    return;
  }

  let lastWidth = Math.round(target.getBoundingClientRect().width);
  let lastHeight = Math.round(target.getBoundingClientRect().height);

  resizeObserver = new ResizeObserver((entries) => {
    const entry = entries[0];

    if (!entry) {
      return;
    }

    const width = Math.round(entry.contentRect.width);
    const height = Math.round(entry.contentRect.height);

    if (width === lastWidth && height === lastHeight) {
      return;
    }

    lastWidth = width;
    lastHeight = height;

    debounceSaveWindowState();
    recalculateCurrentSystemMessage();
  });

  resizeObserver.observe(target);
}

function debounceSaveWindowState() {
  clearTimeout(saveTimer);

  saveTimer = setTimeout(async () => {
    try {
      await SaveWindowState();
    } catch {
      // Ignore resize-save failures.
    }
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

function escapeAttribute(value) {
  return escapeHtml(value);
}

wireGuildSyncEvents();
showSplash();
