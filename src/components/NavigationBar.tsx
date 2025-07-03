import { ThemeToggle } from "@/app/ThemeProvider/ThemeToggle";
import Link from "next/link";

function NavigationBar() {
  return (
    <header className="flex justify-around container items-center mb-16">
      <section>
        <h4>Logo</h4>
      </section>

      <section className="flex justify-between gap-8">
        <Link href={"/"}>
          <h6 className="relative inline-block pb-1 cursor-pointer group">
            <span className="text-primary font-s">#</span>Home
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary transition-all duration-300 ease-in-out group-hover:w-full"></span>
          </h6>
        </Link>
        <Link href={"/projects"}>
          <h6 className="relative inline-block pb-1 cursor-pointer group">
            <span className="text-primary font-s">#</span>Works{" "}
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary transition-all duration-300 ease-in-out group-hover:w-full"></span>
          </h6>
        </Link>
        <Link href={"/aboutme"}>
          <h6 className="relative inline-block pb-1 cursor-pointer group">
            <span className="text-primary font-s">#</span>About-me{" "}
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary transition-all duration-300 ease-in-out group-hover:w-full"></span>
          </h6>
        </Link>
        <Link href={"/contacts"}>
          <h6 className="relative inline-block pb-1 cursor-pointer group">
            <span className="text-primary font-s">#</span>Contacts{" "}
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary transition-all duration-300 ease-in-out group-hover:w-full"></span>
          </h6>
        </Link>
      </section>
      <section>
        <ThemeToggle />
      </section>
    </header>
  );
}

export default NavigationBar;
