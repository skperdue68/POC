package main

import "testing"

func TestMacKeyTranslation(t *testing.T) {
	for key, want := range map[int][]uint16{17: {59, 62}, 18: {58, 61}, 16: {56, 60}, 77: {46}, 78: {45}, 65: {0}, 49: {18}, 112: {122}, 123: {111}, 37: {123}, 46: {117}, 32: {49}} {
		got := voiceMacKeycodes(key)
		if len(got) != len(want) {
			t.Fatalf("key %d: %v", key, got)
		}
		for i := range want {
			if got[i] != want[i] {
				t.Fatalf("key %d: %v", key, got)
			}
		}
	}
	if len(voiceMacKeycodes(999)) != 0 {
		t.Fatal("unknown key accepted")
	}
}
