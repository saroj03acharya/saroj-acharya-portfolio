import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const Skills = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const skills = [
    { name: "HTML", category: "frontend" },
    { name: "CSS", category: "frontend" },
    { name: "JavaScript", category: "frontend" },
    { name: "jQuery", category: "frontend" },
    { name: "Bootstrap", category: "frontend" },
    { name: "TailwindCSS", category: "frontend" },
    { name: "TypeScript", category: "frontend" },
    { name: "React", category: "frontend" },
    { name: "Vite", category: "frontend" },
    { name: "Figma", category: "design" },
    { name: "C", category: "programming" },
    { name: "C++", category: "programming" },
    { name: "Python", category: "programming" },
    { name: "Django", category: "backend" },
    { name: "Node.js", category: "backend" },
    { name: "Apps Script", category: "automation" },
    { name: "SQL", category: "database" },
    { name: "MySQL", category: "database" },
    { name: "SQLite", category: "database" },
    { name: "PostgreSQL", category: "database" },
  ];

  const categories = [
    { key: "all", label: "All Skills" },
    { key: "frontend", label: "Frontend" },
    { key: "backend", label: "Backend" },
    { key: "database", label: "Database" },
    { key: "programming", label: "Programming" },
    { key: "design", label: "Design" },
    { key: "data", label: "Data" },
    { key: "automation", label: "Automation" },
  ];

  const filteredSkills = activeFilter === "all" 
    ? skills 
    : skills.filter(skill => skill.category === activeFilter);

  return (
    <section className="animate-slide-up">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Skills</h2>
      
      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {categories.map((category) => (
          <Button
            key={category.key}
            variant={activeFilter === category.key ? "default" : "outline"}
            size="sm"
            onClick={() => setActiveFilter(category.key)}
            className="transition-all duration-200"
          >
            {category.label}
          </Button>
        ))}
      </div>

      {/* Skills Grid */}
      <div className="flex flex-wrap justify-center gap-3 max-w-5xl mx-auto">
        {filteredSkills.map((skill, index) => (
          <Badge
            key={skill.name}
            className={`skill-pill animate-scale-in`}
            style={{ animationDelay: `${index * 0.05}s` }}
          >
            {skill.name}
          </Badge>
        ))}
      </div>

      {/* Skills Count */}
      <p className="text-center text-muted-foreground mt-6">
        Showing {filteredSkills.length} of {skills.length} skills
      </p>
    </section>
  );
};

export default Skills;