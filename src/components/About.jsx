import React from "react";
import { Link } from "react-scroll";

export default function About() {
  return (
    <div name="about" className="w-full h-screen ">
      <div className="max-w-screen-lg mx-auto flex flex-col justify-start items-center h-screen pt-14 ">
        <div className=" flex flex-col justify-center items-center">
          <p className="text-4xl font-bold my-4">ABOUT ME</p>
          <p className="text-gray-800 mb-4 py-4 max-w-lg text-sm leading-7 md:text-base px-2 text-center">
            Here you will find more information about me, what I do, and my
            current skills mostly in terms of programming and technology
          </p>
        </div>
        <div>
          <p className="text-xl text-left mb-7 font-bold px-2">
            Get to know me!
          </p>
          <p className="text-sm text-gray-800 mt-3 px-2 leading-7 text-justify">
            I'm a Frontend Web Developer building the Front-end of Websites and
            Web Applications that leads to the success of the overall product.
            Check out some of my work in the Projects section.
          </p>
          <br />
          <p className="text-sm text-gray-800 px-2 leading-7 text-justify">
            My expertise lies in crafting dynamic, engaging interfaces through
            writing clean and optimized code and utilizing cutting-edge
            development tools and techniques. I am also a team player who
            thrives in collaborating with cross-functional teams to produce
            outstanding web applications.
          </p>
          <br />
          <p className="text-sm text-gray-800 px-2 leading-7 text-justify">
            I'm open to Job opportunities where I can contribute, learn and
            grow. If you have a good opportunity that matches my skills and
            experience then don't hesitate to contact me.
          </p>
          <div className="mx-2">
            <Link
              to="contact"
              smooth
              duration={500}
              className="group hover:scale-105  text-white w-fit px-4 py-2 my-2 flex items-center rounded-md duration-300 bg-gradient-to-r from-cyan-600 to-cyan-800 cursor-pointer"
            >
              CONTACT
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
