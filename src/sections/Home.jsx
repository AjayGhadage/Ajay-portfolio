import { FaArrowRight, FaDownload } from "react-icons/fa";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";

function Home() {
  // Cursor Glow Motion
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 100, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 100, damping: 20 });

  useEffect(() => {
    const moveCursor = (e) => {
      mouseX.set(e.clientX - 150);
      mouseY.set(e.clientY - 150);
    };
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, [mouseX, mouseY]);

  return (
    <section
      id="home"
      className="relative min-h-screen bg-black text-white flex items-center overflow-hidden"
    >
      {/* Cursor Glow */}
      <motion.div
        style={{ x: springX, y: springY }}
        className="fixed top-0 left-0 w-72 h-72 rounded-full bg-cyan-400/10 blur-3xl pointer-events-none z-0"
      />

      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-cyan-400 uppercase tracking-widest text-xs md:text-sm mb-4">
            Welcome to my portfolio
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-4">
            Hello, I am <br />
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Ajay Ghadage
            </span>
          </h1>

          {/* Typing Role Switch */}
          <h2 className="text-lg md:text-2xl font-semibold text-gray-300 mb-6">
            <Typewriter
              words={[
                "Full Stack Developer (MERN)",
                "AI-Driven Application Builder",
                "Machine Learning Enthusiast",
                "Problem Solver & System Thinker",
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={40}
              delaySpeed={1500}
            />
          </h2>

          <p className="text-gray-400 max-w-xl mb-8 leading-relaxed text-sm md:text-base">
            I build scalable and high-performance web applications focused on
            clean architecture, usability, and long-term maintainability.
          </p>

          {/* Buttons */}
          <div className="flex gap-4 flex-wrap">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="flex items-center gap-2 bg-cyan-400 text-black px-6 py-3 rounded-full font-semibold hover:bg-white transition duration-300"
            >
              Get In Touch <FaArrowRight />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/Ajay_s_Resume.pdf"
              className="flex items-center gap-2 border border-gray-600 px-6 py-3 rounded-full hover:border-cyan-400 hover:text-cyan-400 transition duration-300"
            >
              Download Resume <FaDownload />
            </motion.a>
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center md:justify-end mt-12 md:mt-0"
        >
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96">

            {/* Rotating Gradient Border */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                repeat: Infinity,
                duration: 12,
                ease: "linear",
              }}
              className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-400 via-blue-500 to-purple-500 blur-sm"
            />

            {/* Floating Profile Image */}
            <motion.img
              src="/ajay.png"
              alt="Profile"
              className="relative rounded-full w-full h-full object-cover border-4 border-black"
              animate={{ y: [0, -12, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default Home;
