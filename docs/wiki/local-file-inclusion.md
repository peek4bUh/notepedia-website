---
draft: "true"
language: english
status: incomplete
tags: [wiki]
title: Local File Inclusion
---

# Local File Inclusion

**Local File Inclusion** (**LFI**) occurs when an attacker is able to get a website to include a file that was not intended to be an option for this application.

A common example is when an application uses the path to a file as input. If the application treats this input as trusted, and the required sanitary checks are not performed on this input, then the attacker can exploit it by using the `../` string in the inputted file name and eventually view sensitive files in the local file system. In some limited cases, an LFI can lead to code execution as well.

Look for `WINDOWS\System32\drivers\etc\hosts` file.

## References

- 0ne-nine9. (n.d.). <span class="reference-title">Responder Write-up</span>. _HTB Labs_. [https://app.hackthebox.com/starting-point](https://app.hackthebox.com/starting-point)

## See Also

- [Remote File Inclusion](remote-file-inclusion.md)
