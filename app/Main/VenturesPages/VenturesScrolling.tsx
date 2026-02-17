"use client";

import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";


import FaqSection from "./FaqSection";

import Projects from "./Projects";
import CTASection from "../ProjectsSection/CTASection";

export default function VenturesScrolling() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-12 mt-[-70px] ml-0 md:ml-[-60px] lg:ml-[-130px]">
      {/* Heading */}
      <div className="max-w-7xl mx-auto mb-6">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--foreground)] leading-tight">
          My Studio and Ventures{" "}
          <span className="text-[var(--brand-accent)]">Updates</span>
        </h2>
      </div>

      {/* 01 Card - Edaqai */}
      <div className="max-w-5xl mx-auto">
        <div className="relative rounded-3xl bg-secondary border border-white/5 backdrop-blur-xl p-8 sm:p-12 overflow-hidden">
          {/* Arrow Button */}
          <Link
            href="https://www.instagram.com/edaqai.creatives/"
            className="absolute top-6 right-6 w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-full bg-accent text-foreground hover:scale-110 transition-all duration-300 shadow-lg"
          >
            <FiArrowUpRight className="text-white text-xl sm:text-2xl" />
          </Link>

          {/* Content */}
          <div className="max-w-3xl">
            <h2 className="text-4xl sm:text-5xl font-bold leading-tight text-foreground">
              Edaqai Creatives
            </h2>

            <p className="mt-6 text-dark-3 text-sm sm:text-base leading-relaxed">
              Founded by Iqra Rafiq Khan in August 2025, EDAQAI is a creative technology and design studio that helps brands, startups, and businesses grow.
              We blend design, technology, and marketing strategy to deliver meaningful,
              client-focused solutions from brand identity and UI/UX design to web development and marketing visuals.
              At EDAQAI, every project is driven by innovation, clarity, and collaboration,
              crafting experiences that are visually stunning and solve real business challenges.
            </p>
          </div>
        </div>
      </div>

      {/* 02 Card - Winkieverse */}
      <div className="max-w-5xl mx-auto mt-10">
        <div className="relative rounded-3xl bg-secondary border border-white/5 backdrop-blur-xl p-8 sm:p-12 overflow-hidden">
          {/* Arrow Button */}
          <Link
            href="https://www.instagram.com/thewinkieverse/"
            className="absolute top-6 right-6 w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-full bg-accent text-foreground hover:scale-110 transition-all duration-300 shadow-lg"
          >
            <FiArrowUpRight className="text-white text-xl sm:text-2xl" />
          </Link>

          {/* Content */}
          <div className="max-w-3xl">
            <h2 className="text-4xl sm:text-5xl font-bold leading-tight text-foreground">
              The Winkieverse
            </h2>

            <p className="mt-6 text-dark-3 text-sm sm:text-base leading-relaxed">
              The Winkieverse is a hands-on, project-based learning community focused on UI/UX, product design, and digital skills. It was founded by Iqra Rafiq, a creative entrepreneur and designer, to help students, early-stage founders, and aspiring creators learn by doing. The platform enables members to recreate real projects, submit their work for feedback, and get featured in showcases, building both practical skills and portfolio-ready projects. By combining mentorship, collaboration, and structured learning, The Winkieverse bridges the gap between learning and professional-level design execution.
            </p>
          </div>
        </div>
      </div>

      {/* Projects Grid with Filters */}
      <Projects />

      {/* FAQS */}
      <FaqSection />

      {/* CTA */}
      <CTASection />
    </section>
  );
}
