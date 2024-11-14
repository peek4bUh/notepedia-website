---
draft: "true"
language: english
status: incomplete
tags: [wiki]
title: Redirection
---

# Redirection

The *I/O* stands for *input/output* and with this facility you can redirect the input and output of [commands](command.md) to and from files, as well connect multiple [commands](command.md) together into powerful command *pipelines*.

## Standard Input, Output and Error

Many of the programs that you use produce output of some kind. This output often consists of two types:

- The program's results: that is, the data the program is designed to produce.
- Status and error messages that tell you how the program is getting along.

If you look at a [command](command.md) like [ls](ls.md), you can see that it displays its results and its error messages on the screen.

Keeping with the Unix theme of *everything is a file*, programs such as [ls](ls.md) actually send their results to a special file called **standard output (stdout)**  and their status messages to another file called **standard error (stderror)**. By default. both **standard output** and **standard error** are linked to the screen and not saved into a disk file.

In addition, many programs take input from a facility called **standard input (stdin)**, which is by default, attached to the keyboard.

**I/O redirection** allows us to change where output goes and where input comes from. Normally, output goes to the screen and input from the keyboard, but with **I/O redirection**, you can change that.

## Redirecting Standard Output

I/O redirection allow us to redefine where **standard output** goes. To redirect **standard output** to another file instead of the screen, you can use the `>` redirection operator followed by the name of the file. This is useful to store the output of a [command](command.md) in a file.

For example, you could tell the [Shell](shell.md) to send the output of the [ls](ls.md) [command](command.md) to a file instead of the screen.

```
[tux@linuxbox ~]$ ls -l /usr/bin > ls-output
```

Here, you created a long listing of the `/usr/bin` directory and sent the results to the file `ls-output`. Let's examine the redirected output of the [command](command.md), shown here:

```
[tux@linuxbox ~]$ ls -l /usr/bin > ls-output
-rw-rw-r-- 1 tux tux 167878 2018-02-01 15:07 ls-output
```

If you look at the file with [less](less.md), you will see that the file `ls-output` does indeed contain the results from the [ls](ls.md) [command](command.md).

Now, if you repeat the above example but with a directory that doesn't exist, you will receive an error message.

```
[tux@linuxbox ~]$ ls -l /bin/abc > ls-output
ls: cannot access '/bin/abc': No such file or directory
```

This makes sense since you specified the nonexistent directory `/bin/abc` and the [ls](ls.md) program does not send its error messages to **standard out**. Instead, like most well-written Unix programs, it sends its error messages to **standard error**. Because you redirected only **standard output** and not **standard error**, the error message was still sent to the screen.

Now if you look again the file `ls-output`, the file now has zero length. This is because when you redirect output with the `>` redirection operator, the destination file is always rewritten from the beginning. Because the [ls](ls.md) command generated no results and only an error message, the redirection operation started to rewrite the file and then stopped because of the error, resulting in its truncation.

> [!tip]
> If you need to truncate a file or create a new empty file, you can use this trick:
> ```
> [tux@linuxbox ~]$ > filename
> ```

To append redirected output to a file you can use the `>>` redirection operator:

```
[tux@linuxbox ~]$ ls -l /usr/bin >> ls-output
```

Using the `>>` operator will result in the output being appended to the file. If the file doesn't exist, it is created just as though the `>` operator been used.

## Redirecting Standard Error

Redirecting **standard error** lacks the ease of a dedicated redirection operator. To redirect **standard error**, you must refer to its *file descriptor*. A program can produce output of any several numbered file streams. While the first three of these file streams are standard input, output and error, the [Shell](shell.md) references them internally as *file descriptors* *0*, *1* and *2*. The [Shell](shell.md) provides a notation for redirecting files using the file descriptor number. Because **standard error** is the same as file descriptor number *2*.

You can redirect **standard error** with this notation:

```
[tux@linuxbox ~]$ ls -l /bin/abc 2> ls-error
```

## Redirecting Standard Output and Standard Error to One File

There are cases in which you want to capture all of the output of a command to a single file. To do this, you need to redirect the **standard output** and **standard error** at the same time. There are two ways to do this.

This is the traditional way, which works with old versions of the [Shell](shell.md):

```
[tux@linuxbox ~]$ ls -l /bin/abc > ls-output 2>&1
```

Using this method, you perform two redirections. First you redirect **standard output** to the file `ls-output`, and then you redirect the file descriptor 2 (**standard error**) to the file descriptor 1 (**standard output**) using the notation `2>&1`. 

> [!note]
> The redirection of **standard error** must always occur after redirecting **standard output** or it doesn't work. The following example redirects **standard error** to the file `ls-output`:
> ```
> [tux@linuxbox ~]$ > ls-output 2>&1
> ``` 
> 
> If the order is changed to the following, the **standard error** is directed to the screen:
> ```
> [tux@linuxbox ~]$ 2>&1 > ls-output
> ```

Recent versions of [Bash](bash.md) provide a second, more streamlined method for performing this combined direction, show here:

```
[tux@linuxbox ~]$ ls -l /bin/abc &> ls-output
```

In this example, you use the single notation `&>` to redirect both **standard output** and **standard error** to the file `ls-output`. You may also append the **standard output** and **standard error** streams to a single file like so:

```
[tux@linuxbox ~]$ ls -l /bin/abc &>> ls-output
```

## Disposing of Unwanted Output

Sometimes you don't want to save the output of a command. The system provides a way to do this by redirecting output to a special file called `/dev/null`. This file is a system device often referred to as a *bit bucket*, which accepts input and does nothing with it. 

To suppress error messages from a command, you do this:

```
[tux@linuxbox ~]$ ls -l /bin/abc 2> /dev/null
```

## Redirecting Standard Input

An example of **redirecting standard input** can be with the [Cat](cat.md) command.

```
[tux@linuxbox ~]$ cat < file
```

Using the `<` redirection operator, you change the source of standard input from the keyboard to the file. You can see the result is the same as passing a single filename argument. This is not particularly useful compared to passing a filename argument, but it servers to demonstrate using a file as a source of standard input. Other commands make better use of **standard input**.

## References

1. Shotts, W. (2019). *The Linux Command Line: Redirection* (2nd ed.). No Starch Press