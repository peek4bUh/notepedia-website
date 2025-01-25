---
draft: "false"
status: ready
tags: [cheatsheet]
title: pacman
---

# pacman

```bash
# Search for package(s)
pacman -Ss pkg_name...

# Install package(s), where `PKG_NAME` is
# (e.g., bash, "bash>=3.2", extra/bash)
pacman -S pkg_name...

# Upgrade Packages
pacman -Syu

# Install package(s) and upgrade packages
pacman -Syu pkg_name...

# Remove a package(s) and all dependencies
pacman -Rs pkg_name...

# Remove a package(s) and its config files
pacman -Rn pkg_name...

# Remove a package(s) and all dependencies
# and config files
pacman -Rns pkg_name...
```

## References

- https://wiki.archlinux.org/title/Pacman/Rosetta

## See Also

- [dpkg](dpkg.md)
- [apt](apt.md)
