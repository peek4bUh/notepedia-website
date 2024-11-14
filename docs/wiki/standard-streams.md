---
draft: "true"
language: english
status: incomplete
tags: [wiki]
title: Standard Streams
topic: "[Computer Programming](Computer%20Programming)"
---

# Standard Streams

**Standard streams** are interconnected input and output [communication channels](https://en.wikipedia.org/wiki/Communication_channel "Communication channel") between a computer program and its environment when it begins execution.

The three [input/output](https://en.wikipedia.org/wiki/Input/output "Input/output") (I/O) connections are called:

- [Standard Input](standard-input.md)
- [Standard Output](standard-output.md)
- [Standard Error](standard-error.md)

Originally I/O happened via a physically connected [system console](https://en.wikipedia.org/wiki/System_console "System console") (input via keyboard, output via monitor), but standard streams abstract this. When a command is executed via an interactive [Shell](shell.md), the streams are typically connected to the [text terminal](https://en.wikipedia.org/wiki/Text_terminal "Text terminal") on which the shell is running, but can be changed with [redirection](<https://en.wikipedia.org/wiki/Redirection_(computing)> "Redirection (computing)") or a [pipeline](<https://en.wikipedia.org/wiki/Pipeline_(Unix)> "Pipeline (Unix)"). More generally, a [child process](https://en.wikipedia.org/wiki/Child_process "Child process") inherits the standard streams of its [parent process](https://en.wikipedia.org/wiki/Parent_process "Parent process").

## References

- ["Standard streams"](https://en.wikipedia.org/wiki/Standard_streams), [Wikipedia](https://en.wikipedia.org/wiki/Main_Page)
