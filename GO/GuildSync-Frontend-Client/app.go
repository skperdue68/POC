package main

import (
	"context"
	"encoding/json"
	"os"
	"path/filepath"
	"sync"

	"github.com/wailsapp/wails/v2/pkg/runtime"
)

type App struct {
	ctx      context.Context
	appIcon  []byte
	trayIcon []byte
	mu       sync.Mutex
	quiting  bool
	oauth    *oauthRuntimeState

	fileWatcherMu        sync.Mutex
	fileWatcherCancel    context.CancelFunc
	fileWatcherRunning   bool
	fileWatcherSignature string
}

type WindowState struct {
	X            int  `json:"x"`
	Y            int  `json:"y"`
	Width        int  `json:"width"`
	Height       int  `json:"height"`
	Saved        bool `json:"saved"`
	HiddenToTray bool `json:"hidden_to_tray"`
}

func NewApp(appIcon []byte, trayIcon []byte) *App {
	return &App{
		appIcon:  appIcon,
		trayIcon: trayIcon,
	}
}

func (a *App) startup(ctx context.Context) {
	a.ctx = ctx

	// Start tray support.
	// On Windows this starts getlantern/systray.
	// On macOS/Linux this is a no-op and the OS/Wails handles normal app behavior.
	a.startTray()

	// Splash screen behavior.
	runtime.WindowCenter(ctx)
	runtime.WindowSetAlwaysOnTop(ctx, true)
}

func (a *App) shutdown(ctx context.Context) {
	a.StopGuildSyncFileWatcher()
	_ = a.SaveWindowState()
	a.stopTray()
}

// ShowMainWindow is called after the splash screen finishes.
//
// If the user previously hid GuildSync to the system tray, the app restores that
// state after splash by hiding the secondary/main window again. This is separate
// from minimize state. Minimized means the window is still open; hidden_to_tray
// means GuildSync is running tray-only.
func (a *App) ShowMainWindow() bool {
	if a.ctx == nil {
		return false
	}

	runtime.WindowSetAlwaysOnTop(a.ctx, false)

	state := a.loadWindowState()

	if state.Saved {
		runtime.WindowSetSize(a.ctx, state.Width, state.Height)
		runtime.WindowSetPosition(a.ctx, state.X, state.Y)
	} else {
		runtime.WindowSetSize(a.ctx, 1100, 720)
		runtime.WindowCenter(a.ctx)
	}

	if supportsTray() && state.HiddenToTray {
		runtime.WindowHide(a.ctx)
		return false
	}

	runtime.WindowShow(a.ctx)
	_ = a.saveWindowStateWithHiddenToTray(false)

	return true
}

func (a *App) SaveWindowState() error {
	return a.saveWindowState(nil)
}

func (a *App) saveWindowStateWithHiddenToTray(hiddenToTray bool) error {
	return a.saveWindowState(&hiddenToTray)
}

func (a *App) saveWindowState(hiddenToTrayOverride *bool) error {
	if a.ctx == nil {
		return nil
	}

	existing := a.loadWindowState()

	x, y := runtime.WindowGetPosition(a.ctx)
	width, height := runtime.WindowGetSize(a.ctx)
	if width < 700 || height < 500 {
		width = existing.Width
		height = existing.Height
		x = existing.X
		y = existing.Y
	}

	hiddenToTray := existing.HiddenToTray
	if hiddenToTrayOverride != nil {
		hiddenToTray = *hiddenToTrayOverride
	}

	state := WindowState{
		X:            x,
		Y:            y,
		Width:        width,
		Height:       height,
		Saved:        true,
		HiddenToTray: hiddenToTray,
	}

	path, err := getConfigPath()
	if err != nil {
		return err
	}

	if err := os.MkdirAll(filepath.Dir(path), 0755); err != nil {
		return err
	}

	data, err := json.MarshalIndent(state, "", "  ")
	if err != nil {
		return err
	}

	return os.WriteFile(path, data, 0644)
}

func (a *App) HideToTray() {
	_ = a.saveWindowStateWithHiddenToTray(true)

	if a.ctx == nil {
		return
	}

	if supportsTray() {
		runtime.WindowHide(a.ctx)
		return
	}

	runtime.WindowMinimise(a.ctx)
}

func (a *App) ShowFromTray() {
	if a.ctx == nil {
		return
	}

	state := a.loadWindowState()

	if state.Saved {
		runtime.WindowSetSize(a.ctx, state.Width, state.Height)
		runtime.WindowSetPosition(a.ctx, state.X, state.Y)
	}

	_ = a.saveWindowStateWithHiddenToTray(false)

	runtime.WindowShow(a.ctx)
	runtime.WindowUnminimise(a.ctx)
	runtime.WindowSetAlwaysOnTop(a.ctx, true)
	runtime.WindowSetAlwaysOnTop(a.ctx, false)
}

func (a *App) MaximizeWindow() {
	if a.ctx == nil {
		return
	}

	runtime.WindowToggleMaximise(a.ctx)
}

func (a *App) MinimizeWindow() {
	// Minimized is not the same as hidden-to-tray.
	// The window is still considered open.
	_ = a.saveWindowStateWithHiddenToTray(false)

	if a.ctx == nil {
		return
	}

	runtime.WindowMinimise(a.ctx)
}

func (a *App) CloseWindow() {
	if a.ctx == nil {
		return
	}

	if supportsTray() {
		// Windows: close button hides to system tray.
		_ = a.saveWindowStateWithHiddenToTray(true)
		runtime.WindowHide(a.ctx)
		return
	}

	_ = a.saveWindowStateWithHiddenToTray(false)

	// macOS/Linux: let the platform behave normally.
	runtime.Quit(a.ctx)
}

func (a *App) QuitFromTray() {
	a.mu.Lock()
	a.quiting = true
	a.mu.Unlock()

	// Quitting from the tray preserves the current tray-hidden state.
	_ = a.SaveWindowState()
	a.stopTray()

	if a.ctx != nil {
		runtime.Quit(a.ctx)
	}
}

func (a *App) loadWindowState() WindowState {
	path, err := getConfigPath()
	if err != nil {
		return WindowState{}
	}

	data, err := os.ReadFile(path)
	if err != nil {
		return WindowState{}
	}

	var state WindowState
	if err := json.Unmarshal(data, &state); err != nil {
		return WindowState{}
	}

	if state.Width < 700 || state.Height < 500 {
		return WindowState{}
	}

	return state
}

func getConfigPath() (string, error) {
	configDir, err := os.UserConfigDir()
	if err != nil {
		return "", err
	}

	return filepath.Join(configDir, "GuildSync", "window-state.json"), nil
}
