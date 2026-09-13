#!/usr/bin/env bash
set -euo pipefail

PROJECT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$PROJECT_DIR"
mkdir -p public/media/estate public/media/art public/media/vision-2027 public/media/video

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

# Installed artwork: clean owner-supplied room compositions.
convert incoming-media/art-collection/bunkhouse_hallway_glowing_beauty.png -strip -resize '1600x1600>' -quality 84 public/media/art/glowing-beauty.webp
convert incoming-media/art-collection/stairwell_trio_mockup.png -strip -resize '1600x1600>' -quality 84 public/media/art/stairwell-trio.webp
convert incoming-media/art-collection/bunkhouse_primrose_mirror.png -strip -resize '1600x1600>' -quality 84 public/media/art/primrose-mirror.webp
convert incoming-media/art-collection/hallway_stingray_mockup.png -strip -resize '1600x1600>' -quality 84 public/media/art/stingray-hall.webp
convert incoming-media/art-collection/bedroom6_jaws_mockup.png -strip -resize '1600x1600>' -quality 84 public/media/art/jaws-bedroom.webp
convert incoming-media/art-collection/bunkhouse_niche_mockup.png -strip -resize '1600x1600>' -quality 84 public/media/art/art-niche.webp
convert incoming-media/art-collection/kitchen_column_mockup_reordered.png -strip -resize '1600x1600>' -quality 84 public/media/art/kitchen-column.webp
convert incoming-media/art-collection/bh_sofa_mockup_final.png -strip -resize '1600x1600>' -quality 84 public/media/art/sofa-gallery.webp

# Future vision: these assets are always paired with visible concept disclosures in the UI.
convert incoming-media/vision-2027/sunset_club_reoriented_overall_v2.png -strip -resize '1800x1800>' -quality 84 public/media/vision-2027/wellness-courtyard.webp
convert incoming-media/vision-2027/sunset_club_sauna_exit_view.png -strip -resize '1600x1600>' -quality 84 public/media/vision-2027/wellness-exit-view.webp
convert incoming-media/property-refresh/scr-aerial-honey-gold-tv-wall.png -strip -resize '1800x1800>' -quality 84 public/media/vision-2027/estate-evolution-aerial.webp
convert incoming-media/property-refresh/walkway-honey-gold-travertine.png -strip -resize '1800x1800>' -quality 84 public/media/vision-2027/recreation-walkway.webp
convert incoming-media/property-refresh/ficus_driveway_visualization.png -strip -resize '1600x1600>' -quality 84 public/media/vision-2027/arrival-vision.webp
convert incoming-media/property-refresh/ficus_driveway_nightlights.png -strip -resize '1600x1600>' -quality 84 public/media/vision-2027/arrival-night-vision.webp
convert incoming-media/property-refresh/patio_columns_banded_stucco_concept.png -strip -resize '1600x1600>' -quality 84 public/media/vision-2027/patio-vision.webp
convert incoming-media/property-refresh/fireplace_conde_nast_tulum.png -strip -resize '1600x1600>' -quality 84 public/media/vision-2027/interior-vision.webp
convert incoming-media/property-refresh/instagram_lush_green_lawn.png -strip -resize '1200x1200>' -quality 84 public/media/vision-2027/lawn-view.webp

# Compress future-concept walkthrough without audio and with fast-start metadata.
VIDEO_TMP="public/media/video/wellness-concept-2027.tmp.mp4"
ffmpeg -y -i incoming-media/vision-2027/sunset_club_wellness_walkthrough_v2.mp4 \
  -an -vf "scale='min(1280,iw)':-2" -c:v libx264 -preset slow -crf 28 -movflags +faststart \
  "$VIDEO_TMP" >/tmp/sunset-ffmpeg.log 2>&1
mv -f "$VIDEO_TMP" public/media/video/wellness-concept-2027.mp4

printf 'MEDIA TOTALS\n'
du -sh public/media/*
printf '\nFINAL VIDEO\n'
ls -lh public/media/video/wellness-concept-2027.mp4
