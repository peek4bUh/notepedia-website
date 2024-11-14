---
draft: "true"
language: english
status: incomplete
tags: [wiki]
title: Range
---

# Range

Matches a character having a character code between the two specified characters inclusive. The expression can be one of these:

| **Expression** | **Meaning**                                |
| :------------: | ------------------------------------------ |
|    `[a-z]`     | Matches `a` or `b` or `c` or `...` or `z`. |
|    `[A-Z]`     | Matches `A` or `B` or `C` or `...` or `Z`. |

```
[tux@linuxbox ~]$ echo 'abcdefghijklmnopqrstuvwxyz' | grep '[g-s]'
abcdefghijklmnopqrstuvwxyz
```
