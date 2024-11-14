---
binaryType: text-manipulation
draft: "false"
language: english
status: ready
tags: [wiki, command-cheatsheet]
title: "tee: Cheatsheet"
---

# tee: Cheatsheet

> Read from standard input and write to standard output and files.

```bash
# Copy `stdin` to each file, and also to `stdout`
echo "<𝗦𝗧𝗥𝗜𝗡𝗚>" | tee <𝗙𝗜𝗟𝗘_𝗣𝗔𝗧𝗛>

# Append to the given files, do not overwrite
echo "<𝗦𝗧𝗥𝗜𝗡𝗚>" | tee -a <𝗙𝗜𝗟𝗘_𝗣𝗔𝗧𝗛>

# Print `stdin` to the terminal, and also pipe it
# into another program for further processing
echo "<𝗦𝗧𝗥𝗜𝗡𝗚>" | tee /dev/tty | xargs printf "[%s]"

# Create a directory called `example`, Count the
# Number of Characters in `example` and Write
# `example` to the Terminal
echo "example" | tee >(xargs mkdir) >(wc -c)
```

## References

- Shotts, W. (2019). <span class="reference-title">The Linux Command Line: Redirection: Pipelines: Filters: tee: Read from Stdin and Output to Stdout and Files (2nd ed.)</span>. No Starch Press
- _tldr InBrowser.App_. (n.d.). [https://tldr.inbrowser.app/pages/common/tee](https://tldr.inbrowser.app/pages/common/tee)
