---
parent: "[[20250219115814|*NIX]]"
title: DNS Reverse Lookup
---

# DNS Reverse Lookup

Replace first three octets of IP to set class C address to scan:

```bash
for ip in {1..254..1}; do dig -x 1.1.1.$ip | grep $ip >> dns.txt; done;
```
