import ToolCard from "./ToolCard";
import { tools } from "./ToolsData";

export default function ToolsSection() {
  // Group tools by category
  const groupedTools = tools.reduce((acc, tool) => {
    if (!acc[tool.category]) {
      acc[tool.category] = [];
    }
    acc[tool.category].push(tool);
    return acc;
  }, {} as Record<string, typeof tools>);

  return (
    <section
      className="py-20 px-4 sm:px-6 lg:px-12 mt-[-50px]
      ml-0 md:ml-[-60px] lg:ml-[-50px]"
    >
      {/* Heading */}
      <div className="max-w-7xl mx-auto mb-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground leading-tight">
          Tools & Technologies<br />
          Behind Exceptional{" "}
          <span className="text-accent">
            Results
          </span>
        </h2>
      </div>

      {/* Categories */}
      <div className="max-w-7xl mx-auto space-y-16">
        {Object.entries(groupedTools).map(([category, categoryTools]) => (
          <div key={category}>
            {/* Category Title */}
            <h3 className="text-xl sm:text-2xl font-semibold text-accent mb-6">
              {category}
            </h3>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {categoryTools.map((tool, index) => (
                <ToolCard
                  key={index}
                  name={tool.name}
                  role={tool.role}
                  icon={tool.icon}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
