---
draft: "false"
status: ready
tags: [cheatsheet]
title: man
---

# man

```bash
# Display the man page for a command
man command

# List all available sections for a command
man -f command

# Display the man page for a command from
# specific section listed above
man section_number command

# Display the path of manpages
man -w

# Display the location of a command's manpage
man -w command

# Display the spanish manpage of `ls` command
man ls -L es

# Search for manpages containing a search string
man -k "search_string"
```

## References

- _tldr InBrowser.App_. (n.d.). [https://tldr.inbrowser.app/pages/common/man](https://tldr.inbrowser.app/pages/common/man)
- _man_. manned.org. [https://www.man7.org/linux/man-pages/man1/man.1.html](https://www.man7.org/linux/man-pages/man1/man.1.html)
