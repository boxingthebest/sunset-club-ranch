#!/usr/bin/env bash
set -euo pipefail

PROJECT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
SRC="$PROJECT_DIR/incoming-media/october-2026"
OUT="$PROJECT_DIR/public/media/october-2026"
mkdir -p "$OUT"

# Source originals stay in ignored incoming-media. Do not synthesize new
# architecture, amenities, people, or flooring when exporting web images.
export_photo() {
  local original="$1" name="$2" max_width="$3" quality="${4:-85}"
  test -s "$SRC/$original"
  convert "$SRC/$original" -auto-orient -strip -resize "${max_width}x${max_width}>" \
    -define webp:method=6 -quality "$quality" "$OUT/$name.webp"
}

# Owner-supplied current property photography.
export_photo sunset_club_ranch_cover_photo_4k_no_lower_left_plants.jpg cover-aerial 3200 85
export_photo sunset_club_ranch_cover_photo_4k_no_lower_left_plants.jpg cover-aerial-mobile 1200 83
export_photo sunset_club_ranch_dining_game_room_4k_airbnb.jpg dining-game-room 2400
export_photo sunset_club_ranch_recreation_area_volleyball_4k_airbnb.jpg recreation-courts 2400
export_photo sunset_club_ranch_04_front_entry_dusk_4k_airbnb.jpg front-entry-dusk 2400
export_photo sunset_club_ranch_05_yard_bar_pingpong_dusk_4k_airbnb.jpg yard-bar-dusk 2400
export_photo sunset_club_ranch_06_fireplace_lounge_dusk_4k_airbnb.jpg fireplace-lounge-dusk 2400

# Keep the current living-room original private because its sofa has since
# changed; publish only the explicitly labeled, sofa-only styling edit.
export_photo living-room-sofa-styling-concept.png living-room-sofa-study 1722

# The four other supplied patio/pizza/fireplace shots show the older stone
# treatment; preserve their originals, but do not publish them as current views.

# Owner-provided visualizations, not documentary photographs. Label in the UI.
export_photo sunset_club_ranch_cl7g_sauna_hero_subtle_plants.png sauna-design-study 2176
export_photo Sunset_Club_Ranch_Driveway_Ficus_Palm_Layout_Day_v2.png arrival-day-study 2176
export_photo Sunset_Club_Ranch_Driveway_Ficus_Palm_Layout_Night_v2.png arrival-night-study 2176

rm -f "$OUT/outdoor-kitchen-day.webp" "$OUT/pizza-oven-bocce.webp" \
  "$OUT/outdoor-kitchen-dusk.webp" "$OUT/fireplace-pingpong-day.webp"

printf 'Published October images: '
find "$OUT" -maxdepth 1 -type f -name '*.webp' | wc -l
du -sh "$OUT"
