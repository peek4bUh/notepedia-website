---
draft: "true"
language: english
parent: "[computing-moc](computing-moc.md)"
status: incomplete
tags: [wiki]
title: Vim
type: permanent
---

# Vim

**Vim** is an open-source editor for all kinds of ASCII text, just like [Nano](Nano). It is an improved clone of the previous [Vi](Vi). It is an extremely powerful editor that focuses on the essentials, namely editing text. For tasks that go beyond that, Vim provides an interface to external programs, such as `grep`, `awk`, `sed`, etc., which can handle their specific tasks much better than a corresponding function directly implemented in an editor usually can. This makes the editor small and compact, fast, powerful, flexible, and less error-prone.

Vim follows the Unix principle here: many small specialized programs that are well tested and proven, when combined and communicating with each other, resulting in a flexible and powerful system.

In contrast to Nano, **Vim** is a modal editor that can distinguish between text and command input. Vim offers a total of six fundamental modes that make our work easier and make this editor so powerful:

| **Mode**                               | **Description**                                                                                                                                                                                                                                                 |
| -------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <span class="highlight">Normal</span>  | In normal mode, all inputs are considered as editor commands. So there is no insertion of the entered characters into the editor buffer, as is the case with most other editors. After starting the editor, we are usually in the normal mode.                  |
| <span class="highlight">Insert</span>  | With a few exceptions, all entered characters are inserted into the buffer.                                                                                                                                                                                     |
| <span class="highlight">Visual</span>  | The visual mode is used to mark a contiguous part of the text, which will be visually highlighted. By positioning the cursor, we change the selected area. The highlighted area can then be edited in various ways, such as deleting, copying, or replacing it. |
| <span class="highlight">Command</span> | It allows us to enter single-line commands at the bottom of the editor. This can be used for sorting, replacing text sections, or deleting them, for example.                                                                                                   |
| <span class="highlight">Replace</span> | In replace mode, the newly entered text will overwrite existing text characters unless there are no more old characters at the current cursor position. Then the newly entered text will be added.                                                              |

When inside the text editor, the leading tilde characters (`~`) indicate that no text exist on that line.

`vi` is a modal editor. When `vi` starts, it begins in `command mode`. In this mode, almost every key is a command, so if you were to start typing `vi` would basically go crazy and make a big mess.

Compatibility mode en `vi`: (todo)

```bash
echo "set nocp" >> ~/.vimrc
```

## References

- HTB Academy. (n.d.). _Linux Fundamentals: Workflow: Find Files and Directories_. [https://academy.hackthebox.com/module/18/section/93](https://academy.hackthebox.com/module/18/section/93)
- Shotts, W. (2019). _The Linux Command Line: A Gentle Introduction to vi_. (2nd ed.). No Starch Press
