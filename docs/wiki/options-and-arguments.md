---
draft: "true"
language: english
status: incomplete
tags: [wiki]
title: Options and Arguments
---

# Options and Arguments

Commands are often followed by one or more **options** that modify their behavior and, further, by one or more **arguments**, the items upon which the command acts. So most commands look kind of like this:

```
command -options arguments
```

Most commands use **options** which consist of a single character preceded by `-` (dash), for example, `-l`. Many commands, however, including those from the GNU Project, also support _long options_ consisting of a word preceded by `--` (two dashes). Also, many commands allow multiple short options to be strung together.

Example using the [ls](ls.md) command with two options, which are the `l` option to produce long format output and the `t` option to sort the result by the file's modification date.

```
[tux@linuxbox ~]$ ls -lt
```

I'll add the long option `--reverse` to reverse the order of the sort.

```
[tux@linuxbox ~]$ ls -lt --reverse
```

## References

1. Shotts, W. (2019). _The Linux Command Line: Exploring the System: Options and Arguments_ (2nd ed.). No Starch Press
