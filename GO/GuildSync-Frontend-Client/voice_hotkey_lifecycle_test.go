package main

import (
	"errors"
	"testing"
)

func TestStoppedKeyboardCannotPressOrReportErrors(t *testing.T) {
	events := []string{}
	v := voiceRuntime{keyboardGeneration: 2, settings: VoiceHotkeySettings{Enabled: true, Shortcut: "Ctrl+M"}, active: true, emit: func(_ string, data interface{}) { events = append(events, data.(map[string]string)["state"]) }}
	v.sampleKeyboard(1, func(int) bool { return true })
	if len(events) != 0 {
		t.Fatal("stopped keyboard emitted", events)
	}
	v.sampleKeyboard(2, func(int) bool { return true })
	if len(events) != 1 || events[0] != "pressed" {
		t.Fatal(events)
	}
}

func TestKeyboardFailureReleasesHoldAndIgnoresOldListener(t *testing.T) {
	events := []string{}
	v := voiceRuntime{keyboardGeneration: 2, settings: VoiceHotkeySettings{Enabled: true, Shortcut: "Ctrl+M"}, active: true, emit: func(_ string, data interface{}) { events = append(events, data.(map[string]string)["state"]) }}
	v.sampleKeyboard(2, func(int) bool { return true })
	v.keyboardError(1, errors.New("old error"))
	if len(events) != 1 {
		t.Fatal(events)
	}
	v.keyboardError(2, errors.New("permission removed"))
	if len(events) != 3 || events[1] != "released" || events[2] != "error" {
		t.Fatal(events)
	}
	v.sampleKeyboard(2, func(int) bool { return true })
	if len(events) != 3 {
		t.Fatal("failed held key replayed", events)
	}
}
