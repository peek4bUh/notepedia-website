---
draft: "false"
status: ready
tags: [cheatsheet]
title: sudo
---

# sudo

The `sudo` command is like [su](su.md) in many ways but has some important additional capabilities. The administrator can configure `sudo` to allow an ordinary user to execute commands as a different user in a controlled way.

A user may be restricted to one or more specific commands and no others. Another important difference is that the use of `sudo` does not require access to the superuser's password. Authenticating using `sudo` requires the user's own password.

## Cheatsheet

```bash
# Run a command as the superuser
sudo command

# Display privileges granted
sudo -l

# Edit a file as the superuser with
# your default editor
sudo -e path/to/file

# Run a command as another user and/or group
sudo -u username -g group command

# Repeat the last command prefixed with sudo
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
sudo -i -u username
```

## References

- tldr. _inbrowser.app_. (n.d.). [https://tldr.inbrowser.app/pages/common/sudo](https://tldr.inbrowser.app/pages/common/sudo)

## See Also

- [su](su.md)
