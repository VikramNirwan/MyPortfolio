import React from "react";
// import { installNode } from "../assets/port/installNode.jpg";
export default function Projects() {
  return (
    <div name="projects" className="bg-gray-200 w-full h-screen">
      <div className="max-w-screen-lg mx-auto flex flex-col justify-center items-center h-screen ">
        <p className="text-4xl font-bold text-center">PROJECTS</p>
        <p className="text-xl mt-10 text-center">
          Here you will find some of the personal and clients projects that I
          created with each project containing its own case study
        </p>

        <div>
          <div>
            <div>
              <img src="" alt="Software Screenshot" loading="lazy" />
            </div>
            <div>
              <h3>Dopefolio</h3>
              <p>
                Dopefolio is a successful Open-Source project that I created
                which have been featured on some of the biggest tech sites like
                CSS-Tricks, Hostinger, etc &amp; used by thousands of developers
                globally
              </p>
              <a href="/" target="_blank">
                Case Study
              </a>
            </div>
          </div>
          <div>
            <div>
              <img src="" alt="Software Screenshot" loading="lazy" />
            </div>
            <div>
              <h3>Wilsonport</h3>
              <p>
                Wilsonport is a multiservice logistics and transport company and
                I created their website from scratch using the frontend tools I
                know.
              </p>
              <a href="/" target="_blank">
                Case Study
              </a>
            </div>
          </div>
          <div>
            <div>
              <img src="" alt="Software Screenshot" loading="lazy" />
            </div>
            <div>
              <h3>Boreal Coffee Clone</h3>
              <p>
                I re-created the frontend of Boreal Coffee's official web app
                because I got attracted to their beautiful UI. It was a great
                experience for me to build the entire frontend.
              </p>
              <a href="/project-3" target="_blank">
                Case Study
              </a>
            </div>
          </div>
          <div>
            <div>
              <img src="" alt="Software Screenshot" loading="lazy" />
            </div>
            <div>
              <h3>Crown Template</h3>
              <p>
                Crown is a web template that I created targeting the restaurant
                and food industry which anyone can use to present their business
                online.
              </p>
              <a href="/project-4" target="_blank">
                Case Study
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
