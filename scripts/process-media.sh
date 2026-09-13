#!/usr/bin/env bash
set -euo pipefail

PROJECT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$PROJECT_DIR"
mkdir -p public/media/estate public/media/art public/media/current-upgrades public/media/event-concepts public/media/vision-2027 public/media/video

SOURCE_COMMIT="de87c05a33200dcb53574bceaa197fd7a38d3fba"
TMP_DIR="$(mktemp -d)"
trap 'rm -rf "$TMP_DIR"' EXIT

if ! command -v ffmpeg >/dev/null 2>&1; then
  sudo apt-get update -qq
  sudo DEBIAN_FRONTEND=noninteractive apt-get install -y ffmpeg >/tmp/sunset-ffmpeg-install.log
fi

# Authentic property photography recovered directly from repository history.
# The old hero file is intentionally excluded because it was not verified as
# current Sunset Club Ranch imagery during visual QA.
for i in $(seq 1 20); do
  printf -v n '%02d' "$i"
  git show "$SOURCE_COMMIT:public/images/property-$i.jpg" > "$TMP_DIR/property-$i.jpg"
  convert "$TMP_DIR/property-$i.jpg" -strip -resize '1400x1400>' -quality 82 "public/media/estate/estate-$n.webp"
done

# Current owner-supplied interiors showing the finished hardwood-floor renovation.
convert incoming-media/current-interiors/hardwood-kitchen-original.png -strip -resize '1800x1800>' -quality 86 public/media/estate/hardwood-kitchen.webp
convert incoming-media/current-interiors/hardwood-fireplace-current.png -strip -resize '1800x1800>' -quality 86 public/media/estate/hardwood-fireplace.webp
convert incoming-media/property-refresh/instagram_lush_green_lawn.png -strip -resize '1800x1800>' -quality 86 public/media/estate/lawn-current.webp
convert incoming-media/current-exteriors/poolside-white-stucco-current.png -strip -resize '1800x1800>' -quality 86 public/media/estate/poolside-white-stucco.webp
convert incoming-media/current-exteriors/resort-pool-screenshot.png -fuzz 3% -trim +repage -strip -resize '1800x1800>' -quality 86 public/media/estate/resort-pool-overview.webp
convert incoming-media/current-exteriors/evening-pool-spa-current.png -fuzz 3% -trim +repage -strip -resize '1800x1800>' -quality 86 public/media/estate/evening-pool-spa.webp
convert incoming-media/current-exteriors/evening-pool-pair-current.png -crop 1320x770+0+0 +repage -fuzz 3% -trim +repage -strip -resize '1800x1800>' -quality 86 public/media/estate/evening-pool-close.webp
convert incoming-media/current-exteriors/evening-pool-pair-current.png -crop 1320x950+0+794 +repage -fuzz 3% -trim +repage -strip -resize '1800x1800>' -quality 86 public/media/estate/evening-pool-lawn.webp

# Completed current-property upgrades, shown as owner-supplied visualizations until photographed.
convert incoming-media/current-upgrades/tv-wall-aerial.png -strip -resize '1800x1800>' -quality 85 public/media/current-upgrades/outdoor-screen.webp
convert incoming-media/current-upgrades/arrival-night.png -strip -resize '1800x1800>' -quality 85 public/media/current-upgrades/illuminated-arrival.webp
convert incoming-media/current-upgrades/travertine-walkway.png -strip -resize '1600x1600>' -quality 85 public/media/current-upgrades/travertine-walkway.webp

# Installed artwork: clean owner-supplied room compositions.
convert incoming-media/art-collection/bunkhouse_hallway_glowing_beauty.png -strip -resize '1600x1600>' -quality 84 public/media/art/glowing-beauty.webp
convert incoming-media/art-collection/stairwell_trio_mockup.png -strip -resize '1600x1600>' -quality 84 public/media/art/stairwell-trio.webp
convert incoming-media/art-collection/bunkhouse_primrose_mirror.png -strip -resize '1600x1600>' -quality 84 public/media/art/primrose-mirror.webp
convert incoming-media/art-collection/hallway_stingray_mockup.png -strip -resize '1600x1600>' -quality 84 public/media/art/stingray-hall.webp
convert incoming-media/art-collection/bedroom6_jaws_mockup.png -strip -resize '1600x1600>' -quality 84 public/media/art/jaws-bedroom.webp
convert incoming-media/art-collection/bunkhouse_niche_mockup.png -strip -resize '1600x1600>' -quality 84 public/media/art/art-niche.webp
convert incoming-media/art-collection/kitchen_column_mockup_reordered.png -strip -resize '1600x1600>' -quality 84 public/media/art/kitchen-column.webp
convert incoming-media/art-collection/bh_sofa_mockup_final.png -strip -resize '1600x1600>' -quality 84 public/media/art/sofa-gallery.webp

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
