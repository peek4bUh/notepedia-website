---
draft: "false"
language: english
status: ready
tags: [wiki, command-cheatsheet]
title: "passwd: Cheatsheet"
---

# passwd: Cheatsheet

> Change a user's password.

```bash
# Change the password of the current user interactively
passwd

# Change the password of a specific user
passwd <𝗨𝗦𝗘𝗥𝗡𝗔𝗠𝗘>

# Get the current status of the user
passwd -S

# Make the password of the account blank (it will
# set the named account passwordless)
passwd -d
```

## References

- tldr. _inbrowser.app_. (n.d.). [https://tldr.inbrowser.app/pages/common/passwd](https://tldr.inbrowser.app/pages/common/passwd)
