package main

import (
	"bufio"
	"os"
	"path/filepath"
	"strings"
)

type GuildSyncPaths struct {
	SavedVarsDir        string                        `json:"savedVarsDir"`
	SavedVarsWatchFiles []GuildSyncSavedVarsWatchFile `json:"savedVarsWatchFiles"`
}

type GuildSyncSavedVarsWatchFile struct {
	Key      string `json:"key"`
	Label    string `json:"label"`
	FileName string `json:"fileName"`
	FilePath string `json:"filePath"`
	Enabled  bool   `json:"enabled"`
}

func findEnvFile() string {
	// Release/build behavior: check beside the executable first.
	if exePath, err := os.Executable(); err == nil {
		envPath := filepath.Join(filepath.Dir(exePath), ".env")
		if _, err := os.Stat(envPath); err == nil {
			return envPath
		}
	}

	// Development behavior: check the current working directory.
	if workingDir, err := os.Getwd(); err == nil {
		envPath := filepath.Join(workingDir, ".env")
		if _, err := os.Stat(envPath); err == nil {
			return envPath
		}
	}

	return ""
}

func loadOptionalEnvFile() {
	envPath := findEnvFile()
	if envPath == "" {
		return
	}

	file, err := os.Open(envPath)
	if err != nil {
		return
	}
	defer file.Close()

	scanner := bufio.NewScanner(file)
	for scanner.Scan() {
		line := strings.TrimSpace(scanner.Text())

		if line == "" || strings.HasPrefix(line, "#") {
			continue
		}

		equalsIndex := strings.Index(line, "=")
		if equalsIndex == -1 {
			continue
		}

		key := strings.TrimSpace(line[:equalsIndex])
		value := strings.TrimSpace(line[equalsIndex+1:])

		if key == "" {
			continue
		}

		// Allow quoted values.
		if len(value) >= 2 {
			if (strings.HasPrefix(value, `"`) && strings.HasSuffix(value, `"`)) ||
				(strings.HasPrefix(value, `'`) && strings.HasSuffix(value, `'`)) {
				value = value[1 : len(value)-1]
			}
		}

		// Do not overwrite real environment variables.
		if _, exists := os.LookupEnv(key); !exists {
			os.Setenv(key, value)
		}
	}
}

func resolvePathFromEnv(value string) string {
	value = strings.TrimSpace(value)
	if value == "" {
		return ""
	}

	homeDir, err := os.UserHomeDir()
	if err == nil {
		if value == "~" {
			return homeDir
		}

		if strings.HasPrefix(value, "~/") || strings.HasPrefix(value, `~\`) {
			return filepath.Join(homeDir, value[2:])
		}
	}

	return value
}

func getDefaultSavedVarsDir() string {
	homeDir, err := os.UserHomeDir()
	if err != nil {
		return ""
	}

	return filepath.Join(
		homeDir,
		"Documents",
		"Elder Scrolls Online",
		"live",
		"SavedVariables",
	)
}

func getSavedVarsDir() string {
	if envDir := resolvePathFromEnv(os.Getenv("SAVED_VARS_DIR")); envDir != "" {
		return envDir
	}

	return getDefaultSavedVarsDir()
}

func getSavedVarsFileNameFromEnv(envKey string, defaultFileName string) string {
	fileName := strings.TrimSpace(os.Getenv(envKey))
	if fileName == "" {
		fileName = defaultFileName
	}

	return filepath.Base(fileName)
}

func getSavedVarsWatchFiles() []GuildSyncSavedVarsWatchFile {
	dir := getSavedVarsDir()

	watchFiles := []GuildSyncSavedVarsWatchFile{
		{
			Key:      "banking",
			Label:    "Banking",
			FileName: getSavedVarsFileNameFromEnv("SAVED_VARS_BANKING_FILE_NAME", "GuildSyncBanking.lua"),
		},
		{
			Key:      "roster",
			Label:    "Roster",
			FileName: getSavedVarsFileNameFromEnv("SAVED_VARS_ROSTER_FILE_NAME", "GuildSyncRoster.lua"),
		},
	}

	settings := loadFileWatchSettings()

	for i := range watchFiles {
		watchFiles[i].FilePath = filepath.Join(dir, watchFiles[i].FileName)
		watchFiles[i].Enabled = !settings.DisabledFiles[strings.ToLower(strings.TrimSpace(watchFiles[i].Key))]
	}

	return watchFiles
}

func getSavedVarsWatchFileByKey(key string) GuildSyncSavedVarsWatchFile {
	cleanKey := strings.ToLower(strings.TrimSpace(key))

	for _, watchFile := range getSavedVarsWatchFiles() {
		if strings.ToLower(strings.TrimSpace(watchFile.Key)) == cleanKey {
			return watchFile
		}
	}

	return GuildSyncSavedVarsWatchFile{}
}

func (a *App) GetResolvedPaths() GuildSyncPaths {
	return GuildSyncPaths{
		SavedVarsDir:        getSavedVarsDir(),
		SavedVarsWatchFiles: getSavedVarsWatchFiles(),
	}
}
