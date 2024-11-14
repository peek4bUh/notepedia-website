---
draft: "true"
language: english
status: incomplete
subject: "[Standard Streams](Standard%20Streams)"
tags: [wiki]
title: Standard Error
---

# Standard Error

Is a output stream typically used by programs to output [error messages](https://en.wikipedia.org/wiki/Error_message "Error message") or diagnostics. It is a stream independent of [stdout](Standard%20Output) and can be redirected separately.

let's try to list the contents of a directory that doesn't exist on your system and redirect the output to the peanuts.txt file.

```bash
ls /fake/directory > peanuts.txt
```

What you should see is:

```bash
ls: cannot access /fake/directory: No such file or directory
```

By default, **stderr** sends its output to the screen, it's a completely different stream than [stdout](Standard%20Output). So you'll need to redirect its output a different way.<sup>[1]</sup>

## Examples

### Redirect the **stderr** to `file1`:

```bash
ls /fake/directory 2> file1
```

### Redirect **stderr** and [stdout](Standard%20Output) to `file1` using [file descriptors](File%20descriptors):

```bash
ls /fake/directory > file1 2>&1
```

This sends the results of `ls /fake/directory` to the `file1` file and then it redirects **stderr** to the [stdout](Standard%20Output) via `2>&1`. The order of operations here matters, `2>&1` sends **stderr** to whatever stdout is pointing to. In this case [stdout](Standard%20Output) is pointing to a file, so `2>&1` also sends **stderr** to a file. So if you open up that `file1` file you should see both **stderr** and [stdout](Standard%20Output). In our case, the above command only outputs **stderr**.

### Shorter way to redirect both [stdout](Standard%20Output) and **stderr** to `file1`:

```bash
ls /fake/directory &> file1
```

### Redirect output to a special file called `/dev/null` and it will discard any input.

```bash
ls /fake/directory 2> /dev/null
```

## References

1. https://linuxjourney.com/lesson/stderr-standard-error-redirect
