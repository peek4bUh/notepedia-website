---
binaryType: file-interaction
draft: "false"
language: english
parent: "[tail](tail.md)"
status: ready
tags: [wiki, command-cheatsheet]
title: "tail: Cheatsheet"
---

# tail: Cheatsheet

> Output the last part of files.

```bash
# Specify the last `number` lines in a file
tail -n <𝗡𝗨𝗠𝗕𝗘𝗥> <𝗙𝗜𝗟𝗘_𝗣𝗔𝗧𝗛>

# Specify the line number where you start in a file
tail -n +<𝗡𝗨𝗠𝗕𝗘𝗥> <𝗙𝗜𝗟𝗘_𝗣𝗔𝗧𝗛>

# Print a specific count of bytes `-c` from the
# end of a given file
tail -c <𝗡𝗨𝗠𝗕𝗘𝗥> <𝗙𝗜𝗟𝗘_𝗣𝗔𝗧𝗛>

# Print the last lines of a file and keep reading it
# until `Ctrl + C`
tail -f <𝗙𝗜𝗟𝗘_𝗣𝗔𝗧𝗛>
```

## References

- _tldr InBrowser.App_. (n.d.). [https://tldr.inbrowser.app/pages/common/tail](https://tldr.inbrowser.app/pages/common/tail)
