import type {
  Player,
  Leader,
  Award,
  MatchResult,
  Honor,
  Announcement,
  NavLink,
  Social,
  ChatPreset,
  ClubValue,
} from "@/types";

export const IMAGES = {
  hero: "https://dala-prod-public-storage.s3.eu-west-1.amazonaws.com/generated-images/60e08d46-7a4f-4844-b254-e3d1a4e086fe/hero-stadium-b3686dc3-1790244142384.webp",
  crest: "https://dala-prod-public-storage.s3.eu-west-1.amazonaws.com/generated-images/60e08d46-7a4f-4844-b254-e3d1a4e086fe/club-crest-9e844462-1790244141778.webp",
  trophy: "https://dala-prod-public-storage.s3.eu-west-1.amazonaws.com/generated-images/60e08d46-7a4f-4844-b254-e3d1a4e086fe/championship-trophy-c553b118-1790244141289.webp",
};

export const CLUB = {
  name: "Alier Geng FA",
  tagline: "Home of the Champions",
  base: "Hai Referendum, Juba, South Sudan",
  headline: "Welcome to Alier Geng FA - Home of the Champions",
  subheadline: "Defending Champions of Luac Akook Yieu / Luac Malou First Edition",
  championBadge: "Luac Malou 1st Edition Champions",
  about: [
    "Alier Geng Football Academy is a community-rooted club from Hai Referendum in Juba, South Sudan, built on the belief that football unites a neighborhood and lifts a generation. We develop local talent, honor our elders, and compete with pride on every pitch we touch.",
    "In its debut campaign the club etched its name into history, lifting the Luac Akook Yieu / Luac Malou First Edition Trophy. That title is not the finish line - it is the foundation of a dynasty the whole community is building together.",
  ],
  mission:
    "To grow champions on and off the pitch through sportsmanship, unity, resilience, and community empowerment in Hai Referendum and beyond.",
};

export const NAV_LINKS: NavLink[] = [
  { id: "home", label: "Home" },
  { id: "about", label: "About & Leadership" },
  { id: "squad", label: "Squad" },
  { id: "match", label: "Match Center" },
  { id: "fanzone", label: "Fan Zone" },
  { id: "contact", label: "Contact" },
];

export const VALUES: ClubValue[] = [
  {
    id: "sportsmanship",
    title: "Sportsmanship",
    detail: "We win with humility and lose with dignity, respecting every rival and referee.",
    icon: "shield",
  },
  {
    id: "unity",
    title: "Unity",
    detail: "One squad, one neighborhood. Players, families and fans move as a single force.",
    icon: "users",
  },
  {
    id: "resilience",
    title: "Resilience",
    detail: "From local dirt pitches to the championship podium, we never stop fighting.",
    icon: "target",
  },
  {
    id: "community",
    title: "Community Empowerment",
    detail: "Youth clinics, clean-up drives and mentorship keep the club rooted in Hai Referendum.",
    icon: "heart",
  },
];

export const LEADERSHIP: Leader[] = [
  {
    id: "thon-atem",
    name: "H.E. Thon Atem",
    title: "Club President",
    org: "Alier Geng FA",
    note: "Visionary founder steering the club from community dream to champion reality.",
    initials: "TA",
  },
  {
    id: "angok-athor",
    name: "Angok Athor",
    title: "Club President",
    org: "Alier Geng FA",
    note: "Co-president and backbone of operations, discipline and player welfare.",
    initials: "AA",
  },
  {
    id: "awuol-lino",
    name: "Awuol Peter Lino",
    title: "Federation President",
    org: "Luach Akook Yieu Football Federation",
    note: "Leagues the federation that crowned the First Edition and grew the local game.",
    initials: "AL",
  },
];

export const SQUAD: Player[] = [
  {
    id: "happy-thon",
    name: "Happy Thon",
    role: "Head Coach",
    position: "Staff",
    bio: "Tactical mastermind behind the First Edition triumph, blending pressing intensity with calm build-up play.",
    badges: ["Best Coach Nominee", "Title Winner"],
    stats: [
      { label: "Games", value: "7" },
      { label: "Wins", value: "6" },
      { label: "Clean Sheets", value: "5" },
    ],
    accent: "from-amber-400 to-yellow-600",
  },
  {
    id: "abiey-luat",
    name: "Abiey Luat",
    role: "Goalkeeper",
    position: "Goalkeeper",
    number: 1,
    bio: "The Golden Glove. Shot-stopper, penalty hero and the club's IT specialist who engineers our defence like code.",
    badges: ["Best Goalkeeper", "Penalty Hero"],
    stats: [
      { label: "Saves", value: "34" },
      { label: "PK Saved", value: "2" },
      { label: "Clean Sheets", value: "5" },
    ],
    accent: "from-emerald-400 to-teal-600",
  },
  {
    id: "deng-hakim",
    name: "Deng Hakim",
    role: "Captain / Midfielder",
    position: "Midfielder",
    number: 8,
    captain: true,
    bio: "The skipper. Controls tempo, wins the duels and lifts the trophy when it matters most.",
    badges: ["Captain", "Engine Room"],
    stats: [
      { label: "Passes", value: "312" },
      { label: "Tackles", value: "41" },
      { label: "Assists", value: "6" },
    ],
    accent: "from-amber-300 to-orange-500",
  },
  {
    id: "chol-thon",
    name: "Chol Thon",
    role: "Attacking Midfielder",
    position: "Midfielder",
    number: 10,
    bio: "Tournament MVP. The creative spark whose vision and goals carried Alier Geng to glory.",
    badges: ["Best Player / MVP", "Playmaker"],
    stats: [
      { label: "Goals", value: "7" },
      { label: "Assists", value: "8" },
      { label: "Key Passes", value: "29" },
    ],
    accent: "from-yellow-400 to-amber-600",
  },
  {
    id: "malou-nyok",
    name: "Malou Nyok",
    role: "Striker",
    position: "Forward",
    number: 9,
    bio: "The Golden Boot. A ruthless finisher and the tournament's top scorer with ice in his veins.",
    badges: ["Top Scorer", "Golden Boot"],
    stats: [
      { label: "Goals", value: "9" },
      { label: "Shots", value: "38" },
      { label: "On Target", value: "24" },
    ],
    accent: "from-amber-400 to-red-500",
  },
  {
    id: "chan-mark",
    name: "Chan Mark",
    role: "Assistant Coach",
    position: "Staff",
    bio: "Set-piece specialist and man-manager, the calm voice on the bench beside Happy Thon.",
    badges: ["Title Winner", "Set Pieces"],
    stats: [
      { label: "Role", value: "Asst Coach" },
      { label: "Seasons", value: "3" },
      { label: "Trophies", value: "1" },
    ],
    accent: "from-emerald-500 to-green-700",
  },
  {
    id: "adem-james",
    name: "Adem James",
    role: "Centre Back",
    position: "Defender",
    number: 4,
    bio: "The rock at the back. Aerial dominator and last line before Abiey Luat.",
    badges: ["Iron Wall"],
    stats: [
      { label: "Tackles", value: "52" },
      { label: "Aerials", value: "44" },
      { label: "Blocks", value: "18" },
    ],
    accent: "from-teal-400 to-emerald-700",
  },
  {
    id: "buk-deng",
    name: "Buk Deng",
    role: "Right Winger",
    position: "Forward",
    number: 7,
    bio: "Electric pace on the flank, beating men and whipping in dangerous crosses.",
    badges: ["Pace Merchant"],
    stats: [
      { label: "Dribbles", value: "37" },
      { label: "Assists", value: "5" },
      { label: "Goals", value: "3" },
    ],
    accent: "from-amber-300 to-yellow-600",
  },
  {
    id: "lak-peter",
    name: "Lak Peter",
    role: "Left Back",
    position: "Defender",
    number: 3,
    bio: "Tireless engine down the left, defending with grit and overlapping with flair.",
    badges: ["Workhorse"],
    stats: [
      { label: "Tackles", value: "33" },
      { label: "Crosses", value: "21" },
      { label: "Distance", value: "71km" },
    ],
    accent: "from-emerald-400 to-green-700",
  },
];

export const SQUAD_FILTERS = [
  "All",
  "Forwards",
  "Midfielders",
  "Defenders",
  "Goalkeepers",
  "Management & Staff",
] as const;

export const FILTER_TO_POSITION: Record<string, string[]> = {
  All: [],
  Forwards: ["Forward"],
  Midfielders: ["Midfielder"],
  Defenders: ["Defender"],
  Goalkeepers: ["Goalkeeper"],
  "Management & Staff": ["Staff"],
};

export const FINAL_MATCH: MatchResult = {
  opponent: "Kuec Atong",
  competition: "Luac Akook Yieu / Luac Malou First Edition Final",
  date: "February 2, 2026",
  score: "2 - 1",
  penalties: "Decisive title won after a golden final",
  recap:
    "Under the floodlights of Hai Referendum, Alier Geng FA wrote history. Chol Thon threaded the opener, Malou Nyok doubled the lead with a poacher's finish, and Abiey Luat sealed the night with a fingertip save in stoppage time to keep the Golden Glove clean. When the final whistle blew, the neighborhood became champions of the First Edition.",
  timeline: [
    { minute: "12'", event: "GOAL! Chol Thon curls home from the edge of the box (1-0).", kind: "goal" },
    { minute: "38'", event: "Huge double save from Abiey Luat keeps Kuec Atong level.", kind: "save" },
    { minute: "55'", event: "GOAL! Malou Nyok pounces on the rebound (2-0).", kind: "goal" },
    { minute: "71'", event: "Kuec Atong pull one back from a corner.", kind: "key" },
    { minute: "88'", event: "Deng Hakim wins a crunching tackle to break the counter.", kind: "card" },
    { minute: "90+3'", event: "Abiey Luat tips the equaliser onto the bar. FULL TIME: Champions!", kind: "whistle" },
  ],
};

export const HONORS: Honor[] = [
  {
    id: "first-edition",
    title: "Luac Malou First Edition Champions",
    season: "2026",
    detail: "Inaugural tournament title, undefeated from the group stage to the final.",
  },
  {
    id: "fair-play",
    title: "Fair Play Award",
    season: "2026",
    detail: "Fewest fouls and cards in the tournament, a mark of disciplined champions.",
  },
  {
    id: "best-attack",
    title: "Highest Scoring Side",
    season: "2026",
    detail: "Most goals across the First Edition, led by Golden Boot Malou Nyok.",
  },
];

export const AWARDS: Award[] = [
  {
    id: "a-gk",
    recipient: "Abiey Luat",
    award: "Best Goalkeeper",
    category: "Golden Glove",
    detail: "34 saves and a decisive stoppage-time save in the final.",
    icon: "glove",
  },
  {
    id: "a-mvp",
    recipient: "Chol Thon",
    award: "Best Player",
    category: "Tournament MVP",
    detail: "7 goals and 8 assists, the creative heartbeat of the champions.",
    icon: "trophy",
  },
  {
    id: "a-boot",
    recipient: "Malou Nyok",
    award: "Top Scorer",
    category: "Golden Boot",
    detail: "9 goals in the First Edition, the most clinical finisher.",
    icon: "boot",
  },
  {
    id: "a-coach",
    recipient: "Chan Mark",
    award: "Best Coach",
    category: "Tactical Excellence",
    detail: "Masterminded the set pieces and defensive shape all tournament.",
    icon: "coach",
  },
  {
    id: "a-fan",
    recipient: "Adhieu Lem",
    award: "Best Fan",
    category: "Super Supporter",
    detail: "The loudest voice in Hai Referendum, the soul of the stands.",
    icon: "fan",
  },
];

export const ANNOUNCEMENTS: Announcement[] = [
  {
    id: "an-1",
    title: "Champions Victory Tour",
    date: "Feb 15, 2026",
    location: "Hai Referendum Main Square",
    kind: "tour",
    summary: "Parade the Luac Malou trophy through the neighborhood with players, families and fans.",
  },
  {
    id: "an-2",
    title: "Youth Training Clinic",
    date: "Feb 22, 2026",
    location: "Alier Geng Community Pitch",
    kind: "clinic",
    summary: "Free coaching for under-15s led by Happy Thon and the first-team squad.",
  },
  {
    id: "an-3",
    title: "Community Members Meeting",
    date: "Mar 1, 2026",
    location: "Hai Referendum Hall",
    kind: "meeting",
    summary: "Plan the Second Edition campaign, ticketing and new youth scholarship fund.",
  },
  {
    id: "an-4",
    title: "Neighborhood Clean-Up Drive",
    date: "Mar 8, 2026",
    location: "Around Club Grounds",
    kind: "community",
    summary: "Players and volunteers give back by tidying the streets that raised them.",
  },
];

export const SOCIALS: Social[] = [
  { id: "wa", label: "WhatsApp", href: "https://wa.me/211900000000", icon: "whatsapp" },
  { id: "fb", label: "Facebook", href: "https://facebook.com/aliergengfa", icon: "facebook" },
  { id: "ms", label: "Messenger", href: "https://m.me/aliergengfa", icon: "messenger" },
];

export const SUBJECT_OPTIONS = [
  "General Enquiry",
  "Join the Academy",
  "Match & Ticketing",
  "Sponsorship",
  "Community Event",
];

export const CHAT_PRESETS: ChatPreset[] = [
  {
    id: "p1",
    label: "How do I save a penalty?",
    answer:
      "Watch the hips, not the eyes. Plant your feet, stay big, and commit late. That is how I tipped the final away in stoppage time. The Golden Glove is earned in the mind before the hands. 🧤",
  },
  {
    id: "p2",
    label: "What makes Alier Geng champions?",
    answer:
      "Unity and resilience. Hai Referendum raised us. We defend as ten and attack as one, and we never believe the game is over. That is the champion DNA of Alier Geng FA.",
  },
  {
    id: "p3",
    label: "Tell me about the Feb 2 Final!",
    answer:
      "February 2, 2026 against Kuec Atong. Chol Thon opened the scoring, Malou Nyok made it 2-0, and I locked the door with a 90+3 fingertip save. Luac Malou First Edition, and the trophy came home to Hai Referendum!",
  },
  {
    id: "p4",
    label: "Goalkeeping tips from Abiey Luat",
    answer:
      "Three rules: communicate loudly, catch what you can and punch what you must, and reset instantly after a goal. As the club IT specialist I say it like code - clean the error, keep the shape, restart strong.",
  },
  {
    id: "p5",
    label: "What is the next club event?",
    answer:
      "The Champions Victory Tour on Feb 15 at Hai Referendum Main Square, then a free youth clinic on Feb 22. Bring the whole family - the champions belong to the community.",
  },
];

export const BOT_FALLBACKS = [
  "Great question from the stands! Ask me about penalty saves, the Feb 2 final, our champions story, or the next club event.",
  "As Alier Geng's Golden Glove, I read the game fast. Try a preset below and I will break down how we won the First Edition.",
  "The crowd wants an answer! Tap a quick question about goalkeeping, the squad, or our victory tour and I will respond.",
];
