---
draft: "false"
language: english
status: incomplete
tags: [wiki]
title: column
---

# column

> Format `stdin` or a file into multiple columns. Columns are filled before rows; the default separator is a whitespace.

Since search results can often have an unclear representation, the tool `column` is well suited to display such results in tabular form using the "`-t`."

```shell-session
angel99ab@htb[/htb]$ cat /etc/passwd | grep -v "false\|nologin" | tr ":" " " | column -t

root         x  0     0      root               /root        /bin/bash
sync         x  4     65534  sync               /bin         /bin/sync
mrb3n        x  1000  1000   mrb3n              /home/mrb3n  /bin/bash
cry0l1t3     x  1001  1001   /home/cry0l1t3     /bin/bash
htb-student  x  1002  1002   /home/htb-student  /bin/bash
```

## References

- _HTB Academy_. (n.d.). <span class="reference-title">Linux Fundamentals: Workflow: Filter Contents</span>. [https://academy.hackthebox.com/module/18/section/80](https://academy.hackthebox.com/module/18/section/80)
- _tldr InBrowser.App_. (n.d.). [https://tldr.inbrowser.app/pages/common/column](https://tldr.inbrowser.app/pages/common/column)
