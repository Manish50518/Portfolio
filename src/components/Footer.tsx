import { BiLogoGmail } from "react-icons/bi";
import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io5";

function Footer() {
  const media = [
    { logo: <IoLogoGithub />, link: "" },
    { logo: <FaLinkedinIn />, link: "" },
    { logo: <BiLogoGmail />, link: "" },
  ];
  return (
    <footer className="border-t border-default p-4 ">
      <div className="flex justify-between">
        <section>
          <div className="flex gap-4">
            <h5>Manish KM</h5>
            <p>kmmanish5051@gmail.com</p>
          </div>

          <h6>Web designer and fornt-end developer</h6>
        </section>
        <section className="">
          <h5>Media</h5>
          <div className="flex gap-4">
            {media.map((item, id) => (
              <h4 key={id}>{item.logo}</h4>
            ))}
          </div>
        </section>
      </div>
      <p className="text-center mt-4">© Copyright 2025. Made by KM Manish</p>
    </footer>
  );
}

export default Footer;
