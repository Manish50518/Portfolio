import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import { BiLinkExternal } from "react-icons/bi";

interface Project {
  id: number;
  title: string;
  discription: string;
  img?: string;
  stack: string[];
  git: string;
  demo?: string;
}
interface ProjectsProps {
  data: Project[];
}

function ProjectsReuseComp({ data }: ProjectsProps) {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 p-4 md:p-6">
      {data.map((item) => (
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
              <Link href={item.git}>
                <Button
                  variant="outline"
                  className="w-full sm:w-auto px-6 py-2 text-foreground border-primary-subtle rounded-none"
                >
                  Code <BiLinkExternal />
                </Button>
              </Link>
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
  );
}

export default ProjectsReuseComp;
