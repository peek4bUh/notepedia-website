---
draft: "false"
language: english
noteType: permanent
status: ready
tags: [wiki, command-cheatsheet]
title: "chgrp: Cheatsheet"
---

# chgrp: Cheatsheet

> Change group ownership of files and directories.

```bash
# Change the owner group of a file/directory
chgrp <𝗚𝗥𝗢𝗨𝗣> <𝗙𝗜𝗟𝗘_𝗢𝗥_𝗗𝗜𝗥_𝗣𝗔𝗧𝗛>

# Recursively change the owner group of a
# directory and its contents
chgrp -R <𝗚𝗥𝗢𝗨𝗣> <𝗗𝗜𝗥_𝗣𝗔𝗧𝗛>

# Change the owner group of a symbolic link
chgrp -h <𝗚𝗥𝗢𝗨𝗣> <𝗦𝗬𝗠𝗟𝗜𝗡𝗞_𝗣𝗔𝗧𝗛>

# Change the owner group of a file/directory
# to match a reference file
chgrp --reference=<𝗥𝗘𝗙𝗘𝗥𝗘𝗡𝗖𝗘_𝗙𝗜𝗟𝗘_𝗣𝗔𝗧𝗛> <𝗙𝗜𝗟𝗘_𝗢𝗥_𝗗𝗜𝗥_𝗣𝗔𝗧𝗛>
```

## References

- _tldr InBrowser.App_. (n.d.). [https://tldr.inbrowser.app/pages/common/chgrp](https://tldr.inbrowser.app/pages/common/chgrp)

## See Also

- [chown: Cheatsheet](chown-cheatsheet.md)
