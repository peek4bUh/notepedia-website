---
draft: "true"
language: english
status: incomplete
tags: [wiki]
title: rm
---

# rm

Unix-like operating systems such as Linux do not have an undelete command. Once you delete something with `rm`, it's gone.
Be particularly careful with wildcards. Consider this classic example. Let's say you want to delete just HTML files in a directory. To do this, you type the following:

```bash
rm *.html
```

This is correct, but if you accidentally place a space between the `*` s and the `.html` like so:

```bash
rm * .html
```

The `rm` command will delete all the files in the directory and then complain there is no file called `.html`.

> [!tip]
> Whenever you use [wildcards](shell-wildcards.md) with `rm`, test the wildcard first with another safe command like [ls](ls.md). This will let you see the files that will be deleted. Then press the `UP arrow` to recall the command and replace [ls](ls.md) with `rm`.

## References

- Shotts, W. (2019). <span class="reference-title">The Linux Command Line: Manipulating Files and Directories: rm-Remove Files and Directories: Useful Options and Examples (2nd ed.)</span>. No Starch Press

## See Also

- [rm: Cheatsheet](rm-cheatsheet.md)
