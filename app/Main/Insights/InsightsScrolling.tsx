"use client";



import ToolsSection from "./Tools/ToolsSection";
import MyGallery from "./MyGallery";
import BlogSection from "./BlogsSections/BlogSection";
import ExperiencePage from "./Experience";
import CTASection from "../Services/CTASection";

export default function VenturesScrolling() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-12 mt-[-70px] ml-0 md:ml-[-60px] lg:ml-[-130px]">
  
      {/* Heading */}
      <ExperiencePage />
      <BlogSection />
      {/* Tools */}
      <ToolsSection />
      <MyGallery />
      <CTASection />
    </section>
  );
}
