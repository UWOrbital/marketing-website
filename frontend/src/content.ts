// All copy and image URLs come from the live Wix site.
// The captured source of truth is in /content. Do not invent copy here.

const img = (id: string) => `https://static.wixstatic.com/media/${id}`

export const site = {
  name: 'UW Orbital',
  tagline: 'University of Waterloo Satellite Design Team',
  headline: 'Yes, we’re going to space.',
  award: 'CSDC-7 Winner, 2026',
  email: 'uworbital@gmail.com',
  discord: 'https://discord.gg/j32DZswg5b',
  onboarding: 'https://uworbital.notion.site/Onboarding-8e074b7923a54e1eb9001e2ebd14ed63',
  substack: 'https://uworbital.substack.com/',
  social: [
    { label: 'Instagram', handle: '@uworbital', href: 'https://instagram.com/uworbital' },
    { label: 'LinkedIn', handle: '@uw-orbital', href: 'https://www.linkedin.com/company/uw-orbital' },
    { label: 'Facebook', handle: '@uworbital', href: 'https://www.facebook.com/uworbital' },
  ],
}

export const nav = [
  { label: 'Mission', to: '/mission' },
  { label: 'Team', to: '/team' },
  { label: 'Events', to: '/events' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Features', to: '/features' },
  { label: 'Sponsors', to: '/sponsors' },
]

export const heroImages = {
  home: img('2a85fa_abd0166508fa4e4ca8fbb1895f1380fd~mv2.png'),
  mission: img('nsplsh_6f78674b32665f72784463~mv2_d_6000_3375_s_4_2.jpg'),
  subsystems: img('nsplsh_58970e2a805d495489d0d6591dc164a5~mv2.jpg'),
  team: img('6a67b4_9af977d190bd46d2a10438e5fe1e9f09~mv2.jpg'),
  events: img('nsplsh_bdbfa6deb1cb4c76b1ec9ac751a82e2d~mv2.jpg'),
  features: img('nsplsh_fdfa04e1498345039145f5df9efa3b54~mv2.jpg'),
  blog: img('11062b_7801bb7544334085b7c94cb5a1e85c2e~mv2_d_4272_2856_s_4_2.jpg'),
  join: img('6a7287_6ecc1a0b66ac4bf495794228a7d35fe6~mv2.jpeg'),
  sponsors: img('11062b_e4951142f81d4738804aef3d9f667b21~mv2.jpg'),
}

// Competition results. Newest first. The laurel frame is drawn by <Award>,
// so a new result needs a row here and no new artwork.
export const awards = [
  { competition: 'CSDC-7', result: 'Winner', year: '2026' },
  { competition: 'CSDC-6', result: 'Winner', year: '2023' },
]

export const mission = {
  title: 'Our Mission',
  statement: "Our mission is to build a 3U CubeSat and launch it, making it the University of Waterloo's first satellite launched by students.",
  sections: [
    {
      heading: 'Competition',
      body: 'The Canadian Satellite Design Challenge asks university teams to design, build, and qualify a 3U CubeSat over two years. Every entry goes through the same design reviews and the same environmental test campaign that a commercial satellite goes through. UW Orbital entered CSDC-6 and CSDC-7, and won both.',
      body2: 'CSDC-7 is finished. The team now competes for CUBICS, the CubeSats Initiative in Canada for STEM. The Canadian Space Agency runs it and pays for development and launch. UW Orbital applies to Stream 2, which gives up to $350,000 over 3 years for a CubeSat of 3U or smaller. Proposals close on November 19, 2026.',
      images: [
        { src: img('c9cb7d_5e0676298b6442b8b41f560c42dc5742~mv2.png'), alt: 'CubeSat render' },
      ],
    },
    {
      heading: 'CubeSats',
      body: 'CubeSats are low-cost, small-footprint alternatives to traditional multi-million dollar satellites which carry specialized science, communications, or biological payloads. The affordability of CubeSat allows for more simplified designs and rapid development timelines, providing a path for student organizations to get involved in the space industry. CubeSats often "piggyback" with larger satellites during launch, and once in the correct orbit, are released via springloaded "dispensers".',
      // This section used to have no image, so it rendered full width. The
      // exploded view moved here from Competition, which had 2 images and
      // showed only the first.
      images: [{ src: img('c9cb7d_5f0917c4200449b7a03e013909a4953a~mv2.png'), alt: 'Exploded view of the CubeSat' }],
    },
    {
      heading: 'Payloads',
      body: 'Our primary payload is an Arducam camera. It captures images of the Earth from orbit. Amateur Radio Operators (AROs, also known as ham radio operators) contact the CubeSat, ask for a set of coordinates, and receive the picture on the downlink. This puts amateur radio education first.',
      body2: 'The team is also working with a company named QEYnet to launch a prototype for an infrared laser beacon that the company is developing in pursuit of a novel approach to post-quantum computing key distribution methods.',
      link: { label: 'Learn more about QEYnet', href: 'https://www.qeynet.com/' },
      images: [{ src: img('6a67b4_be2190950af741dcbea99b1e9f1bbf8d~mv2.jpg'), alt: 'Concept of operations diagram' }],
    },
  ],
  timeline: { src: img('6a67b4_34779a5f43cd4a4c97977fb516357365~mv2.jpg'), alt: 'CubeSat project timeline' },
}

// Transcribed word for word from the timeline image on the Mission page.
// "CubSat" is spelled that way in the original.
export const timeline = [
  {
    date: 'May 2024',
    title: 'Research & CSDC Kickoff',
    body: 'Majority of the research and technical documentation has been done over the summer 2024. CSDC-7 officially started in Sep 2024.',
  },
  {
    date: 'Oct 2024',
    title: 'FlatSat Prototyping',
    body: 'The FlatSat is a high fidelity electrical and functional representation of our CubSat bus. The first prototype.',
  },
  {
    date: 'Apr 2025',
    title: 'Subsystem Construction',
    body: 'Development of each subsystem, meaning that each subsystem would be built and tested as it was going into space.',
  },
  {
    date: 'Oct 2025',
    title: 'Final Assembly',
    body: 'Assembling subsystem pieces into a CubSat. Performing vibration, thermal testing with our partners to prepare for competition.',
  },
  {
    date: 'Mar 2026',
    title: 'Vibration & Environmental Testing',
    body: 'Official evaluation part of CSDC. The CubeSat went through vibration and thermal vacuum testing to simulate the forces of launch, and it passed.',
  },
  {
    date: 'Jun 2026',
    title: 'CSDC-7 Won',
    body: 'UW Orbital placed first at CSDC-7, after winning CSDC-6 in 2023.',
  },
  {
    date: 'Nov 2026',
    title: 'CUBICS Proposal',
    body: 'A University of Waterloo faculty member is the applicant. The team writes the Stream 2 proposal and adapts the CSDC-7 satellite to the CUBICS mission. The deadline is November 19, 2026.',
  },
  {
    // The CSA procures the launch 3 to 4 years after the project starts. The
    // date is not set until the grant is awarded.
    date: 'Next',
    title: 'Launch',
    body: 'CUBICS puts the CubeSat in a 500 to 620 km orbit, 3 to 4 years after the project starts. The launch date is TBD.',
  },
]

export type Team = {
  slug: string
  name: string
  short: string
  icon: string
  image: string
  leads: string[]
  summary: string
  body: string
  body2?: string
  owns?: string[]
  stack?: string[]
}

export const teamLead = { role: 'Team Lead', name: 'Kevin D' }

// The 6 subteams. Clicking one on /team opens /team/<slug>.
// Descriptions come from the captured Wix Subsystems page, except Software,
// which the team wrote in 2026.
export const teams: Team[] = [
  {
    slug: 'mechanical',
    name: 'Mechanical',
    short: 'Mechanical',
    icon: img('6a67b4_037785b41f854eb1ab5e016de7fffa41~mv2.png'),
    image: img('nsplsh_5a706462372d6f77637077~mv2_d_3737_5605_s_4_2.jpg'),
    leads: ['Ani A', 'Alan H', 'Brian K'],
    summary: 'Designs the frame of the CubeSat and proves it survives launch.',
    body: "The mechanical subsystem is responsible or designing the bus (frame) of the CubeSat, and any other relevant mechanical systems, such as a battery holder. The mechanical team is also responsible for Finite Element Modelling (FEM) of all these components and thermal analysis to ensure the CubeSat can sustain the forces of launch and harsh space environment. The team performs 3D printing, prototyping in the University of Waterloo's Student Machine Shop, and uses tools such as Siemens NX for CAD and analysis.",
    owns: ['Structures'],
  },
  {
    slug: 'electrical',
    name: 'Electrical',
    short: 'Electrical',
    icon: img('6a67b4_9ea2ee6daf394409a394d84b23a85d35~mv2.png'),
    image: img('nsplsh_2c0ddafb7f454dbaa4986585788de733~mv2.jpg'),
    leads: ['Judy Y', 'Sam B', 'Zack C', 'Ahmed Q'],
    summary: 'Makes the power, and the boards that move it around.',
    body: 'The Electrical subsystem is responsible for power production, distribution, and management. Major components of this subsystem involve the solar panels and batteries. The team is heavily hardware focused, developing PCBs for an MPPT charging circuit, a Battery Management System, in-house solar panels, and more. Learn about board design in Altium and gain hands-on experience with PCB assembly.',
    owns: ['Electrical Power System', 'Communications', 'Attitude Determination and Control'],
  },
  {
    slug: 'gnc',
    name: 'Guidance, Navigation and Controls',
    short: 'GNC',
    icon: img('6a67b4_c60f5458f19846c8a4ba3f57bb29c10e~mv2.png'),
    image: img('nsplsh_6a5738686b425f516d6a38~mv2_d_6000_4000_s_4_2.jpg'),
    leads: ['Jeff H', 'Panth P'],
    summary: 'Points the satellite where it needs to look.',
    body: 'The GNC subsystem is responsible for orientation control of the satellite within space through actuators such as magnetorquers and reaction wheels, as well as sensors (IMUs, sun sensors, GPS) that determine the location and pointing direction of the satellite. The team develops custom controls algorithms like B-dot, PID, and EKF, designs and builds the main Flight Controller board with Altium, is working on a custom magnetorquer design, and works with industry-standard orbital mechanics simulation software like AGI Systems Tool Kit.',
  },
  {
    slug: 'firmware',
    name: 'Firmware',
    short: 'Firmware',
    icon: img('6a67b4_750b42a407344fee9f4e4853a1ae076f~mv2.png'),
    image: img('6a67b4_9ae2db31169c46e79cc774f7c4fa7647~mv2.jpeg'),
    leads: ['Kashif B', 'Adityya K', 'Panth P'],
    summary: 'Writes the low-level code that runs on the satellite itself.',
    body: 'The Firmware team is responsible for writing all of the low-level software that will run on the satellite as well as writing the software for our ground station communications. This involves writing firmware for our RM46 microcontroller for various areas such as Communications, Electrical, Command & Data Handling, GNC, and Payload.',
    owns: ['Command and Data Handling'],
  },
  {
    slug: 'software',
    name: 'Software',
    short: 'Software',
    icon: img('6a67b4_b86204043f8344d99b2251b91ea18e1c~mv2.png'),
    image: img('b1ce291ed95c483292db01846c10e734.jpg'),
    leads: ['Cameron L', 'Eddie W', 'Kevin W'],
    summary: 'Builds the ground station and the tools people use to talk to the satellite.',
    // PLACEHOLDER COPY. The shape is right and the tools listed are the ones
    // the team uses today. Software leads to confirm the wording and the
    // stack list before launch.
    body: 'The Software team writes everything that runs on the ground. That is the ground station that tracks the satellite and holds a radio link during a pass, the pipeline that decodes and stores the telemetry that comes down, and the web tools that amateur radio operators and researchers use to request a photo and collect the result. The team also applies machine learning to the image and telemetry data the satellite returns.',
    body2: 'The ground station is the part with the hardest deadline. A 3U CubeSat in low Earth orbit is in view of Waterloo for about 10 minutes per pass, and there are 4 to 6 usable passes a day. Everything the team schedules, uplinks, and downlinks has to fit in that window, so the software plans each pass in advance and recovers on its own when a link drops.',
    owns: ['Ground Station', 'Telemetry Pipeline', 'Mission Control Web App'],
    stack: [
      'TypeScript, React, and Vite for the web tools',
      'Python for the telemetry pipeline and the pass scheduler',
      'GNU Radio and a software defined radio for the ground station link',
      'PostgreSQL for telemetry storage',
      'PyTorch for the image and telemetry models',
      'Docker and GitHub Actions for builds and deploys',
    ],
  },
  {
    slug: 'business',
    name: 'Business',
    short: 'Business',
    icon: img('6a67b4_95de1a216b554277befa9c85d13b7b9c~mv2.png'),
    image: img('nsplsh_eaa428c2ac894d1a8c131c5a7562d06a~mv2.jpg'),
    leads: ['Evan M'],
    summary: 'Funds the project and tells people it exists.',
    body: 'The business subteam is responsible for many behind the scenes tasks of UW Orbital. This includes securing funding, reaching out to sponsors, and keeping track of finance and budgeting. The business subteam also manages marketing and brand creation, social media, organizing outreach events, content creation, technical writing, and recruiting students.',
  },
]

export const galleryImages = [
  img('6a67b4_7fd679032b804f84a60ed71b590d0fb0~mv2.jpg'), // whole team, Waterloo sign
  img('6a67b4_3b660b4cc80e4a20acf1c029012b5248~mv2.jpg'),
  img('6a67b4_9c0df053e041428e98f0db0a4e2c5f65~mv2.jpg'),
  img('6a67b4_e65e347a4d564ef899fe14c0f56fa4fd~mv2.jpg'),
  img('6a67b4_d740432369be4963b9d8bf5bb04aefd9~mv2.jpg'),
  img('6a67b4_d3050df41ab14ba986657540a3794780~mv2.jpg'),
  img('6a67b4_6904a49e931c437fa3a6a9a3694096d7~mv2.png'),
  img('6a67b4_1354988fd0474c389dfbe0104b1d1229~mv2.png'),
  img('6a67b4_a24b63f274224d9399f4f1286d67c4c5~mv2.jpg'),
  img('6a67b4_2e1b38c55d1145938d56abefaed9c490~mv2.jpg'),
  img('6a67b4_d175ffc74fac44d29f5343c627e138ff~mv2.jpg'),
  img('6a67b4_8990dc79b40a495e92f51c9fba8b8e76~mv2.jpg'),
  img('6a67b4_85322b137d434b2ebb4d8a8cc71ac881~mv2.jpg'),
]
// Newest first. The landing page shows the first 2.
// TODO: the 2022 items at the bottom are 4 years old. Business team to say
// which ones stay and to send photos for anything from 2023 onward.
export const events = {
  intro: 'Here are a few recent events and milestones that Orbital has met!',
  items: [
    {
      // PLACEHOLDER COPY. The result is real. The wording is not final.
      title: 'First place at CSDC-7',
      body: 'UW Orbital won the seventh Canadian Satellite Design Challenge in June 2026, after winning CSDC-6 in 2023. The satellite passed vibration and thermal vacuum testing, and it is the baseline for the CUBICS proposal.',
      image: img('6a67b4_7fd679032b804f84a60ed71b590d0fb0~mv2.jpg'),
    },
    {
      // PLACEHOLDER COPY. Dates and the test facility need confirming.
      title: 'Thermal Vacuum Testing',
      body: 'The assembled CubeSat spent its qualification campaign in a vacuum chamber, cycling between the hot and cold extremes it will see in orbit. It came out working.',
      image: img('6a67b4_2e1b38c55d1145938d56abefaed9c490~mv2.jpg'),
    },
    {
      title: 'CDR (Critical Design Review)',
      body: 'A few of our members previously went to Ottawa to present an overview of our satellite design plans to a panel of judges for a mid-point design review!',
      image: img('6a67b4_a24b63f274224d9399f4f1286d67c4c5~mv2.jpg'),
    },
    {
      title: 'Christie Digital Satellite Chassis Vibration Testing',
      body: 'The Mechanical team went to Christie Digital to test our satellite chassis that underwent an aggressive vibration testing and our cube satellite passed the vibration test not once, but twice!!',
      image: img('6a67b4_2e1b38c55d1145938d56abefaed9c490~mv2.jpg'),
    },
    {
      title: 'Fall 2022 student design showcase',
      body: 'We got the chance to present to many students about our team at the Student Design Showcase!',
      image: img('6a67b4_d175ffc74fac44d29f5343c627e138ff~mv2.jpg'),
    },
    {
      title: 'SDC Volleyball tournament',
      body: 'UW Orbital participated in an SDC volleyball tournament as a fun social event~',
      image: img('6a67b4_8990dc79b40a495e92f51c9fba8b8e76~mv2.jpg'),
    },
  ],
  gallery: [
    img('6a67b4_9c0df053e041428e98f0db0a4e2c5f65~mv2.jpg'),
    img('6a67b4_85322b137d434b2ebb4d8a8cc71ac881~mv2.jpg'),
  ],
}

export const features = [
  {
    outlet: 'CBC News',
    title: 'University of Waterloo Orbital Team aims for space with student-built satellite',
    dek: 'Being in a national competition shows how far the space industry has come, says team.',
    href: 'https://www.cbc.ca/news/canada/kitchener-waterloo/uw-orbital-team-design-and-build-satellite-1.6385431',
    image: img('6a67b4_c84810698ec34895a045b878dab921a0~mv2.jpg'),
  },
  {
    outlet: 'CBC Listen',
    title: "University of Waterloo's Orbital team are building a satellite they hope one day can be launched into space",
    dek: 'UW Orbital is innovating outside of the requirements for student satellite contest.',
    href: 'https://www.cbc.ca/listen/live-radio/1-104-the-morning-edition-k-w/clip/15900958-university-waterloos-orbital-team-building-satellite-hope-one',
    image: img('6a67b4_3b660b4cc80e4a20acf1c029012b5248~mv2.jpg'),
  },
  {
    outlet: 'UWaterloo News',
    title: 'Teaming up to go above and beyond',
    dek: 'UW Orbital is innovating outside of the requirements for student satellite contest.',
    href: 'https://uwaterloo.ca/news/engineering-students/teaming-go-above-and-beyond',
    image: img('6a67b4_b2ab1d20fa854029ad6297ad1ff478d6~mv2.jpg'),
  },
  {
    outlet: 'The Waterloo Region Record',
    title: 'UW students build satellite to orbit the earth',
    dek: 'The Canadian Satellite Design Competition involves dozens of universities across the country every two years. The competition pays for launch costs required to send the winning satellite into space.',
    href: 'https://www.therecord.com/news/waterloo-region/2022/03/07/uw-students-build-satellite-to-orbit-the-earth.html',
    image: img('6a67b4_7fd679032b804f84a60ed71b590d0fb0~mv2.jpg'),
  },
]

// Parked. The Blog page was removed for now. Restore the route and the nav
// entry to bring it back; the Substack links are still here.
export const blogParked = {
  title: 'News from the Orbit(al)',
  note: 'Our newsletter blog is managed through Substack. Sign up to get updates on our project today!',
  posts: [
    { title: 'Chapter Zero: Into the Orbit', href: 'https://uworbital.substack.com/p/chapter0' },
    { title: 'Chapter One: Rising from the Ground Up', href: 'https://uworbital.substack.com/p/chapter-one-rising-from-the-ground' },
    { title: 'Chapter Two: Chasing the Moonlight', href: 'https://uworbital.substack.com/p/chapter-two-chasing-the-moonlight' },
    { title: 'Chapter Three: A Touch of Stardust', href: 'https://uworbital.substack.com/p/chapter-three-a-touch-of-stardust' },
    { title: 'Chapter Four: The Cliffs We Reach For', href: 'https://uworbital.substack.com/p/chapter-four-the-cliffs-we-reach-for' },
  ],
}

export const join = {
  why: "We're building a space community at the University of Waterloo, and our mission is to launch the university's first satellite in orbit to do so. If you're interested in building tech that will actually make it to space right during your undergraduate degree, you've come to the right place. Plus, you can do it all while gaining valuable skills in mechanical, electrical, and software engineering.",
  steps: [
    { n: 1, title: 'Join our Discord', href: 'https://discord.gg/j32DZswg5b' },
    { n: 2, title: 'Read through our onboarding', href: 'https://uworbital.notion.site/Onboarding-8e074b7923a54e1eb9001e2ebd14ed63' },
  ],
}

export const sponsorIntro = 'At UW Orbital, our mission is to build a launchpad for students to enter the SpaceTech industry by providing technical, hands-on experience and opportunities to professional networks. Any contribution will help us embark on our journey towards building a CubeSat, and allow us to continue to provide a platform for students looking to get into space exploration and research. By sponsoring us, you will be supporting the future generation of engineers while helping to build a long-lasting community at the University of Waterloo of passionate students from all academic backgrounds.'

export const sponsorPackage = 'https://drive.google.com/file/d/1cKSvqYu6B2IjnV0aT-yh_pDpFeu70S8l/view?usp=sharing'

export const tiers = ['Eternium', 'Gold', 'Silver', 'Bronze'] as const

export type Sponsor = {
  name: string
  fullName: string
  tier: string
  logo: string
  alt: string
  website: string
  since: string
  blurb: string
}

export const sponsors: Sponsor[] = [
  {
    name: "WEEF",
    fullName: "Waterloo Engineering Endowment Foundation",
    tier: "Eternium",
    logo: "https://static.wixstatic.com/media/6a67b4_57c8693dbcad4a4ba6054e968f07b929~mv2.png",
    alt: "weef logo",
    website: "https://uwaterloo.ca/engineering-endowment-foundation/",
    since: "Nov 2021",
    blurb: "Thanks so much to the Waterloo Engineering Endowment Foundation for providing us with some critical monetary contributions!",
  },
  {
    name: "Siemens",
    fullName: "Siemens",
    tier: "Gold",
    logo: "https://static.wixstatic.com/media/c9cb7d_61ccf46afecd44d9a0cf95a862dc3532~mv2.png",
    alt: "siemens logo",
    website: "https://www.siemens.com/",
    since: "January 2022",
    blurb: "We're incredibly grateful to Siemens for providing UW Orbital with their licenses and NX software! Siemens Canada is a technology company focused on industry, infrastructure, transport, and healthcare. From more resource-efficient factories, resilient supply chains, and smarter buildings and grids, to cleaner and more comfortable transportation as well as advanced healthcare.",
  },
  {
    name: "Ansys",
    fullName: "Ansys",
    tier: "Gold",
    logo: "https://static.wixstatic.com/media/6a67b4_d8d8cc99f40e4a669f3545910b15ac55~mv2.png",
    alt: "Ansys_colored.png",
    website: "https://www.ansys.com/",
    since: "January 2022",
    blurb: "We're incredibly grateful to Ansys Government Initiatives (AGI) for providing UW Orbital with Licenses to their Systems Took Kit Software. It aids us in analyzing and visualinzing our CubeSat's trajectory!",
  },
  {
    name: "Christie Digital",
    fullName: "Christie Digital",
    tier: "Gold",
    logo: "https://static.wixstatic.com/media/6a67b4_f07e8ed96629431994d628e54f3e2f63~mv2.png",
    alt: "Christie Digital Logo",
    website: "https://www.christiedigital.com/",
    since: "September 2021",
    blurb: "We're incredibly grateful to Christie Digital for conducting our vibration testing at their Kitchener Centre, helping us interpret the vibration test results after CSA, and assisting us in designing parts.",
  },
  {
    name: "MEF",
    fullName: "Waterloo Math Endowment Fund",
    tier: "Gold",
    logo: "https://static.wixstatic.com/media/6a67b4_855c8d8e15784b73bdd4d4e83adf6ca2~mv2.png",
    alt: "MEF logo",
    website: "https://uwaterloo.ca/math-endowment-fund/",
    since: "Sep 2021",
    blurb: "Thanks so much to the Waterloo Math Endowment Foundation for providing us with integral monetary contributions! These contributions help keep UW Orbital running smoothly and efficiently.",
  },
  {
    name: "RLX",
    fullName: "RLX",
    tier: "Gold",
    logo: "https://static.wixstatic.com/media/6a67b4_75996d71e3394583aeafec327a680df4~mv2.png",
    alt: "RLX solutions logo",
    website: "https://rlxsolutions.com/",
    since: "February 2022",
    blurb: "We're incredibly grateful to RLX Solutions for providing UW Orbital with a full sponsorship on production of our Printed Circuit Boards! RLX's contribution will allow us to perform crucial rapid prototyping for our subsystems' electrical models.",
  },
  {
    name: "Demtool",
    fullName: "Demtool",
    tier: "Gold",
    logo: "https://static.wixstatic.com/media/6a67b4_0a478cb7e63141a3935f9fd7b6af222f~mv2.png",
    alt: "demtool logo",
    website: "https://demtool.com/",
    since: "Febraury 2022",
    blurb: "We're incredibly grateful to Demtool Inc. for machining our chassis.",
  },
  {
    name: "Dean of Eng",
    fullName: "UW Faculty of Engineering",
    tier: "Silver",
    logo: "https://static.wixstatic.com/media/6a67b4_da3848c62c0347edab53dd7727c0403c~mv2.png",
    alt: "University of Waterloo Faculty of Engineering Logo",
    website: "https://uwaterloo.ca/engineering/",
    since: "Nov 2021",
    blurb: "Thanks so much to the Dean of UW Engineering for providing us with integral monetary contributions! These contributions help keep UW Orbital running smoothly and efficiently.",
  },
  {
    name: "Hakko",
    fullName: "Hakko",
    tier: "Silver",
    logo: "https://static.wixstatic.com/media/6a67b4_432ee41e9de543bda1a91c599f1ef44e~mv2.png",
    alt: "hakko logo",
    website: "https://www.hakko.com/english/",
    since: "March 2022",
    blurb: "Thanks so much to Hakko for providing us with a Soldering Station! Hakko is a project management and note-taking software that our team uses on a daily basis for task distribution, documentation, and more.",
  },
  {
    name: "Altium",
    fullName: "Altium",
    tier: "Silver",
    logo: "https://static.wixstatic.com/media/6a67b4_2fa006d3b550415dab4421cbadec0ab4~mv2.png",
    alt: "altium logo",
    website: "https://www.altium.com/",
    since: "December 2021",
    blurb: "Thanks so much to Altium for providing us with their invaluable PCB Design software! Altium is a software tool provider that specializes in PCB Design software that our team uses directly to plan and create PCBs for our Cubesat.",
  },
  {
    name: "VectorNav",
    fullName: "VectorNav",
    tier: "Silver",
    logo: "https://static.wixstatic.com/media/6a67b4_c5bb2f1cebbf458da9f5e1cb34a2401f~mv2.png",
    alt: "vectornav logo",
    website: "https://www.vectornav.com/",
    since: "Jun 2022",
    blurb: "We are inexpressibly grateful to VectorNav for their generous sponsorship of a VN-100 Rugged & Development Kit. This powerful internal measurement device (IMU) provides our satellite with valuable measurements of its attitude, angular and linear velocities, magnetic field interaction and much, much more. The development kit allows for a student team like us to easily learn and operate such a complex device.",
  },
  {
    name: "Rising Youth",
    fullName: "RisingYouth / Canada Service Corps",
    tier: "Bronze",
    logo: "https://static.wixstatic.com/media/6a67b4_f8ca2bf1b5c4497196393e0122fd7fb3~mv2.png",
    alt: "Rising Youth.png",
    website: "https://www.risingyouth.ca/",
    since: "March 2022",
    blurb: "We're incredibly grateful to Rising Youth Foundation supported by TakingIT Global, Canada Service Corps, and the Government of Canada for providing UW Orbital with monetary funding of $1500. The Rising Youth Foundation supports youth-led projects that benefit the community. For more information on TakingIT Global and the Canada Service Corps just click on the logos of the organizations!",
  },
  {
    name: "Pelican",
    fullName: "Pelican",
    tier: "Bronze",
    logo: "https://static.wixstatic.com/media/6a67b4_fec6ab4f1d4f4cbd9465d925f5784971~mv2.png",
    alt: "Pelican Logo",
    website: "https://www.pelican.com/",
    since: "June 2022",
    blurb: "We're incredibly grateful to Pelican for providing UW Orbital with their with a secure, weather-proof case for our satellite for transport to and from the competition venue.",
  },
  {
    name: "Stratodynamics",
    fullName: "Stratodynamics",
    tier: "Bronze",
    logo: "https://static.wixstatic.com/media/6a67b4_f09ca22e5cbb4e2ab67c91a01ffd7712~mv2.png",
    alt: "Stratodynamics Aviation logo",
    website: "http://www.stratodynamics.ca/",
    since: "",
    blurb: "We're incredibly grateful to Stratodynamics for providing UW Orbital with crucial monetary contributions! Stratodynamics provide high-altitude flight services for global clients and collaborators requiring remote earth observations or in-situ monitoring.",
  },
  {
    name: "IEEE Canadian Foundation",
    fullName: "IEEE Canadian Foundation",
    tier: "Bronze",
    logo: "https://static.wixstatic.com/media/6a67b4_64f3b3a1cc534a5f95c07f44539307aa~mv2.jpeg",
    alt: "IEEE Canadian Foundation logo",
    website: "https://www.ieeecanadianfoundation.org/EN/",
    since: "April 2022",
    blurb: "We're incredibly grateful to the Institute of Electrical and Electronics Engineers Canadian Foundation for providing UW Orbital with monetary funds of a one-time Special grant $1250. The foundation's aim is to foster technological innovation and excellence to benefit humanity!",
  },
  {
    name: "SpeedPro",
    fullName: "SpeedPro",
    tier: "Bronze",
    logo: "https://static.wixstatic.com/media/6a67b4_fbd754c5ba94421fb07dfcbd9d38f7e3~mv2.png",
    alt: "speedpro logo",
    website: "https://www.speedpro.com/",
    since: "January 2022",
    blurb: "We're incredibly grateful to SpeedPro for providing UW Orbital with amazing custom stickers! which are integral in allowing UW Orbital to reach its lofty goals. SpeedPro is the nation’s leader in large format graphics such as wall murals, event graphics and trade show displays.",
  },
  {
    name: "RTL-SDR",
    fullName: "RTL-SDR",
    tier: "Bronze",
    logo: "https://static.wixstatic.com/media/6a67b4_1e6a4d790139413aa135cc0b48c296b7~mv2.png",
    alt: "RTL SDR logo",
    website: "https://www.rtl-sdr.com/",
    since: "November 2021",
    blurb: "We're incredibly grateful to RTL-SDR for providing UW Orbital with a USB-dongle with computer based radio scanner capabilities! RTL-SDR's contribution will allow us to perform crucial activities such as receiving radio signals for our first payload.",
  },
  {
    name: "Wix",
    fullName: "Wix",
    tier: "Bronze",
    logo: "https://static.wixstatic.com/media/6a67b4_c1579ee067e74929be98bb2f4ae250fc~mv2.png",
    alt: "Wix logo",
    website: "https://www.wix.com/",
    since: "May 2022",
    blurb: "We're incredibly grateful to Wix for sponsoring us in order to build this website.",
  },
  {
    name: "EngSoc",
    fullName: "Waterloo Engineering Society",
    tier: "Bronze",
    logo: "https://static.wixstatic.com/media/6a67b4_3efcc0b8457e4cacb6a4db9fea27c863~mv2.png",
    alt: "University of Waterloo Engsoc logo",
    website: "https://www.engsoc.uwaterloo.ca/",
    since: "February 2022",
    blurb: "We're incredibly grateful to the Waterloo Engineering Society for providing UW Orbital with crucial monetary contributions, which are integral in allowing UW Orbital to reach its lofty goals.",
  },
  {
    name: "Waterloo Electroplating",
    fullName: "Waterloo Electroplating",
    tier: "Bronze",
    logo: "https://static.wixstatic.com/media/6a67b4_ce2c497697e84550917a7b640429358d~mv2.jpeg",
    alt: "Waterloo Electroplating and Metal Finishing Logo",
    website: "http://www.waterlooelectroplating.com/",
    since: "February 2022",
    blurb: "We're incredibly grateful to Waterloo Electroplating & Metal Finishing for their electroplating services.",
  },
  {
    name: "Great Scott Gadgets",
    fullName: "Great Scott Gadgets",
    tier: "Bronze",
    logo: "https://static.wixstatic.com/media/6a67b4_ed32771e872e4bd6808899777b75c644~mv2.png",
    alt: "Great Scott Gadgets logo",
    website: "https://greatscottgadgets.com/",
    since: "November 2021",
    blurb: "We're incredibly grateful to Great Scott Gadgets for providing UW Orbital with their HackRF One SDR, which is essentially a radio that we can use for ground station prototyping.",
  },
]
