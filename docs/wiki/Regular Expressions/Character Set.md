---
draft: "true"
language: english
status: incomplete
tags: [wiki]
title: Character Set
---

# Character Set

Match any character in the set. The expression can be one of these:

| **Expression** | **Meaning**               |
| :------------: | ------------------------- |
|    `[abc]`     | Matches `a`, `b`, or `c`. |
|    `[ABC]`     | Matches `A`, `B`, or `C`. |

```
[tux@linuxbox ~]$ ls /bin | grep '[bg]zip'
bzip2
bzip2recover
gzip
```

## References

1.
