---
draft: "false"
language: english
status: ready
tags: [wiki]
title: less
---

# less

The `less` program was designed as an improved replacement of an earlier Unix program called [more: Cheatsheet](more-cheatsheet.md), `less` falls into the class of programs called [terminal pager](terminal-pager.md). The `less` program allows paging both forward and backward and has many other features as well.

## Common Keyboard Commands

| **Command**                        | **Action**                                                                 |
| ---------------------------------- | -------------------------------------------------------------------------- |
| `PAGE UP` or `b`                   | Scroll back one page.                                                      |
| `PAGE DOWN` or `space`             | Scroll forward one page.                                                   |
| `Up arrow`                         | Scroll up one line.                                                        |
| `Down arrow`                       | Scroll down one line.                                                      |
| `G`                                | Move to the end of the text file.                                          |
| `1G` or `g`                        | Move to the beginning of the text file.                                    |
| `/pattern`                         | Forward search for a string (press `n`/`N` to go to next/previous match).  |
| `?pattern`                         | Backward search for a string (press `n`/`N` to go to next/previous match). |
| `v`                                | Open the current file in an editor.                                        |
| `h`                                | Display help screen.                                                       |
| `q` or `Q` or `:q` or `:Q` or `ZZ` | Quit `less`                                                                |

## References

- Shotts, W. (2019). <span class="reference-title">The Linux Command Line: Exploring the System: Viewing File Contents with less (2nd ed.)</span>. No Starch Press

## See Also

- [less: Cheatsheet](less-cheatsheet.md)
