// import { Sparkles } from "lucide-react";
// import { ThemeToggle } from "./ThemeProvider/ThemeToggle";
import Aboutme from "@/components/Aboutme";
import Contact from "@/components/Contact";
import Intro from "@/components/Intro";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <div>
      <Intro />
      <Projects />
      <Skills />
      <Aboutme />
      <Contact />
    </div>
  );
}
