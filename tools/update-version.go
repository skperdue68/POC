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

func main() {
	if len(os.Args) != 2 {
		fatalf("usage: go run tools/update-version.go <version>")
	}

	version := strings.TrimSpace(strings.TrimPrefix(os.Args[1], "v"))
	if version == "" {
		fatalf("version cannot be empty")
	}

	validVersion := regexp.MustCompile(`^\d+\.\d+\.\d+(?:[-+][0-9A-Za-z.-]+)?$`)
	if !validVersion.MatchString(version) {
		fatalf("version %q does not look like a release version such as 1.1.5", version)
	}

	var changed []string

	replaceFile(&changed, "GO/GuildSync-Frontend-Client/frontend/src/main.js", []replacement{
		{
			pattern: regexp.MustCompile(`(?m)^const\s+GUILDSYNC_APP_VERSION\s*=\s*['\"][^'\"]*['\"];`),
			value:   fmt.Sprintf("const GUILDSYNC_APP_VERSION = '%s';", version),
		},
	})

	updateWailsJSON(&changed, "GO/GuildSync-Frontend-Client/wails.json", version)

	replaceFile(&changed, "NodeJS/GuildSync-Backend-Server/.env", []replacement{
		{
			pattern: regexp.MustCompile(`(?m)^GUILDSYNC_CLIENT_VERSION=.*$`),
			value:   "GUILDSYNC_CLIENT_VERSION=" + version,
		},
	})
	replaceFile(&changed, "NodeJS/GuildSync-Backend-Server/.env.example", []replacement{
		{
			pattern: regexp.MustCompile(`(?m)^GUILDSYNC_CLIENT_VERSION=.*$`),
			value:   "GUILDSYNC_CLIENT_VERSION=" + version,
		},
	})

	updatePackageJSON(&changed, "NodeJS/GuildSync-Backend-Server/package.json", version)
	updatePackageLockTopVersion(&changed, "NodeJS/GuildSync-Backend-Server/package-lock.json", version)

	updateESOManifests(&changed, "ESO", version)

	replaceFile(&changed, "ESO/GuildSyncApplications/GuildSyncApplications.lua", []replacement{
		{
			pattern: regexp.MustCompile(`(?m)^(\s*GSA\.version\s*=\s*)['\"][^'\"]*['\"]`),
			value:   fmt.Sprintf(`${1}"%s"`, version),
		},
	})

	replaceFile(&changed, "Installer/Windows/GuildSyncInstaller.iss", []replacement{
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
	fmt.Printf("Updated GuildSync version to %s\n", version)
	for _, path := range changed {
		fmt.Printf(" - %s\n", path)
	}
}

type replacement struct {
	pattern *regexp.Regexp
	value   string
}

func replaceFile(changed *[]string, path string, replacements []replacement) {
	data, err := os.ReadFile(path)
	if os.IsNotExist(err) {
		return
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
		writeText(path, updated)
		*changed = append(*changed, path)
	}
}

func updateWailsJSON(changed *[]string, path string, version string) {
	data, err := os.ReadFile(path)
	if os.IsNotExist(err) {
		return
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
		return
	}
	if err != nil {
		fatalf("read %s: %v", path, err)
	}

	var raw map[string]any
	if err := json.Unmarshal(data, &raw); err != nil {
		fatalf("parse %s: %v", path, err)
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
		return
	}
	if err != nil {
		fatalf("read %s: %v", path, err)
	}

	var raw map[string]any
	if err := json.Unmarshal(data, &raw); err != nil {
		fatalf("parse %s: %v", path, err)
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
	matches, err := filepath.Glob(filepath.Join(root, "GuildSync*", "GuildSync*.txt"))
	if err != nil {
		fatalf("find ESO manifests: %v", err)
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
