---
draft: "true"
language: english
status: incomplete
tags: [wiki]
title: ls
---

# ls

## `-l` (Long Format) Option Explanation

```
[tux@linuxbox ~/Documents]$ ls -l
-rw-r--r-- 1 root root 3576296 2017-04-03 11:05 song.ogg
-rw-r--r-- 1 root root 1186219 2017-04-03 11:05 logo-tux.png
-rw-r--r-- 1 root root   47584 2017-04-03 11:05 logo-gnu.ogg
-rw-r--r-- 1 root root   32059 2017-04-03 11:05 oo-cd-cover.odf
-rw-r--r-- 1 root root  159744 2017-04-03 11:05 oo-derivaties.doc
-rw-r--r-- 1 root root   27837 2017-04-03 11:05 oo-maxwell.odt
-rw-r--r-- 1 root root   98816 2017-04-03 11:05 oo-trig.xls
-rw-r--r-- 1 root root  453764 2017-04-03 11:05 oo-welcome.odt
```

| **Field**          | **Meaning**                                                                                                                                                                                                                                                                                                                               |
| ------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `-rw-r--r--`       | Access rights to the file. The first character indicates the type of the file. A `-` (leading slash) means a regular file, while a `d` indicates a directory. The next three characters are the access rights for the file's owner, the next three are for members of the file's group and the final three are for members everyone else. |
| `1`                | Number of hard links to the file/directory.                                                                                                                                                                                                                                                                                               |
| `root`             | Owner of the file/directory.                                                                                                                                                                                                                                                                                                              |
| `root`             | Group owner of the file/directory.                                                                                                                                                                                                                                                                                                        |
| `32059`            | Size of the file in bytes or the number of blocks used to store the directory information                                                                                                                                                                                                                                                 |
| `2017-04-03 11:05` | Date and time of the file's last modification. (This can be different in some Linux distributions)                                                                                                                                                                                                                                        |
| `oo-cd-cover.odf`  | Name of the file/directory (in this case is a file).                                                                                                                                                                                                                                                                                      |

## Common Usages

```bash
# List the current working directory
ls
ls .

# List a specific directory
ls path/to/dir

# List a specific directory (long output)
ls -l path/to/dir

# List multiple directories
ls path/to/dir1 path/to/dir2
```

## References

- Shotts, W. (2019). <span class="reference-title">The Linux Command Line: Exploring the System: Options and Arguments (2nd ed.)</span>. No Starch Press
- _HTB Academy_. (n.d.). <span class="reference-title">Linux Fundamentals: Workflow: Navigation</span>. [https://academy.hackthebox.com/module/18/section/75](https://academy.hackthebox.com/module/18/section/75)

## See Also

- [ls: Cheatsheet](ls-cheatsheet.md)
- [cd: Cheatsheet](cd-cheatsheet.md)
