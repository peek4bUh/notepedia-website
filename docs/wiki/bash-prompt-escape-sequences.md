---
draft: "false"
language: english
parent: "[Bash Prompt](bash-prompt.md)"
status: ready
tags: [wiki]
title: Bash Prompt Escape Sequences
---

# Bash Prompt Escape Sequences

[Bash](bash.md) allows these prompt strings to be customized by inserting a number of backslash-escaped special characters that are decoded as follows:

| Sequence       | Description                                                                                                                                                                                                               |
| :------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `\[`           | Signals the start of a series of one or more non-printing characters. Used to embed non-printing control characters that manipulate the terminal emulator in some way, such as moving the cursor or changing text colors. |
| `\]`           | Signals the end of a non-printing character sequence.                                                                                                                                                                     |
| `\!`           | History number of the current command.                                                                                                                                                                                    |
| `\@`           | Current time 12-hour `AM/PM` format.                                                                                                                                                                                      |
| `\#`           | Number of commands entered during this shell session.                                                                                                                                                                     |
| `\$`           | This displays a `$` character unless you have superuser privileges. In that case, it displays a `#` instead.                                                                                                              |
| `\a`           | ASCI bell. This makes the computer beep when it is encountered.                                                                                                                                                           |
| `\d`           | Current date in "Weekday Month Date" format (e.g., "Tue May 26").                                                                                                                                                         |
| `\h`           | Hostname of the local machine minus the trailling domain name.                                                                                                                                                            |
| `\j`           | Number of jobs running in the current shell session.                                                                                                                                                                      |
| `\l`           | Name of the current terminal device.                                                                                                                                                                                      |
| `\n`           | Newline.                                                                                                                                                                                                                  |
| `\r`           | Carriage return.                                                                                                                                                                                                          |
| `\s`           | Name of the shell program.                                                                                                                                                                                                |
| `\t`           | Current time 24-hour (HH:MM:SS).                                                                                                                                                                                          |
| `\u`           | Current username.                                                                                                                                                                                                         |
| `\v`           | Version number of the shell.                                                                                                                                                                                              |
| `\w`           | Full path of the current working directory                                                                                                                                                                                |
| `\A`           | Current time in 24-hour hours:minutes format.                                                                                                                                                                             |
| `\D{%Y-%m-%d}` | Date (YYYY-MM-DD)                                                                                                                                                                                                         |
| `\H`           | Full hostname.                                                                                                                                                                                                            |
| `\T`           | Current time 12-hour (HH:MM:SS).                                                                                                                                                                                          |
| `\V`           | Version and release numbers of the shell.                                                                                                                                                                                 |
| `\W`           | Last part of the current working diretory name.                                                                                                                                                                           |

## References

- Shotts, W. (2019). <span class="reference-title">The Linux Command Line: Customizing the Prompt (2nd ed.)</span>. No Starch Press
- Orr, G. (2003, November, 06). <span class="reference-title">Bash Prompt Escape Sequences</span>. _The Linux Documentation Project_. [https://tldp.org/HOWTO/Bash-Prompt-HOWTO/bash-prompt-escape-sequences.html](https://tldp.org/HOWTO/Bash-Prompt-HOWTO/bash-prompt-escape-sequences.html)
- _HTB Academy_. (n.d.). <span class="reference-title">Linux Fundamentals: The Shell: Prompt Description</span>. [https://academy.hackthebox.com/module/18/section/66](https://academy.hackthebox.com/module/18/section/66)

## See Also

- [Bash Prompt Colors](bash-prompt-colors.md)
