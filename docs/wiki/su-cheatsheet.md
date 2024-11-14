---
draft: "false"
language: english
status: ready
tags: [wiki, command-cheatsheet]
title: "su: Cheatsheet"
---

# su: Cheatsheet

> Switch shell to another user.

```bash
# Switch to superuser (requires the root password)
su

# Switch to another user (requires the user's password)
su <𝗨𝗦𝗘𝗥𝗡𝗔𝗠𝗘>

# Switch to a given user and simulate a full login shell
su - <𝗨𝗦𝗘𝗥𝗡𝗔𝗠𝗘>

# Execute a command as another user
su - <𝗨𝗦𝗘𝗥𝗡𝗔𝗠𝗘> -c "<𝗖𝗢𝗠𝗠𝗔𝗡𝗗>"
```

## References

- tldr. _inbrowser.app_. (n.d.). [https://tldr.inbrowser.app/pages/common/su](https://tldr.inbrowser.app/pages/common/su)
