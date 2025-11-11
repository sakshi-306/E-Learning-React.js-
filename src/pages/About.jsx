import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import Header from "../components/Header";
import Footer from "../components/Footer";

const About = () => {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-b from-gray-100 to-white flex items-center justify-center px-4 py-12">
        <div className="bg-white rounded-2xl shadow-xl p-10 max-w-3xl w-full text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">👋 About Me</h1>
          <p className="text-gray-700 text-lg leading-relaxed mb-8">
            Hello! I’m{" "}
            <span className="font-semibold text-black">Harshil Patel</span>, a
            passionate full-stack web developer. I love working with modern
            technologies like{" "}
            <span className="text-blue-500 font-medium">React</span>,
            <span className="text-cyan-500 font-medium"> Tailwind CSS</span>,{" "}
            <span className="text-green-500 font-medium">PHP</span>, and
            building intuitive and responsive web applications. I enjoy solving
            real-world problems and continuously learning new things!
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mb-3">
            Connect With Me
          </h2>
          <div className="flex justify-center gap-6 text-3xl text-gray-600">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black transition duration-200"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-700 transition duration-200"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition duration-200"
            >
              <FaTwitter />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-600 transition duration-200"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
