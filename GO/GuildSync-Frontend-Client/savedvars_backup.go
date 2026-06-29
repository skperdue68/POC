package main

import (
	"fmt"
	"os"
	"path/filepath"
	"strings"
	"time"
)

// createGuildSyncSavedVarsBackup writes a backup copy under a GuildSyncBackups
// directory next to the ESO SavedVariables file. Each SavedVariables file gets
// its own subdirectory so backups stay organized, for example:
//
//	SavedVariables/GuildSyncBackups/GuildSyncBanking/GuildSyncBanking.lua.backup-1780000000000
//
// The backup directory is created when needed.
func createGuildSyncSavedVarsBackup(filePath string, originalBytes []byte) (string, error) {
	fileName := filepath.Base(filePath)
	backupFolderName := strings.TrimSuffix(fileName, filepath.Ext(fileName))
	if backupFolderName == "" || backupFolderName == "." {
		backupFolderName = "SavedVariables"
	}

	backupDir := filepath.Join(filepath.Dir(filePath), "GuildSyncBackups", backupFolderName)
	if err := os.MkdirAll(backupDir, 0755); err != nil {
		return "", fmt.Errorf("backup directory could not be created: %w", err)
	}

	backupPath := filepath.Join(backupDir, fmt.Sprintf("%s.backup-%d", fileName, time.Now().UnixMilli()))
	if err := os.WriteFile(backupPath, originalBytes, 0644); err != nil {
		return "", err
	}

	return backupPath, nil
}
