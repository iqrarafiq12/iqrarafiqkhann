import Link from "next/link";
import ProjectsSection from "../ProjectsSections/ProjectsSection";

import ReviewsSection from "../ReviewsSection";
import QA from "../QA";
import BlogSection from "../BlogsSections/BlogSection";
import Contact from "@/app/Main/Contacts/Contact";


export default function ScrollContent() {
  return (
    <>
      <section
        className="
    lg:min-h-screen
    flex flex-col
    justify-start lg:justify-center
    px-6 sm:px-10 md:px-16 lg:px-0
    ml-0 md:ml-[-60px] lg:ml-[-60px]
    gap-6
  "
      >

        <h1 className="
          text-3xl 
          sm:text-4xl 
          md:text-5xl 
          lg:text-5xl 
          font-bold 
          leading-tight
        ">
          Designing & Building <br />
          Digital Experiences That{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--brand-accent)] to-[var(--brand-primary)]">
            Convert
          </span>
        </h1>

        <p className="
          text-[var(--brand-dark-2)] 
          max-w-full 
          sm:max-w-xl 
          text-sm sm:text-base
        ">
          I’m Iqra Rafiq Khan a UI/UX Designer and Frontend Developer crafting scalable,
          high-performing digital products for startups and modern brands.
          Open to collaborations, product design, and full-stack development projects.
        </p>

        <div className="
          flex 
          flex-col 
          sm:flex-row 
          flex-wrap 
          gap-8 sm:gap-10 
        ">
          <div>
            <h3 className="text-1xl sm:text-2xl font-bold text-foreground">
              UI/UX + Dev
            </h3>
            <p className="text-dark-2 text-sm">
              End-to-End Execution
            </p>
          </div>

          <div>
            <h3 className="text-1xl sm:text-2xl font-bold text-foreground">
              Startup Focused
            </h3>
            <p className="text-dark-2 text-sm">
              Modern & Scalable
            </p>
          </div>

          <div>
            <h3 className="text-1xl sm:text-2xl font-bold text-foreground">
              User-Centered
            </h3>
            <p className="text-dark-2 text-sm">
              Performance Driven
            </p>
          </div>
        </div>

        <div className="
          flex items-center
          flex-col sm:flex-row 
          gap-4 sm:gap-6
        ">
          <Link href="/contact" >
            <button className="
            px-6 py-3 
            rounded-xl 
            bg-[var(--brand-primary)] 
            hover:opacity-90 
            transition 
            text-[var(--foreground)]
            w-full sm:w-auto
          ">
              Work With Me
            </button>
          </Link>

          <Link href="/projects">
            <button className="
            text-[var(--brand-accent)] 
            hover:opacity-80 
            transition
            w-full sm:w-auto
          ">
              View Projects →
            </button>
          </Link>
        </div>

        {/* PROJECTS */}

        <ProjectsSection />


        {/* TOOLS */}

        {/* TOOLS */}
        <ReviewsSection />

    {/* BLOGS */}
        <BlogSection />
        {/* FAQS */}

        <QA />

        {/* CTA */}

        <Contact />

      </section>
    </>
  );
}
