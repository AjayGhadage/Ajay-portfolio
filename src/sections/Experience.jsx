import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FaCalendarAlt, FaMapMarkerAlt, FaBriefcase, FaCertificate, FaTimes } from "react-icons/fa";

function Experience() {
  const [selectedCert, setSelectedCert] = useState(null);

  const experiences = [
    {
      role: "Full Stack Developer Intern",
      company: "BrightPath Horizon",
      duration: "February 2026 - April 2026",
      location: "Remote",
      certImg: "/mern.png",
      description: [
        "Developed MERN applications implementing authentication, RBAC, and API integrations.",
        "Designed scalable REST APIs handling structured data and improving system performance.",
        "Reduced API response time by refining backend logic and indexing strategies."
      ],
      skills: ["React", "Node.js", "Express", "MongoDB", "AuthCore", "REST APIs"]
    },
    {
      role: "Java & DSA Intern",
      company: "Talent Battle Pvt. Ltd.",
      duration: "July 1, 2025 - July 30, 2025",
      location: "Offline (In-Person)",
      certImg: "/talent.png",
      description: [
        "Completed an intensive offline internship program focused on Java and advanced Data Structures & Algorithms.",
        "Solves complex algorithmic problems and optimized code for better time and space complexity.",
        "Gained hands-on experience in object-oriented programming (OOP) and problem-solving techniques.",
        "Applied DSA concepts to real-world scenarios and improved logical thinking through rigorous training."
      ],
      skills: ["Java", "Data Structures", "Algorithms", "OOP", "Problem Solving"]
    }
  ];

  return (
    <section 
      id="experience" 
      className="py-24 relative overflow-hidden bg-[#020617]"
    >
      {/* THE TIMELINE: THEMED BACKGROUND */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
        
        {/* Vertical Data Flow Lines */}
        <div className="absolute inset-0 flex justify-around px-20">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ scaleY: 0, opacity: 0 }}
              whileInView={{ scaleY: 1, opacity: 1 }}
              transition={{ duration: 1.5, delay: i * 0.1 }}
              className="w-px h-full bg-gradient-to-b from-transparent via-cyan-500/20 to-transparent origin-top"
            />
          ))}
        </div>
        
        {/* Glowing Data Nodes */}
        <div className="absolute top-1/4 right-[10%] w-64 h-64 bg-cyan-400/5 blur-[80px] rounded-full" />
        <div className="absolute bottom-1/4 left-[5%] w-80 h-80 bg-purple-500/5 blur-[100px] rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-center mb-20 text-white"
        >
          Work <span className="text-cyan-400">Experience</span>
        </motion.h2>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-800 hover:border-cyan-400/30 transition-all group relative overflow-hidden"
            >
              {/* Animated Accent Line */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-cyan-500 scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top" />

              <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {exp.role}
                  </h3>
                  <div className="flex items-center gap-2 text-gray-400 mt-1">
                    <FaBriefcase className="text-sm" />
                    <span className="font-medium">{exp.company}</span>
                  </div>
                </div>
                <div className="mt-4 md:mt-0 text-right flex flex-col items-start md:items-end gap-1">
                  <div className="flex items-center gap-2 text-cyan-400 font-medium text-sm">
                    <FaCalendarAlt />
                    <span>{exp.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-500 text-xs mt-0.5">
                    <FaMapMarkerAlt />
                    <span>{exp.location}</span>
                  </div>
                  {exp.certImg && (
                    <button
                      onClick={() => setSelectedCert(exp)}
                      className="mt-2 text-xs font-bold text-cyan-400 hover:text-white flex items-center gap-1.5 bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20 hover:bg-cyan-500 hover:text-black transition"
                    >
                      <FaCertificate className="text-xs" /> View Certificate
                    </button>
                  )}
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {exp.description.map((point, i) => (
                  <li key={i} className="flex gap-3 text-gray-400 leading-relaxed text-sm">
                    <span className="text-cyan-500 mt-1.5">•</span>
                    {point}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {exp.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-4 py-1.5 rounded-full bg-gray-800/80 border border-gray-700 text-gray-300 text-xs font-medium hover:border-cyan-500/50 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CERTIFICATE MODAL */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#0b1220] border border-cyan-500/30 rounded-3xl max-w-3xl w-full p-6 shadow-2xl relative"
            >
              <div className="flex justify-between items-center pb-4 mb-4 border-b border-gray-800">
                <div>
                  <h3 className="text-lg font-bold text-white">{selectedCert.role} Certificate</h3>
                  <p className="text-xs text-cyan-400">{selectedCert.company} • Verified Document</p>
                </div>
                <button
                  onClick={() => setSelectedCert(null)}
                  className="p-2 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white"
                >
                  <FaTimes />
                </button>
              </div>

              <div className="rounded-2xl overflow-hidden border border-gray-800 bg-black max-h-[70vh] flex items-center justify-center">
                <img
                  src={selectedCert.certImg}
                  alt={`${selectedCert.company} certificate`}
                  className="max-w-full max-h-[65vh] object-contain"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Experience;
