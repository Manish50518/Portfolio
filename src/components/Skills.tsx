"use client";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

function Skills() {
  const skills = [
    {
      title: "Languages",
      items: [
        "JavaScript",
        "TypeScript",
        "Java",
        "Python",
        "SQL",
        "HTML",
        "CSS",
      ],
    },
    {
      title: "Frameworks & Libraries",
      items: [
        "React.js",
        "Next.js",
        "Tailwind CSS",
        "ShadCN/UI",
        "React Query",
        "Jest",
      ],
    },
    {
      title: "Tools & Platforms",
      items: [
        "VS Code",
        "GitHub",
        "Figma",
        "Jira",
        "AWS Amplify",
        "AWS Cognito",
        "Postman",
        "NPM",
        "Prettier",
      ],
    },
    {
      title: "Databases",
      items: ["Supabase", "MongoDB", "MySQL", "PostgreSQL"],
    },
    {
      title: "Practices & Methodologies",
      items: [
        "Agile",
        "RESTful APIs",
        "Server-Side Rendering",
        "Client-Side Rendering",
      ],
    },
  ];

  const router = useRouter();

  return (
    <div className="mb-8 px-4 sm:px-6 md:px-8">
      <section className="flex items-center gap-4 justify-center mb-8">
        <h3 className="mb-0 tracking-wider">
          <span className="text-primary">#</span>skills
        </h3>
        <div className="flex-1 h-1 bg-primary opacity-50"></div>{" "}
        <p
          className="mb-0 flex-1 flex justify-end mt-1  hover:underline cursor-pointer"
          onClick={() => router.push("/aboutme")}
        >
          View all <ArrowRight className="inline-block" />
        </p>
      </section>
      <div className="flex flex-col md:flex-row gap-6">
        <section className="relative flex-1 hidden md:block">
          <Image
            src="/dot.svg"
            alt="dot img"
            width={48}
            height={48}
            className="absolute top-0 left-4 w-12 h-12"
          />
          <Image
            src="/Rectangle 24.svg"
            alt="rectangle img"
            width={64}
            height={64}
            className="absolute top-25 left-30 w-16 h-16"
          />
          <Image
            src="/logo.svg"
            alt="logo"
            width={80}
            height={80}
            className="absolute top-55 left-8 w-20 h-20"
          />
          <Image
            src="/dot.svg"
            alt="dot img"
            width={48}
            height={48}
            className="absolute top-64 right-0 w-12 h-12"
          />
          <Image
            src="/Rectangle 24.svg"
            alt="rectangle img"
            width={40}
            height={40}
            className="absolute top-90 left-32 w-10 h-10"
          />
        </section>
        <section className="flex-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 ">
          {skills.map((item, id) => (
            <div key={id} className="border border-default">
              <h5 className="border-b border-default p-3 text-base sm:text-lg font-medium">
                {item.title}
              </h5>
              <p className="p-3 text-sm sm:text-base ">
                {item.items.join(", ")}
              </p>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}

export default Skills;
