//go:build linux && cgo && voicehotkeytest

package main

/*
#cgo pkg-config: x11 xtst
#include <stdlib.h>
#include <X11/Xlib.h>
#include <X11/XKBlib.h>
#include <X11/extensions/XTest.h>

static int voice_test_keycode(Display *display, const char *name, int group) {
    KeySym wanted = XStringToKeysym(name);
    XkbDescPtr map = XkbGetMap(display, XkbAllClientInfoMask, XkbUseCoreKbd);
    if (!map) return 0;
    int found = 0;
    for (int code = map->min_key_code; code <= map->max_key_code; code++) {
        if (group < XkbKeyNumGroups(map, code) && XkbKeySymEntry(map, code, 0, group) == wanted) { found = code; break; }
    }
    XkbFreeKeyboard(map, XkbAllComponentsMask, True);
    return found;
}
*/
import "C"

import "unsafe"

type voiceX11TestInput struct{ display *C.Display }

func openVoiceX11TestInput() *voiceX11TestInput { return &voiceX11TestInput{C.XOpenDisplay(nil)} }
func (input *voiceX11TestInput) close()         { C.XCloseDisplay(input.display) }
func (input *voiceX11TestInput) keycode(name string, group int) int {
	cname := C.CString(name)
	defer C.free(unsafe.Pointer(cname))
	return int(C.voice_test_keycode(input.display, cname, C.int(group)))
}
func (input *voiceX11TestInput) key(code int, down bool) {
	pressed := C.int(C.False)
	if down {
		pressed = C.True
	}
	C.XTestFakeKeyEvent(input.display, C.uint(code), pressed, C.CurrentTime)
	C.XSync(input.display, C.False)
}
func (input *voiceX11TestInput) group(group int) {
	C.XkbLockGroup(input.display, C.XkbUseCoreKbd, C.uint(group))
	C.XSync(input.display, C.False)
}
