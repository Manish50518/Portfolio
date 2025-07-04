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
    <div className="mb-16  w-full max-w-6xl mx-auto">
      <section className="flex flex-col items-start gap-2 mb-8">
        <h3 className="tracking-wider text-lg sm:text-xl">
          <span className="text-primary">/</span>contacts
        </h3>
        <p className="text-sm sm:text-base">Who am I?</p>
      </section>

      {/* Content Section */}
      <section className="flex flex-col md:flex-row gap-8 mb-10">
        {/* Left Text */}
        <div className="flex-1">
          <p className="leading-relaxed text-sm sm:text-base">
            I&#39;m a front-end developer with real-world experience in
            startups, currently open to full-time roles. If you&#39;re hiring,
            collaborating, or just want to connect — don&#39;t hesitate to reach
            out. I&#39;m always excited to work on meaningful projects and solve
            real-world problems with code.
          </p>
        </div>

        {/* Right Cards */}
        <section className="flex-1 flex flex-col sm:flex-row gap-6 items-start">
          {/* Message me here */}
          <div className="p-4 border border-default w-full sm:w-1/2">
            <h5 className="mb-4 font-medium">Message me here</h5>
            <ul className="flex flex-col gap-3">
              {message.map((item, id) => (
                <li key={id} className="flex gap-3 text-secondary-foreground">
                  <Link
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex gap-2 items-center"
                  >
                    <h4>{item.logo}</h4>
                    <p className="mb-0 text-sm">{item.type}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Let’s connect */}
          <div className="p-4 border border-default w-full sm:w-1/2">
            <h5 className="mb-4 font-medium">Let’s connect!</h5>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {connect.map((item, id) => (
                <li key={id} className="flex gap-3 text-secondary-foreground">
                  <Link
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex gap-2 items-center"
                  >
                    <h4>{item.logo}</h4>
                    <p className="mb-0 text-sm">{item.type}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </section>

      {/* All Media Section */}
      <section className="flex flex-col items-start gap-4">
        <h3 className="tracking-wider text-lg sm:text-xl">
          <span className="text-primary">#</span>all-media
        </h3>
        <div className="flex gap-4 text-xl">
          <Link
            href={"https://www.linkedin.com/in/manish-naik-km-6b1892287/"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h4 className="cursor-pointer">
              <FaLinkedinIn />
            </h4>
          </Link>
          <Link
            href={"https://github.com/Manish50518"}
            target="_blank"
            rel="noopener noreferrer"
          >
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
