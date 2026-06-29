#ifndef MyAppVersion
#define MyAppVersion "0.0.0"
#endif
#ifndef SourceRoot
#define SourceRoot "payload"
#endif
#ifndef OutputRoot
#define OutputRoot "installer-output"
#endif

#define MyAppName "GuildSync"
#define MyAppExeName "GuildSync.exe"

[Setup]
AppId={{8E7D5F38-9F0E-4D2A-A95A-8A6C5B8D1001}
AppName={#MyAppName}
AppVersion={#MyAppVersion}
AppVerName={#MyAppName} {#MyAppVersion}
DefaultDirName={autopf}\GuildSync
DisableDirPage=no
DefaultGroupName=GuildSync
OutputDir={#OutputRoot}
OutputBaseFilename=GuildSync-Setup-{#MyAppVersion}-Windows
Compression=lzma
SolidCompression=yes
WizardStyle=modern
PrivilegesRequired=lowest
PrivilegesRequiredOverridesAllowed=dialog
UninstallDisplayIcon={app}\{#MyAppExeName}

[Files]
Source: "{#SourceRoot}\*"; DestDir: "{app}"; Flags: recursesubdirs createallsubdirs ignoreversion; Excludes: "ESO\*;GuildSyncSettings.txt"
Source: "{#SourceRoot}\GuildSyncSettings.txt"; DestDir: "{tmp}"; DestName: "GuildSyncSettings.default.txt"; Flags: ignoreversion deleteafterinstall
Source: "{#SourceRoot}\ESO\GuildSyncBanking\*"; DestDir: "{code:GetESOAddonDir}\GuildSyncBanking"; Flags: recursesubdirs createallsubdirs ignoreversion
Source: "{#SourceRoot}\ESO\GuildSyncRoster\*"; DestDir: "{code:GetESOAddonDir}\GuildSyncRoster"; Flags: recursesubdirs createallsubdirs ignoreversion
Source: "{#SourceRoot}\ESO\GuildSyncApplications\*"; DestDir: "{code:GetESOAddonDir}\GuildSyncApplications"; Flags: recursesubdirs createallsubdirs ignoreversion

[Icons]
Name: "{group}\GuildSync"; Filename: "{app}\{#MyAppExeName}"
Name: "{autodesktop}\GuildSync"; Filename: "{app}\{#MyAppExeName}"; Tasks: desktopicon

[Tasks]
Name: "desktopicon"; Description: "Create a desktop shortcut"; GroupDescription: "Additional shortcuts:"; Flags: checkedonce

[Run]
Filename: "{cmd}"; Parameters: "/C if not exist ""{app}\.env"" if exist ""{app}\.env.example"" copy ""{app}\.env.example"" ""{app}\.env"""; Flags: runhidden

[Code]
var
  ESOAddonPage: TInputDirWizardPage;

procedure InitializeWizard;
begin
  WizardForm.WelcomeLabel2.Caption := 'This installer will install GuildSync version {#MyAppVersion} on your computer.';
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

procedure InstallGuildSyncSettingsIfMissing;
var
  ExistingSettingsPath: String;
  DefaultSettingsPath: String;
begin
  ExistingSettingsPath := ExpandConstant('{app}\GuildSyncSettings.txt');
  DefaultSettingsPath := ExpandConstant('{tmp}\GuildSyncSettings.default.txt');

  if FileExists(ExistingSettingsPath) then
  begin
    Log('Preserving existing GuildSyncSettings.txt');
    exit;
  end;

  if FileExists(DefaultSettingsPath) then
  begin
    if not FileCopy(DefaultSettingsPath, ExistingSettingsPath, False) then
    begin
      MsgBox(
        'GuildSync could not create GuildSyncSettings.txt.' #13#10 #13#10 +
        'Please make sure you have write permission to the GuildSync installation folder.',
        mbError,
        MB_OK
      );
      Abort;
    end;
  end;
end;

procedure CurStepChanged(CurStep: TSetupStep);
begin
  if CurStep = ssPostInstall then
  begin
    InstallGuildSyncSettingsIfMissing;
  end;
end;
