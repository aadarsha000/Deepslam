import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { BsFillSendFill } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 font-oswald">
      <div className="w-full max-w-screen-xl px-6 mx-auto">
        {/* Branding / Logo */}
        <div className="text-center mb-8">
          <div className="text-3xl font-semibold">DeepSlam</div>
        </div>

        {/* Footer Links */}
        <div className="flex justify-center space-x-6 mb-8">
          <a href="#home" className="hover:text-primary text-lg">
            Home
          </a>
          <a href="#features" className="hover:text-primary text-lg">
            Features
          </a>
          <a href="#about" className="hover:text-primary text-lg">
            About
          </a>
          <a href="#roadmap" className="hover:text-primary text-lg">
            Roadmap
          </a>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-4 mb-8">
          <div className="h-12 w-12 min-w-12 min-h-12 rounded-full text-secondary bg-primary border-2 border-primary hover:bg-secondary hover:text-primary flex items-center justify-center cursor-pointer">
            <FaXTwitter />
          </div>
          {/* <div className="h-12 w-12 min-w-12 min-h-12 rounded-full text-secondary bg-primary border-2 border-primary hover:bg-secondary hover:text-primary flex items-center justify-center cursor-pointer">
            <BsFillSendFill />
          </div> */}
        </div>

        {/* Copyright */}
        <div className="text-center text-sm text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} DeepSlam. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
