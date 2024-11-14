---
draft: "true"
language: english
parent: "[computing-moc](computing-moc.md)"
status: incomplete
tags: [wiki]
title: Package Manager
---

# Package Manager

TODO: Buscar que hace un package manager y listar los más comunes.

Whether working as a system administrator, maintaining our own Linux machines at home, or building/upgrading/maintaining our penetration testing distribution of choice, it is crucial to have a firm grasp on the available Linux package managers and the various ways to utilize them to install, update, or remove packages. Packages are archives that contain binaries of software, configuration files, information about dependencies and keep track of updates and upgrades. The features that most package management systems provide are:

- Package downloading
- Dependency resolution
- A standard binary package format
- Common installation and configuration locations
- Additional system-related configuration and functionality
- Quality control

We can use many different package management systems that cover different types of files like ".deb", ".rpm", and others. The package management requirement is that the software to be installed is available as a corresponding package. Typically this is created, offered, and maintained centrally under Linux distributions. In this way, the software is integrated directly into the system, and its various directories are distributed throughout the system. The package management software retrieves the necessary changes for system installation from the package itself and then implements these changes to install the package successfully. If the package management software recognizes that additional packages are required for the proper functioning of the package that has not yet been installed, a dependency is included and either warns the administrator or tries to reload the missing software from a repository, for example, and install it in advance.

If an installed software has been deleted, the package management system then retakes the package's information, modifies it based on its configuration, and deletes files. There are different package management programs that we can use for this. Here is a list of examples of such programs:

| **Command** | **Description**                                                                                                                                                                                                                                                                                                                                         |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `dpkg`      | The `dpkg` is a tool to install, build, remove, and manage Debian packages. The primary and more user-friendly front-end for `dpkg` is aptitude.                                                                                                                                                                                                        |
| `apt`       | Apt provides a high-level command-line interface for the package management system.                                                                                                                                                                                                                                                                     |
| `aptitude`  | Aptitude is an alternative to apt and is a high-level interface to the package manager.                                                                                                                                                                                                                                                                 |
| `snap`      | Install, configure, refresh, and remove snap packages. Snaps enable the secure distribution of the latest apps and utilities for the cloud, servers, desktops, and the internet of things.                                                                                                                                                              |
| `gem`       | Gem is the front-end to RubyGems, the standard package manager for Ruby.                                                                                                                                                                                                                                                                                |
| `pip`       | Pip is a Python package installer recommended for installing Python packages that are not available in the Debian archive. It can work with version control repositories (currently only Git, Mercurial, and Bazaar repositories), logs output extensively, and prevents partial installs by downloading all requirements before starting installation. |
| `git`       | Git is a fast, scalable, distributed revision control system with an unusually rich command set that provides both high-level operations and full access to internals.                                                                                                                                                                                  |

It is highly recommended to set up our virtual machine (VM) locally to experiment with it. Let us experiment a bit in our local VM and extend it with a few additional packages. First, let us install `git` by using `apt`.

## References

1. HTB Academy. (n.d.). _Linux Fundamentals: System Management: Package Management_. [https://academy.hackthebox.com/module/18/section/72](https://academy.hackthebox.com/module/18/section/72)
