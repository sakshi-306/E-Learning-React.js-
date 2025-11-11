import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGlobe,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-blue-50 to-indigo-100 text-gray-900 px-6 py-12">
      <div className="max-w-7xl mx-auto grid gap-8 md:grid-cols-4 sm:grid-cols-2">
        <div className="space-y-3 px-3 text-center sm:text-left">
          <h2 className="text-xl md:text-2xl font-bold">
            ABC College of Computer Science & Engineering
          </h2>
          <p className="text-sm md:text-base leading-6 text-gray-700">
            Surat, Gujarat - 395007
            <br />
            Empowering Innovators of Tomorrow
          </p>
        </div>

        <div className="space-y-3 px-3 text-center sm:text-left">
          <h3 className="text-lg md:text-xl font-semibold">Quick Links</h3>
          <ul className="space-y-2 text-gray-600 text-sm md:text-base">
            <li>
              <a
                href="#"
                className="hover:text-blue-600 transition duration-300"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-blue-600 transition duration-300"
              >
                Admissions
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-blue-600 transition duration-300"
              >
                Departments
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-blue-600 transition duration-300"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div className="space-y-3 px-3 text-center sm:text-left">
          <h3 className="text-lg md:text-xl font-semibold">Contact</h3>
          <p className="text-sm md:text-base text-gray-700 leading-6">
            Phone: <span className="font-medium">+91 99xxxxxxxx</span>
            <br />
            Email: <span className="font-medium">info@abccollege.edu.in</span>
          </p>
        </div>

        <div className="space-y-3 px-3 text-center sm:text-left">
          <h3 className="text-lg md:text-xl font-semibold">Follow Us</h3>
          <div className="flex gap-4 text-2xl justify-center sm:justify-start text-gray-600">
            <a
              href="https://www.abccollege.edu.in"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 transition duration-300"
            >
              <FaGlobe />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 transition duration-300"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 transition duration-300"
            >
              <FaInstagram />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 transition duration-300"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-300 pt-6 text-center text-sm md:text-base text-gray-700">
        © 2025 Sakshi Patil. Built using React & Tailwind CSS.
      </div>
    </footer>
  );
};

export default Footer;
