---
draft: "false"
language: english
status: ready
tags: [wiki, command-cheatsheet]
title: "mysql: Cheatsheet"
---

# mysql: Cheatsheet

> The MariaDB command-line tool (mysql is now a symlink to mariadb)

```bash
# Connect to a host with an username
mysql -h <𝗜𝗣_𝗔𝗗𝗗𝗥𝗘𝗦𝗦> -u <𝗨𝗦𝗘𝗥𝗡𝗔𝗠𝗘>

# Connect to a host with root
mysql -h <𝗜𝗣_𝗔𝗗𝗗𝗥𝗘𝗦𝗦> -u root

# -- INSIDE DB --
# Prints out the databases we can access.
SHOW databases;

# Set to use the database named {database_name}.
USE <𝗗𝗕_𝗡𝗔𝗠𝗘>;

# Prints out the available tables inside the current database.
SHOW tables;

# Prints out all the data from the table {table_name}.
SELECT * FROM <𝗧𝗔𝗕𝗟𝗘_𝗡𝗔𝗠𝗘>;
```

## References

- 0ne-nine9, & ilinor. (n.d.). <span class="reference-title">Sequel Write-up</span>. _HTB Labs_. [https://app.hackthebox.com/starting-point](https://app.hackthebox.com/starting-point)
