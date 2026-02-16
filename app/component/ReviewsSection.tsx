"use client";

import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const reviews = [
  {
    id: 1,
    name: "Kevin Costner",
    subtitle: "SaaS Startup Founder",
    review:
      "She brought clarity to our product from both a UX and engineering perspective. She redesigned our dashboard experience and implemented a scalable frontend architecture using Next.js. The result was faster load times and a more intuitive user journey.",
  },
  {
    id: 2,
    name: "Hassan Malik",
    subtitle: "E-commerce Brand Owner",
    review:
      "Our previous website lacked structure and performance. Iqra rebuilt the experience with a clean design system and optimized frontend structure. The new platform feels modern, responsive, and significantly more engaging for customers.",
  },
  {
    id: 3,
    name: "Melissa Richard",
    subtitle: "Product Manager · FinTech Industry",
    review:
      "What stood out was her ability to connect design decisions with technical feasibility. She thinks beyond visuals considering edge cases, scalability, and long-term maintainability. The collaboration felt structured and professional.",
  },
  {
    id: 4,
    name: "Aysha Khalid",
    subtitle: "Creative Director · Digital Agency",
    review:
      "Iqra understands both user psychology and modern frontend systems. Her work improved our client project’s consistency, usability, and performance. She communicates clearly and delivers with attention to detail.",
  },
];

export default function ReviewsSection() {
  const [current, setCurrent] = useState(0);

  const nextReview = () => {
    setCurrent((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrent((prev) =>
      prev === 0 ? reviews.length - 1 : prev - 1
    );
  };

  return (
    <section className="relative w-full py-20 text-foreground overflow-hidden mt-[-130px]
      ml-0 md:ml-[-60px] lg:ml-[-50px]">
    
      <div className="relative max-w-6xl mx-auto px-6 lg:px-12">
        
        {/* Heading */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            What Clients Say<br />
            About{" "}
            <span className="text-primary">
             My Work
            </span>
          </h2>

          {/* Navigation Buttons */}
          <div className="flex gap-4 mt-6 md:mt-0">
            <button
              onClick={prevReview}
              className="w-12 h-12 rounded-full bg-primary flex items-center justify-center hover:scale-110 transition"
            >
              <FaArrowLeft />
            </button>

            <button
              onClick={nextReview}
              className="w-12 h-12 rounded-full bg-primary flex items-center justify-center hover:scale-110 transition"
            >
              <FaArrowRight />
            </button>
          </div>
        </div>

        {/* Review Card */}
        <div className="bg-secondary/40 backdrop-blur-md rounded-2xl p-3 sm:p-8 md:p-10 border border-white/10 shadow-xl transition-all duration-500">
          
          <div className="flex flex-col gap-5">
            {/* Review Content */}
            <div>
              <h3 className="text-lg sm:text-xl font-semibold">
                {reviews[current].name}
              </h3>

              {/* Subtitle */}
              <p className="text-sm text-dark-3 mt-1 mb-3">
                {reviews[current].subtitle}
              </p>

              <p className="text-dark-2 text-sm sm:text-base leading-relaxed max-w-3xl">
                {reviews[current].review}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
