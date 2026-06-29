package main

import (
	"archive/tar"
	"compress/gzip"
	"embed"
	"fmt"
	"io"
	"os"
	"path/filepath"
	"strings"

	"fyne.io/fyne/v2"
	"fyne.io/fyne/v2/app"
	"fyne.io/fyne/v2/container"
	"fyne.io/fyne/v2/dialog"
	"fyne.io/fyne/v2/storage"
	"fyne.io/fyne/v2/widget"
)

// payload.tar.gz is created by the GitHub Actions build immediately before
// this installer is compiled.
//
//go:embed payload.tar.gz
var payloadFS embed.FS

const appName = "GuildSync"

var installerVersion = "dev"

func main() {
	a := app.NewWithID("me.perdues.guildsync.installer")
	w := a.NewWindow("GuildSync Linux Installer")
	w.Resize(fyne.NewSize(720, 360))

	home, _ := os.UserHomeDir()
	defaultInstall := filepath.Join(home, ".local", "share", "GuildSync")
	defaultAddons := filepath.Join(home, "Documents", "Elder Scrolls Online", "live", "AddOns")

	installEntry := widget.NewEntry()
	installEntry.SetText(defaultInstall)
	addonsEntry := widget.NewEntry()
	addonsEntry.SetText(defaultAddons)

	status := widget.NewLabel("Choose where to install GuildSync and where your ESO AddOns folder is located.")
	status.Wrapping = fyne.TextWrapWord

	browseInstall := widget.NewButton("Browse...", func() {
		openFolderDialog(w, installEntry)
	})
	browseAddons := widget.NewButton("Browse...", func() {
		openFolderDialog(w, addonsEntry)
	})

	installButton := widget.NewButton("Install GuildSync", func() {
		installDir := strings.TrimSpace(installEntry.Text)
		addonsDir := strings.TrimSpace(addonsEntry.Text)
		if installDir == "" || addonsDir == "" {
			dialog.ShowError(fmt.Errorf("both folders are required"), w)
			return
		}

		status.SetText("Installing GuildSync...")
		if err := installPayload(installDir, addonsDir); err != nil {
			status.SetText("Installation failed.")
			dialog.ShowError(err, w)
			return
		}

		status.SetText("Installation complete.")
		dialog.ShowInformation("GuildSync Installed", fmt.Sprintf("GuildSync was installed to:\n%s\n\nESO add-ons were copied to:\n%s", installDir, addonsDir), w)
	})

	form := container.NewVBox(
		widget.NewRichTextFromMarkdown(fmt.Sprintf("## GuildSync Installer %s", installerVersion)),
		status,
		widget.NewLabel("GuildSync application install folder:"),
		container.NewBorder(nil, nil, nil, browseInstall, installEntry),
		widget.NewLabel("ESO AddOns folder:"),
		container.NewBorder(nil, nil, nil, browseAddons, addonsEntry),
		container.NewHBox(installButton, widget.NewButton("Quit", func() { a.Quit() })),
	)

	w.SetContent(container.NewPadded(form))
	w.ShowAndRun()
}

func openFolderDialog(w fyne.Window, entry *widget.Entry) {
	startPath := strings.TrimSpace(entry.Text)
	if startPath == "" {
		startPath, _ = os.UserHomeDir()
	}
	location := storage.NewFileURI(startPath)
	d := dialog.NewFolderOpen(func(uri fyne.ListableURI, err error) {
		if err != nil {
			dialog.ShowError(err, w)
			return
		}
		if uri == nil {
			return
		}
		entry.SetText(uri.Path())
	}, w)
	if lister, err := storage.ListerForURI(location); err == nil {
		d.SetLocation(lister)
	}
	d.Show()
}

func installPayload(installDir, addonsDir string) error {
	payload, err := payloadFS.Open("payload.tar.gz")
	if err != nil {
		return fmt.Errorf("payload is missing from installer: %w", err)
	}
	defer payload.Close()

	tmpDir, err := os.MkdirTemp("", "guildsync-installer-*")
	if err != nil {
		return err
	}
	defer os.RemoveAll(tmpDir)

	if err := untarGzip(payload, tmpDir); err != nil {
		return err
	}

	if err := os.MkdirAll(installDir, 0755); err != nil {
		return err
	}
	if err := copyDir(tmpDir, installDir, map[string]bool{"ESO": true}); err != nil {
		return err
	}

	if err := os.MkdirAll(addonsDir, 0755); err != nil {
		return err
	}
	esoDir := filepath.Join(tmpDir, "ESO")
	for _, addon := range []string{"GuildSyncBanking", "GuildSyncRoster", "GuildSyncApplications"} {
		src := filepath.Join(esoDir, addon)
		if stat, err := os.Stat(src); err == nil && stat.IsDir() {
			if err := copyDir(src, filepath.Join(addonsDir, addon), nil); err != nil {
				return err
			}
		}
	}

	for _, exeName := range []string{"GuildSync", "guildsync"} {
		exePath := filepath.Join(installDir, exeName)
		if _, err := os.Stat(exePath); err == nil {
			_ = os.Chmod(exePath, 0755)
			if err := createDesktopFiles(exePath, installDir); err != nil {
				return err
			}
			break
		}
	}

	return nil
}

func untarGzip(r io.Reader, dest string) error {
	gz, err := gzip.NewReader(r)
	if err != nil {
		return err
	}
	defer gz.Close()

	tr := tar.NewReader(gz)
	for {
		header, err := tr.Next()
		if err == io.EOF {
			return nil
		}
		if err != nil {
			return err
		}

		cleanName := filepath.Clean(header.Name)
		if cleanName == "." || strings.HasPrefix(cleanName, "..") || filepath.IsAbs(cleanName) {
			return fmt.Errorf("unsafe path in installer payload: %s", header.Name)
		}

		target := filepath.Join(dest, cleanName)
		switch header.Typeflag {
		case tar.TypeDir:
			if err := os.MkdirAll(target, os.FileMode(header.Mode)); err != nil {
				return err
			}
		case tar.TypeReg:
			if err := os.MkdirAll(filepath.Dir(target), 0755); err != nil {
				return err
			}
			out, err := os.OpenFile(target, os.O_CREATE|os.O_TRUNC|os.O_WRONLY, os.FileMode(header.Mode))
			if err != nil {
				return err
			}
			_, copyErr := io.Copy(out, tr)
			closeErr := out.Close()
			if copyErr != nil {
				return copyErr
			}
			if closeErr != nil {
				return closeErr
			}
		}
	}
}

func copyDir(src, dst string, skipTopLevel map[string]bool) error {
	return filepath.WalkDir(src, func(path string, d os.DirEntry, err error) error {
		if err != nil {
			return err
		}
		rel, err := filepath.Rel(src, path)
		if err != nil || rel == "." {
			return err
		}
		if skipTopLevel != nil {
			parts := strings.Split(rel, string(os.PathSeparator))
			if len(parts) > 0 && skipTopLevel[parts[0]] {
				if d.IsDir() {
					return filepath.SkipDir
				}
				return nil
			}
		}
		target := filepath.Join(dst, rel)
		info, err := d.Info()
		if err != nil {
			return err
		}
		if d.IsDir() {
			return os.MkdirAll(target, info.Mode())
		}
		return copyFile(path, target, info.Mode())
	})
}

func copyFile(src, dst string, mode os.FileMode) error {
	if err := os.MkdirAll(filepath.Dir(dst), 0755); err != nil {
		return err
	}
	in, err := os.Open(src)
	if err != nil {
		return err
	}
	defer in.Close()
	out, err := os.OpenFile(dst, os.O_CREATE|os.O_TRUNC|os.O_WRONLY, mode)
	if err != nil {
		return err
	}
	_, copyErr := io.Copy(out, in)
	closeErr := out.Close()
	if copyErr != nil {
		return copyErr
	}
	return closeErr
}

func createDesktopFiles(exePath, installDir string) error {
	home, _ := os.UserHomeDir()
	desktopText := fmt.Sprintf(`[Desktop Entry]
Type=Application
Name=GuildSync
Exec=%s
Path=%s
Terminal=false
Categories=Utility;
`, exePath, installDir)

	menuPath := filepath.Join(home, ".local", "share", "applications", "guildsync.desktop")
	if err := os.MkdirAll(filepath.Dir(menuPath), 0755); err != nil {
		return err
	}
	if err := os.WriteFile(menuPath, []byte(desktopText), 0755); err != nil {
		return err
	}

	desktopDir := filepath.Join(home, "Desktop")
	if stat, err := os.Stat(desktopDir); err == nil && stat.IsDir() {
		_ = os.WriteFile(filepath.Join(desktopDir, "GuildSync.desktop"), []byte(desktopText), 0755)
	}
	return nil
}
