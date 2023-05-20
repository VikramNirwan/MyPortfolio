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
      href: "https://Linkedin.com",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          GitHub <FaGithub size={27} />
        </>
      ),
      href: "https://github.com/vikramnirwan",
    },
    {
      id: 3,
      child: (
        <>
          Mail <HiOutlineMail size={27} />
        </>
      ),
      href: "mailto:asd@gmail.com",
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
    },
  ];
  return (
    <div className="hidden md:flex flex-col top-[34%] left-0 fixed ">
      <ul>
        {links.map(({ id, child, href, style, download }) => (
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
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
