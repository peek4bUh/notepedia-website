---
draft: "true"
language: english
status: incomplete
tags: [wiki]
title: Package Management
---

# Package Management

The most important determinant of distribution quality is the _packaging system_ and the vitality of the distribution's support community. As you spend more time with Linux, you will see that its software landscape is extremely dynamic.

Things are constantly changing. Most of the top-tier Linux distributions release new versions every six months and many individual program updates every day. To keep up with this blizzard of software, you need good tools for _package management_.

**Package management** is a method of installing and maintaining software on the system. Today, most people can satisfy all of their software needs by installing _packages_ from their Linux distributor.

This contrast with the early days of Linux, when one had to download and compile _source code_ to install software.

## Packaging Systems

Different distributions use different packaging systems and as a general rule, a package intended for one distribution is not compatible with another distribution. Most distributions fall into one of two camps of packaging technologies: the Debian `.deb` camp and the Red Had `.rpm` camp. There are some important exceptions such as Gentoo, Slackware ad Arch, but most others use one of these two basic systems.

| **Packaging system**   | **Distributions (partial listing)**                |
| ---------------------- | -------------------------------------------------- |
| Debian-style (`.deb`)  | Debian, Ubuntu, Linux Mint, Raspbian               |
| Red Hat-style (`.rpm`) | Fedora, CentOS, Red Had Enterprise Linux, OpenSuse |

## How a Package System Works

The method of software distribution found in the proprietary software industry usually entails buying a piece of installation media such as an "install disk" or visiting each vendor's website and downloading the products and then running an "installation wizard" to install a new application on the system.

Linux doesn't work that way. Virtually all software for a Linux system will be found in the form of _package files_ and the rest will be available in source code from that can be installed manually.

### Package Files

The basic unit of software is a packaging system in the _package file_. A package file is a compressed collection of files that comprise the software package. A package may consist of numerous programs and data files that support the programs.

In addition to the files to be installed, the package file also includes metadata about the package, such as a text description of the package and its contents. Additionally, many packages contain pre- and post-installation scripts that perform configuration tasks before and after the package installation.

Package files are created by a person known as a _package maintainer_, often (but not always) an employee of the distribution vendor. The package maintainer gets the software in source code form from the _upstream provider_ (the author of the program), compiles it and creates the package metadata and any necessary installation scripts.

Often, the package maintainer will apply modifications to the original source code to improve the program's integration with the other part of the Linux distribution.

### Repositories

While some software projects choose to perform their own packaging and distribution, most packages today are created by the distribution vendors and interested third parties. Packages are made available to the users of a distribution in central repositories that may contain many thousands of packages, each specially build and maintained for the distribution.

A distribution may maintain several different repositories for different stages of the software development life cycle.

A distribution may also have related third-party repositories. These are often needed to supply software that, for legal reasons such as patents or DRM anti-circumvention issues, cannot be included with the distribution.

### Dependencies

Programs are seldom "stand alone"; rather, they rely on the presence of other software components to get their work done. Common activities, such as input/output, for example, are handled by routines shared by many programs.

These routines are stored in _shared libraries_, which provide essential services to more than one program. If a package requires a shared resource such as a shared library, it is said to have a **dependency**.

Modern package management systems all provide some method of _dependency resolution_ to ensure that when a package is installed, all of its dependencies are installed, too.

### High- and Low-Level Package Tools

Package management systems usually consist of two types of tools.

- Low-level tools that handle tasks such as installing and removing packages.
- High-level tools that perform metadata searching and dependency resolution.

| **Distributions**                        | **Low-level tools** | **High-level tools**   |
| ---------------------------------------- | ------------------- | ---------------------- |
| Debian-style                             | dpkg                | apt-get, apt, aptitude |
| Fedora, Red Had Enterprise Linux, CentOS | rpm                 | yum, dnf               |

## Common Package Management Tasks

Many operations can be performed with the command line package management tools.

In the discussion that follows, the term `package_name` refers to the actual name of a package rather than the term `package_file`, which is the mane of the file that contains the package.

### Finding a Package in a Repository

Using the high-level tools to search repository metadata, a package can be located based on its name or description.

| **Style** | **Command(s)**                                     |
| --------- | -------------------------------------------------- |
| Debian    | ` apt-get update``apt-cache search search_string ` |
| Red Hat   | `yum search search_string`                         |

### Installing a Package from a Repository

High-level tools permit a package to be downloaded from a repository and installed ith full dependency resolution.

| **Style** | **Command(s)**                                   |
| --------- | ------------------------------------------------ |
| Debian    | ` apt-get update``apt-get install package_name ` |
| Red Hat   | `yum install package_name`                       |

### Installing a Package from a Package File

If a package file has been downloaded from a source other than a repository, it can be installed directly using a low-level tool.

| **Style** | **Command(s)**         |
| --------- | ---------------------- |
| Debian    | `dpkg -i package_file` |
| Red Hat   | `rpm -i package_file`  |

Because this technique use the low-level rpm program to perform the installation, no dependency resolution is performed. If rpm discovers a missing dependency, rpm will exit with an error.

### Removing a Package

You can use high-level or low-level tools to remove a package.

| **Style** | **Command(s)**                |
| --------- | ----------------------------- |
| Debian    | `apt-get remove package_name` |
| Red Hat   | `yum erase package_name`      |

### Updating Packages from a Repository

| **Style** | **Command(s)**                      |
| --------- | ----------------------------------- |
| Debian    | ` apt-get update``apt-get upgrade ` |
| Red Hat   | `yum update`                        |

### Upgrading a Package from a Package File

| **Style** | **Command(s)**         |
| --------- | ---------------------- |
| Debian    | `dpkg -i package_file` |
| Red Hat   | `rpm -U package_file`  |

### Listing Installed Packages

| **Style** | **Command(s)** |
| --------- | -------------- |
| Debian    | `dpkg -l`      |
| Red Hat   | `rpm -qa`      |

### Determining Whether a Package Is Installed

| **Style** | **Command(s)**         |
| --------- | ---------------------- |
| Debian    | `dpkg -s package_name` |
| Red Hat   | `rpm -q package_name`  |

### Displaying Information About an Installed Package

| **Style** | **Command(s)**                |
| --------- | ----------------------------- |
| Debian    | `apt-cache show package_name` |
| Red Hat   | `yum info package_name`       |

### Finding Which Package Installed a File

| **Style** | **Command(s)**      |
| --------- | ------------------- |
| Debian    | `dpkg -S file_name` |
| Red Hat   | `rpm -qf file_name` |

## References

1. Shotts, W. (2019). _The Linux Command Line: Package Management_ (2nd ed.). No Starch Press
