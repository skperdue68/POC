package main

import (
	"encoding/json"
	"fmt"
	"os"
	"path/filepath"
	"regexp"
	"sort"
	"strings"
)

var checkMode bool

func main() {
	args := os.Args[1:]
	if len(args) > 0 && args[0] == "--check" {
		checkMode = true
		args = args[1:]
	}
	if len(args) > 1 {
		fatalf("usage: go run tools/update-version.go [--check] [version]")
	}
	var version string
	if len(args) == 1 {
		version = args[0]
	} else {
		data, err := os.ReadFile("VERSION")
		if err != nil {
			fatalf("read VERSION: %v", err)
		}
		version = string(data)
	}
	version = strings.TrimPrefix(strings.TrimSpace(version), "v")
	if version == "" {
		fatalf("version cannot be empty")
	}

	validVersion := regexp.MustCompile(`^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-[0-9A-Za-z.-]+)?(?:\+[0-9A-Za-z.-]+)?$`)
	if !validVersion.MatchString(version) {
		fatalf("version %q does not look like a release version such as 1.1.5", version)
	}

	var changed []string
	if checkMode {
		data, err := os.ReadFile("VERSION")
		if err != nil || strings.TrimSpace(string(data)) != version {
			fatalf("VERSION does not match %s", version)
		}
	} else {
		writeText("VERSION", version+"\n")
	}

	replaceFile(&changed, "GO/GuildSync-Frontend-Client/frontend/src/main.js", []replacement{
		{
			pattern: regexp.MustCompile(`(?m)^const\s+GUILDSYNC_APP_VERSION\s*=\s*['\"][^'\"]*['\"];`),
			value:   fmt.Sprintf("const GUILDSYNC_APP_VERSION = '%s';", version),
		},
	})

	replaceFile(&changed, "NodeJS/GuildSync-Backend-Server/web/src/main.js", []replacement{
		{
			pattern: regexp.MustCompile(`(?m)^const\s+GUILDSYNC_APP_VERSION\s*=\s*['\"][^'\"]*['\"];`),
			value:   fmt.Sprintf("const GUILDSYNC_APP_VERSION = '%s';", version),
		},
	})

	updateWailsJSON(&changed, "GO/GuildSync-Frontend-Client/wails.json", version)
	updateEnvVersion(&changed, "NodeJS/GuildSync-Backend-Server/.env", version, true)
	updateEnvVersion(&changed, "NodeJS/GuildSync-Backend-Server/.env.example", version, false)

	for _, root := range []string{
		"GO/GuildSync-Frontend-Client/frontend",
		"NodeJS/GuildSync-Backend-Server",
		"NodeJS/GuildSync-Backend-Server/web",
		"NodeJS/GuildSync-Discord-Bot",
	} {
		updatePackageJSON(&changed, root+"/package.json", version)
		updatePackageLockTopVersion(&changed, root+"/package-lock.json", version)
	}

	updateESOManifests(&changed, "ESO", version)

	replaceFile(&changed, "ESO/GuildSyncApplications/GuildSyncApplications.lua", []replacement{
		{
			pattern: regexp.MustCompile(`(?m)^(\s*GSA\.version\s*=\s*)['\"][^'\"]*['\"]`),
			value:   fmt.Sprintf(`${1}"%s"`, version),
		},
	})

	replaceFile(&changed, "Installer/Windows/GuildSyncInstaller.iss", []replacement{
		{
			pattern: regexp.MustCompile(`(?m)^#define\s+MyAppNumericVersion\s+"[^"]*"`),
			value:   fmt.Sprintf(`#define MyAppNumericVersion "%s"`, strings.Split(strings.Split(version, "-")[0], "+")[0]),
		},
		{
			pattern: regexp.MustCompile(`(?m)^#define\s+MyAppVersion\s+"[^"]*"`),
			value:   fmt.Sprintf(`#define MyAppVersion "%s"`, version),
		},
		{
			pattern: regexp.MustCompile(`(?m)^OutputBaseFilename=.*$`),
			value:   fmt.Sprintf("OutputBaseFilename=GuildSync-Setup-%s-Windows", version),
		},
	})

	sort.Strings(changed)
	if checkMode {
		fmt.Printf("Verified GuildSync version %s across all release components\n", version)
	} else {
		fmt.Printf("Updated GuildSync version to %s\n", version)
	}
	for _, path := range changed {
		fmt.Printf(" - %s\n", path)
	}
}

type replacement struct {
	pattern *regexp.Regexp
	value   string
}

func updateEnvVersion(changed *[]string, path, version string, optional bool) {
	data, err := os.ReadFile(path)
	if optional && os.IsNotExist(err) {
		return
	}
	if err != nil {
		fatalf("read %s: %v", path, err)
	}
	original := string(data)
	pattern := regexp.MustCompile(`(?m)^[ \t]*(?:export[ \t]+)?GUILDSYNC_CLIENT_VERSION[ \t]*=[^\r\n]*`)
	updated := pattern.ReplaceAllString(original, "GUILDSYNC_CLIENT_VERSION="+version)
	if !pattern.MatchString(original) {
		newline := "\n"
		if strings.Contains(original, "\r\n") {
			newline = "\r\n"
		}
		if updated != "" && !strings.HasSuffix(updated, "\n") {
			updated += newline
		}
		updated += "GUILDSYNC_CLIENT_VERSION=" + version + newline
	}
	if original == updated {
		return
	}
	if checkMode {
		fatalf("version mismatch in %s", path)
	}
	writeText(path, updated)
	*changed = append(*changed, path)
}

func replaceFile(changed *[]string, path string, replacements []replacement) {
	data, err := os.ReadFile(path)
	if os.IsNotExist(err) {
		fatalf("required release file missing: %s", path)
	}
	if err != nil {
		fatalf("read %s: %v", path, err)
	}

	original := string(data)
	updated := original
	for _, repl := range replacements {
		if !repl.pattern.MatchString(updated) {
			fatalf("%s did not contain expected version pattern: %s", path, repl.pattern.String())
		}
		updated = repl.pattern.ReplaceAllString(updated, repl.value)
	}

	if updated != original {
		if checkMode {
			fatalf("version mismatch in %s", path)
		}
		writeText(path, updated)
		*changed = append(*changed, path)
	}
}

func updateWailsJSON(changed *[]string, path string, version string) {
	data, err := os.ReadFile(path)
	if os.IsNotExist(err) {
		fatalf("required release file missing: %s", path)
	}
	if err != nil {
		fatalf("read %s: %v", path, err)
	}

	var raw map[string]any
	if err := json.Unmarshal(data, &raw); err != nil {
		fatalf("parse %s: %v", path, err)
	}

	info, _ := raw["info"].(map[string]any)
	if info == nil {
		info = map[string]any{}
		raw["info"] = info
	}
	if checkMode {
		if info["productVersion"] != version {
			fatalf("version mismatch in %s", path)
		}
		return
	}
	info["productVersion"] = version

	updated, err := json.MarshalIndent(raw, "", "  ")
	if err != nil {
		fatalf("marshal %s: %v", path, err)
	}
	updated = append(updated, '\n')

	if string(updated) != string(data) {
		if err := os.WriteFile(path, updated, 0644); err != nil {
			fatalf("write %s: %v", path, err)
		}
		*changed = append(*changed, path)
	}
}

func updatePackageJSON(changed *[]string, path string, version string) {
	data, err := os.ReadFile(path)
	if os.IsNotExist(err) {
		fatalf("required release file missing: %s", path)
	}
	if err != nil {
		fatalf("read %s: %v", path, err)
	}

	var raw map[string]any
	if err := json.Unmarshal(data, &raw); err != nil {
		fatalf("parse %s: %v", path, err)
	}
	if checkMode {
		if raw["version"] != version {
			fatalf("version mismatch in %s", path)
		}
		if strings.HasSuffix(path, "package-lock.json") {
			packages, _ := raw["packages"].(map[string]any)
			root, _ := packages[""].(map[string]any)
			if root["version"] != version {
				fatalf("root package version mismatch in %s", path)
			}
		}
		return
	}
	raw["version"] = version

	updated, err := json.MarshalIndent(raw, "", "  ")
	if err != nil {
		fatalf("marshal %s: %v", path, err)
	}
	updated = append(updated, '\n')

	if string(updated) != string(data) {
		if err := os.WriteFile(path, updated, 0644); err != nil {
			fatalf("write %s: %v", path, err)
		}
		*changed = append(*changed, path)
	}
}

func updatePackageLockTopVersion(changed *[]string, path string, version string) {
	data, err := os.ReadFile(path)
	if os.IsNotExist(err) {
		fatalf("required release file missing: %s", path)
	}
	if err != nil {
		fatalf("read %s: %v", path, err)
	}

	var raw map[string]any
	if err := json.Unmarshal(data, &raw); err != nil {
		fatalf("parse %s: %v", path, err)
	}
	packages, packagesOK := raw["packages"].(map[string]any)
	root, rootOK := packages[""].(map[string]any)
	if !packagesOK || !rootOK {
		fatalf("missing root package in %s", path)
	}
	if checkMode {
		if raw["version"] != version || root["version"] != version {
			fatalf("version mismatch in %s", path)
		}
		return
	}
	raw["version"] = version
	if packages, ok := raw["packages"].(map[string]any); ok {
		if root, ok := packages[""].(map[string]any); ok {
			root["version"] = version
		}
	}

	updated, err := json.MarshalIndent(raw, "", "  ")
	if err != nil {
		fatalf("marshal %s: %v", path, err)
	}
	updated = append(updated, '\n')

	if string(updated) != string(data) {
		if err := os.WriteFile(path, updated, 0644); err != nil {
			fatalf("write %s: %v", path, err)
		}
		*changed = append(*changed, path)
	}
}

func updateESOManifests(changed *[]string, root string, version string) {
	var matches []string
	for _, addon := range []string{"GuildSyncBanking", "GuildSyncRoster", "GuildSyncApplications"} {
		matches = append(matches, filepath.Join(root, addon, addon+".txt"))
	}
	for _, path := range matches {
		replaceFile(changed, filepath.ToSlash(path), []replacement{
			{
				pattern: regexp.MustCompile(`(?m)^##\s*Version:.*$`),
				value:   "## Version: " + version,
			},
		})
	}
}

func writeText(path string, value string) {
	if err := os.WriteFile(path, []byte(value), 0644); err != nil {
		fatalf("write %s: %v", path, err)
	}
}

func fatalf(format string, args ...any) {
	fmt.Fprintf(os.Stderr, "update-version: "+format+"\n", args...)
	os.Exit(1)
}
