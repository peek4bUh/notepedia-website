---
draft: "false"
language: english
status: ready
tags: [wiki]
title: How to Run a Program at Startup via Registry
---

# How to Run a Program at Startup via Registry

## Start the program only at the current user

- Copy the Path of the Program that you want to run at Startup.
- Open Registry Editor with `Windows + R` and type `regedit`.
- Navigate to `HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\Run`.
- Right-click at an empty space and choose **New** > **String Value**.
- Name the new value with the name of the program you want to run.
- Now double click at the newly created value and at the Value data box, **Paste** (CRL + V) the copied path from the clipboard. When done, click **OK**.
- **Restart** your PC to apply the change.

## Start the program at every user on the PC

- Copy the Path of the Program that you want to run at Startup.
- Open Registry Editor with `Windows + R` and type `regedit`.
- Navigate to `HKEY_LOCAL_MACHINE\Software\Microsoft\Windows\CurrentVersion\Run`.
- Right-click at an empty space and choose **New** > **String Value**.
- Name the new value with the name of the program you want to run.
- Now double click at the newly created value and at the Value data box, **Paste** (CRL + V) the copied path from the clipboard. When done, click **OK**.
- **Restart** your PC to apply the change.

## References

- Tsoukalas, K. (2021, November 15). _How to run a program at startup via Registry._ WinTips.org. [https://www.wintips.org/how-to-run-a-program-at-startup-via-registry/](https://www.wintips.org/how-to-run-a-program-at-startup-via-registry/)
