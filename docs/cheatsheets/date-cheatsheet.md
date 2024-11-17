---
draft: "false"
language: english
status: ready
tags: [wiki, command-cheatsheet]
title: "date: Cheatsheet"
---

# date: Cheatsheet

> Set or display the system date

```bash
# Display the current date using the default locale's format
date +%c

# Display the current date in UTC, using the ISO 8601 format
date -u +%Y-%m-%dT%H:%M:%S%Z

# Display the current date as a Unix timestamp
# (seconds since the Unix epoch)
date +%s
```

## References

- _tldr InBrowser.App_. (n.d.). [https://tldr.inbrowser.app/pages/common/date](https://tldr.inbrowser.app/pages/common/date)
