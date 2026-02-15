// app/components/projects/projectsData.ts

export interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
}

export const projects: Project[] = [
  {
    title: "DOT. ART STUDIO",
    description: "Next.TS, Motion Dev, and Tailwind CSS",
    image: "/project-01.png",
    link: "https://dotartstudio.vercel.app/",
  },
  {
    title: "CALCULATOR",
    description: "HTML, CSS & JAVASCRIPT",
    image: "/project-02.png",
    link: "https://webdevinterneecalculator.netlify.app/",
  },
  {
    title: "OPENAI GPT-4",
    description: "React.js, ViteRapid AI, ",
    image: "/project03.png",
    link: "https://sumz-open-ai-gpt-4.vercel.app/",
  },
  {
    title: "PORTFOLIO WEBSITE",
    description: "Wordpress landing page",
    image: "/project-04.png",
    link: "https://izzahhere.wordpress.com/",
  },
];
