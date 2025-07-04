import ProjectsReuseComp from "@/components/ProjectsReuseComp";

function ProjectsPage() {
  const projects = [
    {
      id: 1,
      title: "Task Manager",
      discription:
        "A responsive full-stack task management app with complete CRUD functionality.",
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
      discription:
        "A responsive e-commerce app with a dynamic cart and seamless shopping experience.",
      img: "6.svg",
      stack: ["React.js", "Tailwind CSS", "JavaScript", "SupaBase", "Redux"],
      git: "https://github.com/Manish50518/E-com",
      demo: "https://e-com-nine-khaki.vercel.app/",
    },
    {
      id: 4,
      title: "Google keep clone",
      discription:
        "It's clone of Google Keep where you and add,archive and delete the task",
      img: "2.svg",
      stack: ["React.js", "Tailwind CSS", "JavaScript", "Router", "Redux"],
      git: "https://github.com/Manish50518/Keep-clone",
      demo: "https://keep-clone-flame.vercel.app/",
    },
    {
      id: 5,
      title: "Fast React Pizza",
      discription:
        "Fast React Pizza is a modern pizza ordering application that allows users to customize their pizza orders",
      img: "4.svg",
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
      discription:
        "A React-based quiz app to evaluate users, with mock API data and structured state management.",
      img: "3.svg",
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
      discription:
        "Customizable Tic-Tac-Toe is a game where users can customize the number of rows and columns.",
      stack: ["Vanilla.js", "External CSS"],
      git: "https://github.com/github.com/Manish50518/Customizable-Tic-Tac-Toe/Zysk-Technologies",
      demo: "https://zysk-https://customizable-tic-tac-toe.vercel.app/-psi.vercel.app/",
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
        "Bankist is a React app for user registration, login, and basic banking operations, built with JavaScript and CSS.",
      stack: ["JavaScript", "React.js", "External CSS"],
      git: "https://github.com/Manish50518/Bankist",
      demo: "https://bankist-theta-two.vercel.app/",
    },

    {
      id: 4,
      title: "Pomodoro Timer",
      discription:
        "Pomodoro Timer is a web app that helps users boost productivity by working in focused intervals with short breaks.",
      stack: ["Vanilla.js", "External CSS"],
      git: "https://github.com/Manish50518/pomodoro-timer",
      demo: "https://pomodoro-timer-delta-roan.vercel.app/",
    },
    {
      id: 5,
      title: "Practice-HTML",
      discription:
        "A beginner-level project where I practiced the fundamentals of HTML and CSS during the initial phase of my frontend learning.",
      stack: ["HTML", "CSS"],
      git: "https://github.com/Manish50518/Practice-HTML",
    },
    {
      id: 6,
      title: "Write To-Do",
      discription:
        "Write To-Do is a simple task manager that lets users add, edit, and delete tasks to stay organized.",
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
