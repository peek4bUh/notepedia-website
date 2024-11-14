---
draft: "true"
language: english
parent: "[computing-moc](computing-moc.md)"
status: incomplete
tags: [wiki]
title: Linux Architecture
---

# Linux Architecture

The Linux operating system can be broken down into layers:

| **Layer**                                     | **Description**                                                                                                                                                                                                                                                                                    |
| --------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <span class="highlight">Hardware</span>       | Peripheral devices such as the system's RAM, hard drive, CPU, and others.                                                                                                                                                                                                                          |
| <span class="highlight">Kernel</span>         | The core of the Linux operating system whose function is to virtualize and control common computer hardware resources like CPU, allocated memory, accessed data, and others. The kernel gives each process its own virtual resources and prevents/mitigates conflicts between different processes. |
| <span class="highlight">Shell</span>          | A command-line interface (**CLI**), also known as a shell that a user can enter commands into to execute the kernel's functions.                                                                                                                                                                   |
| <span class="highlight">System Utility</span> | Makes available to the user all of the operating system's functionality.                                                                                                                                                                                                                           |

## References

- _HTB Academy_. (n.d.). <span class="reference-title">Linux Fundamentals: Introduction: Linux Structure</span>. [https://academy.hackthebox.com/module/18/section/94](https://academy.hackthebox.com/module/18/section/94)
