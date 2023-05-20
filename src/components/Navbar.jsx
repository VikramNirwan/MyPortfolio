import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import img4 from "../assets/port/img4.png";
import { Link } from "react-scroll";
export default function Navbar() {
  const [nav, setNav] = useState(false);
  const links = [
    {
      id: 1,
      link: "Home",
    },
    {
      id: 2,
      link: "About",
    },
    {
      id: 3,
      link: "Projects",
    },
    {
      id: 4,
      link: "contact",
    },
  ];
  return (
    <div className="flex justify-between items-center px-4 w-full h-15 text-gray-800 fixed bg-white shadow-md shadow-slate-200">
      <div className="flex items-center justify-center">
        <div className="p-2 ">
          <img
            className="border-2 border-solid border-gray-800 rounded-full"
            src={img4}
            alt="my pic"
          />
        </div>
        <div>
          <h1 className="text-3xl ">VIKRAM NIRWAN</h1>
        </div>
      </div>
      <div>
        <ul className="hidden md:flex">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer font-medium hover:scale-105 duration-200 "
            >
              <Link to={link} smooth duration={500}>
                {link}
              </Link>
            </li>
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
            {links.map(({ id, link }) => (
              <li key={id} className="px-4 cursor-pointer py-6 text-4xl">
                <Link
                  onClick={() => {
                    setNav(!nav);
                  }}
                  to={link}
                  smooth
                  duration={500}
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
