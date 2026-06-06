package main

import (
	"embed"

	"github.com/wailsapp/wails/v2"
	"github.com/wailsapp/wails/v2/pkg/options"
	"github.com/wailsapp/wails/v2/pkg/options/assetserver"
	"github.com/wailsapp/wails/v2/pkg/options/linux"
	"github.com/wailsapp/wails/v2/pkg/options/mac"
)

//go:embed all:frontend/dist
var assets embed.FS

//go:embed build/appicon.png
var appIcon []byte

//go:embed build/windows/icon.ico
var trayIcon []byte

func main() {
	loadOptionalEnvFile()

	app := NewApp(appIcon, trayIcon)

	err := wails.Run(&options.App{
		Title:  "GuildSync",
		Width:  816,
		Height: 920,

		MinHeight: 800,
		MinWidth:  900,
		Frameless: true,

		// Windows uses our systray file.
		// macOS/Linux will use normal native window behavior.
		HideWindowOnClose: supportsTray(),

		AlwaysOnTop: true,

		BackgroundColour: &options.RGBA{
			R: 0,
			G: 0,
			B: 0,
			A: 255,
		},

		AssetServer: &assetserver.Options{
			Assets: assets,
		},

		Mac: &mac.Options{
			About: &mac.AboutInfo{
				Title:   "GuildSync",
				Message: "GuildSync desktop helper",
				Icon:    appIcon,
			},
		},

		Linux: &linux.Options{
			Icon:        appIcon,
			ProgramName: "GuildSync",
		},

		OnStartup:  app.startup,
		OnShutdown: app.shutdown,

		Bind: []interface{}{
			app,
		},
	})

	if err != nil {
		println("Error:", err.Error())
	}
}
