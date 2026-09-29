---
name: add-slideshow-photo
description: Add one or more photos to the homepage slideshow in index.html (the root-level static page, not the Docusaurus site in site/). Use whenever the user asks to add, update, or swap photos in the front-page slideshow/carousel. Handles sourcing, cropping/resizing to the established slideshow dimensions, naming, and wiring the new slide(s) into index.html.
---

# Add a photo to the index.html slideshow

The root `index.html` (not the Docusaurus site under `site/`) has a slideshow
built from a series of `<div class="mySlides w3-display-container w3-center">`
blocks near the top of the page, each holding one `<img>` plus a caption. This
skill adds new slides the same way past additions were done and resized so
they don't blow up the layout.

## Step 1: Get the source image(s)

If the user hasn't already given you images, remind them they have two options:

1. **Google Photos**: open the photo, right-click it, and "Copy image address"
   (usually a `lh3.googleusercontent.com/...` link). Paste the link(s) here.
2. **Direct file**: just hand you the JPEG (or other image) directly, e.g. by
   dropping it somewhere on disk and giving you the path.

For a Google Photos link, download it into the scratchpad first and verify it's
actually an image before doing anything else — malformed/expired links can
return an HTML error page instead of image bytes:

```bash
curl -sL -o /path/to/scratchpad/candidate.tmp "<url>"
file -b --mime-type /path/to/scratchpad/candidate.tmp   # expect image/jpeg or similar
```

## Step 2: Name it

Follow the existing convention: `slide_<short_description>.jpeg` — lowercase,
underscore-separated, descriptive enough to identify the photo (e.g.
`slide_portsmouth_2025_win_team.jpeg`). Ask the user for a short description if
one isn't obvious from context, or infer one from what they told you about the
photo.

## Step 3: Determine orientation and resize

Check native pixel dimensions:

```bash
sips -g pixelWidth -g pixelHeight candidate.tmp
```

The slideshow has two established target sizes, chosen so every slide renders
at the **same height** regardless of source orientation (this was the fix
after portrait images first added at `width:100%` blew up 3x too tall):

| Orientation (W vs H) | Target size | Aspect | `<img>` inline style |
|---|---|---|---|
| Landscape/square (W >= H) | **1200x600** | 2:1 | `style="width:100%"` |
| Portrait (H > W) | **400x600** | 2:3 | `style="width:33.33%"` |

Why `33.33%` for portrait: landscape slides render at height = container_width
* 0.5 (from the 2:1 ratio at width:100%). To make a 2:3 portrait image render
at that same height, its display width must be container_width / 3 — hence
33.33%. Don't use `width:100%` for portrait images, it triples their displayed
height relative to the landscape slides.

Crop-then-resize (center crop to the target aspect ratio first, so the final
resize doesn't distort the image):

```bash
# W, H = native pixelWidth/pixelHeight; target_w, target_h = 1200/600 or 400/600
target_ratio=$(echo "$target_w / $target_h" | bc -l)
current_ratio=$(echo "$W / $H" | bc -l)

if [ image is relatively too wide vs target ]; then
  # crop width down, keep height
  new_w=$(printf '%.0f' "$(echo "$H * $target_ratio" | bc -l)")
  sips -c "$H" "$new_w" candidate.tmp
else
  # crop height down, keep width
  new_h=$(printf '%.0f' "$(echo "$W / $target_ratio" | bc -l)")
  sips -c "$new_h" "$W" candidate.tmp
fi

sips -z "$target_h" "$target_w" candidate.tmp   # exact resize, no distortion since aspect now matches
```

(`sips -c` takes **height then width**, and crops centered — same for `-z`.)

Verify the result:

```bash
sips -g pixelWidth -g pixelHeight candidate.tmp   # should read exactly 1200x600 or 400x600
```

## Step 4: Move into place

Copy the resized file into `img/` under its final `slide_<description>.jpeg`
name (repo root's `img/` folder, sibling to `index.html`).

## Step 5: Wire it into index.html

Add a new slide block near the other `mySlides` divs, matching the existing
pattern exactly (see current slides for the template), using the orientation
appropriate `width` style from the table above:

```html
<div class="mySlides w3-display-container w3-center">
  <img src="img/slide_<description>.jpeg" style="width:100%">  <!-- or width:33.33% if portrait -->
  <div class="w3-display-bottommiddle w3-container w3-text-white w3-padding-32 w3-hide-small">
    <h3>{{short date/event label}}</h3>
    <p><b>{{caption}}</b></p>
  </div>
</div>
```

Ask the user for the date/event label and caption if not already given. The
carousel JS at the bottom of `index.html` cycles through however many
`.mySlides` divs exist automatically — no JS changes needed.

## Step 6: Verify

Suggest the user (or run yourself) `npx live-server .` from the repo root to
preview the slideshow and confirm the new slide(s) display at a consistent
height alongside the rest.
