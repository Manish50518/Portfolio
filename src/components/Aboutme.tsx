"use client";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import ProfileCard from "./Profile/ProfileCard";

function Aboutme() {
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
          <article className="p-1 tracking-widest">
            <p>Hello, I’m Manish!</p>
            <p>
              {" "}
              I&apos;m a self-taught Frontend Developer based in Bengaluru,
              India, with hands-on experience in building modern, responsive,
              and scalable web applications. I&apos;m specialize in React.js,
              Next.js, and Tailwind CSS, and love transforming creative ideas
              into intuitive and user-friendly interfaces.
            </p>
            <p>
              Over the past year, I&apos;ve worked with companies like M-Swasth{" "}
              <Link
                href={
                  "https://www.linkedin.com/company/m-swasth-solutions-pvt-ltd/posts/?feedView=all"
                }
              >
                <Image
                  src={"/m-swast.png"}
                  alt="m-swasth logo"
                  width={20}
                  height={20}
                  className="inline-block"
                />
              </Link>
              , AntStack{" "}
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
              , where I contributed to real-world projects using tools like
              Next.js, TypeScript, Tailwind CSS, AWS Amplify, and Spring Boot.
              I&apos;ve developed reusable and accessible UI component
              libraries, optimized frontend performance through efficient
              rendering techniques, and implemented secure authentication
              systems using modern best practices.
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
        <section>
          {" "}
          <ProfileCard
            name="KM Manish"
            title="Software Engineer"
            handle="manishcodes"
            status="Online"
            contactText="Contact Me"
            avatarUrl="/image (5).png"
            showUserInfo={true}
            enableTilt={true}
            enableMobileTilt={false}
            onContactClick={() => route.push("/contacts")}
          />
        </section>
      </div>
    </div>
  );
}

export default Aboutme;
