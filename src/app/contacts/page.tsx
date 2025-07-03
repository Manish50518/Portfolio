import Link from "next/link";
import { BiLogoGmail } from "react-icons/bi";
import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

import { IoLogoGithub } from "react-icons/io5";
import { MdPhoneEnabled } from "react-icons/md";
function Contacts() {
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
    { type: "Phone", logo: <MdPhoneEnabled />, link: "tel:+8660674935" },
  ];

  const message = [
    { type: "Gmail", logo: <BiLogoGmail />, link: "kmmanish5051@gmil.com" },
    { type: "WhatsApp", logo: <FaWhatsapp />, link: "8660674935" },
  ];
  return (
    <div className="mb-16">
      <section className="flex flex-col items-start gap-4  mb-8">
        <h3 className="mb-0 tracking-wider">
          <span className="text-primary">/</span>contacts
        </h3>
        <p>Who am i ?</p>
      </section>

      <section className="flex ">
        <div className="flex-1">
          <p>
            I'm a front-end developer with real-world experience in startups,
            currently open to full-time roles. If you're hiring, collaborating,
            or just want to connect — don't hesitate to reach out. I'm always
            excited to work on meaningful projects and solve real-world problems
            with code.
          </p>
        </div>
        <section className="flex-1 flex gap-4 items-start">
          <div className="flex justify-end">
            <div className="p-3  border border-default inline-block ">
              <h5 className="mb-6 ">Message me here</h5>
              <ul className="flex flex-col gap-3">
                {message.map((item, id) => (
                  <li
                    key={id}
                    className="list-none flex gap-3 cursor-pointer text-secondary-foreground"
                  >
                    <Link
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex gap-3"
                    >
                      <h4>{item.logo}</h4>
                      <p className="mb-0">{item.type}</p>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex justify-end">
            <div className="p-4  border border-default inline-block">
              <h5 className="mb-6 ">Let’s connect!</h5>
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
                      className="flex gap-3"
                    >
                      <h4>{item.logo}</h4>
                      <p className="mb-0">{item.type}</p>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </section>

      <section>
        {" "}
        <section className="flex flex-col items-start gap-4  mb-4">
          <h3 className="mb-0 tracking-wider">
            <span className="text-primary">#</span>all-media
          </h3>
        </section>
        <div className="flex gap-4 ">
          <Link href={"https://www.linkedin.com/in/manish-naik-km-6b1892287/"}>
            <h4 className="cursor-pointer">
              <FaLinkedinIn />
            </h4>
          </Link>
          <Link href={"https://github.com/Manish50518"}>
            <h4 className="cursor-pointer">
              <IoLogoGithub />
            </h4>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Contacts;
