---
draft: "false"
status: ready
tags: [cheatsheet]
title: echo
---

# echo

```bash
# Print a text message (quotes are optional)
echo "message"

# Print a message with environment variables
echo "My shell is: $SHELL"

# Print a message without the trailing newline
echo -n "message"

# Append a message to the file
echo "message" >> 𝑓𝑖𝑙𝑒

# Enable interpretation of backslash escapes
# (special characters)
echo -e "Column1\tColumn2"

# Print the exit status of the last executed command
echo $?
```

## References

- _tldr InBrowser.App_. (n.d.). [https://tldr.inbrowser.app/pages/common/echo](https://tldr.inbrowser.app/pages/common/echo)

## Related

- David. (2008, September 17), & Yoo. (2009, August 12). <span class="reference-title">sudo echo “something” >> /etc/privilegedFile doesn’t work</span>. _Stack Overflow_. [https://stackoverflow.com/a/550808](https://stackoverflow.com/a/550808)
