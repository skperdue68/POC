//go:build darwin

package main

func supportsTray() bool {
	return false
}

func (a *App) startTray() {
	// System tray is intentionally disabled on macOS.
}

func (a *App) stopTray() {
	// No-op on macOS.
}
