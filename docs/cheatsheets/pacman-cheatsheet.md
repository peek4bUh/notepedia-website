---
draft: "false"
language: english
status: ready
tags: [wiki, command-cheatsheet]
title: "pacman: Cheatsheet"
type: permanent
---

# pacman: Cheatsheet

```bash
# Search for package(s)
pacman -Ss <𝗣𝗞𝗚_𝗡𝗔𝗠𝗘>...

# Install package(s), where `PKG_NAME` is
# (e.g., bash, "bash>=3.2", extra/bash)
pacman -S <𝗣𝗞𝗚_𝗡𝗔𝗠𝗘>...

# Upgrade Packages
pacman -Syu

# Install package(s) and upgrade packages
pacman -Syu <𝗣𝗞𝗚_𝗡𝗔𝗠𝗘>...

# Remove a package(s) and all dependencies
pacman -Rs <𝗣𝗞𝗚_𝗡𝗔𝗠𝗘>...

# Remove a package(s) and its config files
pacman -Rn <𝗣𝗞𝗚_𝗡𝗔𝗠𝗘>...

# Remove a package(s) and all dependencies
# and config files
pacman -Rns <𝗣𝗞𝗚_𝗡𝗔𝗠𝗘>...
```

## References

- https://wiki.archlinux.org/title/Pacman/Rosetta

## See Also

- [dpkg: Cheatsheet](dpkg-cheatsheet.md)
- [apt: Cheatsheet](apt-cheatsheet.md)
