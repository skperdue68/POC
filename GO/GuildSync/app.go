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
}

type WindowState struct {
	X      int  `json:"x"`
	Y      int  `json:"y"`
	Width  int  `json:"width"`
	Height int  `json:"height"`
	Saved  bool `json:"saved"`
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
	_ = a.SaveWindowState()
	a.stopTray()
}

func (a *App) ShowMainWindow() {
	runtime.WindowSetAlwaysOnTop(a.ctx, false)

	state := a.loadWindowState()

	if state.Saved {
		runtime.WindowSetSize(a.ctx, state.Width, state.Height)
		runtime.WindowSetPosition(a.ctx, state.X, state.Y)
	} else {
		runtime.WindowSetSize(a.ctx, 1100, 720)
		runtime.WindowCenter(a.ctx)
	}

	runtime.WindowShow(a.ctx)
}

func (a *App) SaveWindowState() error {
	if a.ctx == nil {
		return nil
	}

	x, y := runtime.WindowGetPosition(a.ctx)
	width, height := runtime.WindowGetSize(a.ctx)

	state := WindowState{
		X:      x,
		Y:      y,
		Width:  width,
		Height: height,
		Saved:  true,
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
	_ = a.SaveWindowState()

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

	runtime.WindowShow(a.ctx)
	runtime.WindowUnminimise(a.ctx)
	runtime.WindowSetAlwaysOnTop(a.ctx, true)
	runtime.WindowSetAlwaysOnTop(a.ctx, false)
}

func (a *App) MinimizeWindow() {
	_ = a.SaveWindowState()

	if a.ctx == nil {
		return
	}

	runtime.WindowMinimise(a.ctx)
}

func (a *App) CloseWindow() {
	_ = a.SaveWindowState()

	if a.ctx == nil {
		return
	}

	if supportsTray() {
		// Windows: close button hides to system tray.
		runtime.WindowHide(a.ctx)
		return
	}

	// macOS/Linux: let the platform behave normally.
	runtime.Quit(a.ctx)
}

func (a *App) QuitFromTray() {
	a.mu.Lock()
	a.quiting = true
	a.mu.Unlock()

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
