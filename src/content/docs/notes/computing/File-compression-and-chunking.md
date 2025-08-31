---
parent: "[[20250219115814|*NIX]]"
title: File Compression & Chunking
---

# File Compression & Chunking

```bash
# Pack/Unpack (archive) files using tar
tar -cf <OUTPUTFILE>.tar <INPUTPATH>
tar -xf <FILE_PATH>.tar

# Compress/Extract a .gz file using tar
tar -czf <OUTPUTFILE>.tar.gz <INPUTPATH>
tar -xzf <FILE_PATH>.tar.gz

# Compress/Extract a .bz2 file using tar
tar -cjf <OUTPUTFILE>.tar.bz2 <INPUTPATH>
tar -xjf <FILE_PATH>.tar.bz2

# Compress/Extract using zip
zip -r <OUTPUTFILE>.zip <INPUTPATH>
```
