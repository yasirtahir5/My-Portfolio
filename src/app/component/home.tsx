"use client";

import React from "react";
import Image from "next/image";
import Typewriter from "typewriter-effect";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

const Home = () => {
  return (
    <div id="Home">
      <div className="container px-8 flex py-12 mx-auto md:flex-row flex-col items-center">
        <div
          className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left 
        mb-16 md:mb-0 items-center text-center"
        >
          <div className="text-blue-950 title-font sm:text-5xl text-3xl mb-5 font-medium"
          style={{ fontFamily: "AvantGard" }}>
            <b>
              <b>Hello World ..!</b>
            </b>
          </div>
          <h1
            className="title-font sm:text-5xl text-3xl mb-12 font-medium"
            style={{
              fontFamily: "AvantGard",
              background: "linear-gradient(45deg ,#001892,#b9c5ff,#001892 )",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            <Typewriter
              options={{
                strings: ["I Am Web Developer"],
                autoStart: true,
                loop: true,
              }}
            />
            <div className="w-[150px] h-[3px] bg-gradient-to-r from-blue-950 via-blue-900 to-blue-600 
            mt-2 rounded-lg"></div>
          </h1>

          <div
            className="title-font sm:text-2xl text-1xl mb-12 font-small text-gray-600"
            style={{ fontFamily: "AvantGard" }}
          >
            Looking for assistance in creating websites that are exceptionally
            fast, secure, and engaging? Get in touch with FREE for expert
            consultation! Our team of top-rated web developers is here to help.
          </div>

          <div className="flex justify-center">
            <Link href={"#Contactus"}>
              <button
                className="opacity-40 group-hover:translate-x-1 bg-gray-950 p-4 text-gray-300
                 hover:text-white hover:bg-gradient-to-r from-blue-950 via-blue-900 to-blue-600 hover:opacity-80 flex py-1 items-center gap-2 rounded-full focus:scale-[1.15] 
                 hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlacl "
              >
                Contact Me Here
                <BsArrowRight
                  style={{
                    fontFamily: "AvantGard",
                    marginLeft: "0.5rem",
                  }}
                />
              </button>
            </Link>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mt-14">
          <Image
            className="object-cover object-center rounded"
            alt="home"
            src={require("../../../public/assets/Screenshot_2023-11-30-13-39-49-02_1c337646f29875672b5a61192b9010f9_2-removebg-preview.png")}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
