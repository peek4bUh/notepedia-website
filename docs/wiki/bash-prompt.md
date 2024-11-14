---
draft: "false"
language: english
parent: "[Bash](bash.md)"
status: ready
tags: [wiki]
title: Bash Prompt
---

# Bash Prompt

[Bash](bash.md) has five [prompt strings](command-prompt.md) that can be customized:

| Variable | Function                                                                                                                                                                                                                                                                    |
| :------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|  `PS0`   | Displayed after each command, before any output.                                                                                                                                                                                                                            |
|  `PS1`   | This is the _primary prompt_ which is displayed before each command, thus it is the one most people customize.                                                                                                                                                              |
|  `PS2`   | The _secondary prompt_ displayed when a command needs more input (e.g. a multi-line command).                                                                                                                                                                               |
|  `PS3`   | It is the prompt displayed for Bash's `select` built-in which displays interactive menus. It doesn't expand [bash escape sequences](Bash%20Prompt%20Escape%20Sequences%5C). Usually you would customize it in the script where the `select` is used rather than in your `.bashrc`. |
|  `PS4`   | It is displayed when debugging bash scripts to indicate levels of indirection. The first character is repeated to indicate deeper levels.                                                                                                                                   |

All of the prompts are customized by setting the corresponding variable to the desired string usually in `.bashrc` file.

## Moving the Cursor

Escape codes can be used to position the cursor. This is commonly used to provide a clock or some other kind of information at a different location on the screen, such as in an upper corner each time the prompt is drawn.

| Escape code | Action                                                         |
| ----------- | -------------------------------------------------------------- |
| `\033[𝑙;𝑐H` | Move the cursor to line `𝑙` and column `𝑐`.                    |
| `\033[𝑛A`   | Move the cursor up `𝑛` lines.                                  |
| `\033[𝑛B`   | Move the cursor down `𝑛` lines.                                |
| `\033[𝑛C`   | Move the cursor forward `𝑛` characters.                        |
| `\033[𝑛D`   | Move the cursor backward `𝑛` characters.                       |
| `\033[2J`   | Clear the screen and move the cursor to the upper-left corner. |
| `\033[K`    | Clear from the cursor position to the end of the current line. |
| `\033[s`    | Store the current cursor position.                             |
| `\033[u`    | Recall the stored cursor position.                             |

Using the codes of this table, you can construct a prompt that draws a red bar at the top of the screen containing a clock (rendered in yellow text) each time the prompt is displayed.

```
[tux@linuxbox ~]$ PS1="\[\033[s\033[0;0H\033[0;41m\033[K\033[1;33m\t\033[0m\033[u\][\u@\h \W]\$ "
```

Explanation of what each part of the string does.

| Sequence       | Action                                                                                                                                                                                                                                                                                                    |
| -------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `\[`           | Begin a non-printing character sequence. The purpose of this is to allow [ Bash](asd%20bash%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20) to properly calculate the size of the visible prompt. Without an accurate calculation, command line editing features cannot position the cursor correctly. |
| `\033[s`       | Store the cursor position. This is needed to return to the prompt location after the bar and lock have been drawn at the top of the screen. Be aware that some terminal emulators do not recognize this code.                                                                                             |
| `\033[0;0H`    | Move the cursor to the upper-left corner, which is line 0, column 0.                                                                                                                                                                                                                                      |
| `\033[K`       | Clear from the current cursor location (the top-left corner) to the end of the line. Because the background color is now red, the line is cleared to that color, creating the bar. Note that clearing to the end of the line does not change the cursor position, which remains in the upper-left corner. |
| `\033[1;33m`   | Set the text color to yellow.                                                                                                                                                                                                                                                                             |
| `\t`           | Display the current time. While this is a "printing" element, you still include it in the non-printing portion of the prompt since you don't want [ Bash](asd%20bash%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20) to include the clock when calculating the true size of the displayed prompt.                                                                               |
| `\033[0m`      | Turn off color. This affects both the text and the background.                                                                                                                                                                                                                                            |
| `\033[u`       | Restore the cursor position saved earlier.                                                                                                                                                                                                                                                                |
| `\]`           | End the non-printing characters sequence.                                                                                                                                                                                                                                                                 |
| `[\u@\h \W]\$` | Prompt string.                                                                                                                                                                                                                                                                                            |

## Saving the Prompt

To make the prompt permanent, add it to your `.bashrc` file.

```
PS1="\[\033[s\033[0;0H\033[0;41m\033[K\033[1;33m\t\033[0m\033[u\][\u@\h \W]\$ "

export PS1
```

Customizing the prompt can be a useful way to make your terminal experience more personalized and efficient. It can also be a helpful tool for troubleshooting and problem-solving, as it can provide important information about the system’s state at any given time.

In addition to customizing the prompt, you can customize the terminal environment with different color schemes, fonts, and other settings to make the work environment more visually appealing and easier to use.

## References

- Shotts, W. (2019). <span class="reference-title">The Linux Command Line: Customizing the Prompt (2nd ed.)</span>. No Starch Press
- _HTB Academy_. (n.d.). <span class="reference-title">Linux Fundamentals: The Shell: Prompt Description</span>. [https://academy.hackthebox.com/module/18/section/66](https://academy.hackthebox.com/module/18/section/66)

## External Links

- [https://bash-prompt-generator.org/](https://bash-prompt-generator.org/)
- [https://github.com/powerline/powerline](https://github.com/powerline/powerline)

## See Also

- [Bash Prompt Colors](bash-prompt-colors.md)
- [Bash Prompt Escape Sequences](bash-prompt-escape-sequences.md)
- [Command Prompt](command-prompt.md)
