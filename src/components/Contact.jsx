import React from "react";

export default function Contact() {
  return (
    <div name="contact" className="w-full h-screen md:h-auto">
      <div className="max-w-screen-lg mx-auto flex flex-col justify-start items-center h-screen md:h-auto pt-14 md:pt-12">
        <div className="flex flex-col justify-center items-center">
          <p className="text-4xl px-2 my-4 w-screen text-center font-bold inline ">
            CONTACT
          </p>
          <p className="text-gray-800 py-4 leading-7 text-sm md:text-base px-2 text-center mb-4">
            Feel free to Contact me by submitting the form below and I will get
            back to you as soon as possible
          </p>
        </div>

        <div className="flex justify-center md:w-2/3 items-center">
          <form
            action="https://getform.io/f/d6293631-b576-4a38-886a-1c23c00b18cb"
            method="POST"
            className="flex flex-col w-full rounded-lg shadow-md bg-white p-6"
          >
            {/* <label className="font-bold" for="name">
              Name
            </label> */}
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 mb-6 border-2 rounded-md bg-gray-200 focus:outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="p-2 mb-6 border-2 rounded-md bg-gray-200 focus:outline-none"
            />
            <textarea
              name=""
              id=""
              cols="30"
              rows="8"
              placeholder="Enter yor message"
              className="p-2 border-2 rounded-md bg-gray-200 focus:outline-none"
            ></textarea>
            <button className="group text-white w-full px-6 py-3 mt-6 flex items-center justify-center rounded-md bg-gradient-to-r from-cyan-600 to-cyan-800 cursor-pointer hover:scale-105 duration-300">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
