---
binaryType: files-directories-manipulation
draft: "false"
language: english
status: ready
tags: [wiki, command-cheatsheet]
title: "mv: Cheatsheet"
---

# mv: Cheatsheet

> Move or rename files and directories.

```bash
# Rename file or directory when the target
# is not an existing directory
mv <𝗦𝗥𝗖_𝗣𝗔𝗧𝗛> <𝗧𝗔𝗥𝗚𝗘𝗧_𝗣𝗔𝗧𝗛>

# Move a file or directory into an existing directory
mv <𝗦𝗥𝗖_𝗣𝗔𝗧𝗛> <𝗘𝗫𝗜𝗦𝗧𝗜𝗡𝗚_𝗗𝗜𝗥_𝗣𝗔𝗧𝗛>

# Move multiple files into an existing directory,
# keeping the filenames unchanged
mv <𝗦𝗥𝗖_𝗣𝗔𝗧𝗛𝟭> <𝗦𝗥𝗖_𝗣𝗔𝗧𝗛𝟮>... <𝗘𝗫𝗜𝗦𝗧𝗜𝗡𝗚_𝗗𝗜𝗥_𝗣𝗔𝗧𝗛>

# Do not prompt for confirmation before
# overwriting existing files
mv -f <𝗦𝗥𝗖_𝗣𝗔𝗧𝗛> <𝗧𝗔𝗥𝗚𝗘𝗧_𝗣𝗔𝗧𝗛>

# Prompt for confirmation before overwriting existing
# files, regardless of file permissions
mv -i <𝗦𝗥𝗖_𝗣𝗔𝗧𝗛> <𝗧𝗔𝗥𝗚𝗘𝗧_𝗣𝗔𝗧𝗛>

# Do not overwrite existing files at the target
mv -n <𝗦𝗥𝗖_𝗣𝗔𝗧𝗛> <𝗧𝗔𝗥𝗚𝗘𝗧_𝗣𝗔𝗧𝗛>

# Move files in verbose mode, showing files after they are moved
mv -v <𝗦𝗥𝗖_𝗣𝗔𝗧𝗛> <𝗧𝗔𝗥𝗚𝗘𝗧_𝗣𝗔𝗧𝗛>
```

## References

- Shotts, W. (2019). <span class="reference-title">The Linux Command Line: Manipulating Files and Directories: mv-Move and Rename Files: Useful Options and Examples (2nd ed.)</span>. No Starch Press
- _tldr InBrowser.App_. (n.d.). [https://tldr.inbrowser.app/pages/common/mv](https://tldr.inbrowser.app/pages/common/mv)

## Related

- Jacob Hornbeck. (2022, January 16), & Scott - Слава Україні. (2022, January 16). <span class="reference-title">mv: target “XXX” is not a directory</span>. _Super User_. [https://superuser.com/a/1699537](https://superuser.com/a/1699537)
