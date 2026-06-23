/**
 * =============================================================================
 *  SITE CONTENT — single source of truth
 * =============================================================================
 *  Edit everything about the site from this one file.
 *  Look for "TODO" markers for things to update later (links, deploy URL, etc.).
 * =============================================================================
 */

export type IconName =
  | "github"
  | "linkedin"
  | "mail"
  | "twitter"
  | "kaggle"
  | "scholar"
  | "globe";

export type ProjectCategory = "Machine Learning" | "Analytics" | "Data Viz";

export type SkillCategory =
  | "Languages"
  | "ML / AI"
  | "Data & Viz"
  | "Tools & Productivity";

export interface SocialLink {
  label: string;
  href: string;
  icon: IconName;
  /** Shown as the handle/preview text, e.g. "in/thoi-thuan-nguyen" */
  handle?: string;
}

export interface Skill {
  name: string;
  /** 0–100 proficiency, used by the skill bars */
  level: number;
  category: SkillCategory;
}

export interface RadarAxis {
  axis: string;
  /** 0–100 */
  value: number;
}

export interface Project {
  slug: string;
  title: string;
  summary: string;
  description: string;
  category: ProjectCategory;
  tags: string[];
  year: number;
  featured?: boolean;
  metrics?: { label: string; value: string }[];
  links?: {
    demo?: string;
    repo?: string;
    report?: string;
  };
}

export interface TimelineItem {
  period: string;
  title: string;
  org: string;
  location?: string;
  description: string;
  highlights?: string[];
}

export interface Stat {
  label: string;
  value: string;
}

export interface MonthlyActivity {
  month: string;
  value: number;
}

/* -------------------------------------------------------------------------- */
/*  Profile                                                                    */
/* -------------------------------------------------------------------------- */

export const profile = {
  name: "Tony Nguyen",
  firstName: "Tony",
  role: "Business Analytics & Data Science Student",
  tagline: "Turning data into clear, useful insights.",
  summary:
    "Business Analytics & Data Science student at the University of Sydney (graduating 2027) with hands-on experience turning data into clear, useful insights. Comfortable using Python and Excel to collect, clean and analyse data, and Microsoft Office Specialist (Excel) certified. A diligent, detail-oriented team player looking to apply analytical and problem-solving skills in a professional setting.",
  location: "Sydney, NSW, Australia",
  availability: "Open to data & analytics internships",
  email: "thoithuannguyen0801@gmail.com",
  avatar: null as string | null,
  resumeUrl: "/resume.pdf",
} as const;

/* -------------------------------------------------------------------------- */
/*  Navigation + socials                                                       */
/* -------------------------------------------------------------------------- */

export const nav: { label: string; href: string }[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

// Only REAL links are live. Phone number from the CV is intentionally kept off
// the public site.
export const socials: SocialLink[] = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/thoi-thuan-nguyen-539307319/",
    icon: "linkedin",
    handle: "in/thoi-thuan-nguyen",
  },
  {
    label: "Email",
    href: `mailto:${profile.email}`,
    icon: "mail",
    handle: profile.email,
  },
  // TODO: Tony doesn't have public GitHub/Kaggle yet. Uncomment + add real URLs
  // when available (icons already supported by <SocialIcon />):
  // {
  //   label: "GitHub",
  //   href: "https://github.com/<username>",
  //   icon: "github",
  //   handle: "@<username>",
  // },
  // {
  //   label: "Kaggle",
  //   href: "https://kaggle.com/<username>",
  //   icon: "kaggle",
  //   handle: "@<username>",
  // },
];

/* -------------------------------------------------------------------------- */
/*  Home page stats + highlights                                               */
/* -------------------------------------------------------------------------- */

export const stats: Stat[] = [
  { label: "Academic WAM", value: "76.1" },
  { label: "Data projects", value: "3" },
  { label: "MOS certified", value: "Excel" },
  { label: "Graduating", value: "2027" },
];

export const highlights: { title: string; description: string; icon: string }[] =
  [
    {
      icon: "database",
      title: "Data Analytics",
      description:
        "Collecting, cleaning, and analysing data with Python and Excel to surface clear, useful insights.",
    },
    {
      icon: "brain",
      title: "Machine Learning",
      description:
        "Hands-on with clustering, PCA, and classification to segment customers and find patterns.",
    },
    {
      icon: "chart",
      title: "Data Storytelling",
      description:
        "Turning analysis into dashboards, charts, and reports anyone can read.",
    },
  ];

/* -------------------------------------------------------------------------- */
/*  Skills                                                                      */
/* -------------------------------------------------------------------------- */

export const skills: Skill[] = [
  { name: "Python", level: 82, category: "Languages" },
  { name: "SQL", level: 75, category: "Languages" },
  { name: "VBA", level: 68, category: "Languages" },

  { name: "scikit-learn", level: 75, category: "ML / AI" },
  { name: "K-Means Clustering", level: 75, category: "ML / AI" },
  { name: "PCA", level: 72, category: "ML / AI" },
  { name: "Classification", level: 70, category: "ML / AI" },

  { name: "Pandas / NumPy", level: 85, category: "Data & Viz" },
  { name: "Data Cleaning & Wrangling", level: 88, category: "Data & Viz" },
  { name: "Excel (PivotTables, Power Query)", level: 90, category: "Data & Viz" },
  { name: "Power BI", level: 72, category: "Data & Viz" },
  { name: "Data Visualisation", level: 80, category: "Data & Viz" },

  { name: "Excel — MOS Certified", level: 92, category: "Tools & Productivity" },
  { name: "Word / PowerPoint — MOS", level: 85, category: "Tools & Productivity" },
  { name: "REST APIs", level: 65, category: "Tools & Productivity" },
  { name: "Jupyter / Colab", level: 78, category: "Tools & Productivity" },
];

/** Used by the radar chart on the About page. */
export const skillRadar: RadarAxis[] = [
  { axis: "Programming", value: 75 },
  { axis: "Statistics", value: 78 },
  { axis: "Machine Learning", value: 70 },
  { axis: "Data Viz", value: 82 },
  { axis: "Data Wrangling", value: 88 },
  { axis: "Communication", value: 80 },
];

/**
 * ILLUSTRATIVE sample data — Tony has no real monthly metric tracked.
 * Charts using this are labelled "illustrative" in the UI.
 */
export const activity: MonthlyActivity[] = [
  { month: "Jan", value: 18 },
  { month: "Feb", value: 24 },
  { month: "Mar", value: 31 },
  { month: "Apr", value: 27 },
  { month: "May", value: 40 },
  { month: "Jun", value: 35 },
  { month: "Jul", value: 22 },
  { month: "Aug", value: 29 },
  { month: "Sep", value: 44 },
  { month: "Oct", value: 38 },
  { month: "Nov", value: 47 },
  { month: "Dec", value: 33 },
];

/* -------------------------------------------------------------------------- */
/*  About — education & experience timeline                                    */
/* -------------------------------------------------------------------------- */

export const aboutParagraphs: string[] = [
  "I'm a Business Analytics & Data Science student at the University of Sydney (graduating 2027) who enjoys the moment a messy dataset starts to tell a clear story. My favourite work sits where statistics, practical analytics, and communication meet.",
  "I've built end-to-end projects — from cleaning survey and geospatial data in Python to customer segmentation with K-Means and PCA — and I care about accuracy, attention to detail, and explaining results in plain language.",
  "I'm Microsoft Office Specialist (Excel) certified and comfortable across Python, SQL, Excel and Power BI. I'm currently looking for analytics internships where I can keep learning and contribute.",
];

export const education: TimelineItem[] = [
  {
    period: "2025 — 2027 (expected)",
    title: "Bachelor of Commerce — Business Analytics & Data Science",
    org: "The University of Sydney",
    location: "Sydney, NSW",
    description:
      "WAM 76.1 / 100 (Distinction average). Relevant coursework: Data Science (DATA1002, DATA2001), Business Analytics, Statistics.",
    highlights: [
      "Sydney International Student Award (merit-based)",
      "Hands-on data science units: DATA1002, DATA2001",
    ],
  },
];

export const experience: TimelineItem[] = [
  {
    period: "Dec 2024 — Present",
    title: "Sales & Operations Assistant",
    org: "Aurum Perfume",
    location: "Hanoi, Vietnam",
    description:
      "Sales and operations support with an analytics and reporting focus.",
    highlights: [
      "Recorded and maintained daily sales and cash-flow data in Excel (PivotTables, Power Query), keeping records accurate and up to date.",
      "Built Excel reports and charts to track sales trends and make figures easier for the team to read.",
      "Collected and cleaned customer feedback and sales data with careful attention to detail.",
      "Supported supplier and stock tracking with teammates for day-to-day reporting.",
    ],
  },
];

/* -------------------------------------------------------------------------- */
/*  Projects                                                                    */
/* -------------------------------------------------------------------------- */
// TODO: Tony can add `links: { repo, demo, report }` to any project once the
// notebooks/dashboards are published — the buttons render automatically.

export const projects: Project[] = [
  {
    slug: "credit-card-customer-segmentation",
    title: "Credit Card Customer Segmentation",
    summary:
      "Unsupervised segmentation of ~9k cardholders into actionable groups.",
    description:
      "Analysed 8,950 cardholders in Python (Pandas, scikit-learn) using K-Means and PCA to surface three distinct customer segments (high-value, at-risk, low-engagement), then translated them into three practical retention strategies and presented the findings to mentors.",
    category: "Machine Learning",
    tags: ["Python", "Pandas", "scikit-learn", "K-Means", "PCA"],
    year: 2024,
    featured: true,
    metrics: [
      { label: "Cardholders", value: "8,950" },
      { label: "Segments", value: "3" },
      { label: "Strategies", value: "3" },
    ],
  },
  {
    slug: "student-wellbeing-success-analysis",
    title: "Student Wellbeing & Success Analysis",
    summary:
      "Survey-data study identifying the strongest drivers of exam performance.",
    description:
      "Cleaned and analysed survey data across three datasets in Python, finding study time the strongest driver of exam performance (r = 0.83). Built and compared three classification models and summarised the results in a written report.",
    category: "Analytics",
    tags: ["Python", "Data Cleaning", "Correlation", "Classification"],
    year: 2025,
    featured: true,
    metrics: [
      { label: "Top correlation", value: "r = 0.83" },
      { label: "Datasets", value: "3" },
      { label: "Models", value: "3" },
    ],
  },
  {
    slug: "nsw-parramatta-data-atlas",
    title: "NSW–Parramatta Data Atlas",
    summary: "Geospatial resource-access scoring across Greater Parramatta.",
    description:
      "Cleaned ABS demographic data and 2,086 API-sourced location points to score resource access across 34 regions, presenting spatial and demographic patterns in an interactive browser dashboard with maps and charts.",
    category: "Data Viz",
    tags: ["Python", "Geospatial", "REST API", "ABS Data", "Dashboard"],
    year: 2025,
    featured: true,
    metrics: [
      { label: "Location points", value: "2,086" },
      { label: "Regions", value: "34" },
    ],
  },
];

export const projectCategories: ("All" | ProjectCategory)[] = [
  "All",
  "Machine Learning",
  "Analytics",
  "Data Viz",
];

/* -------------------------------------------------------------------------- */
/*  Contact                                                                     */
/* -------------------------------------------------------------------------- */

export const contact = {
  heading: "Let's turn data into decisions",
  blurb:
    "I'm currently looking for data & analytics internships. Whether you have a role, a dataset, or just want to chat about analytics — my inbox is open.",
} as const;

/* -------------------------------------------------------------------------- */
/*  Site metadata                                                               */
/* -------------------------------------------------------------------------- */

export const site = {
  name: "Tony Nguyen — Business Analytics & Data Science Student",
  shortName: profile.name,
  description: profile.summary,
  // TODO: update to the real deployed URL after the first Vercel deploy.
  url: "https://ds-portfolio.vercel.app",
  locale: "en_US",
} as const;
