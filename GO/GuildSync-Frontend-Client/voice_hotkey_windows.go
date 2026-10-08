//go:build windows

package main

import (
	"fmt"
	"runtime"
	"sync"
	"syscall"
	"time"
	"unsafe"
)

var voiceUser32 = syscall.NewLazyDLL("user32.dll")

func voiceHotkeySupported() bool { return true }

type voiceMessage struct {
	window         uintptr
	message        uint32
	wparam, lparam uintptr
	time           uint32
	x, y           int32
	private        uint32
}

func startVoiceKeyboard(v *voiceRuntime) (func(), error) {
	generation := v.keyboardGeneration
	ready := make(chan error, 1)
	done := make(chan struct{})
	wake := make(chan struct{}, 1)
	var once sync.Once
	go func() {
		runtime.LockOSThread()
		defer runtime.UnlockOSThread()
		setHook := voiceUser32.NewProc("SetWindowsHookExW")
		next := voiceUser32.NewProc("CallNextHookEx")
		unhook := voiceUser32.NewProc("UnhookWindowsHookEx")
		peek := voiceUser32.NewProc("PeekMessageW")
		keyState := voiceUser32.NewProc("GetAsyncKeyState")
		callback := syscall.NewCallback(func(code int, wparam, lparam uintptr) uintptr {
			if code >= 0 {
				select {
				case wake <- struct{}{}:
				default:
				}
			}
			result, _, _ := next.Call(0, uintptr(code), wparam, lparam)
			return result
		})
		hook, _, err := setHook.Call(13, callback, 0, 0)
		if hook == 0 {
			ready <- fmt.Errorf("keyboard hook: %v", err)
			return
		}
		defer unhook.Call(hook)
		ready <- nil
		tick := time.NewTicker(25 * time.Millisecond)
		defer tick.Stop()
		for {
			select {
			case <-done:
				return
			case <-tick.C:
			case <-wake:
			}
			var message voiceMessage
			for {
				found, _, _ := peek.Call(uintptr(unsafe.Pointer(&message)), 0, 0, 0, 1)
				if found == 0 {
					break
				}
			}
			v.sampleKeyboard(generation, func(key int) bool { value, _, _ := keyState.Call(uintptr(key)); return value&0x8000 != 0 })
		}
	}()
	if err := <-ready; err != nil {
		return nil, err
	}
	return func() { once.Do(func() { close(done) }) }, nil
}
