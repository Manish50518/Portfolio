"use client";

import { ThemeToggle } from "@/app/ThemeProvider/ThemeToggle";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

function NavigationBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Works", href: "/projects" },
    { label: "About-me", href: "/aboutme" },
    { label: "Contacts", href: "/contacts" },
  ];

  return (
    <header className="w-full px-4 py-4  mb-6">
      <div className="container mx-auto flex justify-between items-center relative">
        <div>
          <Link href={"/"} className="hover:cursor-pointer">
            <Image src={"./mport.svg"} alt="logo" width={50} height={50} />
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map(({ label, href }, i) => (
            <Link key={i} href={href}>
              <h6 className="relative inline-block pb-1 cursor-pointer group">
                <span className="text-primary font-s">#</span>
                {label}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary transition-all duration-300 ease-in-out group-hover:w-full"></span>
              </h6>
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <ThemeToggle />
          <button
            className="md:hidden"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden absolute left-0 bg-background w-full ">
          {navLinks.map(({ label, href }, i) => (
            <Link key={i} href={href} onClick={() => setIsOpen(false)}>
              <h6 className="block  pb-8 text-center cursor-pointer group ">
                <span className="text-primary font-s">#</span>
                {label}
              </h6>
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}

export default NavigationBar;
