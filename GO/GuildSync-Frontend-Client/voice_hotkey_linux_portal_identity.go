//go:build linux

package main

import (
	"context"
	"errors"
	"fmt"
	"os"
	"path/filepath"
	"strings"

	"github.com/godbus/dbus/v5"
)

const voicePortalAppID = "me.perdues.guildsync"

func registerVoicePortal(ctx context.Context, conn *dbus.Conn) error {
	// Sandboxes already supply an application identity and reject Registry.
	if _, err := os.Stat("/.flatpak-info"); err == nil {
		return nil
	}
	if os.Getenv("SNAP") != "" {
		return nil
	}
	if err := ensureVoicePortalDesktopFile(); err != nil {
		return err
	}
	err := conn.Object(voicePortalService, voicePortalPath).CallWithContext(ctx, "org.freedesktop.host.portal.Registry.Register", 0, voicePortalAppID, map[string]dbus.Variant{}).Err
	if voicePortalRegistryUnavailable(err) {
		return nil
	} // compatibility with older portals
	if err != nil {
		return fmt.Errorf("register GuildSync desktop identity: %w", err)
	}
	return nil
}

func voicePortalRegistryUnavailable(err error) bool {
	var busError dbus.Error
	if errors.As(err, &busError) {
		return busError.Name == "org.freedesktop.DBus.Error.UnknownMethod" || busError.Name == "org.freedesktop.DBus.Error.UnknownInterface"
	}
	var busErrorPointer *dbus.Error
	if errors.As(err, &busErrorPointer) {
		return busErrorPointer.Name == "org.freedesktop.DBus.Error.UnknownMethod" || busErrorPointer.Name == "org.freedesktop.DBus.Error.UnknownInterface"
	}
	return false
}

func voicePortalDesktopEntry(executable string) (string, error) {
	if strings.ContainsAny(executable, "=\r\n\t\x00") {
		return "", fmt.Errorf("executable path cannot be represented in a desktop entry")
	}
	// Desktop entries parse backslash escapes before parsing Exec quoting.
	// Percent is a field-code marker even inside a quoted executable.
	escaped := strings.NewReplacer("\\", "\\\\\\\\", "\"", "\\\\\"", "`", "\\\\`", "$", "\\\\$", "%", "%%").Replace(executable)
	return "[Desktop Entry]\nType=Application\nName=GuildSync\nExec=\"" + escaped + "\"\nNoDisplay=true\nTerminal=false\nX-GuildSync-Portal-Identity=true\n", nil
}

func ensureVoicePortalDesktopFile() error {
	dataHome := os.Getenv("XDG_DATA_HOME")
	if dataHome == "" || !filepath.IsAbs(dataHome) {
		home, err := os.UserHomeDir()
		if err != nil {
			return err
		}
		dataHome = filepath.Join(home, ".local", "share")
	}
	path := filepath.Join(dataHome, "applications", voicePortalAppID+".desktop")
	data, err := os.ReadFile(path)
	if err == nil && !strings.Contains(string(data), "X-GuildSync-Portal-Identity=true") {
		return nil
	}
	if err != nil && !errors.Is(err, os.ErrNotExist) {
		return err
	}
	executable, err := os.Executable()
	if err != nil {
		return err
	}
	entry, err := voicePortalDesktopEntry(executable)
	if err != nil {
		return err
	}
	if string(data) == entry {
		return nil
	}
	if err := os.MkdirAll(filepath.Dir(path), 0755); err != nil {
		return fmt.Errorf("create desktop identity directory: %w", err)
	}
	if err := os.WriteFile(path, []byte(entry), 0644); err != nil {
		return fmt.Errorf("save GuildSync desktop identity: %w", err)
	}
	return nil
}
