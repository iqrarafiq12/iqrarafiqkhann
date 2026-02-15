import { IconType } from "react-icons";

interface ToolCardProps {
  name: string;
  role: string;
  icon: IconType;
}

export default function ToolCard({ name, role, icon: Icon }: ToolCardProps) {
  return (
    <div
      className="group flex items-center gap-5 p-6 rounded-2xl
      bg-[var(--brand-dark-1)]
      border border-white/5
      hover:border-[var(--brand-accent)]/40
      transition-all duration-300"
    >
      {/* Icon */}
      <div
        className="w-14 h-14 flex items-center justify-center rounded-xl
        bg-[var(--brand-dark-3)]
        text-[var(--brand-primary)]
        group-hover:bg-[var(--brand-accent)]
        group-hover:text-black
        transition"
      >
        <Icon size={26} />
      </div>

      {/* Text */}
      <div>
        <h3 className="text-lg sm:text-xl font-semibold text-[var(--foreground)]">
          {name}
        </h3>
        <p className="text-sm text-[var(--brand-dark-2)]">
          {role}
        </p>
      </div>
    </div>
  );
}
