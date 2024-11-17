---
binaryType: text-manipulation
draft: "false"
language: english
status: ready
tags: [wiki, command-cheatsheet]
title: "tr: Cheatsheet"
---

# tr: Cheatsheet

> Translate or delete characters.

```Bash
# Replace all occurrences of a character in a file
# and print the result
tr <𝗢𝗟𝗗_𝗖𝗛𝗔𝗥𝗔𝗖𝗧𝗘𝗥> <𝗡𝗘𝗪_𝗖𝗛𝗔𝗥𝗔𝗖𝗧𝗘𝗥> < <𝗙𝗜𝗟𝗘_𝗣𝗔𝗧𝗛>

# Replace all occurrences of a character
# from another command's output
<𝗖𝗢𝗠𝗠𝗔𝗡𝗗> | tr <𝗢𝗟𝗗_𝗖𝗛𝗔𝗥𝗔𝗖𝗧𝗘𝗥> <𝗡𝗘𝗪_𝗖𝗛𝗔𝗥𝗔𝗖𝗧𝗘𝗥>
```

## References

- _HTB Academy_. (n.d.). <span class="reference-title">Linux Fundamentals: Workflow: Filter Contents</span>. [https://academy.hackthebox.com/module/18/section/80](https://academy.hackthebox.com/module/18/section/80)
