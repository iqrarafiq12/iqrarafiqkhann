// app/components/projects/ProjectsSection.tsx

import { BlogData } from "./BlogData";
import ProjectCard from "./BlogCards"; // Make sure this file exists

export default function BlogSection() {
  return (
    <section
      className="
        py-20 
        px-4 sm:px-6 lg:px-12 
        mt-0 sm:mt-0 mt-[-100px] lg:mt-[-120px]
      ml-0 md:ml-[-60px] lg:ml-[-50px]
      "
    >
      {/* Heading */}
      <div className="max-w-7xl mx-auto mb-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--foreground)] leading-tight">
          My Thoughts and {" "}
          <span className="text-[var(--brand-accent)]">
Perspectives          </span>
        </h2>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto grid gap-6 sm:grid-cols-2">
        {BlogData.map((Blog, index) => (
          <ProjectCard key={index} project={Blog} />
        ))}
      </div>
    </section>
  );
}
