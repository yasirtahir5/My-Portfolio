import React from "react";
import { FiSend } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";


const ContactUs = () => {
  return (
    <div id="Contactus">
      <div className="container px-8 py-28 mx-auto flex justify-center">
        <div className="text-center">
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
            <b>Contact Us</b>
          </h1>
          <p
            className="text-xl mb-10 text-gray-600"
            style={{ fontFamily: "AvantGard" }}
          >
            We&apos;d love to hear from you! Reach out to us with your
            Questions, Feedback.
          </p>

          <div className="max-w-md mx-auto">
            <form action="https://formspree.io/f/xdorrqor" method="POST">
              <div className="flex gap-4">
                <div className="mb-2 w-1/2">
                  <label
                    htmlFor="name"
                    className="block text-lg text-gray-600"
                    style={{ fontFamily: "AvantGard" }}
                  >
                    <b>Your Name</b>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-gray-300 border border-gray-400 rounded-md py-2 px-3 focus:outline-none
                 focus:border-blue-700 text-gray-900"
                    required
                  />
                </div>

                <div className="mb-2 w-1/1">
                  <label
                    htmlFor="email"
                    className="block text-lg text-gray-600"
                    style={{ fontFamily: "AvantGard" }}
                  >
                    <b>Your Email</b>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-gray-300 border border-gray-400 rounded-md py-2 px-3 focus:outline-none
                 focus:border-blue-700 text-gray-900"
                    required
                  />
                </div>
              </div>

              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-lg text-gray-600"
                  style={{ fontFamily: "AvantGard" }}
                >
                  <b>Your Message</b>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  className="w-full bg-gray-300 border border-gray-400 rounded-md py-2 px-3 focus:outline-none
                 focus:border-blue-700 text-gray-900 resize-none"
                  required
                ></textarea>
              </div>

              <button 
                className="mt-4 opacity-40 group-hover:translate-x-1 bg-black p-4 text-white hover:text-white
                hover:bg-gradient-to-r from-blue-950 via-blue-900 to-blue-600 hover:opacity-80
                flex py-1 items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 
                transition cursor-pointer borderBlack mx-auto"
              >
                Send Message
                <FiSend style={{ fontFamily: "AvantGard", fontSize: "20px" }} 
                />
              </button>
            </form>
          </div>
          <span className="inline-flex sm:ml-auto sm:mt-6 mt-4 justify-center sm:justify-start">
            <Link
              target="_blank"
              href={"https://www.instagram.com/yasirt_5/"}
              className="ml-3 text-gray-500"
            >
              <FaInstagram className="text-3xl hover:text-pink-600" />
            </Link>
            <Link
              target="_blank"
              href={
                "https://pk.linkedin.com/in/muhammad-yasir-bin-tahir-84900b28a"
              }
              className="ml-3 text-gray-500"
            >
              <FaLinkedin className="text-3xl hover:text-blue-900" />
            </Link>
            <Link
              target="_blank"
              href={"https://wa.me/+923070299901?"}
              className="ml-3 text-gray-500"
            >
              <FaWhatsapp className="text-3xl hover:text-green-700" />
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
