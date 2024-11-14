---
draft: "false"
language: english
status: incomplete
tags: [wiki]
title: Windows Remote Management
---

# Windows Remote Management

**Windows Remote Management** (**WinRM**), is a Windows-native built-in remote management protocol that basically uses Simple Object Access Protocol to interact with remote computers and servers, as well as Operating Systems and applications. WinRM allows the user to:

- Remotely communicate and interface with hosts
- Execute commands remotely on systems that are not local to you but are network accessible.
- Monitor, manage and configure servers, operating systems and client machines from a remote location

As a pentester, this means that if we can find credentials (typically username and password) for a user who has remote management privileges, we can potentially get a PowerShell shell on the host.

## References

- 0ne-nine9. (n.d.). <span class="reference-title">Responder Write-up</span>. _HTB Labs_. [https://app.hackthebox.com/starting-point](https://app.hackthebox.com/starting-point)
