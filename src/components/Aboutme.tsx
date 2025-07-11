"use client";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

function Aboutme() {
  const [readMore, setReadMore] = useState(false);
  const route = useRouter();

  return (
    <div className="mb-16">
      <section className="flex items-center gap-4 justify-center mb-8">
        <h3 className="mb-0 tracking-wider">
          <span className="text-primary">#</span>about-me
        </h3>
        <div className="flex-1 h-1 bg-primary opacity-50"></div>{" "}
        <p
          className="mb-0 flex-1 flex justify-end mt-1  hover:underline cursor-pointer"
          onClick={() => route.push("/aboutme")}
        >
          View all <ArrowRight className="inline-block" />
        </p>
      </section>
      <div className="flex sm:flex-row flex-col items-center gap-2">
        <section className="flex-1 w-full max-w-5xl px-4 sm:px-6 md:px-8">
          <article className="p-1 tracking-wider text-sm sm:text-base leading-relaxed space-y-4">
            <p className="text-lg sm:text-xl font-semibold">
              Hello, I’m Manish!
            </p>
            <p>
              I’m a self-taught Frontend Developer based in Bengaluru, India,
              with hands-on experience in building modern, responsive, and
              scalable web applications. I’m specialize in React.js, Next.js, and
              Tailwind CSS, and love transforming creative ideas into intuitive
              and user-friendly interfaces.
            </p>
            <p>
              Over the past year, I’ve worked with companies like AntStack{" "}
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
              and Infotech Brain’s{" "}
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
                />{" "}
              </Link>{" "}
              , where I contributed to real-world projects using tools like
              Next.js, TypeScript, Tailwind CSS, AWS Amplify, and Spring Boot.
              I’ve developed reusable and accessible UI component libraries,
              optimized frontend performance through efficient rendering
              techniques, and implemented secure authentication systems using
              modern best practices.
            </p>
            {readMore && (
              <p>
                My focus is on building pixel-perfect, responsive UIs with
                clean, maintainable code. Whether it’s building dynamic forms,
                integrating REST APIs, or setting up SSR and CI/CD pipelines
                with Next.js, I’m always eager to push the boundaries of what
                frontend can do.
              </p>
            )}

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button
                onClick={() => setReadMore(!readMore)}
                className="bg-transparent text-foreground border border-primary-subtle rounded-none px-8 w-full sm:w-auto"
              >
                {readMore ? "read less" : "read more"}
              </Button>

              <Link
                href={"/KM_Manish_Resume.pdf"}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <Button className="rounded-none px-8 w-full sm:w-auto">
                  View Resume
                </Button>
              </Link>
            </div>
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
