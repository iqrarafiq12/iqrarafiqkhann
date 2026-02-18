"use client";

import ContactsPage from "../Contacts/Contact";
import FaqSection from "./FaqSection";
import ServicesSection from "./ServicesSection";
import { ServicesData } from "./ServicesData";

export default function ServicesScrolling() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-12 mt-[-70px] ml-0 md:ml-[-60px] lg:ml-[-130px] space-y-10">

      {/* Services Cards */}
      {ServicesData.map((service, index) => (
        <ServicesSection
          key={index}
          title={service.title}
          description={service.description}
          link={service.link}
        />
      ))}

      <FaqSection />
      <ContactsPage />
    </section>
  );
}
