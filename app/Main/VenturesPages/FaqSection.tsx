"use client";

import { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const faqs = [
  {
    question: "What services do you offer?",
    answer:
      "Through EDAQAI Creatives, I provide end-to-end digital product services including Product Designing & Development, Social Media Designing and Marketing, Brand Idenity, Cyber Security and API, AI integration. From research and product strategy to scalable implementation using modern frameworks like Next.js and TypeScript, I focus on building clean, user-centered, and performance-driven applications for startups and growing brands.",
  },
  {
    question: "What is EDAQAI Creatives?",
    answer:
      "EDAQAI Creatives is my creative technology and design studio focused on helping brands, startups, and businesses grow through intentional design and modern development. We blend brand identity, UI/UX, and scalable web solutions to deliver meaningful digital experiences that solve real business problems.",
  },
  {
    question: "What is The Winkieverse?",
    answer:
      "The Winkieverse is a hands-on, project-based learning community built to help aspiring designers and developers grow through real-world practice. It focuses on UI/UX, product design, and digital skills by encouraging members to recreate projects, receive feedback, and build portfolio-ready work that bridges the gap between learning and professional execution.",
  },
  {
    question: "What is your design and development process?",
    answer:
      "My process begins with understanding business goals and user needs through research and strategy. I then design structured wireframes and high-fidelity interfaces in Figma before moving into scalable development. Using component-based architecture, reusable design systems, and modern frontend practices, I ensure every product built under EDAQAI is maintainable, optimized, and future-ready.",
  },
  {
    question: "How do you ensure usability and performance?",
    answer:
      "I follow UX principles such as clarity, accessibility, responsive behavior, and intuitive navigation. On the technical side, I optimize performance using efficient rendering strategies, clean TypeScript-based logic, structured API integration, and performance audits to ensure fast load times and seamless interactions across devices.",
  },
  {
    question: "Can I collaborate with EDAQAI or join The Winkieverse?",
    answer:
      "Yes. EDAQAI collaborates with startups, founders, and businesses worldwide to design and build impactful digital products. The Winkieverse is open to students, early-stage designers, and creators who want to grow through mentorship, collaboration, and project-based learning.",
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
          <span className="text-accent">
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
