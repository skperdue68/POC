//go:build linux

package main

import (
	"context"
	"fmt"
	"os"
	"strings"
	"sync/atomic"
	"time"

	"github.com/godbus/dbus/v5"
)

const voicePortalService = "org.freedesktop.portal.Desktop"
const voicePortalInterface = "org.freedesktop.portal.GlobalShortcuts"
const voicePortalPath = dbus.ObjectPath("/org/freedesktop/portal/desktop")

var voicePortalSequence atomic.Uint64

func voiceUsesWayland(sessionType, waylandDisplay string) bool {
	return strings.EqualFold(strings.TrimSpace(sessionType), "wayland") || waylandDisplay != ""
}

func voiceHotkeySupported() bool {
	return voiceUsesWayland(os.Getenv("XDG_SESSION_TYPE"), os.Getenv("WAYLAND_DISPLAY")) || (os.Getenv("DISPLAY") != "" && voiceX11Supported())
}

func startVoiceKeyboard(v *voiceRuntime) (func(), error) {
	if voiceUsesWayland(os.Getenv("XDG_SESSION_TYPE"), os.Getenv("WAYLAND_DISPLAY")) {
		shortcut, err := parseVoiceShortcut(v.settings.Shortcut) // caller owns v.mu
		if err != nil {
			return nil, err
		}
		trigger, err := voicePortalTrigger(shortcut.keys)
		if err != nil {
			return nil, err
		}
		generation := v.keyboardGeneration
		ctx, cancel := context.WithCancel(context.Background())
		go func() {
			if err := runVoicePortal(ctx, v, generation, trigger); err != nil && ctx.Err() == nil {
				v.keyboardError(generation, fmt.Errorf("Wayland global shortcut: %w", err))
			}
		}()
		return cancel, nil
	}
	return startVoiceX11(v)
}

// XDG Shortcuts uses CTRL+ALT+a rather than GTK accelerator syntax. The
// portal accepts one ordinary key and modifiers, not arbitrary key chords.
func voicePortalTrigger(keys []int) (string, error) {
	modifiers := map[int]bool{}
	key := ""
	for _, code := range keys {
		if code == 17 || code == 18 || code == 16 {
			modifiers[code] = true
			continue
		}
		if key != "" {
			return "", fmt.Errorf("Wayland supports Ctrl, Alt, Shift and one other key; choose a supported shortcut")
		}
		names := voiceLinuxKeyNames(code)
		if len(names) == 0 {
			return "", fmt.Errorf("unsupported shortcut key %d", code)
		}
		key = names[0]
	}
	if key == "" {
		return "", fmt.Errorf("Wayland shortcuts require a key in addition to Ctrl, Alt or Shift")
	}
	parts := []string{}
	for _, modifier := range []struct {
		code int
		name string
	}{{17, "CTRL"}, {18, "ALT"}, {16, "SHIFT"}} {
		if modifiers[modifier.code] {
			parts = append(parts, modifier.name)
		}
	}
	return strings.Join(append(parts, key), "+"), nil
}

func voiceLinuxKeyNames(code int) []string {
	if code >= 'A' && code <= 'Z' {
		return []string{string(rune(code + ('a' - 'A')))}
	}
	if code >= '0' && code <= '9' {
		return []string{string(rune(code))}
	}
	if code >= 112 && code <= 123 {
		return []string{fmt.Sprintf("F%d", code-111)}
	}
	return map[int][]string{
		17: {"Control_L", "Control_R"}, 18: {"Alt_L", "Alt_R", "ISO_Level3_Shift"}, 16: {"Shift_L", "Shift_R"},
		32: {"space"}, 9: {"Tab", "ISO_Left_Tab"}, 13: {"Return", "KP_Enter"}, 8: {"BackSpace"}, 46: {"Delete", "KP_Delete"},
		45: {"Insert", "KP_Insert"}, 36: {"Home", "KP_Home"}, 35: {"End", "KP_End"}, 33: {"Prior", "KP_Prior"}, 34: {"Next", "KP_Next"},
		37: {"Left", "KP_Left"}, 38: {"Up", "KP_Up"}, 39: {"Right", "KP_Right"}, 40: {"Down", "KP_Down"},
	}[code]
}

type voicePortalShortcut struct {
	ID      string
	Options map[string]dbus.Variant
}

func voicePortalToken() string {
	return fmt.Sprintf("guildsync_%d_%d", os.Getpid(), voicePortalSequence.Add(1))
}

func runVoicePortal(ctx context.Context, v *voiceRuntime, generation uint64, trigger string) error {
	conn, err := dbus.ConnectSessionBus()
	if err != nil {
		return fmt.Errorf("connect to desktop session bus: %w", err)
	}
	defer conn.Close()
	setupCtx, setupCancel := context.WithTimeout(ctx, 10*time.Second)
	defer setupCancel()
	if err := registerVoicePortal(setupCtx, conn); err != nil {
		return err
	}
	var version dbus.Variant
	err = conn.Object(voicePortalService, voicePortalPath).CallWithContext(setupCtx, "org.freedesktop.DBus.Properties.Get", 0, voicePortalInterface, "version").Store(&version)
	if err != nil {
		return fmt.Errorf("desktop does not provide the GlobalShortcuts portal: %w", err)
	}
	if n, ok := version.Value().(uint32); !ok || n < 1 {
		return fmt.Errorf("desktop GlobalShortcuts portal is unavailable")
	}
	// One private connection owns this session and all of its signal rules.
	signals := make(chan *dbus.Signal, 128)
	conn.Signal(signals)
	defer conn.RemoveSignal(signals)
	if err = conn.AddMatchSignalContext(setupCtx, dbus.WithMatchSender(voicePortalService), dbus.WithMatchInterface("org.freedesktop.portal.Request"), dbus.WithMatchMember("Response")); err != nil {
		return err
	}
	if err = conn.AddMatchSignalContext(setupCtx, dbus.WithMatchSender(voicePortalService), dbus.WithMatchInterface(voicePortalInterface)); err != nil {
		return err
	}
	if err = conn.AddMatchSignalContext(setupCtx, dbus.WithMatchSender(voicePortalService), dbus.WithMatchInterface("org.freedesktop.portal.Session"), dbus.WithMatchMember("Closed")); err != nil {
		return err
	}
	if err = conn.AddMatchSignalContext(setupCtx, dbus.WithMatchSender("org.freedesktop.DBus"), dbus.WithMatchInterface("org.freedesktop.DBus"), dbus.WithMatchMember("NameOwnerChanged"), dbus.WithMatchArg(0, voicePortalService)); err != nil {
		return err
	}
	// Tokens let us subscribe before making a request, avoiding fast-response races.
	sender := strings.ReplaceAll(strings.TrimPrefix(conn.Names()[0], ":"), ".", "_")
	sessionToken := voicePortalToken()
	session := dbus.ObjectPath("/org/freedesktop/portal/desktop/session/" + sender + "/" + sessionToken)
	defer func() {
		closeCtx, cancel := context.WithTimeout(context.Background(), 2*time.Second)
		defer cancel()
		_ = conn.Object(voicePortalService, session).CallWithContext(closeCtx, "org.freedesktop.portal.Session.Close", 0).Err
	}()
	results, err := voicePortalRequest(ctx, conn, signals, sender, "CreateSession", func(token string) []interface{} {
		return []interface{}{map[string]dbus.Variant{"handle_token": dbus.MakeVariant(token), "session_handle_token": dbus.MakeVariant(sessionToken)}}
	})
	if err != nil {
		return err
	}
	value, exists := results["session_handle"]
	if !exists {
		return fmt.Errorf("portal did not return a session")
	}
	path, ok := value.Value().(string)
	if !ok || !dbus.ObjectPath(path).IsValid() {
		return fmt.Errorf("portal returned an invalid session")
	}
	session = dbus.ObjectPath(path)
	results, err = voicePortalRequest(ctx, conn, signals, sender, "BindShortcuts", func(token string) []interface{} {
		return []interface{}{session, []voicePortalShortcut{{"voice-mute", map[string]dbus.Variant{"description": dbus.MakeVariant("Hold to mute GuildSync voice"), "preferred_trigger": dbus.MakeVariant(trigger)}}}, "", map[string]dbus.Variant{"handle_token": dbus.MakeVariant(token)}}
	})
	if err != nil {
		return err
	}
	var bound []voicePortalShortcut
	if value, ok := results["shortcuts"]; !ok {
		return fmt.Errorf("desktop did not grant a shortcut")
	} else if err := dbus.Store([]interface{}{value.Value()}, &bound); err != nil {
		return fmt.Errorf("invalid portal shortcut response: %w", err)
	}
	found := false
	for _, item := range bound {
		found = found || item.ID == "voice-mute"
		if item.ID == "voice-mute" {
			voicePortalConfigured(v, generation, item.Options)
		}
	}
	if !found {
		return fmt.Errorf("desktop did not grant the voice shortcut")
	}
	ticker := time.NewTicker(25 * time.Millisecond)
	defer ticker.Stop()
	pressed := false
	for {
		select {
		case <-ctx.Done():
			return nil
		case <-conn.Context().Done():
			return fmt.Errorf("desktop session bus disconnected")
		case <-ticker.C:
		case signal, ok := <-signals:
			if !ok || signal == nil {
				return fmt.Errorf("desktop session bus disconnected")
			}
			if voicePortalOwnerLost(signal) {
				return fmt.Errorf("desktop shortcut service stopped; enable the shortcut again to reconnect")
			}
			if signal.Path == session && signal.Name == "org.freedesktop.portal.Session.Closed" {
				return fmt.Errorf("desktop closed the shortcut session; enable it again to reconnect")
			}
			if signal.Name == voicePortalInterface+".ShortcutsChanged" && len(signal.Body) == 2 && signal.Body[0] == session {
				var changed []voicePortalShortcut
				if err := dbus.Store(signal.Body[1:], &changed); err == nil {
					for _, item := range changed {
						if item.ID == "voice-mute" {
							voicePortalConfigured(v, generation, item.Options)
						}
					}
				}
				continue
			}
			if len(signal.Body) < 2 {
				continue
			}
			path, pathOK := signal.Body[0].(dbus.ObjectPath)
			id, idOK := signal.Body[1].(string)
			if !pathOK || !idOK || path != session || id != "voice-mute" {
				continue
			}
			switch signal.Name {
			case voicePortalInterface + ".Activated":
				pressed = true
			case voicePortalInterface + ".Deactivated":
				pressed = false
			default:
				continue
			}
		}
		v.sampleKeyboard(generation, func(int) bool { return pressed })
	}
}

func voicePortalOwnerLost(signal *dbus.Signal) bool {
	if signal == nil || signal.Name != "org.freedesktop.DBus.NameOwnerChanged" || len(signal.Body) != 3 {
		return false
	}
	name, _ := signal.Body[0].(string)
	oldOwner, _ := signal.Body[1].(string)
	newOwner, _ := signal.Body[2].(string)
	return name == voicePortalService && oldOwner != "" && oldOwner != newOwner
}

func voicePortalConfigured(v *voiceRuntime, generation uint64, options map[string]dbus.Variant) {
	description, _ := options["trigger_description"].Value().(string)
	if description == "" {
		return
	}
	v.mu.Lock()
	defer v.mu.Unlock()
	if generation != v.keyboardGeneration || !v.active {
		return
	}
	v.emit("guildsync:voice-hotkey", map[string]string{"state": "configured", "message": "Wayland shortcut: " + description})
}

func voicePortalRequest(ctx context.Context, conn *dbus.Conn, signals <-chan *dbus.Signal, sender, method string, arguments func(string) []interface{}) (map[string]dbus.Variant, error) {
	token := voicePortalToken()
	request := dbus.ObjectPath("/org/freedesktop/portal/desktop/request/" + sender + "/" + token)
	requestCtx, cancel := context.WithTimeout(ctx, 2*time.Minute)
	defer cancel()
	defer func() {
		closeCtx, closeCancel := context.WithTimeout(context.Background(), 2*time.Second)
		defer closeCancel()
		_ = conn.Object(voicePortalService, request).CallWithContext(closeCtx, "org.freedesktop.portal.Request.Close", 0).Err
	}()
	if err := conn.Object(voicePortalService, voicePortalPath).CallWithContext(requestCtx, voicePortalInterface+"."+method, 0, arguments(token)...).Store(&request); err != nil {
		return nil, fmt.Errorf("%s: %w", method, err)
	}
	return waitVoicePortalResponse(requestCtx, signals, request, method)
}

func waitVoicePortalResponse(ctx context.Context, signals <-chan *dbus.Signal, request dbus.ObjectPath, method string) (map[string]dbus.Variant, error) {
	for {
		select {
		case <-ctx.Done():
			return nil, fmt.Errorf("%s: %w", method, ctx.Err())
		case signal, ok := <-signals:
			if !ok || signal == nil {
				return nil, fmt.Errorf("desktop session bus disconnected")
			}
			if voicePortalOwnerLost(signal) {
				return nil, fmt.Errorf("desktop shortcut service stopped")
			}
			if signal.Path != request || signal.Name != "org.freedesktop.portal.Request.Response" {
				continue
			}
			var response uint32
			var results map[string]dbus.Variant
			if err := dbus.Store(signal.Body, &response, &results); err != nil {
				return nil, err
			}
			if response == 1 {
				return nil, fmt.Errorf("shortcut permission was cancelled")
			}
			if response != 0 {
				return nil, fmt.Errorf("desktop denied the shortcut request (response %d)", response)
			}
			return results, nil
		}
	}
}
