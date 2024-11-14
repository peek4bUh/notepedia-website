---
binaryType: brute-forcing
draft: "false"
language: english
status: ready
tags: [wiki, command-cheatsheet]
title: "gobuster: Cheatsheet"
---

# gobuster: Cheatsheet

> Directory/file & DNS busting tool.

```bash
# Discover directories and files that match in the wordlist
gobuster dir -w <𝗪𝗢𝗥𝗗𝗟𝗜𝗦𝗧_𝗣𝗔𝗧𝗛> -u <𝗜𝗣_𝗔𝗗𝗗𝗥𝗘𝗦𝗦>

# Discover directories and files that match in the wordlist
# but excluding files ending with the extension provided
gobuster dir -w <𝗪𝗢𝗥𝗗𝗟𝗜𝗦𝗧_𝗣𝗔𝗧𝗛> -u <𝗜𝗣_𝗔𝗗𝗗𝗥𝗘𝗦𝗦> -x <𝗘𝗫𝗧𝟭>,<𝗘𝗫𝗧𝟮>...

# Discover virtual hosts
gobuster vhost -w <𝗪𝗢𝗥𝗗𝗟𝗜𝗦𝗧_𝗣𝗔𝗧𝗛> -u <𝗜𝗣_𝗔𝗗𝗗𝗥𝗘𝗦𝗦>
```

## References

- 0ne-nine9. (n.d.). <span class="reference-title">Preignition Write-up</span>. _HTB Labs_. [https://app.hackthebox.com/starting-point](https://app.hackthebox.com/starting-point)
- 0ne-nine9. (n.d.). <span class="reference-title">Crocodile Write-up</span>. _HTB Labs_. [https://app.hackthebox.com/starting-point](https://app.hackthebox.com/starting-point)

## See Also

- [wfuzz](wfuzz)
- [feroxbuster](feroxbuster)
