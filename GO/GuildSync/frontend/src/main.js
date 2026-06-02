import './style.css';
import splashImage from './assets/splash.png';
import appIcon from './assets/icon.png';

import {
  ShowMainWindow,
  SaveWindowState,
  MinimizeWindow,
  CloseWindow
} from '../wailsjs/go/main/App';

const app = document.querySelector('#app');

function showSplash() {
  app.innerHTML = `
    <main class="splash-screen">
      <img src="${splashImage}" alt="GuildSync Splash" class="splash-image" />
    </main>
  `;

  setTimeout(async () => {
    await ShowMainWindow();
    showMainPlaceholder();
  }, 5000);
}

function showMainPlaceholder() {
  app.innerHTML = `
    <main class="main-window">
      <header class="title-bar">
        <div class="title-bar-drag-region">
          <img src="${appIcon}" alt="" class="title-icon" />
          <span class="app-title">GuildSync</span>
        </div>

        <div class="window-buttons">
          <button id="minimizeButton" class="window-button" title="Minimize">−</button>
          <button id="closeButton" class="window-button close-button" title="Close to tray">×</button>
        </div>
      </header>

      <section class="content-area">
        <div class="main-card">
          <h1>GuildSync</h1>
          <p>Main application window placeholder.</p>
          <p>Closing the window now hides the app to the system tray.</p>
          <p>Use the tray menu Quit option to fully exit.</p>
        </div>
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

  window.addEventListener('resize', debounceSaveWindowState);
}

let saveTimer = null;

function debounceSaveWindowState() {
  clearTimeout(saveTimer);

  saveTimer = setTimeout(async () => {
    await SaveWindowState();
  }, 500);
}

showSplash();
