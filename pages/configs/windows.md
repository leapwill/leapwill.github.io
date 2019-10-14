---
title: Windows
---

### Utilities

- [Windows Subsystem for Linux](https://docs.microsoft.com/en-us/windows/wsl/about) – Real Bash and \*nix programs inside Windows
- [Sysinternals](https://docs.microsoft.com/en-us/sysinternals/)
- [NirSoft](http://nirsoft.net)
- [Hot-reload Command Prompt environment variables](https://github.com/chocolatey-archive/chocolatey/blob/master/src/redirects/RefreshEnv.cmd)

### Cleanup

- [Malwarebytes](https://www.malwarebytes.com) – Antimalware that is free for manual scanning
- [TronScript](https://github.com/bmrf/tron) – Automated collection of cleanup tools

### Tweaks

- [Avoid Bing and Cortana from taskbar search](https://superuser.com/a/1171262)
- [Disable Aero Shake](https://www.howtogeek.com/howto/windows-7/disable-aero-shake-in-windows-7/)
- [Hide 3D Objects library from File Explorer](https://www.howtogeek.com/331361/how-to-remove-the-3d-objects-folder-from-this-pc-on-windows-10/)
- [Disable Focus Assist notifications](https://www.howtogeek.com/435349/how-to-disable-windows-10s-annoying-focus-assist-notifications/)
- Disable automatic wakeups and restarts for Windows Update:
  - Get [SysInternals PsTools for PsExec](https://docs.microsoft.com/en-us/sysinternals/downloads/psexec)
  - Use [this command](https://superuser.com/a/1295461) to disable the following services:
  ```
  \Microsoft\Windows\UpdateOrchestrator\Reboot
  \Microsoft\Windows\UpdateOrchestrator\Universal Orchestrator Idle Start
  ```
  - Alternatively, go into advanced power plan options and disable wake timers
