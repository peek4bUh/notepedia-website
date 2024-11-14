---
binaryType: file-interaction
draft: "false"
language: english
parent: "[head](head.md)"
status: ready
tags: [wiki, command-cheatsheet]
title: "head: Cheatsheet"
---

# head: Cheatsheet

> Output the first part of files.

```bash
# Output the first few lines of a file
head -n <𝗖𝗢𝗨𝗡𝗧> <𝗙𝗜𝗟𝗘_𝗣𝗔𝗧𝗛>

# Output the first few bytes of a file
head -c <𝗖𝗢𝗨𝗡𝗧> <𝗙𝗜𝗟𝗘_𝗣𝗔𝗧𝗛>

# Output everything but the last few lines of a file
head -n -<𝗖𝗢𝗨𝗡𝗧> <𝗙𝗜𝗟𝗘_𝗣𝗔𝗧𝗛>

# Output everything but the last few bytes of a file
head -c -<𝗖𝗢𝗨𝗡𝗧> <𝗙𝗜𝗟𝗘_𝗣𝗔𝗧𝗛>
```

## References

- _tldr InBrowser.App_. (n.d.). [https://tldr.inbrowser.app/pages/linux/head](https://tldr.inbrowser.app/pages/linux/head)
