// app/components/projects/ProjectsSection.tsx

import { projects } from "./projectsData";
import ProjectCard from "./ProjectCard";

export default function ProjectsSection() {
  return (
    <section
      className="py-20 px-4 sm:px-6 lg:px-12  mt-[-30px]
      ml-0 md:ml-[-60px] lg:ml-[-50px]"
    >
      {/* Heading */}
      <div className="max-w-7xl mx-auto mb-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--foreground)] leading-tight">
2+ Years Experience{" "}& <b />
          <span className="text-[var(--brand-accent)]">
            Resent Projects
          </span>
        </h2>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto grid gap-6 sm:grid-cols-2">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
}
