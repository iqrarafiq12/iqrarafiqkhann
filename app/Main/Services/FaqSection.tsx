"use client";

import { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const faqs = [
  {
    question: "What services do you offer?",
    answer:
      "I provide end-to-end digital product services including UI/UX design, responsive web development, frontend architecture, and API integration. From research and product strategy to scalable implementation using modern frameworks like Next.js and TypeScript, I focus on building clean, user-centered, and performance-driven applications.",
  },
  {
    question: "What is your design and development process?",
    answer:
      "My process begins with understanding business goals and user needs through research and analysis. I then create wireframes and high-fidelity UI designs in Figma before moving into structured development. Using component-based architecture, reusable design systems, and modern frontend practices, I ensure every product is scalable, maintainable, and optimized for performance.",
  },
  {
    question: "How do you ensure usability and performance?",
    answer:
      "I follow UX principles such as clarity, accessibility, responsive design, and intuitive navigation. On the development side, I optimize performance using efficient rendering strategies, clean TypeScript-based logic, proper API handling, and performance audits to ensure fast loading times and smooth interactions across devices.",
  },
  {
    question: "How do you handle project timelines and delivery?",
    answer:
      "I structure projects into defined milestones with clear deliverables. Each phase—design, development, testing, and optimization—is carefully planned to maintain quality and consistency. I prioritize transparent communication and regular updates to ensure alignment throughout the project lifecycle.",
  },
  {
    question: "Can you collaborate with existing teams?",
    answer:
      "Yes. I work effectively with designers, developers, product managers, and stakeholders. I use Git & GitHub for version control, follow clean coding standards, and align with existing design systems and workflows to integrate seamlessly into professional team environments.",
  },
  {
    question: "What tools and technologies do you use?",
    answer:
      "For design, I use Figma to create structured design systems and interactive prototypes. For development, I work with Next.js (TypeScript), React, Tailwind CSS, REST APIs, and modern deployment platforms. I also use Git-based workflows and animation libraries like Framer Motion to create engaging and scalable digital experiences.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="text-dark-3 px-4 sm:px-6 lg:px-8 py-20 lg:ml-[-30px] mt-[-70px]">
      <div className="max-w-5xl mx-auto">
        
        {/* Heading */}
        <h2 className="text-4xl text-foreground sm:text-5xl lg:text-6xl font-bold mb-12">
          Frequently Asked{" "}
          <span className="text-primary">
            Questions
          </span>
        </h2>

        {/* Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="rounded-2xl 
                          bg-secondary
                          border border-white/5 
                          backdrop-blur-lg
                          transition-all duration-300"
              >
                {/* Question */}
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex items-center justify-between p-6 text-left text-foreground"
                >
                  <span className="text-lg sm:text-xl font-medium">
                    {faq.question}
                  </span>

                  {isOpen ? (
                    <FiChevronUp className="text-accent text-xl" />
                  ) : (
                    <FiChevronDown className="text-dark-2 text-xl" />
                  )}
                </button>

                {/* Answer */}
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-80 px-6 pb-6" : "max-h-0"
                  }`}
                >
                  <p className="text-dark-2 text-sm sm:text-base leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
