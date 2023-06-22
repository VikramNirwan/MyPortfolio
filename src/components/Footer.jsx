import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

export default function Footer() {
  return (
    <div name="footer" className="w-full h-1/3 bg-black ">
      <div className="max-w-screen-lg mx-auto my-auto flex flex-col justify-center">
        <div
          name="upper"
          className="h-auto md:h-40 flex flex-col md:flex-row justify-between py-8 md:py-16"
        >
          <div className="mb-4 md:mb-0">
            <p className="text-white font-bold px-2">VIKRAM NIRWAN</p>
            <p className="text-white font-light px-2">
              Full Stack web developer
            </p>
          </div>
          <div>
            <p className="text-white font-bold px-2">SOCIAL LINKS</p>
            <div className="flex text-white">
              <div className="mx-2 cursor-pointer hover:scale-105 duration-300">
                <a
                  href="https://github.com/vikramnirwan"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGithub size={27} />
                </a>
              </div>
              <div className="mx-2 cursor-pointer hover:scale-105 duration-300">
                <a
                  href="https://www.linkedin.com/in/vikram-nirwan-858280236/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaLinkedin size={27} />
                </a>
              </div>
              <div className="mx-2 cursor-pointer hover:scale-105 duration-300">
                <a
                  href="mailto:vnirwan642gmail.com.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <HiOutlineMail size={27} />
                </a>
              </div>
              <div className="mx-2 cursor-pointer hover:scale-105 duration-300">
                <a href="google.com" target="_blank" rel="noreferrer">
                  <BsFillPersonLinesFill size={27} />
                </a>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div
          name="lower"
          className="h-auto md:h-20 flex justify-center items-center py-4 md:py-8"
        >
          <p className="text-white font-thin text-center">
            © Copyright 2023, Made by <b>Vikram Nirwan</b>
          </p>
        </div>
      </div>
    </div>
  );
}
