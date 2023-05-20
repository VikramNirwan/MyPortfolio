import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import github from "../assets/github.png";
// import graphql from "../assets/graphql.png";
import javascript from "../assets/javascript.png";
import nextjs from "../assets/nextjs.png";
import node from "../assets/node.png";
import reactImage from "../assets/react.png";
import tailwind from "../assets/tailwind.png";

export default function Experience() {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-300",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-300",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-300",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-cyan-300",
    },
    {
      id: 5,
      src: nextjs,
      title: "Next JS",
      style: "shadow-white",
    },
    {
      id: 6,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-300",
    },
    {
      id: 7,
      src: node,
      title: "NodeJs",
      style: "shadow-green-300",
    },
    {
      id: 8,
      src: github,
      title: "GitHub",
      style: "shadow-gray-300",
    },
  ];
  return (
    <div className="h-screen w-full bg-gray-200">
      <div className="max-w-screen-lg mx-auto flex flex-col justify-center items-start h-screen ">
        <p className="text-2xl text-left font-bold">My Skills</p>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img key={id} src={src} alt="" className="w-10 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
