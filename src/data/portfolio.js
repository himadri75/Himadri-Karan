import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export const profile = {
  name: "Himadri Karan",
  role: "Java Full-Stack Developer",
  summary:
    "Full-stack developer specializing in Java, Spring Boot, and React. I build scalable backend systems, secure REST APIs, and real-time web applications with a focus on performance, clean architecture, and user experience.",
  location: "India",
  availability: "Open to full-time SDE roles",
  email: "karanhimadri1234@gmail.com",
  resumeUrl: "#",
};

export const navigation = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Certifications", href: "#certifications" },
  { label: "Interests", href: "#interests" },
  { label: "Contact", href: "#contact" },
];

export const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/himadri516/", icon: FaLinkedin },
  { label: "GitHub", href: "https://github.com/himadri75/", icon: FaGithub },
  { label: "Email", href: "mailto:karanhimadri1234@gmail.com", icon: MdEmail },
];

export const highlights = [
  "Strong foundation in DSA and OOP",
  "Full-stack developer (Java, Spring Boot, React)",
  "Built real-world scalable web applications",
  "Selected for TCS Digital (NQT 2026)",
];

export const skillGroups = [
  {
    title: "Languages",
    items: ["Java", "Node.js/TS", "SQL", "Python"],
  },
  {
    title: "Backend",
    items: ["Spring Boot", "Spring Security", "REST APIs", "PostgreSQL", "Express.js"],
  },
  {
    title: "Frontend",
    items: ["HTML, CSS & JS" ,"React", "Next.js", "Tailwind CSS", "Bootstrap"],
  },
  {
    title: "Tools & DevOps",
    items: ["Git & GitHub", "Docker", "Postman", "Github Copilot"],
  },
];

export const projects = [
  {
    title: "Prescripto – Healthcare Management System",
    description:
      "Full-stack healthcare platform for managing doctor appointments, patients, and admins with secure JWT authentication, Razorpay payments, and real-time analytics dashboards.",
    stack: [
      "React",
      "Spring Boot",
      "MySQL",
      "Docker",
      "Razorpay"
    ],
    links: [
      { label: "Live", href: "https://prescripto.apps24.tech/" },
      { label: "Code", href: "https://github.com/himadri75/Prescripto" },
    ],
    thumbnail: "/images/prescripto_img.jpg"
  },
  {
    title: "CodeLive – Real-Time Collaborative Code Editor",
    description:
      "Real-time collaborative coding platform with Monaco Editor, Socket.IO, and Yjs enabling live multi-user editing, chat, and AI-assisted code generation using Groq API.",
    stack: [
      "React",
      "Node.js",
      "Socket.IO",
      "Monaco Editor",
      "Groq AI"
    ],
    links: [
      { label: "Live", href: "https://codelive.apps24.tech/" },
      { label: "Code", href: "https://github.com/himadri75/Codelive" },
    ],
    thumbnail: "/images/codelive_img.jpg"
  },
  {
    title: "HomyGo – AI Travel & Homestay Platform",
    description:
      "AI-powered travel platform for discovering homestays across India with itinerary planning, multilingual translation, cultural feed, and emergency SOS safety features.",
    stack: [
      "React",
      "Node.js",
      "AI Chatbot",
      "GPS Integration",
      "Multilingual NLP",
    ],
    links: [
      { label: "Live", href: "https://homygo.apps24.tech/" },
      { label: "Code", href: "https://github.com/himadri75/HomyGo" },
    ],
    thumbnail: "/images/homygo_img.jpg"
  }
];

export const education = [
  {
    school: "Techno Engineering College Banipur, MAKAUT",
    degree: "B.Tech in Computer Science and Engineering",
    duration: "2022 — 2026",
    details: [
      "CGPA: 7.7/10 (till 7th semester)",
      "Relevant coursework: DSA, DBMS, OS, CN, ML",
      "Department merit scholarship recipient",
    ],
  },
  {
    school: "West Bengal Council of Higher Secondary Education",
    degree: "Higher Secondary (Science)",
    duration: "2020 — 2022",
    details: ["Score: 84%", "Subject: Physics, Chemistry, Mathematics, Biology"],
  },
  {
    school: "West Bengal Board of Secondary Education",
    degree: "Secondary (General)",
    duration: "2020",
    details: ["Score: 86%", "Computer Science club member"],
  },
];

export const experience = [
  {
    role: "QA Automation Intern",
    company: "VWO (Freelance)",
    duration: "Jan 2025 — Feb 2025",
    summary:
      "Built an end-to-end test automation framework and improved testing reliability using Playwright and AI-assisted validations.",
    highlights: [
      "Built a Playwright automation framework using Page Object Model (POM)",
      "Automated critical user workflows across multiple browsers",
      "Integrated Gemini AI API for intelligent test validation",
      "Generated HTML-based test execution reports for analysis",
    ],
  },
  {
    role: "Artificial Intelligence & Data Analytics Intern",
    company: "AICTE – Edunet Foundation (Skills4Future, Shell India)",
    duration: "Aug 2025 — Sep 2025",
    summary:
      "Completed a 4-week internship focused on AI, data analytics, and green skills through an industry-academic collaboration program.",
    highlights: [
      "Worked on Artificial Intelligence and Data Analytics fundamentals",
      "Explored real-world applications in sustainability and green skills",
      "Completed structured virtual internship under AICTE & Shell India program",
    ],
  },
  {
    role: "Web Development Intern",
    company: "ApexPlanet Software Pvt. Ltd.",
    duration: "Dec 2025 — Jan 2026",
    summary:
      "Completed a web development internship focused on frontend development using HTML, CSS, and JavaScript.",
    highlights: [
      "Built responsive web pages using HTML, CSS, and JavaScript",
      "Improved UI structure and layout consistency",
      "Completed project-based learning and assessment tasks",
    ],
  },
];

export const interests = [
  {
    title: "Backend Architecture",
    description:
      "Designing scalable backend systems using Spring Boot, REST APIs, and well-structured data models with clean architecture principles.",
  },
  {
    title: "Real-time Distributed Systems",
    description:
      "Exploring WebSockets, event-driven systems, Kafka, Redis, and building low-latency real-time applications and dashboards.",
  },
  {
    title: "Applied AI Engineering",
    description:
      "Working with LLMs, RAG pipelines, prompt engineering, and integrating AI services into real-world applications.",
  },
  {
    title: "DevOps & Deployment",
    description:
      "Containerizing applications with Docker, understanding CI/CD pipelines, and deploying scalable backend systems.",
  },
];

export const certifications = [
  {
    title: "3rd Place - Smart India Hackathon (College-Level)",
    issuer: "SIH, Government Administration, India",
    year: "2025",
  },
  {
    title: "AWS Academy Graduate - Cloud Foundations",
    issuer: "Amazon Web Services",
    year: "2025",
  },
  {
    title: "Software Engineer",
    issuer: "HackerRank",
    year: "2025",
  },
  {
    title: "Agile Software Development",
    issuer: "OpenLearn University",
    year: "2025",
  },
  {
    title: "HackerRank Gold & Silver Badges - SQL & Java",
    issuer: "HackerRank",
    year: "2025",
  },
  {
    title: "Google Solution Challenge - GDG on Campus",
    issuer: "Google Developer Groups (GDG)",
    year: "2025",
  },
  {
    title: "Microsoft Cloud & Networking Foundations",
    issuer: "Coursera, Microsoft",
    year: "2023",
  },
  {
    title: "Foundations: Data, Data, Everywhere",
    issuer: "Coursera, Google",
    year: "2024",
  },
];
