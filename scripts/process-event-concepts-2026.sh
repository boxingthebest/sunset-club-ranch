#!/usr/bin/env bash
set -euo pipefail

PROJECT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
SRC="$PROJECT_DIR/incoming-media/event-concepts-2026"
OUT="$PROJECT_DIR/public/media/event-concepts"
mkdir -p "$OUT"

# These are AI-assisted event-styling concepts grounded in authentic Sunset Club
# Ranch photography. Originals remain private; active UI must keep the visible
# “Event styling concept” disclosure and must not present these as past events
# or an included decor, furniture, staffing, or service package.
export_concept() {
  local original="$1" name="$2" max_width="$3" quality="${4:-86}"
  test -s "$SRC/$original"
  convert "$SRC/$original" -auto-orient -strip -resize "${max_width}x${max_width}>" \
    -define webp:method=6 -quality "$quality" "$OUT/$name.webp"
}

export_concept wedding-event-hero-concept.png wedding-hero-blue-hour 2400 88
export_concept lawn-dinner-concept.png lawn-wedding-2026 1900 86
export_concept poolside-cocktails-concept.png poolside-cocktails-2026 2200 86

printf 'Published event styling concepts: '
find "$OUT" -maxdepth 1 -type f -name '*.webp' | wc -l
