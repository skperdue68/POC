package main

import (
	"encoding/json"
	"fmt"
	"github.com/wailsapp/wails/v2/pkg/runtime"
	"os"
	"path/filepath"
	"strings"
	"sync"
)

type VoiceHotkeySettings struct {
	Enabled   bool   `json:"enabled"`
	Shortcut  string `json:"shortcut"`
	Supported bool   `json:"supported"`
}
type voiceShortcut struct {
	keys  []int
	label string
}

func parseVoiceShortcut(input string) (voiceShortcut, error) {
	var result voiceShortcut
	modifiers := map[string]int{"CTRL": 17, "ALT": 18, "SHIFT": 16}
	seen := map[string]bool{}
	parts := strings.Split(strings.ToUpper(strings.TrimSpace(input)), "+")
	for _, part := range parts {
		part = strings.TrimSpace(part)
		if seen[part] {
			return result, fmt.Errorf("duplicate key")
		}
		seen[part] = true
		if key, ok := modifiers[part]; ok {
			result.keys = append(result.keys, key)
		}
	}
	key := parts[len(parts)-1]
	code := 0
	if len(key) == 1 && ((key[0] >= 'A' && key[0] <= 'Z') || (key[0] >= '0' && key[0] <= '9')) {
		code = int(key[0])
	}
	for n := 1; n <= 12; n++ {
		if key == fmt.Sprintf("F%d", n) {
			code = 111 + n
		}
	}
	if len(result.keys) == 0 || len(result.keys) != len(parts)-1 || code == 0 {
		return result, fmt.Errorf("use Ctrl, Alt, or Shift plus a letter, number, or F1–F12")
	}
	if (seen["ALT"] && key == "F4") || (seen["CTRL"] && key == "F4") {
		return result, fmt.Errorf("reserved Windows shortcut")
	}
	result.keys = append(result.keys, code)
	labels := []string{}
	for _, m := range []string{"CTRL", "ALT", "SHIFT"} {
		if seen[m] {
			labels = append(labels, strings.Title(strings.ToLower(m)))
		}
	}
	labels = append(labels, key)
	result.label = strings.Join(labels, "+")
	return result, nil
}

type voiceHoldState struct {
	held    bool
	blocked bool
}

func (s *voiceHoldState) update(down, allowed bool) string {
	if !down {
		s.blocked = false
		if s.held {
			s.held = false
			return "released"
		}
		return ""
	}
	if !allowed {
		s.blocked = true
		if s.held {
			s.held = false
			return "released"
		}
		return ""
	}
	if !s.held && !s.blocked {
		s.held = true
		return "pressed"
	}
	return ""
}
func voiceSettingsPath() (string, error) {
	root, err := os.UserConfigDir()
	return filepath.Join(root, "GuildSync", "voice-hotkey.json"), err
}
func readVoiceSettings(path string) VoiceHotkeySettings {
	settings := VoiceHotkeySettings{Shortcut: "Ctrl+M"}
	data, err := os.ReadFile(path)
	if err == nil {
		if json.Unmarshal(data, &settings) != nil {
			return VoiceHotkeySettings{Shortcut: "Ctrl+M"}
		}
	}
	shortcut, err := parseVoiceShortcut(settings.Shortcut)
	if err != nil {
		return VoiceHotkeySettings{Shortcut: "Ctrl+M"}
	}
	settings.Shortcut = shortcut.label
	return settings
}
func writeVoiceSettings(path string, settings VoiceHotkeySettings) error {
	if err := os.MkdirAll(filepath.Dir(path), 0700); err != nil {
		return err
	}
	data, err := json.Marshal(settings)
	if err != nil {
		return err
	}
	return os.WriteFile(path, data, 0600)
}

type voiceRuntime struct {
	mu              sync.Mutex
	settings        VoiceHotkeySettings
	active, capture bool
	stop            func()
	held            voiceHoldState
	emit            func(string, interface{})
}

func (a *App) voiceState() *voiceRuntime {
	a.mu.Lock()
	defer a.mu.Unlock()
	if a.voice == nil {
		path, _ := voiceSettingsPath()
		a.voice = &voiceRuntime{settings: readVoiceSettings(path)}
		a.voice.settings.Supported = voiceHotkeySupported()
		a.voice.emit = func(event string, data interface{}) {
			if a.ctx != nil {
				runtime.EventsEmit(a.ctx, event, data)
			}
		}
	}
	return a.voice
}
func (a *App) GetVoiceHotkeySettings() VoiceHotkeySettings {
	v := a.voiceState()
	v.mu.Lock()
	defer v.mu.Unlock()
	return v.settings
}
func (a *App) SetVoiceHotkeySettings(enabled bool, shortcut string) (VoiceHotkeySettings, error) {
	parsed, err := parseVoiceShortcut(shortcut)
	if err != nil {
		return a.GetVoiceHotkeySettings(), err
	}
	v := a.voiceState()
	v.mu.Lock()
	defer v.mu.Unlock()
	settings := VoiceHotkeySettings{Enabled: enabled, Shortcut: parsed.label, Supported: voiceHotkeySupported()}
	path, err := voiceSettingsPath()
	if err != nil {
		return v.settings, err
	}
	if err = writeVoiceSettings(path, settings); err != nil {
		return v.settings, err
	}
	if state := v.held.update(true, false); state != "" {
		v.emit("guildsync:voice-hotkey", map[string]string{"state": state})
	}
	v.settings = settings
	v.capture = false
	return settings, nil
}
func (a *App) SetVoiceHotkeyCapture(capture bool) {
	v := a.voiceState()
	v.mu.Lock()
	defer v.mu.Unlock()
	v.capture = capture
	if capture {
		if state := v.held.update(true, false); state != "" {
			v.emit("guildsync:voice-hotkey", map[string]string{"state": state})
		}
	}
}
func (a *App) SetVoiceHotkeyActive(active bool) error {
	v := a.voiceState()
	v.mu.Lock()
	defer v.mu.Unlock()
	v.active = active
	if !active {
		if state := v.held.update(true, false); state != "" {
			v.emit("guildsync:voice-hotkey", map[string]string{"state": state})
		}
		if v.stop != nil {
			v.stop()
			v.stop = nil
		}
		return nil
	}
	if v.stop == nil && v.settings.Supported {
		stop, err := startVoiceKeyboard(v)
		if err != nil {
			v.active = false
			return err
		}
		v.stop = stop
	}
	return nil
}
func (v *voiceRuntime) sample(down func(int) bool) {
	v.mu.Lock()
	defer v.mu.Unlock()
	shortcut, _ := parseVoiceShortcut(v.settings.Shortcut)
	held := true
	for _, key := range shortcut.keys {
		held = held && down(key)
	}
	if state := v.held.update(held, v.active && v.settings.Enabled && !v.capture); state != "" {
		v.emit("guildsync:voice-hotkey", map[string]string{"state": state})
	}
}
