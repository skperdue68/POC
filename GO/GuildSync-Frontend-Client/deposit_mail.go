package main

import (
	"bytes"
	"encoding/json"
	"fmt"
	"os"
	"os/exec"
	"path/filepath"
	"runtime"
	"sort"
	"strconv"
	"strings"
	"time"
)

type DepositMailWriteResult struct {
	OK             bool     `json:"ok"`
	Message        string   `json:"message"`
	FileName       string   `json:"fileName"`
	FilePath       string   `json:"filePath"`
	BackupPath     string   `json:"backupPath,omitempty"`
	RecordsWritten int      `json:"recordsWritten"`
	EventIDs       []string `json:"eventIds"`
	ESOIsRunning   bool     `json:"esoIsRunning"`
}

type ESORunningStatus struct {
	Running bool   `json:"running"`
	Message string `json:"message"`
}

func (a *App) GetESORunningStatus() ESORunningStatus {
	running := isESORunning()
	if running {
		return ESORunningStatus{Running: true, Message: "ESO appears to be running."}
	}
	return ESORunningStatus{Running: false, Message: "ESO does not appear to be running."}
}

func (a *App) WriteDepositMailToGuildSyncBanking(records []map[string]interface{}) DepositMailWriteResult {
	watchFile := getSavedVarsWatchFileByKey("banking")
	fileName := filepath.Base(strings.TrimSpace(watchFile.FileName))
	if fileName == "." || fileName == string(filepath.Separator) || fileName == "" {
		fileName = "GuildSyncBanking.lua"
	}
	filePath := strings.TrimSpace(watchFile.FilePath)
	if filePath == "" {
		filePath = filepath.Join(getSavedVarsDir(), fileName)
	}

	result := DepositMailWriteResult{OK: false, FileName: fileName, FilePath: filePath, ESOIsRunning: isESORunning()}
	if result.ESOIsRunning {
		result.Message = "ESO is currently running. Deposit mail was not written to SavedVariables yet."
		return result
	}

	cleanRecords := normalizeDepositMailRecordsForLua(records)
	if len(cleanRecords) == 0 {
		result.Message = "No valid deposit mail records were provided to write."
		return result
	}

	info, err := os.Stat(filePath)
	if err != nil {
		result.Message = fmt.Sprintf("GuildSyncBanking SavedVariables file could not be read: %v", err)
		return result
	}
	if info.IsDir() {
		result.Message = fmt.Sprintf("GuildSyncBanking SavedVariables path is a directory, not a file: %s", filePath)
		return result
	}

	originalBytes, err := os.ReadFile(filePath)
	if err != nil {
		result.Message = fmt.Sprintf("GuildSyncBanking SavedVariables file could not be read: %v", err)
		return result
	}
	originalText := string(originalBytes)

	// Preserve the ESO-controlled SavedVariables structure by parsing the current
	// GuildSyncBanking table and only adding/updating our addon-owned mailQueue
	// table under $AccountWide. This intentionally does not clear banking export
	// data, stream data, tickets, or any other ESO-written table.
	extracted, err := extractFirstAvailableLuaTable(originalText, getBankingSavedVarsTableNames())
	if err != nil {
		result.Message = err.Error()
		return result
	}
	parsed, err := parseEsoLuaTable(extracted.tableText)
	if err != nil {
		result.Message = fmt.Sprintf("GuildSyncBanking SavedVariables file could not be parsed: %v", err)
		return result
	}
	parsedMap, ok := parsed.(map[string]interface{})
	if !ok {
		result.Message = fmt.Sprintf("%s did not parse as a Lua table object.", extracted.tableName)
		return result
	}
	defaultSection, ok := getLuaMap(parsedMap["Default"])
	if !ok {
		result.Message = fmt.Sprintf("Could not find %s.Default", extracted.tableName)
		return result
	}
	accountName := getFirstEsoAccountName(defaultSection)
	if accountName == "" {
		result.Message = fmt.Sprintf("Could not find an ESO account name under %s.Default", extracted.tableName)
		return result
	}
	accountSection, ok := getLuaMap(defaultSection[accountName])
	if !ok {
		result.Message = fmt.Sprintf("Could not find %s.Default[\"%s\"]", extracted.tableName, accountName)
		return result
	}
	accountWide, ok := getLuaMap(accountSection["$AccountWide"])
	if !ok {
		result.Message = fmt.Sprintf("Could not find %s.Default[\"%s\"][\"$AccountWide\"]", extracted.tableName, accountName)
		return result
	}

	mailQueue := normalizeExistingMailQueue(accountWide["mailQueue"])
	appendedCount := 0
	eventIDs := make([]string, 0, len(cleanRecords))
	for _, record := range cleanRecords {
		requestID := cleanString(record["mail_request_id"])
		eventID := cleanString(record["event_id"])
		if requestID == "" || eventID == "" {
			continue
		}
		eventIDs = append(eventIDs, eventID)

		// Do not overwrite an existing queued mail item. If it is already present,
		// consider this write idempotently successful and leave the ESO-side copy
		// exactly as it was.
		if _, exists := mailQueue[requestID]; exists {
			continue
		}
		mailQueue[requestID] = record
		appendedCount++
	}
	if len(eventIDs) == 0 {
		result.Message = "No valid deposit mail records with event_id and mail_request_id were provided to write."
		return result
	}

	accountWide["mailQueue"] = mailQueue

	backupPath := fmt.Sprintf("%s.backup-%d", filePath, time.Now().UnixMilli())
	if err := os.WriteFile(backupPath, originalBytes, 0644); err != nil {
		result.Message = fmt.Sprintf("Deposit mail was not written because backup file could not be created: %v", err)
		return result
	}
	newTableText := renderLuaAssignment(extracted.tableName, parsedMap)
	newSavedVarsText := originalText[:extracted.assignmentStart] + newTableText + originalText[extracted.tableEnd:]
	if err := os.WriteFile(filePath, []byte(newSavedVarsText), info.Mode().Perm()); err != nil {
		result.Message = fmt.Sprintf("Deposit mail backup was created, but SavedVariables file could not be updated: %v", err)
		return result
	}

	if missingIDs, err := verifyDepositMailQueueWrite(filePath, cleanRecords); err != nil {
		result.Message = fmt.Sprintf("Deposit mail was written to %s, but GuildSync could not verify the mailQueue afterwards: %v", filePath, err)
		return result
	} else if len(missingIDs) > 0 {
		result.Message = fmt.Sprintf("Deposit mail was written to %s, but these mail_request_id values were not found in mailQueue afterwards: %s", filePath, strings.Join(missingIDs, ", "))
		return result
	}

	result.OK = true
	result.BackupPath = backupPath
	result.RecordsWritten = appendedCount
	result.EventIDs = eventIDs
	if appendedCount == 0 {
		result.Message = fmt.Sprintf("Deposit mail was already present in %s mailQueue at %s; no duplicate mailQueue entries were added.", fileName, filePath)
	} else {
		result.Message = fmt.Sprintf("Appended %d deposit mail request(s) to %s mailQueue at %s.", appendedCount, fileName, filePath)
	}
	return result
}

func verifyDepositMailQueueWrite(filePath string, records []map[string]interface{}) ([]string, error) {
	accountWide, err := readGuildSyncBankingAccountWide(filePath)
	if err != nil {
		return nil, err
	}

	mailQueue := normalizeExistingMailQueue(accountWide["mailQueue"])
	missingIDs := []string{}
	seen := map[string]bool{}
	for _, record := range records {
		requestID := cleanString(record["mail_request_id"])
		if requestID == "" || seen[requestID] {
			continue
		}
		seen[requestID] = true
		if _, exists := mailQueue[requestID]; !exists {
			missingIDs = append(missingIDs, requestID)
		}
	}
	return missingIDs, nil
}
func isESORunning() bool {
	names := []string{"eso64.exe", "eso.exe", "eso64", "eso"}
	switch runtime.GOOS {
	case "windows":
		out, err := exec.Command("tasklist", "/FO", "CSV", "/NH").Output()
		if err != nil {
			return false
		}
		lower := strings.ToLower(string(out))
		for _, name := range names {
			if strings.Contains(lower, strings.ToLower(name)) {
				return true
			}
		}
		return false
	default:
		out, err := exec.Command("ps", "-A", "-o", "comm=").Output()
		if err != nil {
			return false
		}
		lower := strings.ToLower(string(out))
		for _, name := range names {
			if strings.Contains(lower, strings.ToLower(name)) {
				return true
			}
		}
		return false
	}
}

func normalizeDepositMailRecordsForLua(records []map[string]interface{}) []map[string]interface{} {
	result := []map[string]interface{}{}
	for _, record := range records {
		eventID := cleanString(firstValue(record, "event_id", "eventId"))
		if eventID == "" {
			continue
		}

		requestID := cleanString(firstValue(record, "mail_request_id", "mailRequestId"))
		if requestID == "" {
			requestID = makeDepositMailRequestID(eventID)
		}

		batchID := cleanString(firstValue(record, "mail_batch_id", "mailBatchId", "batch_id", "batchId"))
		recipient := normalizeESOAccountName(firstValue(record, "recipient", "account_name", "displayName", "display_name"))
		amount := asNumber(firstValue(record, "amount", "depositAmount", "deposit_amount"))
		subject := cleanString(firstValue(record, "subject", "mail_subject", "mailSubject"))
		if subject == "" {
			subject = "Raffle ticket deposit received"
		}
		body := cleanString(firstValue(record, "body", "mail_body", "mailBody", "note"))
		if body == "" {
			body = makeDefaultDepositMailBody(recipient, amount)
		}
		createdAt := cleanString(firstValue(record, "created_at", "createdAt", "checked_out_at", "checkedOutAt"))
		if createdAt == "" {
			createdAt = time.Now().Format(time.RFC3339)
		}

		result = append(result, map[string]interface{}{
			"mail_request_id": requestID,
			"event_id":        eventID,
			"recipient":       recipient,
			"subject":         subject,
			"body":            body,
			"amount":          amount,
			"created_at":      createdAt,
			"batch_id":        batchID,
		})
	}
	return result
}

func normalizeExistingMailQueue(value interface{}) map[string]interface{} {
	result := map[string]interface{}{}
	if existing, ok := value.(map[string]interface{}); ok {
		for key, item := range existing {
			requestID := cleanString(key)
			if requestID == "" {
				continue
			}
			result[requestID] = item
		}
	}
	return result
}

func makeDepositMailRequestID(eventID string) string {
	cleanEventID := strings.TrimSpace(eventID)
	if cleanEventID == "" {
		cleanEventID = "unknown"
	}
	return fmt.Sprintf("mail_%s_%d", cleanEventID, time.Now().UnixNano())
}

func makeDefaultDepositMailBody(recipient string, amount float64) string {
	amountText := strconv.FormatInt(int64(amount), 10)
	if recipient == "" {
		return fmt.Sprintf("Your raffle ticket deposit of %s gold has been received.", amountText)
	}
	return fmt.Sprintf("Hi %s, your raffle ticket deposit of %s gold has been received.", recipient, amountText)
}
func firstValue(record map[string]interface{}, keys ...string) interface{} {
	for _, key := range keys {
		if v, ok := record[key]; ok {
			return v
		}
	}
	return nil
}
func cleanString(value interface{}) string {
	if value == nil {
		return ""
	}
	return strings.TrimSpace(fmt.Sprint(value))
}
func normalizeESOAccountName(value interface{}) string {
	recipient := cleanString(value)
	if recipient == "" {
		return ""
	}
	if strings.HasPrefix(recipient, "@") {
		return recipient
	}
	return "@" + recipient
}

func asNumber(value interface{}) float64 {
	n, _ := strconv.ParseFloat(strings.TrimSpace(fmt.Sprint(value)), 64)
	return n
}

func renderLuaAssignment(tableName string, value interface{}) string {
	if !luaIdentifierPattern.MatchString(tableName) {
		tableName = "GuildSyncBanking"
	}
	return tableName + " =\n" + renderLuaValue(value, 0)
}
func renderLuaValue(value interface{}, indent int) string {
	switch typed := value.(type) {
	case map[string]interface{}:
		return renderLuaMap(typed, indent)
	case []interface{}:
		return renderLuaArray(typed, indent)
	case string:
		return `"` + luaString(typed) + `"`
	case bool:
		if typed {
			return "true"
		}
		return "false"
	case nil:
		return "nil"
	case float64:
		if typed == float64(int64(typed)) {
			return strconv.FormatInt(int64(typed), 10)
		}
		return strconv.FormatFloat(typed, 'f', -1, 64)
	case int:
		return strconv.Itoa(typed)
	case int64:
		return strconv.FormatInt(typed, 10)
	default:
		b, err := json.Marshal(typed)
		if err == nil {
			return `"` + luaString(string(b)) + `"`
		}
		return `"` + luaString(fmt.Sprint(typed)) + `"`
	}
}
func renderLuaMap(m map[string]interface{}, indent int) string {
	var buf bytes.Buffer
	pad := strings.Repeat(" ", indent)
	childPad := strings.Repeat(" ", indent+4)
	buf.WriteString("{\n")
	keys := make([]string, 0, len(m))
	for k := range m {
		keys = append(keys, k)
	}
	sort.SliceStable(keys, func(i, j int) bool {
		return luaRenderKeyRank(keys[i]) < luaRenderKeyRank(keys[j]) || (luaRenderKeyRank(keys[i]) == luaRenderKeyRank(keys[j]) && keys[i] < keys[j])
	})
	for _, key := range keys {
		buf.WriteString(childPad + `["` + luaString(key) + `"] = ` + renderLuaValue(m[key], indent+4) + ",\n")
	}
	buf.WriteString(pad + "}")
	return buf.String()
}
func renderLuaArray(a []interface{}, indent int) string {
	var buf bytes.Buffer
	pad := strings.Repeat(" ", indent)
	childPad := strings.Repeat(" ", indent+4)
	buf.WriteString("{\n")
	for _, item := range a {
		buf.WriteString(childPad + renderLuaValue(item, indent+4) + ",\n")
	}
	buf.WriteString(pad + "}")
	return buf.String()
}
func luaRenderKeyRank(key string) int {
	switch key {
	case "Default":
		return 1
	case "$AccountWide":
		return 2
	case "version":
		return 3
	case "other":
		return 4
	case "biweekly":
		return 5
	case "monthly":
		return 6
	case "mailQueue":
		return 7
	}
	if strings.HasPrefix(key, "@") {
		return 2
	}
	return 50
}

type DepositMailAckEntry struct {
	MailRequestID string                 `json:"mail_request_id"`
	EventID       string                 `json:"event_id,omitempty"`
	Recipient     string                 `json:"recipient,omitempty"`
	Subject       string                 `json:"subject,omitempty"`
	Body          string                 `json:"body,omitempty"`
	Amount        float64                `json:"amount,omitempty"`
	CreatedAt     string                 `json:"created_at,omitempty"`
	BatchID       string                 `json:"batch_id,omitempty"`
	SentAt        string                 `json:"sent_at,omitempty"`
	Raw           map[string]interface{} `json:"raw,omitempty"`
}

type DepositMailAckReadResult struct {
	OK           bool                  `json:"ok"`
	Message      string                `json:"message"`
	FileName     string                `json:"fileName"`
	FilePath     string                `json:"filePath"`
	AckEntries   []DepositMailAckEntry `json:"ackEntries"`
	AckCount     int                   `json:"ackCount"`
	ESOIsRunning bool                  `json:"esoIsRunning"`
}

type DepositMailAckCleanupResult struct {
	OK                   bool     `json:"ok"`
	Message              string   `json:"message"`
	FileName             string   `json:"fileName"`
	FilePath             string   `json:"filePath"`
	BackupPath           string   `json:"backupPath,omitempty"`
	RemovedCount         int      `json:"removedCount"`
	PendingCleanupCount  int      `json:"pendingCleanupCount"`
	PendingCleanupStored bool     `json:"pendingCleanupStored"`
	MailRequestIDs       []string `json:"mailRequestIds"`
	ESOIsRunning         bool     `json:"esoIsRunning"`
}

func (a *App) CollectDepositMailAckFromGuildSyncBanking(event GuildSyncSavedVarsFileModifiedEvent) DepositMailAckReadResult {
	watchFile := getSavedVarsWatchFileByKey("banking")
	fileName := filepath.Base(strings.TrimSpace(event.FileName))
	if fileName == "." || fileName == string(filepath.Separator) || fileName == "" {
		fileName = watchFile.FileName
	}
	filePath := strings.TrimSpace(event.FilePath)
	if filePath == "" {
		filePath = filepath.Join(getSavedVarsDir(), fileName)
	}

	result := DepositMailAckReadResult{OK: false, FileName: fileName, FilePath: filePath, ESOIsRunning: isESORunning(), AckEntries: []DepositMailAckEntry{}}

	accountWide, err := readGuildSyncBankingAccountWide(filePath)
	if err != nil {
		result.Message = err.Error()
		return result
	}

	mailAck, _ := getLuaMap(accountWide["mailAck"])
	for key, value := range mailAck {
		entryMap, ok := getLuaMap(value)
		if !ok {
			continue
		}
		mailRequestID := cleanString(firstValue(entryMap, "mail_request_id", "mailRequestId"))
		if mailRequestID == "" {
			mailRequestID = cleanString(key)
		}
		if mailRequestID == "" {
			continue
		}
		result.AckEntries = append(result.AckEntries, DepositMailAckEntry{
			MailRequestID: mailRequestID,
			EventID:       cleanString(firstValue(entryMap, "event_id", "eventId")),
			Recipient:     cleanString(firstValue(entryMap, "recipient")),
			Subject:       cleanString(firstValue(entryMap, "subject")),
			Body:          cleanString(firstValue(entryMap, "body")),
			Amount:        asNumber(firstValue(entryMap, "amount")),
			CreatedAt:     cleanString(firstValue(entryMap, "created_at", "createdAt")),
			BatchID:       cleanString(firstValue(entryMap, "batch_id", "batchId")),
			SentAt:        cleanString(firstValue(entryMap, "sent_at", "sentAt", "ack_at", "ackAt")),
			Raw:           entryMap,
		})
	}

	sort.SliceStable(result.AckEntries, func(i, j int) bool {
		return result.AckEntries[i].MailRequestID < result.AckEntries[j].MailRequestID
	})

	result.OK = true
	result.AckCount = len(result.AckEntries)
	if result.AckCount == 0 {
		result.Message = fmt.Sprintf("No deposit mail acknowledgements found in %s.", fileName)
	} else {
		result.Message = fmt.Sprintf("Found %d deposit mail acknowledgement(s) in %s.", result.AckCount, fileName)
	}
	return result
}

func (a *App) CleanupDepositMailAckFromGuildSyncBanking(mailRequestIDs []string) DepositMailAckCleanupResult {
	watchFile := getSavedVarsWatchFileByKey("banking")
	fileName := filepath.Base(strings.TrimSpace(watchFile.FileName))
	if fileName == "." || fileName == string(filepath.Separator) || fileName == "" {
		fileName = "GuildSyncBanking.lua"
	}
	filePath := strings.TrimSpace(watchFile.FilePath)
	if filePath == "" {
		filePath = filepath.Join(getSavedVarsDir(), fileName)
	}

	ids := normalizeMailRequestIDList(mailRequestIDs)
	result := DepositMailAckCleanupResult{OK: false, FileName: fileName, FilePath: filePath, MailRequestIDs: ids, ESOIsRunning: isESORunning()}
	if len(ids) == 0 {
		result.Message = "No deposit mail acknowledgement IDs were provided for cleanup."
		return result
	}
	if result.ESOIsRunning {
		pending, err := addPendingDepositMailAckCleanupIDs(ids)
		if err != nil {
			result.Message = fmt.Sprintf("ESO is running and pending deposit mail acknowledgement cleanup could not be stored: %v", err)
			return result
		}
		result.OK = true
		result.PendingCleanupStored = true
		result.PendingCleanupCount = len(pending)
		result.Message = fmt.Sprintf("ESO is running. Stored %d deposit mail acknowledgement cleanup item(s) for later.", len(ids))
		return result
	}
	return removeDepositMailAckIDsFromFile(filePath, fileName, ids, false)
}

func (a *App) FlushPendingDepositMailAckCleanup() DepositMailAckCleanupResult {
	watchFile := getSavedVarsWatchFileByKey("banking")
	fileName := filepath.Base(strings.TrimSpace(watchFile.FileName))
	if fileName == "." || fileName == string(filepath.Separator) || fileName == "" {
		fileName = "GuildSyncBanking.lua"
	}
	filePath := strings.TrimSpace(watchFile.FilePath)
	if filePath == "" {
		filePath = filepath.Join(getSavedVarsDir(), fileName)
	}

	ids, err := loadPendingDepositMailAckCleanupIDs()
	result := DepositMailAckCleanupResult{OK: false, FileName: fileName, FilePath: filePath, MailRequestIDs: ids, ESOIsRunning: isESORunning()}
	if err != nil {
		result.Message = fmt.Sprintf("Pending deposit mail acknowledgement cleanup could not be read: %v", err)
		return result
	}
	if len(ids) == 0 {
		result.OK = true
		result.Message = "No pending deposit mail acknowledgement cleanup is stored."
		return result
	}
	if result.ESOIsRunning {
		result.OK = true
		result.PendingCleanupStored = true
		result.PendingCleanupCount = len(ids)
		result.Message = fmt.Sprintf("ESO is running. %d deposit mail acknowledgement cleanup item(s) remain pending.", len(ids))
		return result
	}
	cleanupResult := removeDepositMailAckIDsFromFile(filePath, fileName, ids, true)
	if cleanupResult.OK {
		_ = savePendingDepositMailAckCleanupIDs([]string{})
	}
	return cleanupResult
}

func readGuildSyncBankingAccountWide(filePath string) (map[string]interface{}, error) {
	info, err := os.Stat(filePath)
	if err != nil {
		return nil, fmt.Errorf("GuildSyncBanking SavedVariables file could not be read: %v", err)
	}
	if info.IsDir() {
		return nil, fmt.Errorf("GuildSyncBanking SavedVariables path is a directory, not a file: %s", filePath)
	}
	originalBytes, err := os.ReadFile(filePath)
	if err != nil {
		return nil, fmt.Errorf("GuildSyncBanking SavedVariables file could not be read: %v", err)
	}
	extracted, err := extractFirstAvailableLuaTable(string(originalBytes), getBankingSavedVarsTableNames())
	if err != nil {
		return nil, err
	}
	parsed, err := parseEsoLuaTable(extracted.tableText)
	if err != nil {
		return nil, fmt.Errorf("GuildSyncBanking SavedVariables file could not be parsed: %v", err)
	}
	parsedMap, ok := parsed.(map[string]interface{})
	if !ok {
		return nil, fmt.Errorf("%s did not parse as a Lua table object", extracted.tableName)
	}
	defaultSection, ok := getLuaMap(parsedMap["Default"])
	if !ok {
		return nil, fmt.Errorf("Could not find %s.Default", extracted.tableName)
	}
	accountName := getFirstEsoAccountName(defaultSection)
	if accountName == "" {
		return nil, fmt.Errorf("Could not find an ESO account name under %s.Default", extracted.tableName)
	}
	accountSection, ok := getLuaMap(defaultSection[accountName])
	if !ok {
		return nil, fmt.Errorf("Could not find %s.Default[\"%s\"]", extracted.tableName, accountName)
	}
	accountWide, ok := getLuaMap(accountSection["$AccountWide"])
	if !ok {
		return nil, fmt.Errorf("Could not find %s.Default[\"%s\"][\"$AccountWide\"]", extracted.tableName, accountName)
	}
	return accountWide, nil
}

func removeDepositMailAckIDsFromFile(filePath string, fileName string, ids []string, fromPending bool) DepositMailAckCleanupResult {
	ids = normalizeMailRequestIDList(ids)
	result := DepositMailAckCleanupResult{OK: false, FileName: fileName, FilePath: filePath, MailRequestIDs: ids, ESOIsRunning: isESORunning()}
	if len(ids) == 0 {
		result.Message = "No deposit mail acknowledgement IDs were provided for cleanup."
		return result
	}
	if result.ESOIsRunning {
		pending, err := addPendingDepositMailAckCleanupIDs(ids)
		if err != nil {
			result.Message = fmt.Sprintf("ESO is running and pending deposit mail acknowledgement cleanup could not be stored: %v", err)
			return result
		}
		result.OK = true
		result.PendingCleanupStored = true
		result.PendingCleanupCount = len(pending)
		result.Message = fmt.Sprintf("ESO is running. %d deposit mail acknowledgement cleanup item(s) remain pending.", len(pending))
		return result
	}

	info, err := os.Stat(filePath)
	if err != nil {
		result.Message = fmt.Sprintf("GuildSyncBanking SavedVariables file could not be read for mailAck cleanup: %v", err)
		return result
	}
	if info.IsDir() {
		result.Message = fmt.Sprintf("GuildSyncBanking SavedVariables cleanup path is a directory, not a file: %s", filePath)
		return result
	}
	originalBytes, err := os.ReadFile(filePath)
	if err != nil {
		result.Message = fmt.Sprintf("GuildSyncBanking SavedVariables file could not be read for mailAck cleanup: %v", err)
		return result
	}
	originalText := string(originalBytes)
	extracted, err := extractFirstAvailableLuaTable(originalText, getBankingSavedVarsTableNames())
	if err != nil {
		result.Message = err.Error()
		return result
	}
	parsed, err := parseEsoLuaTable(extracted.tableText)
	if err != nil {
		result.Message = fmt.Sprintf("GuildSyncBanking SavedVariables file could not be parsed for mailAck cleanup: %v", err)
		return result
	}
	parsedMap, ok := parsed.(map[string]interface{})
	if !ok {
		result.Message = fmt.Sprintf("%s did not parse as a Lua table object.", extracted.tableName)
		return result
	}
	accountWide, err := findGuildSyncBankingAccountWide(parsedMap, extracted.tableName)
	if err != nil {
		result.Message = err.Error()
		return result
	}
	mailAck := normalizeExistingMailQueue(accountWide["mailAck"])
	idSet := map[string]bool{}
	for _, id := range ids {
		idSet[id] = true
	}
	removedCount := 0
	for id := range idSet {
		if _, exists := mailAck[id]; exists {
			delete(mailAck, id)
			removedCount++
		}
	}
	accountWide["mailAck"] = mailAck

	backupPath := fmt.Sprintf("%s.backup-%d", filePath, time.Now().UnixMilli())
	if err := os.WriteFile(backupPath, originalBytes, 0644); err != nil {
		result.Message = fmt.Sprintf("Mail acknowledgement cleanup could not create a backup file: %v", err)
		return result
	}
	newTableText := renderLuaAssignment(extracted.tableName, parsedMap)
	newSavedVarsText := originalText[:extracted.assignmentStart] + newTableText + originalText[extracted.tableEnd:]
	if err := os.WriteFile(filePath, []byte(newSavedVarsText), info.Mode().Perm()); err != nil {
		result.Message = fmt.Sprintf("Mail acknowledgement backup was created, but SavedVariables file could not be updated: %v", err)
		return result
	}
	if fromPending {
		_ = removePendingDepositMailAckCleanupIDs(ids)
	}
	result.OK = true
	result.BackupPath = backupPath
	result.RemovedCount = removedCount
	result.PendingCleanupCount = len(mustLoadPendingDepositMailAckCleanupIDs())
	if removedCount == 0 {
		result.Message = fmt.Sprintf("No matching deposit mail acknowledgement entries remained in %s.", fileName)
	} else {
		result.Message = fmt.Sprintf("Removed %d deposit mail acknowledgement(s) from %s.", removedCount, fileName)
	}
	return result
}

func findGuildSyncBankingAccountWide(parsedMap map[string]interface{}, tableName string) (map[string]interface{}, error) {
	defaultSection, ok := getLuaMap(parsedMap["Default"])
	if !ok {
		return nil, fmt.Errorf("Could not find %s.Default", tableName)
	}
	accountName := getFirstEsoAccountName(defaultSection)
	if accountName == "" {
		return nil, fmt.Errorf("Could not find an ESO account name under %s.Default", tableName)
	}
	accountSection, ok := getLuaMap(defaultSection[accountName])
	if !ok {
		return nil, fmt.Errorf("Could not find %s.Default[\"%s\"]", tableName, accountName)
	}
	accountWide, ok := getLuaMap(accountSection["$AccountWide"])
	if !ok {
		return nil, fmt.Errorf("Could not find %s.Default[\"%s\"][\"$AccountWide\"]", tableName, accountName)
	}
	return accountWide, nil
}

func normalizeMailRequestIDList(ids []string) []string {
	seen := map[string]bool{}
	result := []string{}
	for _, id := range ids {
		cleaned := strings.TrimSpace(id)
		if cleaned == "" || seen[cleaned] {
			continue
		}
		seen[cleaned] = true
		result = append(result, cleaned)
	}
	sort.Strings(result)
	return result
}

func getDepositMailAckCleanupPath() (string, error) {
	configDir, err := os.UserConfigDir()
	if err != nil {
		return "", err
	}
	return filepath.Join(configDir, "GuildSync", "pending-deposit-mail-ack-cleanup.json"), nil
}

func loadPendingDepositMailAckCleanupIDs() ([]string, error) {
	path, err := getDepositMailAckCleanupPath()
	if err != nil {
		return []string{}, err
	}
	data, err := os.ReadFile(path)
	if err != nil {
		if os.IsNotExist(err) {
			return []string{}, nil
		}
		return []string{}, err
	}
	var ids []string
	if err := json.Unmarshal(data, &ids); err != nil {
		return []string{}, err
	}
	return normalizeMailRequestIDList(ids), nil
}

func mustLoadPendingDepositMailAckCleanupIDs() []string {
	ids, err := loadPendingDepositMailAckCleanupIDs()
	if err != nil {
		return []string{}
	}
	return ids
}

func savePendingDepositMailAckCleanupIDs(ids []string) error {
	path, err := getDepositMailAckCleanupPath()
	if err != nil {
		return err
	}
	if err := os.MkdirAll(filepath.Dir(path), 0755); err != nil {
		return err
	}
	ids = normalizeMailRequestIDList(ids)
	if len(ids) == 0 {
		if err := os.Remove(path); err != nil && !os.IsNotExist(err) {
			return err
		}
		return nil
	}
	data, err := json.MarshalIndent(ids, "", "  ")
	if err != nil {
		return err
	}
	return os.WriteFile(path, data, 0644)
}

func addPendingDepositMailAckCleanupIDs(ids []string) ([]string, error) {
	existing, err := loadPendingDepositMailAckCleanupIDs()
	if err != nil {
		return []string{}, err
	}
	merged := append(existing, ids...)
	merged = normalizeMailRequestIDList(merged)
	if err := savePendingDepositMailAckCleanupIDs(merged); err != nil {
		return []string{}, err
	}
	return merged, nil
}

func removePendingDepositMailAckCleanupIDs(ids []string) error {
	removeSet := map[string]bool{}
	for _, id := range normalizeMailRequestIDList(ids) {
		removeSet[id] = true
	}
	existing, err := loadPendingDepositMailAckCleanupIDs()
	if err != nil {
		return err
	}
	kept := []string{}
	for _, id := range existing {
		if !removeSet[id] {
			kept = append(kept, id)
		}
	}
	return savePendingDepositMailAckCleanupIDs(kept)
}
