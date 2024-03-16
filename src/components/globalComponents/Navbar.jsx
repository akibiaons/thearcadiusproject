import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import css from "../../styles/App.css";

export default function Navbar() {
  // State hooks and navigate
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav
      className={`${
        isOpen
          ? "absolute py-2 px-2 left-10 bg-[#141415] mt-6 w-[80%] rounded-t-xl lg:mx-auto lg:container lg:left-0 lg:right-0 lg:w-[65%]"
          : "absolute py-2 px-2 left-10 bg-[#141415] mt-6 w-[80%] rounded-xl lg:mx-auto lg:container lg:left-0 lg:right-0 lg:w-[65%]"
      }`}
    >
      <div className="flex justify-between items-center lg:w-[100%]">
        <div className="text-md font-mono text-[#bfbfbf]">
          <p>Arthur Fernandez</p>
        </div>
        <div
          className={`hamburger-menu ${isOpen ? "open" : "lg:hidden"}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="line line1"></span>
          <span className="line line2"></span>
        </div>
        {/* Navigation Links */}
        <div
          className={`${
            isOpen ? "flex items-center z-50" : "hidden lg:flex "
          } lg:items-center lg:flex-row flex-col absolute lg:relative top-full lg:top-auto left-0 w-full lg:w-auto bg-[#141415]/85 lg:bg-transparent text-[#bfbfbf] font-mono pt-4 lg:pt-0 pb-6 lg:pb-0`}
        >
          <a
            href="#"
            className="mx-4 my-2 hover:bg-gray-700 lg:hover:bg-transparent lg:text-[#bfbfbf] hover:text-white"
          >
            About me
          </a>
          <a
            href="#"
            className="mx-4 my-2 hover:bg-gray-700 lg:hover:bg-transparent lg:text-[#bfbfbf] hover:text-white"
          >
            Case Studies
          </a>
          <a
            href="#"
            className="mx-4 my-2 hover:bg-gray-700 lg:hover:bg-transparent lg:text-[#bfbfbf] hover:text-white"
          >
            Articles
          </a>
          <a
            href="#"
            className="mx-4 my-2 hover:bg-gray-700 lg:hover:bg-transparent lg:text-[#bfbfbf] hover:text-white"
          >
            Projects
          </a>
        </div>
      </div>
    </nav>
  );
}

// className="bg-gray-950 flex flex-col justify-around items-center md:flex-row md:justify-between md:gap-16 rounded-lg px-3 py-1 md:py-2 mt-3 transition-all duration-300 ease-in-out"
