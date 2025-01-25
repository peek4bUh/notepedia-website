---
draft: "false"
status: ready
tags: [cheatsheet]
title: sed
---

# sed

```bash
# Replace all `old_word` occurrences with `new_word`
# in all input lines and print the result to stdout
sed 's/old_word/new_word/g' input_file
command | sed 's/old_word/new_word/g'
```

## References

- _HTB Academy_. (n.d.). <span class="reference-title">Linux Fundamentals: Workflow: Filter Contents</span>. [https://academy.hackthebox.com/module/18/section/80](https://academy.hackthebox.com/module/18/section/80)
- _tldr InBrowser.App_. (n.d.). [https://tldr.inbrowser.app/pages/common/sed](https://tldr.inbrowser.app/pages/common/sed)
