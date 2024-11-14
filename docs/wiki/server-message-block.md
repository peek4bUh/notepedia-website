---
aliases: [SMB]
draft: "true"
language: english
status: incomplete
tags: [wiki]
title: Server Message Block
type: permanent
---

# Server Message Block

The **Server Message Block** (**SMB**) runs at the application or presentation layers of the OSI model. Due to this, it relies on lower-level protocols for transport. The Transport layer protocol that Microsoft SMB Protocol is most often used with is NetBIOS over TCP/IP (NBT). This is why, during scans, you will most likely see both protocols with open ports running on the target.

An SMB-enabled storage on the network is called a `share`. These can be accessed by any client that has the address of the server and the proper credentials. Think of this share as a folder that can be accessed over the internet. In order to do so.

## References

## See Also

- [smbclient](smbclient.md)
