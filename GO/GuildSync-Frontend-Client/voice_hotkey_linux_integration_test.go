//go:build linux && cgo

package main

import (
	"os"
	"os/exec"
	"testing"
	"time"
)

func TestVoiceX11GlobalHoldAndRelease(t *testing.T) {
	if os.Getenv("GUILDSYNC_TEST_X11") != "1" {
		t.Skip("requires isolated Xvfb display and xdotool")
	}
	events := make(chan string, 8)
	v := voiceRuntime{keyboardGeneration: 1, settings: VoiceHotkeySettings{Enabled: true, Shortcut: "Ctrl+M"}, active: true, emit: func(_ string, data interface{}) { events <- data.(map[string]string)["state"] }}
	stop, err := startVoiceX11(&v)
	if err != nil {
		t.Fatal(err)
	}
	defer stop()
	command := func(args ...string) {
		t.Helper()
		if output, err := exec.Command("xdotool", args...).CombinedOutput(); err != nil {
			t.Fatalf("xdotool: %v %s", err, output)
		}
	}
	defer exec.Command("xdotool", "keyup", "ctrl+m").Run()
	command("keydown", "ctrl+m")
	select {
	case event := <-events:
		if event != "pressed" {
			t.Fatal(event)
		}
	case <-time.After(3 * time.Second):
		t.Fatal("global press missing")
	}
	command("keyup", "ctrl+m")
	select {
	case event := <-events:
		if event != "released" {
			t.Fatal(event)
		}
	case <-time.After(3 * time.Second):
		t.Fatal("global release missing")
	}
	v.mu.Lock()
	v.stop = stop
	v.active = false
	v.stopKeyboardLocked()
	v.mu.Unlock()
	command("keydown", "ctrl+m")
	select {
	case event := <-events:
		t.Fatal("stopped listener emitted", event)
	case <-time.After(100 * time.Millisecond):
	}
}
