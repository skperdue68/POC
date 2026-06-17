GuildSyncApplications = {}
local GSA = GuildSyncApplications

GSA.name = "GuildSyncApplications"
GSA.version = "1.0.8"

local WELCOME_GUILD_NAME = "Alphabet Mafia"

GSA.pendingRestoreState = nil
GSA.restoreWatcherEventName = GSA.name .. "_RestoreWatcher"
GSA.restoreWatcherTimeoutName = GSA.name .. "_RestoreWatcherTimeout"
GSA.hookRetryName = GSA.name .. "_HookRetry"
GSA.hookAttempts = 0
GSA.maxHookAttempts = 20

local function Chat(message)
  if CHAT_ROUTER and CHAT_ROUTER.AddSystemMessage then
    CHAT_ROUTER:AddSystemMessage(message)
  elseif d then
    d(message)
  end
end

local function SafeText(value)
  if value == nil then return "" end
  return tostring(value)
end

local function Trim(value)
  value = SafeText(value)
  return value:match("^%s*(.-)%s*$") or ""
end

local function Lower(value)
  if zo_strlower then
    return zo_strlower(SafeText(value))
  end

  return string.lower(SafeText(value))
end

local function Now()
  return GetTimeStamp()
end

local function DateTimeFromTimestamp(timestamp)
  if not timestamp or timestamp <= 0 then
    return ""
  end

  return os.date("%Y-%m-%d %H:%M:%S", timestamp)
end

local function GetOfficerName()
  return GetDisplayName() or ""
end

local function GetGuildNameSafe(guildId)
  if guildId and GetGuildName then
    return GetGuildName(guildId) or ""
  end

  return ""
end

local function GetGuildIndexByName(guildName)
  if not GetNumGuilds or not GetGuildId then
    return nil, nil
  end

  for guildIndex = 1, GetNumGuilds() do
    local guildId = GetGuildId(guildIndex)

    if GetGuildNameSafe(guildId) == guildName then
      return guildIndex, guildId
    end
  end

  return nil, nil
end

local function GetOfficerChannelForGuildIndex(guildIndex)
  if guildIndex == 1 then return CHAT_CHANNEL_OFFICER_1 end
  if guildIndex == 2 then return CHAT_CHANNEL_OFFICER_2 end
  if guildIndex == 3 then return CHAT_CHANNEL_OFFICER_3 end
  if guildIndex == 4 then return CHAT_CHANNEL_OFFICER_4 end
  if guildIndex == 5 then return CHAT_CHANNEL_OFFICER_5 end

  return nil
end

local function PlayGuildSyncAlertSound()
  if PlaySound and SOUNDS then
    if SOUNDS.NEW_NOTIFICATION then
      PlaySound(SOUNDS.NEW_NOTIFICATION)
    elseif SOUNDS.CHAT_ALERT then
      PlaySound(SOUNDS.CHAT_ALERT)
    elseif SOUNDS.POSITIVE_CLICK then
      PlaySound(SOUNDS.POSITIVE_CLICK)
    elseif SOUNDS.DEFAULT_CLICK then
      PlaySound(SOUNDS.DEFAULT_CLICK)
    end
  end
end

function GSA:GetPreciseChatChannelInfo()
  if not CHAT_SYSTEM or not CHAT_SYSTEM.GetCurrentChannelData then
    return nil
  end

  local channelData, target = CHAT_SYSTEM:GetCurrentChannelData()
  if not channelData then
    return nil
  end

  local channelId = channelData.id
  local info = {
    id = channelId,
    target = target,
    kind = "unknown",
    index = nil,
    short = "unknown",
  }

  if channelId == CHAT_CHANNEL_ZONE then
    info.kind = "zone"
    info.short = "zone"
  elseif channelId == CHAT_CHANNEL_PARTY then
    info.kind = "group"
    info.short = "group"
  elseif channelId == CHAT_CHANNEL_SAY then
    info.kind = "say"
    info.short = "say"
  elseif channelId == CHAT_CHANNEL_YELL then
    info.kind = "yell"
    info.short = "yell"
  elseif channelId == CHAT_CHANNEL_EMOTE then
    info.kind = "emote"
    info.short = "emote"
  elseif channelId == CHAT_CHANNEL_WHISPER or channelId == CHAT_CHANNEL_WHISPER_SENT then
    info.kind = "tell"
    info.short = "tell"
  elseif channelId >= CHAT_CHANNEL_GUILD_1 and channelId <= CHAT_CHANNEL_GUILD_5 then
    local index = channelId - CHAT_CHANNEL_GUILD_1 + 1
    info.kind = "guild"
    info.index = index
    info.short = "g" .. index
  elseif channelId >= CHAT_CHANNEL_OFFICER_1 and channelId <= CHAT_CHANNEL_OFFICER_5 then
    local index = channelId - CHAT_CHANNEL_OFFICER_1 + 1
    info.kind = "officer"
    info.index = index
    info.short = "o" .. index
  end

  return info
end

function GSA:RestoreChatChannel(channelInfo)
  if not channelInfo or not CHAT_SYSTEM or not channelInfo.id then
    return false
  end

  if CHAT_SYSTEM.SetChannel then
    CHAT_SYSTEM:SetChannel(channelInfo.id, channelInfo.target)
    return true
  end

  return false
end

function GSA:ClearPendingChatBuffer()
  local cleared = false

  if CHAT_SYSTEM and CHAT_SYSTEM.textEntry and CHAT_SYSTEM.textEntry.EditControl then
    local editControl = CHAT_SYSTEM.textEntry.EditControl

    if editControl.SetText then
      editControl:SetText("")
      cleared = true
    end

    if editControl.LoseFocus then
      editControl:LoseFocus()
    end
  end

  if CHAT_SYSTEM and CHAT_SYSTEM.textEntry then
    if CHAT_SYSTEM.textEntry.SetText then
      CHAT_SYSTEM.textEntry:SetText("")
      cleared = true
    end

    if CHAT_SYSTEM.textEntry.LoseFocus then
      CHAT_SYSTEM.textEntry:LoseFocus()
    end
  end

  if ZO_ChatWindowTextEntryEditBox then
    if ZO_ChatWindowTextEntryEditBox.SetText then
      ZO_ChatWindowTextEntryEditBox:SetText("")
      cleared = true
    end

    if ZO_ChatWindowTextEntryEditBox.LoseFocus then
      ZO_ChatWindowTextEntryEditBox:LoseFocus()
    end
  end

  if CHAT_SYSTEM and CHAT_SYSTEM.Maximize then
    CHAT_SYSTEM:Maximize()
  end

  if CHAT_SYSTEM and CHAT_SYSTEM.Minimize then
    CHAT_SYSTEM:Minimize()
  end

  return cleared
end

function GSA:NormalizeChatText(text)
  local value = Trim(text or "")
  value = Lower(value)
  value = value:gsub("|c%x%x%x%x%x%x", "")
  value = value:gsub("|r", "")
  value = value:gsub("[%c]", " ")
  value = value:gsub("[%p]", " ")
  value = value:gsub("%s+", " ")
  return Trim(value)
end

function GSA:IsOutgoingChatMessageType(messageType)
  if type(messageType) ~= "number" then
    return false
  end

  if messageType == CHAT_CHANNEL_SAY
      or messageType == CHAT_CHANNEL_YELL
      or messageType == CHAT_CHANNEL_EMOTE
      or messageType == CHAT_CHANNEL_PARTY
      or messageType == CHAT_CHANNEL_ZONE
      or messageType == CHAT_CHANNEL_WHISPER
      or messageType == CHAT_CHANNEL_WHISPER_SENT
      or (messageType >= CHAT_CHANNEL_GUILD_1 and messageType <= CHAT_CHANNEL_GUILD_5)
      or (messageType >= CHAT_CHANNEL_OFFICER_1 and messageType <= CHAT_CHANNEL_OFFICER_5) then
    return true
  end

  if messageType == CHAT_CATEGORY_SAY
      or messageType == CHAT_CATEGORY_YELL
      or messageType == CHAT_CATEGORY_EMOTE
      or messageType == CHAT_CATEGORY_PARTY
      or messageType == CHAT_CATEGORY_ZONE
      or messageType == CHAT_CATEGORY_WHISPER_SENT
      or messageType == CHAT_CATEGORY_WHISPER
      or messageType == CHAT_CATEGORY_GUILD_1
      or messageType == CHAT_CATEGORY_GUILD_2
      or messageType == CHAT_CATEGORY_GUILD_3
      or messageType == CHAT_CATEGORY_GUILD_4
      or messageType == CHAT_CATEGORY_GUILD_5
      or messageType == CHAT_CATEGORY_OFFICER_1
      or messageType == CHAT_CATEGORY_OFFICER_2
      or messageType == CHAT_CATEGORY_OFFICER_3
      or messageType == CHAT_CATEGORY_OFFICER_4
      or messageType == CHAT_CATEGORY_OFFICER_5 then
    return true
  end

  return false
end

function GSA:ClearPendingRestoreState(reason)
  self.pendingRestoreState = nil
  EVENT_MANAGER:UnregisterForEvent(self.restoreWatcherEventName, EVENT_CHAT_MESSAGE_CHANNEL)
  EVENT_MANAGER:UnregisterForUpdate(self.restoreWatcherTimeoutName)
end

function GSA:HandleRestoreWatcherChatMessage(eventCode, messageType, fromName, text, isCustomerService)
  local state = self.pendingRestoreState
  if not state then
    return
  end

  if not self:IsOutgoingChatMessageType(messageType) then
    return
  end

  local expected = SafeText(state.expectedText)
  local actual = self:NormalizeChatText(text or "")

  if expected == "" or actual == "" then
    return
  end

  if expected ~= actual then
    return
  end

  self:RestoreChatChannel(state.previousChannel)
  self:ClearPendingRestoreState("watcher matched outgoing message")
end

function GSA:ArmPendingRestoreState(previousChannelInfo, expectedText, timeoutSeconds)
  self:ClearPendingRestoreState("arming new restore state")

  if not previousChannelInfo or not previousChannelInfo.id then
    return false
  end

  local normalizedExpected = self:NormalizeChatText(expectedText)
  if normalizedExpected == "" then
    return false
  end

  timeoutSeconds = tonumber(timeoutSeconds) or 60

  self.pendingRestoreState = {
    previousChannel = previousChannelInfo,
    expectedText = normalizedExpected,
    timeoutSeconds = timeoutSeconds,
    armedAt = GetFrameTimeMilliseconds and GetFrameTimeMilliseconds() or nil,
  }

  EVENT_MANAGER:RegisterForEvent(
    self.restoreWatcherEventName,
    EVENT_CHAT_MESSAGE_CHANNEL,
    function(...)
      GSA:HandleRestoreWatcherChatMessage(...)
    end
  )

  EVENT_MANAGER:RegisterForUpdate(self.restoreWatcherTimeoutName, timeoutSeconds * 1000, function()
    local pendingState = GSA.pendingRestoreState

    if pendingState and pendingState.previousChannel then
      GSA:RestoreChatChannel(pendingState.previousChannel)
    end

    GSA:ClearPendingChatBuffer()
    GSA:ClearPendingRestoreState("restore timeout")
  end)

  return true
end

local function IsAccountOnlineInGuild(guildId, accountName)
  accountName = SafeText(accountName)

  if accountName == "" then
    return false
  end

  if not guildId or not GetNumGuildMembers or not GetGuildMemberInfo then
    return false
  end

  for memberIndex = 1, GetNumGuildMembers(guildId) do
    local displayName, _, _, status = GetGuildMemberInfo(guildId, memberIndex)

    if SafeText(displayName) == accountName then
      return status ~= PLAYER_STATUS_OFFLINE
    end
  end

  return false
end

function GSA:PopulateOfficerWelcomeMessage(applicantAccount)
  local guildIndex, guildId = GetGuildIndexByName(WELCOME_GUILD_NAME)

  if not guildIndex or not guildId then
    Chat("|cffff66GuildSyncApplications:|r could not find guild " ..
      WELCOME_GUILD_NAME .. " for officer welcome message.")
    return false
  end

  if not IsAccountOnlineInGuild(guildId, applicantAccount) then
    Chat("|cffff66GuildSyncApplications:|r " ..
      SafeText(applicantAccount) ..
      " is not showing online in " .. WELCOME_GUILD_NAME .. ". Officer message was not queued.")
    return false
  end

  local officerChannel = GetOfficerChannelForGuildIndex(guildIndex)

  if not officerChannel then
    Chat("|cffff66GuildSyncApplications:|r could not determine officer chat channel for guild slot " ..
      SafeText(guildIndex) .. ".")
    return false
  end

  local message = "Mafia Family, join me in welcoming " ..
      SafeText(applicantAccount) ..
      " to the Mafia. Make yourself at home! You can learn more about the guild and our events on our discord linked on the 'G' tab by default. We look forward to getting to know you!"

  local previousChannelInfo = self:GetPreciseChatChannelInfo()
  self:ArmPendingRestoreState(previousChannelInfo, message, 60)

  StartChatInput(message, officerChannel)
  PlayGuildSyncAlertSound()

  Chat("|c66ff66GuildSyncApplications:|r officer welcome message populated in chat buffer. Press Enter to send it.")
  return true
end

local function QueueOfficerWelcomeMessage(applicantAccount)
  zo_callLater(function()
    GSA:PopulateOfficerWelcomeMessage(applicantAccount)
  end, 1000)
end

local function SendWelcomeMail(applicantAccount)
  local recipient = SafeText(applicantAccount)

  if recipient == "" then
    Chat("|cffff66GuildSyncApplications:|r could not send welcome mail because applicant account was blank.")
    return
  end

  local subject = "Welcome to Alphabet Mafia " .. recipient .. "!"
  local body =
  "Welcome to the Alphabet Mafia fam!\n\nCheck out the 'G' tab in game for our weekly schedule and links to our guild hall and crafting house. Feel free to make use of our guild trader and jump right into guild chat. And please join our Discord, where you can find info on our rules and trial groups and, most crucially, you can share Very Important Pet Photos. We’re so glad you’re here!\n\ndiscord.gg/AlphabetMafia\n\np.s. Please make your Discord server nickname match your ESO user ID. It helps us a lot with stuff like prizes and maintaining our roster!"

  zo_callLater(function()
    RequestOpenMailbox()

    zo_callLater(function()
      SendMail(recipient, subject, body)

      zo_callLater(function()
        CloseMailbox()
      end, 1000)
    end, 1500)
  end, 1000)
end

function GSA:GetApplicationDataFromArgs(guildId, index)
  local data = {
    guildId = guildId,
    index = index,
    guildName = GetGuildNameSafe(guildId),
  }

  if guildId and index and GetGuildFinderGuildApplicationInfoAt then
    local level,
    championPoints,
    alliance,
    classId,
    accountName,
    characterName,
    achievementPoints,
    applicationMessage = GetGuildFinderGuildApplicationInfoAt(guildId, index)

    data.level = level
    data.championPoints = championPoints
    data.alliance = alliance
    data.classId = classId
    data.applicantAccount = accountName
    data.characterName = characterName
    data.achievementPoints = achievementPoints
    data.applicationText = applicationMessage
  end

  if guildId and index and GetGuildFinderGuildApplicationDuration then
    data.durationRemainingSeconds = GetGuildFinderGuildApplicationDuration(guildId, index)
  end

  return data
end

function GSA:SaveApplicationDecision(action, guildId, index, declineMessage, blacklistApplicant, blacklistMessage)
  self.saved.records = self.saved.records or {}

  local capturedAt = Now()
  local applicationData = self:GetApplicationDataFromArgs(guildId, index)

  local record = {
    capturedAt = capturedAt,
    capturedDateTime = DateTimeFromTimestamp(capturedAt),

    action = action,
    officerAccount = GetOfficerName(),

    guildId = applicationData.guildId,
    guildName = SafeText(applicationData.guildName),
    applicationIndex = applicationData.index,

    applicantAccount = SafeText(applicationData.applicantAccount),
    characterName = SafeText(applicationData.characterName),
    applicationText = SafeText(applicationData.applicationText),

    level = applicationData.level,
    championPoints = applicationData.championPoints,
    alliance = applicationData.alliance,
    classId = applicationData.classId,
    achievementPoints = applicationData.achievementPoints,

    durationRemainingSeconds = applicationData.durationRemainingSeconds,

    declineMessage = SafeText(declineMessage),
    blacklistApplicant = blacklistApplicant == true,
    blacklistMessage = SafeText(blacklistMessage),
  }

  local applicantKey = record.applicantAccount

  if applicantKey == "" then
    applicantKey = "unknown_" .. SafeText(capturedAt)
  end

  self.saved.records[applicantKey] = record

  Chat(string.format(
    "|c66ff66GuildSyncApplications:|r captured %s application for %s",
    action,
    record.applicantAccount ~= "" and record.applicantAccount or "unknown applicant"
  ))

  if action == "accepted" then
    SendWelcomeMail(record.applicantAccount)
    QueueOfficerWelcomeMessage(record.applicantAccount)
  end
end

function GSA:HookGlobalFunction(functionName, action)
  if type(_G[functionName]) ~= "function" then
    return false
  end

  if self.hookedFunctions and self.hookedFunctions[functionName] then
    return true
  end

  self.hookedFunctions = self.hookedFunctions or {}

  ZO_PreHook(functionName, function(guildId, index, declineMessage, blacklistApplicant, blacklistMessage)
    GSA:SaveApplicationDecision(action, guildId, index, declineMessage, blacklistApplicant, blacklistMessage)
    return false
  end)

  self.hookedFunctions[functionName] = true
  Chat("|c66ff66GuildSyncApplications:|r hooked " .. functionName)
  return true
end

function GSA:TryHookApplicationFunctions()
  local hooked = false

  hooked = self:HookGlobalFunction("AcceptGuildApplication", "accepted") or hooked
  hooked = self:HookGlobalFunction("DeclineGuildApplication", "rejected") or hooked
  hooked = self:HookGlobalFunction("RejectGuildApplication", "rejected") or hooked

  return hooked
end

function GSA:StartHookRetry()
  EVENT_MANAGER:UnregisterForUpdate(self.hookRetryName)

  EVENT_MANAGER:RegisterForUpdate(self.hookRetryName, 1000, function()
    GSA.hookAttempts = GSA.hookAttempts + 1

    if GSA:TryHookApplicationFunctions() then
      EVENT_MANAGER:UnregisterForUpdate(GSA.hookRetryName)
      Chat("|c66ff66GuildSyncApplications:|r application hook ready.")
      return
    end

    if GSA.hookAttempts >= GSA.maxHookAttempts then
      EVENT_MANAGER:UnregisterForUpdate(GSA.hookRetryName)
      Chat("|cffff66GuildSyncApplications:|r loaded, but no accept/reject functions were found after retrying.")
    end
  end)
end

function GSA:Initialize()
  self.saved = ZO_SavedVars:NewAccountWide(
    "GuildSyncApplications",
    1,
    nil,
    {
      records = {}
    }
  )

  self.hookedFunctions = self.hookedFunctions or {}
  self.hookAttempts = 0

  if self:TryHookApplicationFunctions() then
    Chat("|c66ff66GuildSyncApplications:|r loaded.")
  else
    Chat("|cffff66GuildSyncApplications:|r loaded. Waiting for ESO application functions to become available...")
    self:StartHookRetry()
  end
end

local function OnAddonLoaded(_, addonName)
  if addonName ~= GSA.name then return end

  EVENT_MANAGER:UnregisterForEvent(GSA.name, EVENT_ADD_ON_LOADED)
  GSA:Initialize()
end

EVENT_MANAGER:RegisterForEvent(GSA.name, EVENT_ADD_ON_LOADED, OnAddonLoaded)

SLASH_COMMANDS["/gsa"] = function(args)
  args = Lower(SafeText(args))

  if args ~= "list" then
    Chat("GuildSyncApplications commands:")
    Chat("/gsa list - list captured application records")
    return
  end

  if not GSA.saved or not GSA.saved.records then
    Chat("GuildSyncApplications: no records captured.")
    return
  end

  local count = 0

  local function ChatField(label, value)
    value = SafeText(value)

    if value ~= "" then
      Chat(label .. ": " .. value)
    end
  end

  for applicantKey, record in pairs(GSA.saved.records) do
    count = count + 1

    Chat("|c66ccff========== GuildSync Application START ==========|r")

    ChatField("Action", record.action)
    ChatField("Captured", record.capturedDateTime)
    ChatField("Officer", record.officerAccount)
    ChatField("Guild", record.guildName)
    ChatField("Applicant", record.applicantAccount)
    ChatField("Character", record.characterName)
    ChatField("Decline Message", record.declineMessage)

    if record.blacklistApplicant == true then
      Chat("Blacklisted: true")
    end

    ChatField("Blacklist Message", record.blacklistMessage)
    ChatField("Application Text", record.applicationText)

    Chat("|c66ccff=========== GuildSync Application END ===========|r")
  end

  if count == 0 then
    Chat("GuildSyncApplications: no records captured.")
    return
  end

  Chat("GuildSyncApplications displayed records: " .. count)
end
