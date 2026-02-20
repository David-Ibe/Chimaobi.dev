export const contact = {
  name: "Chimaobi David Ibe",
  title: "AI Integration Developer",
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
  "AI Integration Developer specializing in LLM-powered applications, chatbots, document processing pipelines, and workflow automation. I build AI systems that work in the real world — production-ready, verified, and reliable. Background in Industrial Chemistry means every output is tested, every result is traceable, and every system is built with quality control at its core.";

export const coreSkills = [
  "OpenAI API",
  "Claude (Anthropic API)",
  "LangChain",
  "Hugging Face",
  "PyTorch",
  "Python",
  "FastAPI",
  "Flask",
  "Node.js/Express",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "PostgreSQL (Supabase)",
  "SQLite",
  "Docker",
  "Kubernetes",
  "Vercel/Railway/Render/Fly.io",
  "Paystack",
  "Resend",
] as const;

export const technicalSkills = [
  {
    category: "AI & LLM Integration",
    items: [
      "OpenAI API, Claude (Anthropic), Gemini integration",
      "LangChain: chains, agents, memory, RAG pipelines",
      "Hugging Face Transformers: NLP, emotion classification, inference",
      "AI agent development: sequential and multi-step workflows",
      "Prompt engineering and structured output design",
      "Vector databases and retrieval-augmented generation (RAG)",
    ],
  },
  {
    category: "Backend Development",
    items: [
      "Python: FastAPI, Flask, Pydantic, RESTful API design",
      "Node.js: Express.js, NestJS, JWT authentication",
      "API Architecture: REST APIs, microservices, async/await patterns",
      "Webhook integration, billing systems (Paystack)",
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
    category: "Databases & Auth",
    items: [
      "PostgreSQL (Supabase)",
      "SQLite",
      "Supabase Auth: multi-user, role-based access",
      "Database design and optimization",
    ],
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
    category: "Tools & Practices",
    items: [
      "Version Control: Git, GitHub",
      "Payment Integration: Paystack",
      "Email Services: Resend",
      "Data Visualization: Recharts, Chart.js",
      "Testing, debugging, observability",
    ],
  },
] as const;

export const toolsAndPractices = [
  "LLM integration and prompt engineering",
  "AI agent and workflow automation design",
  "API design and RESTful architecture",
  "Authentication & authorization (JWT, Supabase)",
  "CI/CD-friendly workflows",
  "Containerized local development",
  "Observability (logging, health endpoints)",
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
  "AI integration, LLM-powered applications, chatbot development, workflow automation, full-stack development.";

export const additionalInfo = [
  "Industrial Chemistry background brings rigorous verification mindset to AI engineering — every output is tested, every result is traceable",
  "Specialized in building AI systems that are production-ready, not just functional prototypes",
  "Experience building full AI products from idea to deployed, billing-enabled SaaS",
  "Remote-friendly with experience in async, cross-timezone collaboration",
] as const;

export const experienceItems = [
  {
    title: "AI Agent Development | Ideora Research & Content Platform",
    bullets: [
      "Built a multi-step AI agent using Claude (Anthropic API) that transforms any topic into a publication-ready article through a sequential Plan → Draft → Polish workflow",
      "Integrated optional web search via Serper API to ground AI outputs in real, verifiable sources",
      "Architected full production stack: FastAPI backend, React/Vite frontend, Supabase multi-user auth, Paystack billing",
      "Supports 9 content formats including newsletters, research reports, whitepapers, X threads, and LinkedIn carousels",
      "Deployed on Render (backend) and Vercel (frontend) with full CI/CD pipeline",
    ],
  },
  {
    title: "AI-Powered Discovery Engine | ask-obi Content Platform",
    bullets: [
      "Built a conversational AI discovery engine solving choice paralysis for streaming users across the African market",
      "Integrated natural language AI assistant that understands queries and returns personalized recommendations in real time",
      "Architected two-tier system: React/Vite SPA frontend + FastAPI backend with SQLite persistence",
      "Integrated third-party content metadata APIs with robust error handling and rate limiting",
      "Authored containerized deployment documentation for Railway/Render and Vercel",
    ],
  },
  {
    title: "ML Inference & Sentiment Analytics | Emotion Analyzer",
    bullets: [
      "Built an AI-powered system detecting emotions and sentiment in customer reviews using Hugging Face transformer models",
      "Goes beyond simple positive/negative classification — identifies granular emotional states to help businesses improve retention",
      "Integrated multi-label emotion classification models into production backend services with model caching",
      "Developed real-time React analytics dashboard with interactive data visualizations using Recharts",
      "Built preprocessing pipeline: emoji handling, spell correction, and data aggregation",
    ],
  },
  {
    title: "AI Research Operations Platform | Require Technologies",
    bullets: [
      "Co-founded and built an AI-powered research platform delivering audit-ready reports for law firms, investment teams, and consultancies",
      "Designed AI verification workflows combining automation with human oversight to achieve 95%+ accuracy research outputs",
      "Built full platform: Next.js marketing site, Paystack payment integration, Resend email automation",
      "Architected multi-user infrastructure with Supabase auth, full citation trails, and enterprise-grade security",
    ],
  },
  {
    title: "Fintech Platform | Require-ng MVP",
    bullets: [
      "Built Nigerian fintech platform for global money transfers, crypto peer-to-peer trading, and financial management",
      "Implemented bank-level security with Supabase auth and PostgreSQL storage",
      "Deployed with Docker and Kubernetes manifests for scalable infrastructure",
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
    name: "Ideora",
    shortDescription:
      "AI Research & Content Generation Agent — Plan → Draft → Polish workflow powered by Claude API.",
    details: [
      "Multi-step AI agent that turns any topic into a polished, publication-ready article through a sequential workflow.",
      "Integrated Claude (Anthropic API) and optional web search for source-grounded research outputs.",
      "Supports 9 content formats: newsletters, research reports, whitepapers, X threads, LinkedIn carousels, and more.",
      "Full production stack: FastAPI backend, React/Vite frontend, Supabase auth, Paystack billing.",
    ],
    techTags: ["Claude API", "FastAPI", "React", "Supabase", "LangChain"],
    repoUrl: "https://github.com/David-Ibe/Ideora",
    liveUrl: "https://ideora-rouge.vercel.app",
  },
  {
    name: "ask-obi",
    shortDescription:
      "AI-powered content discovery engine with conversational assistant for the African streaming market.",
    details: [
      "Conversational AI assistant that understands natural language queries and returns personalized recommendations.",
      "Two-tier architecture: React/Vite SPA + FastAPI backend with SQLite persistence.",
      "Solves choice paralysis for Nollywood and African streaming content consumers.",
    ],
    techTags: ["OpenAI API", "React", "FastAPI", "SQLite", "Tailwind"],
    repoUrl: "https://github.com/David-Ibe/ask-obi",
    liveUrl: "https://ask-obi.vercel.app",
  },
  {
    name: "Emotion-Analyzer",
    shortDescription:
      "AI customer sentiment & emotion detection system using Hugging Face transformer models.",
    details: [
      "Detects granular emotions in customer reviews — beyond simple positive/negative classification.",
      "Hugging Face Transformers integration with preprocessing pipeline and model caching.",
      "Real-time React analytics dashboard with interactive visualizations.",
    ],
    techTags: ["Hugging Face", "PyTorch", "Flask", "React", "Recharts"],
    repoUrl: "https://github.com/David-Ibe/Emotion-Analyzer",
  },
  {
    name: "requiretechnologies",
    shortDescription:
      "AI-powered research operations platform for law firms, investment teams, and consultancies.",
    details: [
      "Delivers audit-ready research reports with full citations in 24 hours.",
      "Combines AI automation with human verification for 95%+ accuracy.",
      "Next.js platform with Paystack billing, Resend email automation, enterprise security.",
    ],
    techTags: ["Next.js", "TypeScript", "Tailwind", "Paystack", "Resend"],
    repoUrl: null,
    liveUrl: "https://requiretechnologies.com",
  },
  {
    name: "require-ng-MVP",
    shortDescription:
      "Nigerian fintech platform for global money transfers, crypto P2P trading, and financial management.",
    details: [
      "Bank-level security with Supabase auth and PostgreSQL storage.",
      "React frontend, Node backend, Docker and Kubernetes deployment manifests.",
    ],
    techTags: ["React", "Node.js", "Supabase", "Kubernetes", "Docker"],
    repoUrl: "https://github.com/David-Ibe/require-ng-MVP",
    liveUrl: "https://require-ng.vercel.app",
  },
  {
    name: "social-media-video-downloader",
    shortDescription:
      "Full-stack web app for downloading videos from YouTube, TikTok, Instagram, and more.",
    details: [
      "Resolution selection, URL bookmarks, and queue-based download flow.",
      "React/Vite frontend, NestJS backend, yt-dlp for video extraction.",
    ],
    techTags: ["React", "Vite", "NestJS", "Tailwind", "yt-dlp"],
    repoUrl: "https://github.com/David-Ibe/social-media-video-downloader",
    liveUrl: "https://social-media-video-downloader-1-2dby.onrender.com",
  },
  {
    name: "vocalize-app",
    shortDescription:
      "Voice & social interaction platform with media upload, streaming, and real-time audio features.",
    details: [
      "Media upload/streaming endpoints, client audio capture/playback with Web Audio API.",
      "JWT authentication, RBAC, secure file storage with CDN optimization.",
      "Real-time features using WebSockets for live audio interactions.",
    ],
    techTags: ["React", "Node.js", "Express", "WebSockets"],
    repoUrl: "https://github.com/David-Ibe/vocalize-app",
  },
  {
    name: "BustopFX-website",
    shortDescription:
      "Marketing and exchange website with contact and onboarding flows.",
    details: [
      "Static/dynamic marketing site with payment and contact integrations.",
    ],
    techTags: ["Next.js", "Tailwind"],
    repoUrl: "https://github.com/David-Ibe/BustopFX-website",
  },
];

export const featuredProjectSlugs = [
  "Ideora",
  "ask-obi",
  "Emotion-Analyzer",
  "requiretechnologies",
];

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => featuredProjectSlugs.includes(p.name));
}
