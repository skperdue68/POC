package main

import "testing"

func TestVoiceRuntimeMultipleOrdinaryKeys(t *testing.T) {
	events := []string{}
	v := voiceRuntime{settings: VoiceHotkeySettings{Enabled: true, Shortcut: "M+N"}, active: true, emit: func(_ string, data interface{}) { events = append(events, data.(map[string]string)["state"]) }}
	down := map[int]bool{}
	sample := func() { v.sample(func(key int) bool { return down[key] }) }
	down[77] = true
	sample()
	if len(events) != 0 {
		t.Fatal("partial shortcut activated")
	}
	down[78] = true
	sample()
	sample()
	if len(events) != 1 || events[0] != "pressed" {
		t.Fatal(events)
	}
	down[77] = false
	sample()
	if len(events) != 2 || events[1] != "released" {
		t.Fatal(events)
	}
}

func TestVoiceShortcutValidation(t *testing.T) {
	for _, input := range []string{"", "Ctrl+Ctrl+M", "Win+L", "Ctrl+Unknown", "Alt+F4"} {
		if _, err := parseVoiceShortcut(input); err == nil {
			t.Errorf("accepted unsafe/incomplete %q", input)
		}
	}
	for _, input := range []string{"M", "Ctrl", "Space", "F8", "M+N", "Ctrl+M+N", "Ctrl+Shift+M+N", "Ctrl+M", "Ctrl+Shift+F8", "Alt+Q"} {
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
