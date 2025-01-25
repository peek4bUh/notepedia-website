---
draft: "false"
status: ready
tags: [cheatsheet]
title: ping
---

# ping

```bash
# Ping to a host by ip
ping ip_address

# Ping a host only a specific number of times
ping -c <𝑪𝑶𝑼𝑵𝑻> <𝗛𝗢𝗦𝗧>

# Ping to a host, specifying the interval in
# seconds between requests (default is 1 second)
ping -i <𝗦𝗘𝗖𝗢𝗡𝗗𝗦> <𝗛𝗢𝗦𝗧>

# Ping to a host without trying to lookup symbolic
# names for addresses
ping -n <𝗛𝗢𝗦𝗧>

# Ping to a host and ring the bell when a packet
# is received (if your terminal supports it)
ping -a <𝗛𝗢𝗦𝗧>

# Display a message if no response was received
ping -O <𝗛𝗢𝗦𝗧>
```

## References

- tldr. _inbrowser.app_. (n.d.). [https://tldr.inbrowser.app/pages/common/ping](https://tldr.inbrowser.app/pages/common/ping)
