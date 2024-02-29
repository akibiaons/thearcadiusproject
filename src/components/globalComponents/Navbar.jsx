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
          ? "absolute left-10 bg-[#141415] mt-6 w-[80%] rounded-t-xl"
          : "absolute left-10 bg-[#141415] mt-6 w-[80%] rounded-xl"
      }`}
    >
      <div className="align-middle flex flex-col justify-around  md:flex-row md:justify-between md:gap-16 rounded-lg px-3 py-1 md:py-2 mt-4 transition-all duration-300 ease-in-out">
        {/* Below is the navbar content before opening */}
        <div className="flex justify-between">
          <div className="text-md font-mono text-[#bfbfbf]">
            <p>Arthur Fernandez</p>
          </div>
          <div
            className={`hamburger-menu ${isOpen ? "open" : ""}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="line line1"></span>
            <span className="line line2"></span>
          </div>
          {/* Navigation Links */}
          <div
            className={`${
              isOpen ? "flex items-center z-50 rounded-b-xl" : "hidden"
            } flex-col absolute top-full left-0 w-full bg-[#141415]/85 text-[#bfbfbf] font-mono pt-4 pb-6`}
          >
            <a href="#" className="px-4 py-2 hover:bg-gray-700">
              About me
            </a>
            <a href="#" className="px-4 py-2 hover:bg-gray-700">
              Case Studies
            </a>
            <a href="#" className="px-4 py-2 hover:bg-gray-700">
              Articles
            </a>
            <a href="#" className="px-4 py-2 hover:bg-gray-700">
              Projects
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

// className="bg-gray-950 flex flex-col justify-around items-center md:flex-row md:justify-between md:gap-16 rounded-lg px-3 py-1 md:py-2 mt-3 transition-all duration-300 ease-in-out"
