#!/usr/bin/env bash
set -euo pipefail

PROJECT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$PROJECT_DIR"
mkdir -p public/media/estate public/media/art public/media/current-upgrades public/media/event-concepts public/media/vision-2027 public/media/video

if ! command -v ffmpeg >/dev/null 2>&1; then
  sudo apt-get update -qq
  sudo DEBIAN_FRONTEND=noninteractive apt-get install -y ffmpeg >/tmp/sunset-ffmpeg-install.log
fi

# Restored current-property masters. These preserve the real property while
# providing cleaner, higher-resolution files for large and high-density displays.
convert incoming-media/4k-masters/hardwood-kitchen.png -strip -quality 88 public/media/estate/hardwood-kitchen.webp
convert incoming-media/4k-masters/hardwood-fireplace-definitive.png -strip -quality 88 public/media/estate/hardwood-fireplace.webp
convert incoming-media/4k-masters/lawn-current.png -strip -quality 88 public/media/estate/lawn-current.webp
convert incoming-media/4k-masters/poolside-white-stucco.png -strip -quality 88 public/media/estate/poolside-white-stucco.webp
convert incoming-media/4k-masters/resort-pool-overview-v2.png -strip -quality 88 public/media/estate/resort-pool-overview.webp
convert incoming-media/4k-masters/evening-pool-spa.png -strip -quality 88 public/media/estate/evening-pool-spa.webp
convert incoming-media/4k-masters/evening-pool-close.png -strip -quality 88 public/media/estate/evening-pool-close.webp
convert incoming-media/4k-masters/evening-pool-lawn.png -strip -quality 88 public/media/estate/evening-pool-lawn.webp

# Completed current-property upgrades, shown as owner-supplied visualizations until photographed.
convert incoming-media/current-upgrades-refresh/scr-aerial-honey-gold-tv-wall.PNG -strip -resize '2200x2200>' -quality 87 public/media/current-upgrades/outdoor-screen.webp
convert incoming-media/current-upgrades-refresh/ficus_driveway_nightlights.PNG -strip -resize '2200x2200>' -quality 87 public/media/current-upgrades/illuminated-arrival.webp
convert incoming-media/current-upgrades-refresh/walkway-honey-gold-travertine.PNG -strip -resize '2200x2200>' -quality 87 public/media/current-upgrades/travertine-walkway.webp

# Installed artwork: clean owner-supplied room compositions.
convert incoming-media/4k-masters/glowing-beauty-floor-safe.png -strip -quality 87 public/media/art/glowing-beauty.webp
convert incoming-media/4k-masters/stairwell-trio-floor-safe.png -strip -quality 87 public/media/art/stairwell-trio.webp
convert incoming-media/art-collection/bunkhouse_primrose_mirror.png -strip -resize '1600x1600>' -quality 84 public/media/art/primrose-mirror.webp
convert incoming-media/art-collection/hallway_stingray_mockup.png -strip -resize '1600x1600>' -quality 84 public/media/art/stingray-hall.webp
convert incoming-media/4k-masters/jaws-bedroom-floor-corrected.png -strip -quality 87 public/media/art/jaws-bedroom.webp
convert incoming-media/art-collection/bunkhouse_niche_mockup.png -strip -resize '1600x1600>' -quality 84 public/media/art/art-niche.webp
convert incoming-media/art-collection/kitchen_column_mockup_reordered.png -strip -resize '1600x1600>' -quality 84 public/media/art/kitchen-column.webp
convert incoming-media/4k-masters/sofa-gallery-floor-safe.png -strip -quality 87 public/media/art/sofa-gallery.webp

# AI-assisted event styling concepts grounded in authentic property photographs.
convert incoming-media/event-concepts/lawn-wedding-concept.png -strip -resize '1800x1800>' -quality 85 public/media/event-concepts/lawn-wedding.webp
convert incoming-media/event-concepts/stucco-cocktails-concept.png -strip -resize '1800x1800>' -quality 85 public/media/event-concepts/stucco-cocktails.webp
convert incoming-media/event-concepts/evening-pool-concept.png -strip -resize '1800x1800>' -quality 85 public/media/event-concepts/evening-pool.webp

# Future vision: these assets are always paired with visible concept disclosures in the UI.
convert incoming-media/vision-2027/sunset_club_reoriented_overall_v2.png -strip -resize '1800x1800>' -quality 84 public/media/vision-2027/wellness-courtyard.webp
convert incoming-media/vision-2027/sunset_club_sauna_exit_view.png -strip -resize '1600x1600>' -quality 84 public/media/vision-2027/wellness-exit-view.webp

# Compress future-concept walkthrough without audio and with fast-start metadata.
VIDEO_TMP="public/media/video/wellness-concept-2027.tmp.mp4"
ffmpeg -y -i incoming-media/vision-2027/sunset_club_wellness_walkthrough_v2.mp4 \
  -an -vf "scale='min(1280,iw)':-2" -c:v libx264 -preset slow -crf 28 -movflags +faststart \
  "$VIDEO_TMP" >/tmp/sunset-ffmpeg.log 2>&1
mv -f "$VIDEO_TMP" public/media/video/wellness-concept-2027.mp4

# Authentic current-property lawn footage, optimized for muted inline playback.
LAWN_VIDEO_TMP="public/media/video/lawn-current.tmp.mp4"
ffmpeg -y -i incoming-media/property-refresh/indio_grass_only_enhanced.mp4 \
  -map 0:v:0 -c:v copy -an -movflags +faststart \
  "$LAWN_VIDEO_TMP" >/tmp/sunset-lawn-ffmpeg.log 2>&1
mv -f "$LAWN_VIDEO_TMP" public/media/video/lawn-current.mp4

printf 'MEDIA TOTALS\n'
du -sh public/media/*
printf '\nFINAL VIDEO\n'
ls -lh public/media/video/wellness-concept-2027.mp4
