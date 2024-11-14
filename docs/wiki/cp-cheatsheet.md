---
binaryType: files-directories-manipulation
draft: "false"
language: english
status: ready
tags: [wiki, command-cheatsheet]
title: "cp: Cheatsheet"
---

# cp: Cheatsheet

> Copy files and directories.

```bash
# Copy a file to another location (if `target_file`
# exists, it is overwritten with the contents of
# `source_file`; otherwise, it is created)
cp <𝗦𝗥𝗖_𝗙𝗜𝗟𝗘_𝗣𝗔𝗧𝗛> <𝗧𝗔𝗥𝗚𝗘𝗧_𝗙𝗜𝗟𝗘_𝗣𝗔𝗧𝗛>

# Prompt user to copy a file to another location
cp -i <𝗦𝗥𝗖_𝗙𝗜𝗟𝗘_𝗣𝗔𝗧𝗛> <𝗧𝗔𝗥𝗚𝗘𝗧_𝗙𝗜𝗟𝗘_𝗣𝗔𝗧𝗛>

# Copy a file into another directory, keeping the filename
# INFO: `dest_directory` must already exist
cp <𝗦𝗥𝗖_𝗙𝗜𝗟𝗘_𝗣𝗔𝗧𝗛> <𝗗𝗘𝗦𝗧_𝗗𝗜𝗥_𝗣𝗔𝗧𝗛>

# Copy multiple files into another directory,
# keeping the filename
# INFO: `dest_directory` must already exist
cp <𝗦𝗥𝗖_𝗙𝗜𝗟𝗘_𝗣𝗔𝗧𝗛𝟭> <𝗦𝗥𝗖_𝗙𝗜𝗟𝗘_𝗣𝗔𝗧𝗛𝟮>... <𝗗𝗘𝗦𝗧_𝗗𝗜𝗥_𝗣𝗔𝗧𝗛>

# Copy all files from a directory to another
# INFO: `dest_directory` must already exist
cp <𝗦𝗥𝗖_𝗗𝗜𝗥_𝗣𝗔𝗧𝗛>* <𝗗𝗘𝗦𝗧_𝗗𝗜𝗥_𝗣𝗔𝗧𝗛>

# Recursively copy a directory's contents to
# another location (If `dest_directory` exists,
# the `source_directory` is copied inside it,
# otherwise `dest_directory` is created)
cp -R <𝗦𝗥𝗖_𝗗𝗜𝗥_𝗣𝗔𝗧𝗛> <𝗗𝗘𝗦𝗧_𝗗𝗜𝗥_𝗣𝗔𝗧𝗛>

# Recursively copy a directory's contents
# to another location in verbose mode (show files
# as they are copied)
cp -vR <𝗦𝗥𝗖_𝗗𝗜𝗥_𝗣𝗔𝗧𝗛> <𝗗𝗘𝗦𝗧_𝗗𝗜𝗥_𝗣𝗔𝗧𝗛>
```

## References

- Shotts, W. (2019). <span class="reference-title">The Linux Command Line: Manipulating Files and Directories: cp-Copy Files and Directories: Useful Options and Examples</span> (2nd ed.). No Starch Press
- _tldr InBrowser.App_. (n.d.). [https://tldr.inbrowser.app/pages/common/cp](https://tldr.inbrowser.app/pages/common/cp)
