import { Routes, Route } from "react-router-dom";
import { useScroll, motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { FaArrowUp, FaTerminal } from "react-icons/fa";
import Navbar from "./components/Navbar.jsx";
import HomePage from "./pages/HomePage.jsx";
import CommandPalette from "./components/CommandPalette.jsx";

function App() {
  const { scrollYProgress } = useScroll();
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [isCommandOpen, setIsCommandOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 600) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setIsCommandOpen((prev) => !prev);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="bg-[#020617] text-white scroll-smooth min-h-screen relative antialiased flex flex-col justify-between selection:bg-cyan-500 selection:text-black">
      {/* Scroll Progress Bar at the top */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 origin-left z-[9999]"
        style={{ scaleX: scrollYProgress }}
      />

      <Navbar onOpenCommand={() => setIsCommandOpen(true)} />
      
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </main>

      {/* Floating Controls (Command Palette Trigger & Back to Top) */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
        {/* Command Palette Trigger Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsCommandOpen(true)}
          className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#0b1220]/90 backdrop-blur-md border border-cyan-500/40 text-cyan-400 hover:bg-cyan-400 hover:text-black transition-all duration-300 shadow-[0_0_20px_rgba(34,211,238,0.2)] text-xs font-bold"
          title="Open Command Palette (Ctrl + K)"
        >
          <FaTerminal className="text-sm" />
          <span className="hidden sm:inline">Commands</span>
          <span className="bg-cyan-500/20 px-1.5 py-0.5 rounded text-[10px] font-mono border border-cyan-400/30">⌘K</span>
        </motion.button>

        {/* Back to Top Button */}
        <AnimatePresence>
          {showBackToTop && (
            <motion.button
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              onClick={scrollToTop}
              className="p-3.5 rounded-full bg-cyan-500/20 backdrop-blur-md border border-cyan-400/50 text-cyan-400 hover:bg-cyan-400 hover:text-black transition-all duration-300 shadow-[0_0_20px_rgba(34,211,238,0.3)]"
              aria-label="Back to Top"
            >
              <FaArrowUp className="text-base" />
            </motion.button>
          )}
        </AnimatePresence>
      </div>

      {/* Command Palette Modal */}
      <CommandPalette isOpen={isCommandOpen} onClose={() => setIsCommandOpen(false)} />
    </div>
  );
}

export default App;