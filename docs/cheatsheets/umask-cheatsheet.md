---
draft: "false"
language: english
status: ready
tags: [wiki, command-cheatsheet]
title: "umask: Cheatsheet"
---

# umask: Cheatsheet

> Manage the read/write/execute permissions that are masked out (i.e. restricted) for newly created files by the user..

```bash
# Display the current mask in octal notation
umask

# Display the current mask in symbolic (human-readable) mode
umask -S

# Change the mask symbolically to allow read permission for
# all users (the rest of the mask bits are unchanged)
umask a+r

# Set the mask (using octal) to restrict no permissions for
# the file's owner, and restrict all permissions for everyone else
umask 077
```

## References

- tldr. _inbrowser.app_. (n.d.). [https://tldr.inbrowser.app/pages/common/umask](https://tldr.inbrowser.app/pages/common/umask)
