// components/ServicesSection.tsx

import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

interface ServiceCardProps {
  title: string;
  description: string;
  link: string;
}

export default function ServicesSection({
  title,
  description,
  link,
}: ServiceCardProps) {
  return (
    <div className="relative
            rounded-3xl
            bg-secondary
            border border-white/5
            backdrop-blur-xl
            p-8 sm:p-12
            overflow-hidden">
      
      {/* CTA Button */}
      <Link
        href={link}
        className="absolute right-6 top-6 flex h-12 w-12 items-center justify-center rounded-full bg-primary transition hover:bg-red-600"
      >
        <FiArrowUpRight className="text-white" size={20} />
      </Link>


      {/* Service Title */}
      <h3 className="mt-6 text-lg font-semibold text-white">
        {title}
      </h3>

      {/* Description */}
      <p className="mt-4 max-w-2xl text-neutral-400 leading-relaxed">
        {description}
      </p>
    </div>
  );
}
