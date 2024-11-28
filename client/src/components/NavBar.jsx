import React, { useState } from "react";
import { assets } from "../assets/assets.js";
import { Link, NavLink } from "react-router-dom";

const navLinks = [
  { name: "User Info", path: "/user-info" },
  { name: "Vaccine List", path: "/vaccine-list" },
  { name: "Heat Map", path: "/heat-map" },
  { name: "Contact Us", path: "/contact-us" },
];

const NavBar = () => {
  return (
    <nav className="flex items-center justify-between py-4 px-6 font-medium bg-[#EAF8E7] rounded-xl shadow-lg mt-4">
      {/* Logo */}
      <Link to="/">
        <img src={assets.vaxtrack_logo} className="h-24" alt="Vaxtrack logo" />
      </Link>

      {/* Navigation Links for Large Screens */}
      <ul className="hidden sm:flex gap-8 text-sm text-gray-700">
        {navLinks.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            className="flex flex-col items-center gap-1 text-xl py-3 px-5 hover:text-[#4DA674] transition-all duration-300"
          >
            <p>{item.name}</p>
          </NavLink>
        ))}
      </ul>

      {/* Sign Out Button (Right corner) */}
      <div className="flex items-center gap-6">
        <Link to="/sign-out">
          <button className="py-2 px-4 bg-[#4DA674] text-white rounded-lg hover:bg-[#398755] transition-colors duration-300">
            Sign Out
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
