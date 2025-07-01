import { ArrowRight } from "lucide-react";
import { BiLogoGmail } from "react-icons/bi";
import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

import { IoLogoGithub } from "react-icons/io5";
import { MdPhoneEnabled } from "react-icons/md";

function Contact() {
  const connect = [
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
    { type: "Gmail", logo: <BiLogoGmail /> },
    { type: "WhatsApp", logo: <FaWhatsapp /> },
    { type: "Phone", logo: <MdPhoneEnabled /> },
  ];
  return (
    <div className="mb-16">
      <section className="flex items-center gap-4 justify-center mb-8">
        <h3 className="mb-0 tracking-wider">
          <span className="text-primary">#</span>contacts
        </h3>
        <div className="flex-1 h-1 bg-primary opacity-50"></div>{" "}
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
            Next.js, and Tailwind CSS, feel free to reach out I&apos;d love to
            connect and and collaborate!
          </p>
        </section>
        <section className="flex-1">
          <div className="flex justify-end">
            <div className="p-4  border border-default inline-block">
              <h5 className="mb-6 ">Let’s connect!</h5>
              <ul className="grid grid-cols-2 gap-3">
                {connect.map((item, id) => (
                  <li
                    key={id}
                    className="list-none flex gap-3 cursor-pointer text-secondary-foreground"
                  >
                    <h4>{item.logo}</h4>
                    {item.type}
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
