import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { BiLogoGmail } from "react-icons/bi";
import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io5";
import { MdPhoneEnabled } from "react-icons/md";

interface ConnectItem {
  type: string;
  logo: JSX.Element;
  link: string;
}

function Contact() {
  const connect: ConnectItem[] = [
    {
      type: "LinkedIn",
      logo: <FaLinkedinIn />,
      link: "https://www.linkedin.com/in/manish-naik-km-6b1892287/",
    },
    {
      type: "GitHub",
      logo: <IoLogoGithub />,
      link: "https://github.com/Manish50518",
    },
    {
      type: "Gmail",
      logo: <BiLogoGmail />,
      link: "https://mail.google.com/mail/?view=cm&fs=1&to=kmmanish5051@gmail.com",
    },
    {
      type: "WhatsApp",
      logo: <FaWhatsapp />,
      link: "https://wa.me/+8660674935",
    },
    {
      type: "Phone",
      logo: <MdPhoneEnabled />,
      link: "tel:+8660674935",
    },
  ];

  return (
    <div className="mb-16">
      <section className="flex items-center gap-4 justify-center mb-8">
        <h3 className="mb-0 tracking-wider">
          <span className="text-primary">#</span>contacts
        </h3>
        <div className="flex-1 h-1 bg-primary opacity-50"></div>
        <p className="mb-0 flex-1 flex justify-end mt-1">
          View all <ArrowRight className="inline-block" />
        </p>
      </section>

      <div className="flex">
        <section className="flex-1">
          <p className="tracking-wider">
            I&apos;m currently open to both full-time roles and freelance
            opportunities in frontend development. If you&apos;re hiring or have
            a project that needs a passionate developer skilled in React,
            Next.js, and Tailwind CSS, feel free to reach out. I&apos;d love to
            connect and collaborate!
          </p>
        </section>
        <section className="flex-1">
          <div className="flex justify-end">
            <div className="p-4 border border-default inline-block">
              <h5 className="mb-6">Let’s connect!</h5>
              <ul className="grid grid-cols-2 gap-3">
                {connect.map((item, id) => (
                  <li
                    key={id}
                    className="list-none flex gap-3 cursor-pointer text-secondary-foreground"
                  >
                    <Link
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex gap-3 items-center"
                    >
                      {item.logo}
                      {item.type}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Contact;
