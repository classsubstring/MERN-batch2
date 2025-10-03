import React from "react";
import { Menu, X, LogIn, UserPlus } from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Brand */}
          <div className="flex-shrink-0 text-2xl font-bold text-indigo-600">
            SmartQuiz
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            <NavLink
              to={"/"}
              className="text-gray-700 dark:text-gray-200 hover:text-indigo-600"
            >
              Home
            </NavLink>
            <NavLink
              to={"/about"}
              className="text-gray-700 dark:text-gray-200 hover:text-indigo-600"
            >
              About
            </NavLink>
            <NavLink
              to={"/services"}
              className="text-gray-700 dark:text-gray-200 hover:text-indigo-600"
            >
              Services
            </NavLink>
            <NavLink
              to={"/login"}
              className="flex items-center gap-1 text-gray-700 dark:text-gray-200 hover:text-indigo-600"
            >
              <LogIn size={18} /> Login
            </NavLink>
            <NavLink
              to={"/signup"}
              className="flex items-center gap-1 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
            >
              <UserPlus size={18} /> Signup
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 dark:text-gray-200 focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 px-4 pb-4 space-y-2">
          <a
            href="#"
            className="block py-2 text-gray-700 dark:text-gray-200 hover:text-indigo-600"
          >
            Home
          </a>
          <a
            href="#about"
            className="block py-2 text-gray-700 dark:text-gray-200 hover:text-indigo-600"
          >
            About
          </a>
          <a
            href="#services"
            className="block py-2 text-gray-700 dark:text-gray-200 hover:text-indigo-600"
          >
            Services
          </a>
          <a
            href="#login"
            className="flex items-center gap-2 py-2 text-gray-700 dark:text-gray-200 hover:text-indigo-600"
          >
            <LogIn size={18} /> Login
          </a>
          <a
            href="#signup"
            className="flex items-center gap-2 py-2 px-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
          >
            <UserPlus size={18} /> Signup
          </a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
