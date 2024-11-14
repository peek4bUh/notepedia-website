---
draft: "true"
language: english
status: incomplete
tags: [wiki]
title: Networking
---

# Networking

## Examining and Monitoring a Network

### traceroute

The `traceroute` program lists all the _hops_ network traffic takes to get from the local system to a specified host.

```
traceroute slashdot.org
```

### ip

The `ip` command is a multipurpose network configuration tool that makes use of the full range of networking features available in modern Linux kernels. It replaces the earlier and now deprecated `ifconfig`. With `ip` you can examine a system's network interfaces and routing table.

The `lo` interface is the _loopback interface_, a virtual interface that the system uses to "talk to itself" and the second is called `eth0`, is the Ethernet interface.

### netstat

The `netstat` program is used to examine various networks settings and statistics. Using the `-ie` option, you can examine the networks interfaces in your system.

using the `-r` option will display the kernel's network routing table.

### Transporting Files over a Network

### ftp

`ftp` gets its name from the protocol it uses, the _File Transfer Protocol_. Ftp was once the most widely used method of downloading files over the Internet. Most, if not all, web browsers support it and you often see URIs starting with the protocol `ftp://`.

### lftp

It works much like the traditional ftp program but has many additional features including multiple-protocol support (including HTTP), automatic retry on failed downloads, background processes, tab completion of path names, etc...

## Secure Communication with Remote Hosts

### ssh

### scp and sftp

The openssh package also includes two programs that can make use of an SSH-encrypted tunned to copy files across the network.

## References

1. Shotts, W. (2019). _The Linux Command Line: Networking_ (2nd ed.). No Starch Press
