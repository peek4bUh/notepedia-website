---
draft: "true"
language: english
parent: "[rsync](rsync.md)"
tags: [wiki, command-cheatsheet]
title: "rsync: Cheatsheet"
---

# rsync: Cheatsheet

> A fast, versatile, remote (and local) file-copying tool.

```bash
# List all the available directories to an anonymous user
rsync --list-only <𝑰𝑷_𝑨𝑫𝑫𝑹𝑬𝑺𝑺>::

# List contents of specific directory as anonymous user
rsync --list-only <𝑰𝑷_𝑨𝑫𝑫𝑹𝑬𝑺𝑺>::<𝑫𝑰𝑹𝑬𝑪𝑻𝑶𝑹𝒀>

# Copy a file from the target machine to my local machine
rsync <𝑰𝑷_𝑨𝑫𝑫𝑹𝑬𝑺𝑺>::<𝑭𝑰𝑳𝑬_𝑷𝑨𝑻𝑯> <𝑳𝑶𝑪𝑨𝑳_𝑭𝑰𝑳𝑬>
```

## References

- 0ne-nine9. (n.d.). <span class="reference-title">Synced Write-up</span>. _HTB Labs_. [https://app.hackthebox.com/starting-point](https://app.hackthebox.com/starting-point)
