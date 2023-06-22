import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
export default function Home() {
  return (
    <div name="home" className="h-screen w-full">
      <div className="max-w-screen-lg mx-auto flex flex-col justify-center items-center h-screen ">
        <h2 className="text-4xl text-center mb-5 px-2 md:text-6xl md:px-8 font-bold ">
          HEY,I'M VIKRAM NIRWAN
        </h2>
        <p className="text-gray-800 leading-7 py-4 px-2 mb-5 max-w-md text-sm md:text-base text-center">
          A Full Stack Web Developer building the Frontend and Backend of
          Websites and Web Applications that leads to the success of the overall
          product.
        </p>
        <div>
          <Link
            to="projects"
            smooth
            duration={500}
            className="group hover:scale-105  text-white w-fit px-6 py-3 my-2 flex items-center rounded-md duration-300 bg-gradient-to-r from-cyan-600 to-cyan-800 cursor-pointer"
          >
            PROJECTS
            <span className="group-hover:rotate-90 duration-300">
              <MdOutlineKeyboardArrowRight className="ml-1" />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
