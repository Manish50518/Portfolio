import * as SiIcons from "react-icons/si";
function TechSatck() {
  const logos = [
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

  return (
    <div>
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
    </div>
  );
}

export default TechSatck;
