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

### PowerShell Profile

Get a more Bash-like typing experience, including `Ctrl`+`D` to exit and pause on ambiguous tab completion.

```PowerShell
Set-PSReadLineOption -EditMode "Emacs"
Set-PSReadLineKeyHandler -Chord Ctrl+LeftArrow BackwardWord
Set-PSReadLineKeyHandler -Chord Ctrl+RightArrow ForwardWord
```
