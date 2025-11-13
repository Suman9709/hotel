import React, { useEffect, useState } from "react";
import logo from "/public/logo.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500  ${
        scrolled ? "bg-white shadow-md" : "bg-[#001526]"
      }`}
    >
      <div className="max-w-7xl flex justify-between items-center px-8 h-18">
        {/* logo */}
        <div className="w-24 h-24">
          <img src={logo} alt="Logo" className="w-full h-full object-contain rounded-lg" />
        </div>

        {/* nav items */}
        <ul
          className={`flex gap-10 text-lg font-medium transition-colors duration-500 ${
            scrolled ? "text-gray-800" : "text-white"
          }`}
        >
          <li className="cursor-pointer hover:text-[#fc8b0a] transition-colors">Home</li>
          <li className="cursor-pointer hover:text-[#fc8b0a] transition-colors">Rooms</li>
          <li className="cursor-pointer hover:text-[#fc8b0a] transition-colors">Facilities</li>
          <li className="cursor-pointer hover:text-[#fc8b0a] transition-colors">Contact</li>
        </ul>

        {/* button */}
        <button
          className={`px-6 py-2 rounded-full font-semibold transition-all duration-500 text-[#fc8b0a]  ${
            scrolled
              ? "bg-[#001526] text-white hover:bg-[#001526]"
              : "bg-white text-[#001526] hover:bg-gray-100"
          }`}
        >
          Book Now
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
