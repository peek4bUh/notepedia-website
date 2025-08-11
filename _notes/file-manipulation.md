---
parent: "[[20250219115814|*NIX]]"
title: File Manipulation
---

# File Manipulation

```bash
# Compare files
diff <FILEPATHA> <FILEPATHB>

# Force recursive deletion of directory
rm -rf <DIR_PATH>

# Secure file deletion
shred -f -u <FILE_PATH>

# Modify timestamp to match another file
touch -r <ORIGINALFILEPATH> <MODFILEPATH>

# Modify file timestamp
touch -t <YYYMMDDHHMM> <FILE_PATH>

# Count lines containing specific string
grep -c "<STRING>" <FILE_PATH>

# Convert Linux formatted file to Windows
# compatible text file
dos2unix <FILE_PATH>

# Search current and all subdirs for all
# files ending with a specific extension
find . -type f -name "*.<FILE_EXTENSION>"

# Search all files (binary and regular files)
# in current and all subdirs for a case
# sensitive phrase
grep -Ria "<SEARCH_PHRASE>"

# Return the line count of a file
wc -l <FILE_PATH>

# Search for setuid files
find / -perm -4000 -exec ls -ld {} \;

# Determine file type
file <FILE_PATH>

# Set/Unset immutable file
chattr +i <FILE_PATH>
chattr -i <FILE_PATH>

# Generate random file (e.g, 3M file)
dd if=/dev/urandom of=<OUTPUTFILEPATH> bs=3145728 count=100
```
