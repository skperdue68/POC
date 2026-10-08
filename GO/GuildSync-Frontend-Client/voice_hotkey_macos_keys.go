package main

// CoreGraphics uses hardware keycodes. Character keys are resolved against the
// current layout by the Mac backend; these are its ANSI fallback and special keys.
func voiceMacKeycodes(key int) []uint16 {
	if key == 17 {
		return []uint16{59, 62}
	}
	if key == 18 {
		return []uint16{58, 61}
	}
	if key == 16 {
		return []uint16{56, 60}
	}
	keys := map[int]uint16{
		65: 0, 83: 1, 68: 2, 70: 3, 72: 4, 71: 5, 90: 6, 88: 7, 67: 8, 86: 9, 66: 11,
		81: 12, 87: 13, 69: 14, 82: 15, 89: 16, 84: 17, 49: 18, 50: 19, 51: 20, 52: 21,
		54: 22, 53: 23, 57: 25, 55: 26, 56: 28, 48: 29, 79: 31, 85: 32, 73: 34, 80: 35,
		13: 36, 76: 37, 74: 38, 75: 40, 78: 45, 77: 46, 9: 48, 32: 49, 8: 51,
		112: 122, 113: 120, 114: 99, 115: 118, 116: 96, 117: 97, 118: 98, 119: 100,
		120: 101, 121: 109, 122: 103, 123: 111, 36: 115, 33: 116, 46: 117, 35: 119,
		34: 121, 37: 123, 39: 124, 40: 125, 38: 126, 45: 114,
	}
	if code, ok := keys[key]; ok {
		return []uint16{code}
	}
	return nil
}
