# Olympic National Park ORB

[Open the Olympic ORB](https://visualizationcreation.github.io/olympic-national-park/) · [ORB archive](https://visualizationcreation.github.io/orb-archive/)

An expanded field guide with **72 connected readings**, including **42 new detail points**, **59 evidence sources**, and **six open investigations**. The reading paragraphs contain approximately 8,800 words, before decks, research questions, methods, and transitions.

The rotating sphere displays clickable place and topic names. Drag to turn it, pause rotation, expand the map, or select a map-density filter. All readings remain accessible through search regardless of the visible density. Up follows the authored broader connection and Down follows the deeper connection. Left/Right rotate the sphere without changing the reading. Square brackets follow the logical thread. These shortcuts work on the sphere and while reading; native form controls and dialogs keep their own keyboard behavior. Visit history remains separate from conceptual BACKWARD.

## Reading edition

Expanded September 8, 2026, content revision `2026-09-08-expanded-72`. The original 30 point IDs, source mappings and compass links are retained. New detail readings appear beneath their parent readings and in the full spiral. Old direct links and compatible checkpoints continue to work.

Conceptual levels retain the previous orientation: foundations at level 2, new explanatory details at level 1, open investigations at level 0. Spiral position is reading order, not geography or conceptual altitude. Six-direction links, point parents and additional detail links describe meaning independently of the drawing.

Each point includes its reading, evidence, compass and a copyable Orbiverse continuation. Open investigations state an established basis, question, uncertainty and proposed method. These are authored investigations grounded in sources, not an official research-priority list or claims that the questions are wholly unstudied. Sources reviewed September 7–8, 2026 retain their individual check dates; historical study and observation dates remain distinct.

## Open, save and rebuild

Open `index.html` directly or serve this directory with a static web server. Its data, styling, script and existing point images are embedded, so reading and navigation work offline. External evidence links require internet. The separate earlier narration needs its own files or the hosted site.

`Save progress` exports a portable checkpoint; `Restore` imports it. Optional browser storage remembers the reading position. `Download HTML` saves an offline copy; `Print this point` produces the selected reading and evidence without the interface controls.

Run `python build.py` to rebuild `index.html` from `orb.json`, `shell.html`, `style.css`, `app.js` and the credited JPEG/SVG files. Python's standard library is sufficient. `journey.md` is the expanded reading manuscript for later adaptation and should be synchronized with content changes.

## Two recorded Spiral Courses

- [ORB Learn — Spiral Audio Course](https://visualizationcreation.github.io/olympic-national-park/courses.html?mode=learn): **51:50**, a connected educational account of all 72 points.
- [ORB Feel & Experience — Guided Audio Journey](https://visualizationcreation.github.io/olympic-national-park/courses.html?mode=feel): **50:09**, *Dreaming Olympic*: a second-person guide leading you through a dream of the sourced landscape.

Both use **Kokoro ONNX Bella (`af_bella`)**, generated locally at speed 0.9 with natural pitch. Each course has twelve saved MP3 chapters, a continuous transcript and measured paragraph cues. No local model is required to play them. The chapter files load ahead; the rotating word spiral, image, passage and paragraph highlight follow actual narration time. Start always begins at zero. Resume is a separate control with an independent bookmark for each mode. Changing mode pauses playback and keeps the same point. In the course player, Up/Down follow the same broader/deeper links as the original ORB and pause at the destination; Left/Right only rotate the sphere, leaving playback alone. Brackets [ / ] select the previous/next course point. At an authored edge, the player explains the limit without jumping to an unrelated point.

The Feel & Experience script was written directly by Codex, the primary assistant, with no local writing model. Bella supplies the voice locally. Its 72 passages and 144 measured paragraph cues use script revision `guided-dream-df047ae4b1f6c909`. The unchanged Learn script began with local Dolphin drafts that were substantially rewritten and reviewed against the sourced ORB. Each mode has its own authored script.

Every point has a distinct visual. The 30 retained assets are joined by **31 locally generated FLUX.2 Klein illustrations, nine authored explanatory diagrams, and two additional NPS photographs**. Generated scenes are labeled as imagined illustrations, with prompts, seeds, model information, source references and hashes in `course-media.json`. Misleading generated diagrams were replaced with explicitly conceptual authored diagrams. Photos retain their individual credits. Original masters and local generation caches are retained outside the public site.

`courses.html`, `courses.css`, `courses.js` and `courses-data.js` run the player. `courses.json` is its matching structured source; `learn-course.md` and `feel-course.md` are the downloadable manuscripts. `course-learn-01.mp3` through `course-learn-12.mp3` and `course-feel-dream-01.mp3` through `course-feel-dream-12.mp3` contain the complete recordings. The recorded total is 102:00; display durations are truncated to whole seconds.

The single-file `index.html` embeds all 72 images for offline browsing. Its course links open the hosted recordings. A complete local course folder also works: open `courses.html` with its sidecar files, 24 MP3 files and all credited images beside it. Evidence links still require internet. Music has not been added to this edition.

## Earlier Rest Journey

`rest.html` preserves the separate **30-point, 48:33 Microsoft Aria Rest Journey** from September 7, 2026. Its canonical script, captions, audio, point mapping and timing remain unchanged. It does **not** narrate the expanded 72-point reading edition. The interface labels this relationship explicitly and only offers a point-specific audio link for one of its original 30 points.

The earlier recording uses `olympic-rest.mp3`, `rest-journey.json`, `rest-data.js`, `rest-journey.md` and `olympic-rest.en.srt`. Its previously noted full listening review remains pending. This expansion does not claim to have completed that review or changed its voice.

## Validation and publication

Checked all 72 rendered points, direct links, source lists, parent/detail navigation, compass, visit history, search filters, checkpoint export/restore, older checkpoint IDs, phone overflow, reduced motion, keyboard navigation, selected-point print layout and a downloaded offline HTML. No page JavaScript errors were found in those checks. The new course checks additionally cover both modes, matching-point switching, Start versus Resume, saved progress after reload, actual chapter auto-advance, final completion, all 72 image decodes, reduced motion, phone overflow and the printable transcript. The current 24 MP3 chapters were decoded and checked for duration, peaks and agreement with the recorded source texts and paragraph cues. **A complete listening review of both recordings has not been performed**; technical validation is not an audition.

Publish the existing repository's root through its existing GitHub Pages configuration. Update the same Olympic entry and stable reading-edition ID in `visualizationcreation/orb-archive`; preserve other ORBs, the inactive archive and the earlier Rest edition's provenance.

An independent educational field guide by Nathan Wilson. This is not an official National Park Service, NOAA, USGS or Tribal publication. Credits and source URLs remain attached to the corresponding points and visual assets. No claim is made to original U.S. Government works.
