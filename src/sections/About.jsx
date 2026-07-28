import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectCoverflow } from "swiper/modules";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaGraduationCap,
  FaBrain,
  FaRocket,
  FaCheckCircle,
  FaQuoteLeft,
  FaFire,
  FaLaptopCode,
  FaExpand,
  FaTimes,
  FaSearchPlus,
} from "react-icons/fa";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

function About() {
  const [activeStoryTab, setActiveStoryTab] = useState("academic");
  const [selectedGalleryModal, setSelectedGalleryModal] = useState(null);

  const storyTabs = [
    {
      id: "academic",
      label: "Academic Excellence",
      icon: <FaGraduationCap className="text-yellow-400" />,
      title: "Relentless Academic Pursuit & SPPU Topper",
      content:
        "Dedicated to mastering computer engineering, I have consistently maintained top-tier academic performance. By combining deep theoretical discipline with hands-on software development, I secured a 10 CGPA in my first year and hold a 9.5 overall CGPA at Savitribai Phule Pune University (SPPU).",
      highlights: [
        "Maintained 9.5 Overall CGPA at SPPU",
        "Achieved 10 CGPA in 1st Year (College Topper)",
        "Qualified GATE 2026 in Computer Science & Engineering",
      ],
      badgeColor: "from-yellow-500/20 to-amber-500/20 border-yellow-500/30 text-yellow-400",
    },
    {
      id: "builder",
      label: "The Builder Mindset",
      icon: <FaLaptopCode className="text-cyan-400" />,
      title: "Building Production-Grade MERN & AI Solutions",
      content:
        "I specialize in architecting full-stack applications with MERN (MongoDB, Express, React, Node) integrated with AI/ML capabilities. Whether it is automated reimbursement workflows, multimodal loan verification, or smart farming platforms, I focus on scalable backends, clean APIs, and modern visual UI.",
      highlights: [
        "6+ Full-Stack & AI Projects Deployed",
        "REST API & Database Optimization Expert",
        "2 Internships in Full-Stack Development & DSA",
      ],
      badgeColor: "from-cyan-500/20 to-blue-500/20 border-cyan-500/30 text-cyan-400",
    },
    {
      id: "dsa",
      label: "Problem Solving & CS",
      icon: <FaBrain className="text-purple-400" />,
      title: "Strong CS Fundamentals & Algorithmic Thinking",
      content:
        "Computer science is more than writing code—it is about efficiency, data structures, and foundational principles. Having qualified GATE 2026, I possess a strong conceptual framework in Operating Systems, DBMS, Computer Networks, and Data Structures alongside solving 100+ LeetCode problems.",
      highlights: [
        "Qualified GATE 2026 in Computer Science",
        "100+ LeetCode DSA Problems Solved",
        "National Level Hackathon Participant (SIH Waitlist Rank 6)",
      ],
      badgeColor: "from-purple-500/20 to-pink-500/20 border-purple-500/30 text-purple-400",
    },
  ];

  const galleryImages = [
    { src: "/vyoma_team.jpg", title: "VYOMA Hackathon Team", subtitle: "Innovating Together at VYOMA 2026" },
    { src: "/colorprint-2025.png", title: "Academic Topper Award", subtitle: "JSPM FE 3rd Topper Recognition" },
    { src: "/Gateprt.png", title: "GATE 2026 Rank & Qualification", subtitle: "Computer Science Excellence" },
    { src: "/pandora.png", title: "Pandora Hackathon Showcase", subtitle: "Project Prototype Presentation" },
    { src: "/TeamArya.png", title: "AgriArya Hackathon Team", subtitle: "National Prototype Competition" },
    { src: "/vyoma.png", title: "VYOMA 2026 Certificate", subtitle: "State Innovation Showcase" },
    { src: "/shackathon.png", title: "Synapse Hackathon Certificate", subtitle: "24-Hr Offline Hackathon" },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-[#020617] text-white">
      {/* BACKGROUND GRAPHICS */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-cyan-500/5 blur-[140px] rounded-full pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-purple-500/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(rgba(255,255,255,1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,1)_1px,transparent_1px)] bg-[size:45px_45px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-cyan-400 font-semibold uppercase tracking-[0.25em] text-xs md:text-sm mb-3"
          >
            DISCOVER MY PROFILE
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold"
          >
            About <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">Me</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gray-400 text-sm md:text-base mt-4 leading-relaxed"
          >
            Driven by engineering discipline, strong CS fundamentals, and a passion for turning complex ideas into clean, scalable software.
          </motion.p>
        </div>

        {/* BENTO GRID STATS & STORY HIGHLIGHTS */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-20">

          {/* CARD 1: PROFILE & QUICK METRICS (Col 4) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-4 bg-[#0b1220]/80 backdrop-blur-md border border-cyan-500/20 rounded-3xl p-6 md:p-8 flex flex-col justify-between relative overflow-hidden group shadow-2xl"
          >
            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
              <FaRocket className="text-9xl text-cyan-400" />
            </div>

            <div>
              <div className="relative w-28 h-28 mx-auto mb-6 rounded-full overflow-hidden border-2 border-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.3)]">
                <img src="/Ajay1.png" alt="Ajay Ghadage" className="w-full h-full object-cover" />
              </div>

              <h3 className="text-2xl font-bold text-center text-white">Ajay Ghadage</h3>
              <p className="text-cyan-400 text-xs font-semibold text-center uppercase tracking-wider mt-1">
                Computer Engineering Student
              </p>
              <p className="text-gray-400 text-xs text-center mt-3 leading-relaxed">
                Savitribai Phule Pune University (SPPU) • Class of 2027
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 mt-6 pt-6 border-t border-gray-800/80 text-center">
              <div className="bg-white/5 p-3 rounded-2xl border border-white/5">
                <p className="text-cyan-400 text-lg font-extrabold">9.5</p>
                <p className="text-[10px] text-gray-400 uppercase tracking-wider mt-0.5">Overall CGPA</p>
              </div>
              <div className="bg-white/5 p-3 rounded-2xl border border-white/5">
                <p className="text-purple-400 text-lg font-extrabold">100+</p>
                <p className="text-[10px] text-gray-400 uppercase tracking-wider mt-0.5">LeetCode Solved</p>
              </div>
              <div className="bg-white/5 p-3 rounded-2xl border border-white/5">
                <p className="text-green-400 text-lg font-extrabold">GATE '26</p>
                <p className="text-[10px] text-gray-400 uppercase tracking-wider mt-0.5">CS Qualified</p>
              </div>
              <div className="bg-white/5 p-3 rounded-2xl border border-white/5">
                <p className="text-yellow-400 text-lg font-extrabold">Top 3</p>
                <p className="text-[10px] text-gray-400 uppercase tracking-wider mt-0.5">College Ranker</p>
              </div>
            </div>
          </motion.div>

          {/* CARD 2: INTERACTIVE STORY TABS (Col 8) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-8 bg-[#0b1220]/80 backdrop-blur-md border border-gray-800 rounded-3xl p-6 md:p-8 flex flex-col justify-between shadow-2xl relative"
          >
            {/* Story Navigation Pills */}
            <div className="flex flex-wrap gap-3 mb-6">
              {storyTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveStoryTab(tab.id)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold tracking-wide transition-all duration-300 ${
                    activeStoryTab === tab.id
                      ? "bg-gradient-to-r from-cyan-400 to-blue-500 text-black shadow-[0_0_15px_rgba(34,211,238,0.3)]"
                      : "bg-white/5 border border-gray-800 text-gray-400 hover:text-white hover:border-gray-700"
                  }`}
                >
                  {tab.icon}
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>

            {/* Active Story Content with Smooth Animation */}
            <AnimatePresence mode="wait">
              {storyTabs
                .filter((t) => t.id === activeStoryTab)
                .map((tab) => (
                  <motion.div
                    key={tab.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="flex-grow flex flex-col justify-between space-y-6"
                  >
                    <div>
                      <span className={`inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest bg-gradient-to-r ${tab.badgeColor} border mb-3`}>
                        Focus: {tab.label}
                      </span>
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                        {tab.title}
                      </h3>
                      <p className="text-gray-300 text-sm md:text-base leading-relaxed font-light">
                        {tab.content}
                      </p>
                    </div>

                    <div className="bg-[#070c17]/90 p-5 rounded-2xl border border-gray-800/80 space-y-2.5">
                      <p className="text-xs font-bold uppercase tracking-wider text-cyan-400 mb-2 flex items-center gap-2">
                        <FaFire /> Key Highlights
                      </p>
                      {tab.highlights.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-3 text-xs md:text-sm text-gray-300">
                          <FaCheckCircle className="text-cyan-400 flex-shrink-0 text-sm" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
            </AnimatePresence>
          </motion.div>

        </div>

        {/* MOTTO QUOTE BANNER */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative max-w-4xl mx-auto mb-24 text-center"
        >
          <div className="p-[1px] bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 rounded-3xl shadow-[0_10px_30px_rgba(34,211,238,0.15)]">
            <div className="bg-[#040d21]/95 backdrop-blur-xl px-8 py-8 md:py-10 rounded-[23px] relative overflow-hidden">
              <FaQuoteLeft className="absolute top-4 left-6 text-cyan-500/10 text-6xl" />
              <p className="text-lg md:text-2xl font-light text-white italic tracking-wide leading-relaxed relative z-10">
                "Relax and discover the world of opportunities"
              </p>
              <p className="text-xs uppercase tracking-[0.2em] font-semibold text-cyan-400 mt-4 relative z-10">
                — Personal Engineering Philosophy
              </p>
            </div>
          </div>
        </motion.div>

        {/* 3D HIGHLIGHTED JOURNEY GALLERY */}
        <div className="relative max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-cyan-400 text-xs font-bold uppercase tracking-widest">Visual Showcase</span>
            <h3 className="text-2xl md:text-3xl font-extrabold text-white mt-1">
              Achievements & Milestone Highlights
            </h3>
            <p className="text-gray-400 text-xs mt-2">
              (Click any certificate to expand in high-definition)
            </p>
          </div>

          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 25,
              stretch: 0,
              depth: 180,
              modifier: 1,
              slideShadows: true,
            }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            loop={true}
            pagination={{ clickable: true, dynamicBullets: true }}
            modules={[Autoplay, Pagination, EffectCoverflow]}
            className="mySwiper w-full py-8"
          >
            {galleryImages.map((img, index) => (
              <SwiperSlide
                key={index}
                onClick={() => setSelectedGalleryModal(img)}
                className="w-[290px] h-[400px] md:w-[450px] md:h-[540px] rounded-3xl border border-cyan-500/30 overflow-hidden shadow-2xl bg-[#060b17] relative group cursor-pointer flex flex-col justify-between"
              >
                {/* Header Badge */}
                <div className="px-4 py-2.5 bg-[#0b1220] border-b border-gray-800 flex items-center justify-between z-10">
                  <span className="bg-cyan-500/10 text-cyan-400 text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full border border-cyan-500/20">
                    Milestone 0{index + 1}
                  </span>
                  <span className="text-[10px] text-gray-400 flex items-center gap-1 font-semibold group-hover:text-cyan-400 transition-colors">
                    <FaSearchPlus /> Click to View
                  </span>
                </div>

                {/* Main Image Container with Object-Contain (No Cropping!) */}
                <div className="relative flex-grow w-full bg-[#020617] p-2 flex items-center justify-center overflow-hidden">
                  <img
                    src={img.src}
                    alt={img.title}
                    className="max-w-full max-h-full object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                  
                  {/* Subtle Hover Lens Overlay */}
                  <div className="absolute inset-0 bg-cyan-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                    <div className="p-3 bg-cyan-500 text-black rounded-full shadow-lg">
                      <FaExpand className="text-base" />
                    </div>
                  </div>
                </div>

                {/* Sleek Non-Overlapping Footer */}
                <div className="p-4 bg-[#0b1220] border-t border-gray-800 z-10 text-left">
                  <h4 className="text-white font-bold text-sm md:text-base tracking-wide truncate">
                    {img.title}
                  </h4>
                  <p className="text-gray-400 text-xs mt-0.5 font-medium truncate">
                    {img.subtitle}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>

      {/* FULL-SCREEN CERTIFICATE LIGHTBOX MODAL */}
      <AnimatePresence>
        {selectedGalleryModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedGalleryModal(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 md:p-8"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#0b1220] border border-cyan-500/40 rounded-3xl max-w-4xl w-full max-h-[92vh] overflow-hidden flex flex-col shadow-2xl relative"
            >
              {/* Modal Header */}
              <div className="p-5 border-b border-gray-800 flex items-center justify-between bg-[#060b17]">
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-white">
                    {selectedGalleryModal.title}
                  </h3>
                  <p className="text-xs text-cyan-400 font-semibold mt-0.5">
                    {selectedGalleryModal.subtitle}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedGalleryModal(null)}
                  className="p-2.5 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 transition duration-200"
                >
                  <FaTimes className="text-lg" />
                </button>
              </div>

              {/* High-Resolution Certificate View */}
              <div className="flex-grow p-4 md:p-6 bg-[#020617] flex items-center justify-center overflow-auto">
                <img
                  src={selectedGalleryModal.src}
                  alt={selectedGalleryModal.title}
                  className="max-w-full max-h-[72vh] object-contain rounded-xl border border-gray-800 shadow-2xl"
                />
              </div>

              {/* Modal Footer */}
              <div className="p-4 border-t border-gray-800 bg-[#060b17] flex justify-between items-center text-xs text-gray-400">
                <span>Verified Achievement & Certificate Document</span>
                <button
                  onClick={() => setSelectedGalleryModal(null)}
                  className="px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-500 hover:text-black transition"
                >
                  Close Preview
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default About;