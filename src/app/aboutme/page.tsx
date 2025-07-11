import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import * as SiIcons from "react-icons/si";

function AboutMe() {
  const experiences = [
    {
      company: "AntStack",
      role: "Frontend Developer Intern",
      location: "Bengaluru, India",
      duration: "Feb 2025 - May 2025",
      logo: "/Symbol_dark.svg",
      link: "https://www.linkedin.com/company/antstackio/posts/?feedView=all",
      responsibilities: [
        "Developed and maintained scalable web applications using Next.js and TypeScript.",
        "Created dynamic, reusable form components using React Hook Form with schema validation via Zod.",
        "Built advanced UI features and data tables using TanStack Table and TanStack Form.",
        "Designed and styled components using ShadCN/UI with Tailwind CSS, aligned with design system and accessibility standards.",
        "Integrated AWS Amplify Authentication for email/password and social login (Google OAuth).",
        "Worked in an Agile team environment, actively participating in sprint planning and managing Jira tickets.",
        "Collaborated with UI/UX designers and backend developers to implement new features and optimize app performance.",
      ],
    },
    {
      company: "Infotech Brain's",
      role: "React Developer Intern",
      location: "Pune, India",
      duration: "Dec 2024 - Feb 2025",
      logo: "/infotech_logo.svg",
      link: "https://www.linkedin.com/company/infotechbrains/posts/?feedView=all",
      responsibilities: [
        "Contributed to building responsive web applications using React.js and Next.js.",
        "Developed reusable UI components and interactive pages for smooth navigation.",
        "Integrated RESTful APIs and implemented server-side rendering for performance optimization.",
        "Managed state using Context API and improved rendering with React Hooks.",
        "Participated in daily stand-ups, sprint planning, and code reviews as part of Agile workflows.",
      ],
    },
  ];

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
        "Redux",
        "React Router",
        "Tailwind CSS",
        "ShadCN/UI",
        "Redux Toolkit",
        "React Query",
        "Bootstrap",
        "Spring Boot",
        "Jest",
      ],
    },
    {
      title: "Databases",
      items: ["Supabase", "MongoDB", "MySQL", "PostgreSQL"],
    },
    {
      title: "Tools & Platforms",
      items: [
        "VS Code",
        "Git",
        "GitHub",
        "Figma",
        "Jira",
        "AWS Amplify",
        "AWS Cognito",
        "Postman",
        "NPM",
        "Prettier",
        "Eclipse IDE",
      ],
    },
    {
      title: "Practices & Methodologies",
      items: [
        "Agile",
        "RESTful APIs",
        "CI/CD",
        "Server-Side Rendering",
        "Client-Side Rendering",
        "Unit Testing",
        "Code Formatting",
      ],
    },
  ];

  const logos = [
    // Languages
    { icon: "SiJavascript", color: "#F7DF1E" },
    { icon: "SiTypescript", color: "#3178C6" },
    { icon: "SiJava", color: "#007396" },
    { icon: "SiPython", color: "#3776AB" },
    { icon: "SiMysql", color: "#4479A1" },
    { icon: "SiHtml5", color: "#E34F26" },
    { icon: "SiCss3", color: "#1572B6" },
    { icon: "SiReact", color: "#61DAFB" },
    { icon: "SiNextdotjs", color: "#000000" },
    { icon: "SiRedux", color: "#764ABC" },
    { icon: "SiReactrouter", color: "#CA4245" },
    { icon: "SiTailwindcss", color: "#06B6D4" },
    { icon: "SiRadixui", color: "#000000" },
    { icon: "SiReactquery", color: "#FF4154" },
    { icon: "SiBootstrap", color: "#7952B3" },
    { icon: "SiSpring", color: "#6DB33F" },
    { icon: "SiJest", color: "#C21325" },
    { icon: "SiSupabase", color: "#3ECF8E" },
    { icon: "SiMongodb", color: "#47A248" },
    { icon: "SiPostgresql", color: "#4169E1" },
    { icon: "SiVisualstudiocode", color: "#007ACC" },
    { icon: "SiGit", color: "#F05032" },
    { icon: "SiGithub", color: "#181717" },
    { icon: "SiFigma", color: "#F24E1E" },
    { icon: "SiJira", color: "#0052CC" },
    { icon: "SiAwsamplify", color: "#FF9900" },
    { icon: "SiAmazonaws", color: "#232F3E" },
    { icon: "SiPostman", color: "#FF6C37" },
    { icon: "SiNpm", color: "#CB3837" },
    { icon: "SiPrettier", color: "#F7B93E" },
    { icon: "SiEclipseide", color: "#2C2255" },
    { icon: "SiAzuredevops", color: "#0078D7" },
    { icon: "SiApollographql", color: "#311C87" },
    { icon: "SiGithubactions", color: "#2088FF" },
    { icon: "SiTestinglibrary", color: "#E33332" },
  ];

  const funFacts = [
    { text: "I love building apps with React and Tailwind" },
    { text: "I use Supabase like a pro for databases" },
    { text: "I have deployed projects with CI/CD on Vercel" },
    { text: "I prefer TypeScript over JavaScript for safety" },
    { text: "I enjoy styling with ShadCN and Radix UI" },
    { text: "I use Postman to test all my APIs" },
    { text: "I solved 200+ DSA problems across LeetCode & HackerRank" },
    { text: "I completed a full-stack Java course at KodNest" },
    { text: "I use VS Code with Prettier and Git every day" },
    { text: "I’m comfortable with both client and server rendering" },
  ];

  return (
    <div>
      <section>
        <div>
          <div className="mb-16">
            <section className="flex flex-col items-start gap-4  mb-8">
              <h2 className="">
                <span className="text-primary">/</span>about-me
              </h2>
              <p>Who am i ?</p>
            </section>
            <div className="flex md:flex-row flex-col items-center gap-2">
              <section className="flex-1 ">
                <article className="p-1 tracking-widest ">
                  <p>Hello, I’m Manish!</p>
                  <p>
                    {" "}
                    I&apos;m a self-taught Frontend Developer based in
                    Bengaluru, India, with hands-on experience in building
                    modern, responsive, and scalable web applications. I&apos;m
                    specialize in React.js, Next.js, and Tailwind CSS, and love
                    transforming creative ideas into intuitive and user-friendly
                    interfaces.
                  </p>
                  <p>
                    Over the past year, I&apos;ve worked with companies like
                    AntStack{" "}
                    <Link
                      href={
                        "https://www.linkedin.com/company/antstackio/posts/?feedView=all"
                      }
                    >
                      <Image
                        src={"/Symbol_dark.svg"}
                        alt="ant img"
                        width={20}
                        height={20}
                        className="inline-block"
                      />
                    </Link>{" "}
                    and Infotech Brain&apos;s{" "}
                    <Link
                      href={
                        "https://www.linkedin.com/company/infotechbrains/posts/?feedView=all"
                      }
                    >
                      <Image
                        src={"/infotech_logo.svg"}
                        alt="ant img"
                        width={20}
                        height={20}
                        className="inline-block"
                      />
                    </Link>{" "}
                    , where I contributed to real-world projects using tools
                    like Next.js, TypeScript, Tailwind CSS, AWS Amplify, and
                    Spring Boot. I&apos;ve developed reusable and accessible UI
                    component libraries, optimized frontend performance through
                    efficient rendering techniques, and implemented secure
                    authentication systems using modern best practices.
                  </p>
                  <Link
                    href={"./KM_Manish_Resume.pdf"}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="rounded-none px-8">View Resume</Button>
                  </Link>
                </article>
              </section>
              <section className="flex-1">
                {" "}
                <Image
                  width={700}
                  height={700}
                  src={"/defaultImg.svg"}
                  alt="default image"
                />
              </section>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <section className="flex   gap-4  mb-8">
          <h2 className="mb-0 tracking-wider">
            <span className="text-primary">#</span>exprience
          </h2>
        </section>

        {experiences.map((item, id) => (
          <section key={id} className="mb-16">
            {" "}
            <div className="flex items-center gap-5 mb-3">
              {" "}
              <h3 className="relative inline-block  cursor-pointer group py-2">
                <Link href={item.link} className="cursor-pointer">
                  <span className="text-primary">@</span>
                  {item.company}
                </Link>

                <span className="absolute bottom-0 left-0 w-0 h-[4px] bg-primary transition-all duration-300 ease-in-out group-hover:w-full "></span>
              </h3>{" "}
              <Link href={item.link} className="cursor-pointer">
                <Image src={item.logo} alt="ant img" width={50} height={50} />
              </Link>
            </div>
            <h4>{item.role} </h4>
            <p>
              {item.location} | {item.duration}
            </p>
            <ul className="list-disc list-inside pl-5 space-y-1 ">
              {item.responsibilities.map((char, id) => (
                <li
                  key={id}
                  className=" mb-1 tracking-wider text-secondary-foreground"
                >
                  {char}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </section>

      <section className="mb-16">
        <section className="flex   gap-4  mb-8">
          <h2 className="mb-0 tracking-wider">
            <span className="text-primary">#</span>skills
          </h2>
        </section>

        <section className="flex flex-col md:flex-row flex-wrap   gap-4 mb-16">
          {skills.map((item, id) => (
            <div
              key={id}
              className="border border-default w-full sm:w-[240px] md:w-[200px] h-auto"
            >
              <div>
                <h5 className="border-b border-default p-2 font-semibold">
                  {item.title}
                </h5>
                <p className="p-2 text-sm">{item.items.join(", ")}</p>
              </div>
            </div>
          ))}
        </section>

        <section>
          <div className="flex flex-wrap gap-4 justify-start">
            {logos.map(({ icon, color }, index) => {
              const IconComponent = SiIcons[icon as keyof typeof SiIcons];
              return IconComponent ? (
                <IconComponent key={index} color={color} size={36} />
              ) : null;
            })}
          </div>
        </section>
      </section>
      <section className="mb-16">
        <section className="flex   gap-4  mb-8">
          <h2 className="mb-0 tracking-wider">
            <span className="text-primary">#</span>my-fun-facts
          </h2>
        </section>

        <section className="flex relative">
          <div className="flex gap-4 md:flex-row flex-wrap flex-col flex-2">
            {funFacts.map((item, id) => (
              <div key={id} className="border border-default p-3 ">
                <p className="text-md mb-0">{item.text}</p>
              </div>
            ))}
          </div>
          <div className="hidden lg:block">
            <Image
              src={"logo.svg"}
              alt="logo"
              width={113}
              height={113}
              className="absolute top-10 right-10 "
            />
            <Image
              src={"Rectangle 24.svg"}
              alt="rectangle img"
              width={52}
              height={52}
              className="absolute top-70 right-9"
            />
          </div>
        </section>
      </section>
    </div>
  );
}

export default AboutMe;
