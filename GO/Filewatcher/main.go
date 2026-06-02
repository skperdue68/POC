package main

import (
	"bufio"
	"fmt"
	"log"
	"os"
	"os/exec"
	"path/filepath"
	"runtime"
	"strings"
	"time"

	"github.com/fsnotify/fsnotify"
)

const targetFileName = "ProofOfConcept.lua"

func main() {
	reader := bufio.NewReader(os.Stdin)

	fmt.Print("Enter directory to watch: ")
	dirToWatch, err := reader.ReadString('\n')
	if err != nil {
		log.Fatal(err)
	}

	dirToWatch = strings.TrimSpace(dirToWatch)
	dirToWatch = strings.Trim(dirToWatch, `"`)

	info, err := os.Stat(dirToWatch)
	if err != nil {
		log.Fatalf("Directory not found: %s\n%v", dirToWatch, err)
	}

	if !info.IsDir() {
		log.Fatalf("Path is not a directory: %s", dirToWatch)
	}

	go monitorESO(dirToWatch)

	watcher, err := fsnotify.NewWatcher()
	if err != nil {
		log.Fatal(err)
	}
	defer watcher.Close()

	if err := watcher.Add(dirToWatch); err != nil {
		log.Fatal(err)
	}

	fmt.Printf("[%s] Watching directory: %s\n",
		time.Now().Format("2006-01-02 15:04:05"),
		dirToWatch,
	)

	for {
		select {
		case event, ok := <-watcher.Events:
			if !ok {
				return
			}

			if !event.Has(fsnotify.Write) {
				continue
			}

			modifiedFileName := filepath.Base(event.Name)

			fmt.Printf("[%s] File modified: %s\n",
				time.Now().Format("2006-01-02 15:04:05"),
				modifiedFileName,
			)

			if strings.EqualFold(modifiedFileName, targetFileName) {
				fmt.Printf("[%s] Target file modified and will be deleted after ESO stops: %s\n",
					time.Now().Format("2006-01-02 15:04:05"),
					targetFileName,
				)
			}

		case err, ok := <-watcher.Errors:
			if !ok {
				return
			}
			log.Println("Watcher error:", err)
		}
	}
}

func monitorESO(dirToWatch string) {
	processName := "eso64.exe"

	if runtime.GOOS != "windows" {
		processName = "eso64"
	}

	wasRunning := isProcessRunning(processName)

	if wasRunning {
		fmt.Printf("[%s] Elder Scrolls Online already running\n",
			time.Now().Format("2006-01-02 15:04:05"))
	}

	for {
		isRunning := isProcessRunning(processName)

		if isRunning && !wasRunning {
			fmt.Printf("[%s] Elder Scrolls Online started\n",
				time.Now().Format("2006-01-02 15:04:05"))
		}

		if !isRunning && wasRunning {
			fmt.Printf("[%s] Elder Scrolls Online stopped\n",
				time.Now().Format("2006-01-02 15:04:05"))

			targetPath := filepath.Join(dirToWatch, targetFileName)

			if err := deleteFileWithRetry(targetPath, 10, 250*time.Millisecond); err != nil {
				if os.IsNotExist(err) {
					fmt.Printf("[%s] %s was already deleted or does not exist\n",
						time.Now().Format("2006-01-02 15:04:05"),
						targetFileName,
					)
				} else {
					log.Printf("Failed to delete %s: %v\n", targetPath, err)
				}
			} else {
				fmt.Printf("[%s] Deleted file after ESO stopped: %s\n",
					time.Now().Format("2006-01-02 15:04:05"),
					targetPath,
				)
			}
		}

		wasRunning = isRunning
		time.Sleep(5 * time.Second)
	}
}

func deleteFileWithRetry(path string, attempts int, delay time.Duration) error {
	var lastErr error

	for i := 0; i < attempts; i++ {
		err := os.Remove(path)
		if err == nil {
			return nil
		}

		lastErr = err

		if os.IsNotExist(err) {
			return err
		}

		time.Sleep(delay)
	}

	return lastErr
}

func isProcessRunning(processName string) bool {
	switch runtime.GOOS {
	case "windows":
		cmd := exec.Command("tasklist", "/FI", "IMAGENAME eq "+processName)

		output, err := cmd.Output()
		if err != nil {
			return false
		}

		return strings.Contains(
			strings.ToLower(string(output)),
			strings.ToLower(processName),
		)

	case "linux", "darwin":
		cmd := exec.Command("pgrep", "-x", processName)

		err := cmd.Run()
		return err == nil

	default:
		return false
	}
}
