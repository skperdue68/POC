package main

import (
	"context"
	"fmt"
	"os"
	"path/filepath"
	"sort"
	"strings"
	"time"

	"github.com/fsnotify/fsnotify"
	"github.com/wailsapp/wails/v2/pkg/runtime"
)

const savedVarsFileDebounceWindow = 750 * time.Millisecond

type GuildSyncFileWatcherStatus struct {
	Watching  bool                          `json:"watching"`
	Directory string                        `json:"directory"`
	Files     []GuildSyncSavedVarsWatchFile `json:"files"`
	Message   string                        `json:"message"`
}

type GuildSyncSavedVarsFileModifiedEvent struct {
	Key        string `json:"key"`
	Label      string `json:"label"`
	Directory  string `json:"directory"`
	FileName   string `json:"fileName"`
	FilePath   string `json:"filePath"`
	ModifiedAt string `json:"modifiedAt"`
}

// StartGuildSyncFileWatcher starts watching the resolved ESO SavedVariables directory
// for the configured GuildSync saved variables files. The frontend only calls this
// after the user is authenticated.
func (a *App) StartGuildSyncFileWatcher() GuildSyncFileWatcherStatus {
	if a.ctx == nil {
		return GuildSyncFileWatcherStatus{
			Watching: false,
			Message:  "GuildSync is not ready to start the file watcher.",
		}
	}

	dir := getSavedVarsDir()
	allWatchFiles := getSavedVarsWatchFiles()
	watchFiles := filterEnabledSavedVarsWatchFiles(allWatchFiles)
	signature := savedVarsWatchFilesSignature(dir, watchFiles)

	if strings.TrimSpace(dir) == "" {
		return GuildSyncFileWatcherStatus{
			Watching: false,
			Files:    allWatchFiles,
			Message:  "SavedVariables directory could not be resolved.",
		}
	}

	info, err := os.Stat(dir)
	if err != nil {
		return GuildSyncFileWatcherStatus{
			Watching:  false,
			Directory: dir,
			Files:     allWatchFiles,
			Message:   fmt.Sprintf("SavedVariables directory was not found: %s", dir),
		}
	}

	if !info.IsDir() {
		return GuildSyncFileWatcherStatus{
			Watching:  false,
			Directory: dir,
			Files:     allWatchFiles,
			Message:   fmt.Sprintf("SavedVariables path is not a directory: %s", dir),
		}
	}

	if len(allWatchFiles) == 0 {
		return GuildSyncFileWatcherStatus{
			Watching:  false,
			Directory: dir,
			Files:     allWatchFiles,
			Message:   "No SavedVariables files are configured to watch.",
		}
	}

	if len(watchFiles) == 0 {
		return GuildSyncFileWatcherStatus{
			Watching:  false,
			Directory: dir,
			Files:     allWatchFiles,
			Message:   "All SavedVariables file watchers are turned off.",
		}
	}

	a.fileWatcherMu.Lock()
	if a.fileWatcherCancel != nil && a.fileWatcherRunning && a.fileWatcherSignature == signature {
		a.fileWatcherMu.Unlock()
		return GuildSyncFileWatcherStatus{
			Watching:  true,
			Directory: dir,
			Files:     allWatchFiles,
			Message:   formatSavedVarsWatcherMessage(watchFiles),
		}
	}

	if a.fileWatcherCancel != nil {
		a.fileWatcherCancel()
		a.fileWatcherCancel = nil
		a.fileWatcherRunning = false
		a.fileWatcherSignature = ""
	}

	watchCtx, cancel := context.WithCancel(a.ctx)
	a.fileWatcherCancel = cancel
	a.fileWatcherRunning = true
	a.fileWatcherSignature = signature
	a.fileWatcherMu.Unlock()

	go a.runGuildSyncFileWatcher(watchCtx, dir, watchFiles, signature)

	return GuildSyncFileWatcherStatus{
		Watching:  true,
		Directory: dir,
		Files:     allWatchFiles,
		Message:   formatSavedVarsWatcherMessage(watchFiles),
	}
}

func (a *App) GetGuildSyncFileWatcherStatus() GuildSyncFileWatcherStatus {
	dir := getSavedVarsDir()
	allWatchFiles := getSavedVarsWatchFiles()

	a.fileWatcherMu.Lock()
	watching := a.fileWatcherRunning && a.fileWatcherCancel != nil
	a.fileWatcherMu.Unlock()

	watchFiles := filterEnabledSavedVarsWatchFiles(allWatchFiles)
	message := "GuildSync file watcher is stopped."
	if watching {
		message = formatSavedVarsWatcherMessage(watchFiles)
	} else if len(watchFiles) == 0 {
		message = "All SavedVariables file watchers are turned off."
	}

	return GuildSyncFileWatcherStatus{
		Watching:  watching,
		Directory: dir,
		Files:     allWatchFiles,
		Message:   message,
	}
}

func (a *App) SetGuildSyncSavedVarsWatchFileEnabled(key string, enabled bool) GuildSyncFileWatcherStatus {
	cleanKey := strings.ToLower(strings.TrimSpace(key))
	if cleanKey == "" {
		return a.GetGuildSyncFileWatcherStatus()
	}

	found := false
	for _, watchFile := range getSavedVarsWatchFiles() {
		if strings.ToLower(strings.TrimSpace(watchFile.Key)) == cleanKey {
			found = true
			break
		}
	}

	if !found {
		return a.GetGuildSyncFileWatcherStatus()
	}

	settings := loadFileWatchSettings()
	if enabled {
		delete(settings.DisabledFiles, cleanKey)
	} else {
		settings.DisabledFiles[cleanKey] = true
	}

	if err := saveFileWatchSettings(settings); err != nil {
		status := a.GetGuildSyncFileWatcherStatus()
		status.Message = fmt.Sprintf("Unable to save file watcher setting: %v", err)
		return status
	}

	a.StopGuildSyncFileWatcher()
	return a.GetGuildSyncFileWatcherStatus()
}

// StopGuildSyncFileWatcher stops the saved variables watcher. The frontend calls
// this as soon as the user is no longer authenticated.
func (a *App) StopGuildSyncFileWatcher() GuildSyncFileWatcherStatus {
	a.fileWatcherMu.Lock()
	if a.fileWatcherCancel != nil {
		a.fileWatcherCancel()
		a.fileWatcherCancel = nil
	}

	a.fileWatcherRunning = false
	a.fileWatcherSignature = ""
	a.fileWatcherMu.Unlock()

	return GuildSyncFileWatcherStatus{
		Watching: false,
		Message:  "GuildSync file watcher stopped.",
	}
}

func (a *App) runGuildSyncFileWatcher(ctx context.Context, dir string, watchFiles []GuildSyncSavedVarsWatchFile, signature string) {
	watcher, err := fsnotify.NewWatcher()
	if err != nil {
		a.emitGuildSyncFileWatcherError(fmt.Sprintf("Unable to create file watcher: %v", err))
		a.clearGuildSyncFileWatcherState(signature)
		return
	}
	defer watcher.Close()

	if err := watcher.Add(dir); err != nil {
		a.emitGuildSyncFileWatcherError(fmt.Sprintf("Unable to watch SavedVariables directory: %v", err))
		a.clearGuildSyncFileWatcherState(signature)
		return
	}

	watchedByName := map[string]GuildSyncSavedVarsWatchFile{}
	for _, watchFile := range watchFiles {
		watchedByName[strings.ToLower(watchFile.FileName)] = watchFile
	}

	debounceTimers := map[string]*time.Timer{}
	stopDebounceTimers := func() {
		for key, timer := range debounceTimers {
			if timer != nil {
				timer.Stop()
			}
			delete(debounceTimers, key)
		}
	}

	defer stopDebounceTimers()

	for {
		select {
		case <-ctx.Done():
			return

		case event, ok := <-watcher.Events:
			if !ok {
				a.clearGuildSyncFileWatcherState(signature)
				return
			}

			if !event.Has(fsnotify.Write) && !event.Has(fsnotify.Create) && !event.Has(fsnotify.Rename) {
				continue
			}

			watchFile, found := watchedByName[strings.ToLower(filepath.Base(event.Name))]
			if !found {
				continue
			}

			modifiedAt := time.Now()
			debounceKey := watchFile.Key
			debouncedWatchFile := watchFile

			if timer := debounceTimers[debounceKey]; timer != nil {
				timer.Stop()
			}

			debounceTimers[debounceKey] = time.AfterFunc(savedVarsFileDebounceWindow, func() {
				a.emitGuildSyncSavedVarsFileModified(dir, debouncedWatchFile, modifiedAt)
			})

		case err, ok := <-watcher.Errors:
			if !ok {
				a.clearGuildSyncFileWatcherState(signature)
				return
			}

			a.emitGuildSyncFileWatcherError(fmt.Sprintf("SavedVariables watcher error: %v", err))
		}
	}
}

func (a *App) emitGuildSyncSavedVarsFileModified(dir string, watchFile GuildSyncSavedVarsWatchFile, modifiedAt time.Time) {
	if a.ctx == nil {
		return
	}

	runtime.EventsEmit(a.ctx, "guildsync-savedvars-file-modified", GuildSyncSavedVarsFileModifiedEvent{
		Key:        watchFile.Key,
		Label:      watchFile.Label,
		Directory:  dir,
		FileName:   watchFile.FileName,
		FilePath:   watchFile.FilePath,
		ModifiedAt: modifiedAt.Format(time.RFC3339),
	})
}

func (a *App) emitGuildSyncFileWatcherError(message string) {
	if a.ctx == nil {
		return
	}

	runtime.EventsEmit(a.ctx, "guildsync-file-watcher-error", strings.TrimSpace(message))
}

func (a *App) clearGuildSyncFileWatcherState(signature string) {
	a.fileWatcherMu.Lock()
	defer a.fileWatcherMu.Unlock()

	if a.fileWatcherSignature != signature {
		return
	}

	a.fileWatcherCancel = nil
	a.fileWatcherRunning = false
	a.fileWatcherSignature = ""
}

func savedVarsWatchFilesSignature(dir string, watchFiles []GuildSyncSavedVarsWatchFile) string {
	parts := []string{strings.ToLower(filepath.Clean(dir))}
	for _, watchFile := range watchFiles {
		parts = append(parts, strings.ToLower(watchFile.Key+":"+watchFile.FileName))
	}

	sort.Strings(parts[1:])
	return strings.Join(parts, "|")
}

func formatSavedVarsWatcherMessage(watchFiles []GuildSyncSavedVarsWatchFile) string {
	fileNames := make([]string, 0, len(watchFiles))
	for _, watchFile := range watchFiles {
		fileNames = append(fileNames, watchFile.FileName)
	}

	if len(fileNames) == 1 {
		return fmt.Sprintf("Watching %s for changes.", fileNames[0])
	}

	return fmt.Sprintf("Watching %d SavedVariables files: %s.", len(fileNames), strings.Join(fileNames, ", "))
}
