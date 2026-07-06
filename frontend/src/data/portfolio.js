export const profile = {
  name: "Gaurav Malik",
  firstName: "Gaurav",
  lastName: "Malik",
  role: "AI/ML Engineer",
  tagline: "Building intelligent systems at the edge of data & algorithms.",
  location: "Greater Noida, India",
  email: "gauravmalik81809@gmail.com",

  bio: "I'm a Computer Science (AI & ML) undergrad at NIET, obsessed with turning messy data into clean, useful intelligence. I build with Python, TensorFlow, PyTorch, and LangChain — from statistical EDA to LSTM forecasts to agent-driven planners. When I'm not shipping, I'm grinding DSA (1600+ on LeetCode, 1800+ on GFG).",
  links: {
    github: "https://github.com/Whopie29",
    linkedin: "https://www.linkedin.com/in/gauravmalik29/",
    leetcode: "https://leetcode.com/u/Whopie/",
    gfg: "https://www.geeksforgeeks.org/profile/gauravmallz0v",
    codolio: "https://codolio.com/profile/JNePbOod",
  },
};

export const education = [
  {
    school: "Noida Institute of Engineering and Technology",
    degree: "B.Tech, Computer Science & Engineering (AIML)",
    duration: "2022 — 2026",
    location: "Greater Noida, UP",
  },
  {
    school: "Bal Bharati Public School",
    degree: "Senior Secondary (PCM)",
    duration: "2008 — 2022",
    location: "Noida, UP",
  },
];

export const skills = {
  Languages: ["Python", "C++", "HTML/CSS", "JS"],
  Frameworks: ["TensorFlow", "PyTorch", "LangChain", "Streamlit", "Flask", "FFmpeg"],
  Databases: ["MySQL", "MongoDB", "Oracle", "PL/SQL"],
  Core: ["Machine Learning", "Deep Learning", "Data Structures & Algorithms", "Analytics"],
  Tools: ["Git", "GitHub", "VS Code", "Google Colab", "Power BI", "Databricks", "Claude"],
};

export const skillsFlat = [
  "Python", "TensorFlow", "PyTorch", "LangChain", "C++", "Flask",
  "Streamlit", "MongoDB", "MySQL", "Oracle", "PL/SQL", "FFmpeg", "Machine Learning",
  "Deep Learning", "DSA", "Analytics", "Git", "Google Colab",
  "JS", "Power BI", "Databricks", "Claude",
];

export const projects = [
  {
    title: "Data Wizard",
    subtitle: "Automated EDA & ML Studio",
    description:
      "A Streamlit application that turns raw datasets into insight in minutes — 10+ visualizations, 5 deployed ML models with PCA & imputation reaching 92% test accuracy, and 5+ statistical tests (Chi-square, Pearson, Anderson) via scipy/statsmodels.",
    stack: ["Streamlit", "Pandas", "Seaborn", "Scikit-learn", "SciPy", "Statsmodels"],
    image: "https://images.pexels.com/photos/14314636/pexels-photo-14314636.jpeg",
    accent: "#00E5FF",
    link: "https://github.com/Whopie29",
    metrics: [
      { label: "Accuracy", value: "92%" },
      { label: "ML Models", value: "5" },
      { label: "Stat Tests", value: "5+" },
    ],
  },
  {
    title: "Spendify",
    subtitle: "Bank Account Management System",
    description:
      "A Flask-powered finance assistant that converts messy financial PDFs into clean CSVs — cutting manual effort by 80% — and forecasts balances with LSTM + ARIMA at ~90% accuracy.",
    stack: ["Flask", "LSTM", "ARIMA", "Python", "Pandas"],
    image: "https://images.pexels.com/photos/27141316/pexels-photo-27141316.jpeg",
    accent: "#FFB800",
    link: "https://github.com/Whopie29",
    metrics: [
      { label: "Effort Cut", value: "80%" },
      { label: "Forecast Acc.", value: "90%" },
      { label: "Models", value: "LSTM+ARIMA" },
    ],
  },
  {
    title: "AllInOne AI",
    subtitle: "Multi-Modal AI Assistant",
    description:
      "A unified AI platform combining multiple AI capabilities in one place — chat, image generation, code assistance, and more. Built with modern LLM integrations to deliver a seamless all-in-one AI experience.",
    stack: ["Python", "LangChain", "LLM APIs", "Streamlit"],
    image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg",
    accent: "#8B5CF6",
    link: "https://github.com/Whopie29/AllinOneAI",
    metrics: [
      { label: "AI Modes", value: "Multi" },
      { label: "Stack", value: "LLM" },
      { label: "Type", value: "Full-Stack" },
    ],
  },
];

export const achievements = [
  {
    title: "Code Burst — DSA Competition",
    detail: "2nd place among 100+ participants at the NIET Coding Contest.",
    stat: "2nd / 100+",
    tag: "Competition",
  },
  {
    title: "LeetCode",
    detail: "1600+ contest rating with 200+ DSA problems solved.",
    stat: "1600+",
    tag: "Rating",
    link: "https://leetcode.com/u/Whopie/",
  },
  {
    title: "GeeksforGeeks",
    detail: "1800+ contest rating with 500+ problems solved.",
    stat: "1800+",
    tag: "Rating",
    link: "https://www.geeksforgeeks.org/profile/gauravmallz0v",
  },
];

export const certifications = [
  { title: "Deep Learning for Developers", issuer: "Infosys · Coursera" },
  { title: "Python for Data Science, AI & Development", issuer: "IBM · Coursera" },
  { title: "Getting Started with AI using IBM Watson", issuer: "IBM · Coursera" },
];

export const experienceTimeline = [
  {
    year: "2026",
    title: "Graduating — B.Tech CSE (AIML)",
    org: "NIET, Greater Noida",
    detail: "Wrapping up my AI/ML specialization with a capstone rooted in applied deep learning.",
  },
  {
    year: "2025",
    title: "Shipped Trippy Trip",
    org: "Personal Project",
    detail: "LangChain-based AI trip planner used by 100+ users.",
  },
  {
    year: "2024",
    title: "Data Wizard + Spendify",
    org: "Personal Projects",
    detail: "End-to-end EDA studio and finance forecasting system with LSTM & ARIMA.",
  },
  {
    year: "2023",
    title: "Deep dive into DSA",
    org: "LeetCode · GeeksforGeeks",
    detail: "Crossed 700+ solved problems across platforms; consistent contest participation.",
  },
];
