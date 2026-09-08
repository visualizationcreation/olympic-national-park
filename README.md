# Olympic National Park ORB

A self-paced field guide with 30 points, 34 primary sources, 30 point-specific images (17 photographs and 13 original explanatory illustrations) and six knowledge-floor investigations. Part of [ORB Journeys](https://visualizationcreation.github.io/orb-archive/).

The interactive reader uses a top-to-bottom lesson spiral and independently authored six-direction conceptual links. It supports point search, image selection, local progress, checkpoint export/restore, point printing, direct point links and a copyable Orbiverse continuation. Reduced-motion preferences are respected.

## Open and rebuild

Open `index.html` in a modern browser, or serve this directory with a static server. The entry file embeds its images, styles, application and data; reading and navigation need no network connection. External source links do need internet access. Browser storage is optional; use Save progress for a portable checkpoint.

To rebuild after editing the authored data or renderer, run `python build.py` (Python standard library only). Canonical inputs: `orb.json`, `shell.html`, `style.css`, `app.js` and the optimized JPEGs. `media.json` records original media provenance. `journey.md` preserves the current connected reading script for a later video discussion; synchronize it if readings change.

## Edition and evidence

Authored September 7, 2026. This edition contains no recorded narration, timed audio routes or video. Read-time labels are rough estimates at 180 words per minute, not measured narration durations. Historical glacier images and research retain their dates. The six floor questions are editorially framed investigations based on primary sources, not an official ranking of research priorities. A detailed study design is beyond this edition; the reader labels that boundary.

This is an independent educational artifact, not an official National Park Service or Tribal publication. Direct Tribal sources are credited for their own institutions’ work. No model/version provenance is asserted where not recorded.

## Media

Personal Quinault forest photos: Nathan Wilson, supplied for this project. Other images are credited at their points and in `media.json`; no claim to original U.S. Government works. The Blue Glacier comparison is from 1899 and 2008. Some archival NPS images have modest resolution; retained with accurate captions rather than represented as recent photographs. Original photo libraries and production masters are not included.

## Publication

Publish the root of `main` through GitHub Pages, with `.nojekyll`. The primary directory is `visualizationcreation/orb-archive`; keep its active entries and inactive editions intact when adding this ORB.

## Unique point visuals

Each of the 30 points has an exclusive media asset. No image is shared between points, and identical file bytes under different filenames are rejected at build time. Each original SVG is labeled as a conceptual illustration, not a measured dataset or documentary photograph. The masthead uses the opening landscape photograph. `media.json` and `orb.json` preserve captions, source URLs, credits and point ownership.
