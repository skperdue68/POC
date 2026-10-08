//go:build linux && cgo

package main

/*
#cgo pkg-config: x11
#include <stdlib.h>
#include <X11/Xlib.h>
#include <X11/XKBlib.h>


// Scan levels in the effective group only. Modifier and single-group keys
// use XKB's per-key group wrap/clamp/redirect rule for out-of-range groups.
static int voice_key_down(XkbDescPtr mapping, unsigned int active_group, const char *bitmap, const char *name) {
    KeySym wanted = XStringToKeysym(name);
    if (wanted == NoSymbol) return 0;
    for (int code = mapping->min_key_code; code <= mapping->max_key_code; code++) {
        if (!(bitmap[code / 8] & (1 << (code % 8)))) continue;
        unsigned int groups = XkbKeyNumGroups(mapping, code);
        if (!groups) continue;
        unsigned int group = active_group;
        if (group >= groups) {
            unsigned int info = XkbKeyGroupInfo(mapping, code);
            switch (XkbOutOfRangeGroupAction(info)) {
            case XkbClampIntoRange: group = groups - 1; break;
            case XkbRedirectIntoRange:
                group = XkbOutOfRangeGroupNumber(info);
                if (group >= groups) group = 0;
                break;
            default: group %= groups; break;
            }
        }
        for (int level = 0; level < XkbKeyGroupWidth(mapping, code, group); level++) {
            if (XkbKeySymEntry(mapping, code, level, group) == wanted) return 1;
        }
    }
    return 0;
}
*/
import "C"

import (
	"fmt"
	"runtime"
	"sync"
	"time"
	"unsafe"
)

func voiceX11Supported() bool { return true }

func startVoiceX11(v *voiceRuntime) (func(), error) {
	generation := v.keyboardGeneration // caller owns v.mu
	ready := make(chan error, 1)
	done := make(chan struct{})
	var once sync.Once
	go func() {
		runtime.LockOSThread()
		defer runtime.UnlockOSThread()
		display := C.XOpenDisplay(nil)
		if display == nil {
			ready <- fmt.Errorf("cannot open X11 display for global voice shortcut")
			return
		}
		defer C.XCloseDisplay(display)
		// Cache C strings; keyboard mapping itself is read on each sample so
		// changing the layout or remapping keys does not require restarting.
		names := map[int][]*C.char{}
		for code := 0; code <= 123; code++ {
			for _, name := range voiceLinuxKeyNames(code) {
				value := C.CString(name)
				names[code] = append(names[code], value)
				defer C.free(unsafe.Pointer(value))
			}
		}
		ready <- nil
		tick := time.NewTicker(25 * time.Millisecond)
		defer tick.Stop()
		for {
			select {
			case <-done:
				return
			case <-tick.C:
			}
			var bitmap [32]C.char
			C.XQueryKeymap(display, &bitmap[0])
			var keyboardState C.XkbStateRec
			if C.XkbGetState(display, C.XkbUseCoreKbd, &keyboardState) != C.Success {
				v.keyboardError(generation, fmt.Errorf("global voice shortcuts are unavailable: this X11 server does not provide XKB keyboard state"))
				return
			}
			mapping := C.XkbGetMap(display, C.XkbAllClientInfoMask, C.XkbUseCoreKbd)
			if mapping == nil {
				v.keyboardError(generation, fmt.Errorf("global voice shortcuts are unavailable: cannot read this X11 server's keyboard mapping"))
				return
			}
			v.sampleKeyboard(generation, func(code int) bool {
				for _, name := range names[code] {
					if C.voice_key_down(mapping, C.uint(keyboardState.group), &bitmap[0], name) != 0 {
						return true
					}
				}
				return false
			})
			C.XkbFreeKeyboard(mapping, C.XkbAllComponentsMask, C.True)
		}
	}()
	if err := <-ready; err != nil {
		return nil, err
	}
	return func() { once.Do(func() { close(done) }) }, nil
}
