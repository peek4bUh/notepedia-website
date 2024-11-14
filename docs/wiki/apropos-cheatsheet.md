---
binaryType: files-commands-info
draft: "false"
language: english
status: ready
tags: [wiki, command-cheatsheet]
title: "apropos: Cheatsheet"
---

# apropos: Cheatsheet

> Search the manual pages for names and descriptions.

```bash
# Search for a keyword using a regular expression
apropos <𝗥𝗘𝗚𝗘𝗫𝗣>

# Search without restricting the output to the
# terminal width (Long Output)
apropos -l <𝗥𝗘𝗚𝗘𝗫𝗣>

# Search for pages that match all the expressions given
apropos <𝗥𝗘𝗚𝗘𝗫𝗣𝟭> -a <𝗥𝗘𝗚𝗘𝗫𝗣𝟮> -a <𝗥𝗘𝗚𝗘𝗫𝗣𝟯>...
```

## References

- _tldr InBrowser.App_. (n.d.). [https://tldr.inbrowser.app/pages/common/apropos](https://tldr.inbrowser.app/pages/common/apropos)
