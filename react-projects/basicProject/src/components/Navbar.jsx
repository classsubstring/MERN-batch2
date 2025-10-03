import React from "react";

function Navbar() {
  return (
    <nav className="bg-gray-950 text-white flex flex-row justify-around p-4">
      <h2 className="text-2xl ">Instructor Page</h2>
      <ul className="flex gap-4 text-xl">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/services">Services</a>
        </li>
        <li>
          <a href="/contact">Contact Us</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
