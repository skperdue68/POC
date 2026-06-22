//go:build linux

package main

import (
	"github.com/getlantern/systray"
)

func supportsTray() bool {
	return true
}

func (a *App) startTray() {
	go systray.Run(a.trayReady, a.trayExit)
}

func (a *App) stopTray() {
	a.markTrayStopped()
	systray.Quit()
}

func (a *App) trayReady() {
	a.markTrayReady()
	// Linux desktop environments generally expect a PNG tray icon.
	systray.SetIcon(a.appIcon)
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
	a.markTrayStopped()
}
