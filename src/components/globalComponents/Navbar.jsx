import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import css from "../../styles/App.css";

export default function Navbar() {
  // State hooks and navigate
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="absolute left-10 bg-gray-950 mt-6 w-[80%] rounded-xl">
      <div className="align-middle flex flex-col justify-around  md:flex-row md:justify-between md:gap-16 rounded-lg px-3 py-1 md:py-2 mt-4 transition-all duration-300 ease-in-out">
        {/* Below is the navbar content before opening */}
        <div className="flex justify-between">
          <div className="text-md font-mono text-white">
            <p>Arthur Fernandez</p>
          </div>
          <div
            className={`hamburger-menu ${isOpen ? "open" : ""}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="line line1"></span>
            <span className="line line2"></span>
          </div>
        </div>
      </div>
    </nav>
  );
}

// className="bg-gray-950 flex flex-col justify-around items-center md:flex-row md:justify-between md:gap-16 rounded-lg px-3 py-1 md:py-2 mt-3 transition-all duration-300 ease-in-out"
