"use client";

import { useState } from "react";
import { projects } from "./Projects-Data";
import ProjectCard from "@/app/component/ProjectsSections/ProjectCard";
import FaqSection from "./FaqSection";
import CTASection from "./CTASection";

export default function ProjectsScrolling() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = [
    "All",
    "HTML/CSS/JS",
    "React",
    "Next",
    "WordPress",
    "Nuxt",
    "UI UX",
  ];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => {
          const desc = project.description.toLowerCase();

          switch (activeFilter) {
            case "HTML/CSS/JS":
              return desc.includes("html");

            case "React":
              return desc.includes("react");

            case "Next":
              return desc.includes("next");

            case "WordPress":
              return desc.includes("wordpress");

            case "Nuxt":
              return desc.includes("nuxt");

            case "UI UX":
              return desc.includes("ui") || desc.includes("ux");

            default:
              return false;
          }
        });

  return (
    <section
      className="py-20 px-4 sm:px-6 lg:px-12 mt-[-70px]
      ml-0 md:ml-[-60px] lg:ml-[-130px]"
    >
      {/* Heading */}
      <div className="max-w-7xl mx-auto mb-6">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--foreground)] leading-tight">
          Recent Projects and <b />
          <span className="text-[var(--brand-accent)]">
            Achievements
          </span>
        </h2>
      </div>

      {/* FILTER BUTTONS */}
      <div className="max-w-7xl mx-auto mb-12 flex flex-wrap gap-3">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300
              ${
                activeFilter === filter
                  ? "bg-[var(--brand-primary)] text-white"
                  : "bg-[var(--brand-secondary)] text-[var(--foreground)] border border-white/10 hover:bg-[var(--brand-dark-1)]"
              }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto grid gap-6 sm:grid-cols-2">
        {filteredProjects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>

      {/* FAQS*/}
         <FaqSection />
         <CTASection />
    </section>
  );
}
