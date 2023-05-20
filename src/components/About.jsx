import React from "react";

export default function About() {
  return (
    <div name="about" className="w-full h-screen bg-gray-200">
      <div className="max-w-screen-lg mx-auto flex flex-col justify-center items-center h-screen ">
        <div className="pb-4 flex flex-col justify-center items-center">
          <p className="text-4xl font-bold ">ABOUT ME</p>
          <p className="text-gray-800 py-4 max-w-lg text-sm md:text-base px-2 text-center">
            Here you will find more information about me, what I do, and my
            current skills mostly in terms of programming and technology
          </p>
        </div>
        <div>
          <p className="text-2xl text-left font-bold">Get to know me!</p>
          <p className="text-xl mt-10">
            I'm a Frontend Web Developer building the Front-end of Websites and
            Web Applications that leads to the success of the overall product.
            Check out some of my work in the Projects section.
          </p>
          <br />
          <p className="text-xl">
            My expertise lies in crafting dynamic, engaging interfaces through
            writing clean and optimized code and utilizing cutting-edge
            development tools and techniques. I am also a team player who
            thrives in collaborating with cross-functional teams to produce
            outstanding web applications.
          </p>
          <br />
          <p className="text-xl">
            I'm open to Job opportunities where I can contribute, learn and
            grow. If you have a good opportunity that matches my skills and
            experience then don't hesitate to contact me.
          </p>
        </div>
      </div>
    </div>
  );
}
