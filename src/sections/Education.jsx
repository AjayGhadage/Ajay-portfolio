import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import {
  FaGraduationCap,
  FaCertificate,
  FaCode,
  FaTrophy,
} from "react-icons/fa";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

function Education() {
  const [activeCert, setActiveCert] = useState(null);

  /* -------------------- Live LeetCode -------------------- */
  const fallbackLeetcode = {
    status: "success",
    totalSolved: 100,
    totalQuestions: 3300,
    easySolved: 52,
    totalEasy: 850,
    mediumSolved: 42,
    totalMedium: 1750,
    hardSolved: 6,
    totalHard: 700,
    acceptanceRate: 64.8,
    ranking: 284500
  };

  const [leetcodeData, setLeetcodeData] = useState(fallbackLeetcode);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://leetcode-stats-api.vercel.app/Ajya_Ghadage")
      .then((res) => res.json())
      .then((data) => {
        if (data && data.status === "success" && data.totalSolved > 0) {
          setLeetcodeData(data);
        }
        setLoading(false);
      })
      .catch(() => {
        setLeetcodeData(fallbackLeetcode);
        setLoading(false);
      });
  }, []);

  return (
    <section id="education" className="py-24 relative overflow-hidden bg-[#020617] text-white">
      {/* THE FOUNDATION: THEMED BACKGROUND */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:100px_100px]"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
        
        {/* Structural Blueprint Lines */}
        <div className="absolute top-0 left-[20%] w-px h-full bg-cyan-500/20 shadow-[0_0_15px_rgba(34,211,238,0.2)]" />
        <div className="absolute top-[30%] left-0 w-full h-px bg-purple-500/10" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">

        {/* ================= HEADING ================= */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold text-center mb-20"
        >
          Education &{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Achievements
          </span>
        </motion.h2>

        <div className="space-y-12">

        {/* ================= TIMELINE CONTAINER ================= */}
        <div className="relative border-l border-gray-800 ml-4 md:ml-8 pl-8 md:pl-12 space-y-12">
          
          {/* ================= ENGINEERING ================= */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="relative"
          >
            {/* Timeline Dot (Perfectly Centered) */}
            <div className="absolute -left-[33px] md:-left-[49px] top-2 w-4 h-4 md:w-5 md:h-5 rounded-full bg-cyan-400 border-4 border-black shadow-[0_0_15px_rgba(34,211,238,0.5)]"></div>
            <div className="bg-gray-900/40 p-6 md:p-8 rounded-2xl border border-gray-800 hover:border-cyan-400/40 transition group">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                <div className="flex items-center gap-3">
                  <FaGraduationCap className="text-cyan-400 text-2xl" />
                  <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                    B.E. Computer Engineering
                  </h3>
                </div>
                <span className="text-gray-500 text-sm font-medium">2023 — Present</span>
              </div>
              <p className="text-gray-400 text-sm md:text-base mb-4 font-medium">
                Savitribai Phule Pune University (SPPU)
              </p>
              <div className="flex flex-wrap gap-3 mt-4 text-sm">
                <span className="bg-cyan-500/10 text-cyan-400 px-4 py-1.5 rounded-full border border-cyan-400/30 font-semibold">
                  9.5 CGPA (Overall)
                </span>
                <span className="bg-purple-500/10 text-purple-400 px-4 py-1.5 rounded-full border border-purple-400/30 font-semibold">
                   Academic Top Tier
                </span>
              </div>
            </div>
          </motion.div>

          {/* ================= 12TH ================= */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="relative"
          >
            {/* Timeline Dot */}
            <div className="absolute -left-[33px] md:-left-[49px] top-2 w-4 h-4 md:w-5 md:h-5 rounded-full bg-green-400 border-4 border-black"></div>
            <div className="bg-gray-900/40 p-6 md:p-8 rounded-2xl border border-gray-800 hover:border-green-400/40 transition">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                <h3 className="text-xl font-bold text-white uppercase tracking-tight">Higher Secondary (12th)</h3>
                <span className="text-gray-500 text-sm font-medium">2023</span>
              </div>
              <p className="text-gray-400 text-sm md:text-base font-medium">YC College, Karad</p>
              <div className="flex items-center gap-2 mt-3">
                 <span className="text-green-400 font-bold">76.60%</span>
                 <span className="text-gray-600 text-xs uppercase tracking-widest font-bold">— Science Stream</span>
              </div>
            </div>
          </motion.div>

          {/* ================= 10TH ================= */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="relative"
          >
            {/* Timeline Dot */}
            <div className="absolute -left-[33px] md:-left-[49px] top-2 w-4 h-4 md:w-5 md:h-5 rounded-full bg-yellow-400 border-4 border-black"></div>
            <div className="bg-gray-900/40 p-6 md:p-8 rounded-2xl border border-gray-800 hover:border-yellow-400/40 transition">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                <h3 className="text-xl font-bold text-white uppercase tracking-tight">Secondary (10th)</h3>
                <span className="text-gray-500 text-sm font-medium">2021</span>
              </div>
              <p className="text-gray-400 text-sm md:text-base font-medium">SVN Nimsod</p>
              <div className="flex items-center gap-2 mt-3">
                 <span className="text-yellow-400 font-bold">88.60%</span>
                 <span className="text-gray-600 text-xs uppercase tracking-widest font-bold">— Matriculation</span>
              </div>
            </div>
          </motion.div>
        </div>

          {/* ================= ACHIEVEMENTS ================= */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-gray-900 p-8 rounded-2xl border border-gray-800 hover:border-purple-400/40 transition"
          >
            <div className="flex items-center gap-3 mb-6">
              <FaTrophy className="text-purple-400 text-xl" />
              <h3 className="text-xl font-semibold uppercase tracking-widest text-cyan-400">Achievements</h3>
            </div>
            <ul className="space-y-4 text-gray-300 text-sm">
              <li className="flex items-center gap-2">🎓 <span>Qualified GATE 2026 with strong CS fundamentals</span></li>
              <li className="flex items-center gap-2">🏆 <span>Academic 3rd Topper - FE (JSPM Nakshatra 2k25)</span></li>
              <li className="flex items-center gap-2">🏆 <span>VYOMA 2026 - National Level Prototype Competition</span></li>
              <li className="flex items-center gap-2">🏆 <span>Smart India Hackathon – Waitlist Rank 6</span></li>
              <li className="flex items-center gap-2">📊 <span>Solved 100+ DSA problems on LeetCode</span></li>
              <li className="flex items-center gap-2">🎯 <span>Built multiple real-world MERN + ML projects</span></li>
            </ul>
          </motion.div>

          {/* ================= CERTIFICATIONS (High-Visibility Grid) ================= */}
          <div className="space-y-10">
            <div className="flex items-center gap-3">
              <FaCertificate className="text-cyan-400 text-xl" />
              <h3 className="text-xl font-semibold uppercase tracking-widest text-cyan-400">Certifications</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { id: "mern", title: "MERN Stack Development", img: "/mern.png", border: "hover:border-blue-400/40" },
                { id: "talent", title: "Talent Battle (Java & DSA)", img: "/talent.png", border: "hover:border-cyan-400/40" },
                { id: "synapse", title: "Synapse Hackathon", img: "/shackathon.png", border: "hover:border-green-400/40" },
                { id: "topper", title: "Academic 3rd Topper", img: "/colorprint-2025.png", border: "hover:border-yellow-400/40" },
                { id: "vyoma", title: "VYOMA National Prototype", img: "/vyoma.png", border: "hover:border-red-400/40" },
              ].map((cert, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  onClick={() => setActiveCert(cert.id)}
                  className={`group relative bg-gray-900/40 backdrop-blur-sm p-5 rounded-3xl border border-gray-800 ${cert.border} transition-all duration-500 cursor-pointer overflow-hidden hover:shadow-[0_20px_50px_rgba(34,211,238,0.05)]`}
                >
                  <h3 className="text-sm font-bold mb-4 text-gray-400 group-hover:text-cyan-400 transition-colors uppercase tracking-wider">{cert.title}</h3>
                  <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-gray-950">
                    <img
                      src={cert.img}
                      alt={cert.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-[2px]">
                       <span className="bg-white/10 border border-white/20 px-4 py-2 rounded-full text-xs font-bold text-white backdrop-blur-md">View Certificate</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

                 {/* ================= LEETCODE ================= */}
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-gray-900 via-gray-900 to-gray-950 p-12 rounded-2xl border border-gray-800 shadow-xl"
            >
            <div className="flex items-center gap-3 mb-12">
                <FaCode className="text-red-400 text-xl" />
                <h3 className="text-2xl font-semibold tracking-wide">
                Competitive Coding Dashboard
                </h3>
            </div>

            {loading && (
                <p className="text-gray-400 text-center">Fetching live coding stats...</p>
            )}

            {leetcodeData && leetcodeData.totalSolved > 0 && (
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                {/* ===== LEFT: Donut Chart with Neon Glow ===== */}
                <div className="relative h-80 flex items-center justify-center">
                    {/* Background Glow */}
                    <div className="absolute w-64 h-64 bg-red-500/10 rounded-full blur-[80px]"></div>
                    
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Pie
                                data={[
                                    { name: "Easy", value: leetcodeData.easySolved },
                                    { name: "Medium", value: leetcodeData.mediumSolved },
                                    { name: "Hard", value: leetcodeData.hardSolved },
                                ]}
                                cx="50%"
                                cy="50%"
                                innerRadius={85}
                                outerRadius={115}
                                paddingAngle={8}
                                dataKey="value"
                                stroke="none"
                            >
                                <Cell fill="#22c55e" className="drop-shadow-[0_0_8px_rgba(34,197,94,0.4)]" /> 
                                <Cell fill="#facc15" className="drop-shadow-[0_0_8px_rgba(250,204,21,0.4)]" /> 
                                <Cell fill="#a855f7" className="drop-shadow-[0_0_8px_rgba(168,85,247,0.4)]" /> 
                            </Pie>
                            <Tooltip
                                contentStyle={{
                                    backgroundColor: "rgba(17, 24, 39, 0.9)",
                                    borderRadius: "12px",
                                    border: "1px solid rgba(255,255,255,0.1)",
                                    backdropFilter: "blur(10px)",
                                }}
                            />
                        </PieChart>
                    </ResponsiveContainer>

                    {/* Center Text with Glow */}
                    <div className="absolute flex flex-col items-center justify-center animate-pulse-slow">
                        <span className="text-5xl font-black text-red-400 drop-shadow-[0_0_15px_rgba(248,113,113,0.6)]">
                            {leetcodeData.totalSolved}
                        </span>
                        <span className="text-[10px] text-gray-400 uppercase tracking-[0.2em] font-medium mt-1">
                            Total Solved
                        </span>
                    </div>
                </div>

                {/* ===== RIGHT: Detailed Stats & Progress Bars ===== */}
                <div className="space-y-8">
                    {/* Glass Cards */}
                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10 hover:border-purple-500/40 transition-all group">
                            <p className="text-gray-400 text-xs uppercase tracking-wider mb-2">Global Rank</p>
                            <p className="text-2xl font-bold text-white group-hover:text-purple-400 transition-colors">
                                #{leetcodeData.ranking.toLocaleString()}
                            </p>
                        </div>
                        <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10 hover:border-cyan-500/40 transition-all group">
                            <p className="text-gray-400 text-xs uppercase tracking-wider mb-2">Acceptance</p>
                            <p className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                                {leetcodeData.acceptanceRate || "0"}%
                            </p>
                        </div>
                    </div>

                    {/* Difficulty Progress Bars */}
                    <div className="space-y-6 pt-4">
                        {[
                            { label: "Easy", solved: leetcodeData.easySolved, total: leetcodeData.totalEasy, color: "bg-green-500", text: "text-green-400" },
                            { label: "Medium", solved: leetcodeData.mediumSolved, total: leetcodeData.totalMedium, color: "bg-yellow-500", text: "text-yellow-400" },
                            { label: "Hard", solved: leetcodeData.hardSolved, total: leetcodeData.totalHard, color: "bg-purple-500", text: "text-purple-400" },
                        ].map((dev, i) => (
                            <div key={i} className="space-y-2">
                                <div className="flex justify-between text-sm font-medium">
                                    <span className={dev.text}>{dev.label}</span>
                                    <span className="text-gray-400">{dev.solved} <span className="text-gray-600">/ {dev.total}</span></span>
                                </div>
                                <div className="h-2 w-full bg-gray-800 rounded-full overflow-hidden">
                                    <motion.div 
                                        initial={{ width: 0 }}
                                        whileInView={{ width: `${(dev.solved / dev.total) * 100}%` }}
                                        transition={{ duration: 1.5, ease: "easeOut" }}
                                        className={`h-full ${dev.color} rounded-full shadow-[0_0_10px_rgba(255,255,255,0.1)]`}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                </div>
            )}

            <div className="mt-16 text-center">
                <a
                    href="https://leetcode.com/Ajya_Ghadage"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-red-400/10 text-red-400 border border-red-400/20 hover:bg-red-400 hover:text-black transition-all font-semibold"
                >
                    View Full LeetCode Profile →
                </a>
            </div>
            </motion.div>

        </div>
      </div>

      {/* ================= MODAL ================= */}
      <AnimatePresence>
        {activeCert && (
          <motion.div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveCert(null)}
          >
            <motion.div
              className="bg-gray-900 p-4 rounded-xl max-w-3xl w-full"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={
                  activeCert === "mern"
                    ? "/mern.png"
                    : activeCert === "talent"
                    ? "/talent.png"
                    : activeCert === "topper"
                    ? "/colorprint-2025.png"
                    : activeCert === "vyoma"
                    ? "/vyoma.png"
                    : "/shackathon.png"
                }
                alt="Certificate"
                className="rounded-lg w-full"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Education;