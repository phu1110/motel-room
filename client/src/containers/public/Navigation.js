// src/components/Navbar.js
import React, { useState } from "react";

function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-semibold text-xl">Navbar</div>
        <div className="hidden md:block">
          <ul className="space-x-4">
            <li className="inline">
              <a href="#" className="text-white hover:text-gray-400">
                Home
              </a>
            </li>
            
            <li className="inline">
              <a href="#" className="text-white hover:text-gray-400">
                About
              </a>
            </li>
            <li className="inline">
              <a href="#" className="text-white hover:text-gray-400">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="md:hidden">
          <button
            className="relative text-white hover:text-gray-400 focus:outline-none"
            onClick={toggleDropdown}
          >
            Menu
          </button>
          {isDropdownOpen && (
            <ul className="absolute mt-2 bg-gray-800 text-white">
              <li className="py-2 px-4 hover:bg-gray-700">Home</li>
              <li className="py-2 px-4 hover:bg-gray-700">About</li>
              <li className="py-2 px-4 hover:bg-gray-700">Contact</li>
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

