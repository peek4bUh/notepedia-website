---
draft: "false"
status: ready
tags: [cheatsheet]
title: tee
---

# tee

```bash
# Copy stdin to each file, and also to stdout
echo "example" | tee path/to/file

# Append to the given files, do not overwrite
echo "example" | tee -a path/to/file

# Print stdin to the terminal, and also pipe it
# into another program for further processing
echo "example" | tee /dev/tty | xargs printf "[%s]"

# Create a directory called `example`, Count the
# Number of Characters in `example` and Write
# `example` to the Terminal
echo "example" | tee >(xargs mkdir) >(wc -c)
```

## References

- Shotts, W. (2019). <span class="reference-title">The Linux Command Line: Redirection: Pipelines: Filters: tee: Read from Stdin and Output to Stdout and Files (2nd ed.)</span>. No Starch Press
- _tldr InBrowser.App_. (n.d.). [https://tldr.inbrowser.app/pages/common/tee](https://tldr.inbrowser.app/pages/common/tee)
