---
aliases: [/var/log]
draft: "false"
language: english
parent: "[/var Directory](var-directory.md)"
status: ready
tags: [wiki]
title: /var/log Directory
---

# /var/log Directory

The `/var/log` directory contains log files, records of various system activity. These are important and should be monitored from time to time.

The logs inside this directory contain information about the activities of specific applications running on the system. They are often stored in their own files, such as:

- `/var/log/apache2/error.log` for the Apache web server
- `/var/log/mysql/error.log` for the MySQL database server.
- `/var/log/pihole/pihole.log` for the Pi-hole server.
- etc...

By examining these logs, you can identify potential vulnerabilities, misconfigurations or configuration errors.

Note that for security reasons on some systems, you must be the superuser to view log files.

## References

- Shotts, W. (2019). <span class="reference-title">The Linux Command Line: Exploring the System: Taking a Guided Tour (2nd ed.)</span>. No Starch Press
- _HTB Academy_. (n.d.). <span class="reference-title">Linux Fundamentals: Introduction: Linux Structure</span>. [https://academy.hackthebox.com/module/18/section/94](https://academy.hackthebox.com/module/18/section/94)
- _HTB Academy_. (n.d.). <span class="reference-title">Linux Fundamentals: Linux Hardening: System Logs</span>. [https://academy.hackthebox.com/module/18/section/2100](https://academy.hackthebox.com/module/18/section/2100)

## See Also

- [/var/log/auth.log](var-log-auth-log-file.md)
- [/var/log/kern.log](kernel-logs.md)
- [/var/log/syslog](/var/log/syslog)
- [/var/log/messages](/var/log/messages)
