---
draft: "false"
language: english
parent: '[Server Message Block](server-message-block.md)'
status: ready
tags: [wiki]
title: smbclient
---

# smbclient

To enumerate share content on the target machine, you can use the `smbclient`.

`smbclient` will attempt to connect to the remote host and check if there is any authentication required. If there is, it will ask you for a password for your local username. If you don't specify a specific username to `smbclient` when attempting to connect to the remote host, it will just use your local machine's username.

This is because SMB authentication always requires a username, so by not giving it one explicitly to try to login with, it will just have to pass your current local username to avoid throwing an error with the protocol.

If you do not have such credentials, you can try the:

- Guest authentication
- Anonymous authentication

When connecting to a share shows the message `NT_STATUS_ACCESS_DENIED`, that means that you don't have the proper credentials to connect to this share.

Inside the share, you can use the `get` command to download a file, the file downloaded will be store in the path where you started the `smbclient`.

If one directory in the samba sever has the dollar symbol (`$`) means that is an administrative share.

## References

- 0ne-nine9. (n.d.). <span class="reference-title">Dancing Write-up</span>. _HTB Labs_. [https://app.hackthebox.com/starting-point](https://app.hackthebox.com/starting-point)

## See Also

- [smbclient: Cheatsheet](smbclient-cheatsheet.md)
