import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaSearch, FaTimes, FaHome, FaUser, FaLaptopCode, FaGraduationCap, FaBriefcase, FaRocket, FaEnvelope, FaFilePdf, FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

function CommandPalette({ isOpen, onClose }) {
  const [query, setQuery] = useState("");

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        if (isOpen) {
          onClose();
        } else {
          // Open handled by parent or state
        }
      }
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  const commands = [
    { id: "home", title: "Go to Home", category: "Navigation", icon: <FaHome className="text-cyan-400" />, action: () => scrollToSection("home") },
    { id: "about", title: "Go to About Me", category: "Navigation", icon: <FaUser className="text-purple-400" />, action: () => scrollToSection("about") },
    { id: "skills", title: "Go to Skills & Tech", category: "Navigation", icon: <FaLaptopCode className="text-blue-400" />, action: () => scrollToSection("skills") },
    { id: "education", title: "Go to Education & LeetCode", category: "Navigation", icon: <FaGraduationCap className="text-yellow-400" />, action: () => scrollToSection("education") },
    { id: "experience", title: "Go to Experience", category: "Navigation", icon: <FaBriefcase className="text-green-400" />, action: () => scrollToSection("experience") },
    { id: "projects", title: "Go to Projects", category: "Navigation", icon: <FaRocket className="text-pink-400" />, action: () => scrollToSection("projects") },
    { id: "contact", title: "Go to Contact", category: "Navigation", icon: <FaEnvelope className="text-amber-400" />, action: () => scrollToSection("contact") },
    
    { id: "resume", title: "Download Resume (PDF)", category: "Actions", icon: <FaFilePdf className="text-red-400" />, action: () => window.open("/Ajay_s_Resume.pdf", "_blank") },
    { id: "github", title: "View GitHub Profile", category: "Socials", icon: <FaGithub className="text-white" />, action: () => window.open("https://github.com/AjayGhadage", "_blank") },
    { id: "linkedin", title: "View LinkedIn Profile", category: "Socials", icon: <FaLinkedin className="text-blue-500" />, action: () => window.open("https://www.linkedin.com/in/ajay-ghadage-1a668a28b/", "_blank") },
    { id: "leetcode", title: "View LeetCode Stats", category: "Socials", icon: <SiLeetcode className="text-amber-500" />, action: () => window.open("https://leetcode.com/u/Ajya_Ghadage/", "_blank") },
  ];

  const scrollToSection = (id) => {
    onClose();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const filteredCommands = commands.filter((cmd) =>
    cmd.title.toLowerCase().includes(query.toLowerCase()) ||
    cmd.category.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-[99999] flex items-start justify-center pt-20 px-4 bg-black/80 backdrop-blur-md"
        >
          <motion.div
            initial={{ scale: 0.95, y: -20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.95, y: -20 }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-xl bg-[#0b1220] border border-cyan-500/30 rounded-3xl overflow-hidden shadow-2xl"
          >
            {/* Search Input Bar */}
            <div className="flex items-center px-6 py-4 border-b border-gray-800 bg-[#070c17]">
              <FaSearch className="text-gray-400 text-lg mr-3" />
              <input
                type="text"
                autoFocus
                placeholder="Type a command or search (e.g. projects, resume, skills)..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full bg-transparent text-white placeholder-gray-500 focus:outline-none text-sm md:text-base font-medium"
              />
              <button
                onClick={onClose}
                className="p-2 text-gray-400 hover:text-white rounded-full bg-white/5 border border-white/10 transition"
              >
                <FaTimes />
              </button>
            </div>

            {/* Commands List */}
            <div className="max-h-80 overflow-y-auto p-4 space-y-1">
              {filteredCommands.length > 0 ? (
                filteredCommands.map((cmd) => (
                  <button
                    key={cmd.id}
                    onClick={cmd.action}
                    className="w-full flex items-center justify-between p-3.5 rounded-2xl hover:bg-cyan-500/10 border border-transparent hover:border-cyan-500/20 text-left transition duration-200 group"
                  >
                    <div className="flex items-center gap-3.5">
                      <div className="p-2.5 rounded-xl bg-white/5 border border-white/5 group-hover:border-cyan-400/30 transition">
                        {cmd.icon}
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-white group-hover:text-cyan-300 transition">
                          {cmd.title}
                        </p>
                        <p className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">
                          {cmd.category}
                        </p>
                      </div>
                    </div>
                    <span className="text-xs text-gray-500 group-hover:text-cyan-400 transition font-mono">
                      ↵ Jump
                    </span>
                  </button>
                ))
              ) : (
                <div className="text-center py-8 text-gray-500 text-sm">
                  No matching commands found.
                </div>
              )}
            </div>

            {/* Footer Hint */}
            <div className="px-6 py-3 bg-[#060b17] border-t border-gray-800 flex items-center justify-between text-[11px] text-gray-500 font-mono">
              <span>Navigation Shortcut</span>
              <div className="flex gap-2">
                <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-gray-400">Ctrl + K</span>
                <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-gray-400">ESC to Close</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default CommandPalette;
