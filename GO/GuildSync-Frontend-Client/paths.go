package main

import (
	"bufio"
	"os"
	"path/filepath"
	"strings"
)

type GuildSyncPaths struct {
	SavedVarsDir string `json:"savedVarsDir"`
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

func getSavedVarsFilePath(fileName string) string {
	return filepath.Join(getSavedVarsDir(), fileName)
}

func (a *App) GetResolvedPaths() GuildSyncPaths {
	return GuildSyncPaths{
		SavedVarsDir: getSavedVarsDir(),
	}
}
