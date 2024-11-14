---
draft: "true"
language: english
status: incomplete
tags: [wiki]
title: cut
---

# cut

Specific results with different characters may be separated as delimiters. Here it is handy to know how to remove specific delimiters and show the words on a line in a specified position. One of the tools that can be used for this is `cut`. Therefore we use the option "`-d`" and set the delimiter to the colon character (`:`) and define with the option "`-f`" the position in the line we want to output.

```bash
angel99ab@htb[/htb]$ cat /etc/passwd | grep -v "false\|nologin" | cut -d":" -f1

root
sync
mrb3n
cry0l1t3
htb-student
```

## References

- _HTB Academy_. (n.d.). <span class="reference-title">Linux Fundamentals: Workflow: Filter Contents</span>. [https://academy.hackthebox.com/module/18/section/80](https://academy.hackthebox.com/module/18/section/80)
