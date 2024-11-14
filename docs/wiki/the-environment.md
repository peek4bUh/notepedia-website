---
draft: "true"
language: english
status: incomplete
tags: [wiki]
title: The Environment
---

# The Environment

The [Shell](shell.md) maintains a body of information during your shell session called **environment**. Programs use the data stored in the environment to determine facts about the system's configuration.

While most programs use _configuration files_ to store program settings, some programs also look for values stored in the environment to adjust their behavior.

Knowing this, you can use the environment to customize your shell experience.

## What is Stored in the Environment?

The [Shell](shell.md) stores two basic types of data in the environment; though with [Bash](bash.md), the types are largely indistinguishable. They are _environment variables_ and _shell variables_.

_Shell variables_ are bits of data placed there by [Bash](bash.md) and _environment variables_ are everything else. In addition to variables, the [Shell](shell.md) stores some programmatic data, namely, _aliases_ and _shell functions_.

### Examining the Environment

To see what is stored in the **environment**, you can use the `set` builtin in [Bash](bash.md) or the `printenv` program. The `set` command will show both the shell and environment variables, while `printenv` will display only the latter.

List all environment variables:

```
[tux@linuxbox ~]$ printenv
```

List specific environment variable:

```
[tux@linuxbox ~]$ printenv SHELL
```

It is also possible to view the contents of a variable using the [echo: Reference](echo-reference) command:

```
[tux@linuxbox ~]$ echo $SHELL
```

One element of the environment that neither `set` nor `printenv` display is the _aliases_. To see them, enter the [alias](alias.md) command without arguments.

```
[tux@linuxbox ~]$ alias
alias fgrep='fgrep --color=auto'
alias grep='grep --color=auto'
alias ls='ls --color=auto'
alias ll='ls -alF'
```

### Some Interesting Variables

| **Variable** | **Contents**                                                                                                                                                                                                    |
| ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `DISPLAY`    | The name of your display if you are running a _graphical environment_. Usually this is `:0`.                                                                                                                    |
| `EDITOR`     | The name of the program to be used for text editing.                                                                                                                                                            |
| `SHELL`      | The name of your shell program.                                                                                                                                                                                 |
| `HOME`       | The pathname of your home directory.                                                                                                                                                                            |
| `LANG`       | Defines the character set and collation order of your language.                                                                                                                                                 |
| `OLDPWD`     | The previous working directory.                                                                                                                                                                                 |
| `PAGER`      | The name of the program to be used for paging output.                                                                                                                                                           |
| `PATH`       | A colon-separated list of directories that are searched when you enter the name of a executable program.                                                                                                        |
| `PS1`        | Stands for _prompt string 1_. This defines the contents of the shell prompt.                                                                                                                                    |
| `PWD`        | The current working directory.                                                                                                                                                                                  |
| `TERM`       | The name of your terminal type.                                                                                                                                                                                 |
| `TZ`         | Specifies your time zone. Most Unix-like systems maintain the computer's internal clock in _Coordinated Universal Time (UTC)_ and then display the local time by applying an offset specified by this variable. |
| `USER`       | Your username.                                                                                                                                                                                                  |

Don't worry if some of these values are missing. They vary by distribution.

## How is the Environment Established?

When you log on to your system, the [Bash](bash.md) program starts and reads a series of configuration scripts called _startup files_, which define the default environment shared by all users. This is followed by more _startup files_ in your home directory that define your personal environment. The exact sequence depends on the type of [Shell](shell.md) session being started.

There are two kinds:

- _A login shell session_ - This is one in which you are prompted for your username and password. This happens when you start a virtual console session, for example.
- _A non login shell session_ - This typically occurs when you launch a terminal session in the GUI.

Login shells read one or more _startup files_.

| **File**          | **Contents**                                                                                                      |
| ----------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `/etc/profile`    | A global configuration script that applies to all users.                                                          |
| `~/.bash_profile` | A user's personal startup file. It can be used to extend or override settings in the global configuration script. |
| `~/.bash_login`   | If `~/.bash_profile` is not found, [ Bash](asd%20bash%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20) attempts to read this script.                                                                  |
| `~/.profile`      | If neither `~/.bash_profile` nor `~/.bash_login` is found, [ Bash](asd%20bash%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20) attempts to read this file. This is the default in Debian-based distributions, such as Ubuntu. |

Non login shell sessions read the startup files listed there (startup files for non-login shell sessions):

| **File**           | **Contents**                                                                                                      |
| ------------------ | ----------------------------------------------------------------------------------------------------------------- |
| `/etc/bash.bashrc` | A global configuration script that applies to all users.                                                          |
| `~/.bashrc`        | A user's personal startup file. It can be used to extend or override settings in the global configuration script. |

Non-login shells inherit the environment from their parent process, usually a login shell.

### What's in a Startup File?

This is called an if _compound command_.

```bash
if [ -f ~/.bashrc ]; then
	. ~/.bashrc
fi
```

The `PATH` variable is often (but not always, depending on the distribution) set by the `/etc/profile` startup file with this code:

```bash
PATH=$PATH:$HOME/bin
```

`PATH` is modified to add the directory `$HOME/bin` to the end of the list. By adding the string `$HOME/bin` to the end of the `PATH` variable's contents, the directory `$HOME/bin` is added to the list of directories searched when a command is entered. This means that when you want to create a directory within your home directory to storing your own private programs, the [Shell](shell.md) is ready to accommodate you. All you have to do is call `bin` and you are ready to go.

The [export](export) command tells the [Shell](shell.md) to make the contents of `PATH` available to child processes of this [Shell](shell.md).

```bash
export PATH
```

## Modifying the Environment

### Which Files Should You Modify?

As a general rule, to add directories to your `PATH` or define additional environment variables, place those changes in `.bash_profile` (or the equivalent, according to your distribution). For everything else, place the changes in `.bashrc`.

### Text Editors

A text editor is a program that is, in some ways, like a word processor in that it allows you to edit the words on the screen with a moving cursor. It differs from a word processor by only supporting pure text and often contains features designed for writing programs. Text editors are the central tool used by software developers to write code and by system administrators to manage the configuration files that control the system.

Text editors fall into two basic categories:

- graphical (gedit, kedit, kwrite, kate)
- text-based (nano, vi, vim, nvim, emacs)

### Activating Our Changes

When you modify a _startup file_ like `.bashrc`, the new changes will not take effect until you close your terminal sessions and start new one because the `.bashrc` file is read only at the beginning of a session.

You can force [Bash](bash.md) to reread the modified `.bashrc` file with the [source](source) command.

```
[tux@linuxbox ~]$ source ~/.bashrc
```

## References

- Shotts, W. (2019). _The Linux Command Line: The Environment_ (2nd ed.). No Starch Press
