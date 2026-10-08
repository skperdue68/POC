//go:build linux && cgo && voicehotkeytest

package main

import (
	"bytes"
	"os"
	"os/exec"
	"testing"
	"time"
)

func TestVoiceX11UsesActiveLayoutGroup(t *testing.T) {
	if os.Getenv("GUILDSYNC_TEST_X11") != "1" {
		t.Skip("requires isolated Xvfb and setxkbmap")
	}
	input := openVoiceX11TestInput()
	if input.display == nil {
		t.Fatal("test cannot open X11 display")
	}
	defer input.close()
	// Keep a client connected while setxkbmap exits so Xvfb cannot reset
	// the two-group keyboard map before the listener starts.
	// Compile and load the complete map explicitly. On headless Xvfb,
	// setxkbmap alone can return success while leaving a single-group map.
	generate := exec.Command("setxkbmap", "-rules", "evdev", "-model", "pc105", "-layout", "us,us", "-variant", ",dvorak", "-option", "", "-print")
	var diagnostics bytes.Buffer
	generate.Stderr = &diagnostics
	keymap, err := generate.Output()
	if err != nil {
		t.Fatalf("generate XKB map: %v %s", err, diagnostics.String())
	}
	load := exec.Command("xkbcomp", "-w", "0", "-", os.Getenv("DISPLAY"))
	load.Stdin = bytes.NewReader(keymap)
	if output, err := load.CombinedOutput(); err != nil {
		t.Fatalf("load XKB map: %v %s\nmap: %s", err, output, keymap)
	}
	defer input.group(0)
	usM, dvorakM := input.keycode("m", 0), input.keycode("m", 1)
	deadline := time.Now().Add(2 * time.Second)
	for (usM == 0 || dvorakM == 0 || usM == dvorakM) && time.Now().Before(deadline) {
		time.Sleep(10 * time.Millisecond)
		usM, dvorakM = input.keycode("m", 0), input.keycode("m", 1)
	}
	if usM == 0 || dvorakM == 0 || usM == dvorakM {
		actual, _ := exec.Command("xkbcomp", "-xkb", os.Getenv("DISPLAY"), "-").CombinedOutput()
		t.Fatalf("US+Dvorak map did not load: M codes %d %d\nrequested: %s\nactual: %s", usM, dvorakM, keymap, actual)
	}
	events := make(chan string, 16)
	v := voiceRuntime{keyboardGeneration: 1, settings: VoiceHotkeySettings{Enabled: true, Shortcut: "Ctrl+Alt+Shift+M"}, active: true, emit: func(_ string, data interface{}) { events <- data.(map[string]string)["state"] }}
	stop, err := startVoiceX11(&v)
	if err != nil {
		t.Fatal(err)
	}
	defer stop()
	want := func(state string) {
		t.Helper()
		select {
		case got := <-events:
			if got != state {
				t.Fatalf("got %q want %q", got, state)
			}
		case <-time.After(3 * time.Second):
			t.Fatalf("missing %s", state)
		}
	}
	quiet := func() {
		t.Helper()
		select {
		case got := <-events:
			t.Fatalf("inactive group emitted %s", got)
		case <-time.After(150 * time.Millisecond):
		}
	}
	for _, name := range []string{"Control_R", "Alt_R", "Shift_R"} {
		code := input.keycode(name, 0)
		if code == 0 {
			t.Fatalf("missing modifier %s", name)
		}
		input.key(code, true)
		defer input.key(code, false)
	}
	input.group(0)
	input.key(usM, true)
	defer input.key(usM, false)
	want("pressed")
	input.group(1)
	want("released")
	quiet()
	input.key(usM, false)
	input.key(dvorakM, true)
	defer input.key(dvorakM, false)
	want("pressed")
	input.group(0)
	want("released")
	quiet()
}
