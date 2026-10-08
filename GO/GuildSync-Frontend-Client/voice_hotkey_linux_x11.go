//go:build linux && cgo

package main

/*
#cgo pkg-config: x11
#include <stdlib.h>
#include <X11/Xlib.h>


// Enumerate every level and group so Shift and alternate layouts do not
// hide the physical key corresponding to a stored keysym.
static int voice_key_down(const KeySym *mapping, int per_code, int first, int last, const char *bitmap, const char *name) {
    KeySym wanted = XStringToKeysym(name);
    if (wanted == NoSymbol) return 0;
    for (int code = first; code <= last; code++) {
        if (!(bitmap[code / 8] & (1 << (code % 8)))) continue;
        for (int index = 0; index < per_code; index++) {
            if (mapping[(code - first) * per_code + index] == wanted) return 1;
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
		var first, last C.int
		C.XDisplayKeycodes(display, &first, &last)
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
			var perCode C.int
			mapping := C.XGetKeyboardMapping(display, C.KeyCode(first), last-first+1, &perCode)
			if mapping == nil {
				continue
			}
			v.sampleKeyboard(generation, func(code int) bool {
				for _, name := range names[code] {
					if C.voice_key_down(mapping, perCode, first, last, &bitmap[0], name) != 0 {
						return true
					}
				}
				return false
			})
			C.XFree(unsafe.Pointer(mapping))
		}
	}()
	if err := <-ready; err != nil {
		return nil, err
	}
	return func() { once.Do(func() { close(done) }) }, nil
}
