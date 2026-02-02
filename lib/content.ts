export const contact = {
  name: "Chimaobi David Ibe",
  title: "Software Engineer • Full‑stack Developer",
  location: "Lagos, Nigeria",
  email: "cxxx2500@gmail.com",
  phone: "07039883247",
  formattedPhone: "+234 703 988 3247",
  github: "David-Ibe",
  githubUrl: "https://github.com/David-Ibe",
  linkedIn: "chimaobidavidibe",
  linkedInUrl: "https://www.linkedin.com/in/chimaobidavidibe",
  domain: "chimaobi.dev",
} as const;

export const heroSummary =
  "Software Engineer • Full‑stack Developer with extensive experience architecting and delivering scalable, production-ready APIs and web applications. Proven expertise in Python (FastAPI/Flask) and Node.js ecosystems, with a strong focus on system design, cloud infrastructure, and ML model integration. Specialized in building robust backend services, seamless frontend experiences, and deploying containerized applications across modern cloud platforms.";

export const coreSkills = [
  "Python",
  "TypeScript",
  "FastAPI",
  "Flask",
  "Node.js/Express",
  "React",
  "Next.js",
  "Vite",
  "Tailwind CSS",
  "Hugging Face",
  "PyTorch",
  "PostgreSQL (Supabase)",
  "SQLite",
  "Docker",
  "Kubernetes",
  "Vercel/Railway/Render/Fly.io",
  "Recharts/Chart.js",
  "Paystack",
  "Resend",
] as const;

export const technicalSkills = [
  {
    category: "Backend Development",
    items: [
      "Python: FastAPI, Flask, Pydantic, RESTful API design",
      "Node.js: Express.js, JWT authentication, middleware development",
      "API Architecture: REST APIs, microservices, async/await patterns",
    ],
  },
  {
    category: "Frontend Development",
    items: [
      "React, Next.js, Vite",
      "TypeScript, JavaScript (ES6+)",
      "Tailwind CSS, responsive design",
      "State management, React Query, Axios",
    ],
  },
  {
    category: "Machine Learning & Data",
    items: [
      "Hugging Face Transformers",
      "PyTorch",
      "Model inference integration",
      "Emotion classification, NLP",
    ],
  },
  {
    category: "Databases",
    items: ["PostgreSQL (Supabase)", "SQLite", "Database design and optimization"],
  },
  {
    category: "DevOps & Cloud",
    items: [
      "Containerization: Docker, Docker Compose",
      "Orchestration: Kubernetes",
      "Cloud Platforms: Vercel, Railway, Render, Fly.io",
      "CI/CD pipelines, deployment automation",
    ],
  },
  {
    category: "Tools & Technologies",
    items: [
      "Version Control: Git, GitHub",
      "Payment Integration: Paystack",
      "Email Services: Resend",
      "Data Visualization: Recharts, Chart.js",
      "Testing & Debugging",
    ],
  },
] as const;

export const toolsAndPractices = [
  "API design",
  "Authentication & authorization (JWT)",
  "CI/CD-friendly workflows",
  "Containerized local development",
  "Observability (logging, health endpoints)",
  "Secure file handling",
  "PaaS deployment",
] as const;

export const education = "BSc Industrial Chemistry — Enugu State University of Science and Technology";

export const certifications = [
  "Building Generative AI‑Powered Applications with Python — Coursera",
  "Developing AI Applications with Python and Flask — IBM",
  "Generative AI & LLMs: Architecture & Data Preparation — IBM",
  "Machine Learning with Python — IBM",
] as const;

export const availability =
  "Software development, frontend, backend, fullstack, etc.";

export const additionalInfo = [
  "Strong problem-solving skills with a focus on clean, maintainable code",
  "Experience working in agile development environments",
  "Passionate about building scalable systems and optimizing performance",
  "Active contributor to open-source projects and technical communities",
] as const;

export const experienceItems = [
  {
    title: "Backend & Full-Stack API Development | Content Discovery Platform",
    bullets: [
      "Architected and implemented high-performance FastAPI REST APIs with comprehensive Pydantic models for data validation and serialization",
      "Designed and developed advanced search endpoints with optimized query performance and filtering capabilities",
      "Integrated multiple external content APIs with robust error handling and rate limiting",
      "Built AI-powered chat endpoint with streaming capabilities for real-time user interactions",
      "Created comprehensive containerization strategies and deployment documentation for PaaS and container hosting platforms",
      "Ensured API scalability and reliability through proper async/await patterns and database optimization",
    ],
  },
  {
    title: "Real-Time Media & Audio Workflows | Voice/Social Platform",
    bullets: [
      "Engineered backend endpoints for media upload, processing, and streaming with support for multiple file formats",
      "Implemented client-side audio handling with Web Audio API integration for real-time processing",
      "Developed secure authentication flows using JWT tokens and role-based access control (RBAC)",
      "Built secure file storage system with cloud integration and CDN optimization",
      "Designed and implemented real-time features using WebSockets for live audio interactions",
      "Ensured data security and compliance with best practices for handling user-generated content",
    ],
  },
  {
    title: "Corporate Website & Payments Integration | E-Commerce Platform",
    bullets: [
      "Developed modern, responsive Next.js marketing website with server-side rendering (SSR) and static site generation (SSG)",
      "Integrated Paystack payment gateway with webhook handling for secure transaction processing",
      "Implemented email automation workflows using Resend for transactional and marketing emails",
      "Built reusable component library with TypeScript for consistent UI/UX across the platform",
      "Optimized performance with code splitting, lazy loading, and image optimization",
      "Deployed and maintained production infrastructure on Vercel with CI/CD integration",
    ],
  },
  {
    title: "ML Inference & Analytics | AI-Powered Analytics Platform",
    bullets: [
      "Integrated Hugging Face emotion classification models into production backend services",
      "Built scalable inference endpoints with model caching and batch processing capabilities",
      "Developed real-time React analytics dashboard with interactive data visualizations using Recharts",
      "Implemented data pipeline for processing and aggregating emotion classification results",
      "Created API endpoints for historical data retrieval and trend analysis",
      "Optimized model inference performance to handle high-volume requests efficiently",
    ],
  },
  {
    title: "Enterprise Admin Dashboard & Backend | Enterprise SaaS Platform",
    bullets: [
      "Built comprehensive frontend visualizations for complex rule management systems",
      "Developed backend telemetry APIs for real-time monitoring and alerting",
      "Implemented rule engine with configurable business logic and validation",
      "Created real-time monitoring dashboards with live data updates",
      "Designed and implemented API endpoints for rule CRUD operations with audit logging",
      "Ensured system reliability through comprehensive error handling and monitoring",
    ],
  },
] as const;

export interface Project {
  name: string;
  shortDescription: string;
  details: string[];
  techTags: string[];
  repoUrl: string | null;
  liveUrl?: string;
  isPrivate?: boolean;
}

export const projects: Project[] = [
  {
    name: "ask-obi",
    shortDescription:
      "Movie discovery platform with React frontend and FastAPI backend.",
    details: [
      "Two‑tier app: React/Vite SPA + FastAPI backend with SQLite persistence.",
      "Integrations with third‑party movie metadata APIs and an AI conversational assistant.",
      "Authored containerized deployment notes for Railway/Render and SPA hosting on Vercel.",
    ],
    techTags: ["React", "FastAPI", "SQLite", "Tailwind"],
    repoUrl: "https://github.com/David-Ibe/ask-obi",
    liveUrl: "https://ask-obi.vercel.app",
  },
  {
    name: "require-ng-MVP",
    shortDescription:
      "Fintech MVP leveraging Supabase for auth and Postgres storage, with Docker/k8s deployment.",
    details: [
      "React frontend, Node backend, Supabase auth, and k8s manifests.",
    ],
    techTags: ["React", "Node.js", "Supabase", "Kubernetes"],
    repoUrl: "https://github.com/David-Ibe/require-ng-MVP",
    liveUrl: "https://require-ng.vercel.app",
  },
  {
    name: "social-media-video-downloader",
    shortDescription:
      "Full-stack web app that fetches video metadata and lets users download videos from YouTube, TikTok, Instagram, and other platforms supported by yt-dlp.",
    details: [
      "Resolution selection, URL bookmarks, and queue-based download flow.",
      "React/Vite frontend, NestJS backend, yt-dlp for video extraction.",
    ],
    techTags: ["React", "Vite", "NestJS", "Tailwind", "yt-dlp"],
    repoUrl: "https://github.com/David-Ibe/social-media-video-downloader",
    liveUrl: "https://social-media-video-downloader-1-2dby.onrender.com",
  },
  {
    name: "requiretechnologies",
    shortDescription:
      "Corporate website built with Next.js and TypeScript featuring payment and contact integrations.",
    details: [
      "Next.js marketing site with Tailwind CSS, Paystack payment integration and WhatsApp contact flows.",
      "Resend integration for contact email automation.",
    ],
    techTags: ["Next.js", "TypeScript", "Tailwind", "Paystack"],
    repoUrl: "https://requiretechnologies.com",
  },
  {
    name: "vocalize-app",
    shortDescription:
      "Voice & social interaction application with media upload, streaming and audio features.",
    details: [
      "Media upload/streaming endpoints, client audio capture/playback components.",
      "Authentication flows and secure file handling.",
    ],
    techTags: ["React", "Node.js", "Express"],
    repoUrl: "https://github.com/David-Ibe/vocalize-app",
  },
  {
    name: "Make-Moni-App",
    shortDescription:
      "Fintech / payments MVP for transfers and account management.",
    details: [
      "Secure transfer/payment flows and backend endpoints.",
      "Docker and Kubernetes manifests for deployment.",
    ],
    techTags: ["React", "Node.js", "Supabase", "Docker"],
    repoUrl: "https://github.com/David-Ibe/Make-Moni-App",
  },
  {
    name: "Emotion-Analyzer",
    shortDescription:
      "AI emotion detection & analytics with Hugging Face models and visualization dashboard.",
    details: [
      "Hugging Face Transformers integration for multi‑label emotion classification.",
      "Preprocessing (emoji handling, spell correction) and analytics dashboard.",
    ],
    techTags: ["Flask", "React", "Transformers", "PyTorch"],
    repoUrl: "https://github.com/David-Ibe/Emotion-Analyzer",
  },
  {
    name: "excel-network",
    shortDescription:
      "Backend & integrations for enterprise network telemetry and APIs.",
    details: [
      "APIs for telemetry and device integration supporting the dashboard frontend.",
    ],
    techTags: ["Node.js", "Express", "Telemetry"],
    repoUrl: "https://github.com/David-Ibe/excel-network",
  },
  {
    name: "BustopFX-website",
    shortDescription:
      "Marketing and exchange website with contact and onboarding flows.",
    details: [
      "Static/dynamic marketing site with payment/contact integrations.",
    ],
    techTags: ["Next.js", "Tailwind"],
    repoUrl: "https://github.com/David-Ibe/BustopFX-website",
  },
];

export const featuredProjectSlugs = [
  "ask-obi",
  "require-ng-MVP",
  "social-media-video-downloader",
  "requiretechnologies",
];

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => featuredProjectSlugs.includes(p.name));
}
