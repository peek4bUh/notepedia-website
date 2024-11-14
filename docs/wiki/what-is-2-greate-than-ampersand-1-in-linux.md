---
draft: "true"
language: english
status: incomplete
tags: [wiki]
title: What is 2>&1 in Linux
---

# What is 2>&1 in Linux

In [Linux Philosophy](Linux%20Philosophy), `2>&1` is used for redirecting the standard error (file descriptor 2) to the same location as the standard output (file descriptor 1). This is often used in command-line operations to ensure that both standard output and standard error are captured or redirected to the same location, typically a file or another command.

Here's how it works:

- `2` refers to the file descriptor for standard error.
- `>` is the redirection operator, which is used to redirect output.
- `&1` means "file descriptor 1," which is standard output.

So, `2>&1` combines standard error (file descriptor 2) with standard output (file descriptor 1), directing both to the same destination.

For example, if you want to run a command and capture both the standard output and standard error in a file called "output.txt," you can use:

```bash
command > output.txt 2>&1
```

This will send both the standard output and standard error of "command" to the "output.txt" file.

It's a useful technique for troubleshooting and logging errors in Linux commands and scripts.

## References

- [ChatGPT](https://openai.com/blog/chatgpt)
