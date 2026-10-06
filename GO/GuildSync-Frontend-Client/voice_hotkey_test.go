package main

import "testing"

func TestVoiceShortcutValidation(t *testing.T) {
	for _, input := range []string{"M", "Ctrl", "Alt+Tab", "Ctrl+Alt+Delete", "Win+L", "Ctrl+Escape", "Ctrl+Unknown"} {
		if _, err := parseVoiceShortcut(input); err == nil {
			t.Errorf("accepted unsafe/incomplete %q", input)
		}
	}
	for _, input := range []string{"Ctrl+M", "Ctrl+Shift+F8", "Alt+Q"} {
		if _, err := parseVoiceShortcut(input); err != nil {
			t.Errorf("rejected %q: %v", input, err)
		}
	}
}
func TestVoiceHoldEdges(t *testing.T) {
	var held voiceHoldState
	if held.update(true, true) != "pressed" {
		t.Fatal("missing press")
	}
	if held.update(true, true) != "" {
		t.Fatal("repeat press")
	}
	if held.update(true, false) != "released" {
		t.Fatal("disable must release")
	}
	if held.update(true, true) != "" {
		t.Fatal("held shortcut must remain blocked after disable")
	}
	held.update(false, true)
	if held.update(true, true) != "pressed" {
		t.Fatal("fresh press blocked")
	}
}
func TestVoiceSettingsPersistence(t *testing.T) {
	path := t.TempDir() + "/settings.json"
	want := VoiceHotkeySettings{Enabled: true, Shortcut: "Ctrl+Shift+F8"}
	if err := writeVoiceSettings(path, want); err != nil {
		t.Fatal(err)
	}
	got := readVoiceSettings(path)
	if got.Enabled != want.Enabled || got.Shortcut != want.Shortcut {
		t.Fatalf("%+v", got)
	}
	if defaults := readVoiceSettings(path + "missing"); defaults.Enabled || defaults.Shortcut != "Ctrl+M" {
		t.Fatalf("%+v", defaults)
	}
}
