import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
export default function SocialLinks() {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={27} />
        </>
      ),
      href: "https://www.linkedin.com/in/vikram-nirwan-858280236/",
      style: "rounded-tr-md",
      title: "Link for Linkedin",
    },
    {
      id: 2,
      child: (
        <>
          GitHub <FaGithub size={27} />
        </>
      ),
      href: "https://github.com/vikramnirwan",
      title: "Link for github",
    },
    {
      id: 3,
      child: (
        <>
          Mail <HiOutlineMail size={27} />
        </>
      ),
      href: "mailto:vnirwan642gmail.com.com",
      title: "Link for gmail",
    },
    {
      id: 4,
      child: (
        <>
          Resume <BsFillPersonLinesFill size={27} />
        </>
      ),
      href: "https//:google.com",
      style: "rounded-br-md",
      download: true,
      title: "Link for resume",
    },
  ];
  return (
    <div className="hidden md:flex flex-col top-[34%] left-0 fixed ">
      <ul>
        {links.map(({ id, child, href, style, download, title }) => (
          <li
            key={id}
            className={
              "flex justify-between items-center w-40 h-10 px-3 bg-white ml-[-110px] hover:ml-[-10px] duration-300 hover:rounded-md" +
              " " +
              style
            }
          >
            <a
              href={href}
              className="flex justify-between items-center w-full font-bold "
              download={download}
              target="_blank"
              rel="noreferrer"
              title={title}
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
