---
binaryType: text-manipulation
draft: "false"
status: ready
tags: [cheatsheet]
title: tr
---

# tr

```Bash
# Replace all occurrences of a character in a file
# and print the result
tr old_char new_char < path/to/file

# Replace all occurrences of a character
# from another command's output
command | tr old_char new_char
```

## References

- _HTB Academy_. (n.d.). <span class="reference-title">Linux Fundamentals: Workflow: Filter Contents</span>. [https://academy.hackthebox.com/module/18/section/80](https://academy.hackthebox.com/module/18/section/80)
