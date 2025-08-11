#!/usr/bin/bash

if [[ $# -ne 2 ]]; then
	echo "Usage: $0 <source.md> <destination.md>" >&2
	exit 1
fi

src="$1"
dst="$2"

#readarray -t wikiLinksWithPipe < <(grep -Eo '\[\[[^]|]+\|[^]]+\]\]' $src)
find ~/documents/notepedia-website/_notes/ -type f -name '000E.md'

# Convert wiki links with pipe to markdown
sed -i -E 's/\[\[([^|]+)\|([^]]+)\]\]/[\2](\1)/g' $dst

echo "${wikiLinksWithPipe[*]}"

echo "Done."
