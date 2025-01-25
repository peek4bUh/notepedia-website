---
draft: "false"
status: ready
tags: [cheatsheet]
title: su
---

# su

```bash
# Switch to superuser (requires the root password)
su

# Switch to another user (requires the user's password)
su username

# Switch to a given user and simulate a full login shell
su - username

# Execute a command as another user (e.g, tux)
su - username -c "ls"
```

## References

- tldr. _inbrowser.app_. (n.d.). [https://tldr.inbrowser.app/pages/common/su](https://tldr.inbrowser.app/pages/common/su)
