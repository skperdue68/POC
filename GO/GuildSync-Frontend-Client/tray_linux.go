//go:build linux

package main

func supportsTray() bool {
	return false
}

func (a *App) startTray() {
	// System tray is intentionally disabled on Linux.
}

func (a *App) stopTray() {
	// No-op on Linux.
}
