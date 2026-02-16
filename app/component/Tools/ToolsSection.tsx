import ToolCard from "./ToolCard";
import { tools } from "./ToolsData";

export default function ToolsSection() {
  return (
    <section
      className="py-20 px-4 sm:px-6 lg:px-12  mt-[-120px]
      ml-0 md:ml-[-60px] lg:ml-[-50px] "
    >

      {/* Heading */}
      <div className="max-w-7xl mx-auto mb-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground leading-tight">
          Top Tools for<br />
          Exceptional{" "}
          <span className="text-accent">
            Results
          </span>
        </h2>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {tools.map((tool, index) => (
          <ToolCard
            key={index}
            name={tool.name}
            role={tool.role}
            icon={tool.icon}
          />
        ))}
      </div>

    </section>
  );
}
