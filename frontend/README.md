# UW Orbital marketing site — frontend

React + Vite + TypeScript. Plain CSS. No UI library, no CSS framework.

## Run it

```sh
npm install
npm run dev      # http://localhost:5173
npm run build    # type check, then build to dist/
npm run lint
node smoke.mjs   # every route renders, no console errors, mobile menu opens
```

`smoke.mjs` needs the dev server to be running. It drives headless Chrome over
the DevTools protocol. Set `CHROME` if Chrome is not in `/Applications`.

## Files

| File | Holds |
|---|---|
| `src/content.ts` | Every piece of copy and every image URL. No copy lives in the components. |
| `src/ui.tsx` | The 6 shared pieces: Hero, Section, Card, ArrowLink, Stat, Split. |
| `src/pages.tsx` | One component per route, including `TeamDetail` for `/team/:slug`. |
| `/gallery` | Team photos. The lead image is `galleryImages[0]`, so put the best group shot first. |
| `src/App.tsx` | Router, header, footer. |
| `src/index.css` | All styles. Design tokens are at the top under `:root`. |

## Where the copy comes from

All copy comes from `/content`, the captured text of the live Wix site.
**Do not write new copy in `content.ts`.** If a page needs words the old site
does not have, get them from the team first, then add them.

Two facts on the site exist only inside images on the Wix site. Both are typed
out in `/content/pages/image-text.md`:

- The CSDC-6 win in 2023.
- The project timeline, which runs to June 2026.

## Brand assets in `public/`

| File | Use |
|---|---|
| `logo-light.png` | The wordmark, recoloured for dark backgrounds. Header and footer. |
| `logo.png` | The wordmark as supplied. Use it on white. |
| `favicon.png`, `apple-touch-icon.png` | The mission patch. This is the NASA meatball equivalent. |
| `patch.png` | The mission patch at 512px, for any page that needs it large. |
| `laurel.png` | The empty laurel wreath. `<Award>` draws the text over it. |

The supplied wordmark is drawn for a light background: its tagline is mid grey
and disappears on the black header. `logo-light.png` is a knockout variant —
grey ink lifted to near white, blue lifted for contrast, red arc untouched.
The script that made it is not in the repo; if the logo changes, ask a designer
for a proper reverse-on-dark version.

## Teams

`/team` and the old `/subsystems` page are one page now. `/subsystems` redirects
to `/team`. Every subteam is a row in `teams` in `src/content.ts`, and each one
gets its own page at `/team/<slug>`.

To change a lead, edit the `leads` array. To add a subteam, add a row — the
"6 Subteams" figure on the home page is `teams.length`, so it cannot drift.

| Field | What it is |
|---|---|
| `slug` | The URL. `/team/software`. |
| `summary` | One line, shown on the card and in the page hero. |
| `body` | The full description, shown on the detail page. |
| `owns` | Optional. Satellite subsystems the team owns. Only filled in where the captured Wix content states it outright. |

## Adding a competition result

The laurel badges are one image plus CSS text, so a new result needs no artwork.
Add a row to `awards` in `src/content.ts`, newest first:

```ts
export const awards = [
  { competition: 'CSDC-8', result: 'Winner', year: '2028' },
  ...
]
```

`laurel.png` was made by clearing the text out of the middle of the original
CSDC-6 badge. Keep the result string short: it is set to `white-space: nowrap`
and anything longer than 9 characters will spill out of the wreath.

## Design

NASA.gov is the reference: black chrome, white body, one red accent, very large
bold headings, uppercase monospace labels, photo cards with a dark gradient.

- Type: Public Sans for text, DM Mono for labels. Both from Google Fonts.
- Colour comes from the logo, not from NASA. The 3 brand colours were sampled
  out of the logo file:

  | Token | Value | In the logo | Used for |
  |---|---|---|---|
  | `--red` | `#ff2000` | the swirl | buttons, arrow markers, active nav, stat rules |
  | `--blue` | `#4494c6` | the wordmark and satellite | the logo only |
  | `--grey` | `#999999` | the tagline | hairlines and dividers |

  UI accents are **black**, not blue. Blue next to red read badly, so card rules,
  list rules, and labels are all `--black`. Leave them that way.

  The subteam icons in `public/icons/` were recoloured from the original blue
  Wix artwork: `<slug>.png` is black, `<slug>-red.png` is the hover state. Both
  are resolved from the team's `slug`, so a new subteam needs both files added.

  `--muted` (`#5f5f5f`) is the brand grey darkened. Body text needs it: `#999999`
  on white is 2.9:1, which fails WCAG AA. Do not use `--grey` for running text.
- Every corner is square. No `border-radius` anywhere in `index.css`.
- Photos load from `static.wixstatic.com`. Move them to our own host before launch.

## Known gaps

- Images point at the Wix CDN. That CDN goes away when the Wix site does.
- The team roster shows leads only. The full S23 roster is in
  `/content/pages/teamcopy.md` and is not on the site yet.
- **The "Competition" section on Mission is lorem ipsum.** Placeholder on
  purpose: CSDC-7 is over and the team has not decided what comes next.
  Replace it before launch — do not ship lorem ipsum.
- **The Blog page is removed.** The route, the nav entry, the home newsletter row
  and the footer Substack link are all gone. The Substack links are parked in
  `blogParked` in `src/content.ts` if it comes back.
- **The Mission page timeline is out of date.** It is a word-for-word copy of the
  timeline image on the Wix site, which was written before CSDC-7 finished. Its
  last row still reads "Winner Announced & Gets Launched, Jun 2026" as a future
  step. CSDC-7 is over and UW Orbital won. The team needs to supply a
  new timeline.
- No backend. The contact links are `mailto:` and external links.
