import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaLocationDot, FaPhone, FaEnvelope } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#001526] text-gray-300 pt-16 pb-6 px-6 md:px-16">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* About Section */}
        <div>
          <h2 className="text-2xl font-semibold text-[#fc8b0a] mb-4">3AcreIn</h2>
          <p className="text-sm leading-relaxed">
            Welcome to <span className="text-[#fc8b0a] font-semibold">3AcreIn</span> — where luxury meets comfort.
            Experience the royal essence of hospitality with modern amenities and timeless elegance.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-[#fc8b0a] mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-[#fc8b0a] cursor-pointer transition">Home</li>
            <li className="hover:text-[#fc8b0a] cursor-pointer transition">Rooms</li>
            <li className="hover:text-[#fc8b0a] cursor-pointer transition">Facilities</li>
            <li className="hover:text-[#fc8b0a] cursor-pointer transition">Gallery</li>
            <li className="hover:text-[#fc8b0a] cursor-pointer transition">Contact</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold text-[#fc8b0a] mb-4">Contact Us</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <FaLocationDot className="text-[#fc8b0a]" /> 
              Dehradun, Uttarakhand, India
            </li>
            <li className="flex items-center gap-2">
              <FaPhone className="text-[#fc8b0a]" /> 
              +91 74887 88522
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-[#fc8b0a]" /> 
              info@3acrein.com
            </li>
          </ul>
          <div className="flex gap-4 mt-4 text-lg">
            <a href="#" className="hover:text-[#fc8b0a] transition"><FaFacebookF /></a>
            <a href="#" className="hover:text-[#fc8b0a] transition"><FaInstagram /></a>
            <a href="#" className="hover:text-[#fc8b0a] transition"><FaTwitter /></a>
            <a href="#" className="hover:text-[#fc8b0a] transition"><FaLinkedinIn /></a>
          </div>
        </div>

        {/* Map Section */}
        <div>
          <h3 className="text-xl font-semibold text-[#fc8b0a] mb-4">Find Us</h3>
          <div className="rounded-lg overflow-hidden shadow-lg border border-[#fc8b0a]/30">
            <iframe
              title="3AcreIn Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.094052403529!2d78.0300!3d30.3165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3909298f2d1c1d6d%3A0x0!2sDehradun!5e0!3m2!1sen!2sin!4v1700000000000"
              width="100%"
              height="200"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>

      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 mt-10 pt-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} <span className="text-[#fc8b0a] font-semibold">3AcreIn</span>. All Rights Reserved. | Designed by Suman Kumar
      </div>
    </footer>
  );
};

export default Footer;
