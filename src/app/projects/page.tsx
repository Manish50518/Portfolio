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
      title: "Fast React Pizza",
      discription:
        "Fast React Pizza is a modern pizza ordering application that allows users to customize their pizza orders",
      img: "bitcoin.svg",
      stack: [
        "React.js",
        "Tailwind CSS",
        "JavaScript",
        "Router",
        "Redux",
        "Reducer",
      ],
      git: "https://github.com/Manish50518/fast-react-pizza",
      demo: "https://fast-react-pizza-vert.vercel.app/",
    },
    {
      id: 6,
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
      git: "https://github.com/Manish50518/Zysk-Technologies",
      demo: "https://zysk-technologies-psi.vercel.app/",
    },
    {
      id: 2,
      title: "Zysk-Technologies",
      discription:
        "React-based UI project developed as part of the assignment for Zysk Technologies Private Limited.",
      stack: ["JavaScript", "Tailwind CSS", "React.js"],
      git: "https://github.com/Manish50518/Zysk-Technologies",
      demo: "https://zysk-technologies-psi.vercel.app/",
    },
    {
      id: 3,
      title: "Bankist",
      discription:
        "Dojo Block is a web application that allows users to seamlessly add, delete, and edit blog posts.",
      stack: ["JavaScript", "React.js", "External CSS"],
      git: "https://github.com/Manish50518/Bankist",
      demo: "https://bankist-theta-two.vercel.app/",
    },

    {
      id: 4,
      title: "Pomodoro Timer",
      discription: "E commers application using CURD operation",
      stack: ["Vanilla.js", "External CSS"],
      git: "https://github.com/Manish50518/pomodoro-timer",
      demo: "https://pomodoro-timer-delta-roan.vercel.app/",
    },
    {
      id: 5,
      title: "Practice-HTML",
      discription: "E commers application using CURD operation",
      stack: ["HTML", "CSS"],
      git: "https://github.com/Manish50518/Uprise-Quiz-State",
      demo: "https://uprise-quiz-state.vercel.app/",
    },
    {
      id: 6,
      title: "Write To-Do",
      discription: "TO-DO application",
      stack: ["Vanilla.js", "External CSS"],
      git: "https://github.com/Manish50518/write-todo",
      demo: "https://write-todo-seven.vercel.app/",
    },
    {
      id: 7,
      title: "Guess-my-number",
      discription:
        "It is small game application where you can guess the random number by give the number as input.",
      stack: ["Vanilla.js", "External CSS"],
      git: "https://github.com/Manish50518/Guess-my-number",
      demo: "",
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

      <section className="mb-16">
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
