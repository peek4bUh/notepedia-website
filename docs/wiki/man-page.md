---
aliases: [manual page]
draft: "false"
language: english
status: ready
tags: [wiki]
title: Man Page
---

# Man Page

The **man page** or **manual page** is a type of documentation usually found on a Unix or [unix-like](unix-like.md) operating system.

On most Linux systems, `man` uses [less](less.md) to display the manual page.

The manual that `man` displays is broken into sections:

1. Executable programs or shell commands.
2. System calls (functions provided by the kernel).
3. Library calls (functions within program libraries).
4. Special files (usually found in /dev).
5. File formats and conventions (eg. /etc/passwd).
6. Games.
7. Miscellaneous (macro packages and conventions), e.g. man(7), groff(7).
8. System administration commands (usually only for root).
9. Kernel routines \[Non standard\].

The following conventions apply to the _SYNOPSIS_ section and can be used as a guide in other sections.

```
bold text          type exactly as shown.
italic text        replace with appropriate argument.
[-abc]             any or all arguments within [ ] are optional.
-a|-b              options delimited by | cannot be used together.
argument ...       argument is repeatable.
[expression] ...   entire expression within [ ] is repeatable.
```

Exact rendering may vary depending on the output device. For instance, `man` will usually _not be able to render italics when running in a terminal_, and _will typically use underlined or coloured text instead_.

_The command or function illustration is a pattern that should match all possible invocations._

## References

- _Wikipedia_. (2024, June 17). <span class="reference-title">Man page</span>. [https://en.wikipedia.org/wiki/Man_page](https://en.wikipedia.org/wiki/Man_page)
- _man_. manned.org. [https://www.man7.org/linux/man-pages/man1/man.1.html](https://www.man7.org/linux/man-pages/man1/man.1.html)

## See Also

- [man: Cheatsheet](man-cheatsheet.md)
