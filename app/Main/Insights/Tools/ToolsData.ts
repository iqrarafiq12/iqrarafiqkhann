import {
  FaFigma,
  FaReact,
  FaNodeJs,
  FaDocker,
  FaWordpress,
  FaTrello 
} from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { DiMongodb } from "react-icons/di";
import { RiFirebaseFill, RiNotionFill  } from "react-icons/ri";
import { IoLogoVercel } from "react-icons/io5";
import { AiFillOpenAI } from "react-icons/ai";
import { PiOpenAiLogo } from "react-icons/pi";


import { TbBrandAdobeIllustrator } from "react-icons/tb";
import {
  SiAdobephotoshop,
  SiNuxtdotjs,
  SiShadcnui,
  SiNextdotjs,
  SiNetlify,
  SiPrisma,
} from "react-icons/si";

export const tools = [
  // ===== FRONTEND =====
  {
    name: "Next.js (TypeScript)",
    role: "Full-Stack React Framework for Production Apps",
    icon: SiNextdotjs,
    category: "Frontend",
  },
  {
    name: "Nuxt.js (TypeScript)",
    role: "Vue-Based Framework for Scalable Applications",
    icon: SiNuxtdotjs,
    category: "Frontend",
  },
  {
    name: "React.js",
    role: "Component-Based UI Development",
    icon: FaReact,
    category: "Frontend",
  },
  {
    name: "ShadCN UI",
    role: "Accessible & Customizable Component System",
    icon: SiShadcnui,
    category: "Frontend",
  },
  {
    name: "Tailwind CSS",
    role: "Utility-First Styling Framework",
    icon: RiTailwindCssFill,
    category: "Frontend",
  },

  // ===== DESIGN =====
  {
    name: "Adobe Illustrator",
    role: "Vector Graphics & Brand Identity Design",
    icon: TbBrandAdobeIllustrator,
    category: "Design",
  },
  {
    name: "Adobe Photoshop",
    role: "Visual Design & Image Manipulation",
    icon: SiAdobephotoshop,
    category: "Design",
  },
  {
    name: "Framer",
    role: "Interactive Prototyping & Landing Page Development",
    icon: FaFigma,
    category: "Design",
  },
  {
    name: "FigJam",
    role: "User Flows, Wireframing & Team Collaboration",
    icon: FaFigma,
    category: "Design",
  },

  // ===== BACKEND & DATABASE =====
  {
    name: "Node.js",
    role: "Server-Side JavaScript Runtime",
    icon: FaNodeJs,
    category: "Backend & Integration",
  },
  {
    name: "MongoDB",
    role: "NoSQL Database for Scalable Applications",
    icon: DiMongodb,
    category: "Backend & Integration",
  },
  {
    name: "Firebase",
    role: "Authentication, Realtime Database & Hosting",
    icon: RiFirebaseFill,
    category: "Backend & Integration",
  },
  {
    name: "Prisma",
    role: "Type-Safe ORM & Database Management",
    icon: SiPrisma,
    category: "Backend & Integration",
  },

  // ===== DEPLOYMENT =====
  {
    name: "Vercel",
    role: "Frontend Deployment & CI/CD Platform",
    icon: IoLogoVercel,
    category: "Deployment",
  },
  {
    name: "Netlify",
    role: "Static Site Hosting & Automation",
    icon: SiNetlify,
    category: "Deployment",
  },
  {
    name: "Docker",
    role: "Application Containerization",
    icon: FaDocker,
    category: "Deployment",
  },
  {
    name: "WordPress",
    role: "CMS Development & Custom Website Solutions",
    icon: FaWordpress,
    category: "Deployment",
  },

  // ===== AI & AUTOMATION =====
  {
    name: "OpenAI API",
    role: "AI Integration & Intelligent Automation",
    icon: AiFillOpenAI,
    category: "AI & Automation",
  },
  {
    name: "ChatGPT",
    role: "Research, Ideation & Workflow Acceleration",
    icon: PiOpenAiLogo,
    category: "AI & Automation",
  },

  // ===== WORKFLOW =====
  {
    name: "Notion",
    role: "Product Planning & Documentation",
    icon: RiNotionFill,
    category: "Workflow",
  },
  {
    name: "Trello",
    role: "Task Management & Team Collaboration",
    icon: FaTrello,
    category: "Workflow",
  },
];

