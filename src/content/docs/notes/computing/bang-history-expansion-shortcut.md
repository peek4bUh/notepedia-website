---
parent: "[[bash-keyboard-shortcuts|Bash Keyboard Shortcuts]]"
title: Bang History Expansion
---

# Bang History Expansion

| Shortcut  | Usage                                                                                                           |
| --------- | --------------------------------------------------------------------------------------------------------------- |
| `!!`      | Execute the last typed [[20240913122228\|command]].                                                             |
| `!n`      | Refer to command line `n` (e.g, `!351`).                                                                        |
| `!date`   | Execute a recently executed command starting with the word date.                                                |
| `!date:p` | Prints previously executed command associated with date and make it the latest addition in the command history. |
| `!$`      | Print the previously executed command’s last word. Same as `[ALT] + .` shortcut.                                |
| `!$:p`    | Prints out the substitute word for `!$`.                                                                        |
| `!*`      | Prints out previously executed command with exception to its last word associate.                               |
| `!*:p`    | Prints a possible substitute for `!*`.                                                                          |

## References

- Saive, R. (2023, July 24). <span class="reference-title">Useful Linux Terminal Keyboard Shortcuts Cheat sheet</span>. UbuntuMint. [https://www.ubuntumint.com/linux-terminal-keyboard-shortcuts/](https://www.ubuntumint.com/linux-terminal-keyboard-shortcuts/)
- Fliptheweb. (n.d.). <span class="reference-title">Useful shortcuts for bash/zsh</span>. GitHub. https://github.com/fliptheweb/bash-shortcuts-cheat-sheet/tree/master
