---
draft: "true"
language: english
status: incomplete
tags: [wiki]
title: grep
---

# grep

> Find patterns in files using regular expressions.

The `grep` command searches for `PATTERNS` in each `FILE`. `PATTERNS` is one or patterns separated by newline characters, and `grep` prints **each** line that matches a pattern.

The name **grep** is derived from the phrase "**g**lobal **r**egular **e**xpression **p**rint".

## Common Usages

```bash
# Search for a pattern within a file
grep "𝑠𝑒𝑎𝑟𝑐ℎ_𝑝𝑎𝑡𝑡𝑒𝑟𝑛" 𝑝𝑎𝑡ℎ/𝑡𝑜/𝑓𝑖𝑙𝑒

# Search for an exact string
# (disables regular expressions)
grep -F "𝑒𝑥𝑎𝑐𝑡_𝑠𝑡𝑟𝑖𝑛𝑔" 𝑝𝑎𝑡ℎ/𝑡𝑜/𝑓𝑖𝑙𝑒

# Search for a pattern in all files recursively `-r` in
# a directory, showing line numbers `-n` of matches,
# ignoring binary files
grep -r -n --binary-files=without-match "𝑠𝑒𝑎𝑟𝑐ℎ_𝑝𝑎𝑡𝑡𝑒𝑟𝑛" 𝑝𝑎𝑡ℎ/𝑡𝑜/𝑑𝑖𝑟𝑒𝑐𝑡𝑜𝑟𝑦

# Use Extended Regular Expressions `-E` (supports `?`,
# `+`, `{}`, `()` and `|`), in case-insensitive mode `-i`
grep -E -i "search_pattern" 𝑝𝑎𝑡ℎ/𝑡𝑜/𝑓𝑖𝑙𝑒

# Print 3 lines of context around, before,
# or after each match
grep --context|before-context|after-context=3 "𝑠𝑒𝑎𝑟𝑐ℎ_𝑝𝑎𝑡𝑡𝑒𝑟𝑛" 𝑝𝑎𝑡ℎ/𝑡𝑜/𝑓𝑖𝑙𝑒

# Print file name and line number for each
# match with color output
grep -H -n --color=always "search_pattern" 𝑝𝑎𝑡ℎ/𝑡𝑜/𝑓𝑖𝑙𝑒

# Search for lines matching a pattern, printing
# only the matched text
grep -o "𝑠𝑒𝑎𝑟𝑐ℎ_𝑝𝑎𝑡𝑡𝑒𝑟𝑛" 𝑝𝑎𝑡ℎ/𝑡𝑜/𝑓𝑖𝑙𝑒

# Search `stdin` for lines that do not match a pattern
cat 𝑝𝑎𝑡ℎ/𝑡𝑜/𝑓𝑖𝑙𝑒 | grep --invert-match "𝑠𝑒𝑎𝑟𝑐ℎ_𝑝𝑎𝑡𝑡𝑒𝑟𝑛"
```

## References

- Shotts, W. (2019). <span class="reference-title">The Linux Command Line: Redirection: grep: Print Lines Matching a Pattern (2nd ed.)</span>. No Starch Press
- _tldr InBrowser.App_. (n.d.). [https://tldr.inbrowser.app/pages/common/grep](https://tldr.inbrowser.app/pages/common/grep)
