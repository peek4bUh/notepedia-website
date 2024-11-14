---
draft: "true"
language: english
status: incomplete
tags: [wiki]
title: Connect to a Known SSID in Linux
---

# Connect to a Known SSID in Linux

## Manual

The `wpa_supplicant` requires a _root shell_:

```
# wpa_supplicant -B -i interface -c <(wpa_passphrase MYSSID passphrase)
```

Renew the ip addres (I think) to have internet:

```
# dhclient
```

https://stackoverflow.com/questions/63961142/what-does-dhclient-do

## At Boot

Inside the _root shell_ go to the `/etc` directory and type:

```bash
root@linuxbox:~$ wpa_passphrase "<𝑺𝑺𝑰𝑫>" "<𝑷𝑨𝑺𝑺𝑷𝑯𝑹𝑨𝑺𝑬>" > wpa_supplicant-wlan0.conf
```

Enable at start up:

```bash
root@linuxbox:~$ systemctl enable wpa_supplicant@wlan0.service
```

Enable now if you don't want to reboot the machine (need to renew ip address):

```bash
root@linuxbox:~$ systemctl start wpa_supplicant@wlan0.service
```
