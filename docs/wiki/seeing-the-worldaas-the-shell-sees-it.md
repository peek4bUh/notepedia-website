---
draft: "true"
language: english
status: incomplete
tags: [permanent]
title: Seeing the World as the Shell Sees it
---

# Seeing the World as the Shell Sees it

## Expansion

Each time you type a command and press the `ENTER` key, [Bash](bash.md) performs several substitutions upon the text before it carries out your command. The process that makes this happen is called **expansion**. With **expansion**, you enter something and it is expanded into something else before the [Shell](shell.md) acts upon it.

To demonstrate what this means, let's take a look at the [echo: Reference](echo-reference) command. It prints its text arguments on standard output.

```
[tux@linuxbox ~]$ echo this is a test
this is a test
```

That's pretty straightforward. Any argument passed to [echo: Reference](echo-reference) gets displayed. Let's try another example.

```
[tux@linuxbox ~]$ echo *
Desktop Documents example.txt Music Pictures Public Templates Videos
```

The `*` character means match any characters in a filename. The simple answer is that the [Shell](shell.md) expands the `*` into something else (in this instance, the names of the files in the current working directory) before the [echo: Reference](echo-reference) command is executed. When the `ENTER` key is pressed, the [Shell](shell.md) automatically expands any qualifying characters on the command line before the command is carried out, so the [echo: Reference](echo-reference) command never saw the `*`, only its expanded result.

## Pathname Expansion

The mechanism by which [wildcards](shell-wildcards.md) work is called **pathname expansion**. If you try with the [ls](ls.md) and [echo: Reference](echo-reference) commands, you can see that you are using expansions.

Given a home directory that looks like this:

```
[tux@linuxbox ~]$ ls
Desktop    example.txt  Pictures  Templates
Documents  Music        Public    Videos
```

You could carry out the following expansions:

```
[tux@linuxbox ~]$ echo D*
Desktop Documents
```

and this:

```
[tux@linuxbox ~]$ echo *s
Documents Pictures Templates Videos
```

or even this:

```
[tux@linuxbox ~]$ echo [:upper:](:upper:)*
Desktop Documents Music Pictures Public Templates Videos
```

and looking beyond the home directory, you could do this:

```
[tux@linuxbox ~]$ echo /usr/*/share
/usr/kerberos/share /usr/local/share
```

> [!note] Pathname Expansion of Hidden Files
> As you know, filenames that begin with a `.` period character are hidden. Pathname expansion also respects this behavior. An expansion such as the following does not reveal hidden files:
>
> ```
> echo *
> ```
>
> It might appear at first glance that you could include hidden files in a expansion by starting the pattern with a leading period, like this:
>
> ```
> echo .*
> ```
>
> It almost works. However, if you examine the results closely, you will see that the names `.` and `..` will also appear in the results. Because these names refer to the current working directory and its parent directory, using this pattern will produce an incorrect result. You can see this if you try the following command:
>
> ```
> ls -d .* | less
> ```
>
> To better perform pathname expansion in this situation, you have to employ a more specific pattern.
>
> ```
> echo .[!.]*
> ```
>
> This pattern expands into every filename that begins with only one period followed by any other characters. This will work correctly with most hidden files (though it still won't include filenames with multiple leading periods). The [ls](ls.md) command with the `-A` option will provide a correct listing of hidden files.
>
> ```
> ls -A
> ```

## Tilde Expansion

The tilde (`~`) character has a special meaning. When used at the beginning of a word, it expands into the name of the home directory of the named user or if no user is named, the home directory of the current user.

```
[tux@linuxbox ~]$ echo ~
/home/tux
```

If user `foo` has an account, then it expands into this:

```
[tux@linuxbox ~]$ echo ~foo
/home/foo
```

## Arithmetic Expansion

The [Shell](shell.md) allows arithmetic to be performed by expansion. This allows you to use the shell prompt as a calculator.

```
[tux@linuxbox ~]$ echo $((2 + 2))
4
```

**Arithmetic expansion** uses the following form:

```
$((expression))
```

where `expression` is an **arithmetic expression** consisting of values and arithmetic operators. Arithmetic expansion supports only integers but can perform quite number of different operations.

| **Operator** | **Description**                         |
| ------------ | --------------------------------------- |
| `+`          | Addition.                               |
| `-`          | Subtraction.                            |
| `*`          | Multiplication.                         |
| `/`          | Division (results are _integers_).      |
| `%`          | Modulo, which simply means _remainder_. |
| `**`         | Exponentiation.                         |

Spaces are not significant in **arithmetic expressions**, and expressions may be nested. For example, to multiply 5 squared by 3, you can use this:

```
[tux@linuxbox ~]$ echo $(($((5**2)) * 3))
75
```

Single parentheses may be used to group multiple subexpressions. With this technique, you can rewrite the previous example and get the same result using a single expansion instead of two.

```
[tux@linuxbox ~]$ echo $((((5**2)) * 3))
75
```

Here is an example using the division and remainder operators. Notice the effect of integer division.

```
[tux@linuxbox ~]$ echo Five divided by two equals $((5/2))
Five divided by two equals 2
[tux@linuxbox ~]$ echo with $((5%2)) left over.
with 1 left over.
```

## Brace Expansion

**Brace expansion** is the strangest. With it, you can create multiple text strings from a pattern containing braces. Here is an example:

```
[tux@linuxbox ~]$ echo Front-{A,B,C}-Back
Front-A-Back Front-B-Back Front-C-Back
```

Patterns to be brace expanded may contain a leading portion called _preamble_ and a trailing portion called _postscript_. The **brace expansion** itself may contain either a comma-separated list of strings or a range of integers or single characters. The pattern may not contain unquoted whitespace. Here is an example using a range of integers:

```
[tux@linuxbox ~]$ echo Number_{1..5}
Number_1 Number_2 Number_3 Number_4 Number_5
```

In [Bash](bash.md) version 4.0 and newer, integers may also be _zero-padded_ like so:

```
[tux@linuxbox ~]$ echo {01..15}
01 02 03 04 05 06 07 08 09 10 11 12 13 14 15
```

Here is a range of letters in reverse order:

```
[tux@linuxbox ~]$ echo {Z..A}
Z Y X W V U T S R Q P O N M L K J I H G F E D C B A
```

**Brace expansions** may be nested:

```
[tux@linuxbox ~]$ echo a{A{1,2},B{3,4}}b
aA1b aA2b aB3b aB4b
```

This expansion is very useful to make list of files or directories to be created. Here is an example to create a lot of folders to organize them into years and months.

```
[tux@linuxbox ~]$ mkdir Photos
[tux@linuxbox ~]$ cd Photos
[tux@linuxbox Photos]$ ls
2007-01  2007-07  2008-01  2008-07  2009-01  2009-07
2007-02  2007-08  2008-02  2008-08  2009-02  2009-08
2007-03  2007-09  2008-03  2008-09  2009-03  2009-09
2007-04  2007-10  2008-04  2008-10  2009-04  2009-10
2007-05  2007-11  2008-05  2008-11  2009-05  2009-11
2007-06  2007-12  2008-06  2008-12  2009-06  2009-12
```

## Parameter Expansion

This expansion is more useful in shell scripts that directly on the command line. Many of its capabilities have to do with the system's ability to store small chunks of data and to give each chunk a name. The chunks called _variables_ are available for your examination. For example, the variable named `USER` contains your username. To invoke **parameter expansion** and reveal the contents of `USER`, you would do this:

```
[tux@linuxbox ~]$ echo $USER
tux
```

To see a list of available variables, you can type `printenv`.

If you misspell the name of a variable, the expansion will still take place but will result in an empty string.

```
[tux@linuxbox ~]$ echo $SUER

[tux@linuxbox ~]$
```

## Command Substitution

**Command Substitution** allows you to use the output of a command as an expansion.

```
[tux@linuxbox ~]$ echo $(ls)
Desktop Documents ls-output Music Pictures Public Templates Videos
```

or

```
[tux@linuxbox ~]$ ls -l $(which cp)
-rwxr-xr-x 1 root root 112780 2007-12-05 08:58 /usr/bin/cp
```

Here passing the results of [which: Reference](which-reference) [cp(1)](cp-reference) as an argument to the [ls](ls.md) command, thereby getting the listing of the [cp(1)](cp-reference) program without having to know its full pathname.

You can use it in pipelines too:

```
[tux@linuxbox ~]$ file $(ls -d /usr/bin/* | grep zip)
/usr/bin/gpg-zip:      POSIX shell script, ASCII text executable
/usr/bin/preunzip:     POSIX shell script, ASCII text executable
...
/usr/bin/zipdetails:   Perl script text executable
```

In this example, the results of the pipeline became the argument list of the [file: Reference](file-reference) command.

In older shell programs you can use _backslashes_ instead of the dollar sign and parentheses.

```
[tux@linuxbox ~]$ ls -l `which cp`
-rwxr-xr-x 1 root root 112780 Feb 28  2019 /usr/bin/cp
```

## Quoting

With **quoting** you can tell the [Shell](shell.md) how to control the expansions. For example:

```
[tux@linuxbox ~]$ echo this is a      test
this is a test
```

or this one:

```
[tux@linuxbox ~]$ echo The total is $100.00
The total is 00.00
```

In the first example, _word splitting_ by the [Shell](shell.md) removed extra whitespace from the [echo: Reference](echo-reference) command's list of arguments. In the second example, parameter expansion substituted an empty string for the value of $! because it was and undefined variable. The [Shell](shell.md) provides a mechanism called **quoting** to selectively suppress unwanted expansions.

### Double Quotes

This is the first type of **quoting**. If you place text inside **double quotes**, all the special characters used by the [Shell](shell.md) lose their special meaning and are treated as ordinary characters.

The exceptions are `$` (dollar sign), `\` (backslash) and `` ` `` (backtick). This means that word splitting , pathname expansion, tilde expansion and brace expansion are suppressed; however, parameter expansion, arithmetic expansion, and command substitution are still carried out. Using **double quotes** you can cope with filenames containing embedded spaces.

```
[tux@linuxbox ~]$ ls -l two words.txt
ls: cannot access 'two': No such file or directory
ls: cannot access 'words.txt': No such file or directory
```

By using **double quotes**, you stop the word splitting and get the desired result:

```
[tux@linuxbox ~]$ ls -l two words.txt
-rw-r--r-- 1 pi pi 0 Apr 12 13:41 'two words.txt'
```

There! Now you don't have to keep typing those pesky double quotes. Remember, parameter expansion, arithmetic expansion and command substitution still take place within double quotes.

```
[tux@linuxbox ~]$ echo "$USER $((2+2)) $(cal)"
tux 4     April 2024
Su Mo Tu We Th Fr Sa
    1  2  3  4  5  6
 7  8  9 10 11 12 13
14 15 16 17 18 19 20
21 22 23 24 25 26 27
28 29 30
```

You should take a moment to look at the effect of double quotes on command substitution. First let's look a little deeper at how word splitting works. In the earlier example, you saw how word splitting appears to remove extra spaces in out text.

```
[tux@linuxbox ~]$ echo this is a    text
this is a text
```

By default, word splitting looks for the presence of spaces, tabs and newlines (line feed characters) and treats them as _delimiters_ between words. This means unquoted spaces, tabs and newlines are not considered to be part of the text. They serve only as separators. Because they separate the words into different arguments, the example command line contains a command followed by four distinct arguments. If you add double quotes:

```
[tux@linuxbox ~]$ echo "this is a    text"
this is a    text
```

then the word splitting is suppressed and the embedded spaces are not treated as delimiters; rather, they become part of the argument. Once the **double quotes** are added, the command line contains a command followed by a single argument.

The fact that newlines are considered delimiters by the word-splitting mechanism causes an interesting, albeit subtle, effect on command substitution. Consider the following:

```
[tux@linuxbox ~]$ echo $(cal)
April 2024 Su Mo Tu We Th Fr Sa 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30
[tux@linuxbox ~]$ echo "$(cal)"
     April 2024
Su Mo Tu We Th Fr Sa
    1  2  3  4  5  6
 7  8  9 10 11 12 13
14 15 16 17 18 19 20
21 22 23 24 25 26 27
28 29 30
```

In the first instance, the unquoted command substitution resulted in a command line containing 38 arguments. In the second, it resulted in a command line with one argument that includes the embedded spaces and newlines.

### Single Quotes

If you need to suppress all expansions, you use **single quotes**. Here is a comparison of unquoted, double quotes and single quotes:

```
[tux@linuxbox ~]$ echo text ~/*.txt {a,b} $(echo foo) $((2+2)) $USER
text /home/tux/ls-output.txt a b foo 4 tux
[tux@linuxbox ~]$ echo "text ~/*.txt {a,b} $(echo foo) $((2+2)) $USER"
text ~/*.txt {a,b} foo 4 tux
[tux@linuxbox ~]$ echo 'text ~/*.txt {a,b} $(echo foo) $((2+2)) $USER'
text ~/*.txt {a,b} $(echo foo) $((2+2)) $USER
```

As you can see, with each succeeding level of quoting, more and more of the expansions are suppressed.

### Escaping Characters

Sometimes you want to quote only a single character. To do this, you can precede a character with a backslash, which in the context is called the **scape character**. Often this is done inside double quotes to selectively prevent an expansion.

```
[tux@linuxbox ~]$ echo text ~/*.txt {a,b} $(echo foo) $((2+2)) $USER
The balance for user tux is: $5.00
```

It is also common to use escaping to eliminate the special meaning of a character in a filename. For example, it is possible to use characters in filenames that normally have special meaning to the [Shell](shell.md). These would include `$`, `!`, `&`, `spaces` and others. To include a special character in a filename you can do this:

```
[tux@linuxbox ~]$ mv bad\&filename good_filename
```

To allow a backslash character to appear, escape it by typing `\\`. Note that within single quotes, the backslash loses its special meaning and is treated as an ordinary character.

#### Backslash Escape Sequences

The backslash is used as part of a notation to represent certain special characters called _control codes_. The first 32 characters in the ASCII coding scheme are used to transmit commands to Teletype-like devices. Some of these codes are familiar (tab, backspace, line feed and carriage return), while others are not (null, end-of-transmission and acknowledge).

| **Escape sequence** | **Meaing**                                                |
| ------------------- | --------------------------------------------------------- |
| `\a`                | Bell (an alert that causes the computer to beep).         |
| `\b`                | Backspace.                                                |
| `\n`                | Newline; on Unix-like systems, this produces a line feed. |
| `\r`                | Carriage return.                                          |
| `\t`                | Tab.                                                      |

The idea behind this representation using the backslash originated in the C programming language and has been adopted by many others, including the bell.

Adding the `-e` option to [echo: Reference](echo-reference) will enable interpretation of escape sequences. You can also place them inside `$' '`. Here, using the [sleep(1)](sleep(1)) command, a simple program that just waits for the specified number of seconds and then exists, you can create a primitive countdown timer:

```
[tux@linuxbox ~]$ sleep 10; echo -e "Time's up\a"
```

You could also do this:

```
[tux@linuxbox ~]$ sleep 10; echo -e "Time's up" $'\a'
```

## References

1. Shotts, W. (2019). _The Linux Command Line: Seeing the World as the Shell Sees it_ (2nd ed.). No Starch Press
