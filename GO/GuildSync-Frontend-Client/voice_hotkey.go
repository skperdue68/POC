package main

import (
	"encoding/json"
	"fmt"
	"github.com/wailsapp/wails/v2/pkg/runtime"
	"os"
	"path/filepath"
	"sort"
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
	result := voiceShortcut{}
	codes := map[string]int{"CTRL": 17, "ALT": 18, "SHIFT": 16, "SPACE": 32, "TAB": 9, "ENTER": 13, "BACKSPACE": 8, "DELETE": 46, "INSERT": 45, "HOME": 36, "END": 35, "PAGEUP": 33, "PAGEDOWN": 34, "LEFT": 37, "UP": 38, "RIGHT": 39, "DOWN": 40}
	labels := map[string]string{"CTRL": "Ctrl", "ALT": "Alt", "SHIFT": "Shift", "SPACE": "Space", "TAB": "Tab", "ENTER": "Enter", "BACKSPACE": "Backspace", "DELETE": "Delete", "INSERT": "Insert", "HOME": "Home", "END": "End", "PAGEUP": "PageUp", "PAGEDOWN": "PageDown", "LEFT": "Left", "UP": "Up", "RIGHT": "Right", "DOWN": "Down"}
	seen := map[string]bool{}
	for _, part := range strings.Split(strings.ToUpper(strings.TrimSpace(input)), "+") {
		key := strings.TrimSpace(part)
		if seen[key] {
			return result, fmt.Errorf("duplicate shortcut key")
		}
		seen[key] = true
		code := codes[key]
		if len(key) == 1 && ((key[0] >= 'A' && key[0] <= 'Z') || (key[0] >= '0' && key[0] <= '9')) {
			code = int(key[0])
		}
		for n := 1; n <= 12; n++ {
			if key == fmt.Sprintf("F%d", n) {
				code = 111 + n
			}
		}
		if code == 0 {
			return result, fmt.Errorf("use one or more letters, numbers, F1–F12, Ctrl, Alt, Shift, or supported navigation keys")
		}
		result.keys = append(result.keys, code)
	}
	if ((seen["ALT"] || seen["CTRL"]) && seen["F4"]) || (seen["ALT"] && seen["TAB"]) || (seen["CTRL"] && seen["ALT"] && seen["DELETE"]) {
		return result, fmt.Errorf("reserved system shortcut")
	}
	order := func(code int) int {
		switch code {
		case 17:
			return -3
		case 18:
			return -2
		case 16:
			return -1
		}
		return code
	}
	sort.Slice(result.keys, func(i, j int) bool { return order(result.keys[i]) < order(result.keys[j]) })
	canonical := []string{}
	for _, code := range result.keys {
		label := ""
		for key, value := range codes {
			if value == code {
				label = labels[key]
			}
		}
		if label == "" {
			if code >= 112 {
				label = fmt.Sprintf("F%d", code-111)
			} else {
				label = string(rune(code))
			}
		}
		canonical = append(canonical, label)
	}
	result.label = strings.Join(canonical, "+")
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
