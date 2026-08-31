# UW Orbital website content archive

This folder holds the full text of the live Wix site at https://www.uworbital.com.
It is the source of truth for the rebuild in `frontend/`. No text was summarised or dropped.

- **Captured on:** 2026-08-18
- **Method:** headless Chrome rendered every page, then the DOM was converted to Markdown.
- **Sponsor detail:** each sponsor logo opens a Wix lightbox with no URL. A script clicked all 25 logos and saved the text.
- **Images:** each `![alt](url)` keeps the original alt text and the base image URL on `static.wixstatic.com`. Add a Wix `/v1/fill/...` suffix to get a resized copy.

## What is here

- `pages/*.md` — one file per page. The file header holds the URL, the Wix page id, the browser title, and the SEO tags.
- `pages/sponsor-lightboxes.md` — the text of all 25 sponsor popups.
- `pages/image-text.md` — text that exists only inside images, typed out. Read this one: it holds the CSDC-6 win and the project timeline.
- `pages_raw.json` — the same text as JSON, for scripts.

## Warning: the Wix site has many dead pages

The Wix page list holds 43 pages. Only 20 hold content:

- 9 pages are in the sitemap and in the menu.
- 11 pages are old versions, drafts, or pages that no menu links to.
- 21 pages return a 404 error. They are broken sponsor page copies. They are not saved here.
- 2 pages are empty (`popup-acltj`, `fullscreen-page`). They are not saved here.
- 1 page (`members-old`) is in the sitemap but the Wix page name says OLD.

## Live pages

| Page | URL | Words | File |
|---|---|---|---|
| Home | https://www.uworbital.com/ | 66 | [pages/home.md](pages/home.md) |
| Mission | https://www.uworbital.com/mission | 294 | [pages/mission.md](pages/mission.md) |
| Subsystems | https://www.uworbital.com/subsystems | 402 | [pages/subsystems.md](pages/subsystems.md) |
| Team | https://www.uworbital.com/team | 168 | [pages/team.md](pages/team.md) |
| Events & Milestones | https://www.uworbital.com/events-and-milestones | 193 | [pages/events-and-milestones.md](pages/events-and-milestones.md) |
| Features | https://www.uworbital.com/features | 193 | [pages/features.md](pages/features.md) |
| Blog | https://www.uworbital.com/blog | 96 | [pages/blog.md](pages/blog.md) |
| Sponsors | https://www.uworbital.com/sponsors | 319 | [pages/sponsors.md](pages/sponsors.md) |
| Join Us | https://www.uworbital.com/join-us | 157 | [pages/join-us.md](pages/join-us.md) |

## Other pages that hold content

| Page | Slug | Words | Note | File |
|---|---|---|---|---|
| About | `copy-of-about-new` | 280 | Not in the sitemap. An older About page. | [pages/copy-of-about-new.md](pages/copy-of-about-new.md) |
| LANDING | `copy-of-landing` | 80 | Not in the sitemap. An alternate landing page. | [pages/copy-of-landing.md](pages/copy-of-landing.md) |
| Subteams | `copy-of-team` | 351 | Not in the sitemap. A Subteams page with one paragraph per subteam. | [pages/copy-of-team.md](pages/copy-of-team.md) |
| Events & Milestones OLD | `events-and-milestones-old` | 193 | Old copy of Events & Milestones. | [pages/events-and-milestones-old.md](pages/events-and-milestones-old.md) |
| Events & Milestones Backup | `eventsandmilestones` | 181 | Backup copy of Events & Milestones. | [pages/eventsandmilestones.md](pages/eventsandmilestones.md) |
| Join Our Team | `join-our-team` | 109 | Not in the sitemap. An older Join Us page. | [pages/join-our-team.md](pages/join-our-team.md) |
| Team OLD | `member` | 172 | Old Team page. The live /team page copies its SEO tags. | [pages/member.md](pages/member.md) |
| Members OLD | `members-old` | 164 | In the sitemap, but the Wix page name says OLD. Not linked from the menu. | [pages/members-old.md](pages/members-old.md) |
| Team | `our-team` | 108 | Not in the sitemap. A short Team page. | [pages/our-team.md](pages/our-team.md) |
| Resources | `resources` | 63 | Not in the sitemap. Reachable by URL. Holds links for members. | [pages/resources.md](pages/resources.md) |
| Team CONCEPT | `teamcopy` | 479 | Old Team page, but it holds the largest member list on the site (S23 team, name and role for every member). | [pages/teamcopy.md](pages/teamcopy.md) |

## Where to find each fact

| You want | Read |
|---|---|
| The 8 subsystems and what each one does | [pages/subsystems.md](pages/subsystems.md) |
| A shorter subteam list | [pages/copy-of-team.md](pages/copy-of-team.md) |
| Subteam leads, current | [pages/team.md](pages/team.md) |
| Every member by name and subteam (S23) | [pages/teamcopy.md](pages/teamcopy.md) |
| The mission and the CubeSat | [pages/mission.md](pages/mission.md) |
| Sponsor tiers and logos | [pages/sponsors.md](pages/sponsors.md) |
| Sponsor detail, date, and website | [pages/sponsor-lightboxes.md](pages/sponsor-lightboxes.md) |
| Press and media coverage | [pages/features.md](pages/features.md) |
| How to join | [pages/join-us.md](pages/join-us.md) |
| The CSDC-6 win and the project timeline | [pages/image-text.md](pages/image-text.md) |

## Errors found on the live site

- The Sponsors page puts MEF under **Gold Sponsors**, but the MEF popup says **Silver Sponsor**.
- The Sponsors page puts Waterloo Electroplating under **Bronze Sponsors**, but its popup says **Gold Sponsor**.
- The Stratodynamics popup shows the EngSoc website in its link. The text of the link is correct.
- The Waterloo Electroplating popup links to the Christie Digital website. The text of the link is correct.
- The Hakko popup describes Hakko as "a project management and note-taking software". That text was copied from the Notion popup. Hakko makes soldering equipment.
- The `/team` page uses the SEO tags of the old `/member` page. Its browser title is "Team OLD | UW Orbital".
- "Febraury" is a spelling error in the Demtool popup.

## Site header and footer

These lines repeat on every page. They were removed from the page files.

### Menu

- About (drop-down)
  - [Mission](https://www.uworbital.com/mission)
  - [Subsystems](https://www.uworbital.com/subsystems)
  - [Team](https://www.uworbital.com/team)
- [Events & Milestones](https://www.uworbital.com/events-and-milestones)
- News (drop-down)
  - [Features](https://www.uworbital.com/features)
  - [Blog](https://www.uworbital.com/blog)
- [Sponsors](https://www.uworbital.com/sponsors)
- More
- [Join Us](https://www.uworbital.com/join-us) (button)

### Logo and footer

- ![Facebook](https://static.wixstatic.com/media/e0678ef25486466ba65ef6ad47b559e1.png) (link: https://www.facebook.com/uworbital/)
- ![Instagram](https://static.wixstatic.com/media/da7ef6dd1302486c9a67baebe4b364bc.png) (link: https://www.instagram.com/uworbital)
- ![LinkedIn](https://static.wixstatic.com/media/f61c7a3b4b4947b28511a25034973383.png) (link: https://www.linkedin.com/company/uw-orbital/)
- ![](https://static.wixstatic.com/media/2a85fa_dc43819e82d04a56a2318ef44b5d9fad~mv2.png) (link: https://www.uworbital.com)
- ![emailicon](https://static.wixstatic.com/media/6a67b4_b464b32e8ee5486a8c009017fcb0e068~mv2.png) (link: mailto:uworbital@gmail.com)

## External links used on the site

| Link | Times used |
|---|---|
| http://www.waterlooelectroplating.com/ | 1 |
| https://demtool.com/ | 2 |
| https://discord.gg/j32DZswg5b | 2 |
| https://drive.google.com/file/d/1cKSvqYu6B2IjnV0aT-yh_pDpFeu70S8l/view?usp=sharing | 1 |
| https://greatscottgadgets.com/ | 2 |
| https://instagram.com/uworbital | 1 |
| https://rlxsolutions.com/ | 2 |
| https://twitter.com/BulentKiziltan?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor | 2 |
| https://uwaterloo.ca/engineering-endowment-foundation/ | 2 |
| https://uwaterloo.ca/engineering/ | 2 |
| https://uwaterloo.ca/math-endowment-fund/ | 1 |
| https://uwaterloo.ca/news/engineering-students/teaming-go-above-and-beyond | 1 |
| https://uworbital.notion.site/Onboarding-8e074b7923a54e1eb9001e2ebd14ed63 | 2 |
| https://uworbital.substack.com/ | 1 |
| https://uworbital.substack.com/p/chapter-four-the-cliffs-we-reach-for | 1 |
| https://uworbital.substack.com/p/chapter-one-rising-from-the-ground | 1 |
| https://uworbital.substack.com/p/chapter-three-a-touch-of-stardust | 1 |
| https://uworbital.substack.com/p/chapter-two-chasing-the-moonlight | 1 |
| https://uworbital.substack.com/p/chapter0 | 1 |
| https://www.altium.com/ | 2 |
| https://www.ansys.com/ | 2 |
| https://www.cbc.ca/listen/live-radio/1-104-the-morning-edition-k-w/clip/15900958-university-waterloos-orbital-team-building-satellite-hope-one | 1 |
| https://www.cbc.ca/news/canada/kitchener-waterloo/uw-orbital-team-design-and-build-satellite-1.6385431 | 1 |
| https://www.christiedigital.com/ | 3 |
| https://www.engsoc.uwaterloo.ca/ | 3 |
| https://www.facebook.com/uworbital | 1 |
| https://www.hakko.com/english/ | 2 |
| https://www.ieeecanadianfoundation.org/EN/ | 1 |
| https://www.linkedin.com/company/uw-orbital | 1 |
| https://www.notion.so/ | 2 |
| https://www.pelican.com/ | 1 |
| https://www.plm.automation.siemens.com/global/en/products/nx/ | 1 |
| https://www.qeynet.com/ | 1 |
| https://www.risingyouth.ca/ | 1 |
| https://www.rtl-sdr.com/ | 2 |
| https://www.speedpro.com/ | 2 |
| https://www.therecord.com/news/waterloo-region/2022/03/07/uw-students-build-satellite-to-orbit-the-earth.html | 1 |
| https://www.vectornav.com/ | 2 |
| https://www.wix.com/ | 2 |
| mailto:uworbital@gmail.com | 2 |

