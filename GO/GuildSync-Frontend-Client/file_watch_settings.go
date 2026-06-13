package main

import (
	"encoding/json"
	"os"
	"path/filepath"
	"strings"
)

type GuildSyncFileWatchSettings struct {
	DisabledFiles map[string]bool `json:"disabled_files"`
}

func defaultFileWatchSettings() GuildSyncFileWatchSettings {
	return GuildSyncFileWatchSettings{DisabledFiles: map[string]bool{}}
}

func getFileWatchSettingsPath() (string, error) {
	configDir, err := os.UserConfigDir()
	if err != nil {
		return "", err
	}

	return filepath.Join(configDir, "GuildSync", "file-watch-settings.json"), nil
}

func loadFileWatchSettings() GuildSyncFileWatchSettings {
	settings := defaultFileWatchSettings()

	path, err := getFileWatchSettingsPath()
	if err != nil {
		return settings
	}

	data, err := os.ReadFile(path)
	if err != nil {
		return settings
	}

	if err := json.Unmarshal(data, &settings); err != nil {
		return defaultFileWatchSettings()
	}

	if settings.DisabledFiles == nil {
		settings.DisabledFiles = map[string]bool{}
	}

	cleanDisabled := map[string]bool{}
	for key, disabled := range settings.DisabledFiles {
		cleanKey := strings.ToLower(strings.TrimSpace(key))
		if cleanKey != "" && disabled {
			cleanDisabled[cleanKey] = true
		}
	}
	settings.DisabledFiles = cleanDisabled

	return settings
}

func saveFileWatchSettings(settings GuildSyncFileWatchSettings) error {
	if settings.DisabledFiles == nil {
		settings.DisabledFiles = map[string]bool{}
	}

	path, err := getFileWatchSettingsPath()
	if err != nil {
		return err
	}

	if err := os.MkdirAll(filepath.Dir(path), 0755); err != nil {
		return err
	}

	data, err := json.MarshalIndent(settings, "", "  ")
	if err != nil {
		return err
	}

	return os.WriteFile(path, data, 0644)
}

func filterEnabledSavedVarsWatchFiles(watchFiles []GuildSyncSavedVarsWatchFile) []GuildSyncSavedVarsWatchFile {
	enabled := make([]GuildSyncSavedVarsWatchFile, 0, len(watchFiles))
	for _, watchFile := range watchFiles {
		if watchFile.Enabled {
			enabled = append(enabled, watchFile)
		}
	}
	return enabled
}
