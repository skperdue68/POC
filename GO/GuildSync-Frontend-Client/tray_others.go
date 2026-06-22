//go:build !windows && !linux && !darwin

package main

func supportsTray() bool {
	return false
}

func (a *App) startTray() {
	// Systray is intentionally disabled on unsupported platforms.
}

func (a *App) stopTray() {
	// No-op on unsupported platforms.
}
