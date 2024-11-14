---
draft: "true"
language: english
status: incomplete
tags: [wiki]
title: Negated Set
---

# Negated Set

Match any character that is not in the set. The expression can be one of these:

| **Expression** | **Meaning**                                 |
| :------------: | ------------------------------------------- |
|    `[^abc]`    | Matches everything except `a`, `b`, or `c`. |
|    `[^ABC]`    | Matches everything except `A`, `B`, or `C`. |

```
[tux@linuxbox ~]$ ls /bin | grep '[^bg]zip'
bunzip2
gunzip
funzip
gpg-zip
prezip
unzip
```

## References

1.
