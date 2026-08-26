import servitaCover from "@/assets/servita.jpeg";
import tournatedCover from "@/assets/tournated.jpeg";
import flokkidsCover from "@/assets/flokids.jpeg";
import kosmicCover from "@/assets/kosmic.jpeg";
import echotalkCover from "@/assets/echotalk.jpeg";
import wawcdCover from "@/assets/wawcd.jpeg";
import osciumCover from "@/assets/oscium.jpeg";
import aimsplusCover from "@/assets/aimsplus.jpeg";


export interface Project {
  id: string;
  title: string;
  category: string;
  tags: string[];
  year: string;
  client: string;
  description: string;
  coverImage: string;
  images: string[];
}

export const projects: Project[] = [
  {
    id: "oscium",
    title: "Oscium",
    category: "Web Application with Strapi",
    tags: ["Vue.js", "Strapi", "Sqlite3", "Stripe"],
    year: "2026",
    client: "Toptal (toptal.com)",
    description: "Built a e-commerce application with Strapi, Vue.js, and Sqlite3, pixel-perfect UI with lots of integration",
    coverImage: osciumCover,
    images: [osciumCover],
  },
  {
    id: "servita",
    title: "Servita",
    category: "Web Application & Agentic AI",
    tags: ["MICROSERVICES", "NESTJS", "AWS", "STRIPE", "DOCKER", "INTEGRATIONS"],
    year: "2026",
    client: "Servita (sme.servita.com)",
    description: "Built the complete frontend and backend for a service management platform using React, Node.js, and MongoDB, implementing task and booking management features.",
    coverImage: servitaCover,
    images: [servitaCover],
  },
  {
    id: "wawcd",
    title: "WAWCD",
    category: "Chatbot & Agentic AI",
    tags: ["CLAUDE", "AGENTIC AI", "NEXT.JS", "PYTHON", "POSTGRESQL"],
    year: "2026",
    client: "WAWCD (wawcd.com)",
    description: "Built a chatbot and agentic AI platform using Claude, RAGs, Next.js, NestJS, and Socket.io, delivering real-time chat, calling, and translation services.",
    coverImage: wawcdCover,
    images: [wawcdCover],
  },
  {
    id: "tournated",
    title: "Tournated",
    category: "Web Application",
    tags: ["MICROSERVICES", "NESTJS", "AWS", "STRIPE", "DOCKER"],
    year: "2025",
    client: "Tournated (play.tournated.com)",
    description: "Led full-stack development for a white-label sports management platform using React, NestJS, and PostgreSQL, architecting real-time score updates and Stripe payment integration.",
    coverImage: tournatedCover,
    images: [tournatedCover],
  },
  {
    id: "flokkids",
    title: "Flokkids",
    category: "Web Application",
    tags: ["NEXT.JS", "NESTJS", "GRAPHQL", "MYSQL", "EVENT MANAGEMENT"],
    year: "2024",
    client: "Flokkids (flokkids.com)",
    description: "Developed a full-stack event booking and subscription platform for children using Next.js, NestJS, GraphQL, and MySQL.",
    coverImage: flokkidsCover,
    images: [flokkidsCover],
  },
  {
    id: "kosmic",
    title: "Kosmic",
    category: "AI & Video Platform",
    tags: ["TYPESCRIPT", "NEXT.JS", "FFMPEG", "IMAGE PROCESSING", "AI Script Generation"],
    year: "2023",
    client: "Kosmic (feature-dev.kosmic.ai)",
    description: "Engineered AI/ML-powered frontend features for a video editing platform using TypeScript, Next.js, and FFmpeg, integrating AI script generation, teleprompters, and real-time Socket.io communication.",
    coverImage: kosmicCover,
    images: [kosmicCover],
  },
  {
    id: "echotalk",
    title: "Echotalk",
    category: "Web Application",
    tags: ["SOCKETS.IO", "NEXT.JS", "NESTJS", "AWS", "LLMs"],
    year: "2022",
    client: "Echotalk (echotalk.co.uk)",
    description: "Built an accessible full-stack communication platform for disabled individuals using TypeScript, Next.js, NestJS, and Socket.io, delivering real-time chat, calling, and translation services.",
    coverImage: echotalkCover,
    images: [echotalkCover],
  },
  {
    id: "aimsplus",
    title: "Aimplus",
    category: "Warehouse Management Application",
    tags: ["PYTHON", "FASTAPI", "POSTGRESQL", "APIS", "AWS"],
    year: "2021",
    client: "Aimsplus (aimsplus.com)",
    description: "Built a warehouse management application with Python, FastAPI, PostgreSQL, APIs, and AWS, delivering real-time inventory management and warehouse management services.",
    coverImage: aimsplusCover,
    images: [aimsplusCover],
  },
];