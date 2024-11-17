---
draft: "false"
language: english
status: ready
tags: [wiki, command-cheatsheet]
title: "chown: Cheatsheet"
---

# chown: Cheatsheet

> Change owner and group ownership of files and directories.

```bash
# Change the owner user of a file/directory
chown <𝗨𝗦𝗘𝗥> <𝗙𝗜𝗟𝗘_𝗢𝗥_𝗗𝗜𝗥_𝗣𝗔𝗧𝗛>

# Change the owner user and group of a file/directory
chown <𝗨𝗦𝗘𝗥>:<𝗚𝗥𝗢𝗨𝗣> <𝗙𝗜𝗟𝗘_𝗢𝗥_𝗗𝗜𝗥_𝗣𝗔𝗧𝗛>

# Change the owner user and group to both have the name `user`
chown <𝗨𝗦𝗘𝗥>: <𝗙𝗜𝗟𝗘_𝗢𝗥_𝗗𝗜𝗥_𝗣𝗔𝗧𝗛>

# Change the group owner, the file owner is unchanged
chown :<𝗚𝗥𝗢𝗨𝗣> <𝗙𝗜𝗟𝗘_𝗢𝗥_𝗗𝗜𝗥_𝗣𝗔𝗧𝗛>

# Recursively change the owner of a directory and its contents
chown -R <𝗨𝗦𝗘𝗥> <𝗗𝗜𝗥_𝗣𝗔𝗧𝗛>

# Recursively change the owner and group of a directory and its contents
chown -R <𝗨𝗦𝗘𝗥>:<𝗚𝗥𝗢𝗨𝗣> <𝗗𝗜𝗥_𝗣𝗔𝗧𝗛>

# Change the owner of a symbolic link
chown -h <𝗨𝗦𝗘𝗥> <𝗦𝗬𝗠𝗟𝗜𝗡𝗞_𝗣𝗔𝗧𝗛>
```

## References

- _tldr InBrowser.App_. (n.d.). [https://tldr.inbrowser.app/pages/common/chown](https://tldr.inbrowser.app/pages/common/chown)

## See Also

- [chgrp: Cheatsheet](chgrp-cheatsheet.md)
