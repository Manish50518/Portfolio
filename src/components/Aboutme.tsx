"use client";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";
import { useState } from "react";

function Aboutme() {
  const [readMore, setReadMore] = useState(false);

  return (
    <div className="mb-16">
      <section className="flex items-center gap-4 justify-center mb-8">
        <h3 className="mb-0 tracking-wider">
          <span className="text-primary">#</span>about-me
        </h3>
        <div className="flex-1 h-1 bg-primary opacity-50"></div>{" "}
        <p className="mb-0 flex-1 flex justify-end mt-1">
          View all <ArrowRight className="inline-block" />
        </p>
      </section>
      <div className="flex gap-2">
        <section className="flex-1">
          <article className="p-1 tracking-widest ">
            <p>Hello, I’m Manish!</p>
            <p>
              {" "}
              I’m a self-taught Frontend Developer based in Bengaluru, India,
              with hands-on experience in building modern, responsive, and
              scalable web applications. I specialize in React.js, Next.js, and
              Tailwind CSS, and love transforming creative ideas into intuitive
              and user-friendly interfaces.
            </p>
            <p>
              Over the past year, I’ve worked with companies like AntStack and
              Infotech Brain’s, where I contributed to real-world projects using
              tools like Next.js, TypeScript, Tailwind CSS, AWS Amplify, and
              Spring Boot. I’ve developed reusable and accessible UI component
              libraries, optimized frontend performance through efficient
              rendering techniques, and implemented secure authentication
              systems using modern best practices.
            </p>{" "}
            <p className={`${!readMore ? "hidden" : ""}`}>
              My focus is on building pixel-perfect, responsive UIs with clean,
              maintainable code. Whether it’s building dynamic forms,
              integrating REST APIs, or setting up SSR and CI/CD pipelines with
              Next.js, I’m always eager to push the boundaries of what frontend
              can do.
            </p>
            <Button
              onClick={() => setReadMore(!readMore)}
              className="bg-transparent text-foreground border border-primary-subtle rounded-none px-8"
            >
              {readMore ? "read less" : "read more"}
            </Button>
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
  );
}

export default Aboutme;
