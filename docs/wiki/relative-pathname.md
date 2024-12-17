---
draft: "false"
language: english
parent: "Computing MOC"
status: ready
tags: [wiki]
title: Relative Pathname
---

# Relative Pathname

A **relative pathname** starts from the working directory. To do this, it uses a couple of special notations to represent relative positions in the file system tree.

## The Single Dot Notation

The single dot (`.`) notation refers to the working directory.

Here is an example, you can change the working directory from `/usr` to `/usr/bin` in two different ways, either using an [absolute pathname](absolute-pathname.md):

```bash
[tux@linuxbox usr]$ cd /usr/bin
[tux@linuxbox bin]$ pwd
/usr/bin
```

Or using the **relative pathname**.

```bash
[tux@linuxbox usr]$ cd ./bin
[tux@linuxbox bin]$ pwd
/usr/bin
```

> [!note]
> In almost all cases, you can omit the `./` part because it is implied. Typing the following does the same thing:
>
> ```bash
> [tux@linuxbox usr]$ cd bin
> ```

## The Double Dot Notation

The double dot (`..`) notation refers to the working directory's parent.

Here is an example, let's change the working directory to `/usr/bin`:

```bash
[tux@linuxbox ~]$ cd /usr/bin
[tux@linuxbox bin]$ pwd
/usr/bin
```

Now let's say that you wanted to change the working directory to the parent of `/usr/bin`, which is `/usr` you can use the `..` notation.

```bash
[tux@linuxbox bin]$ cd ..
[tux@linuxbox usr]$ pwd
/usr
```

## References

- Shotts, W. (2019). <span class="reference-title">The Linux Command Line: Navigation: Changing the Current Working Directory: Relative Pathnames (2nd ed.)</span>. No Starch Press

## See Also

- [Absolute Pathname](absolute-pathname.md)
