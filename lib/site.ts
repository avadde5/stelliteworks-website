/** Shared site content for Stellite Works — SAP consulting & implementation. */

/** Primary contact email — referenced by the CTA and footer. */
export const CONTACT_EMAIL = "hr@stelliteworks.com";

export const NAV = [
  { label: "Services", href: "/services" },
  { label: "Approach", href: "/#approach" },
  { label: "Outcomes", href: "/#outcomes" },
  { label: "Clients", href: "/#clients" },
] as const;

export type Service = {
  tag: string;
  title: string;
  body: string;
  points: string[];
};

export const SERVICES: Service[] = [
  {
    tag: "AMS",
    title: "SAP Application Management Services",
    body: "24×7 managed support for your SAP landscape — incident, problem, and change management run by consultants who know your processes, not a ticket queue.",
    points: ["L1–L3 support", "SLA-backed response", "Continuous improvement"],
  },
  {
    tag: "S/4HANA",
    title: "S/4HANA Implementation & Migration",
    body: "Greenfield, brownfield, or selective data transition — we plan and execute your move to S/4HANA with clean-core discipline and minimal disruption.",
    points: ["Brownfield & greenfield", "Clean-core readiness", "Cutover planning"],
  },
  {
    tag: "EWM",
    title: "Extended Warehouse Management",
    body: "Design and roll out SAP EWM for high-throughput operations — slotting, wave management, and automation that keep the dock moving.",
    points: ["Embedded & decentralized", "MFS automation", "Go-live hypercare"],
  },
  {
    tag: "FI/CO",
    title: "Finance & Controlling",
    body: "Configure FI/CO to close faster and report cleaner — from new GL and AP/AR to profitability analysis and group reporting.",
    points: ["New GL & ledgers", "Cost & profitability", "Period-close automation"],
  },
];

/* --- Services page -------------------------------------------------------- */

export type Pillar = {
  tag: string;
  title: string;
  lede: string;
  features: { title: string; body: string }[];
  outcomes: string[];
};

export const PILLARS: Pillar[] = [
  {
    tag: "AMS",
    title: "SAP Application Management Services",
    lede: "Your SAP landscape, run like our own. A dedicated team that knows your processes handles support, enhancements, and continuous improvement — so the business never waits on the system.",
    features: [
      {
        title: "24×7 incident & problem management",
        body: "L1–L3 support with SLA-backed response. We don't just close tickets — we trace root cause and stop recurrence.",
      },
      {
        title: "Change & release management",
        body: "Controlled transports, regression testing, and clean documentation on every change to keep the landscape stable.",
      },
      {
        title: "Proactive monitoring",
        body: "We watch batch jobs, interfaces, and performance so issues are caught before users feel them.",
      },
      {
        title: "Continuous improvement",
        body: "A standing backlog of optimizations — automation, Fiori adoption, and clean-core fixes delivered each sprint.",
      },
    ],
    outcomes: [
      "99.9% sustained uptime",
      "Named, process-aware team",
      "Predictable monthly cost",
    ],
  },
  {
    tag: "Implementations",
    title: "SAP Implementations & Migrations",
    lede: "From the first blueprint to go-live night, we plan and deliver SAP programs that land on time and stay upgrade-safe — greenfield, brownfield, or selective transition.",
    features: [
      {
        title: "S/4HANA transformation",
        body: "Greenfield, brownfield, or selective data transition with clean-core discipline and a tested cutover plan.",
      },
      {
        title: "Extended Warehouse Management",
        body: "Embedded or decentralized EWM for high-throughput operations — slotting, waves, and MFS automation.",
      },
      {
        title: "Finance & Controlling",
        body: "FI/CO configured to close faster and report cleaner — new GL, ledgers, and profitability analysis.",
      },
      {
        title: "Rollouts & integration",
        body: "Multi-site template rollouts and clean integration across MM, SD, PP, TM, and the wider SAP estate.",
      },
    ],
    outcomes: [
      "Fixed-scope cutover plan",
      "Upgrade-safe clean core",
      "Go-live hypercare included",
    ],
  },
];

export type Step = {
  no: string;
  title: string;
  body: string;
};

export const APPROACH: Step[] = [
  {
    no: "01",
    title: "Assay",
    body: "We audit your current landscape, processes, and pain points — mapping where the system bends and where it must hold.",
  },
  {
    no: "02",
    title: "Forge",
    body: "We architect and configure the solution with clean-core discipline, building only what survives an upgrade.",
  },
  {
    no: "03",
    title: "Temper",
    body: "Test, validate, and harden under realistic load before cutover — no surprises on go-live night.",
  },
  {
    no: "04",
    title: "Sustain",
    body: "We stay on as your AMS partner, tuning and supporting the landscape so it keeps performing for years.",
  },
];

export type Stat = {
  value: number;
  suffix: string;
  label: string;
};

export const STATS: Stat[] = [
  { value: 99.9, suffix: "%", label: "Landscape uptime sustained under AMS" },
  { value: 40, suffix: "+", label: "SAP implementations & rollouts delivered" },
  { value: 30, suffix: "%", label: "Average faster month-end close" },
  { value: 12, suffix: "yr", label: "Median consultant SAP experience" },
];

/** Full service offerings grid (Services page). */
export type Offering = {
  title: string;
  body: string;
};

export const OFFERINGS: Offering[] = [
  { title: "Advisory & roadmaps", body: "Landscape assessments, S/4HANA readiness, and pragmatic transformation roadmaps." },
  { title: "S/4HANA migration", body: "Greenfield, brownfield, and selective data transition with tested cutover." },
  { title: "EWM & logistics", body: "Warehouse design, slotting, wave management, and material flow automation." },
  { title: "Finance (FI/CO)", body: "New GL, ledgers, cost center accounting, and faster period-close." },
  { title: "MM / SD / PP", body: "Procure-to-pay, order-to-cash, and production planning configuration." },
  { title: "Fiori & UX", body: "Modern Fiori launchpads and apps that drive real user adoption." },
  { title: "BTP & integration", body: "Extensions, APIs, and clean-core side-by-side development on SAP BTP." },
  { title: "Analytics (SAC / Datasphere)", body: "Planning, reporting, and a trustworthy single source of truth." },
  { title: "Managed AMS", body: "24×7 support, monitoring, and continuous improvement for the whole estate." },
];

/** Engagement models (Services page). */
export type Engagement = {
  name: string;
  body: string;
  best: string;
};

export const ENGAGEMENTS: Engagement[] = [
  {
    name: "Project delivery",
    body: "Fixed-scope implementation or migration with a defined plan, milestones, and go-live.",
    best: "Best for transformations & rollouts",
  },
  {
    name: "Managed AMS",
    body: "An ongoing, SLA-backed team running and improving your live SAP landscape.",
    best: "Best for run & continuous improvement",
  },
  {
    name: "Staff augmentation",
    body: "Senior SAP consultants embedded into your team to add capacity where it's tight.",
    best: "Best for filling a specific skills gap",
  },
];

/** Modules / capabilities marquee. */
export const MODULES = [
  "S/4HANA",
  "EWM",
  "FI/CO",
  "MM",
  "SD",
  "PP",
  "BTP",
  "Fiori",
  "TM",
  "Ariba",
  "Datasphere",
  "SAC",
];
