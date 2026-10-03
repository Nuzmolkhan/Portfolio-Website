/* =========================================================================
   NUZMOL ISLAM KHAN — PORTFOLIO CONTENT
   -------------------------------------------------------------------------
   Eta-i ekmatro file jeta edit korlei site update hoy. Kono text, number
   ba link bodlale page auto update hobe. Comma ar quotation mark remove
   korba na. Notun item add korte upore/niche ekta item copy kore paste koro.
   ========================================================================= */

const SITE_DATA = {

  /* 1. PROFILE ---------------------------------------------------------- */
  profile: {
    name: "Nuzmol Islam Khan",
    firstName: "Nuzmol",
    lastName: "Islam Khan",
    initials: "NK",
    role: "Data Analyst",
    roleTags: ["Data Analyst", "BI Analyst", "SQL", "Python", "Power BI", "Advanced Excel"],
    bio: "CSE graduate who turns messy operational data into clear metrics and dashboards. My recent projects surfaced an untracked 63% funnel drop-off and a category-level fulfilment failure hiding behind healthy averages.",
    location: "Dhaka, Bangladesh",
    email: "mdnuzmolislam30@gmail.com",
    phone: "+880 1986-822599",
    whatsapp: "https://wa.me/8801986822599",
    linkedin: "https://www.linkedin.com/in/mdnuzmol/",
    github: "https://github.com/Nuzmolkhan",
    /* Real photo bosate: assets/images/profile/ e photo rakho (jemon profile.jpg) tarpor niche path bodlao */
    photo: "assets/images/profile/pro_pic.jpg",
    resume: "assets/docs/Nuzmol_Islam_Khan_CV.pdf",
    availability: "Open to Data Analyst / BI Analyst roles",
    photoTag: "CSE Graduate",
  },

  /* 2. INSIGHT TICKER — resume theke real numbers -------------------------- */
  ticker: [
    "63% LEADS DROP OFF AFTER CONSULTATION — UNTRACKED LEAK",
    "REFERRAL WINS 48% VS 26% — ON A THIRD OF THE FOLLOW-UPS",
    "1,200 LEADS ANALYZED OVER 19 MONTHS",
    "298K UNITS OF DEMAND VS 283K RECEIVED",
    "95.1% OVERALL ACCURACY — SCHOOL SHOES BELOW 30%",
    "VICE CHANCELLOR'S AWARD — PERFECT 4.00 SEMESTER GPA",
  ],

  /* 3. QUICK STATS — icon: folder, dashboard, tools, team, target
     auto: "projects" | "dashboards" | "tools"  => number nijei hishab hoy.
       - projects   = projects list-er je item e countInStats: false deya nei
       - dashboards = projects list-er je item e dashboard: true ache
       - tools      = skills list-er je item e tool: true ache
     auto na thakle value ta fixed dekhabe. ------------------------------- */
  quickStats: [
    { icon: "folder",    auto: "projects",   suffix: "+", label: "Analytics Projects" },
    { icon: "dashboard", auto: "dashboards", suffix: "",  label: "Dashboards Built" },
    { icon: "tools",     auto: "tools",      suffix: "+", label: "Tools & Technologies" },
    { icon: "team",      value: 120,          suffix: "+", label: "Team Members Led" },
    { icon: "target",    value: 100,          suffix: "%", label: "Data-Driven Impact" },
  ],

  /* 4. SKILLS & TOOLS — icon: python, sql, powerbi, excel, query, dax, clean,
     analyze, model, kpi, story, team ----------------------------------------- */
  skills: [
    { icon: "python",  name: "Python", tool: true,              sub: "Pandas · NumPy · Matplotlib · Seaborn" },
    { icon: "sql",     name: "SQL", tool: true,                 sub: "PostgreSQL · MySQL · CTEs · Window functions" },
    { icon: "powerbi", name: "Power BI", tool: true,            sub: "Data modeling · Drill-through · KPI cards" },
    { icon: "excel",   name: "Advanced Excel", tool: true,      sub: "Pivot tables · XLOOKUP · Slicers" },
    { icon: "dax",     name: "DAX", tool: true,                 sub: "Measures · Business calculations" },
    { icon: "query",   name: "Power Query", tool: true,         sub: "Transform · Shape · Prepare" },
    { icon: "clean",   name: "Data Cleaning",       sub: "Missing values · Deduplication · Z-score outliers" },
    { icon: "analyze", name: "Exploratory Analysis", sub: "Patterns · Cross-tabs · Segmentation" },
    { icon: "model",   name: "Data Modeling",       sub: "Schema design · Joins · Indexing · Subqueries" },
    { icon: "kpi",     name: "KPI Design",          sub: "Conversion · Churn · Win rate · Funnel drop-off" },
    { icon: "story",   name: "Data Storytelling",   sub: "Dashboards · Reports · Recommendations" },
    { icon: "team",    name: "Stakeholder Communication", sub: "Critical thinking · Attention to detail" },
  ],

  /* 5. PROJECTS — slider e dekhabe. image = demo; pore real screenshot boshao.
     links = ekadhik button dite paro: [{ label, url }]
     NOTUN PROJECT add korle: ekta item copy kore paste koro.
       dashboard: true   => "Dashboards Built" count e jog hoy
       countInStats: false => stats e count hoy na (jemon "More Projects" card)
     Total Projects ar Dashboards Built auto barbe. ------------------------- */
  projects: [
    {
      tag: "Python · SQL (DuckDB) · Hex",
      title: "Study Abroad Lead Funnel Analysis",
      dashboard: true,
      image: "assets/images/projects/study-abroad-funnel.svg",
      description: "Analyzed 1,200 leads over 19 months in SQL and Python (window functions, QUALIFY, cross-tabs). The biggest channel brought 30% of leads and converted worst, while Referral won 48% vs 26% on a third of the follow-ups. Built a 6-tab interactive dashboard for channel, branch, counselor and market performance.",
      stat: "63% of leads drop off after consultation — the largest leak, and untracked",
      links: [
        { label: "Live Dashboard", url: "https://app.hex.tech/019ff178-c7f3-757b-b506-c32f40e9b1b1/app/Study-Abroad-Lead-Funnel-Analysis-0345MtN10MD65gvJe2ohj6/latest" },
        { label: "GitHub", url: "https://github.com/Nuzmolkhan/Study-Abroad-Lead-Funnel-Analysis" },
      ],
    },
    {
      tag: "Microsoft Excel · Supply Chain",
      title: "Demand & Inventory Planning",
      dashboard: true,
      image: "assets/images/projects/demand-inventory.svg",
      description: "Tracked 298K units of demand against 283K received across 9 categories over 12 months. Company-wide accuracy looked fine at 95.1%, but split by category School Shoes sat below 30%. Recommended per-category buffer stock instead of one number for everything.",
      stat: "95.1% overall accuracy hid a category below 30%",
      links: [
        { label: "View on GitHub", url: "https://github.com/Nuzmolkhan/demand-inventory-planning" },
      ],
    },
    {
      tag: "SQL Server · T-SQL · Analytics",
      title: "SQL Sales, Customer & Product Insights",
      image: "assets/images/projects/sql-insights.svg",
      description: "Customer and product reports on a star-schema dataset (fact_sales, dim_customers, dim_products): recency, average order value, monthly spend, plus change-over-time, running totals, year-over-year benchmarking and part-to-whole analysis.",
      stat: "VIP / Regular / New customer segments · High / Mid / Low product tiers",
      links: [
        { label: "View on GitHub", url: "https://github.com/Nuzmolkhan/sql-sales-customer-product-insights" },
      ],
    },
    {
      tag: "GitHub · More Work",
      title: "More Projects on GitHub",
      countInStats: false,
      image: "assets/images/projects/more-github.svg",
      description: "Front-end builds, SQL practice and analytics experiments, all open on GitHub. Take a look for the rest of my work.",
      stat: "22 public repositories",
      links: [
        { label: "Browse GitHub", url: "https://github.com/Nuzmolkhan" },
      ],
    },
  ],

  /* 6. WHAT I DO — icon: clean, model, analyze, visualize, story -------------- */
  whatIDo: [
    { icon: "clean",     title: "Clean & Prepare", text: "Handle missing values, duplicates and messy dates or text so every analysis starts from a trustworthy base." },
    { icon: "model",     title: "Query & Model", text: "Write SQL with joins, CTEs and window functions on well-designed schemas to pull exactly what the question needs." },
    { icon: "analyze",   title: "Analyze & Measure", text: "Design business metrics like conversion, churn, win rate and funnel drop-off, and look past averages to find hidden problems." },
    { icon: "visualize", title: "Build Dashboards", text: "Create interactive Power BI, Excel and Hex dashboards with drill-through, slicers and KPI cards." },
    { icon: "story",     title: "Tell the Story", text: "Turn findings into clear recommendations that stakeholders can act on, not just charts." },
  ],

  /* 7. ABOUT ---------------------------------------------------------------------- */
  about: {
    heading: "Curious about the story behind the numbers",
    paragraph1: "I'm a Computer Science & Engineering graduate from Green University of Bangladesh with hands-on experience in SQL, Python and Advanced Excel. I clean and validate operational data, build business metrics, and create dashboards that support decision-making.",
    paragraph2: "I like finding what averages hide. In one project a healthy 95.1% company-wide number concealed a category below 30%; in another, the largest leak in a funnel was a step nobody was tracking. I care about analysis that changes what a team does next.",
    facts: [
      { label: "Location", value: "Dhaka, Bangladesh" },
      { label: "Focus", value: "Data Analytics · BI · SQL" },
      { label: "Degree", value: "B.Sc. in CSE, 2025" },
      { label: "Status", value: "Open to Data Analyst roles" },
    ],
  },

  /* 8. EDUCATION — notun theke purono -------------------------------------------- */
  education: [
    {
      degree: "B.Sc. in Computer Science & Engineering",
      place: "Green University of Bangladesh",
      date: "2021 – 2025",
      detail: "CGPA 3.39 / 4.00",
      extra: "Coursework: Database Management Systems, Data Structures & Algorithms, Software Engineering, OOP (Java)",
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      place: "Bikalpa Model College",
      date: "2019",
      detail: "GPA 3.67 / 5.00",
    },
    {
      degree: "Secondary School Certificate (SSC)",
      place: "Bairagir Chala High School",
      date: "2016",
      detail: "GPA 4.78 / 5.00",
    },
  ],

  /* 9. CERTIFICATIONS & ACHIEVEMENTS ------------------------------------------------ */
  achievement: {
    title: "Vice Chancellor's Award",
    text: "Perfect semester GPA (4.00 / 4.00), Green University of Bangladesh",
  },
  certifications: [
    "50-Days SQL Challenge — LeetCode",
    "SQL (Intermediate) Accomplished — HackerRank",
    "Python Pandas Data Manipulation — Kaggle",
    "IELTS Academic — Band 6.5",
  ],
};
