---
draft: "false"
language: english
status: ready
tags: [wiki]
title: info
---

# info

The GNU Project provides an alternative to man pages for their programs, called `info`. Info manuals are displayed with a reader program named named, appropriately enough, **info**. Info pages are _hyperlinked_ much like web pages.

The `info` program reads info files files, which are tree structured into individual _nodes_, each containing a single topic. Info files containing hyperlinks that can move you from node to node. A hyperlink can be identified to its leading asterisk ( `*`) and is activated by placing the cursor upon it and pressing `ENTER`.

| **Command**               | **Action**                                                               |
| ------------------------- | ------------------------------------------------------------------------ |
| `?`                       | Display command help.                                                    |
| `PAGE UP` or `BACKSPACE`  | Display previous page.                                                   |
| `PAGE DOWN` or `SPACEBAR` | Display next page.                                                       |
| `n`                       | Display the next node.                                                   |
| `p`                       | Previous--display the previous node.                                     |
| `U`                       | Display the parent node of the currently displayed node, usually a menu. |
| `ENTER`                   | Follow the hyperlink at the cursor location.                             |
| `Q`                       | Quit.                                                                    |

From the output of the `info` command, the **keyspace** section provides statistics on the main dictionary of each database. The statistics include the number of keys, and the number of keys with an expiration.

## References

- _tldr InBrowser.App_. (n.d.). [https://tldr.inbrowser.app/pages/common/info](https://tldr.inbrowser.app/pages/common/info)
- dotguy. (n.d.). <span class="reference-title">Redeemer Write-up</span>. _HTB Labs_. [https://app.hackthebox.com/starting-point](https://app.hackthebox.com/starting-point)

## See Also

- [info: Cheatsheet](info-cheatsheet.md)
