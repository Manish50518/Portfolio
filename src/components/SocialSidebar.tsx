"use client";

import { FiGithub, FiPhone } from "react-icons/fi";
import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/Manish50518",
    icon: FiGithub,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/manish-naik-km-6b1892287/",
    icon: FaLinkedinIn,
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/918660674935",
    icon: FaWhatsapp,
  },
  {
    label: "Phone",
    href: "tel:+918660674935",
    icon: FiPhone,
  },
];

export default function SocialSidebar() {
  return (
    <>
     
      <div className="social-sidebar social-sidebar--left">
        <div className="social-sidebar__line" />
        <div className="social-sidebar__icons">
          {socials.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              aria-label={label}
              className="social-sidebar__icon"
            >
              <Icon />
            </a>
          ))}
        </div>

      </div>
    </>
  );
}
