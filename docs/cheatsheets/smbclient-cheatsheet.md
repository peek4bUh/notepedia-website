---
draft: "false"
language: english
parent: "[smbclient](smbclient.md)"
status: ready
tags: [wiki, command-cheatsheet]
title: "smbclient: Cheatsheet"
---

# smbclient: Cheatsheet

> FTP-like client to access SMB/CIFS resources on servers.

```bash
# List the contents
smbclient -L <𝗜𝗣_𝗔𝗗𝗗𝗥𝗘𝗦𝗦>

# List the contents anonymously
smbclient -L <𝗜𝗣_𝗔𝗗𝗗𝗥𝗘𝗦𝗦> -N

# Connect to a specific share
smbclient \\\\<𝗜𝗣_𝗔𝗗𝗗𝗥𝗘𝗦𝗦>\\<𝗦𝗛𝗔𝗥𝗘>

smbclient -L 10.129.109.209 --user administrator

smbclient \\\\10.129.109.209\\ADMIN$ --user administrator
```

## References

- _tldr InBrowser.App_. (n.d.). [https://tldr.inbrowser.app/pages/linux/smbclient](https://tldr.inbrowser.app/pages/linux/smbclient)
