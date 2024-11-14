---
draft: "true"
language: english
parent: "[computing-moc](computing-moc.md)"
status: inprogress
tags: [wiki]
title: Neovim Shortcuts
---

# Neovim Shortcuts

- [General](neovim-shortcuts-general.md)
- [Normal Mode](neovim-shortcuts-normal-mode.md)

http://www.fprintf.net/vimCheatSheet.html
https://stackoverflow.com/questions/12495442/what-do-the-f-and-t-commands-do-in-vim

---

De aqui para abajo hay que refactorizar:

- Dejo esto aqui porque aun no cree la nota para hacer un related a esto https://stackoverflow.com/a/14925973

## Normal/Command Mode

| **Key**                                  | **Description**                                                       |
| ---------------------------------------- | --------------------------------------------------------------------- |
| `:`                                      | Start an ex command.                                                  |
| `:r FILENAME`                            | Retrieves disk file `FILENAME` and puts it below the cursor position. |
| `:<shellCommand>!` or `:!<shellCommand>` | Execute an external command.                                          |

### Windows

| **Command** | **Description** |
| ----------- | --------------- |
| `:split`    |                 |
| `:vsplit`   |                 |
| `CTRL-W`    |                 |

| **Key**                   | **Description**                                                          |
| ------------------------- | ------------------------------------------------------------------------ |
| `x`                       | Delete a character in normal mode.                                       |
| `dw`                      | Delete from the cursor up to the next word.                              |
| `de`                      | Delete from the cursor up to the end of the word.                        |
| `d$`                      | Delete from the cursor to the end of a line.                             |
| `dd`                      | Delete a whole line.                                                     |
| `^`                       | Move to the first non-whitespace character of the beginning of the line. |
| `CTRL-F` or `PageDown` | Down one page.                                                           |
| `CTRL-B` or `PageUp`   | Up one page.                                                             |
| `:g<n>` or `<n>G`         | To line number, where `<n>` is the number of the line you want to jump.  |
| `gg`                      | Go to the start of the file.                                             |
| `G`                       | Go to the bottom of the file.                                            |
| `u`                       | Undo last change.                                                    |
| `CTRL-R`      | Redo.                                                                    |
| `CTRL-G`      | Show file location and file status.                                      |

| **Key** | **Description**                                 |
| ------- | ----------------------------------------------- |
| `p`     | Puts (paste) it.                                |
| `y`     | Yanks (copies) text.                            |
| `ce`    | Delete the word and enter in Insert mode.       |
| `cc`    | Delete the whole line and enter in Insert mode. |

## Insert Mode

| **Key** | **Description**                                        |
| ------- | ------------------------------------------------------ |
| `i`     | Insert text before the cursor.                         |
| `a`     | Insert text after the cursor.                          |
| `A`     | Insert text after the end of the line                  |
| `o`     | Open a line below the cursor and start in Insert mode. |
| `O`     | Open a line above the cursor and start in Insert mode. |

## Motions

| **Motion** | **Description**    |
| ---------- | ------------------ |
| `w`        | Word.              |
| `$`        | End of line.       |
| `0`        | Start of the line. |

## Operators

### Change

| **Operator**    | **Description**                                                                                                                                              |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `["x]c{motion}` | Delete [motion](#Motions%5C) text `[into register x]` and start Insert mode.                                                                                  |
| `["x]cc`        | Delete `[count]` lines `[into register x]` and start Insert linewise.                                                                                        |
| `["x]C`         | Delete from the cursor position to the end of the line and `[count]-1` more lines `[into register x]`, and start Insert mode. Synonym for c$ (not linewise). |
| `["x]S`         | Delete `[count]` lines `[into register x]` and start Insert. Synonym for `cc` linewise.                                                                      |

### Search

| **Command**  | **Description**                                                                     |
| ------------ | ----------------------------------------------------------------------------------- |
| `/<pattern>` | In Normal mode, search for a `<pattern>` inside the file.                           |
| `?<pattern>` | In Normal mode, search for a `<pattern>` in the backward direction inside the file. |
| `n`          | Next coincidence.                                                                   |
| `N`          | Previous coincidence.                                                               |

### Substitute

| **Command**       | **Description**                                                                                                 |
| ----------------- | --------------------------------------------------------------------------------------------------------------- |
| `:s/old/new/`     | Change the first occurrence of `old` with `new` in the line.                                                    |
| `:s/old/new/g`    | Change all occurrences of `old` with `new` in the line.                                                         |
| `:#,#s/old/new/g` | Change every occurrence of a character string between two lines, where `#,#` are the line numbers of the range. |
| `:%s/old/new/g`   | Change every occurrence in the whole file.                                                                      |
| `:%s/old/new/gc`  | Find every occurrence in the whole file, with a prompt whether to substitute or not.                            |

### Replace

| **Command** | **Description**                                          |
| ----------- | -------------------------------------------------------- |
| `r<x>`      | Replace the character at the cursor with `<x>`.          |
| `R`         | Enter Replace mode until `<ESC>` or `CTRL-C` is pressed. |

### Yank (copy)

The leading tilde characters (`~`) indicate that no text exists on that line.

| **Command** | **Description**              |
| ----------- | ---------------------------- |
| `CTRL-O`    | Go back where you came from. |
| `CTRL-I`    | Go forward.                  |

| **Command** | **Description**                   |
| ----------- | --------------------------------- |
| `%`         | Find a matching `)`, `]`, or `}`. |

## Registers

| **Register**             | **Description**               |
| ------------------------ | ----------------------------- |
| `""`                     | Unnamed register.             |
| `"0 to "9`               | Numbered registers.           |
| `"-`                     | Small delete register.        |
| `"a to "z` or `"A to "Z` | Named registers.              |
| `":`, `".`, `"%`         | Three read-only registers.    |
| `"#`                     | Alternate buffer register.    |
| `"=`                     | Expression register.          |
| `"*`, `"+` and `"~`      | Selection and drop registers. |
| `"_`                     | Black hole register.          |
| `"/`                     | Last search pattern register. |

| **Key**                 | **Moves the cursor**                                                   |
| ----------------------- | ---------------------------------------------------------------------- |
| `0 (zero)`              | To the beginning of the current line.                                  |
| `^`                     | To the first non-whitespace character on the current line.             |
| `$`                     | To the end of the current line.                                        |
| `w`                     | To the beginning of the next word or punctuation character.            |
| `W`                     | To the beginning of the next word, ignoring punctuation character.     |
| `b`                     | To the beginning of the previous word or punctuation character.        |
| `B`                     | To the beginning of the previous word, ignoring punctuation character. |
| `CTRL-F` or `PAGE DOWN` | Down one page.                                                         |
| `CTRL-B` or `PAGE UP`   | Up one page.                                                           |
| `numberG`               | To line number. For example, `1G` moves to the first line of the file. |
| `G`                     | To the last line of the file.                                          |

| **Command** | **Deletes**                                                                         |
| ----------- | ----------------------------------------------------------------------------------- |
| `x`         | The current character.                                                              |
| `3x`        | The current character and the next two chracter.                                    |
| `dd`        | The current line.                                                                   |
| `5dd`       | The current line and the next four lines.                                           |
| `dW`        | From the current cursor position to the beginning of the next word.                 |
| `d$`        | From the current cursor position to the end of the current line.                    |
| `d0`        | From the current cursor position to the beginning of the line.                      |
| `d^`        | From the current cursor position to the first non-whitespace character in the line. |
| `dG`        | From the current line to the end of the line.                                       |
| `d20G`      | From the current line to the twentieth line of the file.                            |

| **Command** | **Copies**                                                                          |
| ----------- | ----------------------------------------------------------------------------------- |
| `yy`        | The current line.                                                                   |
| `5yy`       | The current line and the next four lines.                                           |
| `yW`        | From the current cursor position to the beginning of the next word.                 |
| `y$`        | From the current cursor location to the end of the current line.                    |
| `y0`        | From the current cursor location to the beginning of the line.                      |
| `y^`        | From the current cursor location to the first non-whitespace character in the line. |
| `yG`        | From the current line to the end of the file.                                       |
| `y20G`      | From the current line to the twentieth line of the file.                            |

### Joining Lines

Use the command `J` (not to be confused with `j`, which is for cursor movement)

### Cutting, Copying and Pasting Text

The `d` command not only deletes text, it also _cuts_ text. Each time you use the `d` command, the deletion is copied into a paste buffer (like clipboard) that you can later recall with the `p` command to paste the contents of the buffer either before or after the cursor.

The `y` command is used to _yank_ (copy) text in much the same way the `d` command is used to cut text.

## Search-and-Replace

### Searching Within a Line

The `f` command searches a line and moves the cursor to the next instance of a specified character. For example, the command `fa` would move the cursor to the next occurrence of the character `a` within the current line. After performing a character search within a line, the search may be repeated by typing a semicolon.

### Searching the Entire File

To move the cursor to the next occurrence of a word or phrase, the `/` command is used. When you type the `/` command, a `/` will appear at the bottom of the screen. Next, type the word or phrase to be searched for, followed by the `ENTER` key. The cursor will move to the next location containing the search string. A search may be repeated using the previous search string with the `n` command.

While you have so far used only words and phrases for your search patterns, `vi` allows the use of _regular expressions_.

### Global Search-and-Replace

`vi` uses an `ex` command to perform search-and-replace operations (called **substitution** in `vi`) over a range of lines or the entire file.

```
:%s/Line/line/g
```

Let's break down this command into separate items and see what each one does.

| **Item**     | **Meaning**                                                                                                                                                                                                                                                                                                                              |
| ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `:`          | The color character starts an `ex` command.                                                                                                                                                                                                                                                                                              |
| `%`          | This specifies the range of lines for the operation, `%` is a shortcut meaning from the first line to the last line. Alternately, the range could have been specified `1,5` or `1,$`, which means _from line 1 to the last line in the file_. If the range of the lines is omitted, the operation is performed only on the current line. |
| `s`          | This specifies the operation. In this case, it's substitution (search-and-replace).                                                                                                                                                                                                                                                      |
| `/Line/line` | This specifies the search pattern and the replacement text.                                                                                                                                                                                                                                                                              |
| `g`          | This means _global_ in the sense that the search-and-replace is performed on every instance of the search string in the line. If omitted, only the first instance of the search string on each line is replaced.                                                                                                                         |

You can specify a substitution command with user confirmation, this is done by adding a `c` to the end of the command.

```
:%s/Line/line/gc
```

Each of the characters within the parentheses is a possible choice, as described in the table:

| **Key**            | **Addition**                                                                                    |
| ------------------ | ----------------------------------------------------------------------------------------------- |
| `y`                | Perform the substitution.                                                                       |
| `n`                | Skip this instance of the pattern.                                                              |
| `a`                | Perform the substitution on this and all subsequent instances of the pattern.                   |
| `q` or `ESC`       | Quit substituting.                                                                              |
| `l`                | Perform this substitution and then quit. This is short for _last_.                              |
| `CTRL-E`, `CTRL-Y` | Scroll down and scroll up. This is useful for viewing the context of the proposed substitution. |

If you type `y`, the substitution will be performed, `n` will cause `vi` to skip this instance and more on the next one.

## Editing Multiple Files

With `vi` you can open multiple files for editing by specifying them on the command line:

```
vi file1 file2 file3
```

### Switching Between Files

To switch from one file to the next:

```
:bn
```

To move back top the previous file:

```
:bp
```

While you can move from one file to another, `vi` enforces a policy that prevents you from switching files if the current files has unsaved changes.

To force `vi` to switch files and abandon your changes, add an exclamation point (`!`) to the command.

In addition to the switching method already described, `vim` (and some versions of `vi`) provides some `ex` commands that make multiple files easier to manage. You can view a list of files being edited with the `:buffers` command. Doing so will display a list of the files at the bottom of the display.

To switch to another buffer (file), type `:buffer <n>`

To switch to the next buffer instead of type the number you can use `:bn` and buffer previous is `:bp`.

### Opening Additional Files for Editing

The `ex` command `:e` (short for edit) followed by a filename will open an additional file.

### Inserting an Entire File into Another

You need to open one file, move the cursor to the third line or whatever line you want and use the command `:r FILENAME` (short for read) to insert the specified file below the cursor position.
