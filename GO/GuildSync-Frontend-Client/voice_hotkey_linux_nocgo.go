//go:build linux && !cgo

package main

import "fmt"

func voiceX11Supported() bool { return false }
func startVoiceX11(v *voiceRuntime) (func(), error) {
	return nil, fmt.Errorf("X11 voice hotkeys require a GuildSync build with native Linux support")
}
