---
draft: "true"
language: english
status: ready
tags: [wiki]
title: rsync
---

# rsync

`rsync` it's a great tool for creating/maintaining backups and keeping remote machines in sync with each other.

`rsync` protocol is generally preferred than [FTP](file-transfer-protocol.md).

The main stages of an rsync transfer are the following:

1. rsync establishes a connection to the remote host and spawns another rsync receiver process.
2. The sender and receiver processes compare what files have changed.
3. What has changed gets updated on the remote host.

It often happens that rsync is misconfigured to permit anonymous login, which can be exploited by an attacker to get access to sensitive information stored on the remote machine.

The way `rsync` works makes it an excellent choice when there is a need to synchronize files between a computer and a storage drive and across networked computers. Because of the flexibility and speed it offers, it has become a standard Linux utility, included in all popular Linux distribution by default.

## References

- 0ne-nine9. (n.d.). <span class="reference-title">Synced Write-up</span>. _HTB Labs_. [https://app.hackthebox.com/starting-point](https://app.hackthebox.com/starting-point)

## See Also

- [rsync: Cheatsheet](rsync-cheatsheet.md)