---
binaryType: text-manipulation
draft: "false"
language: english
parent: "[wc](wc.md)"
status: ready
tags: [wiki, command-cheatsheet]
title: "wc: Cheatsheet"
---

# wc: Cheatsheet

> Count lines, words, and bytes.

```bash
# Print lines, words and bytes
wc <𝗙𝗜𝗟𝗘_𝗣𝗔𝗧𝗛>

# Count all lines
wc -l <𝗙𝗜𝗟𝗘_𝗣𝗔𝗧𝗛>

# Count all words
wc -w <𝗙𝗜𝗟𝗘_𝗣𝗔𝗧𝗛>

# Count all bytes
wc -c <𝗙𝗜𝗟𝗘_𝗣𝗔𝗧𝗛>

# Count all characters (taking multi-byte
# characters into account)
wc -m <𝗙𝗜𝗟𝗘_𝗣𝗔𝗧𝗛>

# Count all lines, words and bytes from `stdin`
<𝗖𝗢𝗠𝗠𝗔𝗡𝗗> | wc

# Count the length of the longest line in
# number of characters
wc -L <𝗙𝗜𝗟𝗘_𝗣𝗔𝗧𝗛>
```

## References

- _tldr InBrowser.App_. (n.d.). [https://tldr.inbrowser.app/pages/common/wc](https://tldr.inbrowser.app/pages/common/wc)
