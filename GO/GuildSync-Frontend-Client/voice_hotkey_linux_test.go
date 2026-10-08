//go:build linux

package main

import (
	"context"
	"errors"
	"os"
	"path/filepath"
	"reflect"
	"strings"
	"testing"

	"github.com/godbus/dbus/v5"
)

func TestVoiceWaylandSelectionDoesNotUseXWayland(t *testing.T) {
	for _, test := range []struct {
		session, display string
		want             bool
	}{
		{"wayland", "", true}, {"x11", "wayland-0", true}, {"Wayland", "", true}, {"x11", "", false}, {"", "", false},
	} {
		if got := voiceUsesWayland(test.session, test.display); got != test.want {
			t.Errorf("session %q display %q: got %v", test.session, test.display, got)
		}
	}
}

func TestVoicePortalIdentityRegistryErrors(t *testing.T) {
	for _, name := range []string{"org.freedesktop.DBus.Error.UnknownMethod", "org.freedesktop.DBus.Error.UnknownInterface"} {
		if !voicePortalRegistryUnavailable(dbus.Error{Name: name}) || !voicePortalRegistryUnavailable(&dbus.Error{Name: name}) {
			t.Errorf("older portal error %s rejected", name)
		}
	}
	for _, err := range []error{nil, context.Canceled, dbus.Error{Name: "org.freedesktop.DBus.Error.AccessDenied"}, dbus.Error{Name: "org.freedesktop.portal.Error.NotAllowed"}} {
		if voicePortalRegistryUnavailable(err) {
			t.Errorf("genuine error %v ignored", err)
		}
	}
}

func TestVoicePortalDesktopEntryEscapesExecutableAndPreservesLauncher(t *testing.T) {
	entry, err := voicePortalDesktopEntry("/opt/Guild Sync/a\\b\"c$d`e%f")
	if err != nil {
		t.Fatal(err)
	}
	if !strings.Contains(entry, `Exec="/opt/Guild Sync/a\\\\b\\"c\\$d\\`+"`"+`e%%f"`) || !strings.Contains(entry, "NoDisplay=true\n") {
		t.Fatalf("unsafe desktop entry: %q", entry)
	}
	if _, err := voicePortalDesktopEntry("/opt/a\nb"); err == nil {
		t.Fatal("newline executable accepted")
	}
	dataHome := t.TempDir()
	t.Setenv("XDG_DATA_HOME", dataHome)
	if err := ensureVoicePortalDesktopFile(); err != nil {
		t.Fatal(err)
	}
	path := filepath.Join(dataHome, "applications", voicePortalAppID+".desktop")
	data, err := os.ReadFile(path)
	if err != nil || !strings.Contains(string(data), "Name=GuildSync") {
		t.Fatalf("missing identity: %s, %v", data, err)
	}
	custom := "[Desktop Entry]\nName=Installed GuildSync\n"
	if err := os.WriteFile(path, []byte(custom), 0644); err != nil {
		t.Fatal(err)
	}
	if err := ensureVoicePortalDesktopFile(); err != nil {
		t.Fatal(err)
	}
	data, err = os.ReadFile(path)
	if err != nil || string(data) != custom {
		t.Fatalf("installed launcher overwritten: %q %v", data, err)
	}
}

func TestVoicePortalServiceLoss(t *testing.T) {
	for _, test := range []struct {
		name, old, next string
		want            bool
	}{{voicePortalService, ":1.1", "", true}, {voicePortalService, ":1.1", ":1.2", true}, {voicePortalService, "", ":1.1", false}, {"another.service", ":1.1", "", false}} {
		signal := &dbus.Signal{Name: "org.freedesktop.DBus.NameOwnerChanged", Body: []interface{}{test.name, test.old, test.next}}
		if got := voicePortalOwnerLost(signal); got != test.want {
			t.Fatalf("owner change %#v: got %v", test, got)
		}
	}
}

func TestVoicePortalResponseConsentAndCancellation(t *testing.T) {
	request := dbus.ObjectPath("/test/request")
	for _, test := range []struct {
		response  uint32
		wantError string
	}{{0, ""}, {1, "cancelled"}, {2, "denied"}} {
		signals := make(chan *dbus.Signal, 2)
		signals <- &dbus.Signal{Path: "/another/request", Name: "org.freedesktop.portal.Request.Response", Body: []interface{}{uint32(2), map[string]dbus.Variant{}}}
		signals <- &dbus.Signal{Path: request, Name: "org.freedesktop.portal.Request.Response", Body: []interface{}{test.response, map[string]dbus.Variant{"session_handle": dbus.MakeVariant("/session")}}}
		results, err := waitVoicePortalResponse(context.Background(), signals, request, "CreateSession")
		if test.wantError == "" {
			if err != nil || results["session_handle"].Value() != "/session" {
				t.Fatalf("consent result %v, %v", results, err)
			}
		} else if err == nil || !strings.Contains(err.Error(), test.wantError) {
			t.Fatalf("response %d: got %v", test.response, err)
		}
	}
	ctx, cancel := context.WithCancel(context.Background())
	cancel()
	if _, err := waitVoicePortalResponse(ctx, make(chan *dbus.Signal), request, "BindShortcuts"); !errors.Is(err, context.Canceled) {
		t.Fatalf("cancelled request: %v", err)
	}
	signals := make(chan *dbus.Signal)
	close(signals)
	if _, err := waitVoicePortalResponse(context.Background(), signals, request, "BindShortcuts"); err == nil {
		t.Fatal("bus disconnect did not fail")
	}
}

func TestVoicePortalConfiguredIgnoresStoppedSession(t *testing.T) {
	events := []string{}
	v := &voiceRuntime{active: true, keyboardGeneration: 3, emit: func(_ string, data interface{}) { events = append(events, data.(map[string]string)["message"]) }}
	options := map[string]dbus.Variant{"trigger_description": dbus.MakeVariant("Ctrl+N")}
	voicePortalConfigured(v, 2, options)
	if len(events) != 0 {
		t.Fatal("stale session updated shortcut status")
	}
	voicePortalConfigured(v, 3, options)
	if len(events) != 1 || events[0] != "Wayland shortcut: Ctrl+N" {
		t.Fatal(events)
	}
	v.active = false
	voicePortalConfigured(v, 3, options)
	if len(events) != 1 {
		t.Fatal("inactive listener updated shortcut status")
	}
}

func TestVoicePortalTriggerUsesXDGNames(t *testing.T) {
	for _, test := range []struct {
		keys []int
		want string
	}{
		{[]int{17, 18, 16, 77}, "CTRL+ALT+SHIFT+m"}, {[]int{123}, "F12"}, {[]int{17, 13}, "CTRL+Return"}, {[]int{18, 33}, "ALT+Prior"}, {[]int{32}, "space"}, {[]int{49}, "1"},
	} {
		got, err := voicePortalTrigger(test.keys)
		if err != nil || got != test.want {
			t.Errorf("keys %v: got %q, %v; want %q", test.keys, got, err, test.want)
		}
	}
	for _, keys := range [][]int{nil, {17}, {17, 18}, {65, 66}, {17, 999}} {
		if _, err := voicePortalTrigger(keys); err == nil {
			t.Errorf("unsupported chord %v accepted", keys)
		}
	}
}

func TestVoiceLinuxMappingCoversShortcutParser(t *testing.T) {
	for _, shortcut := range []string{"Ctrl+Alt+Shift", "Space+Tab+Enter+Backspace+Delete+Insert+Home+End+PageUp+PageDown+Left+Up+Right+Down", "A+Z+0+9+F1+F12"} {
		parsed, err := parseVoiceShortcut(shortcut)
		if err != nil {
			t.Fatal(err)
		}
		for _, code := range parsed.keys {
			if len(voiceLinuxKeyNames(code)) == 0 {
				t.Errorf("missing X11 mapping for key %d", code)
			}
		}
	}
	if got := voiceLinuxKeyNames(17); !reflect.DeepEqual(got, []string{"Control_L", "Control_R"}) {
		t.Errorf("Ctrl mapping: %v", got)
	}
}

func TestVoicePortalShortcutDBusWireFormat(t *testing.T) {
	shortcuts := []voicePortalShortcut{{"voice-mute", map[string]dbus.Variant{"preferred_trigger": dbus.MakeVariant("CTRL+m")}}}
	if got := dbus.SignatureOf(shortcuts).String(); got != "a(sa{sv})" {
		t.Fatalf("portal shortcut signature %s", got)
	}
	var decoded []voicePortalShortcut
	// D-Bus decodes structs inside arrays as slices of interfaces.
	wire := [][]interface{}{{"voice-mute", map[string]dbus.Variant{"description": dbus.MakeVariant("Voice mute")}}}
	if err := dbus.Store([]interface{}{wire}, &decoded); err != nil {
		t.Fatal(err)
	}
	if len(decoded) != 1 || decoded[0].ID != "voice-mute" {
		t.Fatalf("invalid decoded shortcut: %#v", decoded)
	}
}
