GuildSyncBankingState = GuildSyncBankingState or {}
GuildSyncBanking = GuildSyncBanking or {}

local ADDON_NAME = "GuildSyncBanking"
local SAVED_VARS_NAME = "GuildSyncBankingState"
local SAVED_VARS_VERSION = 2

local BANKING_SAVED_VARS_NAME = "GuildSyncBanking"
local BANKING_SAVED_VARS_VERSION = 1

local DUMP_LOOKBACK_DAYS = 2

-- Raffle ticket sales schedule:
-- Anchor sales end: 2026-06-06 23:00:00 UTC
-- Repeats every 14 days.
-- The raffle happens 1 hour after the ticket sales end.
local RAFFLE_SALES_END_ANCHOR_UTC = 1780786800
local RAFFLE_INTERVAL_SECONDS = 14 * 24 * 60 * 60
local RAFFLE_AFTER_SALES_SECONDS = 60 * 60

local HISTORY_TYPES = {
  roster = {
    label = "Roster",
    category = GUILD_HISTORY_EVENT_CATEGORY_ROSTER,
    eventTypeFilter = nil,
    requireCurrencyType = nil,
    outputMode = "roster",
  },

  bank = {
    label = "Bank",
    category = GUILD_HISTORY_EVENT_CATEGORY_BANKED_CURRENCY,
    eventTypeFilter = GUILD_HISTORY_BANKED_CURRENCY_EVENT_DEPOSITED,
    requireCurrencyType = CURT_MONEY,
    outputMode = "bank",
  },
}

-- Runtime-only variables.
-- Do NOT store LibHistoire, processors, ticket tables, or other runtime objects on GuildSyncBankingState,
-- because GuildSyncBankingState is also a SavedVariables table name.
local pocSavedVars = nil
local pocBankingSavedVars = nil
local pocLibHistoire = nil
local pocProcessors = {}
local pocInitialized = false

-- Runtime-only ticket/deposit tables.
-- These are intentionally duplicated into GuildSyncBanking SavedVariables only after duplicate checks.
local pocTickets = {
  biweekly = {},
  monthly = {},
  other = {},
}

local pocTicketEventIds = {}

-- Clean up old top-level runtime fields from previous versions.
-- These may have accidentally been written into SavedVariables.
GuildSyncBankingState.libHistoire = nil
GuildSyncBankingState.processor = nil
GuildSyncBankingState.processors = nil
GuildSyncBankingState.category = nil
GuildSyncBankingState.initialized = nil
GuildSyncBankingState.savedVars = nil
GuildSyncBankingState.history = nil
GuildSyncBankingState.events = nil
GuildSyncBankingState.seenIds = nil
GuildSyncBankingState.seenOrder = nil
GuildSyncBankingState.tickets = nil
GuildSyncBankingState.ticketEventIds = nil

local function POC_Print(message)
  CHAT_ROUTER:AddSystemMessage("|c88CCFF[GuildSyncBanking]|r " .. tostring(message))
end

local function POC_TimeString(timestamp)
  if not timestamp or timestamp == 0 then
    return "unknown"
  end

  return os.date("%Y-%m-%d %H:%M:%S", timestamp)
end

local function POC_UtcTimeString(timestamp)
  if not timestamp or timestamp == 0 then
    return "unknown"
  end

  return os.date("!%Y-%m-%d %H:%M:%S UTC", timestamp)
end

local function POC_Trim(value)
  value = tostring(value or "")

  if zo_strtrim then
    return zo_strtrim(value)
  end

  return value:match("^%s*(.-)%s*$")
end

local function POC_EnsureSavedVars()
  if not pocSavedVars then
    return nil
  end

  -- The ONLY saved structure this addon should keep in GuildSyncBankingState.lua.
  pocSavedVars.types = pocSavedVars.types or {}

  -- Clean up older large fields from previous versions.
  pocSavedVars.processors = nil
  pocSavedVars.history = nil
  pocSavedVars.events = nil
  pocSavedVars.seenIds = nil
  pocSavedVars.seenOrder = nil
  pocSavedVars.libHistoire = nil
  pocSavedVars.processor = nil
  pocSavedVars.processorsRuntime = nil
  pocSavedVars.category = nil
  pocSavedVars.initialized = nil
  pocSavedVars.savedVars = nil
  pocSavedVars.tickets = nil
  pocSavedVars.ticketEventIds = nil

  return pocSavedVars
end

local function POC_EnsureBankingSavedVars()
  if not pocBankingSavedVars then
    return nil
  end

  -- JSON-friendly top-level sections.
  pocBankingSavedVars.biweekly = pocBankingSavedVars.biweekly or {}
  pocBankingSavedVars.monthly = pocBankingSavedVars.monthly or {}
  pocBankingSavedVars.other = pocBankingSavedVars.other or {}

  return pocBankingSavedVars
end

local function POC_BankingEventAlreadySavedAnywhere(eventId)
  local bankingSv = POC_EnsureBankingSavedVars()

  if not bankingSv then
    return false
  end

  eventId = tonumber(eventId)

  if not eventId then
    return false
  end

  local sections = {
    "biweekly",
    "monthly",
    "other",
  }

  for _, sectionName in ipairs(sections) do
    local list = bankingSv[sectionName] or {}

    for _, entry in ipairs(list) do
      if tonumber(entry.eventId) == eventId then
        return true
      end
    end
  end

  return false
end

local function POC_SaveBankingEntry(kind, entry)
  local bankingSv = POC_EnsureBankingSavedVars()

  if not bankingSv then
    POC_Print("Banking SavedVars not ready. Could not save banking entry.")
    return false
  end

  if kind ~= "biweekly" and kind ~= "monthly" and kind ~= "other" then
    POC_Print("Invalid banking section: " .. tostring(kind))
    return false
  end

  if not entry then
    return false
  end

  local eventId = tonumber(entry.eventId)

  if not eventId then
    POC_Print("Banking entry has no numeric EventId. Not saving.")
    return false
  end

  -- Absolute duplicate protection.
  -- One eventId may only appear once anywhere in GuildSyncBanking.lua.
  if POC_BankingEventAlreadySavedAnywhere(eventId) then
    return false
  end

  -- JSON-friendly saved row.
  -- Keep original Linux timestamp in "time".
  local savedEntry = {
    eventId = eventId,
    time = tonumber(entry.timestamp),
    displayName = tostring(entry.displayName or ""),
    amount = tonumber(entry.amount) or 0,
    ticketAmount = tonumber(entry.ticket_amount) or 0,
  }

  table.insert(bankingSv[kind], savedEntry)

  return true
end

local function POC_PrintKnownTypes()
  local names = {}

  for key, _ in pairs(HISTORY_TYPES) do
    table.insert(names, key)
  end

  table.sort(names)

  POC_Print("Known types: " .. table.concat(names, ", "))
end

local function POC_GetHistoryType(typeKey)
  typeKey = string.lower(POC_Trim(typeKey))

  if typeKey == "" then
    POC_Print("History type is required.")
    POC_Print("Example: /gsbdump roster")
    POC_Print("Example: /gsbdump bank")
    POC_Print("Example: /gsbstream roster")
    POC_Print("Example: /gsbstream bank")
    POC_PrintKnownTypes()
    return nil, nil
  end

  local typeInfo = HISTORY_TYPES[typeKey]

  if not typeInfo then
    POC_Print("Unknown history type: " .. tostring(typeKey))
    POC_PrintKnownTypes()
    return nil, nil
  end

  return typeKey, typeInfo
end

local function POC_ParseTypeAndOptionalEventId(args, commandName)
  local parts = {}

  for token in string.gmatch(args or "", "%S+") do
    table.insert(parts, token)
  end

  local typeKey = parts[1]
  local eventIdText = parts[2]

  if not typeKey then
    POC_Print("Usage: /" .. commandName .. " roster")
    POC_Print("Usage: /" .. commandName .. " bank")

    if commandName == "gsbstream" then
      POC_Print("Usage with start event: /gsbstream roster <eventId>")
      POC_Print("Usage with start event: /gsbstream bank <eventId>")
    end

    POC_PrintKnownTypes()
    return nil, nil, nil
  end

  local resolvedTypeKey, typeInfo = POC_GetHistoryType(typeKey)

  if not resolvedTypeKey then
    return nil, nil, nil
  end

  local suppliedEventId = nil

  if eventIdText and eventIdText ~= "" then
    suppliedEventId = tonumber(eventIdText)

    if not suppliedEventId then
      POC_Print("Invalid EventId supplied. Use a numeric event id.")
      return nil, nil, nil
    end
  end

  return resolvedTypeKey, typeInfo, suppliedEventId
end

local function POC_GetTypeState(typeKey)
  local sv = POC_EnsureSavedVars()
  if not sv then
    return nil
  end

  sv.types[typeKey] = sv.types[typeKey] or {
    processors = {},
  }

  -- Clean up any accidental old data under this type.
  sv.types[typeKey].history = nil
  sv.types[typeKey].events = nil
  sv.types[typeKey].seenIds = nil
  sv.types[typeKey].seenOrder = nil
  sv.types[typeKey].processor = nil
  sv.types[typeKey].libHistoire = nil
  sv.types[typeKey].tickets = nil
  sv.types[typeKey].ticketEventIds = nil

  sv.types[typeKey].processors = sv.types[typeKey].processors or {}

  return sv.types[typeKey]
end

local function POC_GetProcessorState(typeKey, processor)
  local typeState = POC_GetTypeState(typeKey)
  if not typeState or not processor then
    return nil, nil
  end

  local processorKey = processor:GetKey()

  typeState.processors[processorKey] = typeState.processors[processorKey] or {}

  local state = typeState.processors[processorKey]

  -- The ONLY value allowed in this table is lastProcessedId.
  state.seenIds = nil
  state.seenOrder = nil
  state.events = nil
  state.history = nil
  state.libHistoire = nil
  state.processor = nil
  state.tickets = nil
  state.ticketEventIds = nil

  -- LibHistoire expects lastProcessedId to be numeric, not a string.
  if state.lastProcessedId ~= nil then
    local numericId = tonumber(state.lastProcessedId)

    if numericId then
      state.lastProcessedId = numericId
    else
      POC_Print("Saved LastProcessedId for " .. tostring(typeKey) .. " was not numeric. Clearing it.")
      state.lastProcessedId = nil
    end
  end

  return state, processorKey
end

local function POC_GetCurrentRaffleWindow()
  local now = GetTimeStamp()
  local salesEnd = RAFFLE_SALES_END_ANCHOR_UTC

  -- Move backward if the client time is before the anchor for any reason.
  while salesEnd - RAFFLE_INTERVAL_SECONDS > now do
    salesEnd = salesEnd - RAFFLE_INTERVAL_SECONDS
  end

  -- Current raffle sales window means the next sales end at or after now.
  while salesEnd < now do
    salesEnd = salesEnd + RAFFLE_INTERVAL_SECONDS
  end

  local salesStart = salesEnd - RAFFLE_INTERVAL_SECONDS + 1
  local raffleTime = salesEnd + RAFFLE_AFTER_SALES_SECONDS

  return {
    now = now,
    salesStart = salesStart,
    salesEnd = salesEnd,
    raffleTime = raffleTime,
  }
end

local function POC_IsTimestampInCurrentRaffleSalesWindow(timestamp)
  timestamp = tonumber(timestamp)

  if not timestamp then
    return false
  end

  local window = POC_GetCurrentRaffleWindow()

  return timestamp >= window.salesStart and timestamp <= window.salesEnd
end

local function POC_PrintRaffleWindow(window)
  if not window then
    window = POC_GetCurrentRaffleWindow()
  end

  POC_Print("Current raffle sales window:")
  POC_Print("Now: " .. POC_TimeString(window.now) .. " / " .. POC_UtcTimeString(window.now))
  POC_Print("Sales Start: " .. POC_TimeString(window.salesStart) .. " / " .. POC_UtcTimeString(window.salesStart))
  POC_Print("Sales End: " .. POC_TimeString(window.salesEnd) .. " / " .. POC_UtcTimeString(window.salesEnd))
  POC_Print("Raffle Time: " .. POC_TimeString(window.raffleTime) .. " / " .. POC_UtcTimeString(window.raffleTime))
end

local function POC_EventPassesBaseFilter(typeInfo, event)
  if typeInfo.eventTypeFilter and event:GetEventType() ~= typeInfo.eventTypeFilter then
    return false
  end

  if typeInfo.requireCurrencyType then
    local info = event:GetEventInfo()
    local currencyType = info and info.currencyType or nil

    if currencyType ~= typeInfo.requireCurrencyType then
      return false
    end
  end

  return true
end

local function POC_GetBankTicketKindAndAmount(amount)
  amount = tonumber(amount)

  if not amount then
    return nil, nil
  end

  local lastDigit = amount % 10

  if amount >= 500 and lastDigit == 1 then
    local ticketAmount = (amount - 1) / 500
    return "biweekly", ticketAmount
  end

  if amount >= 2500 and lastDigit == 3 then
    local ticketAmount = (amount - 3) / 2500
    return "monthly", ticketAmount
  end

  -- Valid gold bank deposit, but not a ticket purchase.
  return "other", nil
end

local function POC_RecordBankTicket(kind, event, ticketAmount)
  if not kind or not pocTickets[kind] or not event then
    return nil
  end

  local info = event:GetEventInfo()
  if not info then
    return nil
  end

  local eventId = event:GetEventId()
  local eventIdKey = tostring(eventId)

  -- Avoid duplicate ticket rows in the current session if dump/stream overlap.
  if pocTicketEventIds[eventIdKey] then
    return nil
  end

  local entry = {
    eventId = eventId,
    timestamp = event:GetEventTimestampS(),
    displayName = info.displayName,
    amount = tonumber(info.amount),
    ticket_amount = ticketAmount,
  }

  table.insert(pocTickets[kind], entry)

  -- Save to separate GuildSyncBanking.lua SavedVariables file.
  -- Duplicate saved eventIds are ignored across biweekly/monthly/other.
  local saved = POC_SaveBankingEntry(kind, entry)

  if saved then
    POC_Print("Saved banking entry EventId=" .. tostring(eventId) .. " to " .. tostring(kind) .. ".")
  else
    POC_Print("Banking entry EventId=" .. tostring(eventId) .. " was already saved or could not be saved.")
  end

  pocTicketEventIds[eventIdKey] = true

  return entry
end

local function POC_ProcessBankTicketEvent(event)
  local info = event:GetEventInfo()
  if not info then
    return nil, nil
  end

  local eventTimestamp = event:GetEventTimestampS()

  if not POC_IsTimestampInCurrentRaffleSalesWindow(eventTimestamp) then
    return nil, nil
  end

  local amount = tonumber(info.amount)
  local kind, ticketAmount = POC_GetBankTicketKindAndAmount(amount)

  if not kind then
    return nil, nil
  end

  local entry = POC_RecordBankTicket(kind, event, ticketAmount)

  return kind, entry
end

local function POC_PrintRosterEvent(typeKey, event)
  local eventId = event:GetEventId()
  local eventTime = POC_TimeString(event:GetEventTimestampS())
  local eventType = event:GetEventType()
  local info = event:GetEventInfo()

  local target = info and info.targetDisplayName or nil
  local actor = info and info.actingDisplayName or nil
  local rank = info and info.rankId or nil

  POC_Print(
    "[" .. tostring(typeKey) .. "] "
    .. "EventId=" .. tostring(eventId)
    .. " Time=" .. tostring(eventTime)
    .. " Type=" .. tostring(eventType)
    .. " Target=" .. tostring(target)
    .. " Actor=" .. tostring(actor)
    .. " Rank=" .. tostring(rank)
  )
end

local function POC_PrintBankTicketEvent(typeKey, kind, entry)
  if not entry then
    return
  end

  local line =
      "[" .. tostring(typeKey) .. "/" .. tostring(kind) .. "] "
      .. "EventId=" .. tostring(entry.eventId)
      .. " Time=" .. POC_TimeString(entry.timestamp)
      .. " DisplayName=" .. tostring(entry.displayName)
      .. " Amount=" .. tostring(entry.amount)

  if kind ~= "other" then
    line = line .. " TicketAmount=" .. tostring(entry.ticket_amount)
  end

  POC_Print(line)
end

local function POC_PrintEvent(typeKey, typeInfo, event)
  if typeInfo.outputMode == "bank" then
    local kind, entry = POC_ProcessBankTicketEvent(event)

    if kind and entry then
      POC_PrintBankTicketEvent(typeKey, kind, entry)
    end

    return
  end

  POC_PrintRosterEvent(typeKey, event)
end

local function POC_PrintTicketList(ticketType)
  ticketType = string.lower(POC_Trim(ticketType))

  if ticketType ~= "biweekly" and ticketType ~= "monthly" and ticketType ~= "other" then
    POC_Print("Usage: /gsbtickets biweekly")
    POC_Print("Usage: /gsbtickets monthly")
    POC_Print("Usage: /gsbtickets other")
    return
  end

  local list = pocTickets[ticketType] or {}

  POC_Print("Ticket list: " .. tostring(ticketType) .. " Count=" .. tostring(#list))

  if #list == 0 then
    POC_Print("No " .. tostring(ticketType) .. " entries captured this session.")
    return
  end

  for i, entry in ipairs(list) do
    local line =
        tostring(i)
        .. ". EventId=" .. tostring(entry.eventId)
        .. " Time=" .. POC_TimeString(entry.timestamp)
        .. " DisplayName=" .. tostring(entry.displayName)
        .. " Amount=" .. tostring(entry.amount)

    if ticketType ~= "other" then
      line = line .. " TicketAmount=" .. tostring(entry.ticket_amount)
    end

    POC_Print(line)
  end
end

local POC_StartStream
local POC_GetRunningProcessor

local function POC_StartDefaultBankStream()
  local processor = POC_GetRunningProcessor("bank")

  if processor and processor:IsRunning() then
    POC_Print("Bank stream is already running.")
    return
  end

  POC_Print("Starting banking stream automatically.")
  POC_StartStream("bank")
end

local function POC_InitLibHistoire()
  if pocInitialized then
    POC_Print("LibHistoire already initialized.")
    POC_StartDefaultBankStream()
    return
  end

  if not LibHistoire then
    POC_Print("LibHistoire global not found. Is LibHistoire enabled and listed as a dependency?")
    return
  end

  pocInitialized = true
  POC_Print("Waiting for LibHistoire OnReady...")

  LibHistoire:OnReady(function(lib)
    -- Runtime-only. Do not store this on GuildSyncBankingState or in SavedVariables.
    pocLibHistoire = lib

    POC_Print("LibHistoire is ready.")
    POC_StartDefaultBankStream()
  end)
end

local function POC_CreateProcessor(typeKey, typeInfo, guildId)
  if not pocLibHistoire then
    POC_Print("LibHistoire is not ready yet. Run /gsbinit first.")
    return nil
  end

  if not guildId or guildId == 0 then
    POC_Print("Invalid guildId.")
    return nil
  end

  POC_Print(
    "Creating LibHistoire processor for type "
    .. tostring(typeKey)
    .. ", guildId: "
    .. tostring(guildId)
  )

  local processor = pocLibHistoire:CreateGuildHistoryProcessor(
    guildId,
    typeInfo.category,
    ADDON_NAME .. "-" .. typeKey
  )

  if not processor then
    POC_Print("Processor could not be created for type " .. tostring(typeKey) .. ".")
    POC_Print("LibHistoire may not have a cache for this guild/category yet.")
    return nil
  end

  -- Runtime-only, unique per type.
  pocProcessors[typeKey] = processor

  local key = processor:GetKey()
  POC_Print("Processor key for " .. tostring(typeKey) .. ": " .. tostring(key))

  return processor
end

POC_GetRunningProcessor = function(typeKey)
  return pocProcessors[typeKey]
end

local function POC_DumpHistory(args)
  local typeKey, typeInfo = POC_ParseTypeAndOptionalEventId(args, "gsbdump")

  if not typeKey then
    return
  end

  if not pocLibHistoire then
    POC_Print("LibHistoire is not initialized. Run /gsbinit first.")
    return
  end

  local existingProcessor = POC_GetRunningProcessor(typeKey)

  if existingProcessor and existingProcessor:IsRunning() then
    POC_Print("Processor for " ..
      tostring(typeKey) ..
      " is already running. Wait for it to finish or use /gsbstop " .. tostring(typeKey) .. ".")
    return
  end

  local guildId = GetGuildId(1)
  POC_Print("Guild index 1 guildId: " .. tostring(guildId))

  local processor = POC_CreateProcessor(typeKey, typeInfo, guildId)
  if not processor then
    return
  end

  if processor.SetStopOnLastCachedEvent then
    processor:SetStopOnLastCachedEvent(true)
  end

  local startTime
  local endTime

  if typeKey == "bank" then
    local window = POC_GetCurrentRaffleWindow()
    startTime = window.salesStart
    endTime = window.salesEnd
    POC_PrintRaffleWindow(window)
  else
    endTime = GetTimeStamp()
    startTime = endTime - (DUMP_LOOKBACK_DAYS * 24 * 60 * 60)
  end

  POC_Print("Starting time-range dump for type: " .. tostring(typeKey))
  POC_Print("Start: " .. POC_TimeString(startTime) .. " / " .. POC_UtcTimeString(startTime))
  POC_Print("End: " .. POC_TimeString(endTime) .. " / " .. POC_UtcTimeString(endTime))

  local started = processor:StartIteratingTimeRange(
    startTime,
    endTime,
    function(event)
      -- Print and record ticket/deposit rows.
      -- Banking rows are saved to GuildSyncBanking.lua after duplicate checks.
      if POC_EventPassesBaseFilter(typeInfo, event) then
        POC_PrintEvent(typeKey, typeInfo, event)
      end
    end,
    function(reason)
      POC_Print("Time-range dump stopped for " .. tostring(typeKey) .. ". Reason=" .. tostring(reason))
    end
  )

  if not started then
    POC_Print("Processor time-range dump could not be started for type " .. tostring(typeKey) .. ".")
  else
    POC_Print("Processor time-range dump started for type " .. tostring(typeKey) .. ".")
  end
end

POC_StartStream = function(args)
  local typeKey, typeInfo, suppliedEventId = POC_ParseTypeAndOptionalEventId(args, "gsbstream")

  if not typeKey then
    return
  end

  if not pocLibHistoire then
    POC_Print("LibHistoire is not initialized. Run /gsbinit first.")
    return
  end

  local existingProcessor = POC_GetRunningProcessor(typeKey)

  if existingProcessor and existingProcessor:IsRunning() then
    POC_Print("Processor for " ..
      tostring(typeKey) .. " is already running. Use /gsbstop " .. tostring(typeKey) .. " first if needed.")
    return
  end

  local guildId = GetGuildId(1)
  POC_Print("Guild index 1 guildId: " .. tostring(guildId))

  local processor = POC_CreateProcessor(typeKey, typeInfo, guildId)
  if not processor then
    return
  end

  if not processor.StartStreaming then
    POC_Print("This processor does not have StartStreaming(). Your LibHistoire version may be outdated.")
    return
  end

  local state, processorKey = POC_GetProcessorState(typeKey, processor)
  if not state then
    POC_Print("Could not create processor state for type " .. tostring(typeKey) .. ".")
    return
  end

  if typeKey == "bank" then
    POC_PrintRaffleWindow(POC_GetCurrentRaffleWindow())
  end

  local lastProcessedId = suppliedEventId or state.lastProcessedId

  if lastProcessedId ~= nil then
    lastProcessedId = tonumber(lastProcessedId)

    if not lastProcessedId then
      POC_Print("Saved LastProcessedId for " .. tostring(typeKey) .. " was not numeric. Clearing it.")
      state.lastProcessedId = nil
      lastProcessedId = nil
    end
  end

  if suppliedEventId then
    POC_Print("Starting " .. tostring(typeKey) .. " stream after supplied EventId=" .. tostring(suppliedEventId))
  else
    POC_Print("Starting " .. tostring(typeKey) .. " stream after saved LastProcessedId=" .. tostring(lastProcessedId))
  end

  local started = processor:StartStreaming(lastProcessedId, function(event)
    local eventId = event:GetEventId()

    -- The ONLY saved stream progress data in GuildSyncBankingState.lua:
    -- Save the last seen event id for this type/processor.
    -- This happens before filtering so skipped events do not repeat forever.
    state.lastProcessedId = tonumber(eventId)

    if not POC_EventPassesBaseFilter(typeInfo, event) then
      return
    end

    -- Banking rows are saved to GuildSyncBanking.lua after duplicate checks.
    POC_PrintEvent(typeKey, typeInfo, event)
  end)

  if not started then
    POC_Print("Stream could not be started for " .. tostring(typeKey) .. ". It may already be running.")
  else
    if suppliedEventId then
      state.lastProcessedId = tonumber(suppliedEventId)
    end

    POC_Print("Stream started for type " .. tostring(typeKey) .. ", key " .. tostring(processorKey))
  end
end

local function POC_StopProcessor(args)
  local typeKey = POC_GetHistoryType(args)

  if not typeKey then
    return
  end

  local processor = POC_GetRunningProcessor(typeKey)

  if not processor then
    POC_Print("No processor has been created for type " .. tostring(typeKey) .. ".")
    return
  end

  if not processor.Stop then
    POC_Print("Current processor for " .. tostring(typeKey) .. " does not expose Stop().")
    return
  end

  local stopped = processor:Stop()
  pocProcessors[typeKey] = nil

  POC_Print("Processor stopped for " .. tostring(typeKey) .. ": " .. tostring(stopped))
end

local function POC_ResetProgress(args)
  local typeKey = POC_GetHistoryType(args)

  if not typeKey then
    return
  end

  local sv = POC_EnsureSavedVars()
  if not sv then
    POC_Print("SavedVars not ready.")
    return
  end

  sv.types[typeKey] = nil

  -- Do not stop automatically, but clear runtime slot if one exists and is not running.
  if pocProcessors[typeKey] and not pocProcessors[typeKey]:IsRunning() then
    pocProcessors[typeKey] = nil
  end

  POC_Print("Processor progress reset for type " .. tostring(typeKey) .. ".")
end

local function POC_RunStatus(args)
  local typeKey = POC_GetHistoryType(args)

  if not typeKey then
    return
  end

  local processor = POC_GetRunningProcessor(typeKey)

  if processor then
    POC_Print("Processor running for " .. tostring(typeKey) .. ": " .. tostring(processor:IsRunning()))
  else
    POC_Print("No processor has been created for type " .. tostring(typeKey) .. ".")
  end
end

local function OnAddonLoaded(eventCode, addonName)
  if addonName ~= ADDON_NAME then
    return
  end

  EVENT_MANAGER:UnregisterForEvent(ADDON_NAME, EVENT_ADD_ON_LOADED)

  pocSavedVars = ZO_SavedVars:NewAccountWide(
    SAVED_VARS_NAME,
    SAVED_VARS_VERSION,
    nil,
    {
      types = {},
    }
  )

  pocBankingSavedVars = ZO_SavedVars:NewAccountWide(
    BANKING_SAVED_VARS_NAME,
    BANKING_SAVED_VARS_VERSION,
    nil,
    {
      biweekly = {},
      monthly = {},
      other = {},
    }
  )

  POC_EnsureSavedVars()
  POC_EnsureBankingSavedVars()

  SLASH_COMMANDS["/gsbsave"] = function(args)
    -- Intentionally do not save anything here.
    -- GuildSyncBankingState.lua only saves stream lastProcessedId.
    -- GuildSyncBanking.lua saves banking rows.
    POC_Print("/gsbsave disabled. This addon saves stream progress and banking entries automatically.")
  end

  SLASH_COMMANDS["/gsbinit"] = function()
    -- Manual retry/status helper. Startup calls this automatically.
    POC_InitLibHistoire()
  end

  SLASH_COMMANDS["/gsbrun"] = function(args)
    POC_RunStatus(args)
  end

  SLASH_COMMANDS["/gsbdump"] = function(args)
    POC_DumpHistory(args)
  end

  SLASH_COMMANDS["/gsbstream"] = function(args)
    POC_StartStream(args)
  end

  SLASH_COMMANDS["/gsbstop"] = function(args)
    POC_StopProcessor(args)
  end

  SLASH_COMMANDS["/gsbreset"] = function(args)
    POC_ResetProgress(args)
  end

  SLASH_COMMANDS["/gsbtickets"] = function(args)
    POC_PrintTicketList(args)
  end

  POC_Print("GuildSyncBanking loaded. LibHistoire will initialize automatically.")
  POC_Print("Bank stream will start automatically when LibHistoire is ready.")
  POC_Print("Manual commands: /gsbdump bank, /gsbstream bank, /gsbstop bank, /gsbtickets biweekly|monthly|other")
  POC_Print("Banking SavedVars: GuildSyncBanking.lua with biweekly, monthly, and other sections.")

  POC_InitLibHistoire()
end

EVENT_MANAGER:RegisterForEvent(
  ADDON_NAME,
  EVENT_ADD_ON_LOADED,
  OnAddonLoaded
)
