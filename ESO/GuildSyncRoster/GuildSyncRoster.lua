GuildSyncRoster = GuildSyncRoster or {}

local ADDON_NAME = "GuildSyncRoster"
local SAVED_VARS_NAME = "GuildSyncRoster"
local SAVED_VARS_VERSION = 1

local TARGET_GUILD_NAME = "Alphabet Mafia"
local ROSTER_CATEGORY = GUILD_HISTORY_EVENT_CATEGORY_ROSTER
local MAX_EVENT_EXPORTS_TO_KEEP = 500

local gsrSavedVars = nil
local gsrLibHistoire = nil
local gsrProcessor = nil
local gsrInitialized = false

local function GSR_Print(message)
    CHAT_ROUTER:AddSystemMessage("|c88CCFF[GuildSyncRoster]|r " .. tostring(message))
end

local function GSR_Trim(value)
    value = tostring(value or "")

    if zo_strtrim then
        return zo_strtrim(value)
    end

    return value:match("^%s*(.-)%s*$") or ""
end

local function GSR_GetTargetGuildId()
    for guildIndex = 1, GetNumGuilds() do
        local guildId = GetGuildId(guildIndex)
        local guildName = GetGuildName(guildId)

        if string.lower(GSR_Trim(guildName)) == string.lower(TARGET_GUILD_NAME) then
            return guildId, guildIndex, guildName
        end
    end

    GSR_Print("Could not find guild named: " .. TARGET_GUILD_NAME)
    return nil, nil, nil
end

local function GSR_EnsureSavedVars()
    if not gsrSavedVars then
        return nil
    end

    gsrSavedVars.types = gsrSavedVars.types or {}
    gsrSavedVars.rosterEvents = gsrSavedVars.rosterEvents or {}
    gsrSavedVars.stream = gsrSavedVars.stream or {}
    gsrSavedVars.guildDump = gsrSavedVars.guildDump or {}
    gsrSavedVars.guildMembers = gsrSavedVars.guildMembers or {}

    return gsrSavedVars
end

local function GSR_GetRankName(guildId, rankId)
    rankId = tonumber(rankId)

    if not guildId or not rankId then
        return ""
    end

    if GetGuildRankCustomName then
        local customName = GSR_Trim(GetGuildRankCustomName(guildId, rankId))
        if customName ~= "" then
            return customName
        end
    end

    if GetGuildRankName then
        local rankName = GSR_Trim(GetGuildRankName(guildId, rankId))
        if rankName ~= "" then
            return rankName
        end
    end

    return "Rank " .. tostring(rankId)
end

local function GSR_GetRosterEventName(eventType)
    if eventType == GUILD_HISTORY_ROSTER_EVENT_JOIN then
        return "joined"
    elseif eventType == GUILD_HISTORY_ROSTER_EVENT_LEAVE then
        return "left"
    elseif eventType == GUILD_HISTORY_ROSTER_EVENT_KICKED then
        return "kicked"
    elseif eventType == GUILD_HISTORY_ROSTER_EVENT_PROMOTE then
        return "promoted"
    elseif eventType == GUILD_HISTORY_ROSTER_EVENT_DEMOTE then
        return "demoted"
    elseif eventType == GUILD_HISTORY_ROSTER_EVENT_APPLICATION_ACCEPTED then
        return "application accepted"
    elseif eventType == GUILD_HISTORY_ROSTER_EVENT_APPLICATION_DECLINED then
        return "application declined"
    end
    return "unknown"
end

local function GSR_GetInfoValue(info, ...)
    if type(info) ~= "table" then
        return nil
    end

    local names = { ... }

    for _, name in ipairs(names) do
        if info[name] ~= nil then
            return info[name]
        end
    end

    return nil
end

local function GSR_BuildRosterRecord(guildId, event)
    local eventId = tonumber(event:GetEventId())
    local rawEventType = event:GetEventType()
    local info = event:GetEventInfo() or {}

    local timestampS = GSR_GetInfoValue(info, "timestampS", "timestamp", "time")
    timestampS = tonumber(timestampS) or tonumber(event:GetEventTimestampS())

    local rankName = GSR_GetInfoValue(info, "rankName", "newRankName")

    if not rankName or GSR_Trim(rankName) == "" then
        local rankId = GSR_GetInfoValue(info, "rankId", "rank", "newRankId")
        rankName = GSR_GetRankName(guildId, rankId)
    end

    return {
        eventId = eventId,
        actingDisplayName = GSR_Trim(GSR_GetInfoValue(info, "actingDisplayName", "actorDisplayName", "sourceDisplayName")),
        targetDisplayName = GSR_Trim(GSR_GetInfoValue(info, "targetDisplayName", "displayName", "memberDisplayName",
            "accountName")),
        timestampS = timestampS,
        rankName = GSR_Trim(rankName),
        eventType = GSR_GetRosterEventName(rawEventType),
    }
end

local function GSR_GetRosterEventChatMessage(record)
    local target = GSR_Trim(record.targetDisplayName)
    local actor = GSR_Trim(record.actingDisplayName)

    if target == "" then
        target = "(unknown member)"
    end

    if record.eventType == "joined" then
        return "Roster joined: " .. target
    elseif record.eventType == "left" then
        return "Roster left: " .. target
    elseif record.eventType == "kicked" then
        if actor ~= "" then
            return "Roster kicked: " .. target .. " by " .. actor
        end
        return "Roster kicked: " .. target
    elseif record.eventType == "promoted" then
        return "Roster promoted: " .. target .. " -> " .. tostring(record.rankName or "")
    elseif record.eventType == "demoted" then
        return "Roster demoted: " .. target .. " -> " .. tostring(record.rankName or "")
    elseif record.eventType == "rank_changed" then
        return "Roster rank changed: " .. target .. " -> " .. tostring(record.rankName or "")
    elseif record.eventType == "application_accepted" then
        if actor ~= "" then
            return "Roster application accepted: " .. target .. " by " .. actor
        end
        return "Roster application accepted: " .. target
    elseif record.eventType == "application_declined" then
        if actor ~= "" then
            return "Roster application declined: " .. target .. " by " .. actor
        end
        return "Roster application declined: " .. target
    end

    return "Roster event: Type=" .. tostring(record.eventType) .. " Target=" .. tostring(target)
end

local function GSR_SaveRosterEvent(guildId, guildName, event)
    local sv = GSR_EnsureSavedVars()

    if not sv then
        GSR_Print("SavedVars not ready. Could not save roster event.")
        return
    end

    local eventId = tonumber(event:GetEventId())

    if not eventId then
        GSR_Print("Roster event had no numeric EventId. Not saving.")
        return
    end

    local lastProcessedId = tonumber(sv.stream.lastProcessedId)

    if lastProcessedId and eventId <= lastProcessedId then
        return
    end

    local record = GSR_BuildRosterRecord(guildId, event)

    if GSR_Trim(record.eventType) == "unknown" then
        sv.stream.lastProcessedId = eventId
        sv.stream.lastProcessedAt = GetTimeStamp()
        sv.stream.lastProcessedEventTime = record.timestampS

        GSR_Print("Skipped unknown roster event. EventId=" .. tostring(eventId))
        return
    end

    sv.rosterEvents["event_" .. tostring(eventId)] = record
    sv.stream.lastProcessedId = eventId
    sv.stream.lastProcessedAt = GetTimeStamp()
    sv.stream.lastProcessedEventTime = record.timestampS

    GSR_Print(GSR_GetRosterEventChatMessage(record))
end

local function GSR_CreateProcessor(guildId)
    if not gsrLibHistoire then
        GSR_Print("LibHistoire is not ready yet.")
        return nil
    end

    local processor = gsrLibHistoire:CreateGuildHistoryProcessor(
        guildId,
        ROSTER_CATEGORY,
        ADDON_NAME .. "-roster"
    )

    if not processor then
        GSR_Print("Could not create LibHistoire roster processor.")
        GSR_Print("LibHistoire may not have a cache for this guild/category yet.")
        return nil
    end

    gsrProcessor = processor

    if processor.GetKey then
        GSR_Print("Roster processor key: " .. tostring(processor:GetKey()))
    end

    return processor
end

local function GSR_StartRosterStream(args)
    local sv = GSR_EnsureSavedVars()

    if not sv then
        GSR_Print("SavedVars not ready.")
        return
    end

    if not gsrLibHistoire then
        GSR_Print("LibHistoire is not initialized yet. Try /gsrinit.")
        return
    end

    if gsrProcessor and gsrProcessor.IsRunning and gsrProcessor:IsRunning() then
        GSR_Print("Roster stream is already running.")
        return
    end

    local guildId, guildIndex, guildName = GSR_GetTargetGuildId()

    if not guildId then
        return
    end

    GSR_Print("Using guild: " ..
        tostring(guildName) .. " index=" .. tostring(guildIndex) .. " guildId=" .. tostring(guildId))

    local processor = GSR_CreateProcessor(guildId)

    if not processor then
        return
    end

    if not processor.StartStreaming then
        GSR_Print("This LibHistoire processor does not have StartStreaming().")
        return
    end

    local suppliedEventId = tonumber(GSR_Trim(args))
    local lastProcessedId = suppliedEventId or tonumber(sv.stream.lastProcessedId)

    if suppliedEventId then
        GSR_Print("Starting roster stream after supplied EventId=" .. tostring(suppliedEventId))
    else
        GSR_Print("Starting roster stream after saved LastProcessedId=" .. tostring(lastProcessedId))
    end

    sv.stream.guildName = guildName
    sv.stream.guildId = guildId
    sv.stream.category = ROSTER_CATEGORY
    sv.stream.startedAt = GetTimeStamp()

    local started = processor:StartStreaming(lastProcessedId, function(event)
        GSR_SaveRosterEvent(guildId, guildName, event)
    end)

    if not started then
        GSR_Print("Roster stream could not be started.")
    else
        GSR_Print("Roster stream started.")
    end
end

local function GSR_StopRosterStream()
    if not gsrProcessor then
        GSR_Print("No roster processor has been created.")
        return
    end

    if not gsrProcessor.Stop then
        GSR_Print("Roster processor does not expose Stop().")
        return
    end

    local stopped = gsrProcessor:Stop()
    GSR_Print("Roster processor stopped: " .. tostring(stopped))
end

local function GSR_DumpRoster()
    local guildId, guildIndex, guildName = GSR_GetTargetGuildId()

    if not guildId then
        return
    end

    local memberCount = GetNumGuildMembers(guildId) or 0
    local members = {}

    for memberIndex = 1, memberCount do
        local displayName, note, rankIndex, playerStatus, secsSinceLogoff = GetGuildMemberInfo(guildId, memberIndex)
        local accountName = GSR_Trim(displayName)

        members[accountName] = {
            accountName = accountName,
            rankName = GSR_GetRankName(guildId, rankIndex),
        }
    end

    gsrSavedVars.guildDump = {
        dumpTimestamp = GetTimeStamp(),
        guildMembers = members,
    }

    GSR_Print("Saved " .. tostring(memberCount) .. " guild member(s) to GuildSyncRoster.guildDump.guildMembers.")
    GSR_Print("Run /reloadui, log out, or exit ESO to write GuildSyncRoster.lua to disk.")
end

local function GSR_InitLibHistoire()
    if gsrInitialized then
        GSR_Print("LibHistoire already initialized.")
        return
    end

    if not LibHistoire then
        GSR_Print("LibHistoire global not found. Is LibHistoire enabled and listed as a dependency?")
        return
    end

    gsrInitialized = true
    GSR_Print("Waiting for LibHistoire OnReady...")

    LibHistoire:OnReady(function(lib)
        gsrLibHistoire = lib

        GSR_Print("LibHistoire is ready.")
        GSR_StartRosterStream("")
    end)
end

local function GSR_SetDebugRawInfo(enabled)
    gsrSavedVars.debugRawInfo = enabled == true

    if gsrSavedVars.debugRawInfo then
        GSR_Print("Raw roster info echo is ON.")
    else
        GSR_Print("Raw roster info echo is OFF.")
    end
end

local function GSR_ShowHelp()
    GSR_Print("Commands:")
    GSR_Print("/gsr dump - save the current Alphabet Mafia roster")
    GSR_Print("/gsr stream - start roster LibHistoire stream")
    GSR_Print("/gsr stream <eventId> - start roster stream after event id")
    GSR_Print("/gsr stop - stop roster stream")
    GSR_Print("/gsr raw on - echo raw GetEventInfo table")
    GSR_Print("/gsr raw off - hide raw GetEventInfo table")
    GSR_Print("/gsrinit - retry LibHistoire initialization")
end

local function OnAddonLoaded(eventCode, addonName)
    if addonName ~= ADDON_NAME then
        return
    end

    EVENT_MANAGER:UnregisterForEvent(ADDON_NAME, EVENT_ADD_ON_LOADED)

    gsrSavedVars = ZO_SavedVars:NewAccountWide(
        SAVED_VARS_NAME,
        SAVED_VARS_VERSION,
        nil,
        {
            types = {},
            rosterEvents = {},
            guildMembers = {},
            stream = {},
            dumps = {},
            guildDump = {},
            lastDump = nil,
            debugRawInfo = false,
        }
    )

    GSR_EnsureSavedVars()

    SLASH_COMMANDS["/gsrinit"] = function()
        GSR_InitLibHistoire()
    end

    SLASH_COMMANDS["/gsr"] = function(args)
        args = GSR_Trim(args)
        local lowerArgs = string.lower(args)

        if lowerArgs == "dump" then
            GSR_DumpRoster()
        elseif lowerArgs == "stream" then
            GSR_StartRosterStream("")
        elseif string.sub(lowerArgs, 1, 7) == "stream " then
            local eventId = GSR_Trim(string.sub(args, 8))
            GSR_StartRosterStream(eventId)
        elseif lowerArgs == "stop" then
            GSR_StopRosterStream()
        elseif lowerArgs == "raw on" then
            GSR_SetDebugRawInfo(true)
        elseif lowerArgs == "raw off" then
            GSR_SetDebugRawInfo(false)
        else
            GSR_ShowHelp()
        end
    end

    GSR_Print("GuildSyncRoster loaded. LibHistoire will initialize automatically.")
    GSR_Print("Manual commands: /gsr dump, /gsr stream, /gsr stop, /gsr raw on")
    GSR_Print("SavedVars: GuildSyncRoster.lua")

    GSR_InitLibHistoire()
end

EVENT_MANAGER:RegisterForEvent(
    ADDON_NAME,
    EVENT_ADD_ON_LOADED,
    OnAddonLoaded
)
