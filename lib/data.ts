export const profile = {
  name: "Nguyen Ngoc Minh Anh",
  headline: "Software Engineer",
  location: "Ho Chi Minh City, Vietnam",
  email: "nnma06112003@gmail.com",
  phone: "+84 396529478",
  website: "https://nnma.id.vn",
  social: {
    github: "https://github.com/nnma06112003",
    linkedin: "https://linkedin.com/in/minh-anh-nguyen003",
  },
};

export const summary = [
  "Backend-focused developer with industry experience building enterprise applications using NestJS and React Native.",
  "Experienced in developing RESTful APIs, real-time communication systems, and database-driven applications.",
  "Hands-on experience with Docker-based infrastructure, monitoring systems, and scalable backend architectures through personal projects.",
  "Currently exploring Golang and distributed systems to deepen backend engineering expertise.",
];

export const experience = [
  {
    company: "FPT IS",
    role: "Software Developer",
    period: "Jun 2025 — Mar 2026",
    location: "Ho Chi Minh City, Vietnam",
    highlights: [
      "Developed application features using React Native for mobile frontend and NestJS for backend services",
      "Implemented RESTful APIs to support mobile application functionality",
      "Worked with backend business logic and database queries",
      "Implemented dynamic loading of React Native mini-apps using JavaScript bundles",
      "Extended Android native functionality using Kotlin",
      "Collaborated with Business Analysts to analyze requirements",
      "Participated in Agile development cycles",
      "Worked with QA and testers to resolve bugs",
      "Resolved issues during UAT",
      "Performed post-deployment bug fixing and improvements",
    ],
  },
];

export const projects = [
  {
    name: "Real-time Chat Application",
    period: "Aug 2025 — Nov 2025",
    description:
      "Real-time messaging backend with WebSocket communication and RESTful APIs for conversation management.",
    highlights: [
      "Real-time messaging backend built with NestJS",
      "WebSocket communication for instant messaging",
      "RESTful APIs for conversation management",
      "MongoDB for messages, PostgreSQL for relational data",
      "Redis for caching and realtime events",
    ],
    tech: ["NestJS", "WebSocket", "MongoDB", "PostgreSQL", "Redis"],
  },
  {
    name: "Thesis Management System",
    period: "",
    description:
      "Backend system for thesis evaluation workflow supporting multiple academic roles.",
    highlights: [
      "Backend system for thesis evaluation workflow",
      "Database design supporting advisor / reviewer / committee roles",
      "JWT authentication",
      "Device registration to restrict grading devices",
    ],
    tech: ["NestJS", "PostgreSQL", "JWT"],
  },
  {
    name: "Self-hosted Monitoring System",
    period: "",
    description:
      "Full observability stack deployed on a self-managed Docker Swarm cluster.",
    highlights: [
      "Built Docker Swarm cluster",
      "Implemented Prometheus + Grafana monitoring",
      "Node Exporter metrics collection",
      "Centralized logs using ELK stack",
    ],
    tech: ["Docker Swarm", "Prometheus", "Grafana", "ELK Stack"],
  },
];

export const skills = [
  { label: "Backend", items: ["NestJS", "REST API", "WebSocket"] },
  { label: "Frontend", items: ["ReactJS", "React Native"] },
  { label: "Databases", items: ["PostgreSQL", "MongoDB", "Redis"] },
  {
    label: "DevOps",
    items: ["Docker", "Docker Swarm", "Prometheus", "Grafana", "ELK"],
  },
  { label: "Other", items: ["Git", "Linux", "Golang"] },
];

export const education = [
  {
    school: "Industrial University of Ho Chi Minh City",
    degree: "Bachelor of Information Technology",
    major: "Information Systems",
    period: "Sep 2021 — Nov 2025",
    gpa: "3.21 / 4.0",
  },
];
