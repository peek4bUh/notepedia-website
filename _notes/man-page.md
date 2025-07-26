---
aliases: [manual page]
draft: "false"
title: Man Page
---

# Man Page

- Is a type of documentation usually found on a Unix or Unix-like OS.
- On most Linux systems, `man` uses the `less` command to display the manual page.

The manual can be broken into sections:

| Section | Description                                                            |
| :-----: | ---------------------------------------------------------------------- |
|    1    | Executable programs or shell commands.                                 |
|    2    | System calls (functions provided by the kernel).                       |
|    3    | Library calls (functions within program libraries).                    |
|    4    | Special files (usually found in /dev).                                 |
|    5    | File formats and conventions (eg. /etc/passwd).                        |
|    6    | Games.                                                                 |
|    7    | Miscellaneous (macro packages and conventions), e.g. man(7), groff(7). |
|    8    | System administration commands (usually only for root).                |
|    9    | Kernel routines \[Non standard\].                                      |

The following conventions apply to the **SYNOPSIS** section and can be used as a guide in other sections:

| Convention               | Description                                        |
| ------------------------ | -------------------------------------------------- |
| bold text                | Type exactly as shown.                             |
| italic or underline text | Replace with appropriate argument.                 |
| \[-abc\]                 | Any or all arguments within `[]` are optional.     |
| -a\|-b                   | Options delimited by `\|` cannot be used together. |
| argument ...             | Argument is repeatable.                            |
| \[expression\] ...       | Entire expression within `[]` is repeatable.       |

Exact rendering may vary depending on the output device. For instance, `man` will usually _not be able to render italics when running in a terminal_, and _will typically use underlined or coloured text instead_.

## References

- _Wikipedia_. (2024, June 17). <span class="reference-title">Man page</span>. [https://en.wikipedia.org/wiki/Man_page](https://en.wikipedia.org/wiki/Man_page)
- _man_. manned.org. [https://www.man7.org/linux/man-pages/man1/man.1.html](https://www.man7.org/linux/man-pages/man1/man.1.html)
