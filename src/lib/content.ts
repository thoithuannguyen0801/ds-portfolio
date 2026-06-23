/**
 * =============================================================================
 *  SITE CONTENT — single source of truth
 * =============================================================================
 *  Edit everything about the site from this one file. All values below are
 *  realistic PLACEHOLDERS — replace them with your real information.
 *  (Search for "TODO" to find the things most likely to need changing.)
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

export type ProjectCategory =
  | "Machine Learning"
  | "Deep Learning"
  | "NLP"
  | "Data Viz"
  | "Analytics";

export interface SocialLink {
  label: string;
  href: string;
  icon: IconName;
  /** Shown as the handle/preview text, e.g. "@thuannguyen" */
  handle?: string;
}

export interface Skill {
  name: string;
  /** 0–100 proficiency, used by the skill bars */
  level: number;
  category: "Languages" | "ML / AI" | "Data & Viz" | "Tools & Cloud";
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
  /** e.g. number of commits / notebooks / study hours */
  value: number;
}

/* -------------------------------------------------------------------------- */
/*  Profile                                                                    */
/* -------------------------------------------------------------------------- */

export const profile = {
  name: "Thuan Nguyen", // TODO: your full name
  firstName: "Thuan",
  role: "Data Science Student",
  // A short, punchy one-liner for the hero section.
  tagline: "Turning messy data into clear, honest decisions.",
  // 1–2 sentence summary used under the hero + in metadata.
  summary:
    "Final-year Data Science student passionate about machine learning, statistics, and data storytelling. I build models and dashboards that turn raw numbers into decisions people can act on.",
  location: "Ho Chi Minh City, Vietnam",
  availability: "Open to internships & new-grad roles",
  email: "thuan.nguyen@example.com", // TODO: real email
  // Optional: a real photo at /public/avatar.jpg → set to "/avatar.jpg"
  avatar: null as string | null,
  resumeUrl: "/resume.pdf", // replace public/resume.pdf with your CV
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

export const socials: SocialLink[] = [
  {
    label: "GitHub",
    href: "https://github.com/your-username", // TODO
    icon: "github",
    handle: "@your-username",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/your-handle", // TODO
    icon: "linkedin",
    handle: "in/your-handle",
  },
  {
    label: "Kaggle",
    href: "https://kaggle.com/your-handle", // TODO
    icon: "kaggle",
    handle: "@your-handle",
  },
  {
    label: "Email",
    href: `mailto:${profile.email}`,
    icon: "mail",
    handle: profile.email,
  },
];

/* -------------------------------------------------------------------------- */
/*  Home page stats + highlights                                               */
/* -------------------------------------------------------------------------- */

export const stats: Stat[] = [
  { label: "Projects shipped", value: "12+" },
  { label: "Kaggle medals", value: "3" },
  { label: "Models in production", value: "4" },
  { label: "Years coding", value: "4" },
];

export const highlights: { title: string; description: string; icon: string }[] =
  [
    {
      icon: "brain",
      title: "Machine Learning",
      description:
        "From classic models to deep learning — building, tuning, and evaluating models that generalize.",
    },
    {
      icon: "chart",
      title: "Data Storytelling",
      description:
        "Clear, interactive dashboards and visualizations that make insights obvious to any audience.",
    },
    {
      icon: "database",
      title: "Data Engineering",
      description:
        "Reliable pipelines: ingesting, cleaning, and shaping messy data into analysis-ready datasets.",
    },
  ];

/* -------------------------------------------------------------------------- */
/*  Skills                                                                      */
/* -------------------------------------------------------------------------- */

export const skills: Skill[] = [
  { name: "Python", level: 92, category: "Languages" },
  { name: "SQL", level: 85, category: "Languages" },
  { name: "R", level: 62, category: "Languages" },
  { name: "TypeScript", level: 55, category: "Languages" },

  { name: "scikit-learn", level: 88, category: "ML / AI" },
  { name: "PyTorch", level: 74, category: "ML / AI" },
  { name: "TensorFlow / Keras", level: 70, category: "ML / AI" },
  { name: "XGBoost", level: 80, category: "ML / AI" },

  { name: "Pandas / NumPy", level: 93, category: "Data & Viz" },
  { name: "Matplotlib / Seaborn", level: 86, category: "Data & Viz" },
  { name: "Plotly", level: 72, category: "Data & Viz" },
  { name: "Tableau / Power BI", level: 68, category: "Data & Viz" },

  { name: "Git / GitHub", level: 84, category: "Tools & Cloud" },
  { name: "Docker", level: 60, category: "Tools & Cloud" },
  { name: "AWS / GCP", level: 55, category: "Tools & Cloud" },
  { name: "Jupyter / Colab", level: 90, category: "Tools & Cloud" },
];

/** Used by the radar chart on the About page. */
export const skillRadar: RadarAxis[] = [
  { axis: "Programming", value: 90 },
  { axis: "Statistics", value: 82 },
  { axis: "Machine Learning", value: 85 },
  { axis: "Data Viz", value: 80 },
  { axis: "Data Wrangling", value: 92 },
  { axis: "Communication", value: 75 },
];

/** Used by the activity bar chart (e.g. commits / notebooks per month). */
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
  "I'm a final-year Data Science student who loves the moment a dataset starts to tell a story. My favorite work sits at the intersection of rigorous statistics, practical machine learning, and clear communication.",
  "Over the last few years I've built end-to-end projects: scraping and cleaning data, training and validating models, and shipping the results as dashboards or small apps. I care a lot about reproducibility, honest evaluation, and explaining trade-offs in plain language.",
  "Outside of coursework you'll find me competing on Kaggle, writing up notebooks, and exploring open datasets about cities, climate, and sports.",
];

export const education: TimelineItem[] = [
  {
    period: "2022 — 2026",
    title: "B.Sc. in Data Science",
    org: "University of Science",
    location: "Ho Chi Minh City",
    description:
      "Relevant coursework: Machine Learning, Statistical Inference, Linear Algebra, Databases, Big Data, and Data Visualization. GPA 3.7/4.0.",
    highlights: [
      "Teaching assistant for Intro to Statistics (2 semesters)",
      "Led a 4-person capstone on demand forecasting",
    ],
  },
];

export const experience: TimelineItem[] = [
  {
    period: "Summer 2025",
    title: "Data Science Intern",
    org: "Acme Analytics",
    location: "Remote",
    description:
      "Built churn and propensity models feeding a marketing dashboard used by the growth team.",
    highlights: [
      "Improved churn model AUC from 0.84 → 0.91",
      "Automated a weekly reporting pipeline with Python + Airflow",
    ],
  },
  {
    period: "2024 — Present",
    title: "Kaggle Competitor",
    org: "Self-directed",
    location: "Online",
    description:
      "Regularly compete in tabular and computer-vision competitions, focusing on robust validation and ensembling.",
    highlights: ["3 medals across tabular & CV competitions"],
  },
];

/* -------------------------------------------------------------------------- */
/*  Projects                                                                    */
/* -------------------------------------------------------------------------- */

export const projects: Project[] = [
  {
    slug: "customer-churn-prediction",
    title: "Customer Churn Prediction",
    summary:
      "Gradient-boosted model that flags at-risk subscribers two months early.",
    description:
      "End-to-end churn pipeline on a telecom dataset: feature engineering, class-imbalance handling with SMOTE, and an XGBoost model with SHAP explainability. Packaged as a small FastAPI service.",
    category: "Machine Learning",
    tags: ["XGBoost", "SHAP", "FastAPI", "Imbalanced data"],
    year: 2025,
    featured: true,
    metrics: [
      { label: "ROC-AUC", value: "0.91" },
      { label: "Recall", value: "0.83" },
      { label: "Features", value: "47" },
    ],
    links: {
      repo: "https://github.com/your-username/churn-prediction",
      report: "https://github.com/your-username/churn-prediction#readme",
    },
  },
  {
    slug: "sales-forecasting-dashboard",
    title: "Sales Forecasting Dashboard",
    summary:
      "Interactive dashboard forecasting weekly revenue with confidence bands.",
    description:
      "Time-series forecasting (Prophet + LightGBM) for multi-store retail sales, wrapped in an interactive dashboard with scenario sliders and uncertainty intervals.",
    category: "Analytics",
    tags: ["Time Series", "Prophet", "LightGBM", "Dashboard"],
    year: 2025,
    featured: true,
    metrics: [
      { label: "MAPE", value: "6.2%" },
      { label: "Stores", value: "45" },
      { label: "Horizon", value: "12 wks" },
    ],
    links: {
      demo: "https://example.com",
      repo: "https://github.com/your-username/sales-forecasting",
    },
  },
  {
    slug: "review-sentiment-nlp",
    title: "Product Review Sentiment",
    summary:
      "Fine-tuned transformer classifying 50k product reviews by sentiment.",
    description:
      "Fine-tuned a DistilBERT model on e-commerce reviews, with a clean text-processing pipeline and an attention-based explanation view to show which words drove each prediction.",
    category: "NLP",
    tags: ["Transformers", "DistilBERT", "Hugging Face", "Text"],
    year: 2024,
    featured: true,
    metrics: [
      { label: "F1", value: "0.94" },
      { label: "Reviews", value: "50k" },
      { label: "Classes", value: "3" },
    ],
    links: {
      repo: "https://github.com/your-username/review-sentiment",
    },
  },
  {
    slug: "image-classification-cnn",
    title: "Image Classification with CNNs",
    summary: "Transfer-learning classifier reaching 96% on a 10-class dataset.",
    description:
      "Built and compared CNN architectures (from scratch vs. transfer learning with ResNet-50) including data augmentation, learning-rate scheduling, and Grad-CAM visualizations.",
    category: "Deep Learning",
    tags: ["PyTorch", "ResNet", "Transfer Learning", "Grad-CAM"],
    year: 2024,
    metrics: [
      { label: "Accuracy", value: "96%" },
      { label: "Params", value: "23M" },
    ],
    links: {
      repo: "https://github.com/your-username/cnn-image-classifier",
    },
  },
  {
    slug: "covid-data-exploration",
    title: "COVID-19 Data Exploration",
    summary: "Open-data analysis tracking waves, mobility, and policy effects.",
    description:
      "Exploratory analysis combining case data with mobility and policy datasets, producing a set of annotated, reproducible visualizations and a short written narrative of the findings.",
    category: "Data Viz",
    tags: ["Pandas", "Plotly", "EDA", "Storytelling"],
    year: 2023,
    metrics: [
      { label: "Datasets", value: "4" },
      { label: "Charts", value: "20+" },
    ],
    links: {
      report: "https://github.com/your-username/covid-eda",
      repo: "https://github.com/your-username/covid-eda",
    },
  },
  {
    slug: "movie-recommender",
    title: "Movie Recommendation System",
    summary: "Hybrid recommender blending collaborative & content signals.",
    description:
      "A hybrid recommender on the MovieLens dataset combining matrix factorization with content-based features, evaluated with ranking metrics and a small Streamlit demo.",
    category: "Machine Learning",
    tags: ["Recommenders", "Matrix Factorization", "Streamlit"],
    year: 2023,
    metrics: [
      { label: "NDCG@10", value: "0.41" },
      { label: "Users", value: "6k" },
    ],
    links: {
      demo: "https://example.com",
      repo: "https://github.com/your-username/movie-recommender",
    },
  },
];

export const projectCategories: ("All" | ProjectCategory)[] = [
  "All",
  "Machine Learning",
  "Deep Learning",
  "NLP",
  "Data Viz",
  "Analytics",
];

/* -------------------------------------------------------------------------- */
/*  Contact                                                                     */
/* -------------------------------------------------------------------------- */

export const contact = {
  heading: "Let's build something with data",
  blurb:
    "I'm currently looking for data science internships and new-grad opportunities. Whether you have a role, a dataset, or just want to chat about ML — my inbox is open.",
} as const;

/* -------------------------------------------------------------------------- */
/*  Site metadata                                                               */
/* -------------------------------------------------------------------------- */

export const site = {
  name: `${profile.name} — ${profile.role}`,
  shortName: profile.name,
  description: profile.summary,
  // TODO: set to your real deployed URL (used for SEO / Open Graph)
  url: "https://ds-portfolio.vercel.app",
  locale: "en_US",
} as const;
