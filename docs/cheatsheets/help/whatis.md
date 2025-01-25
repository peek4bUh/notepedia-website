---
draft: "false"
status: ready
tags: [command]
title: whatis
---

# whatis

Display one-line descriptions from manual pages.

Each manual page has a short description available within it. `whatis` searches the manual page names and displays the manual page descriptions of any name matched.

## Cheatsheet

```bash
# Display a description from a man page
whatis <𝗖𝗢𝗠𝗠𝗔𝗡𝗗>

# Don't cut the description dff at the end of the line
whatis -l <𝗖𝗢𝗠𝗠𝗔𝗡𝗗>

# Display descriptions for all commands matching a glob
whatis -w <𝗪𝗢𝗥𝗗>*

# Search manpage descriptions with a regular expression
whatis -r '<𝗥𝗘𝗚𝗘𝗫>'

# Display descriptions in a specific language
whatis -L <𝗟𝗔𝗡𝗚𝗨𝗔𝗚𝗘> <𝗖𝗢𝗠𝗠𝗔𝗡𝗗>
```

## References

- _tldr InBrowser.App_. (n.d.). [https://tldr.inbrowser.app/pages/linux/whatis](https://tldr.inbrowser.app/pages/linux/whatis)
