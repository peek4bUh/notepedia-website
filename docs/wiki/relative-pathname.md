---
draft: "false"
language: english
parent: "[Computing MOC](computing-moc.md)"
status: ready
tags: [wiki]
title: Relative Pathname
---

# Relative Pathname

A **relative pathname** starts from the working directory. To do this, it uses a couple of special notations to represent relative positions in the file system tree.

## The Single Dot Notation

The single dot (`.`) notation refers to the working directory.

Here is an example, you can change the working directory from `/usr` to `/usr/bin` in two different ways, either using an [absolute pathname](absolute-pathname.md):

```
[me@linuxbox usr]$ cd /usr/bin
[me@linuxbox bin]$ pwd
/usr/bin
```

Or using the **relative pathname**.

```
[me@linuxbox usr]$ cd ./bin
[me@linuxbox bin]$ pwd
/usr/bin
```

> [!note]
> In almost all cases, you can omit the `./` part because it is implied. Typing the following does the same thing:
>
> ```
> [me@linuxbox usr]$ cd bin
> ```

## The Double Dot Notation

The double dot (`..`) notation refers to the working directory's parent.

Here is an example, let's change the working directory to `/usr/bin`:

```
[me@linuxbox ~]$ cd /usr/bin
[me@linuxbox bin]$ pwd
/usr/bin
```

Now let's say that you wanted to change the working directory to the parent of `/usr/bin`, which is `/usr` you can use the `..` notation.

```
[me@linuxbox bin]$ cd ..
[me@linuxbox usr]$ pwd
/usr
```

## References

- Shotts, W. (2019). <span class="reference-title">The Linux Command Line: Navigation: Changing the Current Working Directory: Relative Pathnames (2nd ed.)</span>. No Starch Press

## See Also

- [Absolute Pathname](absolute-pathname.md)
