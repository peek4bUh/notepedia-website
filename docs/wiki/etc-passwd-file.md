---
draft: "false"
language: english
parent: "[computing-moc](computing-moc.md)"
status: ready
tags: [wiki]
title: /etc/passwd File
---

# /etc/passwd File

The `/etc/passwd` file contains basic user attributes. This is an ASCII file that contains an entry for each user. Each entry defines the basic attributes applied to a user.

Attributes in an entry are separated by a colon (`:`). For this reason, you should not use a colon (`:`) in any attribute.

An entry in the `/etc/passwd` file has the following form:

```
Name:Password:UID:GID:GECOS:HomeDirectory:Shell
```

| Attribute                                    | Definition                                                                                                                                                                                                                                                                       |
| -------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <span class="highlight">Name</span>          | Is the user's login name. Each username must be a unique string on the machine. Maximum length to 32 characters.                                                                                                                                                                 |
| <span class="highlight">Password</span>      | This field is set to `x`, and the user password is stored in the `/etc/shadow` file.                                                                                                                                                                                             |
| <span class="highlight">UID</span>           | The user identifier is a number assigned to each user. It is used by the operating system to refer to a user.                                                                                                                                                                    |
| <span class="highlight">GID</span>           | The user’s group identifier number, referring to the user’s primary group. When a user creates a file , the file’s group is set to this group. Typically, the name of the group is the same as the name of the user. User’s secondary groups are listed in the /etc/groups file. |
| <span class="highlight">GECOS</span>         | General information about the user that is not needed by the system, such as an office or phone number, etc...                                                                                                                                                                   |
| <span class="highlight">HomeDirectory</span> | The full path name of the user's home directory. If the user does not have a defined home directory, the home directory of the guest user is used.                                                                                                                               |
| <span class="highlight">Shell</span>         | Specifies the initial program or shell that is executed after a user invokes the login command or su command. On most Linux distributions, the default login shell is Bash.                                                                                                      |

## References

- _IBM_. (n.d.). <span class="reference-title">/etc/passwd File</span>. [https://www.ibm.com/docs/en/aix/7.3?topic=files-etcpasswd-file](https://www.ibm.com/docs/en/aix/7.3?topic=files-etcpasswd-file)
- _Linuxize_. (2019, December 19). <span class="reference-title">Understanding the /etc/passwd File</span>. [https://linuxize.com/post/etc-passwd-file/](https://linuxize.com/post/etc-passwd-file/)

## See Also

- [/etc/shadow](/etc/shadow)
