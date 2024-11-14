---
draft: "false"
language: english
parent: "[uniq](uniq.md)"
status: ready
tags: [wiki, command-cheatsheet]
title: "uniq: Cheatsheet"
---

# uniq: Cheatsheet

> Report or omit repeated lines.

```bash
# Display each line once
sort <𝗙𝗜𝗟𝗘_𝗣𝗔𝗧𝗛> | uniq

# Display only unique lines
sort <𝗙𝗜𝗟𝗘_𝗣𝗔𝗧𝗛> | uniq -u

# Display only duplicate lines
sort <𝗙𝗜𝗟𝗘_𝗣𝗔𝗧𝗛> | uniq -d

# Display number of occurrences of each line
# along with that Line
sort <𝗙𝗜𝗟𝗘_𝗣𝗔𝗧𝗛> | uniq -c

# Display number of occurrences of each line,
# sorted by the most frequent
sort <𝗙𝗜𝗟𝗘_𝗣𝗔𝗧𝗛> | uniq -c | sort -nr
```

## References

- tldr. _inbrowser.app_. (n.d.). [https://tldr.inbrowser.app/pages/common/uniq](https://tldr.inbrowser.app/pages/common/uniq)
