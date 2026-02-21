import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode, SiCodeforces, SiCodechef } from "react-icons/si";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-black/80 backdrop-blur-md z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <h2 className="text-xl font-bold text-cyan-400 cursor-pointer">
          Ajay Ghadage
        </h2>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-gray-300">
          <a href="#home" className="hover:text-cyan-400 transition">Home</a>
          <a href="#about" className="hover:text-cyan-400 transition">About</a>
          <a href="#education" className="hover:text-cyan-400 transition">Education</a>
          <a href="#skills" className="hover:text-cyan-400 transition">Skills</a>
          <a href="#projects" className="hover:text-cyan-400 transition">Projects</a>
          <a href="#contact" className="hover:text-cyan-400 transition">Contact</a>
        </div>

        {/* Desktop Icons */}
        <div className="hidden md:flex items-center gap-5 text-lg text-gray-400">
          <a
            href="https://github.com/AjayGhadage"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition transform hover:scale-110"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/ajay-ghadage-1a668a28b/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition transform hover:scale-110"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://leetcode.com/u/Ajya_Ghadage/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-400 transition transform hover:scale-110"
          >
            <SiLeetcode />
          </a>

          <a
            href="https://www.codechef.com/users/sane_crows_73"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-400 transition transform hover:scale-110"
          >
            <SiCodechef />
          </a>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden text-2xl text-gray-300">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <HiOutlineX /> : <HiOutlineMenu />}
          </button>
        </div>

      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="md:hidden bg-black border-t border-gray-800"
          >
            <div className="flex flex-col px-6 py-6 gap-4 text-gray-300">

              <a href="#home" onClick={() => setIsOpen(false)}>Home</a>
              <a href="#about" onClick={() => setIsOpen(false)}>About</a>
              <a href="#education" onClick={() => setIsOpen(false)}>Education</a>
              <a href="#skills" onClick={() => setIsOpen(false)}>Skills</a>
              <a href="#projects" onClick={() => setIsOpen(false)}>Projects</a>
              <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>

              {/* Mobile Icons */}
              <div className="flex gap-6 text-xl pt-4 border-t border-gray-800">
                <FaGithub />
                <FaLinkedin />
                <SiLeetcode />
                <SiCodeforces />
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;