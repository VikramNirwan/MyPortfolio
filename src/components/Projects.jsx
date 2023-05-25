import React from "react";
import cryptoDemo from "../assets/port/cryptoDemo.png";
import TodoApp from "../assets/port/TodoApp.png";
import WeatherApp from "../assets/port/WeatherApp.png";

export default function Projects() {
  const work = [
    {
      id: 1,
      src: cryptoDemo,
      alt: `cryptoImage`,
      name: `CRYPTO DESHBOARD`,
      description: `The cryptocurrency dashboard app is a powerful tool designed to
      provide users with real-time information and insights about
      various cryptocurrencies.`,
      code: `https://github.com/VikramNirwan/Crypto_Dashboard`,
      demo: `https://vn-crypto-dashboard-app.netlify.app/`,
    },
    {
      id: 2,
      src: TodoApp,
      alt: `TodoImg`,
      name: `TODO APP`,
      description: `A todo app is a simple yet powerful tool designed to help individuals organize and manage their tasks effectively.`,
      code: `https://github.com/VikramNirwan/Todo_App`,
      demo: `https://vn-todo-app.netlify.app/`,
    },
    {
      id: 3,
      src: WeatherApp,
      alt: `WeatherImg`,
      name: `WEATHER APP`,
      description: `With an intuitive design and user-friendly interface, WeatherApp provides you with real-time weather information for your current location and allows you to easily search for the weather in specific locations.`,
      code: `https://github.com/VikramNirwan/WeatherApp`,
      demo: `https://vn-weather-app.netlify.app/`,
    },
  ];

  return (
    <div name="projects" className="w-full h-auto">
      <div className="max-w-screen-lg mx-auto flex flex-col justify-center items-center h-auto pt-12">
        <p className="text-4xl font-bold px-2 my-4 text-center">PROJECTS</p>
        <p className="text-gray-800 py-4 px-2 leading-7 text-sm text-center">
          Here you will find some of the personal projects that I created with
          each project containing its source code and live demo
        </p>

        {work.map(({ id, src, alt, name, description, code, demo }) => (
          <div
            className="flex flex-col md:flex-row md:justify-center px-2 my-5 rounded-lg bg-white shadow-lg"
            key={id}
          >
            <div className="my-5 md:w-1/2 md:px-5 rounded-md">
              <img
                className="rounded-md shadow-xl hover:scale-105 duration-300 "
                key={id}
                src={src}
                alt={alt}
              />
            </div>
            <div className="flex flex-col mt-5 mb-2 rounded-md py-auto md:w-1/3 md:px-5">
              <p className="text-xl text-center md:text-left font-bold mb-3">
                {name}
              </p>
              <p className="text-sm text-gray-800 text-center md:text-justify mb-3">
                {description}
              </p>
              <div className="flex justify-between ">
                <button className="group text-white w-fit px-6 py-3 flex items-center rounded-md hover:scale-105 duration-300 bg-gradient-to-r from-cyan-600 to-cyan-800 cursor-pointer ">
                  <a href={code} target="_blank" rel="noreferrer">
                    Code
                  </a>
                </button>
                <button className="group text-white w-fit px-6 py-3 flex items-center rounded-md hover:scale-105 duration-300 bg-gradient-to-r from-cyan-600 to-cyan-800 cursor-pointer">
                  <a href={demo} target="_blank" rel="noreferrer">
                    Visit Project
                  </a>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
