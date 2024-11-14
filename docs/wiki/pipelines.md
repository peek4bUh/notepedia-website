---
draft: "true"
language: english
status: incomplete
tags: [wiki]
title: Pipelines
---

# Pipelines

The capability of [commands](command.md) to read data from standard input and send to standard output is utilized by a [Shell](shell.md) feature called **pipelines**. Using the `|` (pipe) operator, the standard output of one command can be _piped_ into the standard input of another.

```
command1 | command2
```

As a real example you can use the [less](less.md) command to display, page by page, the output of any command that sends its results to standard output.

```
[tux@linuxbox ~]$ ls -l /usr/bin | less
```

Using this technique, you can conveniently examine the output of any command that produces standard output.

## Filters

**Pipelines** are often used to perform complex operations on data. It is possible to put several commands together into a pipeline. Frequently, the commands used this way are referred to as **filters**. **Filters** take input, change it somehow and then output it.

Here is an example using the [ls](ls.md), [sort](sort.md) and [less](less.md) commands to list of all the executable programs in `/bin` and `/usr/bin`, put them in sorted order and view the resulting list.

```
[tux@linuxbox ~]$ ls -l /bin /usr/bin | sort | less
```

Because you specified two directories (`/bin` and `/usr/bin`), the output of this would have consisted of two sorted lists, one for each directory. By including [sort](sort.md) in the **pipeline**, you changed the data to produce a single, sorted list.2

> [!warning] The difference between `>` and `|`
> At first glance, it may be hard to understand the redirection performed by the **pipeline** operator `|` versus the redirection operation `>`. Simply put, the redirection operator connects a command with a file, while the **pipeline** operator connects the output of one command with the input of a second command.
>
> ```
> command1 > file1
> command1 | command2
> ```
>
> A lot of people will try the following when they are learning about **pipelines**, "just to see what happens":
>
> ```
> command1 > command2
> ```
>
> Answer: sometimes something really bad.
> Here is an actual example submitted by an administrator of a Linux-based server appliance. As the superuser, he did this:
>
> ```
> # cd /usr/bin
> # ls > less
> ```
>
> The first command put him in the directory where most programs are stored, and the second command told the [Shell](shell.md) to overwrite the file less with the output of the [ls](ls.md) command. Since the `/usr/bin` directory already contained a file named less (the [less](less.md) program), the second command overwrote the [less](less.md) program file with the text from [ls](ls.md), thus destroying the [less](less.md) program on his system.
>
> The lesson here is that the redirection operator silently created or overwrites files, so you need to tr[](shell.md)md)md)th a lot of respect.

## References

1. Sh[](ls.md)W. (2019). _The Linux Command Line: Redirection: Pipelines_ (2nd ed.). No Starch P[](less.md)---
   tags:

---

# Pipelines

The capability of [commands](command.md) to read data from standard input and send to standard output is utilized by a [Shell](shell.md) feature called **pipelines**. Using the `|` (pipe) operator, the standard output of one command can be _piped_ into the standard input of another.

```
command1 | command2
```

As a real example you can use the [less](less.md) command to display, page by page, the output of any command that sends its results to standard output.

```
[tux@linuxbox ~]$ ls -l /usr/bin | less
```

Using this technique, you can conveniently examine the output of any command that produces standard output.

## Filters

**Pipelines** are often used to perform complex operations on data. It is possible to put several commands together into a pipeline. Frequently, the commands used this way are referred to as **filters**. **Filters** take input, change it somehow and then output it.

Here is an example using the [ls](ls.md), [sort](sort.md) and [less](less.md) commands to list of all the executable programs in `/bin` and `/usr/bin`, put them in sorted order and view the resulting list.

```
[tux@linuxbox ~]$ ls -l /bin /usr/bin | sort | less
```

Because you specified two directories (`/bin` and `/usr/bin`), the output of this would have consisted of two sorted lists, one for each directory. By including [sort](sort.md) in the **pipeline**, you changed the data to produce a single, sorted list.2

> [!warning] The difference between `>` and `|`
> At first glance, it may be hard to understand the redirection performed by the **pipeline** operator `|` versus the redirection operation `>`. Simply put, the redirection operator connects a command with a file, while the **pipeline** operator connects the output of one command with the input of a second command.
>
> ```
> command1 > file1
> command1 | command2
> ```
>
> A lot of people will try the following when they are learning about **pipelines**, "just to see what happens":
>
> ```
> command1 > command2
> ```
>
> Answer: sometimes something really bad.
> Here is an actual example submitted by an administrator of a Linux-based server appliance. As the superuser, he did this:
>
> ```
> # cd /usr/bin
> # ls > less
> ```
>
> The first command put him in the directory where most programs are stored, and the second command told the [Shell](shell.md) to overwrite the file less with the output of the [ls](ls.md) command. Since the `/usr/bin` directory already contained a file named less (the [less](less.md) program), the second command overwrote the [less](less.md) program file with the text from [ls](ls.md), thus destroying the [less](less.md) program on his system.
>
> The lesson here is that the redirection operator silently created or overwrites files, so you need to tr[](shell.md)md)md)th a lot of respect.

## References

1. Shotts, W. (2019). _The Linux Command Line: Redirection: Pipelines_ (2nd ed.). No Starch Press
