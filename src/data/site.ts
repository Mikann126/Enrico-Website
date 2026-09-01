export const profile = {
  name: "Enrico C. Perotti",
  title: "Professor of Finance",
  affiliation: "Amsterdam Business School, University of Amsterdam",
  email: "e.c.perotti@uva.nl",
  address: [
    "Department of Finance, Amsterdam Business School",
    "Plantage Muidergracht 12",
    "1018 TV Amsterdam, The Netherlands",
  ],
  summary:
    "Professor of Finance at the Amsterdam Business School, University of Amsterdam. His research and policy work focus on financial intermediation, financial stability, bank regulation, macrofinance, political economy, and financial and legal history.",
  links: {
    cv: "/cv/",
    publications: "/publications/",
    currentWork: "/current-work/",
    contact: "/contact/",
    cepr: "https://cepr.org/about/people/enrico-perotti",
    voxeu: "https://cepr.org/voxeu",
    university: "#",
  },
};

export const navItems = [
  { label: "Home", href: "/" },
  { label: "CV", href: "/cv/" },
  { label: "Current Work", href: "/current-work/" },
  { label: "Publications", href: "/publications/" },
  { label: "Contact", href: "/contact/" },
];

export const highlights = [
  { value: "1994-", label: "Professor of Finance, University of Amsterdam" },
  { value: "MIT", label: "Ph.D. in Finance, advised by Modigliani, Merton, and Tirole" },
  { value: "DNB", label: "Senior Advisor on Financial Stability" },
  { value: "BoE", label: "Houblon Norman Fellow and Senior Advisor, 2026-2027" },
];

export const researchThemes = [
  {
    code: "FS",
    title: "Financial Stability & Regulation",
    text: "Prudential policy, regulatory reform, resilience, and the institutional design of safeguards.",
  },
  {
    code: "BR",
    title: "Banking, Liquidity & Runs",
    text: "Bank fragility, recovery tools, contingent fees, liquidity runs, and run-prevention mechanisms.",
  },
  {
    code: "MF",
    title: "Macrofinance & Growth",
    text: "Long-term growth, leverage cycles, corporate credit, and the financial system over time.",
  },
  {
    code: "PE",
    title: "Political Economy",
    text: "The political origins of financial rules, corporate control, privatization, and institutional change.",
  },
  {
    code: "LH",
    title: "Financial & Legal History",
    text: "Historical foundations of financial forms, investor protection, and legal enforcement.",
  },
  {
    code: "OT",
    title: "Organization Theory",
    text: "Ideas, firms, markets, organizational incentives, and the circulation of knowledge.",
  },
];

export const currentProjects = [
  {
    title: "Sand in the Wheels",
    theme: "Banking & Regulation",
    status: "Working paper",
    authors: "With Remo Oostdam and Rafael da Matta",
    summary:
      "A current project on contingent fees as a less drastic mechanism for addressing liquidity runs.",
    visual: "/assets/visual-placeholder.svg",
    links: [{ label: "PDF", href: "#" }],
    featured: true,
  },
  {
    title: "Stablecoin policy",
    theme: "Policy Design",
    status: "Work in progress",
    authors: "",
    summary: "Regulatory equivalence and redemption arbitrage across jurisdictions.",
    visual: "",
    links: [],
    featured: true,
  },
  {
    title: "AT1 debt reform",
    theme: "Bank Capital",
    status: "Work in progress",
    authors: "",
    summary: "Making contingent capital credible as a going-concern equity instrument.",
    visual: "",
    links: [],
    featured: true,
  },
];

export const workThemes = [
  { id: "banking", label: "Banking & Regulation" },
  { id: "corporate", label: "Corporate Finance" },
  { id: "macro", label: "Macrofinance & Growth" },
  { id: "organization", label: "Organization Theory" },
  { id: "political", label: "Political Economy & Legal History" },
];

export const workInProgress = [
  {
    themeId: "banking",
    title: "Seeking Safety Capital Flows",
    authors: "With Toni Ahnert",
    status: "Working paper",
    summary:
      "Safety-seeking capital inflows, demandable debt, and run risk in countries with strong property-right protections.",
    links: [{ label: "Details / PDF", href: "#" }],
  },
  {
    themeId: "banking",
    title: "Pay, Stay, or Delay? How to Settle a Run",
    authors: "With Rafael da Matta",
    status: "Working paper",
    summary:
      "Redemption rules, mandatory stays, and the trade-off between liquidity provision and value preservation during a run.",
    links: [{ label: "Details / PDF", href: "#" }],
  },
  {
    themeId: "banking",
    title: "Insecure Debt",
    authors: "With Rafael da Matta",
    status: "Working paper",
    summary:
      "How asset liquidity risk can generate bank runs even when fundamental risk is minimal.",
    links: [{ label: "Details / PDF", href: "#" }],
  },
  {
    themeId: "corporate",
    title: "Creating Intangible Capital",
    authors: "",
    status: "Work in progress",
    summary:
      "A framework for intangible capital creation through firm resources and skilled human capital.",
    links: [{ label: "Details", href: "#" }],
  },
  {
    themeId: "macro",
    title: "Redistributive Growth",
    authors: "",
    status: "Work in progress",
    summary:
      "A long-run growth account connecting intangible capital, asset scarcity, inequality, and financial stagnation.",
    links: [{ label: "Details", href: "#" }],
  },
  {
    themeId: "organization",
    title: "Resistance to Change",
    authors: "",
    status: "Work in progress",
    summary:
      "Internal resistance to disruptive adjustment and why incumbent firms struggle after major shifts.",
    links: [{ label: "Details", href: "#" }],
  },
  {
    themeId: "political",
    title: "Monetary Union among Diverse Countries",
    authors: "",
    status: "Work in progress",
    summary:
      "Institutional diversity, monetary unification, borrowing costs, and redistributive transfers.",
    links: [{ label: "Details", href: "#" }],
  },
];

export const publicationThemes = [
  { id: "banking", label: "Banking & Macrofinance" },
  { id: "political", label: "Political Economy" },
  { id: "organization", label: "Organisational Theory" },
  { id: "corporate", label: "Corporate Finance" },
];

export const featuredPublications = [
  {
    title: "Containing Runs on Solvent Banks",
    tag: "Banking and financial stability",
    authors: "With Edoardo Martino",
    venue: "Journal of Financial Crises",
    year: "2025",
    summary:
      "Prioritizing recovery over resolution and designing tools that reduce run incentives.",
    coverImage: "",
    links: [{ label: "Details", href: "#" }],
  },
  {
    title: "Sand in the Wheels",
    tag: "Contingent fees",
    authors: "With Remo Oostdam and Rafael da Matta",
    venue: "Working paper",
    year: "",
    summary:
      "A current project on contingent fees as a less drastic mechanism for addressing liquidity runs.",
    coverImage: "",
    links: [{ label: "Details", href: "#" }],
  },
  {
    title: "The Political Economy of Corporate Control",
    tag: "Political economy",
    authors: "With Ernst-Ludwig von Thadden",
    venue: "Journal of Political Economy",
    year: "2006",
    summary:
      "A foundational paper on how political institutions shape corporate control and financial rules.",
    coverImage: "",
    links: [{ label: "Details", href: "#" }],
  },
];

export const publications = [
  {
    themeId: "banking",
    title: "The Good, the Bad and the Missed Boom",
    authors: "With Magda Rola-Janicka",
    venue: "Review of Financial Studies",
    year: "2022",
    summary:
      "Credit booms, funding imbalances, and the conditions that make financial cycles fragile.",
    coverImage: "",
    links: [
      { label: "Published version", href: "#" },
      { label: "Ungated version", href: "#" },
    ],
  },
  {
    themeId: "banking",
    title: "Cheap but flighty: A theory of safety-seeking capital flows",
    authors: "With Toni Ahnert",
    venue: "Journal of Banking and Finance",
    year: "2021",
    summary:
      "Safe-asset demand, cross-border capital flows, and macroprudential regulation.",
    coverImage: "",
    links: [
      { label: "Published version", href: "#" },
      { label: "Ungated version", href: "#" },
    ],
  },
];

export const publicWriting = [
  {
    type: "CEPR Policy Insight",
    title: "Financial resilience as flood containment",
    meta: "CEPR Policy Insight No. 136",
    href: "#",
  },
  {
    type: "SUERF Policy Note",
    title: "Protect the Safe Core: Restating the Central Bank Mandate",
    meta: "No. 327 / 2023",
    href: "#",
  },
  {
    type: "VOXEU",
    title: "Building bank resilience by Additional Tier 1 debt reform",
    meta: "26 Jan 2026",
    href: "#",
  },
];

export const cvTimeline = [
  {
    date: "1994-",
    title: "Professor of Finance",
    detail: "University of Amsterdam; Department Head, 2001-2008.",
  },
  {
    date: "1989-1994",
    title: "Assistant Professor",
    detail: "Boston University Graduate School of Management.",
  },
  {
    date: "1985-1990",
    title: "Ph.D. in Finance",
    detail:
      "Massachusetts Institute of Technology. Thesis advisors: Franco Modigliani, Robert Merton, and Jean Tirole.",
  },
  {
    date: "1978-1984",
    title: "Laurea",
    detail: "Discipline Economiche e Sociali, Universita' Bocconi, Milan.",
  },
];

export const advisoryRoles = [
  {
    code: "DNB",
    institution: "De Nederlandsche Bank",
    detail:
      "Senior Advisor to the Board, 2024-2026; Senior Advisor on Macroprudential Policy, 2010-2012.",
  },
  {
    code: "ECB / ESRB",
    institution: "European Central Bank / ESRB",
    detail:
      "Member of the ESRB Advisory Scientific Committee; advisor on macroprudential policy and financial stability.",
  },
  {
    code: "BOE",
    institution: "Bank of England",
    detail: "Houblon Norman Fellow and Senior Advisor, 2010-2012 and 2026-2027.",
  },
];

export const recognition =
  "NWO Open Competitie Grant; Wim Duisenberg Fellowship at the European Central Bank; Houblon-Norman Fellowship at the Bank of England; Lopez de la Vega Prize; MIT Sloan School Doctoral Fellowship.";
