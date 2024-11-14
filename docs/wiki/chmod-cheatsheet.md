---
draft: "false"
language: english
status: ready
tags: [wiki, command-cheatsheet]
title: "chmod: Cheatsheet"
---

# chmod: Cheatsheet

> Change the access permissions of a file or directory.

```bash
# Give the user who owns a file the right
# to execute it
chmod u+x <𝗙𝗜𝗟𝗘_𝗣𝗔𝗧𝗛>

# Give the user rights to read and write
# to a file/directory
chmod u+rw <𝗙𝗜𝗟𝗘_𝗢𝗥_𝗗𝗜𝗥_𝗣𝗔𝗧𝗛>

# Remove executable rights from the group
chmod g-x <𝗙𝗜𝗟𝗘_𝗣𝗔𝗧𝗛>

# Give all users rights to read and execute
chmod a+rx <𝗙𝗜𝗟𝗘_𝗣𝗔𝗧𝗛>

# Give others (not in the file owner's group)
# the same rights as the group
chmod o=g <𝗙𝗜𝗟𝗘_𝗣𝗔𝗧𝗛>

# Remove all rights from others
chmod o= <𝗙𝗜𝗟𝗘_𝗣𝗔𝗧𝗛>

# Change permissions recursively giving group
# and others the ability to write
chmod -R g+w,o+w <𝗗𝗜𝗥_𝗣𝗔𝗧𝗛>

# Recursively give all users read permissions
# to files and execute permissions to sub-directories
# within a directory
chmod -R a+rX <𝗗𝗜𝗥_𝗣𝗔𝗧𝗛>
```

## References

- _tldr InBrowser.App_. (n.d.). [https://tldr.inbrowser.app/pages/common/chmod](https://tldr.inbrowser.app/pages/common/chmod)
