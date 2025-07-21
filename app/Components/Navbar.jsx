"use client";

import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinkClass =
  "font-[ClashDisplay] font-light px-4 py-1 rounded-full border border-transparent hover:border-white transition text-base";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false); // Close mobile drawer after click
  };

  const navItems = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Events", id: "events" },
    { label: "Gallery", id: "gallery" },
    { label: "Chapters", id: "chapters" },
    { label: "Contacts", id: "contacts" },
  ];

  return (
    <>
      {/* Navbar */}
      <nav className="bg-black text-white px-6 py-3 flex items-center justify-between shadow-md fixed w-full z-50">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src="/assets/Logo.png" alt="MACE 35 Logo" className="h-12" />
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleScroll(item.id)}
              className={navLinkClass}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Join Us Button */}
        <div className="hidden md:block">
          <button className="border border-orange-500 text-[#F55800] hover:bg-orange-500 hover:text-black transition rounded-full px-5 py-1 font-semibold font-[ClashDisplay]">
            Join Us
          </button>
        </div>

        {/* Hamburger for mobile */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(true)} className="text-white">
            <Menu size={30} />
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-3/4 bg-black z-50 p-6 transition-transform duration-300 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        {/* Close icon */}
        <div className="flex justify-end">
          <button onClick={() => setIsOpen(false)} className="text-white">
            <X size={28} />
          </button>
        </div>

        {/* Nav Items */}
        <ul className="flex flex-col mt-8 space-y-4">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => handleScroll(item.id)}
                className="text-white text-lg font-[ClashDisplay] hover:border hover:border-white rounded-full px-4 py-1 transition"
              >
                {item.label}
              </button>
            </li>
          ))}

          {/* Join Us in Drawer */}
          <li>
            <button className="mt-4 border border-orange-500 text-[#F55800] hover:bg-orange-500 hover:text-black transition rounded-full px-5 py-1 font-semibold font-[ClashDisplay]">
              Join Us
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
