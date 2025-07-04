"use client";
import { ArrowRight } from "lucide-react";
import ProjectsReuseComp from "./ProjectsReuseComp";
import { useRouter } from "next/navigation";

function Projects() {
  const projects = [
    {
      id: 1,
      title: "Task Manager",
      discription: "Fullstack task managemet using CURD operation",
      stack: ["Next.js", "Tailwind CSS", "JavaScript", "Spring Boot", "My SQL"],
      img: "5.svg",
      git: "https://github.com/Manish50518/Task-Manager-Fullstack",
      demo: "https://task-manager-fullstack-phi.vercel.app/hero",
    },
    {
      id: 2,
      title: "RBAC",
      discription: "Role Base Access Controle using CURD operation",
      img: "1.svg",
      stack: ["React.js", "Material UI", "CSS", "JavaScript", "Redux"],
      git: "https://github.com/Manish50518/RBAC",
      demo: "https://rbac-gamma.vercel.app/",
    },
    {
      id: 3,
      title: "E-COM",
      discription: "E commers application using CURD operation",
      img: "6.svg",
      stack: ["React.js", "Tailwind CSS", "JavaScript", "SupaBase", "Redux"],
      git: "https://github.com/Manish50518/E-com",
      demo: "https://e-com-nine-khaki.vercel.app/",
    },
  ];

  const router = useRouter();

  return (
    <div className="mt-8 mb-8">
      <section className="flex items-center gap-4 justify-center mb-8">
        <h3 className="mb-0 tracking-wider">
          <span className="text-primary">#</span>projects
        </h3>
        <div className="flex-1 h-1 bg-primary opacity-50"></div>{" "}
        <p
          className="mb-0 flex-1 flex justify-end mt-1 hover:underline cursor-pointer"
          onClick={() => router.push("/projects")}
        >
          View all <ArrowRight className="inline-block" />
        </p>
      </section>

      <ProjectsReuseComp data={projects} />
    </div>
  );
}

export default Projects;
