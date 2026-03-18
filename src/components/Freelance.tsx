"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { BiLinkExternal } from "react-icons/bi";

function Freelance() {
  const projects = [
    {
      id: 3,
      title: "Scuba Spirit",
      discription:
        "A modern scuba diving and tourism platform built with Next.js, featuring seamless booking inquiries, smooth scrolling experience, and secure authentication. Integrated real-time email communication and dynamic data handling for an engaging user experience.",
      stack: [
        "Next.js",
        "Tailwind CSS",
        "TypeScript",
        "ShadCN UI",
        "Resend API",
        "Firebase Auth",
        "Firestore",
        "Lenis (Smooth Scrolling)",
      ],
      img: "/scubaspirit.png",
      demo: "https://www.scubaspirit.com/",
    },

    {
      id: 2,
      title: "KVK Beach Residency",
      discription:
        "A premium hotel booking and tourism platform built with Next.js, Tailwind CSS, and ShadCN UI, featuring real-time email integration via Resend.",
      stack: [
        "Next.js",
        "Tailwind CSS",
        "TypeScript",
        "ShadCN UI",
        "Resend API",
      ],
      img: "/kvk.png",
      demo: "https://www.kvkbeachresidency.com/",
    },
    {
      id: 1,
      title: "Scuba Destiny",
      discription:
        "Responsive scuba diving and web travel application built with Next.js, Tailwind CSS, and ShadCN UI components.",
      stack: ["Next.js", "Tailwind CSS", "TypeScript", "ShadCN UI"],
      img: "/image.png",
      demo: "https://www.scubadestiny.in/",
    },
  ];

  return (
    <div className="mt-8 mb-8">
      <section className="flex items-center gap-4 justify-center mb-8">
        <h3 className="mb-0 tracking-wider">
          <span className="text-primary">#</span>projects completed
        </h3>
        <div className="flex-1 h-1 bg-primary opacity-50"></div>{" "}
        {/* <p
          className="mb-0 flex-1 flex justify-end mt-1 hover:underline cursor-pointer"
          onClick={() => router.push("/projects")}
        >
          View all <ArrowRight className="inline-block" />
        </p> */}
      </section>

      <section className="grid grid-cols-2  gap-4 md:gap-6 p-4 md:p-6">
        {projects.map((item) => (
          <div
            key={item.id}
            className="border border-default  overflow-hidden shadow-sm hover:shadow-md transition-shadow"
          >
            {item.img && (
              <div className="relative w-full h-48 sm:h-56 md:h-64">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
            )}
            <p className="p-3 text-sm  border-y border-default">
              {item.stack.join(", ")}
            </p>
            <div className="p-4">
              <h5 className="text-lg font-semibold mb-2">{item.title}</h5>
              <p className="text-sm  mb-4">{item.discription}</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                {item.demo && (
                  <Link href={item.demo}>
                    <Button className="w-full sm:w-auto px-6 py-2 rounded-none">
                      Demo
                      <BiLinkExternal />
                    </Button>
                  </Link>
                )}
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Freelance;
