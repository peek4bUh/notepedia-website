---
draft: "false"
language: english
status: ready
tags: [wiki, command-cheatsheet]
title: "nmap: Cheatsheet"
---

# nmap: Cheatsheet

> Network exploration tool and security / port scanner.

```bash
# Display the services/version info used of the machine
nmap -sV <𝗜𝗣_𝗔𝗗𝗗𝗥𝗘𝗦𝗦>

# Scan all TCP ports (0-65535), set minimun packets to send
# per second (higher faster), and display the info of services
nmap -p- --min-rate=1000 -sV <𝗜𝗣_𝗔𝗗𝗗𝗥𝗘𝗦𝗦>

# Scan all TCP ports (0-65535), set minimun packets to send
# per second (higher faster), display the info of services
# and skip host discovery
nmap -p- --min-rate=1000 -sV -Pn <𝗜𝗣_𝗔𝗗𝗗𝗥𝗘𝗦𝗦>
```

## References

- 0ne-nine9. (n.d.). <span class="reference-title">Mongod Write-up</span>. _HTB Labs_. [https://app.hackthebox.com/starting-point](https://app.hackthebox.com/starting-point)
- 0ne-nine9, & ilinor. (n.d.). <span class="reference-title">Tactics Write-up</span>. _HTB Labs_. [https://app.hackthebox.com/starting-point](https://app.hackthebox.com/starting-point)
