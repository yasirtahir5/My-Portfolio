import React from "react";
import { MdOutlineFileDownload } from "react-icons/md";

const About = () => {
  return (
    <div id="About">
      <div className="container px-8 py-16 mx-auto flex justify-center">
        <div className="text-center mt-14">
          <h1
            className="text-5xl font-medium mb-4"
            style={{
              fontFamily: "AvantGard",
              background:
                "linear-gradient(45deg,#b9c5ff, #04156D , #092197, #b9c5ff, #b9c5ff)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            <b>About Me</b>
          </h1>
          <div className="max-w-2xl text-center">
            <p
              className="text-2xl leading-relaxed text-gray-600"
              style={{ fontFamily: "AvantGard" }}
            >
              I&apos;m a professional Web Developer well-versed in the latest
              cutting-edge frameworks and technologies. My expertise lies in
              JavaScript frameworks, particularly Front-end development and
              crafting responsive web applications.
            </p>
            <p
              className="text-2xl leading-relaxed mt-4 text-gray-600 "
              style={{ fontFamily: "AvantGard" }}
            >
              I&apos;m dedicated to leveraging my skills to advance a
              company&apos;s mission. I excel at both independent projects,
              demonstrating effective self-management, and thriving within
              collaborative team environments. Let&apos;s connect and drive
              innovation together!
            </p>
          </div>
          <div className="flex justify-center">
            <a href="/assets/cv2.pdf" target="_blank" rel="noopener noreferrer">
              <button
                className="mt-8 opacity-40 group-hover:translate-x-1 bg-black p-4 text-white hover:text-white
    hover:bg-gradient-to-r from-blue-950 via-blue-900 to-blue-600 hover:opacity-80 flex py-1 items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] 
    active:scale-105 transition cursor-pointer borderBlack"
              >
                Download CV
                <MdOutlineFileDownload
                  style={{ fontFamily: "AvantGard", fontSize: "24px" }}
                />
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
