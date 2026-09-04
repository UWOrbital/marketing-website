---
version: 1
slug: "src-pages-tsx"
primary_target: "src/pages.tsx"
related_targets: ["src/index.css","src/tokens.css","src/ui.tsx","src/content.ts"]
---

## Scope

The UW Orbital marketing site. Visitor mode: **Persuade**. Home is the lead surface; Mission, Team, Subteam, Gallery, Sponsors and Join inherit the world. This brief's contract is for Mission.

## Audience and job

Two co-primary audiences (PRODUCT.md). A Waterloo student deciding whether to join, and a sponsor or official reader deciding whether to back the team. Action: join via Discord, or open a sponsorship conversation. Proof: two CSDC wins, and hardware that passed vibration and thermal-vacuum testing in March 2026.

## Constraints

Copy is settled: each Mission station shows one sentence, word for word, from the paragraph it names (Sep 2026 decision). Palette is pinned. Orbit blue stays out of the interface. Dark ground stays. No member roster exists. Every Webb and Hubble image carries its CC BY 4.0 credit in the footer.

## Direction contract

THESIS: A sponsor gets the facts on the first scroll; whoever keeps scrolling reads the mission off the sky itself, as labelled objects on a Webb plate. Refuses the alternating image-and-text stack and the pinned slideshow.

OWN-WORLD: Deep-space ground, Outfit at light weight, starlight white, signal red only as the button. The Hubble field behind the headline. One Pandora's Cluster plate, 5000px, panned by scroll. Hairline leaders and 1px rings. No panels, no eyebrows.

STORY: A sponsor reads four facts and both wins in one screen and can act. A student keeps scrolling and finds the satellite floating in a galaxy cluster, the mission written across the sky.

FIRST VIEWPORT: "Mission" alone on the field, one screen. Under the fold: the record, four rows, then the sky.

FORM: The sky, annotated. Candidate 5 of 7, dealt with 3 and 1; chosen by the user with a steer: facts first, sky after. Seed 8726107b.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

## Signature interaction and motion grammar

Scroll pans the plate. The sky holds the window while the reader scrolls, and a 160vw Pandora's Cluster travels corner to corner behind it on a view timeline; each station's mark reveals as its point comes into frame and stays. The satellite's mark is the exploded assembly itself. Without a view timeline, under reduced motion, or on a short phone, the plate is a static poster at page width with all four marks shown. Nothing else on the page animates on entry.

## Unresolved

None. The starfield credit is printed; the subteam icon discs stay.
