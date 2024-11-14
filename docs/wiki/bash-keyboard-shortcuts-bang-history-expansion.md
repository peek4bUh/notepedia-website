---
draft: "false"
language: english
parent: "[Bash Keyboard Shortcuts](bash-keyboard-shortcuts.md)"
status: ready
tags: [wiki]
title: "Bash Keyboard Shortcuts: Bang History Expansion"
---

# Bash Keyboard Shortcuts: Bang History Expansion

| Shortcut  | Usage                                                                                                           |
| --------- | --------------------------------------------------------------------------------------------------------------- |
| `!!`      | Execute the last typed command.                                                                                 |
| `!𝑛`      | Refer to command line `𝑛`.                                                                                      |
| `!date`   | Execute a recently executed command starting with the word date.                                                |
| `!date:p` | Prints previously executed command associated with date and make it the latest addition in the command history. |
| `!$`      | Print the previously executed command’s last word. Same as `[ALT] + .` shortcut.                                |
| `!$:p`    | Prints out the substitute word for `!$`.                                                                        |
| `!*`      | Prints out previously executed command with exception to its last word associate.                               |
| `!*:p`    | Prints a possible substitute for `!*`.                                                                          |

## References

- Saive, R. (2023, July 24). <span class="reference-title">Useful Linux Terminal Keyboard Shortcuts Cheat sheet</span>. _UbuntuMint_. [https://www.ubuntumint.com/linux-terminal-keyboard-shortcuts/](https://www.ubuntumint.com/linux-terminal-keyboard-shortcuts/)
- Fliptheweb. (n.d.). <span class="reference-title">Useful shortcuts for bash/zsh</span>. _GitHub_. https://github.com/fliptheweb/bash-shortcuts-cheat-sheet/tree/master
