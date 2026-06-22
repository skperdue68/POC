//go:build darwin

package main

/*
#cgo LDFLAGS: -framework Cocoa
void guildsyncCreateTray(void);
void guildsyncRemoveTray(void);
*/
import "C"

import "sync"

var darwinTrayMu sync.Mutex
var darwinTrayApp *App

func supportsTray() bool {
	return true
}

func (a *App) startTray() {
	darwinTrayMu.Lock()
	darwinTrayApp = a
	darwinTrayMu.Unlock()

	C.guildsyncCreateTray()
}

func (a *App) stopTray() {
	C.guildsyncRemoveTray()

	darwinTrayMu.Lock()
	if darwinTrayApp == a {
		darwinTrayApp = nil
	}
	darwinTrayMu.Unlock()
}

func getDarwinTrayApp() *App {
	darwinTrayMu.Lock()
	defer darwinTrayMu.Unlock()
	return darwinTrayApp
}

//export guildsyncTrayShow
func guildsyncTrayShow() {
	if app := getDarwinTrayApp(); app != nil {
		go app.ShowFromTray()
	}
}

//export guildsyncTrayHide
func guildsyncTrayHide() {
	if app := getDarwinTrayApp(); app != nil {
		go app.HideToTray()
	}
}

//export guildsyncTrayQuit
func guildsyncTrayQuit() {
	if app := getDarwinTrayApp(); app != nil {
		go app.QuitFromTray()
	}
}
