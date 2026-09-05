# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Two audiences arrive at the same site and both are primary.

- **Prospective members.** University of Waterloo students deciding whether to join. They come from a club fair, Instagram, or a friend. They need to believe the hardware is real and find the way in.
- **Sponsors and official readers.** Companies, campus funds, faculty, and programme reviewers deciding whether to back the team. They need proof the team delivers.

Both need the important facts up front. Neither should have to dig to reach them. Depth is available to whoever keeps reading.

## Product Purpose

UW Orbital is the University of Waterloo's student satellite design team. The site is its public record. It exists to win sponsorships and to recruit members. Success over the next year is measured in sponsors signed and members joined.

## Positioning

The team has built a 3U CubeSat and put it through the same qualification campaign a commercial satellite goes through. It won the Canadian Satellite Design Challenge twice, CSDC-6 in 2023 and CSDC-7 in June 2026. The satellite passed vibration and thermal vacuum testing in March 2026. A neighbouring student team cannot truthfully claim that record.

## Operating Context

- The team competes for CUBICS, the CubeSats Initiative in Canada for STEM, run by the Canadian Space Agency. It applies to Stream 2, which gives up to $350,000 over 3 years for a CubeSat of 3U or smaller. Proposals close on 19 November 2026.
- A University of Waterloo faculty member is the CUBICS applicant. The team decided not to name them on the site.
- Under CUBICS the CubeSat goes to a 500 to 620 km orbit, 3 to 4 years after the project starts. No launch date is set.
- Members join through Discord, then work through a Notion onboarding document.
- The team runs on academic terms. Leads and members change every term, so facts on the site go stale quickly.

## Capabilities and Constraints

- **Two active projects.** The 3U CubeSat, and the Ground Station that tracks it and holds the radio link.
- **Primary payload.** An Arducam camera. Amateur radio operators contact the satellite, ask for a set of coordinates, and receive the picture on the downlink.
- **Ground station timing.** A 3U CubeSat in low Earth orbit is in view of Waterloo for about 10 minutes per pass. There are 4 to 6 usable passes a day.
- **Six subteams.** Mechanical, Electrical, Guidance Navigation and Controls, Firmware, Software, Business. 16 subteam leads and 1 team lead.
- **Surfaces.** Home, Mission, Team, 6 subteam pages, Gallery, Sponsors, Join. Blog, Features, and Events pages are parked in code and not routed.
- **Stack.** React 19, Vite 7, react-router 7, TypeScript. Deployed on Vercel. Repository `UWOrbital/marketing-website`, working branch `updated`.
- **Undecided.** No accessibility standard has been chosen by the team. No launch date. No CUBICS outcome. The QEYnet infrared laser beacon partnership is not confirmed and was removed from the site in September 2026. ESA Fly Your Satellite is not being pursued.

## Brand Commitments

- Name: UW Orbital. Tagline: University of Waterloo Satellite Design Team.
- A six-colour brand palette supplied by the team is binding. The values live in `src/tokens.css`; this file does not restate them.
- Two colour decisions the team made explicitly: the dark ground stays, and orbit blue is out of the interface. The blue remains inside the logo artwork, which is unchanged.
- No external rules apply. The University of Waterloo, sponsors, and the CSA impose no brand or logo requirements on this site.

## Evidence on Hand

Real, and safe to use:

- CAD renders of the V6 CubeSat: `public/cad-front.png`, `cad-back.png`, `cad-exploded.png`. The exploded assembly is the team's most characteristic artefact. All three are drawn on a white ground.
- Logo (`logo.png`, `logo-light.png`), mission patch (`patch.png`), laurel badge (`laurel.png`), and 12 subteam icons in `public/icons/`.
- 13 team and workshop photographs, hosted on the Wix CDN.
- 25 sponsors with real names, tiers, and descriptions.
- 4 press articles: CBC News, CBC Listen, UWaterloo News, The Waterloo Region Record.
- A Substack newsletter with 5 published posts.
- `content/` holds the full text of the previous Wix site, captured 18 August 2026. It is the factual source for legacy copy. Its README lists errors found on the live Wix site; do not carry those forward.

As of September 2026 the team considers the site's factual content settled. Open work is design work and should not rewrite copy. The placeholders listed below are the known exceptions.

Absences future work must not fabricate:

- No member roster. Full names and LinkedIn URLs were requested from the team but never delivered. The site shows abbreviated names such as "Ani A".
- Subteam descriptions come from the old Wix site and are unverified. The Software description and its tech stack list are placeholder text awaiting lead confirmation.
- No named faculty investigator, no launch date, no CUBICS result, no confirmed QEYnet partnership.

## Product Principles

1. **Two audiences, one page.** A prospective member and a sponsor read the same surface. Neither gets a detour.
2. **Lead with what is verified.** Credibility rests on things that happened: two competition wins and hardware that passed environmental testing. Never imply a launch or an award the team has not received.
3. **Depth rewards, it does not gate.** Substance up front, technical detail for whoever keeps reading.
4. **Students maintain this.** Facts change every term. Anything that needs a rebuild to update will go stale, and going stale is the failure mode this site already had once.
5. **Never invent a name, a date, or a partnership.** Several are genuinely open and are recorded as open.
