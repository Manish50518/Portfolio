import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";

function Projects() {
  const projects = [
    {
      id: 1,
      title: "Task Manager",
      discription: "Fullstack task managemet using CURD operation",
      stack: ["Next.js", "Tailwind CSS", "JavaScript", "Spring Boot", "My SQL"],
      img: "bitcoin.svg",
      git: "https://github.com/Manish50518/Task-Manager-Fullstack",
      demo: "https://task-manager-fullstack-phi.vercel.app/hero",
    },
    {
      id: 2,
      title: "RBAC",
      discription: "Role Base Access Controle using CURD operation",
      img: "bitcoin.svg",
      stack: ["React.js", "Material UI", "CSS", "JavaScript", "Redux"],
      git: "https://github.com/Manish50518/RBAC",
      demo: "https://rbac-gamma.vercel.app/",
    },
    {
      id: 3,
      title: "E-COM",
      discription: "E commers application using CURD operation",
      img: "bitcoin.svg",
      stack: ["React.js", "Tailwind CSS", "JavaScript", "SupaBase", "Redux"],
      git: "https://github.com/Manish50518/E-com",
      demo: "https://e-com-nine-khaki.vercel.app/",
    },
  ];

  return (
    <div className="mt-8 mb-8">
      <section className="flex items-center gap-4 justify-center mb-8">
        <h3 className="mb-0">
          <span className="text-primary">#</span>projects
        </h3>
        <div className="flex-1 h-1 bg-purple-400 opacity-50"></div>{" "}
        <p className="mb-0 flex-1 flex justify-end mt-1">
          View all <ArrowRight className="inline-block" />
        </p>
      </section>

      <section className="grid grid-cols-3 gap-5 ">
        {projects.map((item) => (
          <div key={item.id} className="border border-default ">
            <Image
              src={item.img}
              alt={item.title}
              width={200}
              height={200}
              className="w-full "
            />
            <p className="p-2 border-y border-default ">
              {item.stack.join(", ")}
            </p>
            <div className="p-2">
              {" "}
              <h5>{item.title}</h5>
              <p>{item.discription}</p>
              <div className="flex justify-around mb-4">
                <Button className="bg-transparent text-foreground border border-primary-subtle rounded-none px-8 ">
                  Code
                </Button>
                <Button className=" rounded-none px-8 ">Demo</Button>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Projects;
