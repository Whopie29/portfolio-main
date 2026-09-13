export const profile = {
  name: "Gaurav Malik",
  firstName: "Gaurav",
  lastName: "Malik",
  role: "AI/ML Engineer",
  tagline: "Building intelligent systems at the edge of data & algorithms.",
  location: "Greater Noida, India",
  email: "gauravmalik81809@gmail.com",

  bio: "I'm Gaurav, a Computer Science (AI/ML) graduate who is more interested in building things than collecting technologies.\n\nI enjoy taking an idea apart, understanding the problem underneath it, and then putting it back together as something people can actually use. I've worked across AI, data analysis, forecasting, full-stack development, and real-time applications.\n\nI also have a habit of adding one unnecessary feature to every project just because my brain asked, “But wouldn't it be cool if…?”\n\nSometimes it is. Sometimes it's a three-day debugging session. Either way, I learn something.",
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
  Frameworks: ["TensorFlow", "PyTorch", "LangChain", "Streamlit", "Flask", "Fast API"],
  Databases: ["MySQL", "MongoDB", "Oracle", "PL/SQL"],
  Core: ["Machine Learning", "Deep Learning", "DSA", "Analytics","LLMs","AI Agents"],
  Tools: ["Git", "GitHub", "VS Code", "Google Colab", "Power BI", "Databricks", "Claude", "Cloudflare"],
};

export const skillsFlat = [
  "Python", "TensorFlow", "PyTorch", "LangChain", "C++", "Flask",
  "Streamlit", "MongoDB", "MySQL", "Oracle", "PL/SQL", "FFmpeg", "Machine Learning",
  "Deep Learning", "DSA", "Analytics", "Git", "Google Colab",
  "JS", "Power BI", "Databricks", "Claude",
];

export const projects = [
  {
    title: "KarwaanRadio",
    subtitle: "A Musical Journey Through the Himalayas",
    description:
      "Pick a destination, season, and time of day — the whole scene shifts. Parallax mountain scenery, live weather FX, a skeuomorphic cassette player, 8 curated playlist categories, and a glassmorphic bus-window frame. A FastAPI + WebSocket backend powers real-time passenger count and an in-bus live chat so everyone riding along shares the same journey.",
    stack: ["React", "FastAPI", "WebSockets", "Python", "Framer Motion"],
    image: "/kaarwaanRadio.png",
    accent: "#00E5FF",
    link: "https://www.karwaanradio.website/",
    metrics: [
      { label: "Playlists", value: "8" },
      { label: "Real-time", value: "WS" },
      { label: "Mode", value: "Live" },
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
    link: "https://github.com/Whopie29/Spendify_",
    metrics: [
      { label: "Effort Cut", value: "80%" },
      { label: "Forecast Acc.", value: "90%" },
      { label: "Models", value: "LSTM+ARIMA" },
    ],
  },
  {
    title: "FileForge",
    subtitle: "Smart File Management Platform",
    description:
      "A modern file management and transformation platform that lets users upload, organize, convert, and process files through a clean web interface. Site is live — built for real-world file workflows with a sleek, intuitive UX.",
    stack: ["React", "Node.js", "Python", "File APIs", "JavaScript"],
    image: "/FileForge.png",
    accent: "#8B5CF6",
    link: "https://huggingface.co/spaces/whopie/FileForge",
    metrics: [
      { label: "Status", value: "Live" },
      { label: "Type", value: "Web App" },
      { label: "Focus", value: "Files" },
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

export const experiences = [
  {
    company: "Capgemini",
    role: "Software Engineer Intern",
    period: "April 2026 – June 2026",
    location: "Gurugram, Haryana",
    type: "Internship",
    description: [
      "Worked on developing interactive Power BI dashboards to analyze business data and generate actionable insights.",
      "Performed data analysis using Python and worked with Oracle Database for querying and managing enterprise data.",
      "Collaborated on a Power BI project involving data cleaning, visualization, KPI tracking, and report automation.",
    ],
    skills: ["Power BI", "Oracle Database", "Python", "Data Analysis"],
    accent: "#00E5FF",
  },
];

export const experienceTimeline = [
  {
    year: "2026",
    title: "Shipped KarwaanRadio",
    org: "Featured Project · Interactive Web App",
    detail: "Built an immersive music player with over 500+ songs featuring real-time WebSockets, dynamic scenery shifts, bus ride simulation, and passenger live chat.",
  },
  {
    year: "2026",
    title: "Software Engineer Intern — Capgemini",
    org: "Capgemini · Gurugram, Haryana",
    detail: "Power BI dashboards, Python data analysis & Oracle Database management for enterprise insights and automated reporting.",
  },
  {
    year: "2026",
    title: "Graduating — B.Tech CSE (AIML)",
    org: "NIET, Greater Noida",
    detail: "Completing Computer Science Engineering degree with specialization in Artificial Intelligence & Machine Learning.",
  },
  {
    year: "2025",
    title: "Built Spendify",
    org: "Personal Project · AI Finance",
    detail: "Flask-powered bank account management system cutting manual effort by 80% with LSTM + ARIMA balance forecasting.",
  },
  {
    year: "2025",
    title: "Built FileForge",
    org: "Personal Project · Web App",
    detail: "Smart file management and conversion platform built with React, Node.js, and Python file workflows.",
  },
  {
    year: "2022–2024",
    title: "Foundations & GitHub Projects",
    org: "GitHub · Early Exploration",
    detail: "Built various exploratory projects, Python utilities, data analysis scripts, and solved 700+ DSA problems across LeetCode & GFG.",
  },
];

