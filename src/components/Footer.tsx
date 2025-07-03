import Link from "next/link";
import { BiLogoGmail } from "react-icons/bi";
import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io5";

function Footer() {
  const media = [
    { logo: <IoLogoGithub />, link: "https://github.com/Manish50518" },
    {
      logo: <FaLinkedinIn />,
      link: "https://www.linkedin.com/in/manish-naik-km-6b1892287/",
    },
    {
      logo: <BiLogoGmail />,
      link: "https://mail.google.com/mail/?view=cm&fs=1&to=kmmanish5051@gmail.com",
    },
  ];
  return (
    <footer className="border-t border-default p-4  w-full">
      <div className="flex md:flex-row flex-col justify-between">
        <section>
          <div className="flex gap-4">
            <h5>Manish KM</h5>
            <p className="mb-3">kmmanish5051@gmail.com</p>
          </div>
          <h6>Web designer and fornt-end developer</h6>
        </section>
        <section className="">
          <h5 className="mb-3">Media</h5>
          <div className="flex gap-4">
            {media.map((item, id) => (
              <Link
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                key={id}
              >
                <h4>{item.logo}</h4>
              </Link>
            ))}
          </div>
        </section>
      </div>
      <p className="text-center mt-4">© Copyright 2025. Made by KM Manish</p>
    </footer>
  );
}

export default Footer;
