import { FaArrowRight, FaDownload, FaUserTie, FaTimes, FaCheckCircle, FaGithub, FaLinkedin, FaEnvelope, FaFilePdf } from "react-icons/fa";
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";

function Home() {
  const [showRecruiterModal, setShowRecruiterModal] = useState(false);

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
      className="relative min-h-screen bg-[#020617] text-white flex items-center overflow-hidden"
    >
      {/* THE CORE: THEMED BACKGROUND */}
      <div className="absolute inset-0 z-0">
        {/* Central Energy Aura */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 blur-[150px] rounded-full pointer-events-none" />

        {/* Dynamic Interactive Cursor Glow */}
        <motion.div
          style={{ x: springX, y: springY }}
          className="pointer-events-none fixed top-0 left-0 w-[300px] h-[300px] bg-cyan-400/15 rounded-full blur-[80px] z-10"
        />

        {/* Ambient Grid Layer */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-32 pb-16 relative z-10 grid md:grid-cols-2 gap-12 items-center w-full">

        {/* LEFT TEXT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-left"
        >
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 bg-[#0b1220] border border-cyan-500/30 px-3.5 py-1.5 rounded-full mb-6">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
            <span className="text-[11px] font-bold uppercase tracking-widest text-cyan-300">
              Open for Internships & Full-Time Roles
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-4">
            Hi, I'm <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">Ajay Ghadage</span>
          </h1>

          {/* Typing Effect */}
          <h2 className="text-xl sm:text-3xl font-semibold text-gray-300 mb-6 h-12 flex items-center">
            <Typewriter
              words={[
                "Full-Stack MERN Developer",
                "AI-Driven Software Engineer",
                "AWS Cloud Architect (ECS & RDS)",
                "Competitive Programmer (100+ Solved)",
              ]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={40}
              delaySpeed={1500}
            />
          </h2>

          <p className="text-gray-400 max-w-xl mb-8 leading-relaxed text-sm md:text-base">
            Computer Engineering student specializing in building real-world MERN stack
            applications, AI-driven microservices, and cloud architectures. Focused on clean system design and high-performance applications.
          </p>

          {/* Buttons */}
          <div className="flex gap-3 flex-wrap">
            <motion.a
              whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(34, 211, 238, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="flex items-center gap-2 bg-gradient-to-r from-cyan-400 to-blue-500 text-black px-6 py-3 rounded-full font-bold text-xs md:text-sm hover:brightness-110 transition duration-300"
            >
              Get In Touch <FaArrowRight />
            </motion.a>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowRecruiterModal(true)}
              className="flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/40 text-cyan-400 px-5 py-3 rounded-full hover:bg-cyan-500 hover:text-black transition duration-300 text-xs md:text-sm font-semibold"
            >
              <FaUserTie /> Recruiter Snapshot
            </motion.button>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/Ajay_s_Resume.pdf"
              download="Ajay_Ghadage_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white/5 backdrop-blur-md border border-gray-700 px-5 py-3 rounded-full hover:border-cyan-400 hover:text-cyan-400 transition duration-300 text-xs md:text-sm font-semibold"
            >
              Resume <FaDownload />
            </motion.a>
          </div>
        </motion.div>

        {/* RIGHT IMAGE WITH METRICS BADGES */}
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
                duration: 16,
                ease: "linear",
              }}
              className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-500 via-blue-500 to-purple-600 blur-[3px]"
            />

            {/* Floating Profile Image */}
            <motion.img
              src="/Ajay1.png"
              alt="Ajay Ghadage Profile"
              className="relative rounded-full w-full h-full object-cover border-4 border-black z-10"
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Badge 1: CGPA */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-3 -left-3 bg-[#0b1220]/90 backdrop-blur-md border border-cyan-500/30 px-4 py-2 rounded-2xl flex items-center gap-2 shadow-[0_10px_25px_rgba(0,0,0,0.5)] z-20 text-xs font-semibold"
            >
              <span className="text-sm">🎓</span>
              <div className="text-left">
                <p className="text-[10px] text-gray-400 uppercase tracking-widest">Academics</p>
                <p className="text-cyan-400 font-bold">9.5 CGPA</p>
              </div>
            </motion.div>

            {/* Badge 2: GATE */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute -bottom-3 -right-3 bg-[#0b1220]/90 backdrop-blur-md border border-purple-500/30 px-4 py-2 rounded-2xl flex items-center gap-2 shadow-[0_10px_25px_rgba(0,0,0,0.5)] z-20 text-xs font-semibold"
            >
              <span className="text-sm">🚀</span>
              <div className="text-left">
                <p className="text-[10px] text-gray-400 uppercase tracking-widest">Qualified</p>
                <p className="text-purple-400 font-bold">GATE 2026</p>
              </div>
            </motion.div>

            {/* Badge 3: LeetCode */}
            <motion.div
              animate={{ x: [0, 6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
              className="absolute bottom-10 -left-8 bg-[#0b1220]/90 backdrop-blur-md border border-yellow-500/30 px-4 py-2 rounded-2xl flex items-center gap-2 shadow-[0_10px_25px_rgba(0,0,0,0.5)] z-20 text-xs font-semibold animate-pulse-slow"
            >
              <span className="text-sm">📊</span>
              <div className="text-left">
                <p className="text-[10px] text-gray-400 uppercase tracking-widest">LeetCode</p>
                <p className="text-yellow-400 font-bold">100+ Solved</p>
              </div>
            </motion.div>
          </div>
        </motion.div>

      </div>

      {/* Embedded Scroll Indicator Mouse */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500 opacity-60">
        <span className="text-[9px] uppercase tracking-[0.2em] font-medium">Scroll Down</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-5 h-8 border-2 border-gray-600 rounded-full flex justify-center p-1"
        >
          <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full" />
        </motion.div>
      </div>

      {/* RECRUITER EXECUTIVE SNAPSHOT MODAL */}
      <AnimatePresence>
        {showRecruiterModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowRecruiterModal(false)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#0b1220] border border-cyan-500/40 rounded-3xl max-w-2xl w-full p-6 md:p-8 shadow-2xl relative overflow-hidden text-left"
            >
              {/* Header */}
              <div className="flex items-center justify-between border-b border-gray-800 pb-4 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-cyan-500/10 border border-cyan-400 flex items-center justify-center text-cyan-400">
                    <FaUserTie className="text-xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Recruiter 30-Sec Snapshot</h3>
                    <p className="text-xs text-cyan-400 font-semibold">Ajay Ghadage • Candidate Brief</p>
                  </div>
                </div>
                <button
                  onClick={() => setShowRecruiterModal(false)}
                  className="p-2 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 transition"
                >
                  <FaTimes />
                </button>
              </div>

              {/* Highlights Matrix */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
                <div className="bg-white/5 p-3 rounded-2xl border border-white/5 text-center">
                  <p className="text-cyan-400 font-extrabold text-lg">9.5 CGPA</p>
                  <p className="text-[10px] text-gray-400 uppercase tracking-wider">SPPU Ranker</p>
                </div>
                <div className="bg-white/5 p-3 rounded-2xl border border-white/5 text-center">
                  <p className="text-purple-400 font-extrabold text-lg">GATE '26</p>
                  <p className="text-[10px] text-gray-400 uppercase tracking-wider">CS Qualified</p>
                </div>
                <div className="bg-white/5 p-3 rounded-2xl border border-white/5 text-center">
                  <p className="text-green-400 font-extrabold text-lg">100+ Solved</p>
                  <p className="text-[10px] text-gray-400 uppercase tracking-wider">LeetCode DSA</p>
                </div>
                <div className="bg-white/5 p-3 rounded-2xl border border-white/5 text-center">
                  <p className="text-yellow-400 font-extrabold text-lg">2 Internships</p>
                  <p className="text-[10px] text-gray-400 uppercase tracking-wider">Full Stack & DSA</p>
                </div>
              </div>

              {/* Core Skill Pills */}
              <div className="mb-6 space-y-2">
                <p className="text-xs font-bold uppercase tracking-wider text-gray-400">Core Expertise:</p>
                <div className="flex flex-wrap gap-2">
                  {["React.js", "Node.js", "Express.js", "MongoDB", "PostgreSQL", "Python AI Microservices", "AWS ECS Fargate", "AWS RDS", "Docker", "REST APIs", "Data Structures"].map((skill, idx) => (
                    <span key={idx} className="bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs px-2.5 py-1 rounded-full font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Top Featured Accomplishments */}
              <div className="space-y-2 mb-6 bg-black/40 p-4 rounded-2xl border border-gray-800 text-xs text-gray-300">
                <div className="flex items-center gap-2">
                  <FaCheckCircle className="text-cyan-400 text-sm flex-shrink-0" />
                  <span>Deployed <strong>HireSense</strong>: Cloud-native AI recruitment platform on AWS ECS Fargate & ALB.</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaCheckCircle className="text-cyan-400 text-sm flex-shrink-0" />
                  <span>Built <strong>LendSecure</strong>: Multimodal AI loan verification & liveness detection platform.</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaCheckCircle className="text-cyan-400 text-sm flex-shrink-0" />
                  <span>Achieved <strong>10 CGPA</strong> in 1st year (College Topper) at Savitribai Phule Pune University.</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href="/Ajay_s_Resume.pdf"
                  download="Ajay_Ghadage_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-gradient-to-r from-cyan-400 to-blue-500 text-black px-5 py-2.5 rounded-xl text-xs font-bold hover:brightness-110 transition"
                >
                  <FaFilePdf /> Download Official Resume
                </a>
                <a
                  href="https://linkedin.com/in/ajayghadage"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-white/5 border border-gray-700 text-white px-4 py-2.5 rounded-xl text-xs font-semibold hover:border-cyan-400 hover:text-cyan-400 transition"
                >
                  <FaLinkedin /> LinkedIn
                </a>
                <a
                  href="https://github.com/AjayGhadage"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-white/5 border border-gray-700 text-white px-4 py-2.5 rounded-xl text-xs font-semibold hover:border-cyan-400 hover:text-cyan-400 transition"
                >
                  <FaGithub /> GitHub
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}

export default Home;
