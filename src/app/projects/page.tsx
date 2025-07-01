import ProjectsReuseComp from "@/components/ProjectsReuseComp";

function ProjectsPage() {
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
    {
      id: 4,
      title: "Google keep clone",
      discription: "E commers application using CURD operation",
      img: "bitcoin.svg",
      stack: ["React.js", "Tailwind CSS", "JavaScript", "Router", "Redux"],
      git: "https://github.com/Manish50518/Keep-clone",
      demo: "https://keep-clone-flame.vercel.app/",
    },
    {
      id: 5,
      title: "Uprise-Quiz",
      discription: "E commers application using CURD operation",
      img: "bitcoin.svg",
      stack: [
        "React.js",
        "External CSS",
        "JavaScript",
        "Router",
        "Redux",
        "Reducer",
      ],
      git: "https://github.com/Manish50518/Uprise-Quiz-State",
      demo: "https://uprise-quiz-state.vercel.app/",
    },
  ];

  const smallProject = [
    {
      id: 1,
      title: "Customizable-Tic-Tac-Toe",
      discription: "E commers application using CURD operation",

      stack: ["Vanilla.js", "External CSS"],
      git: "https://github.com/Manish50518/Uprise-Quiz-State",
      demo: "https://uprise-quiz-state.vercel.app/",
    },
  ];

  return (
    <div className="mb-20">
      <section className="mb-16">
        {" "}
        <h2>
          <span className="text-primary">/</span>projects
        </h2>
        <p>List of my projects</p>
      </section>

      <section>
        <h2 className="mb-10">
          <span className="text-primary ">#</span>complete-apps
        </h2>
        <ProjectsReuseComp data={projects} />
      </section>

      <section>
        <h2 className="mb-10">
          <span className="text-primary ">#</span>small-projects
        </h2>
        <ProjectsReuseComp data={smallProject} />
      </section>
    </div>
  );
}

export default ProjectsPage;
