'use client';
import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { RxCross1 } from "react-icons/rx";



const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full ">
      <div className="container mx-auto fixed z-[999] px-4 left-0 right-0 top-5">
        <div className="flex items-center justify-between rounded-xl bg-black/60 backdrop-blur-md px-6 lg:py-3 py-5 border border-gray-300">

          {/* Logo */}
          <div className="flex items-center gap-2">
            <img
              src="/Images/Auth/logo.png"
              alt="Propulsaria"
              className="h-8 w-auto"
            />
          </div>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-10 text-gray-300 text-sm">
            {["The Journey", "Capsules", "Mentor", "Testimonials"].map(
              (item) => (
                <li
                  key={item}
                  className="cursor-pointer hover:text-white text-[17px] transition"
                >
                  {item}
                </li>
              )
            )}
          </ul>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center text-[17px] gap-3">
            <button className="px-8 customSignUpButton py-4 rounded-lg  text-white text-sm font-medium hover:opacity-90 transition">
              Sign Up
            </button>
            <button className="px-8 py-4 rounded-lg border border-gray-500 text-gray-300 text-sm customSignUpButtonHover hover:opacity-90 transition">
              Sign In
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setOpen(!open)}
          >
            {open ? <RxCross1 size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden mt-2 rounded-2xl bg-gradient-to-r from-[#1a1a1a] to-[#2a2a2a] border border-gray-700 overflow-hidden transition-all duration-300 ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
        >
          <ul className="flex flex-col text-gray-300 text-sm divide-y divide-gray-700">
            {["The Journey", "Capsules", "Mentor", "Testimonials"].map(
              (item) => (
                <li
                  key={item}
                  className="px-6 py-4 hover:text-white  hover:bg-black transition cursor-pointer"
                >
                  {item}
                </li>
              )
            )}
          </ul>

          <div className="flex flex-col gap-3 px-6 text-[17px] py-4">
            <button className="w-full py-2 rounded-lg customSignUpButton text-white text-sm font-medium">
              Sign Up
            </button>
            <button className="w-full py-2 rounded-lg border border-gray-500 customSignUpButtonHover text-gray-300 text-sm">
              Sign In
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
