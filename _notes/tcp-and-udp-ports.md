---
draft: "false"
title: TCP and UDP Ports
---

# TCP and UDP Ports

| Port                    | UDP | TCP | Description              |
| ----------------------- | :-: | :-: | ------------------------ |
| 20                      | ❌  | ✔️  | FTP data transfer.       |
| 21                      | ❌  | ✔️  | FTP command control.     |
| [[20250211155211\|22]] | ❌  | ✔️  | [[secure-shell\|SSH]].   |
| [[20250211133139\|23]]       | ❌  | ✔️  | Telnet.                  |
| 25                      | ❌  | ✔️  | SMTP                     |
| [[20250211094233\|80]]         | ✔️  | ✔️  | HTTP                     |
| 161                     | ✔️  | ✔️  | SNMP                     |
| 389                     | ✔️  | ✔️  | LDAP                     |
| 306                     | ❌  | ✔️  | mariadb.                 |
| 445                     | ❌  | ✔️  | SMB.                     |
| 873                     | ❌  | ✔️  | rsync                    |
| 3389                    | ❌  | ✔️  | Remote Desktop Protocol. |
| 5985                    | ❌  |     | WinRM.                   |
| 6379                    | ❌  | ✔️  | Redis.                   |
| 27017                   | ❌  | ✔️  | MongoDB server.          |

## References

- [https://en.wikipedia.org/wiki/List_of_TCP_and_UDP_port_numbers](https://en.wikipedia.org/wiki/List_of_TCP_and_UDP_port_numbers)
- Academy, H. (n.d.). _HTB Academy : Cybersecurity Training_. [https://academy.hackthebox.com/module/77/section/724](https://academy.hackthebox.com/module/77/section/724)
- https://www.stationx.net/common-ports-cheat-sheet/
- https://web.archive.org/web/20240315102711/https://packetlife.net/media/library/23/common-ports.pdf

## See Also

- [[transmission-control-protocol|Transmission Control Protocol]]
- [[user-datagram-protocol|User Datagram Protocol]]
