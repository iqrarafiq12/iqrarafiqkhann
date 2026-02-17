// app/components/projects/Projects.tsx
"use client";

import { useState } from "react";
import ProjectCard from "./ProjectCard";
import { projects, Project } from "./projectsData";

export default function Projects() {
  // Get unique categories
  const categories = [...new Set(projects.map((p) => p.category))];

  // Set first category as default active
  const [selectedCategory, setSelectedCategory] = useState(categories[0] || "");

  // Filter projects if a category is selected
  const filteredProjects = projects.filter(
    (p) => p.category === selectedCategory
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:ml-[-30px]">
      
      {/* Category Buttons */}
      <div className="flex flex-wrap gap-3 mb-8">
        {categories.map((cat, index) => (
          <button
            key={index}
            onClick={() => setSelectedCategory(cat)}
            className={`
              px-4 py-2 rounded-full text-sm font-medium
              transition-colors duration-300
              ${
                selectedCategory === cat
                  ? "bg-[var(--brand-accent)] text-white"
                  : "bg-white/10 text-white hover:bg-[var(--brand-accent)]"
              }
            `}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      {filteredProjects.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {filteredProjects.map((project: Project, index) => (
            <ProjectCard key={`${project.title}-${index}`} project={project} />
          ))}
        </div>
      )}
    </div>
  );
}
