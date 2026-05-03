// ── Profile ──────────────────────────────────────────────────────────────────
export const profile = {
  firstName: "Swami",
  name: "Swami Badgujar",
  initials: "SB",
  role: "Aspiring DevOps Engineer",
  subRole: "Full-Stack Web Developer",
  tagline:
    "Bridging code and infrastructure — building MERN apps today, automating cloud pipelines tomorrow.",
  about:
   "I'm a B.Tech Computer Science graduate actively looking for full-time job opportunities. As a hybrid developer, I build complete MERN stack applications from scratch — designing REST APIs, structuring MongoDB schemas, writing React UIs and deploying Node.js backends. I care deeply about the path between `git push` and a healthy production deployment, which is why I'm also growing into DevOps — Microsoft Azure Essentials certified and currently hands-on with Docker, Kubernetes, GitHub Actions and Linux administration to make that path shorter and more reliable.",
  location: "Pune, Maharashtra, India",
  email: "swamibadgujar007@gmail.com",
  phone: "+91 9326788100",
  github: "#",
  linkedin: "#",
  resumeUrl: "#",
  stats: [
  { icon: "Cloud", value: "4+", label: "Years Coding" },
  { icon: "CodeXml", value: "5+", label: "Projects Shipped" },
  { icon: "Zap", value: "DevOps / SDE", label: "Open to Roles" },
  { icon: "BadgeCheck", value: "Java", label: "Full Stack Certified", accent: "amber" },
  { icon: "BadgeCheck", value: "SAP BTP", label: "Certified", accent: "amber" },
],
};

// ── Skills ────────────────────────────────────────────────────────────────────
export const skills = [
  {
    category: "DevOps & Cloud",
    items: [
      "Microsoft Azure Essentials",
      "Git & GitHub",
      "Linux (Ubuntu)",
      "CI/CD Concepts",
      "REST APIs",
      "Docker (learning)",
      "Kubernetes (basics)",
    ],
  },
  {
    category: "Languages & Scripting",
    items: ["JavaScript", "Node.js", "Bash", "HTML5", "CSS3"],
  },
  {
    category: "Frameworks & UI",
    items: ["React.js", "Express.js", "Tailwind CSS"],
  },
  {
    category: "Databases & Tools",
    items: ["MongoDB", "JWT Auth", "Postman", "VS Code", "Android Studio"],
  },
];

export const learning = [
  "SAP BTP",
  "Docker",
  "Kubernetes",
  "GitHub Actions",
  "Linux Admin",
];

// ── Experience ────────────────────────────────────────────────────────────────
export const experience = [
  {
    role: "Web Developer",
    company: "Jabsz Gaming and Studios",
    period: "Dec 2024 — May 2025",
    location: "Remote",
    type: "Full-time",
    bullets: [
      "Developed and deployed two full-stack web applications: an Employee Management Portal and an interactive Knowledge Bubble Game.",
      "Built and integrated RESTful APIs between React.js frontend and Node.js / MongoDB backend, gaining exposure to service-oriented architecture patterns relevant to DevOps pipelines.",
      "Managed all project code using Git / GitHub with branch-based workflows, pull requests and version control best practices.",
      "Coordinated with the backend team on API contract definitions, environment configurations and deployment-ready builds.",
      "Ensured cross-browser compatibility and responsive design — reducing post-deployment UI bugs through systematic testing before release.",
    ],
    stack: ["React.js", "Node.js", "Express", "MongoDB", "Git"],
  },
  {
    role: "Frontend Developer Intern",
    company: "Cognifyz Technologies",
    period: "May 2024 — Jul 2024",
    location: "Remote",
    type: "Internship",
    bullets: [
      "Developed responsive web interfaces using HTML, CSS, JavaScript and React.js for real-world client projects.",
      "Contributed to improving UI consistency and user experience across multiple components with a focus on build quality and reusability.",
      "Practiced code review cycles and cross-functional collaboration within a structured team workflow.",
    ],
    stack: ["React.js", "JavaScript", "HTML", "CSS"],
  },
];

// ── Projects ──────────────────────────────────────────────────────────────────
export const projects = [
  {
    title: "Mangalam Billing App",
    subtitle: "Patient Billing & Android Deployment",
    year: "2026",
    summary:
      "A billing application for a medical clinic that lets doctors generate patient bills in seconds — packaged and shipped as an Android app.",
    description:
      "Built a form-driven React.js interface so non-technical clinic staff can issue bills with patient and treatment details, eliminating manual paperwork and billing errors. Deployed the application as an Android APK using Android Studio — owning the full pipeline from development build to package, install and on-device QA.",
    tags: ["React.js", "Android Studio", "APK Build", "Healthcare"],
    highlights: [
      "Reduced billing time from minutes to seconds",
      "End-to-end deployment lifecycle ownership",
      "Web → Native Android packaging",
    ],
    github: "#",
    live: "#",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "DPhysio",
    subtitle: "Physiotherapy Clinic Management System",
    year: "2025",
    summary:
      "A full-stack MERN clinic platform with online appointment booking, automated email confirmations, an AI chatbot and JWT-secured doctor login.",
    description:
      "Architected modular backend services with environment-based configuration — practices central to DevOps deployment pipelines. Designed a responsive React + Tailwind UI with production-ready performance and integrated an AI chatbot to assist patients before they ever reach the clinic.",
    tags: ["MongoDB", "Express", "React", "Node.js", "Tailwind", "JWT"],
    highlights: [
      "Online appointment booking flow",
      "Automated email confirmations",
      "AI chatbot patient assistant",
      "JWT-secured doctor authentication",
    ],
    github: "#",
    live: "#",
    image:
      "https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Employee Management Portal",
    subtitle: "Internal HR & Operations Dashboard",
    year: "2025",
    summary:
      "A full-stack employee management portal built at Jabsz Gaming and Studios — role-based dashboards, team coordination and admin controls.",
    description:
      "Owned the frontend implementation and API integration. Worked closely with the backend team to define API contracts, set up environment configurations and prepare deployment-ready builds — closing the gap between dev and ops.",
    tags: ["React.js", "Node.js", "MongoDB", "REST APIs"],
    highlights: [
      "Branch-based Git workflow",
      "PR reviews & version control",
      "Production-ready builds",
    ],
    github: "#",
    live: "#",
    image:
      "https://images.unsplash.com/photo-1683322499436-f4383dd59f5a?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Knowledge Bubble Game",
    subtitle: "Interactive Learning Web Game",
    year: "2025",
    summary:
      "An interactive browser-based knowledge game built during my Jabsz tenure — gamified Q&A with smooth UI animations.",
    description:
      "Developed the full frontend experience with React.js, integrated game-state APIs and ensured cross-browser compatibility through systematic pre-release testing.",
    tags: ["React.js", "JavaScript", "REST APIs"],
    highlights: [
      "Cross-browser tested",
      "Smooth game-state animations",
      "Responsive across devices",
    ],
    github: "#",
    live: "#",
    image:
      "https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?auto=format&fit=crop&w=800&q=80",
  },
];

// ── Certifications ────────────────────────────────────────────────────────────
export const certifications = [
  {
    title: "Microsoft Azure",
    issuer: "Microsoft",
    code: "Essentials",
    status: "Certified",
    statusType: "done",
    description: "Core Azure services, cloud concepts, security, compliance and pricing models.",
  },
  {
    title: "SAP BTP — Business Technology Platform",
    issuer: "SAP",
    code: "In Progress",
    status: "Expected May 2026",
    statusType: "pending",
    description:
      "Cloud-native development, integration services and CI/CD on SAP's cloud platform.",
  },
  {
    title: "Frontend Web Development in HTML",
    issuer: "Online",
    code: "Completed",
    status: "Certified",
    statusType: "done",
    description: "Structured, semantic and accessible web page development.",
  },
];

// ── Education ─────────────────────────────────────────────────────────────────
export const education = [
  {
    degree: "B.Tech — Computer Science & Engineering",
    institution: "Parul Institute of Technology",
    period: "2021 — 2025",
    location: "Vadodara, Gujarat",
    grade: "CGPA: 6.84",
  },
];

// ── Nav links ─────────────────────────────────────────────────────────────────
export const navLinks = [
  { label: "Home",           href: "#home" },
  { label: "About",          href: "#about" },
  { label: "Skills",         href: "#skills" },
  { label: "Experience",     href: "#experience" },
  { label: "Projects",       href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact",        href: "#contact" },
];