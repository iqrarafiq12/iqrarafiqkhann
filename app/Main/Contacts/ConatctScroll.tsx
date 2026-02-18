"use client";

import CTASection from "../ProjectsSection/CTASection";
import FaqSection from "../ProjectsSection/FaqSection";
import ContactsPage from "./Contact";




export default function ConatctScroll() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-12 mt-[-70px] ml-0 md:ml-[-60px] lg:ml-[-130px]">
  <ContactsPage />
<FaqSection />
<CTASection />
    </section>
  );
}
