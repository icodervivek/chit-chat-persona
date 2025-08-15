import React from "react";
import { FaTwitter, FaGithub, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      className=" bg-[#1a1a1a] text-gray-300 px-6 py-10 mt-20 border-t border-gray-800"
     
    >
      {/* Glow effect */}
      <div
        className="absolute -bottom-[100px] -left-[100px] w-[500px] h-[500px] z-[-1] pointer-events-none"
       
      ></div>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold">
            Let&apos;s Chit <span className="text-orange-400">& Chat</span>
          </h2>
          <p className="text-sm text-gray-400">
            Bringing your conversations to life with AI.
          </p>
        </div>

        {/* Links */}
        <div className="flex space-x-6 text-gray-400 text-lg">
          <a
            href="#"
            className="hover:text-orange-400 transition-colors duration-300"
            aria-label="Twitter"
          >
            <FaTwitter />
          </a>
          <a
            href="#"
            className="hover:text-orange-400 transition-colors duration-300"
            aria-label="Github"
          >
            <FaGithub />
          </a>
          <a
            href="#"
            className="hover:text-orange-400 transition-colors duration-300"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn />
          </a>
        </div>
      </div>

      {/* Bottom */}
      <div className="text-center text-gray-500 text-sm mt-6">
        © {new Date().getFullYear()} Let&apos;s Chit & Chat. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
