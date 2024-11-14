---
draft: "true"
language: english
status: incomplete
tags: [wiki]
title: Shell Wildcards
---

# Shell Wildcards

The **wildcards** are special characters used by the [Shell](shell.md) to specify groups of filenames. Using **wildcards** (which is also known as **globbing**) allows you to select filenames based on patterns of characters and makes it possible to construct sophisticated selections criteria for filenames.

**Wildcards** can be used with any command that accepts filenames as arguments.

## Wildcards

| **Wildcard**   | **Meaning**                                                       |
| -------------- | ----------------------------------------------------------------- |
| `*`            | Matches any character.                                            |
| `?`            | Matches any single character.                                     |
| `[characters]` | Matches any character that is a member of the set characters.     |
| `![chracters]` | Matches any character that is not a member of the set characters. |
| `[:class:](:class:)`  | Matches any character that is a member of the specified class.    |

## Commonly used Character Classes

| **Character Class** | **Meaning**                                                                                                                                                                                   |
| ------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `[:alnum:]`         | Matches any alphanumeric character.                                                                                                                                                           |
| `[:alpha:]`         | Matches any alphabetic character.                                                                                                                                                             |
| `[:digit:]`         | Matches any numeral.                                                                                                                                                                          |
| `[:lower:]`         | Matches any lowercase letter.                                                                                                                                                                 |
| `[:upper:]`         | Matches any uppercase letter.                                                                                                                                                                 |
| `[a-z]`             | Traditional Unix notation and older versions of Linux. They can still work but you have to be careful with them because they will not produce the expected result unless property configured. |
| `[A-Z]`             | Traditional Unix notation and older versions of Linux. They can still work but you have to be careful with them because they will not produce the expected result unless property configured. |

## Examples

| **Pattern**              | **Matches**                                                                    |
| ------------------------ | ------------------------------------------------------------------------------ |
| `*`                      | All files.                                                                     |
| `g*`                     | Any file beginning with `g`                                                    |
| `b*.txt`                 | Any file beginning with `b` followed by any characters and ending with `.txt`. |
| `Data???`                | Any file beginning with `Data` followed by exactly three characters.           |
| `[abc]*`                 | Any file beginning with either an `a`, `a b` or `c`.                           |
| `BACKUP.[0-9][0-9][0-9]` | Any file beginning with `BACKUP.` followed by exactly three numerals.          |
| `[:upper:](:upper:)*`           | Any file beginning with an uppercase letter.                                   |
| `[![:digit:]]*`          | Any file not beginning with a numeral.                                         |
| `*[[:lower:]123]`        | Any file ending with a lowercase letter or the numerals `1`, `2` or `3`.       |

## References

1. Shotts, W. (2019). _The Linux Command Line: Manipulating Files and Directories: Wildcards_ (2nd ed.). No Starch Press
