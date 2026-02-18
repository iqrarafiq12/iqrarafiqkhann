// app/components/projects/ProjectCard.tsx

import Image from "next/image";
import Link from "next/link";
import { Blog, BlogData } from "./BlogData";

interface Props {
  project: Blog;
}

export default function BlogCards({ project }: Props) {
  return (
    <Link
      href={project.link}
      className="group block rounded-2xl overflow-hidden 
      border border-white/5 
      hover:border-[var(--brand-accent)]
      transition-all duration-300"
    >
      {/* Image */}
      <div
        className="
        relative w-full 
        aspect-[4/3]        /* Mobile ratio */
        sm:aspect-[16/10]   /* Tablet */
        md:aspect-[16/9]    /* Desktop */
        overflow-hidden 
        bg-[var(--brand-secondary)]
        shadow-2xl
      "
      >
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 640px) 100vw,
                 (max-width: 1024px) 50vw,
                 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Bottom Content Section */}
      <div className="px-5 h-full sm:px-6 py-5 bg-[var(--brand-secondary)]">
        <h3
          className="text-lg sm:text-xl font-semibold text-white 
          group-hover:text-[var(--brand-accent)] 
          transition-colors duration-300"
        >
          {project.title}
        </h3>

        <p className="text-sm text-neutral-400 mt-2">
          {project.description}
        </p>
      </div>
    </Link>
  );
}
