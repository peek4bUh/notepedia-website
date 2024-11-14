---
draft: "true"
language: english
status: incomplete
tags: [wiki]
title: Connect to an Available Network in Linux
---

# Connect to an Available Network in Linux

Create a minimal config file inside `/etc/wpa_supplicant/wpa_supplicant.conf`

```
ctrl_interface=/run/wpa_supplicant
update_config=1
```

Now start _wpa_supplicant_ with:

```
root@linuxbox:~# wpa_supplicant -B -i wlan0 -c /etc/wpa_supplicant/wpa_supplicant.conf
```

Start the _wpa_cli_:

```
root@linuxbox:~# wpa_cli
```

Specify interface (if need it)

```
root@linuxbox:~# wpa_cli -i wlan0
```

Inside wpa_cli type:

```
> scan
OK
<3>CTRL-EVENT-SCAN-RESULTS
> scan_results
bssid / frequency / signal level / flags / ssid
00:00:00:00:00:00 2462 -49 [WPA2-PSK-CCMP][ESS] MYSSID
11:11:11:11:11:11 2437 -64 [WPA2-PSK-CCMP][ESS] ANOTHERSSID
```

To associate with `MYSSID`, add the network, set the credentials and enable it:

```
> add_network
0
> set_network 0 ssid "MYSSID"
> set_network 0 psk "passphrase"
> enable_network 0
<2>CTRL-EVENT-CONNECTED - Connection to 00:00:00:00:00:00 completed (reauth) [id=0 id_str=]
```

Finally save this network in the configuration file and quit _wpa_cli_:

```
> save_config
OK
> quit
```
