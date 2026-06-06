GuildSyncBankingState = GuildSyncBankingState or {}
GuildSyncBanking = GuildSyncBanking or {}

local ADDON_NAME = "GuildSyncBanking"
local SAVED_VARS_NAME = "GuildSyncBankingState"
local SAVED_VARS_VERSION = 2

local BANKING_SAVED_VARS_NAME = "GuildSyncBanking"
local BANKING_SAVED_VARS_VERSION = 1

local DUMP_LOOKBACK_DAYS = 7

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
local gsbSavedVars = nil
local gsbBankingSavedVars = nil
local gsbLibHistoire = nil
local gsbProcessors = {}
local gsbInitialized = false

-- Runtime-only ticket/deposit tables.
-- These are intentionally duplicated into GuildSyncBanking SavedVariables only after duplicate checks.
local gsbTickets = {
  biweekly = {},
  monthly = {},
  other = {},
}

local gsbTicketEventIds = {}


local TARGET_GUILD_NAME = "Alphabet Mafia"

local function GSB_GetTargetGuildId()
  for guildIndex = 1, GetNumGuilds() do
    local guildId = GetGuildId(guildIndex)
    local guildName = GetGuildName(guildId)

    if GSB_Trim(guildName) == TARGET_GUILD_NAME then
      return guildId, guildIndex, guildName
    end
  end

  GSB_Print("Could not find guild named: " .. TARGET_GUILD_NAME)
  return nil, nil, nil
end

local function GSB_Print(message)
  CHAT_ROUTER:AddSystemMessage("|c88CCFF[GuildSyncBanking]|r " .. tostring(message))
end

local function GSB_TimeString(timestamp)
  if not timestamp or timestamp == 0 then
    return "unknown"
  end

  return os.date("%Y-%m-%d %H:%M:%S", timestamp)
end

local function GSB_UtcTimeString(timestamp)
  if not timestamp or timestamp == 0 then
    return "unknown"
  end

  return os.date("!%Y-%m-%d %H:%M:%S UTC", timestamp)
end

local function GSB_Trim(value)
  value = tostring(value or "")

  if zo_strtrim then
    return zo_strtrim(value)
  end

  return value:match("^%s*(.-)%s*$")
end

local function GSB_EnsureSavedVars()
  if not gsbSavedVars then
    return nil
  end

  -- The ONLY saved structure this addon should keep in GuildSyncBankingState.lua.
  gsbSavedVars.types = gsbSavedVars.types or {}

  return gsbSavedVars
end

local function GSB_EnsureBankingSavedVars()
  if not gsbBankingSavedVars then
    return nil
  end

  -- JSON-friendly top-level sections.
  gsbBankingSavedVars.biweekly = gsbBankingSavedVars.biweekly or {}
  gsbBankingSavedVars.monthly = gsbBankingSavedVars.monthly or {}
  gsbBankingSavedVars.other = gsbBankingSavedVars.other or {}

  return gsbBankingSavedVars
end

local function GSB_BankingEventAlreadySavedAnywhere(eventId)
  local bankingSv = GSB_EnsureBankingSavedVars()

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

local function GSB_SaveBankingEntry(kind, entry)
  local bankingSv = GSB_EnsureBankingSavedVars()

  if not bankingSv then
    GSB_Print("Banking SavedVars not ready. Could not save banking entry.")
    return false
  end

  if kind ~= "biweekly" and kind ~= "monthly" and kind ~= "other" then
    GSB_Print("Invalid banking section: " .. tostring(kind))
    return false
  end

  if not entry then
    return false
  end

  local eventId = tonumber(entry.eventId)

  if not eventId then
    GSB_Print("Banking entry has no numeric EventId. Not saving.")
    return false
  end

  -- Absolute duplicate protection.
  -- One eventId may only appear once anywhere in GuildSyncBanking.lua.
  if GSB_BankingEventAlreadySavedAnywhere(eventId) then
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

local function GSB_PrintKnownTypes()
  local names = {}

  for key, _ in pairs(HISTORY_TYPES) do
    table.insert(names, key)
  end

  table.sort(names)

  GSB_Print("Known types: " .. table.concat(names, ", "))
end

local function GSB_GetHistoryType(typeKey)
  typeKey = string.lower(GSB_Trim(typeKey))

  if typeKey == "" then
    GSB_Print("History type is required.")
    GSB_Print("Example: /gsbdump roster")
    GSB_Print("Example: /gsbdump bank")
    GSB_Print("Example: /gsbstream roster")
    GSB_Print("Example: /gsbstream bank")
    GSB_PrintKnownTypes()
    return nil, nil
  end

  local typeInfo = HISTORY_TYPES[typeKey]

  if not typeInfo then
    GSB_Print("Unknown history type: " .. tostring(typeKey))
    GSB_PrintKnownTypes()
    return nil, nil
  end

  return typeKey, typeInfo
end

local function GSB_ParseTypeAndOptionalEventId(args, commandName)
  local parts = {}

  for token in string.gmatch(args or "", "%S+") do
    table.insert(parts, token)
  end

  local typeKey = parts[1]
  local eventIdText = parts[2]

  if not typeKey then
    GSB_Print("Usage: /" .. commandName .. " roster")
    GSB_Print("Usage: /" .. commandName .. " bank")

    if commandName == "gsbstream" then
      GSB_Print("Usage with start event: /gsbstream roster <eventId>")
      GSB_Print("Usage with start event: /gsbstream bank <eventId>")
    end

    GSB_PrintKnownTypes()
    return nil, nil, nil
  end

  local resolvedTypeKey, typeInfo = GSB_GetHistoryType(typeKey)

  if not resolvedTypeKey then
    return nil, nil, nil
  end

  local suppliedEventId = nil

  if eventIdText and eventIdText ~= "" then
    suppliedEventId = tonumber(eventIdText)

    if not suppliedEventId then
      GSB_Print("Invalid EventId supplied. Use a numeric event id.")
      return nil, nil, nil
    end
  end

  return resolvedTypeKey, typeInfo, suppliedEventId
end

local function GSB_GetTypeState(typeKey)
  local sv = GSB_EnsureSavedVars()
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

local function GSB_GetProcessorState(typeKey, processor)
  local typeState = GSB_GetTypeState(typeKey)
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
      GSB_Print("Saved LastProcessedId for " .. tostring(typeKey) .. " was not numeric. Clearing it.")
      state.lastProcessedId = nil
    end
  end

  return state, processorKey
end

local function GSB_GetCurrentRaffleWindow()
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

local function GSB_IsTimestampInCurrentRaffleSalesWindow(timestamp)
  timestamp = tonumber(timestamp)

  if not timestamp then
    return false
  end

  local window = GSB_GetCurrentRaffleWindow()

  return timestamp >= window.salesStart and timestamp <= window.salesEnd
end

local function GSB_PrintRaffleWindow(window)
  if not window then
    window = GSB_GetCurrentRaffleWindow()
  end

  GSB_Print("Current raffle sales window:")
  GSB_Print("Now: " .. GSB_TimeString(window.now) .. " / " .. GSB_UtcTimeString(window.now))
  GSB_Print("Sales Start: " .. GSB_TimeString(window.salesStart) .. " / " .. GSB_UtcTimeString(window.salesStart))
  GSB_Print("Sales End: " .. GSB_TimeString(window.salesEnd) .. " / " .. GSB_UtcTimeString(window.salesEnd))
  GSB_Print("Raffle Time: " .. GSB_TimeString(window.raffleTime) .. " / " .. GSB_UtcTimeString(window.raffleTime))
end

local function GSB_EventPassesBaseFilter(typeInfo, event)
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

local function GSB_GetBankTicketKindAndAmount(amount)
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

local function GSB_RecordBankTicket(kind, event, ticketAmount)
  if not kind or not gsbTickets[kind] or not event then
    return nil
  end

  local info = event:GetEventInfo()
  if not info then
    return nil
  end

  local eventId = event:GetEventId()
  local eventIdKey = tostring(eventId)

  -- Avoid duplicate ticket rows in the current session if dump/stream overlap.
  if gsbTicketEventIds[eventIdKey] then
    return nil
  end

  local entry = {
    eventId = eventId,
    timestamp = event:GetEventTimestampS(),
    displayName = info.displayName,
    amount = tonumber(info.amount),
    ticket_amount = ticketAmount,
  }

  table.insert(gsbTickets[kind], entry)

  -- Save to separate GuildSyncBanking.lua SavedVariables file.
  -- Duplicate saved eventIds are ignored across biweekly/monthly/other.
  local saved = GSB_SaveBankingEntry(kind, entry)

  if saved then
    GSB_Print("Saved banking entry EventId=" .. tostring(eventId) .. " to " .. tostring(kind) .. ".")
  else
    GSB_Print("Banking entry EventId=" .. tostring(eventId) .. " was already saved or could not be saved.")
  end

  gsbTicketEventIds[eventIdKey] = true

  return entry
end

local function GSB_ProcessBankTicketEvent(event)
  local info = event:GetEventInfo()
  if not info then
    return nil, nil
  end

  local eventTimestamp = event:GetEventTimestampS()

  if not GSB_IsTimestampInCurrentRaffleSalesWindow(eventTimestamp) then
    return nil, nil
  end

  local amount = tonumber(info.amount)
  local kind, ticketAmount = GSB_GetBankTicketKindAndAmount(amount)

  if not kind then
    return nil, nil
  end

  local entry = GSB_RecordBankTicket(kind, event, ticketAmount)

  return kind, entry
end

local function GSB_PrintRosterEvent(typeKey, event)
  local eventId = event:GetEventId()
  local eventTime = GSB_TimeString(event:GetEventTimestampS())
  local eventType = event:GetEventType()
  local info = event:GetEventInfo()

  local target = info and info.targetDisplayName or nil
  local actor = info and info.actingDisplayName or nil
  local rank = info and info.rankId or nil

  GSB_Print(
    "[" .. tostring(typeKey) .. "] "
    .. "EventId=" .. tostring(eventId)
    .. " Time=" .. tostring(eventTime)
    .. " Type=" .. tostring(eventType)
    .. " Target=" .. tostring(target)
    .. " Actor=" .. tostring(actor)
    .. " Rank=" .. tostring(rank)
  )
end

local function GSB_PrintBankTicketEvent(typeKey, kind, entry)
  if not entry then
    return
  end

  local line =
      "[" .. tostring(typeKey) .. "/" .. tostring(kind) .. "] "
      .. "EventId=" .. tostring(entry.eventId)
      .. " Time=" .. GSB_TimeString(entry.timestamp)
      .. " DisplayName=" .. tostring(entry.displayName)
      .. " Amount=" .. tostring(entry.amount)

  if kind ~= "other" then
    line = line .. " TicketAmount=" .. tostring(entry.ticket_amount)
  end

  GSB_Print(line)
end

local function GSB_PrintEvent(typeKey, typeInfo, event)
  if typeInfo.outputMode == "bank" then
    local kind, entry = GSB_ProcessBankTicketEvent(event)

    if kind and entry then
      GSB_PrintBankTicketEvent(typeKey, kind, entry)
    end

    return
  end

  GSB_PrintRosterEvent(typeKey, event)
end

local function GSB_PrintTicketList(ticketType)
  ticketType = string.lower(GSB_Trim(ticketType))

  if ticketType ~= "biweekly" and ticketType ~= "monthly" and ticketType ~= "other" then
    GSB_Print("Usage: /gsbtickets biweekly")
    GSB_Print("Usage: /gsbtickets monthly")
    GSB_Print("Usage: /gsbtickets other")
    return
  end

  local list = gsbTickets[ticketType] or {}

  GSB_Print("Ticket list: " .. tostring(ticketType) .. " Count=" .. tostring(#list))

  if #list == 0 then
    GSB_Print("No " .. tostring(ticketType) .. " entries captured this session.")
    return
  end

  for i, entry in ipairs(list) do
    local line =
        tostring(i)
        .. ". EventId=" .. tostring(entry.eventId)
        .. " Time=" .. GSB_TimeString(entry.timestamp)
        .. " DisplayName=" .. tostring(entry.displayName)
        .. " Amount=" .. tostring(entry.amount)

    if ticketType ~= "other" then
      line = line .. " TicketAmount=" .. tostring(entry.ticket_amount)
    end

    GSB_Print(line)
  end
end

local GSB_StartStream
local GSB_GetRunningProcessor

local function GSB_StartDefaultBankStream()
  local processor = GSB_GetRunningProcessor("bank")

  if processor and processor:IsRunning() then
    GSB_Print("Bank stream is already running.")
    return
  end

  GSB_Print("Starting banking stream automatically.")
  GSB_StartStream("bank")
end

local function GSB_InitLibHistoire()
  if gsbInitialized then
    GSB_Print("LibHistoire already initialized.")
    GSB_StartDefaultBankStream()
    return
  end

  if not LibHistoire then
    GSB_Print("LibHistoire global not found. Is LibHistoire enabled and listed as a dependency?")
    return
  end

  gsbInitialized = true
  GSB_Print("Waiting for LibHistoire OnReady...")

  LibHistoire:OnReady(function(lib)
    -- Runtime-only. Do not store this on GuildSyncBankingState or in SavedVariables.
    gsbLibHistoire = lib

    GSB_Print("LibHistoire is ready.")
    GSB_StartDefaultBankStream()
  end)
end

local function GSB_CreateProcessor(typeKey, typeInfo, guildId)
  if not gsbLibHistoire then
    GSB_Print("LibHistoire is not ready yet. Run /gsbinit first.")
    return nil
  end

  if not guildId or guildId == 0 then
    GSB_Print("Invalid guildId.")
    return nil
  end

  GSB_Print(
    "Creating LibHistoire processor for type "
    .. tostring(typeKey)
    .. ", guildId: "
    .. tostring(guildId)
  )

  local processor = gsbLibHistoire:CreateGuildHistoryProcessor(
    guildId,
    typeInfo.category,
    ADDON_NAME .. "-" .. typeKey
  )

  if not processor then
    GSB_Print("Processor could not be created for type " .. tostring(typeKey) .. ".")
    GSB_Print("LibHistoire may not have a cache for this guild/category yet.")
    return nil
  end

  -- Runtime-only, unique per type.
  gsbProcessors[typeKey] = processor

  local key = processor:GetKey()
  GSB_Print("Processor key for " .. tostring(typeKey) .. ": " .. tostring(key))

  return processor
end

GSB_GetRunningProcessor = function(typeKey)
  return gsbProcessors[typeKey]
end

local function GSB_DumpHistory(args)
  local typeKey, typeInfo = GSB_ParseTypeAndOptionalEventId(args, "gsbdump")

  if not typeKey then
    return
  end

  if not gsbLibHistoire then
    GSB_Print("LibHistoire is not initialized. Run /gsbinit first.")
    return
  end

  local existingProcessor = GSB_GetRunningProcessor(typeKey)

  if existingProcessor and existingProcessor:IsRunning() then
    GSB_Print("Processor for " ..
      tostring(typeKey) ..
      " is already running. Wait for it to finish or use /gsbstop " .. tostring(typeKey) .. ".")
    return
  end

  local guildId, guildIndex, guildName = GSB_GetTargetGuildId()

  if not guildId then
    return
  end

  GSB_Print("Using guild: " ..
    tostring(guildName) .. " index=" .. tostring(guildIndex) .. " guildId=" .. tostring(guildId))

  local processor = GSB_CreateProcessor(typeKey, typeInfo, guildId)
  if not processor then
    return
  end

  if processor.SetStopOnLastCachedEvent then
    processor:SetStopOnLastCachedEvent(true)
  end

  local startTime
  local endTime

  if typeKey == "bank" then
    local window = GSB_GetCurrentRaffleWindow()
    startTime = window.salesStart
    endTime = window.salesEnd
    GSB_PrintRaffleWindow(window)
  else
    endTime = GetTimeStamp()
    startTime = endTime - (DUMP_LOOKBACK_DAYS * 24 * 60 * 60)
  end

  GSB_Print("Starting time-range dump for type: " .. tostring(typeKey))
  GSB_Print("Start: " .. GSB_TimeString(startTime) .. " / " .. GSB_UtcTimeString(startTime))
  GSB_Print("End: " .. GSB_TimeString(endTime) .. " / " .. GSB_UtcTimeString(endTime))

  local started = processor:StartIteratingTimeRange(
    startTime,
    endTime,
    function(event)
      -- Print and record ticket/deposit rows.
      -- Banking rows are saved to GuildSyncBanking.lua after duplicate checks.
      if GSB_EventPassesBaseFilter(typeInfo, event) then
        GSB_PrintEvent(typeKey, typeInfo, event)
      end
    end,
    function(reason)
      GSB_Print("Time-range dump stopped for " .. tostring(typeKey) .. ". Reason=" .. tostring(reason))
    end
  )

  if not started then
    GSB_Print("Processor time-range dump could not be started for type " .. tostring(typeKey) .. ".")
  else
    GSB_Print("Processor time-range dump started for type " .. tostring(typeKey) .. ".")
  end
end

GSB_StartStream = function(args)
  local typeKey, typeInfo, suppliedEventId = GSB_ParseTypeAndOptionalEventId(args, "gsbstream")

  if not typeKey then
    return
  end

  if not gsbLibHistoire then
    GSB_Print("LibHistoire is not initialized. Run /gsbinit first.")
    return
  end

  local existingProcessor = GSB_GetRunningProcessor(typeKey)

  if existingProcessor and existingProcessor:IsRunning() then
    GSB_Print("Processor for " ..
      tostring(typeKey) .. " is already running. Use /gsbstop " .. tostring(typeKey) .. " first if needed.")
    return
  end

  local guildId, guildIndex, guildName = GSB_GetTargetGuildId()

  if not guildId then
    return
  end

  GSB_Print("Using guild: " ..
    tostring(guildName) .. " index=" .. tostring(guildIndex) .. " guildId=" .. tostring(guildId))

  local processor = GSB_CreateProcessor(typeKey, typeInfo, guildId)
  if not processor then
    return
  end

  if not processor.StartStreaming then
    GSB_Print("This processor does not have StartStreaming(). Your LibHistoire version may be outdated.")
    return
  end

  local state, processorKey = GSB_GetProcessorState(typeKey, processor)
  if not state then
    GSB_Print("Could not create processor state for type " .. tostring(typeKey) .. ".")
    return
  end

  if typeKey == "bank" then
    GSB_PrintRaffleWindow(GSB_GetCurrentRaffleWindow())
  end

  local lastProcessedId = suppliedEventId or state.lastProcessedId

  if lastProcessedId ~= nil then
    lastProcessedId = tonumber(lastProcessedId)

    if not lastProcessedId then
      GSB_Print("Saved LastProcessedId for " .. tostring(typeKey) .. " was not numeric. Clearing it.")
      state.lastProcessedId = nil
      lastProcessedId = nil
    end
  end

  if suppliedEventId then
    GSB_Print("Starting " .. tostring(typeKey) .. " stream after supplied EventId=" .. tostring(suppliedEventId))
  else
    GSB_Print("Starting " .. tostring(typeKey) .. " stream after saved LastProcessedId=" .. tostring(lastProcessedId))
  end

  local started = processor:StartStreaming(lastProcessedId, function(event)
    local eventId = event:GetEventId()

    -- The ONLY saved stream progress data in GuildSyncBankingState.lua:
    -- Save the last seen event id for this type/processor.
    -- This happens before filtering so skipped events do not repeat forever.
    state.lastProcessedId = tonumber(eventId)

    if not GSB_EventPassesBaseFilter(typeInfo, event) then
      return
    end

    -- Banking rows are saved to GuildSyncBanking.lua after duplicate checks.
    GSB_PrintEvent(typeKey, typeInfo, event)
  end)

  if not started then
    GSB_Print("Stream could not be started for " .. tostring(typeKey) .. ". It may already be running.")
  else
    if suppliedEventId then
      state.lastProcessedId = tonumber(suppliedEventId)
    end

    GSB_Print("Stream started for type " .. tostring(typeKey) .. ", key " .. tostring(processorKey))
  end
end

local function GSB_StopProcessor(args)
  local typeKey = GSB_GetHistoryType(args)

  if not typeKey then
    return
  end

  local processor = GSB_GetRunningProcessor(typeKey)

  if not processor then
    GSB_Print("No processor has been created for type " .. tostring(typeKey) .. ".")
    return
  end

  if not processor.Stop then
    GSB_Print("Current processor for " .. tostring(typeKey) .. " does not expose Stop().")
    return
  end

  local stopped = processor:Stop()
  gsbProcessors[typeKey] = nil

  GSB_Print("Processor stopped for " .. tostring(typeKey) .. ": " .. tostring(stopped))
end

local function GSB_ResetProgress(args)
  local typeKey = GSB_GetHistoryType(args)

  if not typeKey then
    return
  end

  local sv = GSB_EnsureSavedVars()
  if not sv then
    GSB_Print("SavedVars not ready.")
    return
  end

  sv.types[typeKey] = nil

  -- Do not stop automatically, but clear runtime slot if one exists and is not running.
  if gsbProcessors[typeKey] and not gsbProcessors[typeKey]:IsRunning() then
    gsbProcessors[typeKey] = nil
  end

  GSB_Print("Processor progress reset for type " .. tostring(typeKey) .. ".")
end

local function GSB_RunStatus(args)
  local typeKey = GSB_GetHistoryType(args)

  if not typeKey then
    return
  end

  local processor = GSB_GetRunningProcessor(typeKey)

  if processor then
    GSB_Print("Processor running for " .. tostring(typeKey) .. ": " .. tostring(processor:IsRunning()))
  else
    GSB_Print("No processor has been created for type " .. tostring(typeKey) .. ".")
  end
end

local function OnAddonLoaded(eventCode, addonName)
  if addonName ~= ADDON_NAME then
    return
  end

  EVENT_MANAGER:UnregisterForEvent(ADDON_NAME, EVENT_ADD_ON_LOADED)

  gsbSavedVars = ZO_SavedVars:NewAccountWide(
    SAVED_VARS_NAME,
    SAVED_VARS_VERSION,
    nil,
    {
      types = {},
    }
  )

  gsbBankingSavedVars = ZO_SavedVars:NewAccountWide(
    BANKING_SAVED_VARS_NAME,
    BANKING_SAVED_VARS_VERSION,
    nil,
    {
      biweekly = {},
      monthly = {},
      other = {},
    }
  )

  GSB_EnsureSavedVars()
  GSB_EnsureBankingSavedVars()

  SLASH_COMMANDS["/gsbsave"] = function(args)
    -- Intentionally do not save anything here.
    -- GuildSyncBankingState.lua only saves stream lastProcessedId.
    -- GuildSyncBanking.lua saves banking rows.
    GSB_Print("/gsbsave disabled. This addon saves stream progress and banking entries automatically.")
  end

  SLASH_COMMANDS["/gsbinit"] = function()
    -- Manual retry/status helper. Startup calls this automatically.
    GSB_InitLibHistoire()
  end

  SLASH_COMMANDS["/gsbrun"] = function(args)
    GSB_RunStatus(args)
  end

  SLASH_COMMANDS["/gsbdump"] = function(args)
    GSB_DumpHistory(args)
  end

  SLASH_COMMANDS["/gsbstream"] = function(args)
    GSB_StartStream(args)
  end

  SLASH_COMMANDS["/gsbstop"] = function(args)
    GSB_StopProcessor(args)
  end

  SLASH_COMMANDS["/gsbreset"] = function(args)
    GSB_ResetProgress(args)
  end

  SLASH_COMMANDS["/gsbtickets"] = function(args)
    GSB_PrintTicketList(args)
  end

  GSB_Print("GuildSyncBanking loaded. LibHistoire will initialize automatically.")
  GSB_Print("Bank stream will start automatically when LibHistoire is ready.")
  GSB_Print("Manual commands: /gsbdump bank, /gsbstream bank, /gsbstop bank, /gsbtickets biweekly|monthly|other")
  GSB_Print("Banking SavedVars: GuildSyncBanking.lua with biweekly, monthly, and other sections.")

  GSB_InitLibHistoire()
end

EVENT_MANAGER:RegisterForEvent(
  ADDON_NAME,
  EVENT_ADD_ON_LOADED,
  OnAddonLoaded
)
