import Link from "next/link";
import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="">
<div className="w-full h-[3px]  bg-gradient-to-r from-blue-950 via-blue-900 to-blue-600 flex items-center mb-6 rounded-md"></div>

      <footer className="mb-12 px-4 text-center text-gray-500">
        <small className="mb-2 block text-xs">
          &copy; 2030 Yasir Tahir. All rights reserved.
        </small>
        <p className="text-xs mb-2">
          <span className="font-semibold">About this website:</span> Built with
          React & Next.js, TypeScript, Tailwind CSS, Framer Motion, React Email
          & Resend, Vercel hosting.
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
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
      </footer>
    </div>
  );
};

export default Footer;
