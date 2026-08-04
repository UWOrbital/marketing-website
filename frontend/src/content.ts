export const site = {
  title: "UW Orbital | University of Waterloo Satellite Design Team",
  description:
    "We are UW Orbital, the University of Waterloo's satellite design team. Designing, building, and launching CubeSats for the Canadian Satellite Design Competition.",
} as const;

export const nav: readonly {
  label: string;
  href: string;
  route?: true;
}[] = [
  { label: "Home", href: "#" },
  { label: "About", href: "#about" },
  { label: "Team", href: "/team", route: true },
  { label: "Join", href: "#join" },
];

export const hero = {
  heading: "UW Orbital",
  subtitle: "University of Waterloo Satellite Design Team",
  tagline: "Yes, we're going to space.",
  cta: "Join Us",
} as const;

export const slides = [
  {
    title: "Lorem ipsum",
    lines: ["dolor sit amet,", "consectetur adipiscing"],
    body: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
  },
  {
    title: "Meet Our Team",
    lines: ["design, build,", "and launch"],
    body: "We're a group of engineering and science students at the University of Waterloo designing, building, and launching our first CubeSat.",
    cta: { label: "View Team", href: "/team" },
  },
  {
    title: "Excepteur sint",
    lines: ["occaecat cupidatat", "non proident sunt"],
    body: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
  },
  {
    title: "Neque porro",
    lines: ["quisquam est,", "qui dolorem ipsum"],
    body: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit.",
  },
] as const;

export const footer = {
  description:
    "University of Waterloo Satellite Design Team. Designing, building, and launching CubeSats.",
  social: [
    { label: "Email", href: "mailto:uworbital@gmail.com" },
    { label: "Discord", href: "https://discord.gg/j32DZswg5b" },
    { label: "Instagram", href: "https://www.instagram.com/uworbital" },
    { label: "Facebook", href: "https://www.facebook.com/uworbital/" },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/company/uw-orbital/",
    },
  ],
  copyright: "UW Orbital. All rights reserved.",
} as const;

export const team = {
  heading: "Our Team",
  subtitle: "Meet the people building UW Orbital's first CubeSat.",
  backLabel: "Back to Home",
  members: [
    { name: "", role: "", bio: "", image: "" },
    { name: "", role: "", bio: "", image: "" },
    { name: "", role: "", bio: "", image: "" },
    { name: "", role: "", bio: "", image: "" },
    { name: "", role: "", bio: "", image: "" },
    { name: "", role: "", bio: "", image: "" },
    { name: "", role: "", bio: "", image: "" },
    { name: "", role: "", bio: "", image: "" },
    { name: "", role: "", bio: "", image: "" },
    { name: "", role: "", bio: "", image: "" },
    { name: "", role: "", bio: "", image: "" },
    { name: "", role: "", bio: "", image: "" },
    { name: "", role: "", bio: "", image: "" },
    { name: "", role: "", bio: "", image: "" },
    { name: "", role: "", bio: "", image: "" },
  ],
} as const;
