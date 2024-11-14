---
draft: "true"
language: english
status: incomplete
tags: [wiki]
title: Permissions
---

# Permissions

User accounts are defined in the `/etc/passwd` file and groups are defined in the `/etc/group` file. When user accounts and groups are created, these files are modified along with `/etc/shadow`, which holds information about the user's password . For each user account, the `/etc/passwd` file defines the user (login) name, uid, gid, account's real name, home directory and login shell.

While many Unix-like systems assign regular users ti a common group such as `users` , modern Linux practice is to create a unique, single-member group with the same name as the user. This makes certain types of permission assignment easier.

## Reading, Writing and Executing

Access rights to files and directories are defined in terms of _read access_, _write access_ and _execution access_. If you look at the output of the [ls](ls.md) command you can get some clue as to how this is implemented.

```
[tux@linuxbox ~]$ > foo.txt
[tux@linuxbox ~]$ > ls -l foo.txt
-rw-rw-r-- 1 tux tux 0 2018-03-06 14:52 foo.txt
```

The first 10 characters of the listing are the _file attributes_. The first of these characters is the _file type_.

| **Attribute** | **File type**                                                                                                                                                                                            |
| :-----------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|      `-`      | A regular file.                                                                                                                                                                                          |
|      `d`      | A directory.                                                                                                                                                                                             |
|      `l`      | A symbolic link. Notice that with symbolic links, the remaining file attributes are always `rxwrxwrxw` and are dummy values. The real file attributes are those of the file the symbolic link points to. |
|      `c`      | A character special file. This file type refers to a device that handles data as a stream of bytes, such as a terminal or `/dev/null`.                                                                   |
|      `b`      | A block special file. This file type refers to a device that handles data in blocks, such as a hard drive or DVD drive.                                                                                  |

The remaining nine characters of the file attributes, called the _file mode_, represent the read, write and execute permissions for the file's owner, the file's group and everybody else.

| Owner | Group | World |
| ----- | ----- | ----- |
| `rwx` | `rwx` | `rwx` |

This table documents the effect that `r`, `w` and `x` mode attributes have when set on files and directories.

| **Attribute** | **Files**                                                                                                                                                                                      | **Directories**                                                                                          |
| ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `r`           | Allows a file to be opened and read.                                                                                                                                                           | Allows a directory's contents to be listed if the execute attribute is also set.                         |
| `w`           | Allows a file to be written to or truncated; however, this attribute does not allow files to be renamed or deleted. The ability to delete or rename files is determined by rectory attributes. | Allows files within a directory to be created, deleted and renamed if the execute attribute is also set. |
| `x`           | Allows a file to be treated as a program and executed. Program files written is scripting languages must also be set as readable to be executed.                                               | Allows a directory to be entered, e.g, `cd directory`.                                                   |

## chmod: Change File Mode

Only the file's owner or the superuser can change the mode of a file or directory. **chmod** supports two ways of specifying mode changes:

- Octal number representation
- Symbolic representation

### Octal notation

With octal notation, you can use octal numbers to set the pattern of desired permissions. Because each digit in an octal number represents three binary digits, this maps nicely to the scheme used to store the file mode.

| **Octal** | **Binary** | **File mode** |
| --------- | ---------- | ------------- |
| `0`       | `000`      | `---`         |
| `1`       | `001`      | `--x`         |
| `2`       | `010`      | `-w-`         |
| `3`       | `011`      | `-wx`         |
| `4`       | `100`      | `r--`         |
| `5`       | `101`      | `r-x`         |
| `6`       | `110`      | `rw-`         |
| `7`       | `111`      | `rwx`         |

By using three octal digits, you can set the file mode for the owner, group and world.

```
[tux@linuxbox ~]$ > foo.txt
[tux@linuxbox ~]$ ls -l foo.txt
-rw-rw-r-- 1 tux tux 0 2018-03-06 14:52 foo.txt
[tux@linuxbox ~]$ chmod 600 foo.txt
[tux@linuxbox ~]$ ls -l foo.txt
-rw------- 1 tux tux 0 2018-03-06 14:52 foo.txt
```

By passing the argument `600`, you are able to set the permissions of the owner to read and write while removing all permissions from the group owner and world.

### Symbolic notation

_chmod_ also supports a symbolic notation for specifying file modes. Symbolic notation is divided into three parts:

- Who the change will affect
- Which operation will be performed
- What permission will be set

To specify who is affected, a combination of the characters `u`, `g`, `o` and `a` is used.

| **Symbol** | **Meaning**                                                 |
| ---------- | ----------------------------------------------------------- |
| `u`        | Short for _user_ but means the file or directory owner.     |
| `g`        | Group owner.                                                |
| `o`        | Short for _others_ but means world.                         |
| `a`        | Short for _all_. This is a combination of `u`, `g` and `o`. |

If no character is specified, _all_ will be assumed. The operation may be `a+` indicating that a permission is to be added, `a-` indicating that a permission is to be taken away , or `a=` indicating that only the specified permissions are to be applied and that all others are to be removed. Permissions are specified with the `r`, `w` and `x` characters.

| **Notation** | **Meaning**                                                                                                                                                                   |
| ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `u+x`        | Add execute permission for the owner.                                                                                                                                         |
| `u-x`        | Remove execute permission from the owner.                                                                                                                                     |
| `+x`         | Add execute permission for the owner, group and world. This is equivalent to `a+x`.                                                                                           |
| `o-rw`       | Remove the read and write permissions from anyone besides the owner and group owner.                                                                                          |
| `go=rw`      | Set the group owner and anyone besides the owner to have read and write permissions. If either the group owner or the world previously had execute permission, it is removed. |
| `u+x,go=rx`  | Add execute permission for the owner and set the permissions for the group and others to read and execute. Multiple specifications may be separated by commas.                |

**Symbolic notations** does offer the advantage of allowing you to set a single attribute without disturbing any of the others.

### umask: Set Default Permissions

The [umask: Reference](umask-reference) command controls the default permissions given to a file when it is created. It uses octal notation to express a _mask_ of bits to be removed from a file's mode attributes.

```
[tux@linuxbox ~]$ rm -f foo.txt
[tux@linuxbox ~]$ umask
0002
[tux@linuxbox ~]$ > foo.txt
-rw-rw-r-- 1 tux tux 0 2018-03-06 14:52 foo.txt
```

First remove any old copy of `foo.txt` to make sure you are starting fresh. Next, you run the [umask: Reference](umask-reference) command without an argument to see the current value. It responded with the value `0002` (the value `0022` is another common default value), which is the octal representation of my mask. Next I create a new instance of the file `foo.txt` and observe its permissions.

You can see that both the owner and group get read and write permission, while everyone else gets only read permission. The reason that world does not have write permission is because of the value of the mask.

Let's repeat the example, this time setting another mask.

```
[tux@linuxbox ~]$ rm foo.txt
[tux@linuxbox ~]$ umask 0000
[tux@linuxbox ~]$ > foo.txt
-rw-rw-rw- 1 tux tux 0 2018-03-06 14:52 foo.txt
```

When you set the mask to `0000` (effectively turning it off), you see that the file is now world writable. To understand how this works, you have to look at octal numbers again. If you take the mask , expand it into binary and then compare it to the attributes, you can see what happens.

| **Original file mode** |     **Mask**      |    **Result**     |
| :--------------------: | :---------------: | :---------------: |
|   `--- rw- rw- rw-`    | `000 000 000 010` | `--- rw- rw- r--` |

Where the `1` appears in the mask, an attribute was removed in this case, the world write permission. That's what the mask does. Everywhere a `1` appears in the binary value of the mask, an attribute is unset.

If you look at a mask value of `0022`, you can see what it does.

| **Original file mode** |     **Mask**      |    **Result**     |
| :--------------------: | :---------------: | :---------------: |
|   `--- rw- rw- rw-`    | `000 000 010 010` | `--- rw- r-- r--` |

If you look at a mask value of `7777`, you can see what is does.

| **Original file mode** |     **Mask**      |    **Result**     |
| :--------------------: | :---------------: | :---------------: |
|   `--- rw- rw- rw-`    | `000 111 111 111` | `--- --- --- ---` |

#### Some Special Permissions

You usually see an octal permission mask expressed as a three digit number but it is more technically correct to express it in four digits because in addition to read, write and execute permissions there are some other, less used, permissions settings.

The first of these is the _setuid bit_ (octal 4000). When applied to an executable file, it changes the _effective user_ ID from that of the real user (the user actually running the program) to that of the program's owner.

Most often this is given to a few programs owned by the superuser. When an ordinary user runs a program that is _setuid root_, the program runs with the effective privileges of the superuser. This allows the program to access files and directories that an ordinary user would normally be prohibited from accessing. Clearly, because this raises security concerns, the number of _setuid_ programs must be held to an absolute minimum.

The second less used setting is the _setgid bit_ (octal 2000), which, like the _setuid bit_, changes the _effective group_ ID from the _real group_ ID of the real user to that of the file owner. If the setgid is set on a directory, newly created files in the directory will be given the group ownership of the directory rather the group ownership of the file's creator. This is useful in a shared directory when members of a common group need access to all the files in the directory, regardless of the file owner's primary group.

The third is called the _sticky bit_ (octal 1000). This is a holdover from ancient Unix, where it was possible to mark an executable file as _not swappable_. On files, Linux ignores the _sticky bit_, but if applied to a directory, it prevents users from deleting or renaming files unless the user is either the owner of the directory, the owner of the file or the superuser.

This is often used to control access to a shared directory, such as `/tmp`

Here are some examples of using [chmod: Reference](chmod-reference) with symbolic notation to set this special permissions.

First, here's an example of assigning setuid to a program.

```
[tux@linuxbox ~]$ chmod u+s program
[tux@linuxbox ~]$ ls -l program
-rwsr-xr-x 1 tux tux 0 2018-03-06 14:52 program
```

Example of assigning setgid to a directory:

```
[tux@linuxbox ~]$ chmod g+s dir
[tux@linuxbox ~]$ ls -l dir
drwxrwsr-x 1 tux tux 0 2018-03-06 14:52 dir
```

Another example of assigning the sticky bit to a directory:

```
[tux@linuxbox ~]$ chmod +t dir
[tux@linuxbox ~]$ ls -l dir
drwxrwxrwxt 1 tux tux 0 2018-03-06 14:52 dir
```

## Changing Identities

There are three ways to take on an alternate identity.

1. Log out and log back in as the alternate user.
2. Use the [su: Reference](su-reference) command.
3. Use the [sudo: Reference](sudo-reference) command.

The [sudo: Reference](sudo-reference) command allows an administrator to set up a configuration file called `/etc/sudores` and define specific commands that particular users are permitted to execute under an assumed identity.

## Exercising Out Privileges

The solution to a common problem, setting up a shared directory.

Let's imagine that you have two users named `bill` and `karen`. They both have music collections and want to set up a shared directory, where they will each store their music files as `ogg` or `mp3`. User `bill` has access to superuser privileges via [sudo: Reference](sudo-reference).

The first thing that needs to happen is a group needs to be created that will have both `bill` and `karen` as members. Using the graphical user management tool, `bill` creates a group called `music` and adds the user `bill` and `karen` to it.

Next, `bill` creates the directory for the music files.

```
[bill@linuxbox ~]$ sudo mkdir /usr/local/share/Music
Password:
```

Because `bill` is manipulating files outside his home directory, superuser privileges are required. After the directory is created, it has the following ownerships and permissions:

```
[bill@linuxbox ~]$ ls -ld /usr/local/share/Music
drwxr-xr-x 2 root root 4096 2028-03-21 18:05 /usr/local/share/Music
```

As we can see, the directory is owned by root and has permission mode `755`. To make this directory sharable, `bill` needs to change the group ownership and the group permissions to allow writing.

```
[bill@linuxbox ~]$ sudo chown :music /usr/local/share/Music
[bill@linuxbox ~]$ sudo chmod 755 /usr/local/share/Music
[bill@linuxbox ~]$ ls -ld /usr/local/share/Music
drwxr-xr-x 2 root music 4096 2028-03-21 18:05 /usr/local/share/Music
```

What does this all mean? It means that you now have a directory, `/usr/local/share/Music`, that is owned by `root` and allows read and write access to group `music`. Group `music` has members `bill` and `karen`; thus, `bill` and `karen` can create files in directory `/usr/local/share/Music`. Other users can list
the contents of the directory but cannot create files there.

But you still have a problem. With the current permissions, files and directories created within the `Music` directory will have the normal permissions of the users `bill` and `Karen`.

```
[bill@linuxbox ~]$ > /usr/local/share/Music/test_file
[bill@linuxbox ~]$ ls -ld /usr/local/share/Music
-rw-r--r-- 1 bill bill 4096 2028-03-21 18:05 test_file
```

Actually there are two problems. First, the default [umask: Reference](umask-reference) on this system is `0022`, which prevents group members from writing files belonging to other members of the group. This would not be a problem if the shared directory contained only files, but this directory will store music and music is usually organized in a hierarchy of artists and albums, members of the group will need the ability to create files and directories inside directories created by other members. You need to change the [umask: Reference](umask-reference) used by `bill` and `karen` to `0022` instead.

Second, each file and directory created by one member, will be set to the primary group of the user rather than the group `music`. This can be fixed by setting the setgid bit on the directory.

```
[bill@linuxbox ~]$ sudo chmod g+s /usr/local/share/Music
[bill@linuxbox ~]$ ls -ld /usr/local/share/Music
drwxrwsr-x 2 root bill 4096 2028-03-21 18:05 /usr/local/share/Music
```

Now you test to see whether the new permissions fix the problem, `bill` sets his [umask: Reference](umask-reference) to `0022`, removes the previous test file and creates a new test file and directory.

```
[bill@linuxbox ~]$ umask 0002
[bill@linuxbox ~]$ rm /usr/local/share/Music/test_file
[bill@linuxbox ~]$ > /usr/local/share/Music/test_file
[bill@linuxbox ~]$ mkdir /usr/local/share/Music/test_dir
[bill@linuxbox ~]$ ls -l /usr/local/share/Music
drwxrwsr-x 2 root  bill   4096 2028-03-21 18:05 /usr/local/share/Music
-rw-rw-r-- 1 bill  music     0 2028-03-21 18:05 /usr/local/share/Music
[bill@linuxbox ~]$
```

Both files and directories are now created with the correct permissions to allow all members of the group `music` to create files and directories inside the `Music` directory.

The one remaining issue is [umask: Reference](umask-reference). The necessary setting lasts only until the end of session and must be reset.

## References

1. Shotts, W. (2019). _The Linux Command Line: Permissions_ (2nd ed.). No Starch Press
