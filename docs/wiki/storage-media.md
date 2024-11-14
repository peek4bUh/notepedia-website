---
draft: "true"
language: english
status: incomplete
tags: [wiki]
title: Storage Media
---

# Storage Media

## Mounting and Unmounting Storage Media

The first step in managing a storage device is attaching the device to the file system tree. This process, called mounting, allows the device to interact with the operating system. Unix -like operating systems (like Linux) maintain a single file system tree with devices attached at various points.

A file named `/etc/fstab` (short for file system table) lists the devices (typically hard disk partitions) that are to be mounted at boot time.

| **Field** | **Contents**     | **Description**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --------- | ---------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1         | Device           | Traditionally, this field contains the actual name of a device file associated with the physical device, such as `/dev/sda1` (the first partition of the first detected hard disk). But with today's computers, which have many devices that are hot pluggable (like USB drives), many modern Linux distributions associate a device with a text label instead. This label (which is added to the storage media when it is formatted) can be either a simple text or a randomly generated UUID (Universally Unique Identifier). This label is read by the operating system when the device is attached to the system. That way, no matter which device file is assigned to the actual physical device, it can still be correctly identified. |
| 2         | Mount point      | The directory where the device is attached to the file system tree.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 3         | File system type | Linux allows many file system types to be mounted. Most native Linux file systems are Fourth Extended File System (ext4), but many others are supported, such as FAT16 (msdos), FAT32 (vfat), NTFS (ntfs), etc.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 4         | Options          | File systems can be mounted with various options. It is posible, for example, to mount file systems as read-only or to prevent any programs from being executed from them (a useful security feature for removable media).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 5         | Frequency        | A single number that specifies if and when a file system is to be backed up with the `dump` comand.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 6         | Order            | A single number that specifies in what order file systems should be checked with the `fsck` command.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |

## Viewing a List of Mounted File Systems

The [mount](mount) command is used to mount file systems. Entering the command without arguments will display a list of the file systems currently mounted.

The format of the listing is as follows: `device on mount_point type filesystem_type (options)`.

The first step is to create a new `mount point` for the disk. A mount is simply a directory somewhere on the file system tree. There's nothing special about it. It doesn't even have to be an empty directory, though if you mount a device on a non-empty directory, you will not be able to see the directory's previous contents until you unmount the device.

## Determining Device Names

First, let's look at how the system names devices within the `/dev` directory (where all devices live), you can see that there are lots and lots of devices.

| **Pattern** | **Device**                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `/dev/fd*`  | Floppy disk drives.                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| `/dev/hd*`  | IDE (PATA) disks on older systems. Typical motherboards contain two IDE connectors or channels, each with two attachment points for drives. The first drive on the cable is called the master device and the second is called the slave device. The device names are ordered such that `/dev/hda` refers to the master on the first channel; `/dev/hdc` is the master device on the second channel and so on. A trailing digit indicates the partition number on the device. |
| `/dev/lp*`  | Printers.                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| `/dev/sd*`  | SCSI disks. On modern Linux systems, the kernel treats all disk-like devices (including PATA/SATA hard disks, flash drives and USB mass storage devices such as portable music players and digital cameras) as SCSI disks. The rest of the naming system is similar to the older `/dev/hd*` naming scheme previously described.                                                                                                                                              |
| `/dev/sr*`  | Optical drives (CD/DVD readers and burners).                                                                                                                                                                                                                                                                                                                                                                                                                                 |

In addition, you often see symbolic links such as `/dev/cdrom`, `/dev/dvd` and `/dev/floppy`, which point to the actual device files, provided as a convenience.

## References

1. Shotts, W. (2019). _The Linux Command Line: Storage Media_ (2nd ed.). No Starch Press