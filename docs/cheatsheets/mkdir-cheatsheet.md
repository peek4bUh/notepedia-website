---
binaryType: files-directories-manipulation
draft: "false"
language: english
status: ready
tags: [wiki, command-cheatsheet]
title: "mkdir: Cheatsheet"
---

# mkdir: Cheatsheet

> Create directories and set their permissions.

```bash
# Create a new directory
mkdir <𝗗𝗜𝗥>

# Create multiple directories
mkdir <𝗗𝗜𝗥𝟭> <𝗗𝗜𝗥𝟮> <𝗗𝗜𝗥𝟯>...

# Create one specific directory
mkdir <𝗗𝗜𝗥_𝗣𝗔𝗧𝗛>

# Create specific directories
mkdir <𝗗𝗜𝗥_𝗣𝗔𝗧𝗛𝟭> <𝗗𝗜𝗥_𝗣𝗔𝗧𝗛𝟮>...

# Create directories with specific permissions
mkdir -m rwxrw-r-- <𝗗𝗜𝗥_𝗣𝗔𝗧𝗛𝟭> <𝗗𝗜𝗥_𝗣𝗔𝗧𝗛𝟮>...

# Create specific directories and their
# parents if needed
mkdir -p <𝗗𝗜𝗥_𝗣𝗔𝗧𝗛𝟭> <𝗗𝗜𝗥_𝗣𝗔𝗧𝗛𝟮>...
```

## References

- _tldr InBrowser.App_. (n.d.). [https://tldr.inbrowser.app/pages/common/mkdir](https://tldr.inbrowser.app/pages/common/mkdir)
