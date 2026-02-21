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

function Education() {
  const [activeCert, setActiveCert] = useState(null);

  /* -------------------- Live LeetCode -------------------- */
  const [leetcodeData, setLeetcodeData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  fetch("https://leetcode-stats-api.vercel.app/Ajya_Ghadage")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      setLeetcodeData(data);
      setLoading(false);
    })
    .catch(() => setLoading(false));
}, []);

  return (
    <section id="education" className="py-24 bg-black text-white">
      <div className="max-w-6xl mx-auto px-6">

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

          {/* ================= ENGINEERING ================= */}
          <motion.div className="bg-gray-900 p-8 rounded-2xl border border-gray-800 hover:border-cyan-400/40 transition">
            <div className="flex items-center gap-3 mb-4">
              <FaGraduationCap className="text-cyan-400 text-xl" />
              <h3 className="text-xl font-semibold">
                B.E. Computer Engineering
              </h3>
            </div>
            <p className="text-gray-400 text-sm">
              Savitribai Phule Pune University (2023 — Present)
            </p>
            <div className="flex flex-wrap gap-3 mt-4 text-sm">
              <span className="bg-cyan-500/10 text-cyan-400 px-4 py-1 rounded-full border border-cyan-400/30">
                10 CGPA (2nd Semester)
              </span>
              <span className="bg-purple-500/10 text-purple-400 px-4 py-1 rounded-full border border-purple-400/30">
                Academic 3rd Topper
              </span>
            </div>
          </motion.div>

          {/* ================= 12TH ================= */}
          <motion.div className="bg-gray-900 p-8 rounded-2xl border border-gray-800 hover:border-green-400/40 transition">
            <h3 className="text-xl font-semibold mb-2">
              12th – YC College, Karad
            </h3>
            <p className="text-gray-400 text-sm">Science Stream — 76.60%</p>
          </motion.div>

          {/* ================= 10TH ================= */}
          <motion.div className="bg-gray-900 p-8 rounded-2xl border border-gray-800 hover:border-yellow-400/40 transition">
            <h3 className="text-xl font-semibold mb-2">
              10th – SVN Nimsod
            </h3>
            <p className="text-gray-400 text-sm">Secured 88.60%</p>
          </motion.div>

          {/* ================= CERTIFICATES ================= */}

          {/* MERN */}
          <motion.div
            onClick={() => setActiveCert("mern")}
            className="bg-gray-900 p-6 rounded-2xl border border-gray-800 hover:border-blue-400/40 transition cursor-pointer group"
          >
            <div className="flex items-center gap-3 mb-4">
              <FaCertificate className="text-blue-400 text-xl" />
              <h3 className="text-lg font-semibold">
                MERN Stack Certification
              </h3>
            </div>
            <img
              src="/mern.png"
              alt="MERN Certificate"
              className="w-full h-48 object-cover rounded-xl transform group-hover:scale-105 transition duration-500"
            />
          </motion.div>

          {/* Talent */}
          <motion.div
            onClick={() => setActiveCert("talent")}
            className="bg-gray-900 p-6 rounded-2xl border border-gray-800 hover:border-cyan-400/40 transition cursor-pointer group"
          >
            <div className="flex items-center gap-3 mb-4">
              <FaCertificate className="text-cyan-400 text-xl" />
              <h3 className="text-lg font-semibold">
                Talent Battle Internship (Java)
              </h3>
            </div>
            <img
              src="/talent.png"
              alt="Talent Certificate"
              className="w-full h-48 object-cover rounded-xl transform group-hover:scale-105 transition duration-500"
            />
          </motion.div>

          {/* Synapse */}
          <motion.div
            onClick={() => setActiveCert("synapse")}
            className="bg-gray-900 p-6 rounded-2xl border border-gray-800 hover:border-green-400/40 transition cursor-pointer group"
          >
            <div className="flex items-center gap-3 mb-4">
              <FaCertificate className="text-green-400 text-xl" />
              <h3 className="text-lg font-semibold">
                Synapse Hackathon Participation
              </h3>
            </div>
            <img
              src="/shackathon.png"
              alt="Synapse Certificate"
              className="w-full h-48 object-cover rounded-xl transform group-hover:scale-105 transition duration-500"
            />
          </motion.div>

          {/* ================= SIH ================= */}
                <motion.div className="bg-gray-900 p-8 rounded-2xl border border-gray-800 hover:border-purple-400/40 transition">
                    <div className="flex items-center gap-3 mb-4">
                    <FaTrophy className="text-purple-400 text-xl" />
                    <h3 className="text-xl font-semibold">
                        Smart India Hackathon (SIH)
                    </h3>
                    </div>
                    <div className="relative inline-block mt-4">
                    <div className="absolute inset-0 rounded-full bg-purple-500 blur-xl opacity-40 animate-pulse"></div>
                    <div className="relative bg-purple-500/10 text-purple-400 px-6 py-2 rounded-full border border-purple-400/40 text-sm font-semibold">
                        Waitlist Rank 6
                    </div>
                    </div>
                </motion.div>

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
                <div className="grid md:grid-cols-2 gap-12 items-center">

                {/* ===== LEFT: Donut Chart ===== */}
                <div className="h-80">
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
                        innerRadius={70}
                        outerRadius={110}
                        paddingAngle={5}
                        dataKey="value"
                        animationDuration={1000}
                        >
                        <Cell fill="#22c55e" />  {/* Green */}
                        <Cell fill="#facc15" />  {/* Yellow */}
                        <Cell fill="#a855f7" />  {/* Purple */}
                        </Pie>

                        <Tooltip
                        contentStyle={{
                            backgroundColor: "#111827",
                            border: "1px solid #374151",
                        }}
                        />
                    </PieChart>
                    </ResponsiveContainer>

                    {/* Center Text */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                    <p className="text-4xl font-bold text-red-400">
                        {leetcodeData.totalSolved}
                    </p>
                    <p className="text-xs text-gray-400 uppercase tracking-wider">
                        Total Solved
                    </p>
                    </div>
                </div>

                {/* ===== RIGHT: Stats Panel ===== */}
                <div className="space-y-8">

                    <div className="bg-gray-800 p-6 rounded-xl border border-purple-400/20">
                    <p className="text-gray-400 text-sm">Global Ranking</p>
                    <p className="text-3xl font-bold text-purple-400 mt-2">
                        #{leetcodeData.ranking}
                    </p>
                    </div>

                    <div className="bg-gray-800 p-6 rounded-xl border border-cyan-400/20">
                    <p className="text-gray-400 text-sm">Acceptance Rate</p>
                    <p className="text-3xl font-bold text-cyan-400 mt-2">
                        {leetcodeData.acceptanceRate}%
                    </p>
                    </div>

                    <div className="space-y-4 text-sm">
                    <div className="flex justify-between">
                        <span className="text-green-400">Easy</span>
                        <span>{leetcodeData.easySolved}</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-yellow-400">Medium</span>
                        <span>{leetcodeData.mediumSolved}</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-purple-400">Hard</span>
                        <span>{leetcodeData.hardSolved}</span>
                    </div>
                    </div>

                </div>
                </div>
            )}

            <div className="mt-12 text-center">
                <a
                href="https://leetcode.com/YOUR_USERNAME"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:text-cyan-300 underline transition"
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