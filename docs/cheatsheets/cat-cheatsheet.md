---
binaryType: file-interaction
draft: "false"
language: english
parent: "[cat](cat.md)"
status: ready
tags: [wiki, command-cheatsheet]
title: "cat: Cheatsheet"
---

# cat: Cheatsheet

> Concatenate files and print on the standard output.

```bash
# Print the contents of a file to `stdout`
cat <𝗙𝗜𝗟𝗘_𝗣𝗔𝗧𝗛>

# Print the contents of a multiple files to `stdout`
cat <𝗙𝗜𝗟𝗘_𝗣𝗔𝗧𝗛𝟭> <𝗙𝗜𝗟𝗘_𝗣𝗔𝗧𝗛𝟮>...

# Concatenate several files into an output file
cat <𝗙𝗜𝗟𝗘_𝗣𝗔𝗧𝗛𝟭> <𝗙𝗜𝗟𝗘_𝗣𝗔𝗧𝗛𝟮>... > <𝗢𝗨𝗧𝗣𝗨𝗧_𝗙𝗜𝗟𝗘>

# Append several files to an output file
cat <𝗙𝗜𝗟𝗘_𝗣𝗔𝗧𝗛𝟭> <𝗙𝗜𝗟𝗘_𝗣𝗔𝗧𝗛𝟮>... >> <𝗢𝗨𝗧𝗣𝗨𝗧_𝗙𝗜𝗟𝗘>

# Copy the contents of a file into an output file without buffering
cat -u <𝗙𝗜𝗟𝗘_𝗣𝗔𝗧𝗛𝟭> > <𝗙𝗜𝗟𝗘_𝗣𝗔𝗧𝗛𝟮>

# Write `stdin` to a file
# TIP: use `CTRL + D` to stop writing
cat - > <𝗢𝗨𝗧𝗣𝗨𝗧_𝗙𝗜𝗟𝗘>
cat > <𝗢𝗨𝗧𝗣𝗨𝗧_𝗙𝗜𝗟𝗘>
```

## References

- _tldr InBrowser.App_. (n.d.). [https://tldr.inbrowser.app/pages/common/cat](https://tldr.inbrowser.app/pages/common/cat)
