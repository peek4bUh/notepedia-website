---
draft: "false"
language: english
status: ready
tags: [wiki]
title: File Transfer Protocol
---

# File Transfer Protocol

The **File Transfer Protocol** (**FTP**) is a native protocol to all host operating systems and used for a long time for simple file transfer tasks, be they automated or manual. **FTP** can be easily misconfigured if not correctly understood. Users can download and upload files from the client (their own host) to the server (a centralized data storage device) or vice versa.

**FTP** by itself does have the ability to require credentials before allowing access to the stored files. However, the deficiency here is that traffic containing said files can be intercepted with what is known as a Man-in-the-Middle Attack (MitM). The contents of the files can be read in plaintext (meaning unencrypted, human-readable form).

This can be prevent by wrapping the connection with the SSL/TLS protocol or tunnel
the FTP connection through [SSH](secure-shell.md) to add a layer of encryption that only the source and destination hosts can decrypt, this would successfully foil most Man-in-the-Middle attacks.

If the target machine has the `anonymous` account enabled by misconfiguration, you can enter with the user `anonymous` and any password.

## References

- 0ne-nine9. (n.d.). <span class="reference-title">Fawn Write-up</span>. _HTB Labs_. [https://app.hackthebox.com/starting-point](https://app.hackthebox.com/starting-point)

## See Also

- [ftp: Cheatsheet](ftp-cheatsheet.md)
