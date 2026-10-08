//go:build (!windows && !darwin && !linux) || (darwin && !cgo)

package main

func voiceHotkeySupported() bool                         { return false }
func startVoiceKeyboard(v *voiceRuntime) (func(), error) { return func() {}, nil }
