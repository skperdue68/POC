//go:build !windows

package main

func supportsTray() bool {
	return false
}

func (a *App) startTray() {
	// Systray is intentionally disabled on macOS and Linux.
	// Those platforms use normal Wails/native app behavior.
}

func (a *App) stopTray() {
	// No-op on macOS and Linux.
}
