---
draft: "false"
language: english
status: ready
tags: [wiki, command-cheatsheet]
title: "redis-cli: Cheatsheet"
---

# redis-cli: Cheatsheet

> Command-line client to redis-server.

```bash
# Connect to the redis server
redis-cli -h <𝗜𝗣_𝗔𝗗𝗗𝗥𝗘𝗦𝗦>

# Select the specified logical database
select <𝗗𝗕_𝗜𝗡𝗗𝗘𝗫>

# List all the keys present in the database
keys *

# View the values stored for a corresponding key
get <𝗞𝗘𝗬>
```

## References

- dotguy. (n.d.). <span class="reference-title">Redeemer Write-up</span>. _HTB Labs_. [https://app.hackthebox.com/starting-point](https://app.hackthebox.com/starting-point)
