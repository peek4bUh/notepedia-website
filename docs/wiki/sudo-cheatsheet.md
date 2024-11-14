---
draft: "false"
language: english
parent: "[sudo](sudo.md)"
status: ready
tags: [wiki, command-cheatsheet]
title: "sudo: Cheatsheet"
---

# sudo: Cheatsheet

```bash
# Run a command as the superuser
sudo <𝗖𝗢𝗠𝗠𝗔𝗡𝗗>

# Display privileges granted
sudo -l

# Edit a file as the superuser with
# your default editor
sudo -e <𝗙𝗜𝗟𝗘_𝗣𝗔𝗧𝗛>

# Run a command as another user and/or group
sudo -u <𝗨𝗦𝗘𝗥𝗡𝗔𝗠𝗘> -g 𝑔𝑟𝑜𝑢𝑝 <𝗖𝗢𝗠𝗠𝗔𝗡𝗗>

# Repeat the last command prefixed with `sudo`
# (only in Bash, Zsh, etc.)
sudo !!

# Launch the default shell with superuser privileges
# and run login-specific files (`.profile`,
# `.bash_profile`, etc.)
sudo -i

# Launch the default shell with superuser privileges
# without changing the environment
sudo -s

# Launch the default shell as the specified user, loading
# the user's environment and reading login-specific files
# (`.profile`, `.bash_profile`, etc.):
sudo -i -u <𝗨𝗦𝗘𝗥𝗡𝗔𝗠𝗘>
```

## References

- tldr. _inbrowser.app_. (n.d.). [https://tldr.inbrowser.app/pages/common/sudo](https://tldr.inbrowser.app/pages/common/sudo)
