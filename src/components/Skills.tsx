import { ArrowRight } from "lucide-react";
import Image from "next/image";

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
    <div className="mb-8">
      <section className="flex items-center gap-4 justify-center mb-8">
        <h3 className="mb-0 tracking-wider">
          <span className="text-primary">#</span>skills
        </h3>
        <div className="flex-1 h-1 bg-primary opacity-50"></div>{" "}
        <p className="mb-0 flex-1 flex justify-end mt-1">
          View all <ArrowRight className="inline-block" />
        </p>
      </section>
      <div className="flex ">
        <section className="relative bo flex-1">
          <Image
            src={"dot.svg"}
            alt="dot img"
            width={63}
            height={63}
            className="absolute top-20"
          />
          <Image
            src={"Rectangle 24.svg"}
            alt="rectangle img"
            width={86}
            height={86}
            className="absolute left-50"
          />
          <Image
            src={"logo.svg"}
            alt="logo"
            width={113}
            height={113}
            className="absolute top-50.5 left-3"
          />
          <Image
            src={"dot.svg"}
            alt="dot img"
            width={63}
            height={63}
            className="absolute top-40 left-40"
          />
          <Image
            src={"Rectangle 24.svg"}
            alt="rectangle img"
            width={52}
            height={52}
            className="absolute top-60 left-72"
          />
        </section>
        <section className="flex gap-4 flex-wrap flex-2 justify-end">
          {skills.map((item, id) => (
            <div key={id} className="border border-default w-[178px] ">
              <div className="">
                {" "}
                <h5 className="border-b border-default p-2">{item.title}</h5>
                <p className="p-2">{item.items.join(", ")}</p>
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}

export default Skills;
