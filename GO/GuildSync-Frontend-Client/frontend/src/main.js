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

let discordMembers = [];
let discordLastRefreshValue = null;
let discordDataLoading = false;
let discordRefreshRequestRunning = false;
let discordDataError = '';
let discordSearchText = '';
let discordSelectedRoleNames = new Set();
let discordSortColumn = 'username';
let discordSortDirection = 'asc';
let discordSearchSelectionStart = null;
let discordSearchSelectionEnd = null;

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
  wireDiscordMemberDataPanel();
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

  if (activeTab.id === 'discord-members') {
    return renderDiscordMemberDataPanel();
  }

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

function renderGuildSyncTabLayout(options = {}) {
  const tabBar = document.querySelector('.guildsync-tabs');
  const content = document.querySelector('#guildSyncTabContent');

  if (tabBar) {
    tabBar.innerHTML = renderGuildSyncTabs();
  }

  if (content) {
    content.innerHTML = renderGuildSyncTabContent();
  }

  wireGuildSyncTabs();
  wireDiscordMemberDataPanel();

  if (options.restoreDiscordSearchFocus) {
    restoreDiscordSearchFocus();
  }

  if (activeGuildSyncTab === 'discord-members' && socket?.connected && discordMembers.length === 0 && !discordDataLoading) {
    refreshDiscordData({ silent: true });
  }
}

function renderDiscordMemberDataPanel() {
  const filteredMembers = getFilteredDiscordMembers();
  const allRoleNames = getAllDiscordRoleNames();
  const selectedRoleNames = Array.from(discordSelectedRoleNames);

  return `
    <div class="guildsync-tab-panel discord-member-panel" data-active-tab="discord-members">
      <div class="discord-data-header">
        <div>
          <h2 class="discord-data-title">Discord Member Data</h2>
          <p class="discord-data-subtitle">Manage and view Discord member information.</p>
        </div>
        <div class="discord-data-actions">
          <span id="discordLastRefreshText" class="discord-last-refresh">Last Refresh: ${escapeHtml(formatDiscordRefreshDate(discordLastRefreshValue))}</span>
          <button id="refreshDiscordDataButton" class="refresh-discord-button" type="button" ${discordDataLoading || discordRefreshRequestRunning ? 'disabled' : ''}>
            <span class="refresh-discord-icon" aria-hidden="true">↻</span>
            <span>${discordRefreshRequestRunning ? 'Refreshing...' : 'Refresh Discord Data'}</span>
          </button>
        </div>
      </div>

      <div class="discord-data-body">
        <div class="discord-filter-row">
          <label class="discord-search-wrap" for="discordMemberSearch">
            <span class="discord-search-icon" aria-hidden="true">⌕</span>
            <input id="discordMemberSearch" class="discord-search-input" type="search" placeholder="Search username, global name, or server nickname..." value="${escapeAttribute(discordSearchText)}" />
          </label>

          <div class="discord-role-filter-wrap">
            <label class="discord-filter-label" for="discordRoleFilter">Roles</label>
            <select id="discordRoleFilter" class="discord-role-select">
              <option value="">Add role filter...</option>
              ${allRoleNames
      .filter((roleName) => !discordSelectedRoleNames.has(roleName))
      .map((roleName) => `<option value="${escapeAttribute(roleName)}">${escapeHtml(roleName)}</option>`)
      .join('')}
            </select>
            <div class="discord-selected-roles">
              ${selectedRoleNames.length === 0
      ? '<span class="discord-no-role-filter">All roles</span>'
      : selectedRoleNames
        .map((roleName) => renderRoleFilterChip(roleName))
        .join('')}
            </div>
          </div>

          <button id="clearDiscordFiltersButton" class="clear-discord-filters-button" type="button">Clear Filters</button>
          <div class="discord-results-count">${filteredMembers.length} result${filteredMembers.length === 1 ? '' : 's'}</div>
        </div>

        <div class="discord-member-table-shell">
          <table class="discord-member-table">
            <thead>
              <tr>
                ${renderDiscordSortableHeader('username', 'Username')}
                ${renderDiscordSortableHeader('global_name', 'Global Name')}
                ${renderDiscordSortableHeader('server_nickname', 'Server Nickname')}
                ${renderDiscordSortableHeader('roles', 'Roles')}
              </tr>
            </thead>
            <tbody>
              ${filteredMembers.length > 0
      ? filteredMembers.map((member) => renderDiscordMemberRow(member)).join('')
      : renderEmptyDiscordMemberRow()}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `;
}

function wireDiscordMemberDataPanel() {
  if (activeGuildSyncTab !== 'discord-members') {
    return;
  }

  const refreshButton = document.querySelector('#refreshDiscordDataButton');
  if (refreshButton) {
    refreshButton.addEventListener('click', () => requestDiscordDataRefresh());
  }

  const searchInput = document.querySelector('#discordMemberSearch');
  if (searchInput) {
    searchInput.addEventListener('input', (event) => {
      discordSearchText = event.target.value || '';
      discordSearchSelectionStart = event.target.selectionStart;
      discordSearchSelectionEnd = event.target.selectionEnd;
      renderGuildSyncTabLayout({ restoreDiscordSearchFocus: true });
    });
  }

  document.querySelectorAll('[data-discord-sort-column]').forEach((button) => {
    button.addEventListener('click', () => {
      setDiscordSort(button.dataset.discordSortColumn || 'username');
    });
  });

  const roleSelect = document.querySelector('#discordRoleFilter');
  if (roleSelect) {
    roleSelect.addEventListener('change', (event) => {
      const roleName = String(event.target.value || '').trim();
      if (roleName) {
        discordSelectedRoleNames.add(roleName);
        renderGuildSyncTabLayout();
      }
    });
  }

  document.querySelectorAll('[data-remove-role-filter]').forEach((button) => {
    button.addEventListener('click', () => {
      const roleName = button.dataset.removeRoleFilter || '';
      discordSelectedRoleNames.delete(roleName);
      renderGuildSyncTabLayout();
    });
  });

  const clearButton = document.querySelector('#clearDiscordFiltersButton');
  if (clearButton) {
    clearButton.addEventListener('click', () => {
      discordSearchText = '';
      discordSelectedRoleNames.clear();
      renderGuildSyncTabLayout();
    });
  }
}


async function requestDiscordDataRefresh() {
  if (!socket?.connected) {
    addSystemMessage('discord-refresh-error', 'GuildSync websocket is not connected.', {
      ttlMs: TRANSIENT_MESSAGE_TTL_MS
    });
    return;
  }

  discordRefreshRequestRunning = true;
  renderGuildSyncTabLayout();

  addSystemMessage('discord-refresh-requested', 'Refresh request sent to GuildSync backend. Waiting for the Discord bot to sync roles and members...', {
    ttlMs: 180000
  });

  try {
    const response = await emitSocketWithAck(
      'guildsync:request-discord-data-refresh',
      {
        requested_by: guildSyncSession?.user?.display_name || guildSyncSession?.user?.username || 'GuildSync Client',
        requested_at: new Date().toISOString()
      },
      180000
    );

    if (!response?.ok) {
      throw new Error(response?.message || 'Unable to request Discord data refresh.');
    }

    addSystemMessage('discord-refresh-requested', response.message || 'Discord data refresh completed.', {
      ttlMs: TRANSIENT_MESSAGE_TTL_MS
    });

    // The backend broadcasts updated member data to every client after the bot finishes.
    // This follow-up fetch keeps this client correct even if the broadcast was missed.
    await refreshDiscordData({ silent: true });
  } catch (error) {
    addSystemMessage('discord-refresh-error', formatError(error), {
      ttlMs: TRANSIENT_MESSAGE_TTL_MS
    });
  } finally {
    discordRefreshRequestRunning = false;
    renderGuildSyncTabLayout();
  }
}

async function refreshDiscordLastRefreshDate() {
  if (!socket?.connected) {
    return;
  }

  const dateResponse = await emitSocketWithAck('guildsync:request-discord-data-date', {});

  if (dateResponse?.ok) {
    discordLastRefreshValue = dateResponse.value || null;
  }
}

async function handleDiscordMemberDataUpdated(payload = {}) {
  if (!payload?.ok) {
    return;
  }

  discordMembers = normalizeDiscordMembers(payload.members);

  if (payload.last_refresh) {
    discordLastRefreshValue = payload.last_refresh;
  }

  try {
    await refreshDiscordLastRefreshDate();
  } catch {
    // The member data is still valid even if the date follow-up request fails.
  }

  if (activeGuildSyncTab === 'discord-members') {
    renderGuildSyncTabLayout();
  }

  addSystemMessage('discord-data-updated', `Discord data updated. Loaded ${discordMembers.length} member record${discordMembers.length === 1 ? '' : 's'}.`, {
    ttlMs: TRANSIENT_MESSAGE_TTL_MS
  });
}

async function refreshDiscordData(options = {}) {
  const silent = Boolean(options.silent);

  if (!socket?.connected) {
    addSystemMessage('discord-data-error', 'GuildSync websocket is not connected.', {
      ttlMs: TRANSIENT_MESSAGE_TTL_MS
    });
    return;
  }

  discordDataLoading = true;
  renderGuildSyncTabLayout();

  try {
    const [dateResponse, memberResponse] = await Promise.all([
      emitSocketWithAck('guildsync:request-discord-data-date', {}),
      emitSocketWithAck('guildsync:request-discord-member-dataJSON', {})
    ]);

    if (!dateResponse?.ok) {
      throw new Error(dateResponse?.message || 'Unable to retrieve Discord refresh date.');
    }

    if (!memberResponse?.ok) {
      throw new Error(memberResponse?.message || 'Unable to retrieve Discord member data.');
    }

    discordLastRefreshValue = dateResponse.value || null;
    discordMembers = normalizeDiscordMembers(memberResponse.members);

    if (!silent) {
      addSystemMessage('discord-data', `Loaded ${discordMembers.length} Discord member record${discordMembers.length === 1 ? '' : 's'}.`, {
        ttlMs: TRANSIENT_MESSAGE_TTL_MS
      });
    }
  } catch (error) {
    addSystemMessage('discord-data-error', formatError(error), {
      ttlMs: TRANSIENT_MESSAGE_TTL_MS
    });
  } finally {
    discordDataLoading = false;
    renderGuildSyncTabLayout();
  }
}

function emitSocketWithAck(eventName, payload = {}, timeoutMs = 30000) {
  return new Promise((resolve, reject) => {
    if (!socket?.connected) {
      reject(new Error('GuildSync websocket is not connected.'));
      return;
    }

    let finished = false;

    const timer = window.setTimeout(() => {
      if (finished) {
        return;
      }

      finished = true;
      reject(new Error(`${eventName} timed out.`));
    }, timeoutMs);

    socket.emit(eventName, payload, (response) => {
      if (finished) {
        return;
      }

      finished = true;
      window.clearTimeout(timer);
      resolve(response);
    });
  });
}

function normalizeDiscordMembers(members) {
  if (!Array.isArray(members)) {
    return [];
  }

  return members
    .map((member) => ({
      discord_id: String(member?.discord_id || member?.id || '').trim(),
      username: String(member?.username || '').trim(),
      global_name: String(member?.global_name || '').trim(),
      server_nickname: String(member?.server_nickname || '').trim(),
      avatar: String(member?.avatar || '').trim(),
      roles: Array.isArray(member?.roles) ? member.roles.map(normalizeDiscordRole).filter(Boolean) : []
    }))
    .filter((member) => member.discord_id || member.username || member.global_name || member.server_nickname)
    .sort((a, b) => getMemberSortName(a).localeCompare(getMemberSortName(b), undefined, { sensitivity: 'base' }));
}

function normalizeDiscordRole(role) {
  if (!role || typeof role !== 'object') {
    return null;
  }

  const roleID = String(role.role_id || role.id || '').trim();
  const roleName = String(role.role_name || role.name || 'Unnamed Role').trim();
  const roleColor = role.role_color ?? role.color ?? null;

  return {
    role_id: roleID,
    role_name: roleName || 'Unnamed Role',
    role_color: roleColor
  };
}

function getFilteredDiscordMembers() {
  const search = discordSearchText.trim().toLowerCase();
  const selectedRoleNames = Array.from(discordSelectedRoleNames);

  const filteredMembers = discordMembers.filter((member) => {
    if (search) {
      const haystack = [
        member.username,
        member.global_name,
        member.server_nickname,
        member.discord_id,
        ...member.roles.map((role) => role.role_name)
      ]
        .join(' ')
        .toLowerCase();

      if (!haystack.includes(search)) {
        return false;
      }
    }

    if (selectedRoleNames.length > 0) {
      const memberRoleNames = new Set(member.roles.map((role) => role.role_name));
      return selectedRoleNames.every((roleName) => memberRoleNames.has(roleName));
    }

    return true;
  });

  return sortDiscordMembers(filteredMembers);
}

function sortDiscordMembers(members) {
  const directionMultiplier = discordSortDirection === 'desc' ? -1 : 1;

  return [...members].sort((a, b) => {
    const valueA = getDiscordSortValue(a, discordSortColumn);
    const valueB = getDiscordSortValue(b, discordSortColumn);
    const comparison = valueA.localeCompare(valueB, undefined, {
      sensitivity: 'base',
      numeric: true
    });

    if (comparison !== 0) {
      return comparison * directionMultiplier;
    }

    return getMemberSortName(a).localeCompare(getMemberSortName(b), undefined, {
      sensitivity: 'base',
      numeric: true
    });
  });
}

function getDiscordSortValue(member, column) {
  if (column === 'global_name') {
    return member.global_name || '';
  }

  if (column === 'server_nickname') {
    return member.server_nickname || '';
  }

  if (column === 'roles') {
    return (member.roles || [])
      .map((role) => role.role_name || '')
      .filter(Boolean)
      .sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }))
      .join(' ');
  }

  return member.username || member.discord_id || '';
}

function setDiscordSort(column) {
  const allowedColumns = new Set(['username', 'global_name', 'server_nickname', 'roles']);
  const nextColumn = allowedColumns.has(column) ? column : 'username';

  if (discordSortColumn === nextColumn) {
    discordSortDirection = discordSortDirection === 'asc' ? 'desc' : 'asc';
  } else {
    discordSortColumn = nextColumn;
    discordSortDirection = 'asc';
  }

  renderGuildSyncTabLayout();
}

function renderDiscordSortableHeader(column, label) {
  const isActive = discordSortColumn === column;
  const directionText = discordSortDirection === 'asc' ? 'ascending' : 'descending';
  const arrow = isActive
    ? discordSortDirection === 'asc'
      ? '▲'
      : '▼'
    : '↕';

  return `
    <th aria-sort="${isActive ? directionText : 'none'}">
      <button
        class="discord-sort-header${isActive ? ' active' : ''}"
        type="button"
        data-discord-sort-column="${escapeAttribute(column)}"
        title="Sort ${escapeAttribute(label)} ${isActive && discordSortDirection === 'asc' ? 'descending' : 'ascending'}"
      >
        <span>${escapeHtml(label)}</span>
        <span class="discord-sort-arrow" aria-hidden="true">${arrow}</span>
      </button>
    </th>
  `;
}

function restoreDiscordSearchFocus() {
  const searchInput = document.querySelector('#discordMemberSearch');

  if (!searchInput) {
    return;
  }

  searchInput.focus({ preventScroll: true });

  if (typeof searchInput.setSelectionRange === 'function') {
    const start = Number.isInteger(discordSearchSelectionStart)
      ? discordSearchSelectionStart
      : searchInput.value.length;
    const end = Number.isInteger(discordSearchSelectionEnd)
      ? discordSearchSelectionEnd
      : start;

    searchInput.setSelectionRange(start, end);
  }
}

function getAllDiscordRoleNames() {
  const roleNames = new Set();

  for (const member of discordMembers) {
    for (const role of member.roles) {
      if (role.role_name) {
        roleNames.add(role.role_name);
      }
    }
  }

  return Array.from(roleNames).sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }));
}

function renderDiscordMemberRow(member) {
  const avatarURL = getDiscordMemberAvatarURL(member);
  const displayName = getMemberSortName(member);
  const roles = member.roles || [];

  return `
    <tr>
      <td>
        <div class="discord-member-cell">
          <div class="discord-member-avatar">
            ${avatarURL
      ? `<img src="${escapeAttribute(avatarURL)}" alt="${escapeAttribute(displayName)}" />`
      : `<span>${escapeHtml(getInitials(displayName))}</span>`}
          </div>
          <span>${escapeHtml(member.username || member.discord_id || 'Unknown')}</span>
        </div>
      </td>
      <td>${escapeHtml(member.global_name || '')}</td>
      <td>${escapeHtml(member.server_nickname || '')}</td>
      <td>
        <div class="discord-member-roles">
          ${roles.length > 0
      ? roles.map((role) => renderDiscordRoleBadge(role)).join('')
      : '<span class="discord-no-roles">No roles</span>'}
        </div>
      </td>
    </tr>
  `;
}

function renderEmptyDiscordMemberRow() {
  const message = discordDataLoading
    ? 'Loading Discord member data...'
    : 'No Discord members found.';

  return `
    <tr>
      <td colspan="4" class="discord-empty-row">${escapeHtml(message)}</td>
    </tr>
  `;
}

function renderDiscordRoleBadge(role) {
  const hexColor = discordRoleColorToHex(role.role_color);
  const textColor = getReadableTextColor(hexColor);
  const roleStyle = buildFilledRoleStyle(hexColor, textColor);

  return `
    <span
      class="discord-role-badge"
      title="${escapeAttribute(role.role_name)}"
      style="${roleStyle}"
    >${escapeHtml(role.role_name)}</span>
  `;
}

function renderRoleFilterChip(roleName) {
  const role = findRoleByName(roleName);
  const hexColor = discordRoleColorToHex(role?.role_color);
  const textColor = getReadableTextColor(hexColor);
  const roleStyle = buildFilledRoleStyle(hexColor, textColor);

  return `
    <button
      class="discord-role-filter-chip"
      type="button"
      data-remove-role-filter="${escapeAttribute(roleName)}"
      style="${roleStyle}"
      title="Remove ${escapeAttribute(roleName)} filter"
    >
      <span>${escapeHtml(roleName)}</span>
      <span aria-hidden="true">×</span>
    </button>
  `;
}

function findRoleByName(roleName) {
  for (const member of discordMembers) {
    const role = member.roles.find((item) => item.role_name === roleName);
    if (role) {
      return role;
    }
  }

  return null;
}

function discordRoleColorToHex(decimalColor) {
  const colorNumber = Number(decimalColor);

  if (!Number.isFinite(colorNumber) || colorNumber <= 0) {
    return '#64748b';
  }

  return `#${Math.max(0, Math.min(0xFFFFFF, Math.trunc(colorNumber))).toString(16).padStart(6, '0')}`;
}


function buildFilledRoleStyle(hexColor, textColor) {
  return [
    `--role-fill-top: ${mixHexColor(hexColor, '#ffffff', 0.16)}`,
    `--role-fill-bottom: ${mixHexColor(hexColor, '#000000', 0.10)}`,
    `--role-fill-glow: ${hexToRgba(hexColor, 0.28)}`,
    `--role-fill-edge: ${hexToRgba(hexColor, 0.46)}`,
    `color: ${textColor}`
  ].join('; ');
}

function mixHexColor(hexColor, mixWithHexColor, amount) {
  const base = parseHexColor(hexColor) || parseHexColor('#64748b');
  const mix = parseHexColor(mixWithHexColor) || parseHexColor('#ffffff');
  const ratio = Math.max(0, Math.min(1, Number(amount) || 0));

  const red = Math.round(base.red + (mix.red - base.red) * ratio);
  const green = Math.round(base.green + (mix.green - base.green) * ratio);
  const blue = Math.round(base.blue + (mix.blue - base.blue) * ratio);

  return `#${toHexPair(red)}${toHexPair(green)}${toHexPair(blue)}`;
}

function parseHexColor(hexColor) {
  const hex = String(hexColor || '').replace('#', '');

  if (!/^[0-9a-f]{6}$/i.test(hex)) {
    return null;
  }

  return {
    red: parseInt(hex.slice(0, 2), 16),
    green: parseInt(hex.slice(2, 4), 16),
    blue: parseInt(hex.slice(4, 6), 16)
  };
}

function toHexPair(value) {
  return Math.max(0, Math.min(255, value)).toString(16).padStart(2, '0');
}

function hexToRgba(hexColor, alpha) {
  const hex = String(hexColor || '#64748b').replace('#', '');
  const value = /^[0-9a-f]{6}$/i.test(hex) ? hex : '64748b';
  const red = parseInt(value.slice(0, 2), 16);
  const green = parseInt(value.slice(2, 4), 16);
  const blue = parseInt(value.slice(4, 6), 16);

  return `rgba(${red}, ${green}, ${blue}, ${alpha})`;
}

function getReadableTextColor(hexColor) {
  const hex = String(hexColor || '#64748b').replace('#', '');

  if (!/^[0-9a-f]{6}$/i.test(hex)) {
    return '#E5E7EB';
  }

  const red = parseInt(hex.slice(0, 2), 16);
  const green = parseInt(hex.slice(2, 4), 16);
  const blue = parseInt(hex.slice(4, 6), 16);
  const brightness = (red * 299 + green * 587 + blue * 114) / 1000;

  return brightness > 150 ? '#0F172A' : '#F8FAFC';
}

function getDiscordMemberAvatarURL(member) {
  const avatar = String(member?.avatar || '').trim();
  const discordID = String(member?.discord_id || '').trim();

  if (!avatar) {
    return '';
  }

  if (avatar.startsWith('http://') || avatar.startsWith('https://')) {
    return avatar;
  }

  if (!discordID) {
    return '';
  }

  const extension = avatar.startsWith('a_') ? 'gif' : 'png';

  return `https://cdn.discordapp.com/avatars/${encodeURIComponent(discordID)}/${encodeURIComponent(avatar)}.${extension}?size=64`;
}

function getMemberSortName(member) {
  return member.server_nickname || member.global_name || member.username || member.discord_id || 'Unknown';
}

function formatDiscordRefreshDate(value) {
  const cleanValue = String(value || '').trim();

  if (!cleanValue) {
    return 'Not refreshed yet';
  }

  const date = new Date(cleanValue);

  if (Number.isNaN(date.getTime())) {
    return cleanValue;
  }

  return date.toLocaleString([], {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit'
  });
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

    if (activeGuildSyncTab === 'discord-members') {
      refreshDiscordData({ silent: true });
    }
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

  socket.on('guildsync:discord-member-data-updated', (payload) => {
    handleDiscordMemberDataUpdated(payload);
  });

  socket.on('guildsync:discord-refresh-status', (payload = {}) => {
    const message = String(payload.message || '').trim();

    if (message) {
      addSystemMessage('discord-refresh-status', message, {
        ttlMs: TRANSIENT_MESSAGE_TTL_MS
      });
    }
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
