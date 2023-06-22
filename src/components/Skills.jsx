import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import github from "../assets/github.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import tailwind from "../assets/tailwind.png";
import Node from "../assets/node.png";
import Express from "../assets/Express.png";
import MongoDB from "../assets/mongodb.png";

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
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-300",
    },
    {
      id: 6,
      src: github,
      title: "GitHub",
      style: "shadow-gray-300",
    },
    {
      id: 7,
      src: Node,
      title: "Node Js",
      style: "shadow-green-300",
    },
    {
      id: 8,
      src: MongoDB,
      title: "MongoDB",
      style: "shadow-green-300",
    },
    {
      id: 9,
      src: Express,
      title: "Express",
      style: "shadow-gray-300",
    },
  ];
  return (
    <div name="skills" className="h-screen w-full ">
      <div className="max-w-screen-lg mx-auto flex flex-col h-screen pt-16">
        <p className="text-4xl text-center px-2 font-bold">SKILLS</p>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              className={`shadow-md hover:scale-105 duration-300 py-2 rounded-lg ${style}`}
              key={id}
            >
              <img key={id} src={src} alt="" className="w-10 mx-auto" />
              <p className="mt-4 text-gray-800">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
