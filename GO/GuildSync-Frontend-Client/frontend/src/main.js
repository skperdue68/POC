import './style.css';
import splashImage from './assets/splash.png';
import appIcon from './assets/icon.png';
import guildSyncLogo from './assets/GuildSync-Graphic.png';
import { io } from 'socket.io-client';

import {
  ShowMainWindow,
  SaveWindowState,
  MaximizeWindow,
  MinimizeWindow,
  CloseWindow,
  StartDiscordLogin,
  GetGuildSyncSession,
  LogoutGuildSync,
  StartGuildSyncFileWatcher,
  StopGuildSyncFileWatcher,
  GetGuildSyncFileWatcherStatus,
  SetGuildSyncSavedVarsWatchFileEnabled,
  CollectGuildSyncBankingData,
  CommitGuildSyncBankingData,
  CollectGuildSyncRosterData,
  CommitGuildSyncRosterData
} from '../wailsjs/go/main/App';

import { EventsOn } from '../wailsjs/runtime/runtime';

const GUILDSYNC_APP_VERSION = '1.0.3';
const VERSION_CHECK_INTERVAL_MS = 30 * 60 * 1000;
const PENDING_BANKING_UPLOADS_STORAGE_KEY = 'guildsync-pending-banking-uploads';
const PENDING_ROSTER_UPLOADS_STORAGE_KEY = 'guildsync-pending-roster-uploads';

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
let bankingUploadQueueProcessing = false;
let rosterUploadQueueProcessing = false;
let guildSyncFileWatcherStatus = null;

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

let rosterMembers = [];
let rosterLastRefreshValue = null;
let rosterDataLoading = false;
let rosterAutoRefreshAttempted = false;
let rosterSearchText = '';
let rosterSelectedRankNames = new Set();
let rosterHistoryDialogOpen = false;
let rosterHistorySearchText = '';
let rosterHistoryMatches = [];
let rosterHistorySelectedAccount = '';
let rosterHistoryEvents = [];
let rosterHistoryLoading = false;
let rosterHistoryError = '';
let rosterHistorySearchTimer = null;
let rosterHistoryActiveMatchIndex = -1;
let associateTicketReportDialogOpen = false;
let associateTicketReportRows = [];
let associateTicketReportLoading = false;
let associateTicketReportError = '';

let bankingEntries = [];
let bankingActiveSection = 'biweekly';
let bankingLastRefreshValue = null;
let bankingDataLoading = false;
let bankingExportGridOpen = false;
let bankingExportSection = 'biweekly';
let manualBiweeklyTicketDialogOpen = false;
let manualBiweeklyTicketSubmitting = false;
let manualBiweeklyTicketError = '';
let manualBiweeklyTicketForm = { accountName: '', note: '', tickets: '' };
let manualBiweeklyTicketAccountSearchText = '';
let manualBiweeklyTicketActiveMatchIndex = -1;
let bankingRafflePeriodOffsets = {
  biweekly: 0,
  monthly: 0
};

const BANKING_BIWEEKLY_SALES_END_ANCHOR_UTC = 1780786800;
const BANKING_MONTHLY_SALES_END_ANCHOR_UTC = 1781996400;
const BANKING_BIWEEKLY_INTERVAL_SECONDS = 14 * 24 * 60 * 60;
const BANKING_MONTHLY_INTERVAL_SECONDS = 28 * 24 * 60 * 60;
const BANKING_RAFFLE_AFTER_SALES_SECONDS = 60 * 60;

const GUILDSYNC_TABS = [
  { id: 'discord-members', label: 'Discord Member Data', icon: 'discord' },
  { id: 'eso-members', label: 'Guild Roster', icon: 'swords' },
  { id: 'more', label: 'Bank Deposits / Raffle Tickets', icon: 'bank' },
  { id: 'settings', label: 'Reports', icon: 'gear' }
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
    await syncGuildSyncFileWatcherWithAuthState();
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
        <div class="compact-app-header">
          <div class="compact-brand">
            <img src="${guildSyncLogo}" alt="GuildSync" class="compact-brand-logo" />
            <div class="compact-brand-text">
              <div class="compact-brand-title">GuildSync</div>
              <div class="compact-brand-version">Version ${escapeHtml(GUILDSYNC_APP_VERSION)}</div>
            </div>
          </div>
          <div id="discordArea" class="discord-area"></div>
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
  wireEsoRosterPanel();
  wireBankDepositsPanel();
  wireReportsPanel();
  wireManualBiweeklyTicketDialog();
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

  if (icon === 'bank') {
    return `
      <svg class="guildsync-tab-svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path fill="currentColor" d="M12 2.25 3.2 6.6a1 1 0 0 0 .44 1.9h16.72a1 1 0 0 0 .44-1.9L12 2.25Zm-5.75 7.5a.75.75 0 0 0-.75.75v6.75H4.75a.75.75 0 0 0 0 1.5h14.5a.75.75 0 0 0 0-1.5h-.75V10.5a.75.75 0 0 0-1.5 0v6.75h-2.25V10.5a.75.75 0 0 0-1.5 0v6.75h-2.5V10.5a.75.75 0 0 0-1.5 0v6.75H7V10.5a.75.75 0 0 0-.75-.75ZM4 20.25a.75.75 0 0 0 0 1.5h16a.75.75 0 0 0 0-1.5H4Z"/>
      </svg>
    `;
  }

  return '…';
}

function renderGuildSyncTabContent() {
  const activeTab = GUILDSYNC_TABS.find((tab) => tab.id === activeGuildSyncTab) || GUILDSYNC_TABS[0];
  let content = '';

  if (activeTab.id === 'discord-members') {
    content = renderDiscordMemberDataPanel();
  } else if (activeTab.id === 'eso-members') {
    content = renderEsoRosterPanel();
  } else if (activeTab.id === 'more') {
    content = renderBankDepositsPanel();
  } else if (activeTab.id === 'settings') {
    content = renderReportsPanel();
  } else {
    content = `
      <div class="guildsync-tab-panel" data-active-tab="${escapeAttribute(activeTab.id)}">
        <div class="guildsync-tab-panel-placeholder">
          ${escapeHtml(activeTab.label)} content will appear here.
        </div>
      </div>
    `;
  }

  return `
    ${content}
    ${manualBiweeklyTicketDialogOpen ? renderManualBiweeklyTicketDialog() : ''}
  `;
}

function isBlockingModalOpen() {
  return rosterHistoryDialogOpen
    || manualBiweeklyTicketDialogOpen
    || bankingExportGridOpen;
}

function wireGuildSyncTabs() {
  document.querySelectorAll('.guildsync-tab').forEach((tabButton) => {
    tabButton.addEventListener('click', () => {
      if (isBlockingModalOpen()) {
        return;
      }

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
  wireEsoRosterPanel();
  wireBankDepositsPanel();
  wireReportsPanel();
  wireManualBiweeklyTicketDialog();

  if (options.restoreDiscordSearchFocus) {
    restoreDiscordSearchFocus();
  }

  if (activeGuildSyncTab === 'discord-members' && socket?.connected && discordMembers.length === 0 && !discordDataLoading) {
    refreshDiscordData({ silent: true });
  }

  if (
    activeGuildSyncTab === 'eso-members' &&
    socket?.connected &&
    rosterMembers.length === 0 &&
    !rosterDataLoading &&
    !rosterAutoRefreshAttempted
  ) {
    rosterAutoRefreshAttempted = true;
    refreshRosterDataFromBackend({ silent: true });
  }

  if (activeGuildSyncTab === 'more' && socket?.connected && bankingEntries.length === 0 && !bankingDataLoading) {
    refreshBankingDataFromBackend({ silent: true });
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



function renderEsoRosterPanel() {
  const filteredMembers = getFilteredRosterMembers();
  const allRankNames = getAllRosterRankNames();
  const selectedRankNames = Array.from(rosterSelectedRankNames);

  return `
    <div class="guildsync-tab-panel eso-roster-panel" data-active-tab="eso-members">
      <div class="discord-data-header">
        <div>
          <h2 class="discord-data-title">Guild Roster</h2>
          <p class="discord-data-subtitle">Current ESO roster imported from GuildSyncRoster.</p>
        </div>
        <div class="discord-data-actions">
          <span class="discord-last-refresh">Last Refresh: ${escapeHtml(formatRosterRefreshDate(rosterLastRefreshValue))}</span>
          <button id="openRosterHistoryButton" class="clear-discord-filters-button" type="button">Lookup Rank Historical Data</button>
          <button id="refreshRosterDataButton" class="refresh-discord-button" type="button" ${rosterDataLoading ? 'disabled' : ''}>
            <span class="refresh-discord-icon" aria-hidden="true">↻</span>
            <span>${rosterDataLoading ? 'Refreshing...' : 'Refresh Roster Data'}</span>
          </button>
        </div>
      </div>

      <div class="discord-data-body eso-roster-body">
        <div class="discord-filter-row eso-roster-filter-row">
          <label class="discord-search-wrap" for="rosterMemberSearch">
            <span class="discord-search-icon" aria-hidden="true">⌕</span>
            <input id="rosterMemberSearch" class="discord-search-input" type="search" placeholder="Search account, rank, or joined date..." value="${escapeAttribute(rosterSearchText)}" />
          </label>

          <div class="discord-role-filter-wrap">
            <label class="discord-filter-label" for="rosterRankFilter">Rank</label>
            <select id="rosterRankFilter" class="discord-role-select">
              <option value="">Add rank filter...</option>
              ${allRankNames
      .filter((rankName) => !rosterSelectedRankNames.has(rankName))
      .map((rankName) => `<option value="${escapeAttribute(rankName)}">${escapeHtml(rankName)}</option>`)
      .join('')}
            </select>
            <div class="discord-selected-roles">
              ${selectedRankNames.length === 0
      ? '<span class="discord-no-role-filter">All ranks</span>'
      : selectedRankNames
        .map((rankName) => renderRosterRankFilterChip(rankName))
        .join('')}
            </div>
          </div>

          <button id="clearRosterFiltersButton" class="clear-discord-filters-button" type="button">Clear Filters</button>
          <div class="discord-results-count">${filteredMembers.length} result${filteredMembers.length === 1 ? '' : 's'}</div>
        </div>

        <div class="discord-member-table-shell eso-roster-table-shell">
          <table class="discord-member-table eso-roster-table">
            <thead>
              <tr>
                <th>Account Name</th>
                <th>Rank</th>
                <th>Joined</th>
              </tr>
            </thead>
            <tbody>
              ${filteredMembers.length > 0 ? filteredMembers.map(renderEsoRosterRow).join('') : renderEmptyEsoRosterRow()}
            </tbody>
          </table>
        </div>
      </div>
      ${rosterHistoryDialogOpen ? renderRosterHistoryDialog() : ''}
    </div>
  `;
}

function renderEsoRosterRow(member) {
  const rowColor = getEsoRosterRankColor(member.rank || '');
  const rowStyle = rowColor ? ` style="color: ${rowColor};"` : '';

  return `
    <tr class="eso-roster-row"${rowStyle}>
      <td>${escapeHtml(member.account_name || '')}</td>
      <td>${renderEsoRosterRank(member.rank || '')}</td>
      <td>${escapeHtml(formatRosterJoinedDate(member.joined))}</td>
    </tr>
  `;
}

function renderEmptyEsoRosterRow() {
  const message = rosterDataLoading
    ? 'Loading Guild Roster data...'
    : 'No Guild Roster members found.';

  return `
    <tr>
      <td class="bank-empty-row" colspan="3">${escapeHtml(message)}</td>
    </tr>
  `;
}

function getEsoRosterRankColor(rankName) {
  const cleanRankName = String(rankName || '').trim();
  const matchingDiscordRole = findRoleByName(cleanRankName);
  return discordRoleColorToHex(matchingDiscordRole?.role_color);
}

function renderEsoRosterRank(rankName) {
  const cleanRankName = String(rankName || '').trim();

  return `<span class="eso-roster-rank-text">${escapeHtml(cleanRankName)}</span>`;
}

function renderRosterHistoryRank(rankName) {
  const cleanRankName = String(rankName || '').trim();

  if (!cleanRankName || cleanRankName.toLowerCase() === 'unknown') {
    return '';
  }

  return renderEsoRosterRank(cleanRankName);
}

function getFilteredRosterMembers() {
  const searchText = rosterSearchText.trim().toLowerCase();

  return rosterMembers.filter((member) => {
    const rankName = String(member.rank || '').trim();

    if (rosterSelectedRankNames.size > 0 && !rosterSelectedRankNames.has(rankName)) {
      return false;
    }

    if (!searchText) {
      return true;
    }

    const joinedDate = formatRosterJoinedDate(member.joined);
    const joinedDateTime = formatRosterHistoryTimestamp(member.joined);
    const haystack = [
      member.account_name,
      rankName,
      joinedDate,
      joinedDateTime,
      member.joined
    ].map((value) => String(value || '').toLowerCase()).join(' ');

    return haystack.includes(searchText);
  });
}

function getAllRosterRankNames() {
  return Array.from(new Set(
    rosterMembers
      .map((member) => String(member.rank || '').trim())
      .filter(Boolean)
  )).sort((left, right) => left.localeCompare(right));
}

function renderRosterRankFilterChip(rankName) {
  const role = findRoleByName(rankName);
  const hexColor = discordRoleColorToHex(role?.role_color);
  const textColor = getReadableTextColor(hexColor);
  const roleStyle = buildFilledRoleStyle(hexColor, textColor);

  return `
    <button
      class="discord-role-filter-chip"
      type="button"
      data-remove-roster-rank-filter="${escapeAttribute(rankName)}"
      style="${roleStyle}"
      title="Remove ${escapeAttribute(rankName)} filter"
    >
      <span>${escapeHtml(rankName)}</span>
      <span aria-hidden="true">×</span>
    </button>
  `;
}

function renderRosterHistoryDialog() {
  return `
    <div class="roster-history-overlay" role="dialog" aria-modal="true" aria-labelledby="rosterHistoryTitle">
      <div class="roster-history-dialog">
        <div class="roster-history-header">
          <div>
            <h3 id="rosterHistoryTitle">Roster Rank Historical Data</h3>
            <p>Search prior rank records, including members no longer on the current roster.</p>
          </div>
          <button id="closeRosterHistoryButton" class="roster-history-close" type="button" aria-label="Close">×</button>
        </div>

        <div class="roster-history-search-row">
          <input id="rosterHistorySearchInput" class="discord-search-input roster-history-search-input" type="search" placeholder="Start typing part of an account name..." value="${escapeAttribute(rosterHistorySearchText)}" />
        </div>

        ${rosterHistoryError ? `<div class="discord-data-error">${escapeHtml(rosterHistoryError)}</div>` : ''}

        <div class="roster-history-content">
          <div class="roster-history-matches">
            <div class="roster-history-section-title">Matches</div>
            ${renderRosterHistoryMatches()}
          </div>
          <div class="roster-history-events">
            <div class="roster-history-section-title">Guild Roster History${rosterHistorySelectedAccount ? `: ${escapeHtml(rosterHistorySelectedAccount)}` : ''}</div>
            ${renderRosterHistoryEvents()}
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderRosterHistoryMatches() {
  if (rosterHistoryLoading && rosterHistoryMatches.length === 0) {
    return '<div class="roster-history-muted">Searching...</div>';
  }

  if (rosterHistoryMatches.length === 0) {
    return '<div class="roster-history-muted">No matches yet.</div>';
  }

  return `
    <div class="roster-history-match-list">
      ${rosterHistoryMatches.map((match, index) => `
        <button class="roster-history-match${index === rosterHistoryActiveMatchIndex || match.account_name === rosterHistorySelectedAccount ? ' is-selected' : ''}" type="button" data-roster-history-account="${escapeAttribute(match.account_name)}">
          <span>${escapeHtml(match.account_name)}</span>
          <strong>${escapeHtml(match.rank || '')}</strong>
          ${index === rosterHistoryActiveMatchIndex ? '<small>Enter</small>' : ''}
        </button>
      `).join('')}
    </div>
  `;
}

function renderRosterHistoryEvents() {
  if (!rosterHistorySelectedAccount) {
    return '<div class="roster-history-muted">Choose a matching account to see Guild Roster History.</div>';
  }

  if (rosterHistoryLoading && rosterHistoryEvents.length === 0) {
    return '<div class="roster-history-muted">Loading history...</div>';
  }

  if (rosterHistoryEvents.length === 0) {
    return '<div class="roster-history-muted">No Guild Roster History found for this account.</div>';
  }

  return `
    <div class="roster-history-event-table-shell">
      <table class="discord-member-table roster-history-event-table">
        <thead>
          <tr>
            <th>When</th>
            <th>Event</th>
            <th>Rank</th>
            <th>Officer</th>
          </tr>
        </thead>
        <tbody>
          ${rosterHistoryEvents.map((event) => `
            <tr>
              <td>${escapeHtml(formatRosterHistoryTimestamp(event.timestamp))}</td>
              <td>${escapeHtml(event.event_type || '')}</td>
              <td>${renderRosterHistoryRank(event.rank)}</td>
              <td>${escapeHtml(event.officer || '')}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
  `;
}


function renderReportsPanel() {
  return `
    <div class="guildsync-tab-panel reports-panel" data-active-tab="settings">
      <div class="discord-data-header reports-header">
        <div>
          <h2 class="discord-data-title">Reports</h2>
          <p class="discord-data-subtitle">Run GuildSync reports. More report options can be added here later.</p>
        </div>
      </div>

      <div class="reports-grid">
        <section class="reports-card reports-card-wide">
          <div class="reports-card-header">
            <div>
              <h3>Associate Ticket Eligibility</h3>
              <p>Shows Associates who have been in the guild at least two weeks and have purchased at least one raffle ticket.</p>
            </div>
            <button id="runAssociateTicketReportButton" class="refresh-discord-button" type="button" ${associateTicketReportLoading ? 'disabled' : ''}>
              ${associateTicketReportLoading ? 'Running...' : 'Run Associate Ticket Report'}
            </button>
          </div>

          ${associateTicketReportError ? `<div class="discord-data-error">${escapeHtml(associateTicketReportError)}</div>` : ''}

          <div class="reports-result-header">
            <span>${escapeHtml(String(associateTicketReportRows.length))} result${associateTicketReportRows.length === 1 ? '' : 's'}</span>
          </div>

          ${renderAssociateTicketReportRows()}
        </section>

        <section class="reports-card reports-card-placeholder">
          <div class="reports-card-header">
            <div>
              <h3>Future Report</h3>
              <p>This space is ready for the next GuildSync report.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  `;
}

function wireReportsPanel() {
  if (activeGuildSyncTab !== 'settings') {
    return;
  }

  document.querySelector('#runAssociateTicketReportButton')?.addEventListener('click', () => runAssociateTicketReport());
}

function renderAssociateTicketReportDialog() {
  return `
    <div class="roster-history-overlay" role="dialog" aria-modal="true" aria-labelledby="associateTicketReportTitle">
      <div class="roster-history-dialog associate-ticket-report-dialog">
        <div class="roster-history-header">
          <div>
            <h3 id="associateTicketReportTitle">Associate Ticket Eligibility Report</h3>
            <p>Associates who have been in the guild at least two weeks and have purchased at least one raffle ticket.</p>
          </div>
          <button id="closeAssociateTicketReportButton" class="roster-history-close" type="button" aria-label="Close">×</button>
        </div>

        <div class="roster-history-search-row">
          <button id="runAssociateTicketReportButton" class="refresh-discord-button" type="button" ${associateTicketReportLoading ? 'disabled' : ''}>${associateTicketReportLoading ? 'Running...' : 'Run Report'}</button>
          <span class="roster-history-muted">${escapeHtml(String(associateTicketReportRows.length))} result${associateTicketReportRows.length === 1 ? '' : 's'}</span>
        </div>

        ${associateTicketReportError ? `<div class="discord-data-error">${escapeHtml(associateTicketReportError)}</div>` : ''}
        ${renderAssociateTicketReportRows()}
      </div>
    </div>
  `;
}

function renderAssociateTicketReportRows() {
  if (associateTicketReportLoading && associateTicketReportRows.length === 0) {
    return '<div class="roster-history-muted">Running report...</div>';
  }

  if (associateTicketReportRows.length === 0) {
    return '<div class="roster-history-muted">Run this report to see matching associates.</div>';
  }

  return `
    <div class="roster-history-event-table-shell">
      <table class="discord-member-table roster-history-event-table">
        <thead>
          <tr>
            <th>Account Name</th>
            <th>Rank</th>
            <th>Joined</th>
            <th>Purchased Tickets</th>
          </tr>
        </thead>
        <tbody>
          ${associateTicketReportRows.map((row) => `
            <tr>
              <td>${escapeHtml(row.account_name || '')}</td>
              <td>${renderEsoRosterRank(row.rank || '')}</td>
              <td>${escapeHtml(formatRosterJoinedDate(row.joined))}</td>
              <td>${escapeHtml(formatTicketAmount(row.purchased_tickets || 0))}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
  `;
}

function wireAssociateTicketReportDialog() {
  if (!associateTicketReportDialogOpen) {
    return;
  }

  document.querySelector('#closeAssociateTicketReportButton')?.addEventListener('click', () => {
    associateTicketReportDialogOpen = false;
    renderGuildSyncTabLayout();
  });

  document.querySelector('#runAssociateTicketReportButton')?.addEventListener('click', () => runAssociateTicketReport());

  const overlay = document.querySelector('.roster-history-overlay');
  if (overlay) {
    overlay.addEventListener('click', (event) => {
      if (event.target === overlay) {
        associateTicketReportDialogOpen = false;
        renderGuildSyncTabLayout();
      }
    });
  }
}

async function runAssociateTicketReport() {
  if (!socket?.connected || !isAuthenticatedSession()) {
    associateTicketReportError = 'You must be logged in and connected to run this report.';
    renderGuildSyncTabLayout();
    return;
  }

  associateTicketReportLoading = true;
  associateTicketReportError = '';
  renderGuildSyncTabLayout();

  try {
    const response = await emitSocketWithAck('guildsync:request-associate-ticket-report', {}, 30000);

    if (!response?.ok) {
      throw new Error(response?.message || response?.error || 'Failed to run report.');
    }

    associateTicketReportRows = Array.isArray(response.rows) ? response.rows : [];
  } catch (error) {
    associateTicketReportError = formatError(error);
  } finally {
    associateTicketReportLoading = false;
    renderGuildSyncTabLayout();
  }
}


function getManualTicketMemberMatches() {
  const query = String(manualBiweeklyTicketAccountSearchText || '').trim().toLowerCase();

  if (!query) {
    return [];
  }

  return rosterMembers
    .filter((member) => String(member.account_name || '').trim())
    .filter((member) => String(member.account_name || '').toLowerCase().includes(query))
    .slice()
    .sort((left, right) => {
      const leftName = String(left.account_name || '').toLowerCase();
      const rightName = String(right.account_name || '').toLowerCase();
      const leftStarts = leftName.startsWith(query) ? 0 : 1;
      const rightStarts = rightName.startsWith(query) ? 0 : 1;

      if (leftStarts !== rightStarts) {
        return leftStarts - rightStarts;
      }

      return leftName.localeCompare(rightName);
    })
    .slice(0, 20);
}

function selectManualTicketAccount(accountName) {
  const cleanAccountName = String(accountName || '').trim();

  manualBiweeklyTicketForm.accountName = cleanAccountName;
  manualBiweeklyTicketAccountSearchText = cleanAccountName;
  manualBiweeklyTicketError = '';
  renderGuildSyncTabLayout();
  focusInputById('manualTicketAccountSearchInput');
}

function focusInputById(inputId) {
  window.setTimeout(() => {
    const input = document.querySelector(`#${inputId}`);
    if (!input) {
      return;
    }

    input.focus();

    const valueLength = String(input.value || '').length;
    if (typeof input.setSelectionRange === 'function') {
      input.setSelectionRange(valueLength, valueLength);
    }
  }, 0);
}

function renderManualBiweeklyTicketDialog() {
  const memberMatches = getManualTicketMemberMatches();
  const selectedAccountName = String(manualBiweeklyTicketForm.accountName || '').trim();

  return `
    <div class="roster-history-overlay" role="dialog" aria-modal="true" aria-labelledby="manualBiweeklyTicketTitle">
      <div class="roster-history-dialog manual-ticket-dialog">
        <div class="roster-history-header">
          <div>
            <h3 id="manualBiweeklyTicketTitle">Add Manual Bi-Weekly Tickets</h3>
            <p>Add free/manual raffle tickets such as FFTG. These do not count as purchased tickets.</p>
          </div>
          <button id="closeManualBiweeklyTicketButton" class="roster-history-close" type="button" aria-label="Close">×</button>
        </div>

        ${manualBiweeklyTicketError ? `<div class="discord-data-error">${escapeHtml(manualBiweeklyTicketError)}</div>` : ''}

        <div class="manual-ticket-form">
          <label class="manual-ticket-member-field">
            <input id="manualTicketAccountSearchInput" class="discord-search-input" type="search" placeholder="Start typing part of an account name..." value="${escapeAttribute(manualBiweeklyTicketAccountSearchText)}" autocomplete="off" />
          </label>

          ${selectedAccountName ? `<div class="roster-history-muted">Selected: ${escapeHtml(selectedAccountName)}</div>` : ''}

          <div class="roster-history-match-list manual-ticket-match-list">
            ${memberMatches.length === 0
              ? '<div class="roster-history-muted">No matching names</div>'
              : memberMatches.map((member, index) => `
                <button class="roster-history-match${index === manualBiweeklyTicketActiveMatchIndex || member.account_name === selectedAccountName ? ' is-selected' : ''}" type="button" data-manual-ticket-account="${escapeAttribute(member.account_name)}">
                  <span>${escapeHtml(member.account_name)}</span>
                  <strong>${escapeHtml(member.rank || '')}</strong>
                  ${index === manualBiweeklyTicketActiveMatchIndex ? '<small>Enter</small>' : ''}
                </button>
              `).join('')}
          </div>

          <div class="manual-ticket-entry-row">
            <label class="manual-ticket-note-field">
              <textarea id="manualTicketNoteInput" class="discord-search-input manual-ticket-note-input" rows="4" placeholder="Enter a reason such as FFTG">${escapeHtml(manualBiweeklyTicketForm.note)}</textarea>
            </label>
            <label class="manual-ticket-count-field">
              <div class="manual-ticket-number-wrap">
                <input id="manualTicketCountInput" class="discord-search-input manual-ticket-count-input" type="number" min="1" step="1" inputmode="numeric" placeholder="# Tickets" value="${escapeAttribute(manualBiweeklyTicketForm.tickets)}" />
                <div class="manual-ticket-number-buttons" aria-hidden="true">
                  <button id="manualTicketCountUpButton" class="manual-ticket-number-button" type="button" tabindex="-1">⌃</button>
                  <button id="manualTicketCountDownButton" class="manual-ticket-number-button" type="button" tabindex="-1">⌄</button>
                </div>
              </div>
            </label>
          </div>
          <div class="manual-ticket-actions">
            <button id="saveManualBiweeklyTicketButton" class="refresh-discord-button" type="button" ${manualBiweeklyTicketSubmitting ? 'disabled' : ''}>${manualBiweeklyTicketSubmitting ? 'Saving...' : 'Add Manual Tickets'}</button>
          </div>
        </div>
      </div>
    </div>
  `;
}

function wireManualBiweeklyTicketDialog() {
  if (!manualBiweeklyTicketDialogOpen) {
    return;
  }

  document.querySelector('#closeManualBiweeklyTicketButton')?.addEventListener('click', () => {
    manualBiweeklyTicketDialogOpen = false;
    renderGuildSyncTabLayout();
  });

  const accountSearchInput = document.querySelector('#manualTicketAccountSearchInput');
  if (accountSearchInput) {
    accountSearchInput.addEventListener('input', (event) => {
      manualBiweeklyTicketAccountSearchText = event.target.value || '';
      manualBiweeklyTicketForm.accountName = '';
      manualBiweeklyTicketActiveMatchIndex = getManualTicketMemberMatches().length > 0 ? 0 : -1;
      renderGuildSyncTabLayout();
      focusInputById('manualTicketAccountSearchInput');
    });

    accountSearchInput.addEventListener('keydown', (event) => {
      const matches = getManualTicketMemberMatches();

      if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
        if (matches.length === 0) {
          return;
        }

        event.preventDefault();
        const direction = event.key === 'ArrowDown' ? 1 : -1;
        const currentIndex = manualBiweeklyTicketActiveMatchIndex < 0 ? 0 : manualBiweeklyTicketActiveMatchIndex;
        manualBiweeklyTicketActiveMatchIndex = (currentIndex + direction + matches.length) % matches.length;
        renderGuildSyncTabLayout();
        focusInputById('manualTicketAccountSearchInput');
        return;
      }

      if (event.key !== 'Enter') {
        return;
      }

      event.preventDefault();
      const selectedMatch = matches[manualBiweeklyTicketActiveMatchIndex >= 0 ? manualBiweeklyTicketActiveMatchIndex : 0];
      if (selectedMatch?.account_name) {
        selectManualTicketAccount(selectedMatch.account_name);
      }
    });
  }

  document.querySelectorAll('[data-manual-ticket-account]').forEach((button) => {
    button.addEventListener('click', () => {
      selectManualTicketAccount(button.dataset.manualTicketAccount || '');
    });
  });

  document.querySelector('#manualTicketNoteInput')?.addEventListener('input', (event) => {
    manualBiweeklyTicketForm.note = event.target.value || '';
  });

  const ticketCountInput = document.querySelector('#manualTicketCountInput');
  ticketCountInput?.addEventListener('input', (event) => {
    const numericValue = String(event.target.value || '').replace(/\D/g, '');
    if (event.target.value !== numericValue) {
      event.target.value = numericValue;
    }
    manualBiweeklyTicketForm.tickets = numericValue;
  });

  const stepManualTicketCount = (direction) => {
    const currentValue = Number(manualBiweeklyTicketForm.tickets) || 0;
    const nextValue = Math.max(1, currentValue + direction);
    manualBiweeklyTicketForm.tickets = String(nextValue);
    if (ticketCountInput) {
      ticketCountInput.value = manualBiweeklyTicketForm.tickets;
      ticketCountInput.focus();
    }
  };

  document.querySelector('#manualTicketCountUpButton')?.addEventListener('click', () => stepManualTicketCount(1));
  document.querySelector('#manualTicketCountDownButton')?.addEventListener('click', () => stepManualTicketCount(-1));

  document.querySelector('#saveManualBiweeklyTicketButton')?.addEventListener('click', () => submitManualBiweeklyTicket());

  const overlay = document.querySelector('.roster-history-overlay');
  if (overlay) {
    overlay.addEventListener('click', (event) => {
      if (event.target === overlay) {
        manualBiweeklyTicketDialogOpen = false;
        renderGuildSyncTabLayout();
      }
    });
  }
}

async function submitManualBiweeklyTicket() {
  const accountName = String(manualBiweeklyTicketForm.accountName || '').trim();
  const note = String(manualBiweeklyTicketForm.note || '').trim();
  const tickets = Number(manualBiweeklyTicketForm.tickets);

  if (!accountName) {
    manualBiweeklyTicketError = 'Choose a guild member.';
    renderGuildSyncTabLayout();
    return;
  }

  if (!note) {
    manualBiweeklyTicketError = 'Enter a reason or note.';
    renderGuildSyncTabLayout();
    return;
  }

  if (!Number.isFinite(tickets) || tickets <= 0) {
    manualBiweeklyTicketError = 'Enter the number of tickets to add.';
    renderGuildSyncTabLayout();
    return;
  }

  manualBiweeklyTicketSubmitting = true;
  manualBiweeklyTicketError = '';
  renderGuildSyncTabLayout();

  try {
    const response = await emitSocketWithAck('guildsync:add-manual-biweekly-ticket-entry', {
      account_name: accountName,
      note,
      tickets: Math.floor(tickets)
    }, 30000);

    if (!response?.ok) {
      throw new Error(response?.message || response?.error || 'Failed to add manual ticket entry.');
    }

    manualBiweeklyTicketDialogOpen = false;
    manualBiweeklyTicketForm = { accountName: '', note: '', tickets: '' };
    manualBiweeklyTicketAccountSearchText = '';
    manualBiweeklyTicketActiveMatchIndex = -1;
    await refreshBankingDataFromBackend({ silent: true });
    addSystemMessage('manual-ticket-added', response.message || 'Manual ticket entry added.', { ttlMs: TRANSIENT_MESSAGE_TTL_MS });
  } catch (error) {
    manualBiweeklyTicketError = formatError(error);
  } finally {
    manualBiweeklyTicketSubmitting = false;
    renderGuildSyncTabLayout();
  }
}

function wireEsoRosterPanel() {
  const refreshButton = document.querySelector('#refreshRosterDataButton');
  if (refreshButton) {
    refreshButton.addEventListener('click', () => refreshRosterDataFromBackend());
  }

  const historyButton = document.querySelector('#openRosterHistoryButton');
  if (historyButton) {
    historyButton.addEventListener('click', () => {
      rosterHistoryDialogOpen = true;
      rosterHistoryError = '';
      renderGuildSyncTabLayout();
    });
  }

  const rosterSearchInput = document.querySelector('#rosterMemberSearch');
  if (rosterSearchInput) {
    rosterSearchInput.addEventListener('input', (event) => {
      rosterSearchText = event.target.value || '';
      renderGuildSyncTabLayout();
    });
  }

  const rankSelect = document.querySelector('#rosterRankFilter');
  if (rankSelect) {
    rankSelect.addEventListener('change', (event) => {
      const rankName = String(event.target.value || '').trim();
      if (rankName) {
        rosterSelectedRankNames.add(rankName);
        renderGuildSyncTabLayout();
      }
    });
  }

  document.querySelectorAll('[data-remove-roster-rank-filter]').forEach((button) => {
    button.addEventListener('click', () => {
      const rankName = button.dataset.removeRosterRankFilter || '';
      rosterSelectedRankNames.delete(rankName);
      renderGuildSyncTabLayout();
    });
  });

  const clearButton = document.querySelector('#clearRosterFiltersButton');
  if (clearButton) {
    clearButton.addEventListener('click', () => {
      rosterSearchText = '';
      rosterSelectedRankNames.clear();
      renderGuildSyncTabLayout();
    });
  }

  wireRosterHistoryDialog();
}

function wireRosterHistoryDialog() {
  const closeButton = document.querySelector('#closeRosterHistoryButton');
  if (closeButton) {
    closeButton.addEventListener('click', () => {
      rosterHistoryDialogOpen = false;
      renderGuildSyncTabLayout();
    });
  }

  const searchInput = document.querySelector('#rosterHistorySearchInput');
  if (searchInput) {
    searchInput.addEventListener('input', (event) => {
      rosterHistorySearchText = event.target.value || '';
      rosterHistoryActiveMatchIndex = -1;

      if (!rosterHistorySearchText.trim()) {
        clearTimeout(rosterHistorySearchTimer);
        rosterHistoryError = '';
        rosterHistoryMatches = [];
        rosterHistorySelectedAccount = '';
        rosterHistoryEvents = [];
        rosterHistoryLoading = false;
        renderGuildSyncTabLayout();
        focusInputById('rosterHistorySearchInput');
        return;
      }

      clearTimeout(rosterHistorySearchTimer);
      rosterHistorySearchTimer = setTimeout(() => {
        searchRosterRankHistory({ auto: true, keepFocus: true });
      }, 250);
    });

    searchInput.addEventListener('keydown', (event) => {
      if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
        if (rosterHistoryMatches.length === 0) {
          return;
        }

        event.preventDefault();
        const direction = event.key === 'ArrowDown' ? 1 : -1;
        const currentIndex = rosterHistoryActiveMatchIndex < 0 ? 0 : rosterHistoryActiveMatchIndex;
        rosterHistoryActiveMatchIndex = (currentIndex + direction + rosterHistoryMatches.length) % rosterHistoryMatches.length;
        renderGuildSyncTabLayout();
        focusInputById('rosterHistorySearchInput');
        return;
      }

      if (event.key !== 'Enter') {
        return;
      }

      event.preventDefault();
      const selectedMatch = rosterHistoryMatches[rosterHistoryActiveMatchIndex >= 0 ? rosterHistoryActiveMatchIndex : 0];
      if (selectedMatch?.account_name) {
        loadRosterStreamHistory(selectedMatch.account_name);
      }
    });
  }

  document.querySelectorAll('[data-roster-history-account]').forEach((button) => {
    button.addEventListener('click', () => {
      loadRosterStreamHistory(button.dataset.rosterHistoryAccount || '');
    });
  });
}

async function searchRosterRankHistory(options = {}) {
  const query = rosterHistorySearchText.trim();

  if (!query) {
    rosterHistoryError = '';
    rosterHistoryMatches = [];
    rosterHistoryActiveMatchIndex = -1;
    rosterHistorySelectedAccount = '';
    rosterHistoryEvents = [];
    rosterHistoryLoading = false;
    renderGuildSyncTabLayout();
    if (options.keepFocus) {
      focusInputById('rosterHistorySearchInput');
    }
    return;
  }

  rosterHistoryLoading = true;
  rosterHistoryError = '';
  rosterHistoryMatches = [];
  rosterHistoryActiveMatchIndex = -1;
  rosterHistorySelectedAccount = '';
  rosterHistoryEvents = [];
  renderGuildSyncTabLayout();
  if (options.keepFocus) {
    focusInputById('rosterHistorySearchInput');
  }

  try {
    const response = await emitSocketWithAck('guildsync:request-roster-rank-history', { query }, 30000);

    if (!response?.ok) {
      throw new Error(response?.message || response?.error || 'Failed to search roster rank history.');
    }

    rosterHistoryMatches = normalizeRosterHistoryMatches(response.matches);
    rosterHistoryActiveMatchIndex = rosterHistoryMatches.length > 0 ? 0 : -1;
  } catch (error) {
    rosterHistoryError = formatError(error);
  } finally {
    rosterHistoryLoading = false;
    renderGuildSyncTabLayout();
    if (options.keepFocus) {
      focusInputById('rosterHistorySearchInput');
    }
  }
}

async function loadRosterStreamHistory(accountName, options = {}) {
  const cleanAccountName = String(accountName || '').trim();

  if (!cleanAccountName) {
    return;
  }

  rosterHistorySelectedAccount = cleanAccountName;
  rosterHistorySearchText = cleanAccountName;
  rosterHistoryEvents = [];
  rosterHistoryLoading = true;
  rosterHistoryError = '';
  renderGuildSyncTabLayout();

  try {
    const response = await emitSocketWithAck('guildsync:request-roster-stream-history', { account_name: cleanAccountName }, 30000);

    if (!response?.ok) {
      throw new Error(response?.message || response?.error || 'Failed to load roster stream history.');
    }

    rosterHistoryEvents = normalizeRosterHistoryEvents(response.events);
  } catch (error) {
    rosterHistoryError = formatError(error);
  } finally {
    rosterHistoryLoading = false;
    if (!options.keepLoading) {
      renderGuildSyncTabLayout();
    }
  }
}

function normalizeRosterHistoryMatches(matches) {
  return Array.isArray(matches)
    ? matches
      .filter((item) => item && typeof item === 'object')
      .map((item) => ({
        account_name: String(item.account_name || item.accountName || '').trim(),
        rank: String(item.rank || item.rankName || '').trim()
      }))
    : [];
}

function normalizeRosterHistoryEvents(events) {
  return Array.isArray(events)
    ? events
      .filter((item) => item && typeof item === 'object')
      .map((item) => ({
        event_type: String(item.event_type || item.eventType || '').trim(),
        rank: String(item.rank || item.rankName || '').trim(),
        timestamp: item.timestamp ?? item.timestampS ?? '',
        officer: String(item.officer || '').trim()
      }))
    : [];
}

function normalizeRosterMembers(members) {
  return Array.isArray(members)
    ? members
      .filter((member) => member && typeof member === 'object')
      .map((member) => ({
        account_name: String(member.account_name || member.accountName || '').trim(),
        rank: String(member.rank || member.rankName || '').trim(),
        joined: member.joined ?? ''
      }))
      .sort((left, right) => left.account_name.localeCompare(right.account_name))
    : [];
}

function formatRosterRefreshDate(value) {
  if (!value) {
    return 'Never';
  }

  const date = new Date(value);
  if (Number.isNaN(date.getTime())) {
    return String(value);
  }

  return date.toLocaleString();
}

function formatRosterJoinedDate(value) {
  const numeric = Number(value);
  if (!numeric) {
    return '';
  }

  return new Date(numeric * 1000).toLocaleDateString();
}

function formatRosterHistoryTimestamp(value) {
  const numeric = Number(value);
  if (!numeric) {
    return '';
  }

  return new Date(numeric * 1000).toLocaleString();
}

async function handleRosterDataUpdated(payload = {}) {
  rosterMembers = normalizeRosterMembers(payload.members);
  rosterLastRefreshValue = payload.last_refresh || new Date().toISOString();

  if (activeGuildSyncTab === 'eso-members') {
    renderGuildSyncTabLayout();
  }

  addSystemMessage('roster-data-updated', `Roster data updated. Loaded ${rosterMembers.length} member record${rosterMembers.length === 1 ? '' : 's'}.`, {
    ttlMs: TRANSIENT_MESSAGE_TTL_MS
  });
}

async function refreshRosterDataFromBackend(options = {}) {
  if (!socket?.connected) {
    return;
  }

  rosterDataLoading = true;
  renderGuildSyncTabLayout();

  try {
    const response = await emitSocketWithAck('guildsync:request-roster-data', {}, 30000);

    if (!response?.ok) {
      throw new Error(response?.message || response?.error || 'Failed to retrieve roster data.');
    }

    rosterMembers = normalizeRosterMembers(response.members);
    rosterLastRefreshValue = response.last_refresh || rosterLastRefreshValue;

    if (!options.silent) {
      addSystemMessage('roster-data-loaded', `Loaded ${rosterMembers.length} roster member${rosterMembers.length === 1 ? '' : 's'}.`, {
        ttlMs: TRANSIENT_MESSAGE_TTL_MS
      });
    }
  } catch (error) {
    addSystemMessage('roster-data-error', formatError(error), {
      ttlMs: TRANSIENT_MESSAGE_TTL_MS
    });
  } finally {
    rosterDataLoading = false;
    renderGuildSyncTabLayout();
  }
}

async function collectAndSendGuildSyncRosterData(payload = {}) {
  if (!isAuthenticatedSession()) {
    return;
  }

  if (!socket?.connected) {
    addSystemMessage('roster-data-pending', 'Roster SavedVariables changed, but GuildSync websocket is not connected yet. The file was not cleared.', {
      ttlMs: TRANSIENT_MESSAGE_TTL_MS
    });
    return;
  }

  rosterDataLoading = true;
  renderGuildSyncTabLayout();

  try {
    const result = await CollectGuildSyncRosterData(payload);

    if (!result?.ok) {
      addSystemMessage('roster-data-pending', result?.message || 'Roster SavedVariables changed, but no roster data was sent yet.', {
        ttlMs: TRANSIENT_MESSAGE_TTL_MS
      });
      return;
    }

    const rosterPayload = {
      local_upload_id: createLocalRosterUploadId(),
      authenticated_username: getDisplayName(),
      authenticated_discord_user_id: guildSyncSession?.user?.discord_user_id || '',
      source: 'guildsync-frontend-client',
      file_name: result.fileName || payload.fileName || '',
      file_path: result.filePath || payload.filePath || '',
      collected_at: new Date().toISOString(),
      data: result.data || {}
    };

    try {
      await sendQueuedGuildSyncRosterUpload(rosterPayload);
    } catch (sendError) {
      enqueuePendingGuildSyncRosterUpload(rosterPayload);
      throw sendError;
    }

    await refreshRosterDataFromBackend({ silent: true });
  } catch (error) {
    addSystemMessage('roster-data-error', formatError(error), {
      ttlMs: TRANSIENT_MESSAGE_TTL_MS
    });
  } finally {
    rosterDataLoading = false;
    renderGuildSyncTabLayout();
  }
}

function createLocalRosterUploadId() {
  return `roster-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function loadPendingGuildSyncRosterUploads() {
  try {
    const raw = window.localStorage.getItem(PENDING_ROSTER_UPLOADS_STORAGE_KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed.filter((item) => item && typeof item === 'object') : [];
  } catch {
    return [];
  }
}

function savePendingGuildSyncRosterUploads(queue) {
  window.localStorage.setItem(PENDING_ROSTER_UPLOADS_STORAGE_KEY, JSON.stringify(Array.isArray(queue) ? queue : []));
}

function enqueuePendingGuildSyncRosterUpload(payload) {
  const uploadId = String(payload?.local_upload_id || createLocalRosterUploadId());
  const queue = loadPendingGuildSyncRosterUploads().filter((item) => item?.local_upload_id !== uploadId);

  queue.push({
    ...payload,
    local_upload_id: uploadId,
    pending_saved_at: new Date().toISOString()
  });

  savePendingGuildSyncRosterUploads(queue);

  addSystemMessage('roster-data-pending', 'Roster data is queued and will retry after GuildSync reconnects.', {
    ttlMs: TRANSIENT_MESSAGE_TTL_MS
  });
}

function removePendingGuildSyncRosterUpload(uploadId) {
  const queue = loadPendingGuildSyncRosterUploads().filter((item) => item?.local_upload_id !== uploadId);
  savePendingGuildSyncRosterUploads(queue);
}

async function processPendingGuildSyncRosterUploads() {
  if (rosterUploadQueueProcessing || !socket?.connected || !isAuthenticatedSession()) {
    return;
  }

  const queue = loadPendingGuildSyncRosterUploads();
  if (queue.length === 0) {
    return;
  }

  rosterUploadQueueProcessing = true;

  try {
    for (const pendingPayload of queue) {
      if (!socket?.connected || !isAuthenticatedSession()) {
        return;
      }

      await sendQueuedGuildSyncRosterUpload(pendingPayload);
      removePendingGuildSyncRosterUpload(pendingPayload.local_upload_id);
    }
  } catch (error) {
    addSystemMessage('roster-data-pending-error', `Pending roster upload retry failed: ${formatError(error)}`, {
      ttlMs: TRANSIENT_MESSAGE_TTL_MS
    });
  } finally {
    rosterUploadQueueProcessing = false;
  }
}

async function sendQueuedGuildSyncRosterUpload(rosterPayload) {
  if (!socket?.connected) {
    throw new Error('GuildSync websocket is not connected. Roster data was not cleared.');
  }

  const response = await emitSocketWithAck('guildsync:sending-roster-data', rosterPayload, 30000);

  if (!response?.ok) {
    throw new Error(response?.message || response?.error || 'Backend rejected the roster data payload. Roster data was not cleared.');
  }

  const commitResult = await CommitGuildSyncRosterData(
    rosterPayload.file_path || '',
    rosterPayload.file_name || ''
  );

  if (!commitResult?.ok) {
    throw new Error(commitResult?.message || 'Backend confirmed roster data, but the SavedVariables file could not be cleared.');
  }

  addSystemMessage('roster-data-sent', response.message || 'Roster data sent to GuildSync backend.', {
    ttlMs: TRANSIENT_MESSAGE_TTL_MS
  });

  return response;
}

function renderBankDepositsPanel() {
  const rows = getBankingRowsForSection(bankingActiveSection);
  const totals = getBankingTotals(rows);
  const showTicketColumn = bankingActiveSection !== 'other';

  return `
    <div class="guildsync-tab-panel bank-deposits-panel" data-active-tab="more">
      <div class="discord-data-header bank-deposits-header">
        <div>
          <h2 class="discord-data-title">Bank Deposits / Raffle Tickets</h2>
          <p class="discord-data-subtitle">View guild bank deposits and raffle ticket allocations by raffle period.</p>
        </div>
        <div class="discord-data-actions">
          <span class="discord-last-refresh">Last Refresh: ${escapeHtml(formatDiscordRefreshDate(bankingLastRefreshValue))}</span>
          <button class="bank-export-button" type="button" data-bank-export-section="biweekly">
            <span aria-hidden="true">▦</span>
            <span>Export Bi-Weekly</span>
          </button>
          <button id="openManualBiweeklyTicketButton" class="bank-export-button" type="button">
            <span aria-hidden="true">＋</span>
            <span>Add Manual Tickets</span>
          </button>
          <button class="bank-export-button" type="button" data-bank-export-section="monthly">
            <span aria-hidden="true">▦</span>
            <span>Export 50/50</span>
          </button>
          <button id="refreshBankingDataButton" class="refresh-discord-button" type="button" ${bankingDataLoading ? 'disabled' : ''}>
            <span class="refresh-discord-icon" aria-hidden="true">↻</span>
            <span>${bankingDataLoading ? 'Refreshing...' : 'Refresh Deposits'}</span>
          </button>
        </div>
      </div>

      <div class="bank-deposits-body">
        <div class="bank-section-cards" role="tablist" aria-label="Bank deposit sections">
          ${renderBankSectionCard('biweekly', '▣', 'Bi-Weekly', 'Two-week raffle ticket deposits')}
          ${renderBankSectionCard('monthly', '🎟', '50/50', 'Four-week 50/50 ticket deposits')}
          ${renderBankSectionCard('other', '?', 'Other', 'All other deposits')}
        </div>

        ${renderBankingRafflePeriodControls(bankingActiveSection)}

        <div class="bank-deposit-table-shell">
          <table class="bank-deposit-table${showTicketColumn ? '' : ' bank-deposit-table-no-tickets'}">
            <thead>
              <tr>
                <th>Event ID <span class="bank-info-dot">i</span></th>
                <th>Date / Time (Local) <span class="bank-info-dot">i</span></th>
                <th>Depositor</th>
                <th>Amount Deposited <span class="bank-info-dot">i</span></th>
                ${showTicketColumn ? '<th>Tickets Awarded <span class="bank-info-dot">i</span></th>' : ''}
              </tr>
            </thead>
            <tbody>
              ${rows.length > 0 ? rows.map((entry) => renderBankDepositRow(entry, showTicketColumn)).join('') : renderEmptyBankDepositRow(showTicketColumn)}
            </tbody>
          </table>
        </div>

        <div class="bank-deposits-summary-row">
          <div>Total Deposits: <strong>${escapeHtml(formatGoldAmount(totals.amount))}</strong> <span aria-hidden="true">🪙</span></div>
          ${showTicketColumn ? `<div>Total Tickets Awarded: <strong>${escapeHtml(formatTicketAmount(totals.tickets))}</strong> <span aria-hidden="true">🎟</span></div>` : ''}
        </div>
      </div>
      ${bankingExportGridOpen ? renderBankingExportGrid(getBankingRowsForSection(bankingExportSection)) : ''}
    </div>
  `;
}

function renderBankingExportGrid(rows) {
  return `
    <div class="bank-export-overlay" role="dialog" aria-modal="true" aria-label="Export bank deposits to spreadsheet">
      <div class="bank-export-dialog">
        <div class="bank-export-dialog-header">
          <div>
            <h3 class="bank-export-title">Export ${escapeHtml(getBankingSectionLabel(bankingExportSection))} Deposits</h3>
            <p class="bank-export-subtitle">Copy this grid and paste it directly into Google Sheets.</p>
          </div>
          <button id="closeBankingExportGridButton" class="bank-export-close-button" type="button" aria-label="Close export grid">×</button>
        </div>

        <div class="bank-export-toolbar">
          <button id="copyBankingExportGridButton" class="bank-export-copy-button" type="button" ${rows.length === 0 ? 'disabled' : ''}>Copy Grid</button>
          <span class="bank-export-count">${escapeHtml(String(rows.length))} row${rows.length === 1 ? '' : 's'}</span>
        </div>

        <div class="bank-export-grid-shell">
          <table id="bankingExportGrid" class="bank-export-grid">
            <thead>
              <tr>
                <th>Guildie Name</th>
                <th>Deposit Amount</th>
              </tr>
            </thead>
            <tbody>
              ${rows.length > 0 ? rows.map((entry) => renderBankingExportGridRow(entry)).join('') : renderEmptyBankingExportGridRow()}
            </tbody>
          </table>
        </div>

        <textarea id="bankingExportTsv" class="bank-export-tsv" readonly>${escapeHtml(getBankingExportTsv(rows))}</textarea>
      </div>
    </div>
  `;
}

function renderBankingExportGridRow(entry) {
  return `
    <tr>
      <td>${escapeHtml(entry.displayName || '')}</td>
      <td>${escapeHtml(String(Number(entry.amount) || 0))}</td>
    </tr>
  `;
}

function renderEmptyBankingExportGridRow() {
  return `
    <tr>
      <td class="bank-empty-row" colspan="2">No deposits to export for ${escapeHtml(getBankingSectionLabel(bankingExportSection))}.</td>
    </tr>
  `;
}

function renderBankingRafflePeriodControls(section) {
  if (section === 'other') {
    return `
      <div class="bank-raffle-period-strip">
        <div>
          <div class="bank-raffle-period-label">Other Deposits</div>
          <div class="bank-raffle-period-range">Other deposits are not assigned raffle tickets.</div>
        </div>
      </div>
    `;
  }

  const windowInfo = getBankingRaffleWindow(section);
  const offset = getBankingRafflePeriodOffset(section);
  const canMoveForward = offset < 0;

  return `
    <div class="bank-raffle-period-strip">
      <button class="bank-period-arrow" type="button" data-bank-period-move="previous" aria-label="Previous ${escapeAttribute(getBankingSectionLabel(section))} raffle period">‹</button>
      <div class="bank-raffle-period-content">
        <div class="bank-raffle-period-label">${escapeHtml(getBankingSectionLabel(section))} Raffle Period ${offset === 0 ? '(Current)' : `(${Math.abs(offset)} period${Math.abs(offset) === 1 ? '' : 's'} back)`}</div>
        <div class="bank-raffle-period-range">Sales: ${escapeHtml(formatBankingTimestamp(windowInfo.salesStart))} through ${escapeHtml(formatBankingTimestamp(windowInfo.salesEnd))}</div>
        <div class="bank-raffle-period-raffle">Raffle Time: ${escapeHtml(formatBankingTimestamp(windowInfo.raffleTime))}</div>
      </div>
      <button class="bank-period-arrow" type="button" data-bank-period-move="next" ${canMoveForward ? '' : 'disabled'} aria-label="Next ${escapeAttribute(getBankingSectionLabel(section))} raffle period">›</button>
    </div>
  `;
}

function renderBankSectionCard(section, icon, title, subtitle) {
  const isActive = bankingActiveSection === section;

  return `
    <button class="bank-section-card${isActive ? ' active' : ''}" type="button" data-bank-section="${escapeAttribute(section)}" aria-selected="${isActive ? 'true' : 'false'}">
      <span class="bank-section-icon" aria-hidden="true">${escapeHtml(icon)}</span>
      <span class="bank-section-text">
        <span class="bank-section-title">${escapeHtml(title)}</span>
        <span class="bank-section-subtitle">${escapeHtml(subtitle)}</span>
      </span>
    </button>
  `;
}

function wireBankDepositsPanel() {
  if (activeGuildSyncTab !== 'more') {
    return;
  }

  document.querySelectorAll('[data-bank-section]').forEach((button) => {
    button.addEventListener('click', () => {
      bankingActiveSection = button.dataset.bankSection || 'biweekly';
      renderGuildSyncTabLayout();
    });
  });

  document.querySelectorAll('[data-bank-export-section]').forEach((button) => {
    button.addEventListener('click', () => {
      const requestedSection = button.dataset.bankExportSection || 'biweekly';
      bankingExportSection = requestedSection === 'monthly' ? 'monthly' : 'biweekly';
      bankingExportGridOpen = true;
      renderGuildSyncTabLayout();
    });
  });

  document.querySelectorAll('[data-bank-period-move]').forEach((button) => {
    button.addEventListener('click', () => {
      moveBankingRafflePeriod(button.dataset.bankPeriodMove || '');
      renderGuildSyncTabLayout();
    });
  });

  const closeExportButton = document.querySelector('#closeBankingExportGridButton');
  if (closeExportButton) {
    closeExportButton.addEventListener('click', () => {
      bankingExportGridOpen = false;
      renderGuildSyncTabLayout();
    });
  }

  const copyExportButton = document.querySelector('#copyBankingExportGridButton');
  if (copyExportButton) {
    copyExportButton.addEventListener('click', () => copyBankingExportGrid());
  }

  const exportOverlay = document.querySelector('.bank-export-overlay');
  if (exportOverlay) {
    exportOverlay.addEventListener('click', (event) => {
      if (event.target === exportOverlay) {
        bankingExportGridOpen = false;
        renderGuildSyncTabLayout();
      }
    });
  }

  const manualTicketButton = document.querySelector('#openManualBiweeklyTicketButton');
  if (manualTicketButton) {
    manualTicketButton.addEventListener('click', async () => {
      manualBiweeklyTicketDialogOpen = true;
      manualBiweeklyTicketError = '';
      manualBiweeklyTicketAccountSearchText = manualBiweeklyTicketForm.accountName || '';
      if (rosterMembers.length === 0 && socket?.connected && isAuthenticatedSession()) {
        await refreshRosterDataFromBackend({ silent: true });
      }
      renderGuildSyncTabLayout();
    });
  }

  const refreshButton = document.querySelector('#refreshBankingDataButton');
  if (refreshButton) {
    refreshButton.addEventListener('click', () => collectAndSendGuildSyncBankingData({ key: 'banking' }));
  }
}

function getBankingExportTsv(rows) {
  const lines = [['Guildie Name', 'Deposit Amount']];

  for (const entry of rows) {
    lines.push([entry.displayName || '', String(Number(entry.amount) || 0)]);
  }

  return lines.map((row) => row.map(formatTsvCell).join('\t')).join('\n');
}

function formatTsvCell(value) {
  return String(value ?? '').replace(/[\t\r\n]+/g, ' ').trim();
}

async function copyBankingExportGrid() {
  const rows = getBankingRowsForSection(bankingExportSection);
  const tsv = getBankingExportTsv(rows);

  try {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(tsv);
    } else {
      const textArea = document.querySelector('#bankingExportTsv');
      textArea.focus();
      textArea.select();
      document.execCommand('copy');
    }

    addSystemMessage('banking-export-copied', 'Bank deposit export grid copied to clipboard.', {
      ttlMs: TRANSIENT_MESSAGE_TTL_MS
    });
  } catch (error) {
    const textArea = document.querySelector('#bankingExportTsv');

    if (textArea) {
      textArea.focus();
      textArea.select();
    }

    addSystemMessage('banking-export-copy-error', 'Could not copy automatically. The export text is selected so you can press Ctrl+C.', {
      ttlMs: TRANSIENT_MESSAGE_TTL_MS
    });
  }
}

function getBankingRowsForSection(section) {
  return bankingEntries
    .filter((entry) => entry.type === section)
    .filter((entry) => isBankingEntryInSelectedPeriod(section, entry))
    .sort((left, right) => (Number(right.time) || 0) - (Number(left.time) || 0));
}

function isBankingEntryInSelectedPeriod(section, entry) {
  if (section === 'other') {
    return true;
  }

  const timestamp = Number(entry?.time) || 0;

  if (timestamp <= 0) {
    return false;
  }

  const windowInfo = getBankingRaffleWindow(section);
  return timestamp >= windowInfo.salesStart && timestamp <= windowInfo.salesEnd;
}

function getBankingRafflePeriodOffset(section) {
  return Number(bankingRafflePeriodOffsets[section]) || 0;
}

function moveBankingRafflePeriod(direction) {
  if (bankingActiveSection !== 'biweekly' && bankingActiveSection !== 'monthly') {
    return;
  }

  const currentOffset = getBankingRafflePeriodOffset(bankingActiveSection);

  if (direction === 'previous') {
    bankingRafflePeriodOffsets[bankingActiveSection] = currentOffset - 1;
    return;
  }

  if (direction === 'next' && currentOffset < 0) {
    bankingRafflePeriodOffsets[bankingActiveSection] = currentOffset + 1;
  }
}

function getBankingRaffleWindow(section) {
  const now = Math.floor(Date.now() / 1000);
  const isMonthly = section === 'monthly';
  const interval = isMonthly ? BANKING_MONTHLY_INTERVAL_SECONDS : BANKING_BIWEEKLY_INTERVAL_SECONDS;
  let salesEnd = isMonthly ? BANKING_MONTHLY_SALES_END_ANCHOR_UTC : BANKING_BIWEEKLY_SALES_END_ANCHOR_UTC;

  while (salesEnd - interval > now) {
    salesEnd -= interval;
  }

  while (salesEnd < now) {
    salesEnd += interval;
  }

  salesEnd += getBankingRafflePeriodOffset(section) * interval;

  return {
    salesStart: salesEnd - interval + 1,
    salesEnd,
    raffleTime: salesEnd + BANKING_RAFFLE_AFTER_SALES_SECONDS
  };
}

function getBankingTotals(rows) {
  return rows.reduce(
    (totals, entry) => {
      totals.amount += Number(entry.amount) || 0;
      totals.tickets += Number(entry.ticketAmount) || 0;
      return totals;
    },
    { amount: 0, tickets: 0 }
  );
}

function renderBankDepositRow(entry, showTicketColumn = true) {
  return `
    <tr>
      <td>${escapeHtml(entry.note || entry.eventId || '')}</td>
      <td>${escapeHtml(formatBankingTimestamp(entry.time))}</td>
      <td>${escapeHtml(entry.displayName || '')}</td>
      <td><strong class="bank-gold-amount">${escapeHtml(formatGoldAmount(entry.amount))}</strong> <span aria-hidden="true">🪙</span></td>
      ${showTicketColumn ? `<td><strong class="bank-ticket-amount">${escapeHtml(formatTicketAmount(entry.ticketAmount))}</strong></td>` : ''}
    </tr>
  `;
}

function renderEmptyBankDepositRow(showTicketColumn = true) {
  return `
    <tr>
      <td class="bank-empty-row" colspan="${showTicketColumn ? '5' : '4'}">No ${escapeHtml(getBankingSectionLabel(bankingActiveSection))} deposits found for this ${bankingActiveSection === 'other' ? 'section' : 'raffle period'}.</td>
    </tr>
  `;
}

function getBankingSectionLabel(section) {
  if (section === 'biweekly') {
    return 'Bi-Weekly';
  }

  if (section === 'monthly') {
    return '50/50';
  }

  return 'Other';
}

function formatBankingTimestamp(value) {
  const timestamp = Number(value);

  if (!Number.isFinite(timestamp) || timestamp <= 0) {
    return 'Unknown';
  }

  return new Date(timestamp * 1000).toLocaleString([], {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit'
  });
}

function formatGoldAmount(value) {
  const amount = Number(value) || 0;
  return amount.toLocaleString();
}

function formatTicketAmount(value) {
  const amount = Number(value) || 0;
  return amount.toLocaleString();
}

function normalizeBankingEntries(entries) {
  if (!Array.isArray(entries)) {
    return [];
  }

  return entries.map((entry) => {
    const type = String(entry?.type || 'other').trim().toLowerCase();

    return {
      type: type === 'monthly' || type === 'biweekly' || type === 'other' ? type : 'other',
      eventId: String(entry?.eventId ?? entry?.event_id ?? '').trim(),
      time: Number(entry?.time ?? entry?.timestamp ?? 0) || 0,
      displayName: String(entry?.displayName ?? entry?.display_name ?? '').trim(),
      amount: Number(entry?.amount ?? 0) || 0,
      ticketAmount: Number(entry?.ticketAmount ?? entry?.ticket_amount ?? 0) || 0,
      note: String(entry?.note ?? '').trim(),
      dataSource: String(entry?.dataSource ?? entry?.data_source ?? '').trim()
    };
  });
}

function mergeBankingEntries(entries) {
  const byEventId = new Map();

  for (const existing of bankingEntries) {
    if (existing.eventId) {
      byEventId.set(existing.eventId, existing);
    }
  }

  for (const entry of entries) {
    if (!entry.eventId) {
      continue;
    }

    byEventId.set(entry.eventId, entry);
  }

  bankingEntries = Array.from(byEventId.values()).sort((left, right) => (Number(right.time) || 0) - (Number(left.time) || 0));
}

function markBankingLastRefreshNow() {
  bankingLastRefreshValue = new Date().toISOString();
}

async function handleBankingDataUpdated(payload = {}) {
  if (!payload?.ok) {
    return;
  }

  bankingEntries = normalizeBankingEntries(payload.entries);
  markBankingLastRefreshNow();

  if (activeGuildSyncTab === 'more') {
    renderGuildSyncTabLayout();
  }

  addSystemMessage('banking-data-updated', `Banking data updated. Loaded ${bankingEntries.length} deposit record${bankingEntries.length === 1 ? '' : 's'}.`, {
    ttlMs: TRANSIENT_MESSAGE_TTL_MS
  });
}

async function refreshBankingDataFromBackend(options = {}) {
  const silent = Boolean(options.silent);

  if (!socket?.connected) {
    if (!silent) {
      addSystemMessage('banking-data-error', 'GuildSync websocket is not connected.', {
        ttlMs: TRANSIENT_MESSAGE_TTL_MS
      });
    }
    return;
  }

  if (!isAuthenticatedSession()) {
    return;
  }

  bankingDataLoading = true;
  renderGuildSyncTabLayout();

  try {
    const response = await emitSocketWithAck('guildsync:request-banking-data', {}, 30000);

    if (!response?.ok) {
      throw new Error(response?.message || 'Unable to retrieve banking data.');
    }

    bankingEntries = normalizeBankingEntries(response.entries);
    markBankingLastRefreshNow();

    if (!silent) {
      addSystemMessage('banking-data', `Loaded ${bankingEntries.length} banking deposit record${bankingEntries.length === 1 ? '' : 's'}.`, {
        ttlMs: TRANSIENT_MESSAGE_TTL_MS
      });
    }
  } catch (error) {
    if (!silent) {
      addSystemMessage('banking-data-error', formatError(error), {
        ttlMs: TRANSIENT_MESSAGE_TTL_MS
      });
    }
  } finally {
    bankingDataLoading = false;
    renderGuildSyncTabLayout();
  }
}

async function collectAndSendGuildSyncBankingData(payload = {}) {
  if (!isAuthenticatedSession()) {
    return;
  }

  if (!socket?.connected) {
    addSystemMessage('banking-data-pending', 'Banking SavedVariables changed, but GuildSync websocket is not connected yet. The file was not cleared.', {
      ttlMs: TRANSIENT_MESSAGE_TTL_MS
    });
    return;
  }

  bankingDataLoading = true;
  renderGuildSyncTabLayout();

  try {
    const result = await CollectGuildSyncBankingData(payload);

    if (!result?.ok) {
      addSystemMessage('banking-data-pending', result?.message || 'Banking SavedVariables changed, but no banking data was sent yet.', {
        ttlMs: TRANSIENT_MESSAGE_TTL_MS
      });
      return;
    }

    const collectedEntries = normalizeBankingEntries(result?.data?.entries);
    mergeBankingEntries(collectedEntries);
    const collectedAt = new Date().toISOString();

    const bankingPayload = {
      local_upload_id: createLocalBankingUploadId(),
      authenticated_username: getDisplayName(),
      authenticated_discord_user_id: guildSyncSession?.user?.discord_user_id || '',
      source: 'guildsync-frontend-client',
      file_name: result.fileName || payload.fileName || '',
      file_path: result.filePath || payload.filePath || '',
      collected_at: collectedAt,
      data: result.data || {}
    };

    try {
      await sendQueuedGuildSyncBankingUpload(bankingPayload);
    } catch (sendError) {
      enqueuePendingGuildSyncBankingUpload(bankingPayload);
      throw sendError;
    }

    await refreshBankingDataFromBackend({ silent: true });
  } catch (error) {
    addSystemMessage('banking-data-error', formatError(error), {
      ttlMs: TRANSIENT_MESSAGE_TTL_MS
    });
  } finally {
    bankingDataLoading = false;
    renderGuildSyncTabLayout();
  }
}

function createLocalBankingUploadId() {
  return `banking-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function loadPendingGuildSyncBankingUploads() {
  try {
    const raw = window.localStorage.getItem(PENDING_BANKING_UPLOADS_STORAGE_KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed.filter((item) => item && typeof item === 'object') : [];
  } catch {
    return [];
  }
}

function savePendingGuildSyncBankingUploads(queue) {
  window.localStorage.setItem(PENDING_BANKING_UPLOADS_STORAGE_KEY, JSON.stringify(Array.isArray(queue) ? queue : []));
}

function enqueuePendingGuildSyncBankingUpload(payload) {
  const uploadId = String(payload?.local_upload_id || createLocalBankingUploadId());
  const queue = loadPendingGuildSyncBankingUploads().filter((item) => item?.local_upload_id !== uploadId);

  queue.push({
    ...payload,
    local_upload_id: uploadId,
    pending_saved_at: new Date().toISOString()
  });

  savePendingGuildSyncBankingUploads(queue);

  addSystemMessage('banking-data-pending', 'Banking data is queued and will retry after GuildSync reconnects.', {
    ttlMs: TRANSIENT_MESSAGE_TTL_MS
  });
}

function removePendingGuildSyncBankingUpload(uploadId) {
  const queue = loadPendingGuildSyncBankingUploads().filter((item) => item?.local_upload_id !== uploadId);
  savePendingGuildSyncBankingUploads(queue);
}

async function processPendingGuildSyncBankingUploads() {
  if (bankingUploadQueueProcessing || !socket?.connected || !isAuthenticatedSession()) {
    return;
  }

  const queue = loadPendingGuildSyncBankingUploads();
  if (queue.length === 0) {
    return;
  }

  bankingUploadQueueProcessing = true;

  try {
    for (const pendingPayload of queue) {
      if (!socket?.connected || !isAuthenticatedSession()) {
        return;
      }

      await sendQueuedGuildSyncBankingUpload(pendingPayload);
      removePendingGuildSyncBankingUpload(pendingPayload.local_upload_id);
    }
  } catch (error) {
    addSystemMessage('banking-data-pending-error', `Pending banking upload retry failed: ${formatError(error)}`, {
      ttlMs: TRANSIENT_MESSAGE_TTL_MS
    });
  } finally {
    bankingUploadQueueProcessing = false;
  }
}

async function sendQueuedGuildSyncBankingUpload(bankingPayload) {
  if (!socket?.connected) {
    throw new Error('GuildSync websocket is not connected. Banking data was not cleared.');
  }

  const response = await emitSocketWithAck('guildsync:sending-banking-data', bankingPayload, 30000);

  if (!response?.ok) {
    throw new Error(response?.message || response?.error || 'Backend rejected the banking data payload. Banking data was not cleared.');
  }

  const commitResult = await CommitGuildSyncBankingData(
    bankingPayload.file_path || '',
    bankingPayload.file_name || ''
  );

  if (!commitResult?.ok) {
    throw new Error(commitResult?.message || 'Backend confirmed banking data, but the SavedVariables file could not be cleared.');
  }

  addSystemMessage('banking-data-sent', response.message || 'Banking data sent to GuildSync backend.', {
    ttlMs: TRANSIENT_MESSAGE_TTL_MS
  });

  return response;
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


function renderProfileFileWatcherSection(status = guildSyncFileWatcherStatus) {
  const files = Array.isArray(status?.files) ? status.files : [];
  const directory = String(status?.directory || '').trim();
  const watching = Boolean(status?.watching);

  if (files.length === 0) {
    return `
      <div class="profile-filewatch-empty">No SavedVariables files are configured.</div>
    `;
  }

  return `
    <div class="profile-filewatch-list">
      ${files.map((file) => {
        const key = String(file?.key || file?.fileName || '').trim();
        const fileName = String(file?.fileName || 'SavedVariables file').trim();
        const filePath = String(file?.filePath || (directory ? `${directory}\\${fileName}` : fileName)).trim();
        const enabled = file?.enabled !== false;
        const active = watching && enabled;
        const toggleID = `profileFileWatchToggle-${sanitizeID(key || fileName)}`;

        return `
          <label class="profile-filewatch-item ${enabled ? 'enabled' : 'disabled'}" title="${escapeAttribute(filePath)}">
            <span class="profile-filewatch-main">
              <span class="profile-filewatch-name">${escapeHtml(fileName)}</span>
              <span class="profile-filewatch-state">${active ? 'Watching' : enabled ? 'On' : 'Off'}</span>
            </span>
            <input
              id="${escapeAttribute(toggleID)}"
              class="profile-filewatch-toggle"
              type="checkbox"
              data-filewatch-key="${escapeAttribute(key)}"
              ${enabled ? 'checked' : ''}
              aria-label="Turn file watch ${enabled ? 'off' : 'on'} for ${escapeAttribute(fileName)}"
            />
          </label>
        `;
      }).join('')}
    </div>
  `;
}

function renderOpenProfileMenuContents() {
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
      <div class="profile-section profile-filewatch-section">
        <div class="profile-section-header">
          <span>File Watch</span>
          <span class="profile-section-subtitle">${guildSyncFileWatcherStatus?.watching ? 'Active' : 'Stopped'}</span>
        </div>
        ${renderProfileFileWatcherSection()}
      </div>
      <button id="discordLogoutButton" class="discord-secondary-button profile-logout-button" type="button">Logout</button>
    </section>
  `;

  document
    .querySelector('#discordLogoutButton')
    ?.addEventListener('click', logoutGuildSync);

  document
    .querySelector('#associateTicketReportButton')
    ?.addEventListener('click', () => {
      closeProfileMenu(false);
      associateTicketReportDialogOpen = true;
      associateTicketReportError = '';
      renderGuildSyncTabLayout();
      runAssociateTicketReport();
    });

  document
    .querySelectorAll('.profile-filewatch-toggle')
    .forEach((toggle) => {
      toggle.addEventListener('change', handleProfileFileWatchToggleChange);
    });
}

async function refreshProfileFileWatcherStatus() {
  try {
    guildSyncFileWatcherStatus = await GetGuildSyncFileWatcherStatus();

    if (profileMenuOpen) {
      renderOpenProfileMenuContents();
    }
  } catch (error) {
    addSystemMessage('file-watcher-error', formatError(error), {
      ttlMs: TRANSIENT_MESSAGE_TTL_MS
    });
  }
}

async function handleProfileFileWatchToggleChange(event) {
  const toggle = event.currentTarget;
  const key = String(toggle?.dataset?.filewatchKey || '').trim();

  if (!key) {
    return;
  }

  try {
    toggle.disabled = true;
    guildSyncFileWatcherStatus = await SetGuildSyncSavedVarsWatchFileEnabled(key, toggle.checked);
    await syncGuildSyncFileWatcherWithAuthState({ silent: true });

    if (profileMenuOpen) {
      renderOpenProfileMenuContents();
    }
  } catch (error) {
    addSystemMessage('file-watcher-error', formatError(error), {
      ttlMs: TRANSIENT_MESSAGE_TTL_MS
    });
    await refreshProfileFileWatcherStatus();
  }
}

function sanitizeID(value) {
  return String(value || '')
    .trim()
    .replace(/[^a-zA-Z0-9_-]+/g, '-') || 'file';
}

function openProfileMenu() {
  const menu = document.querySelector('#discordProfileMenu');
  if (!menu) {
    return;
  }

  renderOpenProfileMenuContents();

  menu.classList.add('open');
  menu.setAttribute('aria-hidden', 'false');
  profileMenuOpen = true;

  refreshProfileFileWatcherStatus();

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
    await syncGuildSyncFileWatcherWithAuthState();
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

    if (activeGuildSyncTab === 'eso-members') {
      refreshRosterDataFromBackend({ silent: true });
    }

    if (activeGuildSyncTab === 'more') {
      refreshBankingDataFromBackend({ silent: true });
    }

    processPendingGuildSyncBankingUploads();
    processPendingGuildSyncRosterUploads();
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

  socket.on('guildsync:banking-data-updated', (payload) => {
    handleBankingDataUpdated(payload);
  });

  socket.on('guildsync:roster-data-updated', (payload) => {
    handleRosterDataUpdated(payload);
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

async function syncGuildSyncFileWatcherWithAuthState(options = {}) {
  try {
    if (isAuthenticatedSession()) {
      const status = await StartGuildSyncFileWatcher();
      guildSyncFileWatcherStatus = status;

      if (!options.silent && status?.message) {
        addSystemMessage(status.watching ? 'file-watcher' : 'file-watcher-error', status.message, {
          ttlMs: TRANSIENT_MESSAGE_TTL_MS
        });
      }

      return;
    }

    guildSyncFileWatcherStatus = await StopGuildSyncFileWatcher();
    removeSystemMessage('file-watcher');
  } catch (error) {
    addSystemMessage('file-watcher-error', formatError(error), {
      ttlMs: TRANSIENT_MESSAGE_TTL_MS
    });
  }
}

function handleGuildSyncSavedVarsFileModified(payload = {}) {
  if (!isAuthenticatedSession()) {
    return;
  }

  const key = String(payload.key || payload.fileName || 'saved-vars-file').trim() || 'saved-vars-file';
  const label = String(payload.label || '').trim();
  const fileName = String(payload.fileName || 'SavedVariables file').trim() || 'SavedVariables file';
  const displayName = label ? `${label} saved variables (${fileName})` : fileName;

  addSystemMessage(`saved-vars-file-updated-${key}`, `${displayName} has been updated.`, {
    ttlMs: TRANSIENT_MESSAGE_TTL_MS
  });

  if (key.toLowerCase() === 'banking') {
    handleGuildSyncBankingSavedVarsModified(payload);
  }

  if (key.toLowerCase() === 'roster') {
    handleGuildSyncRosterSavedVarsModified(payload);
  }
}

async function handleGuildSyncBankingSavedVarsModified(payload = {}) {
  await collectAndSendGuildSyncBankingData(payload);
}

async function handleGuildSyncRosterSavedVarsModified(payload = {}) {
  await collectAndSendGuildSyncRosterData(payload);
}

function handleGuildSyncFileWatcherError(message) {
  if (!isAuthenticatedSession()) {
    return;
  }

  addSystemMessage('file-watcher-error', formatError(message), {
    ttlMs: TRANSIENT_MESSAGE_TTL_MS
  });
}

function wireGuildSyncEvents() {
  EventsOn('guildsync-savedvars-file-modified', handleGuildSyncSavedVarsFileModified);
  EventsOn('guildsync-file-watcher-error', handleGuildSyncFileWatcherError);

  EventsOn('guildsync-login-complete', async (session) => {
    guildSyncSession = session || { logged_in: false, allowed: false };

    renderDiscordArea();
    connectSocket();
    await syncGuildSyncFileWatcherWithAuthState();

    addSystemMessage(
      'auth',
      guildSyncSession.status_message || `Logged in and authorized as ${getDisplayName()}.`,
      {
        ttlMs: TRANSIENT_MESSAGE_TTL_MS
      }
    );
  });

  EventsOn('guildsync-login-denied', async (message) => {
    guildSyncSession = {
      logged_in: false,
      allowed: false,
      status_message: ''
    };

    renderDiscordArea();
    await syncGuildSyncFileWatcherWithAuthState();

    addSystemMessage('auth', message || 'Access denied.', {
      ttlMs: TRANSIENT_MESSAGE_TTL_MS
    });

    connectSocket();
  });

  EventsOn('guildsync-login-failed', async (message) => {
    guildSyncSession = {
      logged_in: false,
      allowed: false,
      status_message: ''
    };

    renderDiscordArea();
    await syncGuildSyncFileWatcherWithAuthState();

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
