#define MyAppName "GuildSync"
#define MyAppVersion "1.1.3"
#define MyAppExeName "GuildSync.exe"

[Setup]
AppName={#MyAppName}
AppVersion={#MyAppVersion}
DefaultDirName={autopf}\GuildSync
DisableDirPage=no
DefaultGroupName=GuildSync
OutputDir=installer-output
OutputBaseFilename=GuildSync-Setup-1.1.3-Windows
Compression=lzma
SolidCompression=yes
WizardStyle=modern

[Files]
Source: "GuildSync.exe"; DestDir: "{app}"; Flags: ignoreversion
Source: ".env.example"; DestDir: "{app}"; Flags: ignoreversion
Source: "ESO\GuildSyncBanking\*"; DestDir: "{code:GetESOAddonDir}\GuildSyncBanking"; Flags: recursesubdirs createallsubdirs ignoreversion
Source: "ESO\GuildSyncRoster\*"; DestDir: "{code:GetESOAddonDir}\GuildSyncRoster"; Flags: recursesubdirs createallsubdirs ignoreversion
Source: "ESO\GuildSyncApplications\*"; DestDir: "{code:GetESOAddonDir}\GuildSyncApplications"; Flags: recursesubdirs createallsubdirs ignoreversion

[Icons]
Name: "{group}\GuildSync"; Filename: "{app}\{#MyAppExeName}"
Name: "{autodesktop}\GuildSync"; Filename: "{app}\{#MyAppExeName}"

[Run]
Filename: "{cmd}"; Parameters: "/C if not exist ""{app}\.env"" copy ""{app}\.env.example"" ""{app}\.env"""; Flags: runhidden

[Code]
var
  ESOAddonPage: TInputDirWizardPage;

procedure InitializeWizard;
begin
  ESOAddonPage :=
    CreateInputDirPage(
      wpSelectDir,
      'ESO AddOns Location',
      'Where are your Elder Scrolls Online AddOns located?',
      'Select your ESO AddOns folder. The installer will copy the GuildSync add-ons into this folder.',
      False,
      ''
    );

  ESOAddonPage.Add('');

  ESOAddonPage.Values[0] :=
    ExpandConstant('{userdocs}\Elder Scrolls Online\live\AddOns');
end;

function GetESOAddonDir(Param: String): String;
begin
  Result := ESOAddonPage.Values[0];
end;
