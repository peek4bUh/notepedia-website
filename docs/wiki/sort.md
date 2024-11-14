---
draft: "false"
language: english
status: incomplete
tags: [wiki]
title: sort
---

# sort

> Sort lines of text files..

Write sorted concatenation of all FILE(s) to standard output.

```bash
# Sort a file in ascending order
sort 𝑝𝑎𝑡ℎ/𝑡𝑜/𝑓𝑖𝑙𝑒

# Sort a file in descending order
sort -r 𝑝𝑎𝑡ℎ/𝑡𝑜/𝑓𝑖𝑙𝑒
sort --reverse 𝑝𝑎𝑡ℎ/𝑡𝑜/𝑓𝑖𝑙𝑒

# Sort a file in case-insensitive way
sort -f 𝑝𝑎𝑡ℎ/𝑡𝑜/𝑓𝑖𝑙𝑒
sort --ignore-case 𝑝𝑎𝑡ℎ/𝑡𝑜/𝑓𝑖𝑙𝑒

# Sort a file using numeric rather than alphabetic order
sort -n 𝑝𝑎𝑡ℎ/𝑡𝑜/𝑓𝑖𝑙𝑒
sort --numeric-sort 𝑝𝑎𝑡ℎ/𝑡𝑜/𝑓𝑖𝑙𝑒

# Sort a file by the 3rd field of each line numerically,
# using a colon (:) as a field separator
sort -k 3n -t : 𝑝𝑎𝑡ℎ/𝑡𝑜/𝑓𝑖𝑙𝑒
sort --key=3n --field-separator=: 𝑝𝑎𝑡ℎ/𝑡𝑜/𝑓𝑖𝑙𝑒

# Sort a file preserving only unique lines
sort -u 𝑝𝑎𝑡ℎ/𝑡𝑜/𝑓𝑖𝑙𝑒
sort --unique 𝑝𝑎𝑡ℎ/𝑡𝑜/𝑓𝑖𝑙𝑒

# Sort a file, printing the output to the specified output file (can be used to sort a file in-place)
sort -o 𝑝𝑎𝑡ℎ/𝑡𝑜/𝑜𝑢𝑡𝑝𝑢𝑡_𝑓𝑖𝑙𝑒 𝑝𝑎𝑡ℎ/𝑡𝑜/𝑖𝑛𝑝𝑢𝑡_𝑓𝑖𝑙𝑒
sort --output=𝑝𝑎𝑡ℎ/𝑡𝑜/𝑜𝑢𝑡𝑝𝑢𝑡_𝑓𝑖𝑙𝑒 𝑝𝑎𝑡ℎ/𝑡𝑜/𝑖𝑛𝑝𝑢𝑡_𝑓𝑖𝑙𝑒

# Sort numbers with exponents
sort -g 𝑝𝑎𝑡ℎ/𝑡𝑜/𝑓𝑖𝑙𝑒
sort --general-numeric-sort 𝑝𝑎𝑡ℎ/𝑡𝑜/𝑓𝑖𝑙𝑒
```

## References

- _tldr InBrowser.App_. (n.d.). [https://tldr.inbrowser.app/pages/common/sort](https://tldr.inbrowser.app/pages/common/sort)
