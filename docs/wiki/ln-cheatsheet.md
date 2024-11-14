---
binaryType: files-directories-manipulation
draft: "false"
language: english
status: ready 
tags: [wiki, command-cheatsheet]
title: "ln: Cheatsheet"
---

# ln: Cheatsheet

> Creates links to files and directories.

```bash
# Create a hard link to a file (directories
# are not allowed)
ln <𝗙𝗜𝗟𝗘_𝗣𝗔𝗧𝗛> <𝗛𝗔𝗥𝗗_𝗟𝗜𝗡𝗞_𝗣𝗔𝗧𝗛>

# Create a soft link to a file or directory
ln -s <𝗙𝗜𝗟𝗘_𝗢𝗥_𝗗𝗜𝗥_𝗣𝗔𝗧𝗛> <𝗦𝗬𝗠𝗟𝗜𝗡𝗞_𝗣𝗔𝗧𝗛>

# Overwrite an existing soft link to point
# to a different file
ln -sf <𝗡𝗘𝗪_𝗙𝗜𝗟𝗘_𝗣𝗔𝗧𝗛> <𝗦𝗬𝗠𝗟𝗜𝗡𝗞_𝗣𝗔𝗧𝗛>
```

## References

- Shotts, W. (2019). <span class="reference-title">The Linux Command Line: Manipulating Files and Directories: rm-Remove Files and Directories: Useful Options and Examples (2nd ed.)</span>. No Starch Press
- _tldr InBrowser.App_. (n.d.). [https://tldr.inbrowser.app/pages/common/ln](https://tldr.inbrowser.app/pages/common/ln)

## See Also

- [Hard Link](hard-link.md)
- [Soft Link](soft-link.md)
