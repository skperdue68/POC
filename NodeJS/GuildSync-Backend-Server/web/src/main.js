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
} from './web-api.js';

import { EventsOn } from './web-events.js';

const GUILDSYNC_APP_VERSION = '1.0.3';
const GUILDSYNC_DESKTOP_CLIENT_DOWNLOADS = {
  windows: {
    label: 'Windows detected',
    shortLabel: 'Windows',
    fileName: 'GuildSync-windows-amd64.zip',
    href: '/downloads/GuildSync-windows-amd64.zip'
  },
  macos: {
    label: 'macOS detected',
    shortLabel: 'macOS',
    fileName: 'GuildSync-macos.zip',
    href: '/downloads/GuildSync-macos.zip'
  },
  linux: {
    label: 'Linux detected',
    shortLabel: 'Linux',
    fileName: 'GuildSync-linux-amd64.zip',
    href: '/downloads/GuildSync-linux-amd64.zip'
  }
};

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
let discordSelectedLinkStatuses = new Set();
let discordSortColumn = 'username';
let discordSortDirection = 'asc';
let discordSearchSelectionStart = null;
let discordSearchSelectionEnd = null;

let rosterMembers = [];
let rosterLastRefreshValue = null;
let rosterDataLoading = false;
let rosterAutoRefreshAttempted = false;
let rosterSearchText = '';
let rosterSearchSelectionStart = null;
let rosterSearchSelectionEnd = null;
let rosterSelectedRankNames = new Set();
let rosterSelectedLinkStatuses = new Set();
let rosterSortColumn = '';
let rosterSortDirection = '';
let rosterSearchActiveIndex = -1;
let rosterHistoryDialogOpen = false;
let rosterHistorySearchText = '';
let rosterHistoryMatches = [];
let rosterHistorySelectedAccount = '';
let rosterHistoryEvents = [];
let rosterHistoryLoading = false;
let rosterHistoryError = '';
let rosterHistorySearchTimer = null;
let rosterHistoryActiveMatchIndex = -1;
let discordHistoryDialogOpen = false;
let discordHistorySearchText = '';
let discordHistoryMatches = [];
let discordHistorySelectedID = '';
let discordHistorySelectedName = '';
let discordHistoryEvents = [];
let discordHistoryLoading = false;
let discordHistoryError = '';
let discordHistorySearchTimer = null;
let discordHistorySearchGeneration = 0;
const DISCORD_HISTORY_SEARCH_DEBOUNCE_MS = 650;
let discordHistoryActiveMatchIndex = -1;
let associateTicketReportDialogOpen = false;
let associateTicketReportRows = [];
let associateTicketReportLoading = false;
let associateTicketReportError = '';
let discordRankAuditReportDialogOpen = false;
let discordRankAuditReportRows = [];
let discordRankAuditReportLoading = false;
let discordRankAuditReportError = '';
let discordLastSeenReportDialogOpen = false;
let discordLastSeenReportRows = [];
let discordLastSeenReportLoading = false;
let discordLastSeenReportError = '';
let discordLastSeenReportSearchTerm = '';
let discordLastSeenReportSortColumn = '';
let discordLastSeenReportSortDirection = '';
let memberLinks = [];
let memberLinksLoading = false;
let memberLinksError = '';
let memberLinksReportDialogOpen = false;
let memberLinksReportSearchTerm = '';
let memberLinksReportSelectedRowIndex = -1;
let memberLinkDialogOpen = false;
let memberLinkDialogContext = null;
let memberLinkDialogOptions = [];
let memberLinkDialogLoading = false;
let memberLinkDialogError = '';
let memberLinkDialogSearchTerm = '';
let memberLinkDialogSelectedOptionIndex = -1;
let guildSyncConfirmDialogOpen = false;
let guildSyncConfirmDialog = null;
let guildSyncConfirmResolve = null;

const MEMBER_LINK_STATUS_FILTERS = [
  { id: 'linked', label: 'Linked' },
  { id: 'fuzzy', label: 'Fuzzy / Candidate' },
  { id: 'manual', label: 'Manual' },
  { id: 'unlinked', label: 'Unlinked' },
];

let bankingEntries = [];
let bankingActiveSection = 'biweekly';
let bankingLastRefreshValue = null;
let bankingDataLoading = false;
let bankingExportGridOpen = false;
let bankingExportSection = 'biweekly';
let manualBiweeklyTicketDialogOpen = false;
let manualBiweeklyTicketSubmitting = false;
let manualBiweeklyTicketError = '';
let manualBiweeklyTicketForm = { accountName: '', note: '', ticketType: 'biweekly', goldValue: '', tickets: '' };
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
  { id: 'settings', label: 'Reports & Admin', icon: 'gear' }
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
          <div class="compact-header-actions">
            ${renderDesktopClientDownloadButton()}
            <div id="discordArea" class="discord-area"></div>
          </div>
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
          <div class="status-connection-wrap" aria-live="polite">
            <span id="statusConnectionLabel" class="status-connection-label">Server Unavailable</span>
            <div id="statusDot" class="status-dot" title="Websocket not connected"></div>
          </div>
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
  wireMemberLinkDialog();
  wireAssociateTicketReportDialog();
  wireDiscordRankAuditReportDialog();
  wireDiscordLastSeenReportDialog();
  wireMemberLinksReportDialog();
  wireDiscordHistoryDialog();
  wireGuildSyncConfirmDialog();
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


function getDetectedDesktopClientDownload() {
  const userAgentDataPlatform = navigator.userAgentData?.platform || '';
  const platform = `${userAgentDataPlatform} ${navigator.platform || ''} ${navigator.userAgent || ''}`.toLowerCase();

  if (platform.includes('win')) {
    return GUILDSYNC_DESKTOP_CLIENT_DOWNLOADS.windows;
  }

  if (platform.includes('mac') || platform.includes('darwin')) {
    return GUILDSYNC_DESKTOP_CLIENT_DOWNLOADS.macos;
  }

  if (platform.includes('linux') || platform.includes('x11')) {
    return GUILDSYNC_DESKTOP_CLIENT_DOWNLOADS.linux;
  }

  return {
    ...GUILDSYNC_DESKTOP_CLIENT_DOWNLOADS.windows,
    label: 'Desktop client',
    shortLabel: 'Windows'
  };
}

function renderDesktopClientDownloadButton() {
  const download = getDetectedDesktopClientDownload();

  return `
    <a
      class="desktop-client-download-button"
      href="${escapeAttribute(download.href)}"
      download="${escapeAttribute(download.fileName)}"
      title="Download ${escapeAttribute(download.fileName)}"
      aria-label="Download GuildSync desktop client for ${escapeAttribute(download.shortLabel)}"
    >
      <span class="desktop-client-download-icon" aria-hidden="true">⬇</span>
      <span class="desktop-client-download-copy">
        <span class="desktop-client-download-title">Download Desktop Client</span>
        <span class="desktop-client-download-subtitle">${escapeHtml(download.label)} · ZIP</span>
      </span>
      <span class="desktop-client-download-caret" aria-hidden="true">▾</span>
    </a>
  `;
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
    ${memberLinkDialogOpen ? renderMemberLinkDialog() : ''}
    ${associateTicketReportDialogOpen ? renderAssociateTicketReportDialog() : ''}
    ${discordRankAuditReportDialogOpen ? renderDiscordRankAuditReportDialog() : ''}
    ${discordLastSeenReportDialogOpen ? renderDiscordLastSeenReportDialog() : ''}
    ${memberLinksReportDialogOpen ? renderMemberLinksReportDialog() : ''}
    ${guildSyncConfirmDialogOpen ? renderGuildSyncConfirmDialog() : ''}
  `;
}

function isBlockingModalOpen() {
  return guildSyncConfirmDialogOpen
    || rosterHistoryDialogOpen
    || discordHistoryDialogOpen
    || manualBiweeklyTicketDialogOpen
    || memberLinkDialogOpen
    || associateTicketReportDialogOpen
    || discordRankAuditReportDialogOpen
    || discordLastSeenReportDialogOpen
    || memberLinksReportDialogOpen
    || bankingExportGridOpen;
}

function closeTopOpenModal() {
  // Confirmation dialogs are intentionally modal-locking: Escape and overlay clicks do not close them.
  // The user must choose Cancel or the confirmation action.
  if (guildSyncConfirmDialogOpen) {
    return false;
  }
  if (memberLinksReportDialogOpen) {
    closeMemberLinksReportDialog();
    return true;
  }
  if (discordLastSeenReportDialogOpen) {
    closeDiscordLastSeenReportDialog();
    return true;
  }
  if (discordRankAuditReportDialogOpen) {
    closeDiscordRankAuditReportDialog();
    return true;
  }
  if (associateTicketReportDialogOpen) {
    closeAssociateTicketReportDialog();
    return true;
  }
  if (memberLinkDialogOpen) {
    closeMemberLinkDialog();
    return true;
  }
  if (manualBiweeklyTicketDialogOpen) {
    manualBiweeklyTicketDialogOpen = false;
    renderGuildSyncTabLayout();
    return true;
  }
  if (rosterHistoryDialogOpen) {
    rosterHistoryDialogOpen = false;
    renderGuildSyncTabLayout();
    return true;
  }
  if (discordHistoryDialogOpen) {
    discordHistoryDialogOpen = false;
    renderGuildSyncTabLayout();
    return true;
  }
  if (bankingExportGridOpen) {
    bankingExportGridOpen = false;
    renderGuildSyncTabLayout();
    return true;
  }
  return false;
}

function handleGlobalModalEscape(event) {
  if (event.key !== 'Escape') return;
  if (closeTopOpenModal()) {
    event.preventDefault();
    event.stopPropagation();
  }
}

if (!window.guildSyncGlobalModalEscapeAttached) {
  window.addEventListener('keydown', handleGlobalModalEscape, true);
  window.guildSyncGlobalModalEscapeAttached = true;
}


function openGuildSyncConfirmDialog(options = {}) {
  return new Promise((resolve) => {
    if (guildSyncConfirmResolve) {
      guildSyncConfirmResolve(false);
    }

    guildSyncConfirmDialogOpen = true;
    guildSyncConfirmDialog = {
      title: options.title || 'Confirm Action',
      message: options.message || 'Are you sure?',
      detail: options.detail || '',
      confirmLabel: options.confirmLabel || 'Confirm',
      cancelLabel: options.cancelLabel || 'Cancel',
      confirmClass: options.confirmClass || 'danger',
    };
    guildSyncConfirmResolve = resolve;
    renderGuildSyncTabLayout();
  });
}

function closeGuildSyncConfirmDialog(result = false) {
  const resolver = guildSyncConfirmResolve;
  guildSyncConfirmResolve = null;
  guildSyncConfirmDialogOpen = false;
  guildSyncConfirmDialog = null;

  if (resolver) {
    resolver(result === true);
  }

  renderGuildSyncTabLayout();
}

function renderGuildSyncConfirmDialog() {
  const dialog = guildSyncConfirmDialog || {};

  return `
    <div class="roster-history-overlay guildsync-confirm-overlay" role="dialog" aria-modal="true" aria-labelledby="guildSyncConfirmTitle">
      <div class="roster-history-dialog guildsync-confirm-dialog">
        <div class="roster-history-header guildsync-confirm-header">
          <div>
            <h3 id="guildSyncConfirmTitle">${escapeHtml(dialog.title || 'Confirm Action')}</h3>
            ${dialog.detail ? `<p>${escapeHtml(dialog.detail)}</p>` : ''}
          </div>
        </div>
        <div class="guildsync-confirm-body">
          ${escapeHtml(dialog.message || 'Are you sure?')}
        </div>
        <div class="guildsync-confirm-actions">
          <button id="cancelGuildSyncConfirmButton" class="guildsync-confirm-button guildsync-confirm-cancel" type="button">${escapeHtml(dialog.cancelLabel || 'Cancel')}</button>
          <button id="acceptGuildSyncConfirmButton" class="guildsync-confirm-button guildsync-confirm-accept ${escapeAttribute(dialog.confirmClass || 'danger')}" type="button">${escapeHtml(dialog.confirmLabel || 'Confirm')}</button>
        </div>
      </div>
    </div>
  `;
}

function handleGuildSyncConfirmButtonEvent(event) {
  const cancelButton = event.target.closest?.('#cancelGuildSyncConfirmButton');
  const acceptButton = event.target.closest?.('#acceptGuildSyncConfirmButton');

  if (!cancelButton && !acceptButton) return;

  event.preventDefault();
  event.stopPropagation();

  if (cancelButton) {
    closeGuildSyncConfirmDialog(false);
    return;
  }

  if (acceptButton) {
    closeGuildSyncConfirmDialog(true);
  }
}

if (!window.guildSyncConfirmDelegatedHandlersAttached) {
  document.addEventListener('click', handleGuildSyncConfirmButtonEvent, true);
  document.addEventListener('pointerup', handleGuildSyncConfirmButtonEvent, true);
  window.guildSyncConfirmDelegatedHandlersAttached = true;
}

function wireGuildSyncConfirmDialog() {
  if (!guildSyncConfirmDialogOpen) return;

  const cancelButton = document.querySelector('#cancelGuildSyncConfirmButton');
  const acceptButton = document.querySelector('#acceptGuildSyncConfirmButton');

  if (cancelButton) {
    cancelButton.onclick = (event) => {
      event.preventDefault();
      event.stopPropagation();
      closeGuildSyncConfirmDialog(false);
    };
  }

  if (acceptButton) {
    acceptButton.onclick = (event) => {
      event.preventDefault();
      event.stopPropagation();
      closeGuildSyncConfirmDialog(true);
    };
  }

  const overlay = document.querySelector('.guildsync-confirm-overlay');
  if (overlay) {
    overlay.onclick = (event) => {
      // Do not close this confirmation by clicking outside it.
      if (event.target === overlay) {
        event.preventDefault();
        event.stopPropagation();
      }
    };
  }
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
  wireMemberLinkDialog();
  wireAssociateTicketReportDialog();
  wireDiscordRankAuditReportDialog();
  wireDiscordLastSeenReportDialog();
  wireMemberLinksReportDialog();
  wireDiscordHistoryDialog();

  if (options.restoreDiscordSearchFocus) {
    restoreDiscordSearchFocus();
  }

  if (options.restoreRosterSearchFocus) {
    restoreRosterSearchFocus();
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

  if (
    (activeGuildSyncTab === 'discord-members' || activeGuildSyncTab === 'eso-members' || activeGuildSyncTab === 'settings') &&
    socket?.connected &&
    memberLinks.length === 0 &&
    !memberLinksLoading
  ) {
    refreshMemberLinks({ silent: true });
  }
}

function renderDiscordMemberDataPanel() {
  const filteredMembers = getFilteredDiscordMembers();
  const allRoleNames = getAllDiscordRoleNames();
  const selectedRoleNames = Array.from(discordSelectedRoleNames);
  const selectedLinkStatuses = Array.from(discordSelectedLinkStatuses);

  return `
    <div class="guildsync-tab-panel discord-member-panel" data-active-tab="discord-members">
      <div class="discord-data-header">
        <div>
          <h2 class="discord-data-title">Discord Member Data</h2>
          <p class="discord-data-subtitle">Manage and view Discord member information.</p>
        </div>
        <div class="discord-history-header-action" style="flex: 1; display: flex; justify-content: center; align-items: center;">
          <button id="openDiscordHistoryButton" class="refresh-discord-button" type="button">Lookup Member History</button>
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
            <label class="discord-filter-label inline-filter-label" for="discordRoleFilter">Roles</label>
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

        <div class="discord-filter-row discord-link-filter-row">
          <div class="discord-role-filter-wrap member-link-filter-wrap">
            <label class="discord-filter-label inline-filter-label" for="discordLinkStatusFilter">Link Status</label>
            <select id="discordLinkStatusFilter" class="discord-role-select">
              <option value="">Add link status...</option>
              ${MEMBER_LINK_STATUS_FILTERS
      .filter((item) => !discordSelectedLinkStatuses.has(item.id))
      .map((item) => `<option value="${escapeAttribute(item.id)}">${escapeHtml(item.label)}</option>`)
      .join('')}
            </select>
            <div class="discord-selected-roles">
              ${selectedLinkStatuses.length === 0
      ? '<span class="discord-no-role-filter">All link statuses</span>'
      : selectedLinkStatuses
        .map((status) => renderMemberLinkStatusFilterChip('discord', status))
        .join('')}
            </div>
          </div>

        </div>

        <div class="discord-member-table-shell">
          <table class="discord-member-table">
            <thead>
              <tr>
                ${renderDiscordSortableHeader('username', 'Username')}
                ${renderDiscordSortableHeader('global_name', 'Global Name')}
                ${renderDiscordSortableHeader('server_nickname', 'Server Nickname')}
                ${renderDiscordSortableHeader('roles', 'Roles')}
                <th class="member-link-action-header">Linked</th>
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
      ${discordHistoryDialogOpen ? renderDiscordHistoryDialog() : ''}
    </div>
  `;
}



function renderEsoRosterPanel() {
  const filteredMembers = getFilteredRosterMembers();
  const allRankNames = getAllRosterRankNames();
  const selectedRankNames = Array.from(rosterSelectedRankNames);
  const selectedLinkStatuses = Array.from(rosterSelectedLinkStatuses);

  return `
    <div class="guildsync-tab-panel eso-roster-panel" data-active-tab="eso-members">
      <div class="discord-data-header">
        <div>
          <h2 class="discord-data-title">Guild Roster</h2>
          <p class="discord-data-subtitle">Current ESO roster imported from GuildSyncRoster.</p>
        </div>
        <div class="discord-history-header-action" style="flex: 1; display: flex; justify-content: center; align-items: center;">
          <button id="openRosterHistoryButton" class="refresh-discord-button" type="button">Lookup Roster History</button>
        </div>
        <div class="discord-data-actions">
          <span class="discord-last-refresh">Last Refresh: ${escapeHtml(formatRosterRefreshDate(rosterLastRefreshValue))}</span>
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
            <label class="discord-filter-label inline-filter-label" for="rosterRankFilter">Rank</label>
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

        <div class="discord-filter-row discord-link-filter-row">
          <div class="discord-role-filter-wrap member-link-filter-wrap">
            <label class="discord-filter-label inline-filter-label" for="rosterLinkStatusFilter">Link Status</label>
            <select id="rosterLinkStatusFilter" class="discord-role-select">
              <option value="">Add link status...</option>
              ${MEMBER_LINK_STATUS_FILTERS
      .filter((item) => !rosterSelectedLinkStatuses.has(item.id))
      .map((item) => `<option value="${escapeAttribute(item.id)}">${escapeHtml(item.label)}</option>`)
      .join('')}
            </select>
            <div class="discord-selected-roles">
              ${selectedLinkStatuses.length === 0
      ? '<span class="discord-no-role-filter">All link statuses</span>'
      : selectedLinkStatuses
        .map((status) => renderMemberLinkStatusFilterChip('roster', status))
        .join('')}
            </div>
          </div>
        </div>

        <div class="discord-member-table-shell eso-roster-table-shell">
          <table class="discord-member-table eso-roster-table">
            <thead>
              <tr>
                ${renderRosterSortableHeader('account_name', 'Account Name')}
                ${renderRosterSortableHeader('rank', 'Rank')}
                ${renderRosterSortableHeader('joined', 'Joined')}
                ${renderRosterSortableHeader('linked', 'Discord Account Linked', 'member-link-action-header')}
              </tr>
            </thead>
            <tbody>
              ${filteredMembers.length > 0 ? filteredMembers.map((member, index) => renderEsoRosterRow(member, index)).join('') : renderEmptyEsoRosterRow()}
            </tbody>
          </table>
        </div>
      </div>
      ${rosterHistoryDialogOpen ? renderRosterHistoryDialog() : ''}
    </div>
  `;
}

function renderEsoRosterRow(member, index = -1) {
  const rowColor = getEsoRosterRankColor(member.rank || '');
  const rowStyle = rowColor ? ` style="color: ${rowColor};"` : '';

  const activeClass = index === rosterSearchActiveIndex ? ' roster-search-active-row' : '';

  return `
    <tr class="eso-roster-row${activeClass}"${rowStyle} data-roster-row-index="${escapeAttribute(String(index))}" data-eso-account-name="${escapeAttribute(member.account_name || '')}">
      <td>${escapeHtml(member.account_name || '')}</td>
      <td>${renderEsoRosterRank(member.rank || '')}</td>
      <td>${escapeHtml(formatRosterJoinedDate(member.joined))}</td>
      <td class="member-link-action-cell">${renderMemberLinkStatusButton({ mode: 'eso-to-discord', esoAccountName: member.account_name })}</td>
    </tr>
  `;
}

function renderEmptyEsoRosterRow() {
  const message = rosterDataLoading
    ? 'Loading Guild Roster data...'
    : 'No Guild Roster members found.';

  return `
    <tr>
      <td class="bank-empty-row" colspan="4">${escapeHtml(message)}</td>
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

  const filteredMembers = rosterMembers.filter((member) => {
    const rankName = String(member.rank || '').trim();

    if (rosterSelectedRankNames.size > 0 && !rosterSelectedRankNames.has(rankName)) {
      return false;
    }

    if (!memberLinkFilterSetMatches(rosterSelectedLinkStatuses, getRosterMemberLinkFilterStatus(member))) {
      return false;
    }

    if (!searchText) {
      return true;
    }

    const joinedDate = formatRosterJoinedDate(member.joined);
    const joinedDateTime = formatRosterHistoryTimestamp(member.joined);
    const linkStatus = getRosterMemberLinkFilterStatus(member);
    const linkSummary = getRosterMemberLinkTooltip(member.account_name || '');
    const haystack = [
      member.account_name,
      rankName,
      joinedDate,
      joinedDateTime,
      member.joined,
      linkStatus,
      linkSummary
    ].map((value) => String(value || '').toLowerCase()).join(' ');

    return haystack.includes(searchText);
  });

  return sortRosterMembers(filteredMembers);
}

function sortRosterMembers(members) {
  if (!rosterSortColumn || !rosterSortDirection) {
    return members;
  }

  const directionMultiplier = rosterSortDirection === 'desc' ? -1 : 1;

  return [...members].sort((a, b) => {
    const valueA = getRosterSortValue(a, rosterSortColumn);
    const valueB = getRosterSortValue(b, rosterSortColumn);
    const comparison = valueA.localeCompare(valueB, undefined, {
      sensitivity: 'base',
      numeric: true
    });

    if (comparison !== 0) {
      return comparison * directionMultiplier;
    }

    return String(a.account_name || '').localeCompare(String(b.account_name || ''), undefined, {
      sensitivity: 'base',
      numeric: true
    });
  });
}

function getRosterSortValue(member, column) {
  if (column === 'rank') {
    return String(member.rank || '');
  }

  if (column === 'joined') {
    const timestamp = Number(member.joined || 0);
    return Number.isFinite(timestamp) && timestamp > 0
      ? String(timestamp).padStart(16, '0')
      : '';
  }

  if (column === 'linked') {
    const status = getRosterMemberLinkFilterStatus(member);
    const statusOrder = {
      linked: '1',
      manual: '1',
      fuzzy: '2',
      unlinked: '3',
      blocked: '4'
    };

    return `${statusOrder[status] || '9'} ${status} ${getRosterMemberLinkTooltip(member.account_name || '')}`;
  }

  return String(member.account_name || '');
}

function setRosterSort(column) {
  const allowedColumns = new Set(['account_name', 'rank', 'joined', 'linked']);
  const nextColumn = allowedColumns.has(column) ? column : 'account_name';

  if (rosterSortColumn !== nextColumn) {
    rosterSortColumn = nextColumn;
    rosterSortDirection = 'asc';
  } else if (rosterSortDirection === 'asc') {
    rosterSortDirection = 'desc';
  } else if (rosterSortDirection === 'desc') {
    rosterSortColumn = '';
    rosterSortDirection = '';
  } else {
    rosterSortColumn = nextColumn;
    rosterSortDirection = 'asc';
  }

  rosterSearchActiveIndex = -1;
  renderGuildSyncTabLayout();
}

function renderRosterSortableHeader(column, label, extraClass = '') {
  const isActive = rosterSortColumn === column && Boolean(rosterSortDirection);
  const directionText = isActive
    ? rosterSortDirection === 'asc'
      ? 'ascending'
      : 'descending'
    : 'none';
  const arrow = isActive
    ? rosterSortDirection === 'asc'
      ? '▲'
      : '▼'
    : '↕';

  return `
    <th class="${escapeAttribute(extraClass)}" aria-sort="${escapeAttribute(directionText)}">
      <button
        class="discord-sort-header roster-sort-header${isActive ? ' active' : ''}"
        type="button"
        data-roster-sort-column="${escapeAttribute(column)}"
        title="Sort ${escapeAttribute(label)}${isActive && rosterSortDirection === 'asc' ? ' descending' : isActive && rosterSortDirection === 'desc' ? ' not sorted' : ' ascending'}"
      >
        <span>${escapeHtml(label)}</span>
        <span class="discord-sort-arrow" aria-hidden="true">${arrow}</span>
      </button>
    </th>
  `;
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

function getMemberLinkStatusFilterLabel(status) {
  const found = MEMBER_LINK_STATUS_FILTERS.find((item) => item.id === status);
  return found ? found.label : status;
}

function renderMemberLinkStatusFilterChip(scope, status) {
  const cleanScope = scope === 'roster' ? 'roster' : 'discord';
  const label = getMemberLinkStatusFilterLabel(status);

  return `
    <button
      class="discord-role-filter-chip member-link-status-filter-chip"
      type="button"
      data-remove-${cleanScope}-link-status-filter="${escapeAttribute(status)}"
      title="Remove ${escapeAttribute(label)} link filter"
    >
      <span>${escapeHtml(label)}</span>
      <span aria-hidden="true">×</span>
    </button>
  `;
}

function getMemberLinkRelationshipFilterStatus(linksOrLink) {
  const links = Array.isArray(linksOrLink)
    ? linksOrLink.filter(Boolean)
    : linksOrLink
      ? [linksOrLink]
      : [];

  if (links.length === 0) {
    return 'unlinked';
  }

  if (links.some((link) => String(link.link_status || '').trim().toLowerCase() === 'linked' && String(link.link_method || '').trim().toLowerCase() === 'manual')) {
    return 'manual';
  }

  if (links.some((link) => String(link.link_status || '').trim().toLowerCase() === 'linked')) {
    return 'linked';
  }

  if (links.some((link) => String(link.link_status || '').trim().toLowerCase() === 'candidate')) {
    return 'fuzzy';
  }

  return 'unlinked';
}

function getDiscordMemberLinkFilterStatus(member) {
  return getMemberLinkRelationshipFilterStatus(getMemberLinksByDiscordUserId(member?.discord_id));
}

function getRosterMemberLinkFilterStatus(member) {
  return getMemberLinkRelationshipFilterStatus(getMemberLinksByEsoAccount(member?.account_name));
}

function getRosterMemberLinkTooltip(esoAccountName) {
  const links = getMemberLinksByEsoAccount(esoAccountName);
  const data = getMemberLinkButtonData({ mode: 'eso-to-discord', esoAccountName });
  const linkedNames = links
    .filter((link) => String(link.link_status || '').trim().toLowerCase() === 'linked')
    .map((link) => link.discord_server_nickname || link.discord_display_name || link.discord_username || link.discord_user_id || '')
    .filter(Boolean);
  const candidateNames = links
    .filter((link) => String(link.link_status || '').trim().toLowerCase() === 'candidate')
    .map((link) => link.discord_server_nickname || link.discord_display_name || link.discord_username || link.discord_user_id || '')
    .filter(Boolean);

  return [
    data.label,
    data.title,
    linkedNames.join(' '),
    candidateNames.join(' ')
  ].filter(Boolean).join(' ');
}

function memberLinkFilterSetMatches(filterSet, currentStatus) {
  if (!filterSet || filterSet.size === 0) return true;
  if (filterSet.has(currentStatus)) return true;
  return currentStatus === 'manual' && filterSet.has('linked');
}

function renderDiscordHistoryDialog() {
  return `
    <div class="roster-history-overlay" role="dialog" aria-modal="true" aria-labelledby="discordHistoryTitle">
      <div class="roster-history-dialog roster-rank-history-dialog discord-member-history-dialog">
        <div class="roster-history-header">
          <div>
            <h3 id="discordHistoryTitle">Discord Member Historical Data</h3>
            <p>Search Discord member changes, including joins, leaves, name changes, nickname changes, and role changes.</p>
          </div>
          <button id="closeDiscordHistoryButton" class="roster-history-close modal-close-button" type="button" aria-label="Close">×</button>
        </div>

        <div class="roster-history-search-row">
          <input id="discordHistorySearchInput" class="discord-search-input roster-history-search-input" type="search" placeholder="Start typing a Discord username, display name, nickname, or ID..." value="${escapeAttribute(discordHistorySearchText)}" />
        </div>

        ${discordHistoryError ? `<div class="discord-data-error">${escapeHtml(discordHistoryError)}</div>` : ''}

        <div class="roster-history-content">
          <div class="roster-history-matches">
            <div class="roster-history-section-title">Matches</div>
            ${renderDiscordHistoryMatches()}
          </div>
          <div class="roster-history-events">
            <div class="roster-history-section-title">Discord Member History${discordHistorySelectedName ? `: ${escapeHtml(discordHistorySelectedName)}` : ''}</div>
            ${renderDiscordHistoryEvents()}
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderDiscordHistoryMatches() {
  if (discordHistoryLoading && discordHistoryMatches.length === 0) {
    return '<div class="roster-history-muted">Searching...</div>';
  }

  if (discordHistoryMatches.length === 0) {
    return '<div class="roster-history-muted">No matches yet.</div>';
  }

  return `
    <div class="roster-history-match-list">
      ${discordHistoryMatches.map((match, index) => `
        <button class="roster-history-match${index === discordHistoryActiveMatchIndex || match.discord_id === discordHistorySelectedID ? ' is-selected' : ''}" type="button" data-discord-history-id="${escapeAttribute(match.discord_id)}" data-discord-history-name="${escapeAttribute(getDiscordHistoryDisplayName(match))}">
          <span>${escapeHtml(getDiscordHistoryDisplayName(match))}</span>
          <strong>${escapeHtml(String(match.event_count || 0))} event${Number(match.event_count || 0) === 1 ? '' : 's'}</strong>
          ${index === discordHistoryActiveMatchIndex ? '<small>Enter</small>' : ''}
        </button>
      `).join('')}
    </div>
  `;
}

function renderDiscordHistoryEvents() {
  if (!discordHistorySelectedID) {
    return '<div class="roster-history-muted">Choose a matching Discord member to see history.</div>';
  }

  if (discordHistoryLoading && discordHistoryEvents.length === 0) {
    return '<div class="roster-history-muted">Loading history...</div>';
  }

  if (discordHistoryEvents.length === 0) {
    return '<div class="roster-history-muted">No Discord member history found for this member.</div>';
  }

  return `
    <div class="roster-history-event-table-shell">
      <table class="discord-member-table roster-history-event-table roster-rank-history-event-table discord-member-history-event-table">
        <thead>
          <tr>
            <th class="roster-history-when-column">When</th>
            <th>Event</th>
            <th>Old</th>
            <th>New</th>
            <th>Source</th>
          </tr>
        </thead>
        <tbody>
          ${discordHistoryEvents.map((event) => `
            <tr>
              <td class="roster-history-when-cell">${escapeHtml(formatRosterHistoryTimestamp(event.event_timestamp || event.event_datetime || event.timestamp))}</td>
              <td>${escapeHtml(formatDiscordHistoryEventType(event.event_type))}</td>
              <td>${escapeHtml(event.old_value || '')}</td>
              <td>${escapeHtml(event.new_value || '')}</td>
              <td>${escapeHtml(event.source || '')}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
  `;
}

function getDiscordHistoryDisplayName(match = {}) {
  return String(match.server_nickname || match.global_name || match.username || match.discord_id || '').trim();
}

function formatDiscordHistoryEventType(value) {
  return String(value || '')
    .replaceAll('_', ' ')
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
}

function renderRosterHistoryDialog() {
  return `
    <div class="roster-history-overlay" role="dialog" aria-modal="true" aria-labelledby="rosterHistoryTitle">
      <div class="roster-history-dialog roster-rank-history-dialog">
        <div class="roster-history-header">
          <div>
            <h3 id="rosterHistoryTitle">Roster Rank Historical Data</h3>
            <p>Search prior rank records, including members no longer on the current roster.</p>
          </div>
          <button id="closeRosterHistoryButton" class="roster-history-close modal-close-button" type="button" aria-label="Close">×</button>
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
      <table class="discord-member-table roster-history-event-table roster-rank-history-event-table">
        <thead>
          <tr>
            <th class="roster-history-when-column">When</th>
            <th>Event</th>
            <th>Rank</th>
            <th>Officer</th>
          </tr>
        </thead>
        <tbody>
          ${rosterHistoryEvents.map((event) => `
            <tr>
              <td class="roster-history-when-cell">${escapeHtml(formatRosterHistoryTimestamp(event.timestamp))}</td>
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


function isGuildSyncWebRuntime() {
  return typeof window !== 'undefined' && window.GUILDSYNC_WEB === true;
}

function renderWebSavedVariablesUploadPanel() {
  if (!isGuildSyncWebRuntime()) {
    return '';
  }

  return `
    <article class="report-option-card web-upload-card">
      <div class="report-option-copy">
        <h3>Upload ESO SavedVariables</h3>
        <p>Web users can upload GuildSyncBanking.lua or GuildSyncRoster.lua directly. Files are parsed by the backend and processed only for authenticated GuildSync users.</p>
        <div class="web-upload-controls">
          <label class="web-upload-field">
            <span>GuildSyncBanking.lua</span>
            <input id="webBankingSavedVarsUpload" type="file" accept=".lua,text/plain" />
          </label>
          <label class="web-upload-field">
            <span>GuildSyncRoster.lua</span>
            <input id="webRosterSavedVarsUpload" type="file" accept=".lua,text/plain" />
          </label>
        </div>
      </div>
    </article>
  `;
}

function renderReportsPanel() {
  return `
    <div class="guildsync-tab-panel reports-panel" data-active-tab="settings">
      <div class="discord-data-header reports-header">
        <div>
          <h2 class="discord-data-title">Reports & Admin</h2>
          <p class="discord-data-subtitle">Run GuildSync reports and administrative review tools. More options can be added here later.</p>
        </div>
      </div>

      <div class="reports-scroll-area">
        ${renderWebSavedVariablesUploadPanel()}
        <section class="reports-list" aria-label="Available reports">
          <article class="report-option-card">
            <div class="report-option-copy">
              <h3>Associates Promotion Eligible</h3>
              <p>Shows Associates who have been in the guild at least two weeks, have purchased at least one raffle ticket, and are linked to Discord. Also shows otherwise eligible Associates who still need a Discord link reviewed.</p>
            </div>
            <button id="runAssociateTicketReportButton" class="refresh-discord-button report-run-button" type="button" ${associateTicketReportLoading ? 'disabled' : ''}>
              ${associateTicketReportLoading ? 'Running...' : 'Run'}
            </button>
          </article>

          <article class="report-option-card">
            <div class="report-option-copy">
              <h3>Discord Rank Audit</h3>
              <p>Find Discord members whose rank role is above or below their linked ESO roster rank. Members without any linked ESO account are included automatically.</p>
            </div>
            <button id="runDiscordRankAuditReportButton" class="refresh-discord-button report-run-button" type="button" ${discordRankAuditReportLoading ? 'disabled' : ''}>
              ${discordRankAuditReportLoading ? 'Running...' : 'Run'}
            </button>
          </article>

          <article class="report-option-card">
            <div class="report-option-copy">
              <h3>Discord Last Seen</h3>
              <p>Shows Discord roster members with avatar, preferred server display name, last server-specific activity time, days since last activity, and the activity that updated the timestamp.</p>
            </div>
            <button id="runDiscordLastSeenReportButton" class="refresh-discord-button report-run-button" type="button" ${discordLastSeenReportLoading ? 'disabled' : ''}>
              ${discordLastSeenReportLoading ? 'Loading...' : 'Run'}
            </button>
          </article>
        </section>

        <article class="report-option-card">
          <div class="report-option-copy">
            <h3>ESO / Discord Member Links</h3>
            <p>Review automatic ESO-to-Discord links, accept candidate matches, unlink blocked matches, or run the matcher again after roster or Discord refreshes.</p>
          </div>
          <button id="runMemberLinksReportButton" class="refresh-discord-button report-run-button" type="button" ${memberLinksLoading ? 'disabled' : ''}>
            ${memberLinksLoading ? 'Loading...' : 'Run'}
          </button>
        </article>
      </div>
    </div>
  `;
}

function wireReportsPanel() {
  if (activeGuildSyncTab !== 'settings') {
    return;
  }

  document.querySelector('#runAssociateTicketReportButton')?.addEventListener('click', () => openAssociatePromotionReportDialog());
  document.querySelector('#runDiscordRankAuditReportButton')?.addEventListener('click', () => openDiscordRankAuditReportDialog());
  document.querySelector('#runDiscordLastSeenReportButton')?.addEventListener('click', () => openDiscordLastSeenReportDialog());
  document.querySelector('#runMemberLinksReportButton')?.addEventListener('click', () => openMemberLinksReportDialog());
  document.querySelector('#webBankingSavedVarsUpload')?.addEventListener('change', (event) => handleWebSavedVariablesUpload(event, 'banking'));
  document.querySelector('#webRosterSavedVarsUpload')?.addEventListener('change', (event) => handleWebSavedVariablesUpload(event, 'roster'));
}

async function handleWebSavedVariablesUpload(event, type) {
  const input = event.currentTarget;
  const file = input?.files?.[0] || null;
  if (!file) {
    return;
  }

  try {
    const text = await file.text();
    const response = await fetch(`/api/guildsync/upload-savedvars/${encodeURIComponent(type)}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${guildSyncSession?.token || ''}`
      },
      body: JSON.stringify({
        file_name: file.name,
        raw_lua_text: text
      })
    });

    const result = await response.json().catch(() => ({}));
    if (!response.ok || result.ok === false) {
      throw new Error(result.error || result.message || `Upload failed with HTTP ${response.status}.`);
    }

    addSystemMessage(`web-upload-${type}-success`, result.message || `${file.name} uploaded and processed.`, {
      ttlMs: TRANSIENT_MESSAGE_TTL_MS
    });

    if (type === 'banking') {
      await requestBankingData();
    } else if (type === 'roster') {
      await requestRosterData();
      await refreshMemberLinksData({ silent: true });
    }
  } catch (error) {
    addSystemMessage(`web-upload-${type}-error`, formatError(error), {
      ttlMs: TRANSIENT_MESSAGE_TTL_MS
    });
  } finally {
    if (input) {
      input.value = '';
    }
  }
}

function openAssociatePromotionReportDialog() {
  associateTicketReportDialogOpen = true;
  associateTicketReportError = '';
  renderGuildSyncTabLayout();
  runAssociateTicketReport();
}

function closeAssociateTicketReportDialog() {
  associateTicketReportDialogOpen = false;
  associateTicketReportError = '';
  renderGuildSyncTabLayout();
}

function renderAssociateTicketReportDialog() {
  const eligibleRows = getAssociatePromotionEligibleRows();
  const missingLinkRows = getAssociatePromotionMissingLinkRows();
  const totalRows = associateTicketReportRows.length;

  return `
    <div class="roster-history-overlay report-results-overlay" role="dialog" aria-modal="true" aria-labelledby="associateTicketReportTitle">
      <div class="roster-history-dialog report-results-dialog associate-ticket-report-dialog">
        <div class="roster-history-header report-results-header">
          <div>
            <h3 id="associateTicketReportTitle">Associates Promotion Eligible</h3>
            <p>Associates who meet tenure and ticket requirements, separated by Discord link status.</p>
          </div>
          <button id="closeAssociateTicketReportButton" class="roster-history-close modal-close-button" type="button" aria-label="Close">×</button>
        </div>

        <div class="report-results-toolbar">
          <button id="copyAssociateTicketReportGridButton" class="bank-export-copy-button" type="button" ${totalRows === 0 ? 'disabled' : ''}>Copy Grid</button>
          <button id="rerunAssociateTicketReportButton" class="refresh-discord-button" type="button" ${associateTicketReportLoading ? 'disabled' : ''}>${associateTicketReportLoading ? 'Running...' : 'Run Again'}</button>
          <span class="roster-history-muted">${escapeHtml(String(totalRows))} total row${totalRows === 1 ? '' : 's'}</span>
        </div>

        ${associateTicketReportError ? `<div class="discord-data-error">${escapeHtml(associateTicketReportError)}</div>` : ''}

        <div class="report-results-content">
          ${associateTicketReportLoading && totalRows === 0 ? '<div class="roster-history-muted">Running report...</div>' : ''}
          ${!associateTicketReportLoading && totalRows === 0 ? '<div class="roster-history-muted">No matching Associates found.</div>' : ''}
          ${totalRows > 0 ? renderAssociatePromotionReportSection('Eligible', 'Linked to Discord and eligible for promotion review.', eligibleRows, 'No linked eligible Associates found.') : ''}
          ${totalRows > 0 ? renderAssociatePromotionReportSection('Eligible if Linked', 'These Associates meet the tenure and purchased-ticket requirements but need Discord linking reviewed.', missingLinkRows, 'No otherwise eligible Associates are missing Discord links.') : ''}
        </div>
        <textarea id="associateTicketReportTsv" class="bank-export-tsv" readonly>${escapeHtml(getAssociateTicketReportTsv())}</textarea>
      </div>
    </div>
  `;
}

function getAssociatePromotionEligibleRows() {
  return associateTicketReportRows.filter((row) => String(row.report_group || row.eligibility_group || '').toLowerCase() === 'eligible');
}

function getAssociatePromotionMissingLinkRows() {
  return associateTicketReportRows.filter((row) => String(row.report_group || row.eligibility_group || '').toLowerCase() !== 'eligible');
}

function renderAssociatePromotionReportSection(title, subtitle, rows, emptyText) {
  return `
    <section class="report-result-section">
      <div class="report-result-section-header">
        <div>
          <h4>${escapeHtml(title)}</h4>
          <p>${escapeHtml(subtitle)}</p>
        </div>
        <span>${escapeHtml(String(rows.length))} row${rows.length === 1 ? '' : 's'}</span>
      </div>
      ${rows.length > 0 ? renderAssociateTicketReportRows(rows) : `<div class="roster-history-muted report-section-empty">${escapeHtml(emptyText)}</div>`}
    </section>
  `;
}

function renderAssociateTicketReportRows(rows = associateTicketReportRows) {
  return `
    <div class="roster-history-event-table-shell report-result-table-shell">
      <table class="discord-member-table roster-history-event-table report-result-table">
        <thead>
          <tr>
            <th>Account Name</th>
            <th>Rank</th>
            <th>Joined</th>
            <th>Purchased Tickets</th>
            <th>Discord Link</th>
          </tr>
        </thead>
        <tbody>
          ${rows.map((row) => `
            <tr>
              <td>${escapeHtml(row.account_name || '')}</td>
              <td>${renderEsoRosterRank(row.rank || '')}</td>
              <td>${escapeHtml(formatRosterJoinedDate(row.joined))}</td>
              <td>${escapeHtml(formatTicketAmount(row.purchased_tickets || 0))}</td>
              <td>${escapeHtml(formatAssociateReportDiscordLink(row))}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
  `;
}

function formatAssociateReportDiscordLink(row) {
  const status = String(row.link_status || '').toLowerCase();
  if (status === 'linked') {
    return row.discord_server_nickname || row.discord_display_name || row.discord_username || row.discord_user_id || 'Linked';
  }
  return 'Needs Link Review';
}

function getAssociateTicketReportTsv() {
  const lines = [['Section', 'Account Name', 'Rank', 'Joined', 'Purchased Tickets', 'Discord Link']];
  for (const row of associateTicketReportRows) {
    const group = String(row.report_group || row.eligibility_group || '').toLowerCase() === 'eligible' ? 'Eligible' : 'Eligible if Linked';
    lines.push([
      group,
      row.account_name || '',
      row.rank || '',
      formatRosterJoinedDate(row.joined),
      formatTicketAmount(row.purchased_tickets || 0),
      formatAssociateReportDiscordLink(row)
    ]);
  }
  return lines.map((row) => row.map(formatTsvCell).join('\t')).join('\n');
}

async function copyAssociateTicketReportGrid() {
  const tsv = getAssociateTicketReportTsv();

  const copied = await copyTextToClipboard(tsv);
  if (copied) {
    addSystemMessage('associate-report-copied', 'Associates Promotion Eligible report copied to clipboard.', { ttlMs: TRANSIENT_MESSAGE_TTL_MS });
    return;
  }

  const textArea = document.querySelector('#associateTicketReportTsv');
  if (textArea) {
    textArea.focus();
    textArea.select();
  }
  addSystemMessage('associate-report-copy-failed', 'Could not copy automatically. The grid text is selected for manual copy.', { ttlMs: TRANSIENT_MESSAGE_TTL_MS });
}

function openDiscordRankAuditReportDialog() {
  discordRankAuditReportDialogOpen = true;
  discordRankAuditReportError = '';
  renderGuildSyncTabLayout();
  runDiscordRankAuditReport();
}

function closeDiscordRankAuditReportDialog() {
  discordRankAuditReportDialogOpen = false;
  discordRankAuditReportError = '';
  renderGuildSyncTabLayout();
}

function renderDiscordRankAuditReportDialog() {
  const totalRows = discordRankAuditReportRows.length;

  return `
    <div class="roster-history-overlay report-results-overlay" role="dialog" aria-modal="true" aria-labelledby="discordRankAuditReportTitle">
      <div class="roster-history-dialog report-results-dialog discord-rank-audit-report-dialog">
        <div class="roster-history-header report-results-header">
          <div>
            <h3 id="discordRankAuditReportTitle">Discord Rank Audit</h3>
            <p>Discord members with missing links or rank-role differences compared to linked ESO roster accounts.</p>
          </div>
          <button id="closeDiscordRankAuditReportButton" class="roster-history-close modal-close-button" type="button" aria-label="Close">×</button>
        </div>

        <div class="report-results-toolbar">
          <button id="copyDiscordRankAuditReportGridButton" class="bank-export-copy-button" type="button" ${totalRows === 0 ? 'disabled' : ''}>Copy Grid</button>
          <button id="rerunDiscordRankAuditReportButton" class="refresh-discord-button" type="button" ${discordRankAuditReportLoading ? 'disabled' : ''}>${discordRankAuditReportLoading ? 'Running...' : 'Run Again'}</button>
          <span class="roster-history-muted">${escapeHtml(String(totalRows))} total row${totalRows === 1 ? '' : 's'}</span>
        </div>

        ${discordRankAuditReportError ? `<div class="discord-data-error">${escapeHtml(discordRankAuditReportError)}</div>` : ''}

        <div class="report-results-content">
          ${discordRankAuditReportLoading && totalRows === 0 ? '<div class="roster-history-muted">Running report...</div>' : ''}
          ${!discordRankAuditReportLoading && totalRows === 0 ? '<div class="roster-history-muted">No Discord rank issues found.</div>' : ''}
          ${totalRows > 0 ? renderDiscordRankAuditReportRows(discordRankAuditReportRows) : ''}
        </div>
        <textarea id="discordRankAuditReportTsv" class="bank-export-tsv" readonly>${escapeHtml(getDiscordRankAuditReportTsv())}</textarea>
      </div>
    </div>
  `;
}

function renderDiscordRankAuditReportRows(rows = discordRankAuditReportRows) {
  return `
    <div class="roster-history-event-table-shell report-result-table-shell discord-rank-audit-table-shell">
      <table class="discord-member-table roster-history-event-table report-result-table discord-rank-audit-table">
        <thead>
          <tr>
            <th>Discord Member</th>
            <th>Discord Rank Role</th>
            <th>Linked ESO Account(s)</th>
            <th>ESO Rank</th>
            <th>Issue</th>
          </tr>
        </thead>
        <tbody>
          ${rows.map((row) => `
            <tr>
              <td>${escapeHtml(formatDiscordRankAuditMember(row))}</td>
              <td>${escapeHtml(row.discord_rank || 'No matching rank role')}</td>
              <td>${escapeHtml(row.eso_accounts || 'No linked ESO account')}</td>
              <td>${escapeHtml(row.eso_rank || 'None')}</td>
              <td>${escapeHtml(formatDiscordRankAuditIssue(row))}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
  `;
}

function formatDiscordRankAuditMember(row) {
  return row.server_nickname || row.global_name || row.username || row.discord_id || '';
}

function formatDiscordRankAuditIssue(row) {
  const issueType = String(row.issue_type || '').toLowerCase();

  if (issueType === 'no_linked_eso_account') {
    return 'No linked ESO account';
  }

  if (issueType === 'linked_eso_not_on_roster') {
    return 'Linked ESO account is not currently on the roster';
  }

  if (issueType === 'discord_role_above_roster_rank') {
    return 'Discord rank role is above linked ESO roster rank';
  }

  if (issueType === 'discord_role_below_roster_rank') {
    return 'Discord rank role is below linked ESO roster rank';
  }

  return issueType || 'Review needed';
}

function getDiscordRankAuditReportTsv() {
  const lines = [['Discord Member', 'Username', 'Discord Rank Role', 'Discord Rank Roles Found', 'Linked ESO Account(s)', 'ESO Rank', 'Issue']];
  for (const row of discordRankAuditReportRows) {
    lines.push([
      formatDiscordRankAuditMember(row),
      row.username || '',
      row.discord_rank || 'No matching rank role',
      row.discord_rank_roles || '',
      row.eso_accounts || 'No linked ESO account',
      row.eso_rank || 'None',
      formatDiscordRankAuditIssue(row)
    ]);
  }
  return lines.map((row) => row.map(formatTsvCell).join('\t')).join('\n');
}

async function copyDiscordRankAuditReportGrid() {
  const tsv = getDiscordRankAuditReportTsv();

  const copied = await copyTextToClipboard(tsv);
  if (copied) {
    addSystemMessage('discord-rank-audit-report-copied', 'Discord Rank Audit report copied to clipboard.', { ttlMs: TRANSIENT_MESSAGE_TTL_MS });
    return;
  }

  const textArea = document.querySelector('#discordRankAuditReportTsv');
  if (textArea) {
    textArea.focus();
    textArea.select();
  }
  addSystemMessage('discord-rank-audit-report-copy-failed', 'Could not copy automatically. The grid text is selected for manual copy.', { ttlMs: TRANSIENT_MESSAGE_TTL_MS });
}


function openDiscordLastSeenReportDialog() {
  discordLastSeenReportDialogOpen = true;
  discordLastSeenReportError = '';
  discordLastSeenReportSearchTerm = '';
  renderGuildSyncTabLayout();
  runDiscordLastSeenReport();
  if (memberLinks.length === 0 && !memberLinksLoading) {
    refreshMemberLinks({ silent: true });
  }
}

function closeDiscordLastSeenReportDialog() {
  discordLastSeenReportDialogOpen = false;
  discordLastSeenReportError = '';
  discordLastSeenReportSearchTerm = '';
  discordLastSeenReportSortColumn = '';
  discordLastSeenReportSortDirection = '';
  renderGuildSyncTabLayout();
}

function renderDiscordLastSeenReportDialog() {
  const rows = getSortedDiscordLastSeenReportRows();
  const totalRows = discordLastSeenReportRows.length;

  return `
    <div class="roster-history-overlay report-results-overlay discord-last-seen-report-overlay" role="dialog" aria-modal="true" aria-labelledby="discordLastSeenReportTitle">
      <div class="roster-history-dialog report-results-dialog discord-last-seen-report-dialog">
        <div class="roster-history-header report-results-header">
          <div>
            <h3 id="discordLastSeenReportTitle">Discord Last Seen</h3>
            <p>Last server-specific activity tracked by GuildSync. Times are shown in your local time zone.</p>
          </div>
          <button id="closeDiscordLastSeenReportButton" class="roster-history-close modal-close-button" type="button" aria-label="Close">×</button>
        </div>

        <div class="report-results-toolbar">
          <button id="copyDiscordLastSeenReportGridButton" class="bank-export-copy-button" type="button" ${totalRows === 0 ? 'disabled' : ''}>Copy Grid</button>
          <button id="rerunDiscordLastSeenReportButton" class="refresh-discord-button" type="button" ${discordLastSeenReportLoading ? 'disabled' : ''}>${discordLastSeenReportLoading ? 'Loading...' : 'Run Again'}</button>
          <span class="roster-history-muted">${escapeHtml(String(totalRows))} Discord member${totalRows === 1 ? '' : 's'}</span>
        </div>

        <input
          id="discordLastSeenReportSearchInput"
          class="member-links-report-search-input discord-last-seen-search-input"
          type="search"
          autocomplete="off"
          spellcheck="false"
          placeholder="Search Discord member, username, last seen action, or date..."
          value="${escapeAttribute(discordLastSeenReportSearchTerm)}"
        />

        ${discordLastSeenReportError ? `<div class="discord-data-error discord-last-seen-report-error">${escapeHtml(discordLastSeenReportError)}</div>` : ''}

        <div class="report-results-content discord-last-seen-report-content">
          ${discordLastSeenReportLoading && totalRows === 0 ? '<div class="roster-history-muted">Loading Discord roster last seen data...</div>' : ''}
          ${!discordLastSeenReportLoading && totalRows === 0 ? '<div class="roster-history-muted">No Discord members found.</div>' : ''}
          ${totalRows > 0 ? renderDiscordLastSeenReportRows(rows) : ''}
        </div>
        <textarea id="discordLastSeenReportTsv" class="bank-export-tsv" readonly>${escapeHtml(getDiscordLastSeenReportTsv(rows))}</textarea>
      </div>
    </div>
  `;
}

function renderDiscordLastSeenReportRows(rows = []) {
  return `
    <div class="roster-history-event-table-shell report-result-table-shell discord-last-seen-table-shell">
      <table class="discord-member-table roster-history-event-table report-result-table discord-last-seen-table">
        <thead>
          <tr>
            <th>${renderDiscordLastSeenSortButton('name', 'Discord Member')}</th>
            <th>${renderDiscordLastSeenSortButton('eso', 'ESO')}</th>
            <th>${renderDiscordLastSeenSortButton('date', 'Last Seen')}</th>
            <th>${renderDiscordLastSeenSortButton('days', 'Days Since')}</th>
            <th>${renderDiscordLastSeenSortButton('action', 'Action')}</th>
          </tr>
        </thead>
        <tbody>
          ${rows.map((row) => `
            <tr class="discord-last-seen-row ${escapeAttribute(getDiscordLastSeenAgeClass(row.last_seen))}" data-discord-last-seen-row data-discord-last-seen-search="${escapeAttribute(getDiscordLastSeenSearchText(row))}">
              <td>
                <div class="discord-member-cell discord-last-seen-member-cell">
                  ${renderDiscordLastSeenAvatar(row)}
                  <span>${escapeHtml(getDiscordLastSeenDisplayName(row))}</span>
                </div>
              </td>
              <td class="discord-last-seen-eso-cell">${renderDiscordLastSeenEsoLinkIndicator(row)}</td>
              <td>${escapeHtml(formatDiscordLastSeenDate(row.last_seen))}</td>
              <td>${escapeHtml(formatDiscordLastSeenAgeDays(row.last_seen))}</td>
              <td>${escapeHtml(formatDiscordLastSeenAction(row.last_seen_action))}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
      <div id="discordLastSeenReportSearchEmpty" class="roster-history-muted" hidden>No Discord members match your search.</div>
    </div>
  `;
}

function renderDiscordLastSeenSortButton(column, label) {
  const isActive = discordLastSeenReportSortColumn === column;
  const arrow = isActive ? (discordLastSeenReportSortDirection === 'asc' ? '▲' : '▼') : '↕';
  const title = isActive ? `${label}: ${discordLastSeenReportSortDirection === 'asc' ? 'ascending' : 'descending'}` : `${label}: unsorted`;

  return `
    <button class="discord-sort-header discord-last-seen-sort-header${isActive ? ' active' : ''}" type="button" data-discord-last-seen-sort="${escapeAttribute(column)}" title="${escapeAttribute(title)}">
      <span>${escapeHtml(label)}</span>
      <span class="discord-sort-arrow" aria-hidden="true">${escapeHtml(arrow)}</span>
    </button>
  `;
}

function getSortedDiscordLastSeenReportRows() {
  const rows = [...discordLastSeenReportRows];
  const column = discordLastSeenReportSortColumn;
  const direction = discordLastSeenReportSortDirection;

  if (!column || !direction) {
    return rows;
  }

  const multiplier = direction === 'desc' ? -1 : 1;
  return rows.sort((left, right) => {
    if (column === 'date') {
      const leftValue = Number(left.last_seen || 0) || 0;
      const rightValue = Number(right.last_seen || 0) || 0;
      return (leftValue - rightValue) * multiplier;
    }

    if (column === 'days') {
      return (getDiscordLastSeenSortAgeDays(left.last_seen) - getDiscordLastSeenSortAgeDays(right.last_seen)) * multiplier;
    }

    if (column === 'action') {
      return formatDiscordLastSeenAction(left.last_seen_action).localeCompare(formatDiscordLastSeenAction(right.last_seen_action), undefined, { sensitivity: 'base' }) * multiplier;
    }

    if (column === 'eso') {
      const leftLink = getDiscordLastSeenEsoLinkData(left);
      const rightLink = getDiscordLastSeenEsoLinkData(right);
      const statusOrder = { linked: 0, candidate: 1, unlinked: 2 };
      const statusDelta = ((statusOrder[leftLink.status] ?? 9) - (statusOrder[rightLink.status] ?? 9));
      if (statusDelta !== 0) return statusDelta * multiplier;
      return leftLink.esoAccountName.localeCompare(rightLink.esoAccountName, undefined, { sensitivity: 'base' }) * multiplier;
    }

    return getDiscordLastSeenDisplayName(left).localeCompare(getDiscordLastSeenDisplayName(right), undefined, { sensitivity: 'base' }) * multiplier;
  });
}

function cycleDiscordLastSeenReportSort(column) {
  if (discordLastSeenReportSortColumn !== column) {
    discordLastSeenReportSortColumn = column;
    discordLastSeenReportSortDirection = 'asc';
  } else if (discordLastSeenReportSortDirection === 'asc') {
    discordLastSeenReportSortDirection = 'desc';
  } else {
    discordLastSeenReportSortColumn = '';
    discordLastSeenReportSortDirection = '';
  }

  renderGuildSyncTabLayout();
}

function getDiscordLastSeenDisplayName(member) {
  return member?.server_nickname || member?.global_name || member?.username || member?.discord_id || '';
}

function getDiscordLastSeenSearchText(member) {
  return [
    getDiscordLastSeenDisplayName(member),
    member?.server_nickname,
    member?.global_name,
    member?.username,
    member?.discord_id,
    member?.last_seen_action,
    getDiscordLastSeenEsoLinkSearchText(member),
    formatDiscordLastSeenDate(member?.last_seen),
    formatDiscordLastSeenAgeDays(member?.last_seen),
  ].filter(Boolean).join(' ');
}


function getDiscordLastSeenEsoLinkData(member) {
  const link = getMemberLinkByDiscordUserId(member?.discord_id);
  const status = String(link?.link_status || '').trim().toLowerCase();
  const esoAccountName = String(link?.eso_account_name || '').trim();

  if (status === 'linked' && esoAccountName) {
    return {
      status: 'linked',
      className: 'linked',
      label: 'Linked ESO account',
      esoAccountName,
      title: `Linked ESO account: ${esoAccountName}`,
    };
  }

  if ((status === 'candidate' || String(link?.link_method || '').trim().toLowerCase() === 'fuzzy') && esoAccountName) {
    return {
      status: 'candidate',
      className: 'candidate',
      label: 'Fuzzy ESO account candidate',
      esoAccountName,
      title: `Fuzzy ESO account candidate: ${esoAccountName}`,
    };
  }

  return {
    status: 'unlinked',
    className: 'unlinked',
    label: 'No linked ESO account',
    esoAccountName: '',
    title: 'No linked ESO account',
  };
}

function renderDiscordLastSeenEsoLinkIndicator(member) {
  const data = getDiscordLastSeenEsoLinkData(member);
  return `
    <span
      class="member-link-status-dot discord-last-seen-eso-link-dot member-link-status-${escapeAttribute(data.className)}"
      title="${escapeAttribute(data.title)}"
      aria-label="${escapeAttribute(data.label)}"
      role="img"
    ></span>
  `;
}

function getDiscordLastSeenEsoLinkSearchText(member) {
  const data = getDiscordLastSeenEsoLinkData(member);
  return [data.status, data.label, data.esoAccountName].filter(Boolean).join(' ');
}

function getDiscordLastSeenAvatarUrl(member) {
  const avatar = String(member?.avatar || '').trim();
  const discordId = String(member?.discord_id || '').trim();
  if (!avatar || !discordId) return '';
  if (/^https?:\/\//i.test(avatar)) return avatar;
  const extension = avatar.startsWith('a_') ? 'gif' : 'png';
  return `https://cdn.discordapp.com/avatars/${encodeURIComponent(discordId)}/${encodeURIComponent(avatar)}.${extension}?size=64`;
}

function renderDiscordLastSeenAvatar(member) {
  const displayName = getDiscordLastSeenDisplayName(member);
  const initials = displayName ? displayName.slice(0, 2).toUpperCase() : '?';
  const url = getDiscordLastSeenAvatarUrl(member);
  if (!url) return `<span class="discord-member-avatar discord-last-seen-avatar-fallback">${escapeHtml(initials)}</span>`;
  return `<span class="discord-member-avatar"><img src="${escapeAttribute(url)}" alt="" loading="lazy" /></span>`;
}

function formatDiscordLastSeenDate(value) {
  const numeric = Number(value);
  if (!numeric) return 'Never';

  const date = new Date(numeric * 1000);
  if (Number.isNaN(date.getTime())) return String(value || '');

  const parts = new Intl.DateTimeFormat('en-US', {
    month: '2-digit',
    day: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  }).formatToParts(date).reduce((acc, part) => {
    acc[part.type] = part.value;
    return acc;
  }, {});

  return `${parts.month}/${parts.day}/${parts.year} ${parts.hour}:${parts.minute} ${parts.dayPeriod}`;
}

function getDiscordLastSeenAgeClass(value) {
  const numeric = Number(value);
  if (!numeric) return 'discord-last-seen-unknown';

  const ageDays = (Date.now() - numeric * 1000) / 86400000;
  if (ageDays > 30) return 'discord-last-seen-red';
  if (ageDays >= 15) return 'discord-last-seen-yellow';
  return 'discord-last-seen-green';
}

function formatDiscordLastSeenAgeDays(value) {
  const numeric = Number(value);
  if (!numeric) return 'Never';

  const ageMs = Date.now() - numeric * 1000;
  if (!Number.isFinite(ageMs)) return '';
  if (ageMs < 0) return '0 days';

  const ageDays = Math.floor(ageMs / 86400000);
  return `${ageDays} day${ageDays === 1 ? '' : 's'}`;
}

function getDiscordLastSeenSortAgeDays(value) {
  const numeric = Number(value);
  if (!numeric) return Number.POSITIVE_INFINITY;

  const ageMs = Date.now() - numeric * 1000;
  if (!Number.isFinite(ageMs)) return Number.POSITIVE_INFINITY;
  if (ageMs < 0) return 0;

  return Math.floor(ageMs / 86400000);
}

function formatDiscordLastSeenAction(value) {
  return String(value || '').trim() || 'None tracked';
}



function getDiscordLastSeenReportTsv(rows = getSortedDiscordLastSeenReportRows()) {
  const lines = [['Discord Member', 'ESO Link Status', 'ESO Account', 'Last Seen', 'Days Since', 'Action', 'Discord Username', 'Discord ID']];

  for (const row of rows) {
    const esoLink = getDiscordLastSeenEsoLinkData(row);
    lines.push([
      getDiscordLastSeenDisplayName(row),
      esoLink.label || '',
      esoLink.esoAccountName || '',
      formatDiscordLastSeenDate(row?.last_seen),
      formatDiscordLastSeenAgeDays(row?.last_seen),
      formatDiscordLastSeenAction(row?.last_seen_action),
      row?.username || '',
      row?.discord_id || '',
    ]);
  }

  return lines.map((row) => row.map(formatTsvCell).join('\t')).join('\n');
}

async function copyDiscordLastSeenReportGrid() {
  const rows = getSortedDiscordLastSeenReportRows().filter((row) => {
    const searchValue = normalizeSimpleMemberName(discordLastSeenReportSearchTerm);
    if (!searchValue) return true;
    return normalizeSimpleMemberName(getDiscordLastSeenSearchText(row)).includes(searchValue);
  });
  const tsv = getDiscordLastSeenReportTsv(rows);

  const copied = await copyTextToClipboard(tsv);
  if (copied) {
    addSystemMessage('discord-last-seen-report-copied', 'Discord Last Seen report copied to clipboard.', { ttlMs: TRANSIENT_MESSAGE_TTL_MS });
    return;
  }

  const textArea = document.querySelector('#discordLastSeenReportTsv');
  if (textArea) {
    textArea.focus();
    textArea.select();
  }
  addSystemMessage('discord-last-seen-report-copy-failed', 'Could not copy automatically. The grid text is selected for manual copy.', { ttlMs: TRANSIENT_MESSAGE_TTL_MS });
}

function openMemberLinksReportDialog() {
  memberLinksReportDialogOpen = true;
  memberLinksError = '';
  renderGuildSyncTabLayout();

  if (memberLinks.length === 0 && !memberLinksLoading) {
    refreshMemberLinks({ silent: true });
  }
}

function closeMemberLinksReportDialog() {
  memberLinksReportDialogOpen = false;
  memberLinksReportSearchTerm = '';
  memberLinksReportSelectedRowIndex = -1;
  renderGuildSyncTabLayout();
}

function renderMemberLinksReportDialog() {
  return `
    <div class="roster-history-overlay member-links-report-overlay" role="dialog" aria-modal="true" aria-labelledby="memberLinksReportTitle">
      <div class="roster-history-dialog report-results-dialog member-links-report-dialog">
        <div class="roster-history-header report-results-header">
          <div>
            <h3 id="memberLinksReportTitle">ESO / Discord Member Links</h3>
            <p>Review automatic links, accept fuzzy candidates, unblock/relink members, or run the matcher again.</p>
          </div>
          <button id="closeMemberLinksReportButton" class="roster-history-close modal-close-button" type="button" aria-label="Close">×</button>
        </div>

        <div class="report-results-toolbar">
          <button id="refreshMemberLinksButton" class="clear-discord-filters-button" type="button" ${memberLinksLoading ? 'disabled' : ''}>Refresh Links</button>
          <button id="runMemberAutoLinkButton" class="refresh-discord-button" type="button" ${memberLinksLoading ? 'disabled' : ''}>${memberLinksLoading ? 'Running...' : 'Run Auto-Linking'}</button>
          <span class="roster-history-muted">${escapeHtml(String(memberLinks.length))} link/candidate row${memberLinks.length === 1 ? '' : 's'}</span>
        </div>

        <input
          id="memberLinksReportSearchInput"
          class="member-links-report-search-input"
          type="search"
          autocomplete="off"
          spellcheck="false"
          placeholder="Search ESO or Discord member links..."
          value="${escapeAttribute(memberLinksReportSearchTerm)}"
        />

        ${memberLinksError ? `<div class="discord-data-error member-links-report-error">${escapeHtml(memberLinksError)}</div>` : ''}

        <div class="report-results-content member-links-report-content">
          ${renderMemberLinksRows()}
        </div>
      </div>
    </div>
  `;
}

function wireMemberLinksReportDialog() {
  if (!memberLinksReportDialogOpen) {
    return;
  }

  document.querySelector('#closeMemberLinksReportButton')?.addEventListener('click', closeMemberLinksReportDialog);
  document.querySelector('#refreshMemberLinksButton')?.addEventListener('click', () => refreshMemberLinks());
  document.querySelector('#runMemberAutoLinkButton')?.addEventListener('click', () => runMemberAutoLinking());

  const memberLinksSearchInput = document.querySelector('#memberLinksReportSearchInput');
  if (memberLinksSearchInput) {
    memberLinksSearchInput.addEventListener('input', handleMemberLinksReportSearchInput);
    memberLinksSearchInput.addEventListener('keydown', handleMemberLinksReportSearchKeydown);
    applyMemberLinksReportSearchFilter();
  }
  document.querySelectorAll('[data-accept-member-candidate]').forEach((button) => {
    button.addEventListener('click', () => acceptMemberLinkCandidate(button.dataset.acceptMemberCandidate || '', button.dataset.acceptMemberCandidateDiscordId || ''));
  });
  document.querySelectorAll('[data-unlink-member-link]').forEach((button) => {
    button.addEventListener('click', () => unlinkMemberLink(button.dataset.unlinkMemberLink || '', button.dataset.unlinkMemberLinkDiscordId || ''));
  });

  const overlay = document.querySelector('.member-links-report-overlay');
  if (overlay) {
    overlay.addEventListener('click', (event) => {
      if (event.target === overlay) {
        closeMemberLinksReportDialog();
      }
    });
  }
}

function getMemberLinksReportGroupOrder(link) {
  const status = String(link?.link_status || '').trim().toLowerCase();
  const method = String(link?.link_method || '').trim().toLowerCase();

  if (status === 'candidate' || method === 'fuzzy') return 0;
  if (status === 'linked') return 2;
  return 1;
}

function getMemberLinksReportSortName(link) {
  return [
    link?.eso_account_name,
    link?.discord_server_nickname,
    link?.discord_display_name,
    link?.discord_username,
    link?.discord_user_id,
  ].filter(Boolean).join(' ');
}

function getMemberLinksReportSearchText(link) {
  return [
    link?.eso_account_name,
    link?.discord_username,
    link?.discord_display_name,
    link?.discord_server_nickname,
    link?.discord_user_id,
    link?.link_status,
    link?.link_method,
    link?.match_reason,
    link?.match_field,
    getMemberLinkMatchedField(link),
  ].filter(Boolean).join(' ');
}

function getSortedMemberLinksForReport(links) {
  return [...(Array.isArray(links) ? links : [])].sort((left, right) => {
    const groupDelta = getMemberLinksReportGroupOrder(left) - getMemberLinksReportGroupOrder(right);
    if (groupDelta !== 0) return groupDelta;

    const nameDelta = getMemberLinksReportSortName(left).localeCompare(
      getMemberLinksReportSortName(right),
      undefined,
      { sensitivity: 'base' }
    );
    if (nameDelta !== 0) return nameDelta;

    return String(left?.discord_user_id || '').localeCompare(String(right?.discord_user_id || ''), undefined, { sensitivity: 'base' });
  });
}

function getMemberLinkReportDiscordDisplay(link) {
  const matchedField = getMemberLinkMatchedField(link);
  let value = '';

  if (matchedField === 'Username') {
    value = link?.discord_username || '';
  } else if (matchedField === 'Global Name') {
    value = link?.discord_display_name || '';
  } else if (matchedField === 'Server Nickname') {
    value = link?.discord_server_nickname || '';
  }

  if (!value) {
    value = link?.discord_server_nickname || link?.discord_display_name || link?.discord_username || link?.discord_user_id || '';
  }

  const fieldText = matchedField ? ` <span class="member-link-report-match-field">(${escapeHtml(matchedField)})</span>` : '';
  return `<span class="member-link-report-discord-name">${escapeHtml(value)}</span>${fieldText}`;
}

function renderMemberLinksRows() {
  if (memberLinksLoading && memberLinks.length === 0) {
    return '<div class="roster-history-muted">Loading member links...</div>';
  }

  if (!Array.isArray(memberLinks) || memberLinks.length === 0) {
    return '<div class="roster-history-muted">No links or candidates yet. Run auto-linking after roster and Discord data are loaded.</div>';
  }

  const sortedLinks = getSortedMemberLinksForReport(memberLinks);

  return `
    <div class="roster-history-event-table-shell member-links-table-shell">
      <table class="discord-member-table roster-history-event-table member-links-table">
        <thead>
          <tr>
            <th>ESO Account</th>
            <th>Discord Member</th>
            <th class="member-links-status-col">Status</th>
            <th class="member-links-method-col">Method</th>
            <th class="member-links-action-col">Action</th>
            <th class="member-links-confidence-col">Confidence %</th>
          </tr>
        </thead>
        <tbody>
          ${sortedLinks.map((link) => {
            const status = String(link.link_status || '').trim().toLowerCase();
            const method = String(link.link_method || '').trim().toLowerCase();
            const discordMatchLabel = getMemberLinkReportDiscordDisplay(link);
            return `
              <tr data-member-links-report-row data-member-links-report-search="${escapeAttribute(getMemberLinksReportSearchText(link))}">
                <td>${escapeHtml(link.eso_account_name || '')}</td>
                <td>${discordMatchLabel}</td>
                <td class="member-links-status-col">${escapeHtml(status || '')}</td>
                <td class="member-links-method-col">${escapeHtml(method || '')}${Number(link.locked || 0) === 1 ? ' 🔒' : ''}</td>
                <td class="member-links-action-col">
                  <div class="member-link-actions">
                    ${status === 'candidate' ? `<button class="member-link-report-action member-link-report-accept" type="button" data-accept-member-candidate="${escapeAttribute(link.eso_account_name || '')}" data-accept-member-candidate-discord-id="${escapeAttribute(link.discord_user_id || '')}" aria-label="Accept candidate link" title="Accept candidate link">✓</button>` : ''}
                    ${status === 'linked' ? `<button class="member-link-report-action member-link-report-trash" type="button" data-unlink-member-link="${escapeAttribute(link.eso_account_name || '')}" data-unlink-member-link-discord-id="${escapeAttribute(link.discord_user_id || '')}" aria-label="Unlink this ESO/Discord pair" title="Unlink this ESO/Discord pair">🗑</button>` : ''}
                  </div>
                </td>
                <td class="member-links-confidence-col">${escapeHtml(String(link.match_confidence ?? ''))}</td>
              </tr>
            `;
          }).join('')}
        </tbody>
      </table>
      <div id="memberLinksReportSearchEmpty" class="roster-history-muted" hidden>No member links match your search.</div>
    </div>
  `;
}

function getVisibleMemberLinksReportRows() {
  return [...document.querySelectorAll('[data-member-links-report-row]')]
    .filter((row) => row.offsetParent !== null);
}

function setActiveMemberLinksReportRowIndex(index) {
  const rows = getVisibleMemberLinksReportRows();
  rows.forEach((row) => row.classList.remove('member-links-report-row-active'));

  if (rows.length === 0) {
    memberLinksReportSelectedRowIndex = -1;
    return;
  }

  memberLinksReportSelectedRowIndex = Math.max(0, Math.min(index, rows.length - 1));
  const activeRow = rows[memberLinksReportSelectedRowIndex];
  activeRow.classList.add('member-links-report-row-active');
  activeRow.scrollIntoView({ block: 'nearest' });
}

function applyMemberLinksReportSearchFilter() {
  const searchValue = normalizeSimpleMemberName(memberLinksReportSearchTerm);
  const rows = [...document.querySelectorAll('[data-member-links-report-row]')];
  let visibleCount = 0;

  rows.forEach((row) => {
    const searchText = normalizeSimpleMemberName(row.dataset.memberLinksReportSearch || row.textContent || '');
    const visible = !searchValue || searchText.includes(searchValue);
    row.hidden = !visible;
    row.classList.remove('member-links-report-row-active');
    if (visible) visibleCount += 1;
  });

  const emptyMessage = document.querySelector('#memberLinksReportSearchEmpty');
  if (emptyMessage) {
    emptyMessage.hidden = visibleCount !== 0;
  }

  memberLinksReportSelectedRowIndex = -1;
}

function handleMemberLinksReportSearchInput(event) {
  memberLinksReportSearchTerm = event.target.value || '';
  applyMemberLinksReportSearchFilter();
}

function handleMemberLinksReportSearchKeydown(event) {
  if (event.key === 'Enter') {
    event.preventDefault();
    return;
  }

  if (event.key !== 'ArrowDown' && event.key !== 'ArrowUp') {
    return;
  }

  event.preventDefault();
  const rows = getVisibleMemberLinksReportRows();
  if (rows.length === 0) return;

  if (event.key === 'ArrowDown') {
    const nextIndex = memberLinksReportSelectedRowIndex < 0 ? 0 : memberLinksReportSelectedRowIndex + 1;
    setActiveMemberLinksReportRowIndex(nextIndex >= rows.length ? rows.length - 1 : nextIndex);
    return;
  }

  const previousIndex = memberLinksReportSelectedRowIndex < 0 ? rows.length - 1 : memberLinksReportSelectedRowIndex - 1;
  setActiveMemberLinksReportRowIndex(previousIndex < 0 ? 0 : previousIndex);
}

async function refreshMemberLinks(options = {}) {
  if (!socket?.connected) {
    memberLinksError = 'You must be connected to load member links.';
    renderGuildSyncTabLayout();
    return;
  }

  memberLinksLoading = true;
  memberLinksError = '';
  if (!options.silent) renderGuildSyncTabLayout();

  try {
    const response = await emitSocketWithAck('guildsync:request-member-links', {}, 30000);
    if (!response?.ok) throw new Error(response?.message || response?.error || 'Failed to load member links.');
    memberLinks = Array.isArray(response.links) ? response.links : [];
  } catch (error) {
    memberLinksError = formatError(error);
  } finally {
    memberLinksLoading = false;
    renderGuildSyncTabLayout();
  }
}

async function runMemberAutoLinking() {
  if (!socket?.connected || !guildSyncSession.logged_in) {
    memberLinksError = 'You must be logged in and connected to run auto-linking.';
    renderGuildSyncTabLayout();
    return;
  }

  memberLinksLoading = true;
  memberLinksError = '';
  renderGuildSyncTabLayout();

  try {
    const response = await emitSocketWithAck('guildsync:run-member-auto-linking', {}, 30000);
    if (!response?.ok) throw new Error(response?.message || response?.error || 'Failed to run auto-linking.');
    memberLinks = Array.isArray(response.links) ? response.links : [];
    addSystemMessage('member-auto-link', response.message || 'Member auto-linking complete.', { ttlMs: TRANSIENT_MESSAGE_TTL_MS });
  } catch (error) {
    memberLinksError = formatError(error);
  } finally {
    memberLinksLoading = false;
    renderGuildSyncTabLayout();
  }
}

async function acceptMemberLinkCandidate(esoAccountName, discordUserId = '') {
  try {
    const response = await emitSocketWithAck('guildsync:accept-member-link-candidate', { esoAccountName, discordUserId }, 30000);
    if (!response?.ok) throw new Error(response?.message || response?.error || 'Failed to accept candidate.');
    memberLinks = Array.isArray(response.links) ? response.links : memberLinks;
    addSystemMessage('member-link-accepted', response.message || 'Candidate accepted as a link.', { ttlMs: TRANSIENT_MESSAGE_TTL_MS });
  } catch (error) {
    memberLinksError = formatError(error);
    addSystemMessage('member-link-accept-error', memberLinksError, { ttlMs: TRANSIENT_MESSAGE_TTL_MS });
  }
}


async function unlinkMemberLink(esoAccountName, discordUserId = '') {
  const confirmed = await openGuildSyncConfirmDialog({
    title: 'Unlink Member?',
    message: `Remove the link between ${esoAccountName} and this Discord account? Exact automatic links will be blocked; fuzzy and manual links can be suggested again.`,
    confirmLabel: 'Unlink',
    cancelLabel: 'Cancel',
    confirmClass: 'danger',
  });
  if (!confirmed) return;

  try {
    const response = await emitSocketWithAck('guildsync:manual-unlink-member', { esoAccountName, discordUserId }, 30000);
    if (!response?.ok) throw new Error(response?.message || response?.error || 'Failed to unlink member.');
    memberLinks = Array.isArray(response.links) ? response.links : memberLinks;
    addSystemMessage('member-link-unlinked', response.message || 'Member link removed.', { ttlMs: TRANSIENT_MESSAGE_TTL_MS });
  } catch (error) {
    memberLinksError = formatError(error);
  }
  renderGuildSyncTabLayout();
}


async function unlinkDiscordMemberLink(discordUserId) {
  const confirmed = await openGuildSyncConfirmDialog({
    title: 'Unlink Discord Member?',
    message: 'Remove this Discord member link and disable future automatic relinking? You can still manually relink later.',
    confirmLabel: 'Unlink',
    cancelLabel: 'Cancel',
    confirmClass: 'danger',
  });
  if (!confirmed) return;

  try {
    const response = await emitSocketWithAck('guildsync:manual-unlink-member', { discordUserId }, 30000);
    if (!response?.ok) throw new Error(response?.message || response?.error || 'Failed to unlink member.');
    memberLinks = Array.isArray(response.links) ? response.links : memberLinks;
    addSystemMessage('member-link-unlinked', response.message || 'Member link removed. Auto-linking is disabled.', { ttlMs: TRANSIENT_MESSAGE_TTL_MS });
  } catch (error) {
    memberLinksError = formatError(error);
  }
  renderGuildSyncTabLayout();
}

async function manuallyLinkEsoToDiscord(esoAccountName) {
  const optionsResponse = await emitSocketWithAck('guildsync:request-member-link-options', {
    mode: 'eso-to-discord',
    accountName: esoAccountName
  }, 30000);

  if (!optionsResponse?.ok) throw new Error(optionsResponse?.message || 'Failed to load Discord link options.');
  const options = Array.isArray(optionsResponse.options) ? optionsResponse.options.slice(0, 10) : [];
  if (options.length === 0) throw new Error('No unlinked Discord members are available.');

  const listText = options.map((option, index) => {
    const name = option.server_nickname || option.global_name || option.username || option.discord_id;
    return `${index + 1}. ${name} (${option.confidence || 0}%)`;
  }).join('\n');
  const choice = Number(window.prompt(`Choose Discord member to link to ${esoAccountName}:\n\n${listText}`, '1'));
  const selected = options[choice - 1];
  if (!selected) return;

  const response = await emitSocketWithAck('guildsync:manual-link-member', {
    esoAccountName,
    discordUserId: selected.discord_id
  }, 30000);
  if (!response?.ok) throw new Error(response?.message || 'Failed to link member.');
  memberLinks = Array.isArray(response.links) ? response.links : memberLinks;
  addSystemMessage('member-manual-link', response.message || 'Member linked.', { ttlMs: TRANSIENT_MESSAGE_TTL_MS });
}

async function manuallyLinkDiscordToEso(discordUserId) {
  const optionsResponse = await emitSocketWithAck('guildsync:request-member-link-options', {
    mode: 'discord-to-eso',
    discordUserId
  }, 30000);

  if (!optionsResponse?.ok) throw new Error(optionsResponse?.message || 'Failed to load ESO link options.');
  const options = Array.isArray(optionsResponse.options) ? optionsResponse.options.slice(0, 10) : [];
  if (options.length === 0) throw new Error('No unlinked ESO roster members are available.');

  const listText = options.map((option, index) => `${index + 1}. ${option.account_name} (${option.confidence || 0}%)`).join('\n');
  const choice = Number(window.prompt(`Choose ESO account to link to this Discord member:\n\n${listText}`, '1'));
  const selected = options[choice - 1];
  if (!selected) return;

  const response = await emitSocketWithAck('guildsync:manual-link-member', {
    esoAccountName: selected.account_name,
    discordUserId
  }, 30000);
  if (!response?.ok) throw new Error(response?.message || 'Failed to link member.');
  memberLinks = Array.isArray(response.links) ? response.links : memberLinks;
  addSystemMessage('member-manual-link', response.message || 'Member linked.', { ttlMs: TRANSIENT_MESSAGE_TTL_MS });
}


function normalizeMemberLinkName(value) {
  return String(value || '').trim().replace(/^@+/, '').toLowerCase();
}

function getMemberLinksByEsoAccount(esoAccountName) {
  const cleanName = normalizeMemberLinkName(esoAccountName);
  if (!cleanName) return [];
  return memberLinks.filter((link) => normalizeMemberLinkName(link.eso_account_name) === cleanName);
}

function getMemberLinksByDiscordUserId(discordUserId) {
  const cleanId = String(discordUserId || '').trim();
  if (!cleanId) return [];
  return memberLinks.filter((link) => String(link.discord_user_id || '').trim() === cleanId);
}

function getPreferredMemberLink(links = []) {
  const normalized = Array.isArray(links) ? links.filter(Boolean) : [];
  if (normalized.length === 0) return null;

  const linked = normalized.filter((link) => String(link.link_status || '').trim().toLowerCase() === 'linked');
  if (linked.length > 0) {
    const manual = linked.find((link) => String(link.link_method || '').trim().toLowerCase() === 'manual');
    if (manual) return manual;
    const exact = linked.find((link) => String(link.link_method || '').trim().toLowerCase() === 'exact');
    if (exact) return exact;
    return linked[0];
  }

  const candidate = normalized.find((link) => String(link.link_status || '').trim().toLowerCase() === 'candidate');
  if (candidate) return candidate;

  return normalized[0];
}

function getMemberLinkByEsoAccount(esoAccountName) {
  return getPreferredMemberLink(getMemberLinksByEsoAccount(esoAccountName));
}

function getMemberLinkByDiscordUserId(discordUserId) {
  return getPreferredMemberLink(getMemberLinksByDiscordUserId(discordUserId));
}

function memberLinkPairKeyFromLink(link) {
  return `${normalizeMemberLinkName(link?.eso_account_name)}::${String(link?.discord_user_id || '').trim()}`;
}

function getMemberLinksForDialog() {
  if (!memberLinkDialogContext) return [];
  return memberLinkDialogContext.mode === 'discord-to-eso'
    ? getMemberLinksByDiscordUserId(memberLinkDialogContext.discordUserId)
    : getMemberLinksByEsoAccount(memberLinkDialogContext.esoAccountName);
}

function getDiscordMemberDisplayNameById(discordUserId) {
  const cleanId = String(discordUserId || '').trim();
  const member = discordMembers.find((item) => String(item.discord_id || '').trim() === cleanId);
  if (!member) return cleanId;
  return member.server_nickname || member.global_name || member.username || member.discord_id || cleanId;
}

function getMemberLinkButtonData(context) {
  const mode = context?.mode || '';
  const links = mode === 'discord-to-eso'
    ? getMemberLinksByDiscordUserId(context.discordUserId)
    : getMemberLinksByEsoAccount(context.esoAccountName);
  const link = getPreferredMemberLink(links);
  const status = String(link?.link_status || '').trim().toLowerCase();
  const linkedCount = links.filter((item) => String(item.link_status || '').trim().toLowerCase() === 'linked').length;
  const candidateCount = links.filter((item) => String(item.link_status || '').trim().toLowerCase() === 'candidate').length;

  if (linkedCount > 0) {
    const linkedName = mode === 'discord-to-eso'
      ? (linkedCount === 1 ? link.eso_account_name : `${linkedCount} ESO accounts`)
      : (linkedCount === 1 ? (link.discord_server_nickname || link.discord_display_name || link.discord_username || link.discord_user_id || 'Discord member') : `${linkedCount} Discord accounts`);
    return { color: 'green', label: 'Linked', className: 'linked', title: `Linked to ${linkedName}` };
  }

  if (status === 'candidate' || candidateCount > 0) {
    const candidateName = mode === 'discord-to-eso'
      ? link.eso_account_name
      : (link.discord_server_nickname || link.discord_display_name || link.discord_username || link.discord_user_id || 'Discord member');
    return { color: 'yellow', label: 'Candidate', className: 'candidate', title: `Candidate link: ${candidateName}` };
  }

  if (status === 'blocked' || Number(link?.locked || 0) === 1) {
    return { color: 'gray', label: 'Unlinked', className: 'blocked', title: 'Unlinked. One or more automatic pairings are blocked, but manual linking is available.' };
  }

  return { color: 'red', label: 'Not linked', className: 'unlinked', title: 'Not linked' };
}

function renderMemberLinkStatusButton(context) {
  const mode = context?.mode || '';
  const value = mode === 'discord-to-eso' ? context.discordUserId : context.esoAccountName;
  const data = getMemberLinkButtonData(context);

  return `
    <button
      class="member-link-status-dot member-link-status-${escapeAttribute(data.className)}"
      type="button"
      title="${escapeAttribute(data.title)}"
      aria-label="${escapeAttribute(data.label)}"
      data-open-member-link-dialog="${escapeAttribute(mode)}"
      data-member-link-value="${escapeAttribute(value || '')}"
    ></button>
  `;
}

function getMemberLinkDialogSourceLabel() {
  if (!memberLinkDialogContext) return '';

  if (memberLinkDialogContext.mode === 'discord-to-eso') {
    return getDiscordMemberDisplayNameById(memberLinkDialogContext.discordUserId);
  }

  return memberLinkDialogContext.esoAccountName || '';
}

function getCurrentMemberLinkForDialog() {
  if (!memberLinkDialogContext) return null;
  return memberLinkDialogContext.mode === 'discord-to-eso'
    ? getMemberLinkByDiscordUserId(memberLinkDialogContext.discordUserId)
    : getMemberLinkByEsoAccount(memberLinkDialogContext.esoAccountName);
}

function formatDiscordMatchFieldName(value) {
  const field = String(value || '').trim().toLowerCase();
  if (field === 'discord_username' || field === 'username') return 'Username';
  if (field === 'discord_display_name' || field === 'global_name' || field === 'display_name') return 'Global Name';
  if (field === 'discord_server_nickname' || field === 'server_nickname' || field === 'nickname') return 'Server Nickname';
  return '';
}

function formatDiscordMatchFieldShort(value) {
  return formatDiscordMatchFieldName(value);
}

function getMemberLinkMatchedField(link) {
  const direct = formatDiscordMatchFieldName(link?.match_field || link?.matched_field || link?.discord_match_field);
  if (direct) return direct;

  const reason = String(link?.match_reason || '').toLowerCase();
  if (reason.includes('discord_username') || reason.includes('username')) return 'Username';
  if (reason.includes('discord_display_name') || reason.includes('global') || reason.includes('display')) return 'Global Name';
  if (reason.includes('discord_server_nickname') || reason.includes('server') || reason.includes('nickname')) return 'Server Nickname';

  const method = String(link?.link_method || '').trim().toLowerCase();
  if (method === 'exact' || method === 'fuzzy') {
    const esoName = link?.eso_account_name || '';
    const candidates = [
      { field: 'Username', value: link?.discord_username },
      { field: 'Global Name', value: link?.discord_display_name },
      { field: 'Server Nickname', value: link?.discord_server_nickname }
    ];

    let best = null;
    for (const candidate of candidates) {
      const score = getSimpleMemberNameMatchScore(esoName, candidate.value);
      if (!best || score > best.score) {
        best = { ...candidate, score };
      }
    }

    if (best && best.score > 0) {
      return best.field;
    }
  }

  return '';
}

function normalizeSimpleMemberName(value) {
  return String(value || '')
    .toLowerCase()
    .replace(/^@+/, '')
    .replace(/\([^)]*\)/g, '')
    .replace(/\[[^\]]*\]/g, '')
    .replace(/[^a-z0-9]/g, '');
}

function getSimpleMemberNameMatchScore(left, right) {
  const a = normalizeSimpleMemberName(left);
  const b = normalizeSimpleMemberName(right);

  if (!a || !b) return 0;
  if (a === b) return 100;
  if ((a.includes(b) || b.includes(a)) && Math.min(a.length, b.length) >= 4) return 88;

  const lengthDelta = Math.abs(a.length - b.length);
  const prefixLength = [...a].findIndex((char, index) => char !== b[index]);
  const sharedPrefix = prefixLength === -1 ? Math.min(a.length, b.length) : prefixLength;
  return Math.max(0, Math.min(75, Math.round((sharedPrefix * 10) - (lengthDelta * 3))));
}

function getMemberLinkDialogIsLinked() {
  return getMemberLinksForDialog().some((link) => String(link?.link_status || '').trim().toLowerCase() === 'linked');
}


function formatMemberLinkStatusForDisplay(value) {
  const status = String(value || '').trim().toLowerCase();
  if (status === 'blocked' || status === 'unlinked') return 'unlinked';
  return status || 'unlinked';
}

function formatMemberLinkMethodForDisplay(value) {
  const method = String(value || '').trim().toLowerCase();
  if (method === 'manual_unlink') return 'auto-link disabled';
  return method || 'none';
}

function renderMemberLinkCurrentCard(link) {
  const discordName = link.discord_server_nickname || link.discord_display_name || link.discord_username || link.discord_user_id || '';
  const lockedText = Number(link.locked || 0) === 1 ? 'Auto-link blocked' : 'Auto-managed';
  const status = String(link.link_status || '').trim().toLowerCase();
  const isLinked = status === 'linked';
  const isCandidate = status === 'candidate';
  const headingLabel = isLinked ? 'Current Link' : isCandidate ? 'Suggested Link' : 'Blocked Link';
  const actionButton = isLinked
    ? `<button
        class="member-link-trash-button"
        type="button"
        aria-label="Unlink this ESO/Discord pair"
        title="Unlink this ESO/Discord pair"
        data-unlink-dialog-member-link
        data-unlink-eso-account="${escapeAttribute(link.eso_account_name || '')}"
        data-unlink-discord-user-id="${escapeAttribute(link.discord_user_id || '')}"
      >🗑</button>`
    : isCandidate
      ? `<button
          class="member-link-approve-button"
          type="button"
          aria-label="Approve suggested link"
          title="Approve suggested link"
          data-accept-dialog-member-candidate="${escapeAttribute(link.eso_account_name || '')}"
          data-accept-dialog-discord-user-id="${escapeAttribute(link.discord_user_id || '')}"
        >✓</button>`
      : '';

  return `
    <div class="member-link-current-card">
      <div class="member-link-current-details">
        <div class="member-link-current-kind">${escapeHtml(headingLabel)}</div>
        <div><span>ESO:</span> ${escapeHtml(link.eso_account_name || '')}</div>
        <div><span>Discord:</span> ${escapeHtml(discordName)}</div>
        <div><span>Status:</span> ${escapeHtml(formatMemberLinkStatusForDisplay(link.link_status))} · ${escapeHtml(formatMemberLinkMethodForDisplay(link.link_method))} · ${escapeHtml(String(link.match_confidence ?? ''))}% · ${escapeHtml(lockedText)}</div>
        ${getMemberLinkMatchedField(link) ? `<div><span>Matched:</span> Matched on ${escapeHtml(getMemberLinkMatchedField(link))}</div>` : ''}
      </div>
      ${actionButton}
    </div>
  `;
}

function renderMemberLinkDialogCurrentLink() {
  const links = getMemberLinksForDialog();
  if (!links.length) {
    return '<div class="member-link-current-empty">No current link.</div>';
  }

  const sortedLinks = [...links].sort((left, right) => {
    const leftStatus = String(left.link_status || '').trim().toLowerCase();
    const rightStatus = String(right.link_status || '').trim().toLowerCase();
    const statusOrder = { linked: 0, candidate: 1, blocked: 2, unlinked: 3 };
    const statusDelta = (statusOrder[leftStatus] ?? 9) - (statusOrder[rightStatus] ?? 9);
    if (statusDelta !== 0) return statusDelta;
    return Number(right.match_confidence || 0) - Number(left.match_confidence || 0);
  });

  return sortedLinks.map((link) => renderMemberLinkCurrentCard(link)).join('');
}

function renderMemberLinkDialogOptions() {
  if (memberLinkDialogLoading) {
    return '<div class="member-link-options-muted">Loading suggested matches...</div>';
  }

  if (memberLinkDialogError) {
    return `<div class="discord-data-error">${escapeHtml(memberLinkDialogError)}</div>`;
  }

  if (!Array.isArray(memberLinkDialogOptions) || memberLinkDialogOptions.length === 0) {
    return '<div class="member-link-options-muted">No additional suggested matches found.</div>';
  }

  const currentPairKeys = new Set(getMemberLinksForDialog().map((link) => memberLinkPairKeyFromLink(link)));
  const sortedOptions = [...memberLinkDialogOptions]
    .filter((option) => {
      const pairKey = memberLinkDialogContext?.mode === 'discord-to-eso'
        ? `${normalizeMemberLinkName(option.account_name)}::${String(memberLinkDialogContext.discordUserId || '').trim()}`
        : `${normalizeMemberLinkName(memberLinkDialogContext?.esoAccountName)}::${String(option.discord_id || '').trim()}`;
      return !currentPairKeys.has(pairKey);
    })
    .sort((left, right) => {
      const confidenceDelta = Number(right.confidence || 0) - Number(left.confidence || 0);
      if (confidenceDelta !== 0) return confidenceDelta;
      return getMemberLinkOptionSortName(left).localeCompare(getMemberLinkOptionSortName(right), undefined, { sensitivity: 'base' });
    });

  if (sortedOptions.length === 0) {
    return '<div class="member-link-options-muted">No additional suggested matches found.</div>';
  }

  return `
    <div class="member-link-option-list">
      ${sortedOptions.map((option) => renderMemberLinkDialogOption(option)).join('')}
    </div>
    <div id="memberLinkSuggestionSearchEmpty" class="member-link-options-muted" hidden>No suggested matches match your search.</div>
  `;
}

function getMemberLinkOptionSortName(option) {
  const mode = memberLinkDialogContext?.mode || '';
  if (mode === 'discord-to-eso') return String(option.account_name || '');
  return String(option.server_nickname || option.global_name || option.username || option.discord_id || '');
}

function renderMemberLinkDialogOption(option, options = {}) {
  const mode = memberLinkDialogContext?.mode || '';
  const label = mode === 'discord-to-eso'
    ? option.account_name
    : (option.server_nickname || option.global_name || option.username || option.discord_id || 'Discord member');
  const matchField = formatDiscordMatchFieldName(option.matchField || option.match_field || option.discordMatchField || option.discord_match_field);
  const baseSubLabel = mode === 'discord-to-eso'
    ? `Rank: ${option.rank || ''}`
    : [option.username, option.global_name, option.server_nickname].filter(Boolean).join(' · ');
  const subLabel = [baseSubLabel, matchField ? `Matched on ${matchField}` : ''].filter(Boolean).join(' • ');
  const value = mode === 'discord-to-eso' ? option.account_name : option.discord_id;
  const disabled = options.disabled === true;

  const searchText = [label, baseSubLabel, subLabel, option.account_name, option.username, option.global_name, option.server_nickname, option.discord_id]
    .filter(Boolean)
    .join(' ');

  const fullDisplayText = [label, subLabel, `${option.confidence ?? 0}%`]
    .filter(Boolean)
    .join(' • ');

  return `
    <button class="member-link-option-row" type="button" data-member-link-option-value="${escapeAttribute(value || '')}" data-member-link-option-search="${escapeAttribute(searchText)}" title="${escapeAttribute(fullDisplayText)}" ${disabled ? 'disabled' : ''}>
      <span class="member-link-option-name" title="${escapeAttribute(label || '')}">${escapeHtml(label || '')}</span>
      <span class="member-link-option-subtitle" title="${escapeAttribute(subLabel || '')}">${escapeHtml(subLabel || '')}</span>
      <span class="member-link-option-confidence" title="${escapeAttribute(String(option.confidence ?? 0))}%">${escapeHtml(String(option.confidence ?? 0))}%</span>
    </button>
  `;
}

function renderMemberLinkDialog() {
  const mode = memberLinkDialogContext?.mode || '';
  const sourceLabel = getMemberLinkDialogSourceLabel();
  const targetLabel = mode === 'discord-to-eso' ? 'ESO Account' : 'Discord Member';

  return `
    <div class="roster-history-overlay member-link-dialog-overlay" role="dialog" aria-modal="true" aria-labelledby="memberLinkDialogTitle">
      <div class="roster-history-dialog member-link-dialog">
        <div class="roster-history-header">
          <div>
            <h3 id="memberLinkDialogTitle">Member Link</h3>
            <p>${escapeHtml(sourceLabel)} → choose ${escapeHtml(targetLabel)}.</p>
          </div>
          <button id="closeMemberLinkDialogButton" class="roster-history-close modal-close-button" type="button" aria-label="Close member link window" title="Close">×</button>
        </div>

        <div class="member-link-dialog-body">
          <section class="member-link-dialog-section">
            <h4>Current Link</h4>
            ${renderMemberLinkDialogCurrentLink()}
          </section>

          <section class="member-link-dialog-section">
            <h4>Suggested Matches</h4>
            <input
              id="memberLinkSuggestionSearchInput"
              class="member-link-suggestion-search-input"
              type="search"
              autocomplete="off"
              spellcheck="false"
              placeholder="Search suggested matches..."
              value="${escapeAttribute(memberLinkDialogSearchTerm)}"
            />
            ${renderMemberLinkDialogOptions()}
          </section>
        </div>

      </div>
    </div>
  `;
}

async function openMemberLinkDialog(mode, value) {
  if (!socket?.connected || !isAuthenticatedSession()) {
    addSystemMessage('member-link-not-connected', 'You must be logged in and connected to manage member links.', { ttlMs: TRANSIENT_MESSAGE_TTL_MS });
    return;
  }

  memberLinkDialogOpen = true;
  memberLinkDialogContext = mode === 'discord-to-eso'
    ? { mode, discordUserId: value }
    : { mode: 'eso-to-discord', esoAccountName: value };
  memberLinkDialogOptions = [];
  memberLinkDialogLoading = true;
  memberLinkDialogError = '';
  memberLinkDialogSearchTerm = '';
  memberLinkDialogSelectedOptionIndex = -1;
  renderGuildSyncTabLayout();

  try {
    if (!Array.isArray(memberLinks) || memberLinks.length === 0) {
      const linksResponse = await emitSocketWithAck('guildsync:request-member-links', {}, 30000);
      if (linksResponse?.ok) memberLinks = Array.isArray(linksResponse.links) ? linksResponse.links : [];
    }

    const payload = mode === 'discord-to-eso'
      ? { mode: 'discord-to-eso', discordUserId: value }
      : { mode: 'eso-to-discord', accountName: value };
    const response = await emitSocketWithAck('guildsync:request-member-link-options', payload, 30000);
    if (!response?.ok) throw new Error(response?.message || response?.error || 'Failed to load link suggestions.');
    memberLinkDialogOptions = Array.isArray(response.options) ? response.options : [];
  } catch (error) {
    memberLinkDialogError = formatError(error);
  } finally {
    memberLinkDialogLoading = false;
    renderGuildSyncTabLayout();
  }
}

function closeMemberLinkDialog() {
  document.removeEventListener('keydown', handleMemberLinkDialogKeydown);
  memberLinkDialogOpen = false;
  memberLinkDialogContext = null;
  memberLinkDialogOptions = [];
  memberLinkDialogLoading = false;
  memberLinkDialogError = '';
  memberLinkDialogSearchTerm = '';
  memberLinkDialogSelectedOptionIndex = -1;
  renderGuildSyncTabLayout();
}


function getVisibleMemberLinkOptionRows() {
  return [...document.querySelectorAll('.member-link-option-row')]
    .filter((row) => row.offsetParent !== null && !row.disabled);
}

function setActiveMemberLinkOptionIndex(index) {
  const rows = getVisibleMemberLinkOptionRows();
  rows.forEach((row) => row.classList.remove('member-link-option-row-active'));

  if (rows.length === 0) {
    memberLinkDialogSelectedOptionIndex = -1;
    return;
  }

  memberLinkDialogSelectedOptionIndex = Math.max(0, Math.min(index, rows.length - 1));
  const activeRow = rows[memberLinkDialogSelectedOptionIndex];
  activeRow.classList.add('member-link-option-row-active');
  activeRow.scrollIntoView({ block: 'nearest' });
}

function applyMemberLinkSuggestionFilter() {
  const searchValue = normalizeSimpleMemberName(memberLinkDialogSearchTerm);
  const rows = [...document.querySelectorAll('.member-link-option-row')];
  let visibleCount = 0;

  rows.forEach((row) => {
    const searchText = normalizeSimpleMemberName(row.dataset.memberLinkOptionSearch || row.textContent || '');
    const visible = !searchValue || searchText.includes(searchValue);
    row.hidden = !visible;
    row.classList.remove('member-link-option-row-active');
    if (visible) visibleCount += 1;
  });

  const emptyMessage = document.querySelector('#memberLinkSuggestionSearchEmpty');
  if (emptyMessage) {
    emptyMessage.hidden = visibleCount !== 0;
  }

  memberLinkDialogSelectedOptionIndex = -1;
}

function handleMemberLinkSuggestionSearchInput(event) {
  memberLinkDialogSearchTerm = event.target.value || '';
  applyMemberLinkSuggestionFilter();
}

function handleMemberLinkSuggestionSearchKeydown(event) {
  if (event.key === 'Enter') {
    event.preventDefault();
    return;
  }

  if (event.key !== 'ArrowDown' && event.key !== 'ArrowUp') {
    return;
  }

  event.preventDefault();
  const rows = getVisibleMemberLinkOptionRows();
  if (rows.length === 0) return;

  if (event.key === 'ArrowDown') {
    const nextIndex = memberLinkDialogSelectedOptionIndex < 0 ? 0 : memberLinkDialogSelectedOptionIndex + 1;
    setActiveMemberLinkOptionIndex(nextIndex >= rows.length ? rows.length - 1 : nextIndex);
    return;
  }

  const previousIndex = memberLinkDialogSelectedOptionIndex < 0 ? rows.length - 1 : memberLinkDialogSelectedOptionIndex - 1;
  setActiveMemberLinkOptionIndex(previousIndex < 0 ? 0 : previousIndex);
}

function handleMemberLinkDialogKeydown(event) {
  if (!memberLinkDialogOpen) return;

  if (event.key === 'Escape') {
    event.preventDefault();
    closeMemberLinkDialog();
  }
}

async function selectMemberLinkDialogOption(value) {
  if (!memberLinkDialogContext || !value) return;

  try {
    const payload = memberLinkDialogContext.mode === 'discord-to-eso'
      ? { esoAccountName: value, discordUserId: memberLinkDialogContext.discordUserId }
      : { esoAccountName: memberLinkDialogContext.esoAccountName, discordUserId: value };
    const response = await emitSocketWithAck('guildsync:manual-link-member', payload, 30000);
    if (!response?.ok) throw new Error(response?.message || response?.error || 'Failed to link members.');
    memberLinks = Array.isArray(response.links) ? response.links : memberLinks;
    addSystemMessage('member-link-saved', response.message || 'Member link saved.', { ttlMs: TRANSIENT_MESSAGE_TTL_MS });
    closeMemberLinkDialog();
  } catch (error) {
    memberLinkDialogError = formatError(error);
    renderGuildSyncTabLayout();
  }
}

async function acceptMemberLinkCandidateFromDialog(esoAccountName, discordUserId = '') {
  await acceptMemberLinkCandidate(esoAccountName, discordUserId);
  closeMemberLinkDialog();
}

async function reloadMemberLinkDialogOptions() {
  if (!memberLinkDialogContext) return;

  memberLinkDialogLoading = true;
  memberLinkDialogError = '';
  renderGuildSyncTabLayout();

  try {
    const payload = memberLinkDialogContext.mode === 'discord-to-eso'
      ? { mode: 'discord-to-eso', discordUserId: memberLinkDialogContext.discordUserId }
      : { mode: 'eso-to-discord', accountName: memberLinkDialogContext.esoAccountName };
    const response = await emitSocketWithAck('guildsync:request-member-link-options', payload, 30000);
    if (!response?.ok) throw new Error(response?.message || response?.error || 'Failed to load link suggestions.');
    memberLinkDialogOptions = Array.isArray(response.options) ? response.options : [];
  } catch (error) {
    memberLinkDialogError = formatError(error);
  } finally {
    memberLinkDialogLoading = false;
    renderGuildSyncTabLayout();
  }
}

async function unlinkMemberLinkFromDialog(esoAccountName = '', discordUserId = '') {
  const link = getMemberLinksForDialog().find((item) =>
    normalizeMemberLinkName(item.eso_account_name) === normalizeMemberLinkName(esoAccountName)
    && String(item.discord_user_id || '').trim() === String(discordUserId || '').trim()
  );
  if (!link) return;

  const confirmed = await openGuildSyncConfirmDialog({
    title: 'Unlink Member?',
    message: 'Remove this specific ESO/Discord link? Exact automatic links will be blocked; fuzzy and manual links can be suggested again.',
    confirmLabel: 'Unlink',
    cancelLabel: 'Cancel',
    confirmClass: 'danger',
  });
  if (!confirmed) return;

  try {
    const response = await emitSocketWithAck('guildsync:manual-unlink-member', {
      esoAccountName: link.eso_account_name,
      discordUserId: link.discord_user_id
    }, 30000);
    if (!response?.ok) throw new Error(response?.message || response?.error || 'Failed to unlink member.');
    memberLinks = Array.isArray(response.links) ? response.links : memberLinks;
    addSystemMessage('member-link-unlinked', response.message || 'Member link removed.', { ttlMs: TRANSIENT_MESSAGE_TTL_MS });
    await reloadMemberLinkDialogOptions();
  } catch (error) {
    memberLinkDialogError = formatError(error);
    renderGuildSyncTabLayout();
  }
}


function wireMemberLinkDialog() {
  if (!memberLinkDialogOpen) return;

  document.removeEventListener('keydown', handleMemberLinkDialogKeydown);
  document.addEventListener('keydown', handleMemberLinkDialogKeydown);

  document.querySelector('#closeMemberLinkDialogButton')?.addEventListener('click', closeMemberLinkDialog);

  const suggestionSearchInput = document.querySelector('#memberLinkSuggestionSearchInput');
  if (suggestionSearchInput) {
    suggestionSearchInput.addEventListener('input', handleMemberLinkSuggestionSearchInput);
    suggestionSearchInput.addEventListener('keydown', handleMemberLinkSuggestionSearchKeydown);
    applyMemberLinkSuggestionFilter();
  }

  document.querySelectorAll('[data-unlink-dialog-member-link]').forEach((button) => {
    button.addEventListener('click', () => unlinkMemberLinkFromDialog(button.dataset.unlinkEsoAccount || '', button.dataset.unlinkDiscordUserId || ''));
  });

  document.querySelectorAll('[data-member-link-option-value]').forEach((button) => {
    button.addEventListener('click', () => selectMemberLinkDialogOption(button.dataset.memberLinkOptionValue || ''));
  });

  document.querySelectorAll('[data-accept-dialog-member-candidate]').forEach((button) => {
    button.addEventListener('click', () => acceptMemberLinkCandidateFromDialog(button.dataset.acceptDialogMemberCandidate || '', button.dataset.acceptDialogDiscordUserId || ''));
  });

  const overlay = document.querySelector('.member-link-dialog-overlay');
  if (overlay) {
    overlay.addEventListener('click', (event) => {
      if (event.target === overlay) closeMemberLinkDialog();
    });
  }
}

function wireAssociateTicketReportDialog() {
  if (!associateTicketReportDialogOpen) {
    return;
  }

  document.querySelector('#closeAssociateTicketReportButton')?.addEventListener('click', closeAssociateTicketReportDialog);
  document.querySelector('#rerunAssociateTicketReportButton')?.addEventListener('click', () => runAssociateTicketReport());
  document.querySelector('#copyAssociateTicketReportGridButton')?.addEventListener('click', () => copyAssociateTicketReportGrid());

  const overlay = document.querySelector('.report-results-overlay');
  if (overlay) {
    overlay.addEventListener('click', (event) => {
      if (event.target === overlay) {
        closeAssociateTicketReportDialog();
      }
    });
  }
}

function wireDiscordRankAuditReportDialog() {
  if (!discordRankAuditReportDialogOpen) {
    return;
  }

  document.querySelector('#closeDiscordRankAuditReportButton')?.addEventListener('click', closeDiscordRankAuditReportDialog);
  document.querySelector('#rerunDiscordRankAuditReportButton')?.addEventListener('click', () => runDiscordRankAuditReport());
  document.querySelector('#copyDiscordRankAuditReportGridButton')?.addEventListener('click', () => copyDiscordRankAuditReportGrid());

  const overlay = document.querySelector('.report-results-overlay');
  if (overlay) {
    overlay.addEventListener('click', (event) => {
      if (event.target === overlay) {
        closeDiscordRankAuditReportDialog();
      }
    });
  }
}

function wireDiscordLastSeenReportDialog() {
  if (!discordLastSeenReportDialogOpen) {
    return;
  }

  document.querySelector('#closeDiscordLastSeenReportButton')?.addEventListener('click', closeDiscordLastSeenReportDialog);
  document.querySelector('#rerunDiscordLastSeenReportButton')?.addEventListener('click', () => runDiscordLastSeenReport());
  document.querySelector('#copyDiscordLastSeenReportGridButton')?.addEventListener('click', () => copyDiscordLastSeenReportGrid());

  document.querySelectorAll('[data-discord-last-seen-sort]').forEach((button) => {
    button.addEventListener('click', () => cycleDiscordLastSeenReportSort(button.dataset.discordLastSeenSort || ''));
  });

  const searchInput = document.querySelector('#discordLastSeenReportSearchInput');
  if (searchInput) {
    searchInput.addEventListener('input', handleDiscordLastSeenReportSearchInput);
    applyDiscordLastSeenReportSearchFilter();
  }

  const overlay = document.querySelector('.discord-last-seen-report-overlay');
  if (overlay) {
    overlay.addEventListener('click', (event) => {
      if (event.target === overlay) {
        closeDiscordLastSeenReportDialog();
      }
    });
  }
}

function handleDiscordLastSeenReportSearchInput(event) {
  discordLastSeenReportSearchTerm = event.target.value || '';
  applyDiscordLastSeenReportSearchFilter();
}

function applyDiscordLastSeenReportSearchFilter() {
  const searchValue = normalizeSimpleMemberName(discordLastSeenReportSearchTerm);
  const rows = [...document.querySelectorAll('[data-discord-last-seen-row]')];
  let visibleCount = 0;

  rows.forEach((row) => {
    const searchText = normalizeSimpleMemberName(row.dataset.discordLastSeenSearch || row.textContent || '');
    const visible = !searchValue || searchText.includes(searchValue);
    row.hidden = !visible;
    if (visible) visibleCount += 1;
  });

  const emptyMessage = document.querySelector('#discordLastSeenReportSearchEmpty');
  if (emptyMessage) {
    emptyMessage.hidden = visibleCount !== 0;
  }
}


async function runDiscordLastSeenReport() {
  if (!socket?.connected || !isAuthenticatedSession()) {
    discordLastSeenReportError = 'You must be logged in and connected to run this report.';
    renderGuildSyncTabLayout();
    return;
  }

  discordLastSeenReportLoading = true;
  discordLastSeenReportError = '';
  renderGuildSyncTabLayout();

  try {
    const response = await emitSocketWithAck('guildsync:request-discord-member-dataJSON', {}, 30000);
    if (!response?.ok) throw new Error(response?.message || response?.error || 'Failed to load Discord roster data.');

    discordMembers = normalizeDiscordMembers(response.members);
    discordLastSeenReportRows = [...discordMembers];
  } catch (error) {
    discordLastSeenReportError = formatError(error);
  } finally {
    discordLastSeenReportLoading = false;
    renderGuildSyncTabLayout();
    focusInputById('discordLastSeenReportSearchInput');
  }
}


async function runDiscordRankAuditReport() {
  if (!socket?.connected || !isAuthenticatedSession()) {
    discordRankAuditReportError = 'You must be logged in and connected to run this report.';
    renderGuildSyncTabLayout();
    return;
  }

  discordRankAuditReportLoading = true;
  discordRankAuditReportError = '';
  renderGuildSyncTabLayout();

  try {
    const response = await emitSocketWithAck('guildsync:request-discord-rank-audit-report', {}, 30000);

    if (!response?.ok) {
      throw new Error(response?.message || response?.error || 'Failed to run report.');
    }

    discordRankAuditReportRows = Array.isArray(response.rows) ? response.rows : [];
  } catch (error) {
    discordRankAuditReportError = formatError(error);
  } finally {
    discordRankAuditReportLoading = false;
    renderGuildSyncTabLayout();
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
            <h3 id="manualBiweeklyTicketTitle">Add Manual Tickets</h3>
            <p>Add free/manual raffle tickets such as FFTG. These do not count as purchased tickets.</p>
          </div>
          <button id="closeManualBiweeklyTicketButton" class="roster-history-close modal-close-button" type="button" aria-label="Close">×</button>
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
            <div class="manual-ticket-type-field" role="group" aria-label="Ticket type">
              <button class="manual-ticket-type-label${manualBiweeklyTicketForm.ticketType !== 'monthly' ? ' is-selected' : ''}" type="button" data-manual-ticket-type="biweekly" aria-pressed="${manualBiweeklyTicketForm.ticketType !== 'monthly' ? 'true' : 'false'}">Bi-Weekly</button>
              <button class="manual-ticket-type-switch" type="button" data-manual-ticket-toggle="true" data-selected-type="${manualBiweeklyTicketForm.ticketType === 'monthly' ? 'monthly' : 'biweekly'}" aria-label="Toggle ticket type. Current selection is ${manualBiweeklyTicketForm.ticketType === 'monthly' ? '50/50' : 'Bi-Weekly'}">
                <span class="manual-ticket-type-track" aria-hidden="true"></span>
                <span class="manual-ticket-type-thumb" aria-hidden="true"></span>
              </button>
              <button class="manual-ticket-type-label${manualBiweeklyTicketForm.ticketType === 'monthly' ? ' is-selected' : ''}" type="button" data-manual-ticket-type="monthly" aria-pressed="${manualBiweeklyTicketForm.ticketType === 'monthly' ? 'true' : 'false'}">50/50</button>
            </div>
            <label class="manual-ticket-note-field">
              <textarea id="manualTicketNoteInput" class="discord-search-input manual-ticket-note-input" rows="4" placeholder="Enter a reason such as FFTG">${escapeHtml(manualBiweeklyTicketForm.note)}</textarea>
            </label>
            <div class="manual-ticket-side-fields">
              <label class="manual-ticket-gold-field">
                <input id="manualTicketGoldInput" class="discord-search-input manual-ticket-gold-input" type="number" min="0" step="1" inputmode="numeric" placeholder="Gold Value" value="${escapeAttribute(manualBiweeklyTicketForm.goldValue)}" />
                <span class="manual-ticket-gold-coin" aria-hidden="true"></span>
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

  document.querySelectorAll('[data-manual-ticket-type]').forEach((button) => {
    button.addEventListener('click', () => {
      const value = String(button.dataset.manualTicketType || '').trim().toLowerCase();
      manualBiweeklyTicketForm.ticketType = value === 'monthly' ? 'monthly' : 'biweekly';
      renderGuildSyncTabLayout();
    });
  });

  document.querySelector('[data-manual-ticket-toggle]')?.addEventListener('click', () => {
    manualBiweeklyTicketForm.ticketType = manualBiweeklyTicketForm.ticketType === 'monthly' ? 'biweekly' : 'monthly';
    renderGuildSyncTabLayout();
  });

  const goldInput = document.querySelector('#manualTicketGoldInput');
  goldInput?.addEventListener('input', (event) => {
    const numericValue = String(event.target.value || '').replace(/\D/g, '');
    if (event.target.value !== numericValue) {
      event.target.value = numericValue;
    }
    manualBiweeklyTicketForm.goldValue = numericValue;
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
  const ticketType = String(manualBiweeklyTicketForm.ticketType || 'biweekly').trim().toLowerCase() === 'monthly' ? 'monthly' : 'biweekly';
  const goldValue = Number(String(manualBiweeklyTicketForm.goldValue || '').trim() || 0);
  const tickets = Number(manualBiweeklyTicketForm.tickets);

  if (!accountName) {
    manualBiweeklyTicketError = 'Choose a guild member.';
    renderGuildSyncTabLayout();
    return;
  }

  if (!Number.isFinite(goldValue) || goldValue < 0) {
    manualBiweeklyTicketError = 'Gold value must be zero or greater.';
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
      ticket_type: ticketType,
      gold_value: Math.floor(goldValue),
      tickets: Math.floor(tickets)
    }, 30000);

    if (!response?.ok) {
      throw new Error(response?.message || response?.error || 'Failed to add manual ticket entry.');
    }

    manualBiweeklyTicketDialogOpen = false;
    manualBiweeklyTicketForm = { accountName: '', note: '', ticketType: 'biweekly', goldValue: '', tickets: '' };
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
      rosterSearchSelectionStart = event.target.selectionStart;
      rosterSearchSelectionEnd = event.target.selectionEnd;
      rosterSearchActiveIndex = -1;
      renderGuildSyncTabLayout({ restoreRosterSearchFocus: true });
    });

    rosterSearchInput.addEventListener('keydown', handleRosterSearchKeydown);
  }

  document.querySelectorAll('[data-roster-sort-column]').forEach((button) => {
    button.addEventListener('click', () => {
      setRosterSort(button.dataset.rosterSortColumn || 'account_name');
    });
  });

  const rankSelect = document.querySelector('#rosterRankFilter');
  if (rankSelect) {
    rankSelect.addEventListener('change', (event) => {
      const rankName = String(event.target.value || '').trim();
      if (rankName) {
        rosterSelectedRankNames.add(rankName);
        rosterSearchActiveIndex = -1;
        renderGuildSyncTabLayout();
      }
    });
  }

  document.querySelectorAll('[data-remove-roster-rank-filter]').forEach((button) => {
    button.addEventListener('click', () => {
      const rankName = button.dataset.removeRosterRankFilter || '';
      rosterSelectedRankNames.delete(rankName);
      rosterSearchActiveIndex = -1;
      renderGuildSyncTabLayout();
    });
  });

  const rosterLinkStatusSelect = document.querySelector('#rosterLinkStatusFilter');
  if (rosterLinkStatusSelect) {
    rosterLinkStatusSelect.addEventListener('change', (event) => {
      const status = String(event.target.value || '').trim();
      if (status) {
        rosterSelectedLinkStatuses.add(status);
        rosterSearchActiveIndex = -1;
        renderGuildSyncTabLayout();
      }
    });
  }

  document.querySelectorAll('[data-remove-roster-link-status-filter]').forEach((button) => {
    button.addEventListener('click', () => {
      const status = button.dataset.removeRosterLinkStatusFilter || '';
      rosterSelectedLinkStatuses.delete(status);
      rosterSearchActiveIndex = -1;
      renderGuildSyncTabLayout();
    });
  });

  document.querySelectorAll('[data-open-member-link-dialog]').forEach((button) => {
    button.addEventListener('click', () => openMemberLinkDialog(button.dataset.openMemberLinkDialog || '', button.dataset.memberLinkValue || ''));
  });

  const clearButton = document.querySelector('#clearRosterFiltersButton');
  if (clearButton) {
    clearButton.addEventListener('click', () => {
      rosterSearchText = '';
      rosterSelectedRankNames.clear();
      rosterSelectedLinkStatuses.clear();
      rosterSortColumn = '';
      rosterSortDirection = '';
      rosterSearchActiveIndex = -1;
      renderGuildSyncTabLayout();
    });
  }

  wireRosterHistoryDialog();
}


function handleRosterSearchKeydown(event) {
  if (event.key !== 'ArrowDown' && event.key !== 'ArrowUp' && event.key !== 'Enter') {
    return;
  }

  if (event.key === 'Enter') {
    event.preventDefault();
    return;
  }

  const visibleRows = Array.from(document.querySelectorAll('.eso-roster-row[data-roster-row-index]'));

  if (visibleRows.length === 0) {
    rosterSearchActiveIndex = -1;
    return;
  }

  event.preventDefault();

  if (event.key === 'ArrowDown') {
    rosterSearchActiveIndex = rosterSearchActiveIndex < 0
      ? 0
      : Math.min(rosterSearchActiveIndex + 1, visibleRows.length - 1);
  } else if (event.key === 'ArrowUp') {
    rosterSearchActiveIndex = rosterSearchActiveIndex < 0
      ? visibleRows.length - 1
      : Math.max(rosterSearchActiveIndex - 1, 0);
  }

  visibleRows.forEach((row, index) => {
    row.classList.toggle('roster-search-active-row', index === rosterSearchActiveIndex);
  });

  const activeRow = visibleRows[rosterSearchActiveIndex];
  if (activeRow && typeof activeRow.scrollIntoView === 'function') {
    activeRow.scrollIntoView({ block: 'nearest', inline: 'nearest' });
  }
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

function wireDiscordHistoryDialog() {
  const closeButton = document.querySelector('#closeDiscordHistoryButton');
  if (closeButton) {
    closeButton.addEventListener('click', () => {
      discordHistoryDialogOpen = false;
      renderGuildSyncTabLayout();
    });
  }

  const searchInput = document.querySelector('#discordHistorySearchInput');
  if (searchInput) {
    searchInput.addEventListener('input', (event) => {
      discordHistorySearchText = event.target.value || '';
      discordHistoryActiveMatchIndex = -1;
      discordHistorySearchGeneration += 1;
      const searchGeneration = discordHistorySearchGeneration;

      clearTimeout(discordHistorySearchTimer);

      if (!discordHistorySearchText.trim()) {
        discordHistoryError = '';
        discordHistoryMatches = [];
        discordHistorySelectedID = '';
        discordHistorySelectedName = '';
        discordHistoryEvents = [];
        discordHistoryLoading = false;
        renderGuildSyncTabLayout();
        focusInputById('discordHistorySearchInput');
        return;
      }

      discordHistorySearchTimer = setTimeout(() => {
        searchDiscordMemberHistory({ auto: true, keepFocus: true, generation: searchGeneration });
      }, DISCORD_HISTORY_SEARCH_DEBOUNCE_MS);
    });

    searchInput.addEventListener('keydown', (event) => {
      if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
        if (discordHistoryMatches.length === 0) {
          return;
        }

        event.preventDefault();
        const direction = event.key === 'ArrowDown' ? 1 : -1;
        const currentIndex = discordHistoryActiveMatchIndex < 0 ? 0 : discordHistoryActiveMatchIndex;
        discordHistoryActiveMatchIndex = (currentIndex + direction + discordHistoryMatches.length) % discordHistoryMatches.length;
        renderGuildSyncTabLayout();
        focusInputById('discordHistorySearchInput');
        return;
      }

      if (event.key !== 'Enter') {
        return;
      }

      event.preventDefault();
      const selectedMatch = discordHistoryMatches[discordHistoryActiveMatchIndex >= 0 ? discordHistoryActiveMatchIndex : 0];
      if (selectedMatch?.discord_id) {
        loadDiscordMemberHistory(selectedMatch.discord_id, getDiscordHistoryDisplayName(selectedMatch));
      }
    });
  }

  document.querySelectorAll('[data-discord-history-id]').forEach((button) => {
    button.addEventListener('click', () => {
      loadDiscordMemberHistory(button.dataset.discordHistoryId || '', button.dataset.discordHistoryName || '');
    });
  });
}

async function searchDiscordMemberHistory(options = {}) {
  const requestGeneration = Number.isInteger(options.generation)
    ? options.generation
    : ++discordHistorySearchGeneration;
  const query = discordHistorySearchText.trim();

  if (requestGeneration !== discordHistorySearchGeneration) {
    return;
  }

  if (!query) {
    discordHistoryError = '';
    discordHistoryMatches = [];
    discordHistoryActiveMatchIndex = -1;
    discordHistorySelectedID = '';
    discordHistorySelectedName = '';
    discordHistoryEvents = [];
    discordHistoryLoading = false;
    renderGuildSyncTabLayout();
    if (options.keepFocus) {
      focusInputById('discordHistorySearchInput');
    }
    return;
  }

  discordHistoryLoading = true;
  discordHistoryError = '';
  discordHistoryMatches = [];
  discordHistoryActiveMatchIndex = -1;
  discordHistorySelectedID = '';
  discordHistorySelectedName = '';
  discordHistoryEvents = [];
  renderGuildSyncTabLayout();
  if (options.keepFocus) {
    focusInputById('discordHistorySearchInput');
  }

  try {
    const response = await emitSocketWithAck('guildsync:request-discord-member-history', { query }, 30000);

    if (requestGeneration !== discordHistorySearchGeneration || query !== discordHistorySearchText.trim()) {
      return;
    }

    if (!response?.ok) {
      throw new Error(response?.message || response?.error || 'Failed to search Discord member history.');
    }

    discordHistoryMatches = normalizeDiscordHistoryMatches(response.matches);
    discordHistoryActiveMatchIndex = discordHistoryMatches.length > 0 ? 0 : -1;
  } catch (error) {
    if (requestGeneration !== discordHistorySearchGeneration || query !== discordHistorySearchText.trim()) {
      return;
    }
    discordHistoryError = formatError(error);
  } finally {
    if (requestGeneration !== discordHistorySearchGeneration || query !== discordHistorySearchText.trim()) {
      return;
    }
    discordHistoryLoading = false;
    renderGuildSyncTabLayout();
    if (options.keepFocus) {
      focusInputById('discordHistorySearchInput');
    }
  }
}

async function loadDiscordMemberHistory(discordID, displayName = '', options = {}) {
  const cleanDiscordID = String(discordID || '').trim();

  if (!cleanDiscordID) {
    return;
  }

  discordHistorySelectedID = cleanDiscordID;
  discordHistorySelectedName = String(displayName || cleanDiscordID).trim();
  discordHistorySearchText = discordHistorySelectedName;
  discordHistoryEvents = [];
  discordHistoryLoading = true;
  discordHistoryError = '';
  renderGuildSyncTabLayout();

  try {
    const response = await emitSocketWithAck('guildsync:request-discord-member-history-events', { discord_id: cleanDiscordID }, 30000);

    if (!response?.ok) {
      throw new Error(response?.message || response?.error || 'Failed to load Discord member history.');
    }

    discordHistoryEvents = normalizeDiscordHistoryEvents(response.events);
  } catch (error) {
    discordHistoryError = formatError(error);
  } finally {
    discordHistoryLoading = false;
    if (!options.keepLoading) {
      renderGuildSyncTabLayout();
    }
  }
}

function normalizeDiscordHistoryMatches(matches) {
  return Array.isArray(matches)
    ? matches
      .filter((item) => item && typeof item === 'object')
      .map((item) => ({
        discord_id: String(item.discord_id || item.discordID || '').trim(),
        username: String(item.username || '').trim(),
        global_name: String(item.global_name || item.globalName || '').trim(),
        server_nickname: String(item.server_nickname || item.serverNickname || '').trim(),
        event_count: Number(item.event_count || item.eventCount || 0)
      }))
      .filter((item) => item.discord_id)
    : [];
}

function normalizeDiscordHistoryEvents(events) {
  return Array.isArray(events)
    ? events
      .filter((item) => item && typeof item === 'object')
      .map((item) => ({
        event_type: String(item.event_type || item.eventType || '').trim(),
        field_name: String(item.field_name || item.fieldName || '').trim(),
        old_value: String(item.old_value ?? item.oldValue ?? '').trim(),
        new_value: String(item.new_value ?? item.newValue ?? '').trim(),
        event_timestamp: item.event_timestamp ?? item.eventTimestamp ?? item.timestamp ?? '',
        event_datetime: item.event_datetime ?? item.eventDatetime ?? '',
        source: String(item.source || '').trim()
      }))
    : [];
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
          <button id="openManualBiweeklyTicketButton" class="bank-export-button" type="button" ${isAuthenticatedSession() ? '' : 'disabled title="Login required to add manual tickets."'}>
            <span aria-hidden="true">＋</span>
            <span>Add Manual Tickets</span>
          </button>
          <button class="bank-export-button" type="button" data-bank-export-section="biweekly">
            <span aria-hidden="true">▦</span>
            <span>Export Bi-Weekly</span>
          </button>
          <button class="bank-export-button" type="button" data-bank-export-section="monthly">
            <span aria-hidden="true">▦</span>
            <span>Export 50/50</span>
          </button>
          <span class="discord-last-refresh">Last Refresh: ${escapeHtml(formatDiscordRefreshDate(bankingLastRefreshValue))}</span>
          <button id="refreshBankingDataButton" class="refresh-discord-button" type="button" ${bankingDataLoading || !isAuthenticatedSession() ? 'disabled' : ''} ${isAuthenticatedSession() ? '' : 'title="Login required to send banking file updates. Existing banking data still loads automatically."'}>
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
                <th>Event ID</th>
                <th>Date / Time (Local)</th>
                <th>Depositor</th>
                <th>Amount Deposited</th>
                ${showTicketColumn ? '<th>Tickets Awarded</th>' : ''}
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
          <button id="closeBankingExportGridButton" class="roster-history-close modal-close-button bank-export-close-button" type="button" aria-label="Close export grid">×</button>
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
                <th>Number of Tickets</th>
                <th>Note</th>
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
      <td>${escapeHtml(String(Number(entry.ticketAmount) || 0))}</td>
      <td>${escapeHtml(entry.note || '')}</td>
    </tr>
  `;
}

function renderEmptyBankingExportGridRow() {
  return `
    <tr>
      <td class="bank-empty-row" colspan="4">No deposits to export for ${escapeHtml(getBankingSectionLabel(bankingExportSection))}.</td>
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
      if (!isAuthenticatedSession()) {
        addSystemMessage('manual-ticket-login-required', 'Login required to add manual tickets.', { ttlMs: TRANSIENT_MESSAGE_TTL_MS });
        return;
      }
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
    refreshButton.addEventListener('click', () => {
      if (!isAuthenticatedSession()) {
        addSystemMessage('banking-login-required', 'Login required to send banking file updates. Existing banking data still loads automatically.', { ttlMs: TRANSIENT_MESSAGE_TTL_MS });
        return;
      }
      collectAndSendGuildSyncBankingData({ key: 'banking' });
    });
  }
}

function getBankingExportTsv(rows) {
  const lines = [['Guildie Name', 'Deposit Amount', 'Tickets', 'Note']];

  for (const entry of rows) {
    lines.push([
      entry.displayName || '',
      String(Number(entry.amount) || 0),
      String(Number(entry.ticketAmount) || 0),
      entry.note || ''
    ]);
  }

  return lines.map((row) => row.map(formatTsvCell).join('\t')).join('\n');
}

function formatTsvCell(value) {
  return String(value ?? '').replace(/[\t\r\n]+/g, ' ').trim();
}

async function copyTextToClipboard(text) {
  const value = String(text ?? '');

  if (navigator.clipboard?.writeText) {
    try {
      await navigator.clipboard.writeText(value);
      return true;
    } catch (error) {
      // Fall through to the textarea-based copy below.
    }
  }

  const textArea = document.createElement('textarea');
  textArea.value = value;
  textArea.setAttribute('readonly', 'readonly');
  textArea.style.position = 'fixed';
  textArea.style.left = '0';
  textArea.style.top = '0';
  textArea.style.width = '1px';
  textArea.style.height = '1px';
  textArea.style.opacity = '0';
  textArea.style.pointerEvents = 'none';
  textArea.style.zIndex = '-1';

  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();
  textArea.setSelectionRange(0, textArea.value.length);

  let copied = false;
  try {
    copied = document.execCommand('copy');
  } finally {
    document.body.removeChild(textArea);
  }

  return copied;
}

async function copyBankingExportGrid() {
  const rows = getBankingRowsForSection(bankingExportSection);
  const tsv = getBankingExportTsv(rows);

  const copied = await copyTextToClipboard(tsv);
  if (copied) {
    addSystemMessage('banking-export-copied', 'Bank deposit export grid copied to clipboard.', {
      ttlMs: TRANSIENT_MESSAGE_TTL_MS
    });
    return;
  }

  const textArea = document.querySelector('#bankingExportTsv');
  if (textArea) {
    textArea.focus();
    textArea.select();
  }

  addSystemMessage('banking-export-copy-error', 'Could not copy automatically. The export text is selected so you can press Ctrl+C.', {
    ttlMs: TRANSIENT_MESSAGE_TTL_MS
  });
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

  const historyButton = document.querySelector('#openDiscordHistoryButton');
  if (historyButton) {
    historyButton.addEventListener('click', () => {
      discordHistoryDialogOpen = true;
      discordHistoryError = '';
      renderGuildSyncTabLayout();
      focusInputById('discordHistorySearchInput');
    });
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

  const linkStatusSelect = document.querySelector('#discordLinkStatusFilter');
  if (linkStatusSelect) {
    linkStatusSelect.addEventListener('change', (event) => {
      const status = String(event.target.value || '').trim();
      if (status) {
        discordSelectedLinkStatuses.add(status);
        renderGuildSyncTabLayout();
      }
    });
  }

  document.querySelectorAll('[data-remove-discord-link-status-filter]').forEach((button) => {
    button.addEventListener('click', () => {
      const status = button.dataset.removeDiscordLinkStatusFilter || '';
      discordSelectedLinkStatuses.delete(status);
      renderGuildSyncTabLayout();
    });
  });

  document.querySelectorAll('[data-open-member-link-dialog]').forEach((button) => {
    button.addEventListener('click', () => openMemberLinkDialog(button.dataset.openMemberLinkDialog || '', button.dataset.memberLinkValue || ''));
  });

  const clearButton = document.querySelector('#clearDiscordFiltersButton');
  if (clearButton) {
    clearButton.addEventListener('click', () => {
      discordSearchText = '';
      discordSelectedRoleNames.clear();
      discordSelectedLinkStatuses.clear();
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
      last_seen: String(member?.last_seen || member?.lastSeen || '').trim(),
      last_seen_action: String(member?.last_seen_action || member?.lastSeenAction || '').trim(),
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
      if (!selectedRoleNames.every((roleName) => memberRoleNames.has(roleName))) {
        return false;
      }
    }

    if (!memberLinkFilterSetMatches(discordSelectedLinkStatuses, getDiscordMemberLinkFilterStatus(member))) {
      return false;
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

function restoreRosterSearchFocus() {
  const searchInput = document.querySelector('#rosterMemberSearch');

  if (!searchInput) {
    return;
  }

  searchInput.focus({ preventScroll: true });

  if (typeof searchInput.setSelectionRange === 'function') {
    const start = Number.isInteger(rosterSearchSelectionStart)
      ? rosterSearchSelectionStart
      : searchInput.value.length;
    const end = Number.isInteger(rosterSearchSelectionEnd)
      ? rosterSearchSelectionEnd
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
    <tr data-discord-user-id="${escapeAttribute(member.discord_id || '')}">
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
      <td class="member-link-action-cell">${renderMemberLinkStatusButton({ mode: 'discord-to-eso', discordUserId: member.discord_id })}</td>
    </tr>
  `;
}

function renderEmptyDiscordMemberRow() {
  const message = discordDataLoading
    ? 'Loading Discord member data...'
    : 'No Discord members found.';

  return `
    <tr>
      <td colspan="5" class="discord-empty-row">${escapeHtml(message)}</td>
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
      openAssociatePromotionReportDialog();
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
  const socketURL = guildSyncSession.socket_url || 'https://guildsync.perdues.me';

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

  socket.on('guildsync:member-links-updated', (payload = {}) => {
    if (Array.isArray(payload.links)) {
      memberLinks = payload.links;
      if (activeGuildSyncTab === 'discord-members' || activeGuildSyncTab === 'eso-members' || activeGuildSyncTab === 'settings' || memberLinkDialogOpen) {
        renderGuildSyncTabLayout();
      }
    }
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
  const label = document.querySelector('#statusConnectionLabel');
  if (!dot) {
    return;
  }

  dot.classList.remove('status-red', 'status-yellow', 'status-green');

  if (!socket?.connected) {
    dot.classList.add('status-red');
    dot.title = 'Server Unavailable. Websocket is not connected.';
    if (label) {
      label.textContent = 'Server Unavailable';
      label.title = 'Server Unavailable';
    }
    return;
  }

  if (!isAuthenticatedSession()) {
    dot.classList.add('status-yellow');
    dot.title = 'Login Required. Websocket is connected but user is not authenticated.';
    if (label) {
      label.textContent = 'Login Required';
      label.title = 'Login Required';
    }
    return;
  }

  dot.classList.add('status-green');
  dot.title = `Server Ready. Authenticated as ${getDisplayName()}.`;
  if (label) {
    label.textContent = 'Server Ready';
    label.title = `Server Ready - ${getDisplayName()}`;
  }
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
