import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#171515] to-[#272020] py-8 text-white">
      <div className="max-w-[1240px] mx-auto flex flex-col items-center">
        <p className="text-xl font-bold mb-4">Connect with Us</p>
        <div className="flex space-x-4">
         
          <a
            href="#"
            className="text-white hover:text-gray-500 transition duration-300"
          >
            <FaFacebookF size={24} />
          </a>
          <a
            href="#"
            className="text-white hover:text-gray-500 transition duration-300"
          >
            <FaTwitter size={24} />
          </a>
          <a
            href="#"
            className="text-white hover:text-gray-500 transition duration-300"
          >
            <FaInstagram size={24} />
          </a>
        </div>
        <p className="mt-6 text-sm">
          Stay updated on our latest news and events.
        </p>
        <p className="mt-4 text-sm">© 2023 Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
