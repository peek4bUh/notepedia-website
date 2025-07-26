---
draft: "true"
title: Magic SysRq Key
---

# Magic SysRq Key

It is a magical key combo you can hit which the kernel will respond to regardless of whatever else it is doing, unless it is completely locked up.

## How do I enable it?

You need to say yes to ‘Magic SysRq key (CONFIG_MAGIC_SYSRQ)’ when configuring the kernel. When running a kernel with SysRq compiled in, `/proc/sys/kernel/sysrq` controls the functions allowed to be invoked via the SysRq key. The default value in this file is set by the CONFIG_MAGIC_SYSRQ_DEFAULT_ENABLE config symbol, which itself defaults to `1`.

List of possible values in `/proc/sys/kernel/sysrq` file:

| Decimal | Hexadecimal | Function Description                                   |
| :-----: | :---------: | ------------------------------------------------------ |
|    0    |     0x0     | Disable sysrq completely.                              |
|    1    |     0x1     | Enable all functions of sysrq.                         |
|    2    |     0x2     | Enable control of console logging level.               |
|    4    |     0x4     | Enable control of keyboard (SAK, unraw).               |
|    8    |     0x8     | Enable debugging dumps of processes etc.               |
|   16    |    0x10     | Enable sync command.                                   |
|   32    |    0x20     | Enable remount read-only.                              |
|   64    |    0x40     | Enable signalling of processes (term, kill, oom-kill). |
|   128   |    0x80     | Allow reboot/poweroff.                                 |
|   256   |    0x100    | Allow nicing of all RT tasks.                          |

You can set the value in the file by the following command:

```bash
echo "number" > /proc/sys/kernel/sysrq
```

## References

- Mydraal. (2001, January 28). <span class="reference-title">Linux Magic System Request Key Hacks</span>. _The Linux Kernel  documentation_. (n.d.). [https://www.kernel.org/doc/html/v4.18/admin-guide/sysrq.html](https://www.kernel.org/doc/html/v4.18/admin-guide/sysrq.html)
