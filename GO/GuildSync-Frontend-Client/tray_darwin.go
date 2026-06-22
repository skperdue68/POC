//go:build darwin

package main

/*
#cgo CFLAGS: -x objective-c
#cgo LDFLAGS: -framework Cocoa
#import <Cocoa/Cocoa.h>

extern void guildsyncTrayShow(void);
extern void guildsyncTrayHide(void);
extern void guildsyncTrayQuit(void);

@interface GuildSyncTrayController : NSObject
@property (strong) NSStatusItem *statusItem;
@end

@implementation GuildSyncTrayController

- (void)showGuildSync:(id)sender {
    guildsyncTrayShow();
}

- (void)hideGuildSync:(id)sender {
    guildsyncTrayHide();
}

- (void)quitGuildSync:(id)sender {
    guildsyncTrayQuit();
}

@end

static GuildSyncTrayController *guildsyncTrayController = nil;

static void guildsyncCreateTrayOnMainThread(void) {
    if (guildsyncTrayController != nil) {
        return;
    }

    guildsyncTrayController = [[GuildSyncTrayController alloc] init];
    guildsyncTrayController.statusItem = [[NSStatusBar systemStatusBar] statusItemWithLength:NSVariableStatusItemLength];

    if (guildsyncTrayController.statusItem.button != nil) {
        guildsyncTrayController.statusItem.button.title = @"GuildSync";
        guildsyncTrayController.statusItem.button.toolTip = @"GuildSync is running";
    }

    NSMenu *menu = [[NSMenu alloc] initWithTitle:@"GuildSync"];

    NSMenuItem *showItem = [[NSMenuItem alloc] initWithTitle:@"Show" action:@selector(showGuildSync:) keyEquivalent:@""];
    [showItem setTarget:guildsyncTrayController];
    [menu addItem:showItem];

    NSMenuItem *hideItem = [[NSMenuItem alloc] initWithTitle:@"Hide" action:@selector(hideGuildSync:) keyEquivalent:@""];
    [hideItem setTarget:guildsyncTrayController];
    [menu addItem:hideItem];

    [menu addItem:[NSMenuItem separatorItem]];

    NSMenuItem *quitItem = [[NSMenuItem alloc] initWithTitle:@"Quit GuildSync" action:@selector(quitGuildSync:) keyEquivalent:@"q"];
    [quitItem setTarget:guildsyncTrayController];
    [menu addItem:quitItem];

    guildsyncTrayController.statusItem.menu = menu;
}

static void guildsyncRemoveTrayOnMainThread(void) {
    if (guildsyncTrayController == nil) {
        return;
    }

    [[NSStatusBar systemStatusBar] removeStatusItem:guildsyncTrayController.statusItem];
    guildsyncTrayController.statusItem = nil;
    guildsyncTrayController = nil;
}

static void guildsyncCreateTray(void) {
    dispatch_async(dispatch_get_main_queue(), ^{
        guildsyncCreateTrayOnMainThread();
    });
}

static void guildsyncRemoveTray(void) {
    dispatch_async(dispatch_get_main_queue(), ^{
        guildsyncRemoveTrayOnMainThread();
    });
}
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
