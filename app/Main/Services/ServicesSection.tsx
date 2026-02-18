import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import { ServicesData } from "../Services/ServicesData";

export default function ServicesSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-12 mt-[-70px]
      ml-0 md:ml-[-60px] lg:ml-[-50px]">

      <div className="max-w-6xl mx-auto">
        
        {/* Section Heading */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-[var(--foreground)] leading-tight">
            Recent Projects and{" "}
            <span className="text-[var(--brand-accent)]">
              Achievements
            </span>
          </h2>
          <div className="mt-6 h-[1px] w-full bg-[var(--border)]" />

        {/* Services List */}
        <div>
          {ServicesData.map((service, index) => (
            <div
              key={index}
              className="group border-b border-[var(--border)] py-16"
            >
              <div className="grid grid-cols-1 md:grid-cols-[1.5fr_2fr_auto] gap-10 items-start">
                
                {/* Service Title */}
                <h3 className="text-2xl md:text-3xl font-medium text-[var(--foreground)] leading-snug">
                  {service.title}
                </h3>

                {/* Service Description */}
                <p className="text-base leading-relaxed text-[var(--muted-foreground)] max-w-xl">
                  {service.description}
                </p>

                {/* Arrow Button */}
                <div className="flex md:justify-end">
                  <Link
                    href={service.link}
                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/20 bg-white/10 backdrop-blur-md transition-all duration-300 hover:scale-105 hover:bg-white/20"
                  >
                    <FiArrowUpRight className="h-5 w-5 text-[var(--brand-accent)]" />
                  </Link>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
