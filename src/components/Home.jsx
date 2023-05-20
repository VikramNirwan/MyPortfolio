import React from "react";
// import myImg1 from "../assets/port/myImg1.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
export default function Home() {
  return (
    <div
      name="HOME"
      className="h-screen w-full bg-gradient-to-b from-white to-gray-200"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col justify-center items-center h-screen ">
        <h2 className="text-4xl text-center md:text-6xl md:px-8 font-bold px-2 ">
          HEY,I'M VIKRAM NIRWAN
        </h2>
        <p className="text-gray-800 py-4 max-w-md text-sm md:text-base px-2 text-center">
          A Frontend focused Web Developer building the Frontend of Websites and
          Web Applications that leads to the success of the overall product
        </p>
        <div>
          <button className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-600 to-cyan-800 cursor-pointer">
            PROJECTS
            <span className="group-hover:rotate-90 duration-300">
              <MdOutlineKeyboardArrowRight className="ml-1" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
