import { ArrowRight } from "lucide-react";

function Skills() {
  const skills = [
    {
      title: "Languages",
      items: ["TypeScript", "JavaScript", "Java", "Python"],
    },
    {
      title: "Databases",
      items: ["Supabase", "SQLite", "PostgreSQL", "Mongo"],
    },
    {
      title: "Tools",
      items: ["VSCode", "Linux", "Figma", "Git", "GitHub"],
    },
    {
      title: "Other",
      items: ["HTML", "CSS", "SCSS", "REST"],
    },
    {
      title: "Frameworks",
      items: ["React JS", "Next JS"],
    },
  ];

  return (
    <div>
      <section>
        <section className="flex items-center gap-4 justify-center mb-8">
          <h3 className="mb-0">
            <span className="text-primary">#</span>skills
          </h3>
          <div className="flex-1 h-1 bg-purple-400 opacity-50"></div>{" "}
          <p className="mb-0 flex-1 flex justify-end mt-1">
            View all <ArrowRight className="inline-block" />
          </p>
        </section>
      </section>
      <section></section>
    </div>
  );
}

export default Skills;
