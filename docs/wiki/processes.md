---
draft: "true"
language: english
status: incomplete
tags: [wiki]
title: Processes
---

# Processes

Modern operative systems are usually _multitasking_, meaning they create the illusion of doing more than one thing at once by rapidly switching from one executing program to another. The kernel manages this through the use of **processes**.

**Processes** are how Linux organizes the different programs waiting for their turn at the CPU. Sometimes a computer will become sluggish or an application will stop responding.

## How a Process Works

When a system starts up, the kernel initiates a few of its own activities as processes and launches a program called `init`. `init`, in turn, runs a series of shell scripts located in `/etc` called _init scripts_, which start all the system services. Many of these services are implemented as [daemon](daemon.md) programs.

The fact that a program can launch other programs is expressed in the process scheme as a _parent process_ producing _child processes_.

The kernel maintains information about each process to help keep things organized. For example, each process is assigned a number called a _process ID (PID)_. PIDs are assigned in ascending order, with `init` always getting PID 1. The kernel also keeps track of the memory assigned to each process, as well as the processes, readiness to resume execution. Like files, processes also have owners and user IDs, effective user IDs and so on.

## Viewing Processes

The most commonly used command to view processes is the `ps`.

The simplest form it is used like this:

```
[tux@linuxbox ~]$ ps
    PID TTY          TIME CMD
    342 pts/0    00:00:00 bash
    620 pts/0    00:00:00 ps
```

Lists two processes, process `342` and process `620`, which are [Bash](bash.md) and [ps(1)](ps(1)).

Fields explanation:

- PID -> Process ID
- TTY -> Short for _teletype_ and refers to the _controlling terminal_ for the process.
- TIME -> Is the amount of CPU time consumed by the process.
- CMD -> Short for _command_.

To see more detailed information, you need to add some options.

```
[tux@linuxbox ~]$ ps x
    PID TTY      STAT   TIME COMMAND
    342 pts/0    Ss     0:00 -bash
    403 ?        Ss     0:00 /lib/systemd/systemd --user
    405 ?        S      0:00 (sd-pam)
    411 pts/1    S+     0:00 -bash
    670 pts/0    R+     0:00 ps x
```

Adding the `x` option (note that there is no leading dash) tells [ps(1)](ps(1)) to show all the processes regardless of what terminal (if any) they are controlled by. The `?` in the TTY column indicates no controlling terminal.

A new column titled STAT has been added to the output. STAT is short for _state_ and reveals the current status of the process.

The process state may be followed by other characters. These indicate various exotic process characteristics.

| **State** | **Meaning**                                                                                                                                                                                                                                                                                           |
| --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `R`       | Running. This means the process is running or ready to run.                                                                                                                                                                                                                                           |
| `S`       | Sleeping. The process is not running, it is waiting for an event.                                                                                                                                                                                                                                     |
| `D`       | Uninterruptible sleep. The process is waiting for I/O such as a disk drive.                                                                                                                                                                                                                           |
| `T`       | Stopped. The process has been instructed to stop.                                                                                                                                                                                                                                                     |
| `Z`       | A defunct or zombie process. This is a child process that has terminated but has not been cleaned up by its parent.                                                                                                                                                                                   |
| `<`       | A high-priority process. It's possible to grant more importance to a process, giving it more time on the CPU. This property of a process is called _niceness_. A process with high priority is said to be less nice because it's taking more of the CPU's time, which leaves less for everybody else. |
| `N`       | A low-priority process. A process with low priority will get processor time only after other processes with higher priority have been serviced.                                                                                                                                                       |

Using `ps aux` displays the processes belonging to every user. Using the options without the leading dash invokes the command with _BSD-style_ behavior.

BSD Style ps Column Headers:

| **Header** | **Meaning**                                                                                       |
| ---------- | ------------------------------------------------------------------------------------------------- |
| `USER`     | User ID. This is the owner of the process.                                                        |
| `%CPU`     | CPU usage in percent.                                                                             |
| `%MEM`     | Memory usage in percent.                                                                          |
| `VSZ`      | Virtual memory size.                                                                              |
| `RSS`      | Resident set size. This is the amount of physical memory (RAM) the process is using in kilobytes. |
| `START`    | Time when the process started. For values over 24 hours, a date is used.                          |

## Viewing Processes Dynamically with top

To see a more dynamic view of the machine's activity, you can use the [top](top) command.

The name top comes from the fact that the top program is used to see the _top_ processes on the system. The top display consists of two parts: a system summary at the top of the display, followed by a table of processes sorted by CPU activity.

The [top](top) program accepts a number of keyboard commands. The two most interesting are `h`, which displays the program's help screen and `q`, which quits [top](top).

## Interrupting a Process

When you run a program in the terminal, next pressing `CTRL-C` _interrupts_ the program. This means you are asking the program to terminate. After you pressed `CTRL-C`, the program you ran closed and the shell prompt returned.

Many (but not all) command line programs can be interrupted by using this technique.

## Putting a Process in the Background

Think of the terminal as having a _foreground_ (with stuff visible on the surface like the shell prompt) and _background_ (with stuff hidden behind the surface).

To launch a program so that is immediately placed in the background, you follow the command with an ampersand (`&`) character.

```
[tux@linuxbox ~]$ xlogo &
[1] 875
[tux@linuxbox ~]$
```

When running the program in the background the shell prompt returns a message called _job control_. With this message, the shell is telling you that you have started job number 1 (`[1]`) and that is has the PID `875`.

If you run [ps(1)](ps(1)), you can see the process.

```
[tux@linuxbox ~]$ ps
    PID TTY          TIME CMD
    339 pts/0    00:00:00 bash
    875 pts/0    00:00:00 xlogo
    888 pts/0    00:00:00 ps
```

The shell's job control facility also give you a way to list the jobs that have been launched from the terminal. Using the [jobs](jobs) command, you can see this list:

```
[tux@linuxbox ~]$ jobs
[1]+   Running                xlogo &
```

The results show that you have one job, numbered `1` that is running and that the command was `xlogo &`.

## Returning a Process to the Foreground

A process in the background is immune from a terminal keyboard input, including any attempt to interrupt it with `CTRL-C`. To return a process to the foreground, use the [fg](fg) command:

```
[tux@linuxbox ~]$ jobs
[1]+   Running                xlogo &
[tux@linuxbox ~]$ fg %1
xlogo
```

The [fg](fg) command followed by a percent sign and the job number called _jobspec_ does the trick. If you have only one background job, the _jobspec_ is optional.

## Stopping (Pausing) a Process

To stop a foreground process and place it in the background, press `CTRL-Z`.

```
[tux@linuxbox ~]$ xlogo
[1]+  Stopped                 xlogo
[tux@linuxbox ~]$
```

You can either continue the program's execution in the foreground, using the [fg](fg) command or resume the program's execution in the background with the [bg](bg) command.

```
[tux@linuxbox ~]$ bg %1
[1]+ xlogo &
[tux@linuxbox ~]$
```

As with the [fg](fg) command, the _jobspec_ is optional if there is only one job.

Moving a process from the foreground to the background in handy if you launch a graphical program from the command line but forget to place it in the background by appending the trailing `&`.

There are two reasons to launch a graphical program from the command line:

1. The program you want to run might not be listed on the window manager's menus.
2. By launching a program from the command line, you might be able to see error messages that would otherwise be invisible if the program were launched graphically.

## Signals

The [kill](kill) command is used to _kill_ processes. This allows you to terminate programs that need killing (that is, some kind of pausing or termination).

```
[tux@linuxbox ~]$ xlogo &
[1] 1187
[tux@linuxbox ~]$ kill 1187
[1]+  Terminated              xlogo
```

You first launch `xlogo` in the background. The shell prints the _jobspec_ and the PID of the process you want to terminate. You could have also specified the process using a _jobspec_ (for example, `%1`) instead of a PID.

The [kill](kill) command doesn't kill exactly _kill_ processes, it sends them **signals**. **Signals** are one of several ways that the operating system communicates with programs. `CTRL-C` and `CTRL-Z` are **signals**. When the terminal receives one of these keystrokes, it sends a **signal** to the program in the foreground.

In the case of `CTRL-C`, a signal called `INT` (interrupt) is sent; with `CTRL-Z`, a signal called `TSTP` (terminal stop) is sent. Programs, in turn, _listen_ for signals and may act upon them as they are received. The fact that a program can listen and act upon signals allows a program to do things such as save work in progress when it is sent a termination signal.

### Sending Signals to Processes with `kill`

The [kill](kill) command is used to send **signals** to programs. Its most common syntax looks like this:

```
kill -signal PID...
```

If no **signal** is specified on the command line, then `TERM` (terminate) **signal** is sent by default. Here are the most often used **signals**.

| **Number** | **Name** | **Meaning**                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| :--------: | :------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|    `1`     |  `HUP`   | Hang up. The signal is used to indicate to programs that the controlling terminal has _hung up_. The effect if this signal can be demonstrated by closing a terminal session. The foreground program running on the terminal will be sent the signal and will terminate.This signal is also used by many [daemon](daemon%5C) programs to cause a reinitialization. This means that when a [daemon](daemon%5C) is sent this signal, it will restart and reread its configuration file. |
|    `2`     |  `INT`   | Interrupt. This performs the same function as `CTRL-C` sent from the terminal. It will usually terminate a program.                                                                                                                                                                                                                                                                                                                                                                 |
|    `3`     |  `QUIT`  | Quit.                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|    `9`     |  `KILL`  | Kill. This signal is special. The kill signal is never actually sent to the target program. Rather, the kernel immediately terminates the process. When a process is terminated in this manner, it is given no opportunity to _clean up_ after itself or save its work. For this reason, the Kill signal should be used only as a last resort when other termination signals fail.                                                                                                  |
|    `11`    |  `SEGV`  | Segmentation violation. This signal is sent if a program makes ilegal use of memory, if it tried to write somewhere it was not allowed to write.                                                                                                                                                                                                                                                                                                                                    |
|    `15`    |  `TERM`  | Terminate. This is the default signal sent by the [kill](kill) command. If a program is still _alive_ enough to receive signals, it will terminate.                                                                                                                                                                                                                                                                                                                                     |
|    `18`    |  `CONT`  | Continue. This will restore a process after a `STOP` or `TSTP` signal. This signal is sent by the [bg](bg) and [fg](fg) commands.                                                                                                                                                                                                                                                                                                                                                       |
|    `19`    |  `STOP`  | Stop. This signal causes a process to pause without terminating. Like the `KILL` signal, it is not sent to the target process and thus it cannot be ignored.                                                                                                                                                                                                                                                                                                                        |
|    `20`    |  `TSTP`  | Terminal stop. This signal is sent by the terminal when `CTRL-Z` is pressed. Unlike the `STOP` signal, the `TSTP` signal is received by the program, but the program may choose to ignore it.                                                                                                                                                                                                                                                                                       |
|    `28`    | `WINCH`  | Window change. This is the signal sent by the system when a window changes size.                                                                                                                                                                                                                                                                                                                                                                                                    |

Here is an example with the `HUG` signal. You start the `xlogo` program in the background and then send it a `HUP` signal with [kill](kill). The `xlogo` program terminates and the shell indicates that the background process has received a hang-up signal. You may need to press `ENTER` a couple of times before the message appears.

```
[tux@linuxbox ~]$ xlogo &
[1]+ 13456
[tux@linuxbox ~]$ kill -1 13456
[1]+  Hangup                  xlogo
```

Note that signals may be specified either by number of by name, including the name prefixed with the letters `SIG`.

```
[tux@linuxbox ~]$ xlogo &
[1]+ 13601
[tux@linuxbox ~]$ kill -INT 13601
[1]+  Interrupt                xlogo
[tux@linuxbox ~]$ xlogo &
[1]+ 13608
[tux@linuxbox ~]$ kill -SIGINT 13608
[1]+  Interrupt                xlogo
```

Remember you can also use _jobspecs_ in place of `PIDs`.

Processes, like files, have owners and you must be the owner of a process (or the superuser) to send it signals with [kill](kill).

### Sending Signals to Multiple Processes with `killall`

It's also posible to send signals to multiple processes matching a specified program or username by using the [killall](killall) command.

```
killall [-u user] [-signal] name...
```

To demonstrate, you will start a couple of instances of the `xlogo` program and then terminate them.

```
[tux@linuxbox ~]$ xlogo &
[1]+ 18801
[tux@linuxbox ~]$ xlogo &
[1]+ 18802
[tux@linuxbox ~]$ killall xlogo
[1]-  Terminated               xlogo
[2]+  Terminated               xlogo
```

Remember, as with [kill](kill) you must have superuser privileges to send signals to processes that do not belong to you.

## Shutting Down the System

The process of shutting down the system involves the orderly termination of all the processes on the system, as well as performing some vital housekeeping chores (such as syncing all of the mounted file systems) before the system powers off.

There are four commands that can perform this action:

- [halt](halt)
- [poweroff](poweroff)
- [reboot](reboot)
- [shutdown](shutdown)

The first three are generally used without any command line options.

```
[tux@linuxbox ~]$ sudo reboot
```

The [shutdown](shutdown) command is a bit more interesting. With it, you can specify which of the actions to perform (halt, power down or reboot) and provide a time delay to the shutdown event. Most often is used like this to halt the system:

```
[tux@linuxbox ~]$ sudo shutdown -h now
```

or like this to reboot the system:

```
[tux@linuxbox ~]$ sudo shutdown -r now
```

The delay can be specified in a variety of ways. Once the [shutdown](shutdown) command is executed, a message is _broadcast_ to all logged-in users warning them of the impending event.

## More Process-Related Commands

| **Command** | **Description**                                                                                                  |
| :---------: | ---------------------------------------------------------------------------------------------------------------- |
|  `pstree`   | Outputs a process list arranged in a tree-like pattern showing the parent-child relationships between processes. |
|  `vmstat`   | Outputs a snapshot of system resource usage including memory, swap and disk I/O.                                 |
|   `xload`   | A graphical program that draws a graph showing system load over time.                                            |
|   `tload`   | Similar to the `xload` program but draws the graph in the terminal.                                              |

## References

1. Shotts, W. (2019). _The Linux Command Line: Processes_ (2nd ed.). No Starch Press
