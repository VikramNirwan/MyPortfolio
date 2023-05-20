import React from "react";

export default function Footer() {
  return (
    <div name="footer" className="w-full h-auto bg-black px-4 md:px-20">
      <div className="max-w-screen-lg mx-auto">
        <div
          name="upper"
          className="h-auto md:h-40 flex flex-col md:flex-row justify-between py-8 md:py-16"
        >
          <div className="mb-4 md:mb-0">
            <p className="text-white font-bold">VIKRAM NIRWAN</p>
            <p className="text-white font-light">A Fullstack developer</p>
          </div>
          <div>
            <p className="text-white font-bold">SOCIAL LINKS</p>
            <div>LINKS</div>
          </div>
        </div>
        <hr />
        <div
          name="lower"
          className="h-auto md:h-20 flex justify-center py-4 md:py-8"
        >
          <p className="text-white font-thin">
            © Copyright 2023, Made by <b>Vikram Nirwan</b>
          </p>
        </div>
      </div>
    </div>
  );
}
