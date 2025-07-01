import Image from "next/image";
import { Button } from "./ui/button";

interface Project {
  id: number;
  title: string;
  discription: string;
  img: string;
  stack: string[];
  git: string;
  demo: string;
}
interface ProjectsProps {
  data: Project[];
}

function ProjectsReuseComp({ data }: ProjectsProps) {
  return (
    <section className="grid grid-cols-3 gap-5 ">
      {data.map((item) => (
        <div key={item.id} className="border border-default ">
          {item.img && (
            <Image
              src={item.img}
              alt={item.title}
              width={200}
              height={200}
              className="w-full "
            />
          )}
          <p className="p-2 border-y border-default ">
            {item.stack.join(", ")}
          </p>
          <div className="p-2">
            {" "}
            <h5>{item.title}</h5>
            <p>{item.discription}</p>
            <div className="flex justify-around mb-4">
              <Button className="bg-transparent text-foreground border border-primary-subtle rounded-none px-8 ">
                Code
              </Button>
              <Button className=" rounded-none px-8 ">Demo</Button>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}

export default ProjectsReuseComp;
