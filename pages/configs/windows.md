---
title: Windows
---

### Utilities

- [Windows Subsystem for Linux](https://docs.microsoft.com/en-us/windows/wsl/about) – Real Bash and \*nix programs inside Windows
- [Windows Terminal](https://github.com/microsoft/terminal) - Tabs and more!
- [Sysinternals](https://docs.microsoft.com/en-us/sysinternals/)
- [NirSoft](http://nirsoft.net)
- [Hot-reload Command Prompt environment variables](https://github.com/chocolatey-archive/chocolatey/blob/master/src/redirects/RefreshEnv.cmd)

### Cleanup

- [Malwarebytes](https://www.malwarebytes.com) – Antimalware that is free for manual scanning
- [TronScript](https://github.com/bmrf/tron) – Automated collection of cleanup tools

### Tweaks

- Disable Fast Startup: in "Choose What the Power Buttons Do" from "Additional Power Settings"
- [Disable automatic login](https://support.microsoft.com/en-us/help/4027599/windows-10-automatically-finish-setting-up-pc-after-update-restart)
- [Avoid Bing and Cortana from taskbar search](https://superuser.com/a/1171262)
- [Disable Aero Shake](https://www.howtogeek.com/howto/windows-7/disable-aero-shake-in-windows-7/)
- [Hide 3D Objects library from File Explorer](https://www.howtogeek.com/331361/how-to-remove-the-3d-objects-folder-from-this-pc-on-windows-10/)
- [Disable Focus Assist notifications](https://www.howtogeek.com/435349/how-to-disable-windows-10s-annoying-focus-assist-notifications/)
- [Disable automatic restart for Windows Update](https://www.askvg.com/how-to-change-windows-update-settings-when-managed-or-disabled-by-system-administrator/)
- Disable wakelock for Windows Update:
  - From an elevated prompt, execute `powercfg -requestsoverride SERVICE UsoSvc EXECUTION`
- Disable automatic wake-ups for Windows Update:
  - Get [SysInternals PsTools for PsExec](https://docs.microsoft.com/en-us/sysinternals/downloads/psexec)
  - Follow the [instructions here](https://github.com/seagull/disable-automaticrestarts/issues/4#issuecomment-521382489)
  - Alternatively, go into advanced power plan options and disable wake timers

### PowerShell Profile and Utilities

```powershell
Set-StrictMode -Version Latest
if ($(Get-Location).Path -eq 'C:\WINDOWS\system32') {
    Set-Location $Env:USERPROFILE
}
Set-PSReadLineOption -EditMode "Emacs"
Set-PSReadLineKeyHandler -Chord Ctrl+LeftArrow BackwardWord
Set-PSReadLineKeyHandler -Chord Ctrl+RightArrow ForwardWord
Set-PSReadLineKeyHandler -Chord Ctrl+Shift+LeftArrow SelectBackwardWord
Set-PSReadLineKeyHandler -Chord Ctrl+Shift+RightArrow SelectForwardWord

$PSDefaultParameterValues['*:Encoding'] = 'utf8'
$Env:PYTHONIOENCODING = 'utf-8'

# window title https://stackoverflow.com/q/29211928
if (-not (Get-Variable _windowTitleDefault -ValueOnly -ErrorAction SilentlyContinue)) {
    $global:_windowTitleDefault = $host.ui.rawui.WindowTitle
}
function prompt {
    $host.ui.rawui.WindowTitle = "$_windowTitleDefault : $($executionContext.SessionState.Path.CurrentLocation | Split-Path -Leaf)"
    return "PS $($executionContext.SessionState.Path.CurrentLocation)$('>' * ($nestedPromptLevel + 1)) ";
}
Set-PSReadLineKeyHandler -Key Enter `
                         -BriefDescription RunWithTitle `
                         -LongDescription "Set the console title to the command, then run the command" `
                         -ScriptBlock {
    param($key, $arg)

    $line = $null
    $cursor = $null
    [Microsoft.PowerShell.PSConsoleReadLine]::GetBufferState([ref]$line, [ref]$cursor)
    if ($line.Length -gt 1023) {
        $Host.UI.RawUI.WindowTitle = $line.Substring(0,1023)
    }
    else {   
        $Host.UI.RawUI.WindowTitle = $line
    }
    [Microsoft.PowerShell.PSConsoleReadLine]::AcceptLine()
}

if ($PSEdition -eq 'Core'){
    $PSStyle.Progress.View = 'Classic'
}

function Set-DisplayBrightness {
    param(
        [Parameter(Position=0,Mandatory=$true)]
        [int]
        $Brightness
    )
    # https://www.nirsoft.net/utils/control_my_monitor.html
    controlmymonitor /SetValue Primary 10 $Brightness
}
Set-Alias b Set-DisplayBrightness

function Set-SuspendState {
    param(
        [Parameter(Position=0,Mandatory=$true)]
        [int]
        $Minutes,
        [System.Windows.Forms.PowerState]
        $PowerState = [System.Windows.Forms.PowerState]::Suspend
    )
    Add-Type -AssemblyName System.Windows.Forms
    Start-Sleep -Seconds $(60*$Minutes)
    [System.Windows.Forms.Application]::SetSuspendState($PowerState, $true, $true)
}

function touch {
    param(
        [Parameter(Mandatory,Position=1)][string]$Item,
        [DateTime]$t = (Get-Date),
        [ValidateSet('CreationTime','CreationTimeUtc','LastAccessTime','LastAccessTimeUtc','LastWriteTime','LastWriteTimeUtc')]
        [string]$Time = 'LastWriteTime'
    )
    if (-not (Test-Path -LiteralPath $Item)) {
        New-Item $Item >$null
    }
    Get-Item $Item | % {
        $_.$Time = $t
    }
}

function unset-histfile {
    Set-PSReadLineOption -HistorySaveStyle SaveNothing
}

function bell {
    echo "`a"
}

function beep {
    param(
        [Parameter(Position=0)]
        [int]
        $Frequency = 1000,
        [Parameter(Position=1)]
        [int]
        $Milliseconds = 1000
    )
    [Console]::Beep($Frequency, $Milliseconds)
}

function sha256sum { 
    param([Parameter(Mandatory,Position=1)][string]$Path)
    (Get-FileHash -Path $Path).Hash.ToLower()
}

Set-StrictMode -Off
```
