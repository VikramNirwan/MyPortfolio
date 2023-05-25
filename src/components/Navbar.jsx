import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import myImg from "../assets/port/myImg.jpeg";
import NavLinks from "./NavLinks";
import { Link } from "react-scroll";

export default function Navbar() {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      name: "HOME",
      link: "home",
    },
    {
      id: 2,
      name: "ABOUT",
      link: "about",
    },
    {
      id: 3,
      name: "SKILLS",
      link: "skills",
    },
    {
      id: 4,
      name: "PROJECTS",
      link: "projects",
    },
    {
      id: 5,
      name: "CONTACT",
      link: "contact",
    },
  ];
  return (
    <div className="h-15 md:h-14 w-full text-gray-800 fixed bg-white shadow-md shadow-slate-200">
      <div className="flex justify-between items-center mx-auto md:px-2 ">
        <div className="flex items-center justify-center">
          <div className="p-2">
            <Link to="home" smooth duration={500} className="cursor-pointer">
              <img
                className="h-12 md:h-11 border-1 border-solid border-gray-800 rounded-full hover:scale-105 duration-200 "
                src={myImg}
                alt="my pic"
              />
            </Link>
          </div>
          <div>
            <Link to="home" smooth duration={500} className="cursor-pointer">
              <h1 className="text-xl md:text-xl md:font-bold hover:scale-105 duration-200 ">
                VIKRAM NIRWAN
              </h1>
            </Link>
          </div>
        </div>

        <div>
          <ul className="hidden md:flex">
            {links.map(({ id, link, name }) => (
              <NavLinks
                key={id}
                link={link}
                location={name}
                className="px-4 cursor-pointer font-medium hover:scale-105 duration-200 "
              />
            ))}
          </ul>
        </div>

        <div
          onClick={() => setNav(!nav)}
          className="cursor-pointer pr-4 z-10 text-gray-800
        md:hidden"
        >
          {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>

        {nav && (
          <div>
            <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-white to-gray-300 text-gray-800">
              {links.map(({ id, link, name }) => (
                <NavLinks
                  key={id}
                  link={link}
                  location={name}
                  className="px-4 cursor-pointer capitalize py-6 text-4xl"
                  onClick={() => setNav(!nav)}
                />
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
