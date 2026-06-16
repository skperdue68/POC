GuildSyncApplications = {}
local GSA = GuildSyncApplications

GSA.name = "GuildSyncApplications"
GSA.version = "1.0.7"

local WELCOME_GUILD_NAME = "Alphabet Mafia"

local function Chat(message)
  CHAT_ROUTER:AddSystemMessage(message)
end

local function SafeText(value)
  if value == nil then return "" end
  return tostring(value)
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
  if PlaySound and SOUNDS and SOUNDS.NEW_NOTIFICATION then
    PlaySound(SOUNDS.NEW_NOTIFICATION)
  elseif PlaySound and SOUNDS and SOUNDS.CHAT_ALERT then
    PlaySound(SOUNDS.CHAT_ALERT)
  elseif PlaySound and SOUNDS and SOUNDS.POSITIVE_CLICK then
    PlaySound(SOUNDS.POSITIVE_CLICK)
  end
end

local function GetCurrentChatChannelTarget()
  if CHAT_SYSTEM and CHAT_SYSTEM.textEntry then
    return CHAT_SYSTEM.textEntry.channelTarget
  end

  return nil
end

local function SetChatChannelTarget(channelTarget)
  if not channelTarget then return end

  if CHAT_SYSTEM and CHAT_SYSTEM.textEntry and CHAT_SYSTEM.textEntry.SetChannelTarget then
    CHAT_SYSTEM.textEntry:SetChannelTarget(channelTarget)
  elseif CHAT_SYSTEM and CHAT_SYSTEM.SetChannelTarget then
    CHAT_SYSTEM:SetChannelTarget(channelTarget)
  end
end

function GSA:RestorePreviousChatChannel()
  if not self.pendingPreviousChatChannel then
    return
  end

  local previousChannel = self.pendingPreviousChatChannel
  self.pendingPreviousChatChannel = nil

  zo_callLater(function()
    SetChatChannelTarget(previousChannel)
  end, 250)
end

function GSA:HookChatRestore()
  if self.chatRestoreHooked then
    return
  end

  self.chatRestoreHooked = true

  if type(SendChatMessage) == "function" then
    ZO_PreHook("SendChatMessage", function()
      if GSA.pendingPreviousChatChannel then
        GSA:RestorePreviousChatChannel()
      end

      return false
    end)
  end
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

local function QueueOfficerWelcomeMessage(applicantAccount)
  zo_callLater(function()
    local guildIndex, guildId = GetGuildIndexByName(WELCOME_GUILD_NAME)

    if not guildIndex or not guildId then
      Chat("|cffff66GuildSyncApplications:|r could not find guild " ..
        WELCOME_GUILD_NAME .. " for officer welcome message.")
      return
    end

    if not IsAccountOnlineInGuild(guildId, applicantAccount) then
      Chat("|cffff66GuildSyncApplications:|r " ..
        SafeText(applicantAccount) ..
        " is not showing online in " .. WELCOME_GUILD_NAME .. ". Officer message was not queued.")
      return
    end

    local officerChannel = GetOfficerChannelForGuildIndex(guildIndex)

    if not officerChannel then
      Chat("|cffff66GuildSyncApplications:|r could not determine officer chat channel for guild slot " ..
        SafeText(guildIndex) .. ".")
      return
    end

    local message = "Mafia Family, join me in welcoming " ..
        SafeText(applicantAccount) ..
        " to the Mafia. Make yourself at home! You can learn more about the guild and our events on our discord linked on the 'G' tab by default. We look forward to getting to know you!"

    GSA.pendingPreviousChatChannel = GetCurrentChatChannelTarget()

    StartChatInput(message, officerChannel)
    PlayGuildSyncAlertSound()

    Chat("|c66ff66GuildSyncApplications:|r officer welcome message populated in chat buffer.")
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

  ZO_PreHook(functionName, function(guildId, index, declineMessage, blacklistApplicant, blacklistMessage)
    GSA:SaveApplicationDecision(action, guildId, index, declineMessage, blacklistApplicant, blacklistMessage)
    return false
  end)

  Chat("|c66ff66GuildSyncApplications:|r hooked " .. functionName)
  return true
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

  self:HookChatRestore()

  local hooked = false

  hooked = self:HookGlobalFunction("AcceptGuildApplication", "accepted") or hooked
  hooked = self:HookGlobalFunction("DeclineGuildApplication", "rejected") or hooked
  hooked = self:HookGlobalFunction("RejectGuildApplication", "rejected") or hooked

  if hooked then
    Chat("|c66ff66GuildSyncApplications:|r loaded.")
  else
    Chat("|cffff66GuildSyncApplications:|r loaded, but no accept/reject functions were found.")
  end
end

local function OnAddonLoaded(_, addonName)
  if addonName ~= GSA.name then return end

  EVENT_MANAGER:UnregisterForEvent(GSA.name, EVENT_ADD_ON_LOADED)
  GSA:Initialize()
end

EVENT_MANAGER:RegisterForEvent(GSA.name, EVENT_ADD_ON_LOADED, OnAddonLoaded)

SLASH_COMMANDS["/gsa"] = function(args)
  args = SafeText(args):lower()

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
