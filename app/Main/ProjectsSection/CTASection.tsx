"use client";

import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

export default function CTASection() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-20 lg:ml-[-30px] mt-[-90px]">
      <div className="max-w-5xl mx-auto">
        
        {/* CTA Card */}
        <div
          className="
            relative
            rounded-3xl
            bg-secondary
            border border-white/5
            backdrop-blur-xl
            p-8 sm:p-12
            overflow-hidden
          "
        >
          {/* Arrow Button */}
          <Link
            href="/contact"
            className="
              absolute top-6 right-6
              w-12 h-12
              sm:w-14 sm:h-14
              flex items-center justify-center
              rounded-full
              bg-[var(--brand-accent)]
              hover:scale-110
              transition-all duration-300
              shadow-lg
            "
          >
            <FiArrowUpRight className="text-white text-xl sm:text-2xl" />
          </Link>

          {/* Content */}
          <div className="max-w-3xl">
            <h2 className="text-4xl sm:text-5xl font-bold leading-tight text-[var(--brand-dark-3)]">
              Let’s<br />
              <span className="text-[var(--brand-accent)]">
                Collaborate
              </span>
            </h2>

            <p className="mt-6 text-[var(--brand-dark-2)] text-sm sm:text-base leading-relaxed">
                 Unlock the potential of your product with expert design and
              development services. Let’s collaborate to create user-centered
              solutions that not only meet your goals but also delight your users.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
