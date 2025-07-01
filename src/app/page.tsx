// import { Sparkles } from "lucide-react";
// import { ThemeToggle } from "./ThemeProvider/ThemeToggle";
import Intro from "@/components/Intro";
import NavigationBar from "@/components/NavigationBar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <div>
      <NavigationBar />
      <Intro />
      <Projects />
      <Skills />
    </div>
  );
}
