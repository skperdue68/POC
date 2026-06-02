ProofOfConcept = ProofOfConcept or {}

local ADDON_NAME = "ProofOfConcept"
local SAVED_VARS_NAME = "ProofOfConcept"
local SAVED_VARS_VERSION = 1

local function POC_Print(message)
    CHAT_ROUTER:AddSystemMessage("|c88CCFF[POC]|r " .. tostring(message))
end

local function POC_TimeString(timestamp)
    if not timestamp or timestamp == 0 then
        return "unknown"
    end

    return os.date("%Y-%m-%d %H:%M:%S", timestamp)
end

local function POC_SaveLine(line)
    ProofOfConcept.savedVars.history = ProofOfConcept.savedVars.history or {}

    table.insert(ProofOfConcept.savedVars.history, {
        time = GetTimeStamp(),
        line = line,
    })
end

local function POC_GetRosterCategory()
    return GUILD_HISTORY_EVENT_CATEGORY_GUILD
        or GUILD_HISTORY_CATEGORY_GUILD
        or GUILD_HISTORY_EVENT_CATEGORY_ROSTER
        or GUILD_HISTORY_CATEGORY_ROSTER
        or 3
end

local function POC_IsWantedRosterEvent(eventType)
    local wanted = {}

    if GUILD_HISTORY_GUILD_EVENT_JOIN then
        wanted[GUILD_HISTORY_GUILD_EVENT_JOIN] = true
    end

    if GUILD_HISTORY_GUILD_EVENT_LEAVE then
        wanted[GUILD_HISTORY_GUILD_EVENT_LEAVE] = true
    end

    if GUILD_HISTORY_GUILD_EVENT_KICKED then
        wanted[GUILD_HISTORY_GUILD_EVENT_KICKED] = true
    end

    if GUILD_HISTORY_GUILD_EVENT_PROMOTE then
        wanted[GUILD_HISTORY_GUILD_EVENT_PROMOTE] = true
    end

    if GUILD_HISTORY_GUILD_EVENT_DEMOTE then
        wanted[GUILD_HISTORY_GUILD_EVENT_DEMOTE] = true
    end

    if GUILD_HISTORY_GUILD_EVENT_RANK_CHANGE then
        wanted[GUILD_HISTORY_GUILD_EVENT_RANK_CHANGE] = true
    end

    if GUILD_HISTORY_ROSTER_EVENT_JOIN then
        wanted[GUILD_HISTORY_ROSTER_EVENT_JOIN] = true
    end

    if GUILD_HISTORY_ROSTER_EVENT_LEAVE then
        wanted[GUILD_HISTORY_ROSTER_EVENT_LEAVE] = true
    end

    if GUILD_HISTORY_ROSTER_EVENT_KICKED then
        wanted[GUILD_HISTORY_ROSTER_EVENT_KICKED] = true
    end

    if GUILD_HISTORY_ROSTER_EVENT_PROMOTE then
        wanted[GUILD_HISTORY_ROSTER_EVENT_PROMOTE] = true
    end

    if GUILD_HISTORY_ROSTER_EVENT_DEMOTE then
        wanted[GUILD_HISTORY_ROSTER_EVENT_DEMOTE] = true
    end

    if GUILD_HISTORY_ROSTER_EVENT_RANK_CHANGE then
        wanted[GUILD_HISTORY_ROSTER_EVENT_RANK_CHANGE] = true
    end

    if next(wanted) == nil then
        return true
    end

    return wanted[eventType] == true
end

local function POC_EventTypeName(eventType)
    if eventType == GUILD_HISTORY_GUILD_EVENT_JOIN or eventType == GUILD_HISTORY_ROSTER_EVENT_JOIN then
        return "JOIN"
    elseif eventType == GUILD_HISTORY_GUILD_EVENT_LEAVE or eventType == GUILD_HISTORY_ROSTER_EVENT_LEAVE then
        return "LEAVE"
    elseif eventType == GUILD_HISTORY_GUILD_EVENT_KICKED or eventType == GUILD_HISTORY_ROSTER_EVENT_KICKED then
        return "KICK"
    elseif eventType == GUILD_HISTORY_GUILD_EVENT_PROMOTE or eventType == GUILD_HISTORY_ROSTER_EVENT_PROMOTE then
        return "PROMOTE"
    elseif eventType == GUILD_HISTORY_GUILD_EVENT_DEMOTE or eventType == GUILD_HISTORY_ROSTER_EVENT_DEMOTE then
        return "DEMOTE"
    elseif eventType == GUILD_HISTORY_GUILD_EVENT_RANK_CHANGE or eventType == GUILD_HISTORY_ROSTER_EVENT_RANK_CHANGE then
        return "RANK_CHANGE"
    end

    return "GUILD_EVENT_" .. tostring(eventType)
end

local function POC_StartLibHistoireRosterScan()
    if not LibHistoire then
        POC_Print("LibHistoire is not loaded.")
        return
    end

    local category = POC_GetRosterCategory()
    local guildCount = GetNumGuilds()
    local started = 0

    ProofOfConcept.savedVars.history = ProofOfConcept.savedVars.history or {}

    POC_Print("Starting LibHistoire guild roster scan for " .. tostring(guildCount) .. " guild(s).")
    POC_Print("Using LibHistoire category: " .. tostring(category))

    for guildIndex = 1, guildCount do
        local guildId = GetGuildId(guildIndex)
        local guildName = GetGuildName(guildId) or ("Guild " .. tostring(guildIndex))

        POC_Print("Creating processor for " .. tostring(guildName) .. " using category " .. tostring(category))

        local processor = LibHistoire:CreateGuildHistoryProcessor(guildId, "GUILD_HISTORY_CATEGORY_ROSTER", ADDON_NAME)

        if processor then
            started = started + 1

            processor:SetEventCallback(function(eventType, eventId, eventTime, p1, p2, p3, p4, p5, p6)
                if not POC_IsWantedRosterEvent(eventType) then
                    return
                end

                local line = table.concat({
                    "guild=" .. tostring(guildName),
                    "guildId=" .. tostring(guildId),
                    "event=" .. POC_EventTypeName(eventType),
                    "eventType=" .. tostring(eventType),
                    "eventId=" .. tostring(eventId),
                    "eventTime=" .. tostring(eventTime),
                    "eventDate=" .. POC_TimeString(eventTime),
                    "p1=" .. tostring(p1),
                    "p2=" .. tostring(p2),
                    "p3=" .. tostring(p3),
                    "p4=" .. tostring(p4),
                    "p5=" .. tostring(p5),
                    "p6=" .. tostring(p6),
                }, " | ")

                POC_SaveLine(line)
                POC_Print(line)
            end)

            if processor.SetAfterEventTime then
                processor:SetAfterEventTime(0)
            end

            if processor.Start then
                processor:Start()
            elseif processor.StartIterating then
                processor:StartIterating()
            else
                POC_Print("Processor for " .. tostring(guildName) .. " has no Start method.")
            end
        else
            POC_Print("Could not create LibHistoire processor for " .. tostring(guildName))
        end
    end

    POC_Print("Started " .. tostring(started) .. " LibHistoire processor(s).")
    POC_Print("Run /reloadui after scan output to write ProofOfConcept.lua to disk.")
end

local function OnAddonLoaded(eventCode, addonName)
    if addonName ~= ADDON_NAME then
        return
    end

    EVENT_MANAGER:UnregisterForEvent(ADDON_NAME, EVENT_ADD_ON_LOADED)

    ProofOfConcept.savedVars = ZO_SavedVars:NewAccountWide(
        SAVED_VARS_NAME,
        SAVED_VARS_VERSION,
        nil,
        {
            history = {},
        }
    )

    SLASH_COMMANDS["/poc"] = function(args)
        local timestamp = GetTimeStamp()
        local key = "POC" .. tostring(timestamp)
        local value = args or ""

        ProofOfConcept.savedVars[key] = value

        POC_Print("Saved " .. key .. " = " .. value)
    end

    SLASH_COMMANDS["/poclh"] = function()
        POC_StartLibHistoireRosterScan()
    end

    POC_Print("Loaded. Use /poc your text here or /poclh to scan LibHistoire guild roster history.")
end

EVENT_MANAGER:RegisterForEvent(
    ADDON_NAME,
    EVENT_ADD_ON_LOADED,
    OnAddonLoaded
)
