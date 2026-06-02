package main

import (
	"context"
	"encoding/json"
	"os"
	"path/filepath"
	"sync"

	"github.com/getlantern/systray"
	"github.com/wailsapp/wails/v2/pkg/runtime"
)

type App struct {
	ctx      context.Context
	appIcon  []byte
	trayIcon []byte
	mu       sync.Mutex
	quiting  bool
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

	// Splash screen behavior.
	runtime.WindowCenter(ctx)
	runtime.WindowSetAlwaysOnTop(ctx, true)
}

func (a *App) shutdown(ctx context.Context) {
	_ = a.SaveWindowState()
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
	runtime.WindowHide(a.ctx)
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
	runtime.WindowMinimise(a.ctx)
}

func (a *App) CloseWindow() {
	// This is called by your custom close button.
	// It does NOT quit. It hides to tray.
	a.HideToTray()
}

func (a *App) QuitFromTray() {
	a.mu.Lock()
	a.quiting = true
	a.mu.Unlock()

	_ = a.SaveWindowState()
	systray.Quit()
	runtime.Quit(a.ctx)
}

func (a *App) trayReady() {
	systray.SetIcon(a.trayIcon)
	systray.SetTitle("GuildSync")
	systray.SetTooltip("GuildSync is running")

	mShow := systray.AddMenuItem("Show", "Show GuildSync")
	mHide := systray.AddMenuItem("Hide", "Hide GuildSync")
	systray.AddSeparator()
	mQuit := systray.AddMenuItem("Quit GuildSync", "Quit GuildSync")

	go func() {
		for {
			select {
			case <-mShow.ClickedCh:
				a.ShowFromTray()

			case <-mHide.ClickedCh:
				a.HideToTray()

			case <-mQuit.ClickedCh:
				a.QuitFromTray()
				return
			}
		}
	}()
}

func (a *App) trayExit() {
	// Cleanup hook if needed later.
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
