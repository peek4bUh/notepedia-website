---
draft: "false"
language: english
parent: "[computing-moc](computing-moc.md)"
status: ready
tags: [wiki]
title: Command
---

# Command

A **command** can be one of four different things:

- An <span class="highlight">executable program</span> like all those files you see in [/usr/bin](usr-bin-directory.md). Within this category, programs can be _compiled binaries_ such as programs written C and C++, or programs written in _scripting languages_ such as the shell, Perl, Python, Ruby, and so on.
- A <span class="highlight">command built into the shell itself</span>. [Bash](bash.md) supports a number of **commands** internally called _shell builtins_. The [cd: Reference](cd-reference) command, for example, is a [shell](shell.md) builtin.
- A <span class="highlight">shell function</span>. Shell functions are miniature [shell](shell.md) scripts incorporated into the _environment_.
- An <span class="highlight">alias</span>. Aliases are **commands** that we can define ourselves, built from other **commands**.

It is often useful to know exactly which of the four kinds of **commands** is being used, and Linux provides a couple of ways to find out:

- [type: Cheatsheet](type-cheatsheet.md)
- [which: Cheatsheet](which-cheatsheet.md)
- [help](help.md)
- **command** --help
- [Man Page](man-page.md)
- [apropos: Cheatsheet](apropos-cheatsheet.md)
- [whatis: Cheatsheet](whatis-cheatsheet.md)
- [info](info.md)

## References

- Shotts, W. (2019). <span class="reference-title">The Linux Command Line: Navigation: Working With Commands: What Exactly Are Commands? (2nd ed.)</span>. No Starch Press
- Shotts, W. (2019). <span class="reference-title">The Linux Command Line: Navigation: Getting a Command's Documentation: help-Get Help for Shell Builtins (2nd ed.)</span>. No Starch Press
