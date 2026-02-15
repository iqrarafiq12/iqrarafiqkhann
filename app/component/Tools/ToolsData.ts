import {
  FaFigma,
  FaReact,
  FaCss3Alt,
  FaGithub,
  FaNodeJs,
} from "react-icons/fa";

export const tools = [
  // ===== DESIGN =====
  {
    name: "Figma",
    role: "UI/UX Design & Prototyping",
    icon: FaFigma,
    category: "Design",
  },

  // ===== FRONTEND =====
  {
    name: "Next.js (TypeScript)",
    role: "Fullstack React Framework",
    icon: FaReact,
    category: "Frontend",
  },
  {
    name: "React.js",
    role: "Component-Based UI Development",
    icon: FaReact,
    category: "Frontend",
  },
  {
    name: "Nuxt.js (TypeScript)",
    role: "Vue-Based Framework",
    icon: FaNodeJs,
    category: "Frontend",
  },
  {
    name: "Tailwind CSS",
    role: "Utility-First Styling",
    icon: FaCss3Alt,
    category: "Frontend",
  },

  // ===== BACKEND & INTEGRATION =====
  {
    name: "REST APIs",
    role: "Backend Integration & Data Flow",
    icon: FaNodeJs,
    category: "Backend & Integration",
  },

  // ===== WORKFLOW =====
  {
    name: "Git & GitHub",
    role: "Version Control & Collaboration",
    icon: FaGithub,
    category: "Workflow",
  },
  {
    name: "Framer Motion",
    role: "UI Animation & Interaction",
    icon: FaReact,
    category: "Workflow",
  },
];
