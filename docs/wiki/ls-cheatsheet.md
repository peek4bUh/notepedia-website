---
binaryType: navigation
draft: "false"
language: english
parent: "[ls](ls.md)"
status: ready
tags: [wiki, command-cheatsheet]
title: "ls: Cheatsheet"
---

# ls: Cheatsheet

> List directory contents.

```bash
# List the current working directory
ls
ls .

# List a specific directory
ls <𝗗𝗜𝗥_𝗣𝗔𝗧𝗛>

# List a specific directory (long output)
ls -l <𝗗𝗜𝗥_𝗣𝗔𝗧𝗛>

# List multiple directories
ls <𝗗𝗜𝗥_𝗣𝗔𝗧𝗛𝟭> <𝗗𝗜𝗥_𝗣𝗔𝗧𝗛𝟮>...

# List only files
ls -p <𝗗𝗜𝗥_𝗣𝗔𝗧𝗛> | grep -v '/'

# List only directories
ls -p <𝗗𝗜𝗥_𝗣𝗔𝗧𝗛> | grep '/$'
```

## References

- Shotts, W. (2019). <span class="reference-title">The Linux Command Line: Exploring the System: Options and Arguments (2nd ed.)</span>. No Starch Press
- _HTB Academy_. (n.d.). <span class="reference-title">Linux Fundamentals: Workflow: Navigation</span>. [https://academy.hackthebox.com/module/18/section/75](https://academy.hackthebox.com/module/18/section/75)

## See Also

- [cd: Cheatsheet](cd-cheatsheet.md)
