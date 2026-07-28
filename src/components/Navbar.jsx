import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedin, FaTerminal } from "react-icons/fa";
import { SiLeetcode, SiCodechef } from "react-icons/si";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

function Navbar({ onOpenCommand }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "education", "experience", "projects", "contact"];
      const scrollPosition = window.scrollY + 250; // offset for highlighting active link a bit early

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Initial check
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "education", label: "Education" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav className="fixed w-full bg-[#020617]/85 backdrop-blur-md z-50 border-b border-gray-900 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <h2 
          onClick={() => document.getElementById("home")?.scrollIntoView({ behavior: "smooth" })}
          className="text-xl font-black bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent cursor-pointer tracking-wider"
        >
          Ajay Ghadage
        </h2>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-sm font-semibold tracking-wide">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`transition-colors duration-300 relative py-1 ${
                activeSection === link.id
                  ? "text-cyan-400 font-bold"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {link.label}
              {activeSection === link.id && (
                <motion.div
                  layoutId="activeNavLinkUnderline"
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-cyan-400"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </a>
          ))}
        </div>

        {/* Desktop Icons & Command trigger */}
        <div className="hidden md:flex items-center gap-4 text-lg text-gray-400">
          <button
            onClick={onOpenCommand}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 hover:border-cyan-400 text-xs font-semibold text-gray-300 hover:text-cyan-400 transition"
            title="Open Command Palette (Ctrl + K)"
          >
            <FaTerminal className="text-cyan-400 text-xs" />
            <span className="text-[10px] font-mono text-gray-400">⌘K</span>
          </button>

          <a
            href="https://github.com/AjayGhadage"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white hover:scale-110 transition duration-300"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/ajay-ghadage-1a668a28b/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 hover:scale-110 transition duration-300"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://leetcode.com/u/Ajya_Ghadage/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-500 hover:scale-110 transition duration-300"
          >
            <SiLeetcode />
          </a>

          <a
            href="https://www.codechef.com/users/sane_crows_73"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-400 hover:scale-110 transition duration-300"
          >
            <SiCodechef />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="md:hidden text-2xl text-gray-300 flex items-center">
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            aria-label="Toggle Menu"
            className="focus:outline-none hover:text-white transition duration-300"
          >
            {isOpen ? <HiOutlineX /> : <HiOutlineMenu />}
          </button>
        </div>

      </div>

      {/* Mobile Dropdown Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#020617] border-t border-gray-900 overflow-hidden"
          >
            <div className="flex flex-col px-6 py-6 gap-5 text-gray-300 text-sm font-semibold">

              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={() => setIsOpen(false)}
                  className={`py-1.5 transition-colors duration-300 ${
                    activeSection === link.id
                      ? "text-cyan-400 font-bold"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  {link.label}
                </a>
              ))}

              {/* Mobile Social Icons */}
              <div className="flex gap-7 text-2xl pt-6 border-t border-gray-900 mt-4">
                <a href="https://github.com/AjayGhadage" target="_blank" rel="noopener noreferrer" className="hover:text-white transition duration-300"><FaGithub /></a>
                <a href="https://www.linkedin.com/in/ajay-ghadage-1a668a28b/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition duration-300"><FaLinkedin /></a>
                <a href="https://leetcode.com/u/Ajya_Ghadage/" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500 transition duration-300"><SiLeetcode /></a>
                <a href="https://www.codechef.com/users/sane_crows_73" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition duration-300"><SiCodechef /></a>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;