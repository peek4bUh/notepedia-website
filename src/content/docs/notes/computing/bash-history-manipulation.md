---
parent: "[[20250219115814|*NIX]]"
title: Bash History Manipulation
---

# Bash History Manipulation

```bash
# Clear auth.log
echo > /var/log/auth.log

# Clear current user Bash history
echo > ~/.bash_history

# Delete .bash_history file
rm ~/.bash_history

# Clear current session history
history -c

# Set history max lines to 0
export HISTFILESIZE=0

# Set history max commands to 0
export HISTSIZE=0

# Disable history loggin (need to
# logout to take effect)
unset HISTFILE

# Kills current session
kill -9 $$

# Permanently send all Bash history
# commands to /dev/null
ln -sf /dev/null ~/.bash_history
```
