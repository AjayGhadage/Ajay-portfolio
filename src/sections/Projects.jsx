import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaPlay, FaImage, FaSearch, FaTimes, FaExpand } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProjectModal, setSelectedProjectModal] = useState(null);

  const filterTabs = [
    { id: "all", label: "All Projects" },
    { id: "mern", label: "MERN Stack" },
    { id: "ai-ml", label: "AI / ML & Python" },
  ];

  const projects = [
    {
      title: "HireSense – Cloud-Native AI Recruitment Platform",
      category: "ai-ml",
      tech: [
        "React.js",
        "Node.js",
        "Express.js",
        "PostgreSQL",
        "Docker",
        "AWS ECS Fargate",
        "AWS ALB",
        "Amazon RDS",
        "AWS Secrets Manager",
        "CloudWatch"
      ],
      description: [
        "Engineered a cloud-native recruitment platform with AI-driven candidate ranking and secure JWT authentication",
        "Containerised the backend with Docker and deployed on AWS ECS Fargate behind an Application Load Balancer (ALB), providing a stable zero-downtime URL independent of ephemeral Fargate task IPs",
        "Provisioned end-to-end AWS infrastructure: Amazon RDS (PostgreSQL), ECR, Secrets Manager, CloudWatch, and least-privilege IAM roles",
        "Migrated sensitive credentials (DB password, JWT secret) from plain-text env vars into AWS Secrets Manager, injected securely at container startup",
        "Hosted the React/Vite frontend on Amazon S3; wired VITE API URL to the stable ALB DNS for reliable cross-origin API routing"
      ],
      metrics: [
        "AWS ECS Fargate",
        "Zero-Downtime ALB",
        "AWS Secrets Manager",
        "Amazon RDS PostgreSQL",
        "Amazon S3 Hosting"
      ],
      github: "https://github.com/AjayGhadage/HireSense.git",
      live: null,
      images: [],
      video: null,
      featured: true
    },

    {
      title: "Smart Reimbursement Management System",
      category: "mern",
      tech: ["MERN", "Machine Learning", "MongoDB", "Node.js"],
      description: [
        "Built role-based workflow (Employee → Manager → Admin)",
        "Implemented validation, real-time tracking, and receipt uploads",
        "Integrated ML-based anomaly detection",
        "Designed scalable backend using REST APIs"
      ],
      metrics: [
        "Reduced manual work by 40%",
        "Real-time tracking",
        "Improved efficiency"
      ],
      github: "https://github.com/AjayGhadage/Reimbursement_management_-27",
      live: "https://reimbursement-management-27.vercel.app/",
      images: [
        "/projects/ReimbursementManagement/reimbursement-1.png",
        "/projects/ReimbursementManagement/reimbursement-2.png",
        "/projects/ReimbursementManagement/reimbursement-3.png",
        "/projects/ReimbursementManagement/reimbursement-4.png",
        "/projects/ReimbursementManagement/reimbursement-5.png",
        "/projects/ReimbursementManagement/reimbursement-6.png",
        "/projects/ReimbursementManagement/reimbursement-7.png"
      ],
      video: "https://www.youtube.com/watch?v=RylFnSKugUI",
      featured: true
    },

    {
      title: "AgriArya – Smart Farming Platform",
      category: "mern",
      tech: ["MERN", "Machine Learning", "AI Chatbot"],
      description: [
        "Built crop recommendation and disease prediction system",
        "Integrated AI chatbot for farmer assistance",
        "Real-time market insights dashboard"
      ],
      metrics: ["AI-based insights", "Real-time data", "Smart farming"],
      github: "https://github.com/AjayGhadage/AgriArya",
      live: "https://agritech-tan.vercel.app/auth",
      images: [
        "/projects/AgriArya/agriarya-1.png",
        "/projects/AgriArya/agriarya-2.png",
        "/projects/AgriArya/agriarya-3.png",
        "/projects/AgriArya/agriarya-4.png",
        "/projects/AgriArya/agriarya-5.png",
        "/projects/AgriArya/agriarya-6.png",
        "/projects/AgriArya/agriarya-7.png",
        "/projects/AgriArya/agriarya-8.png"
      ],
      video: "https://www.youtube.com/watch?v=J2Y1juKwXpw",
      featured: false
    },

    {
      title: "LendSecure – AI-Powered Loan Verification System",
      category: "ai-ml",
      tech: ["MERN", "AI/ML", "Computer Vision", "Speech Processing", "LLM"],
      description: [
        "Built a production-grade loan onboarding system for fraud detection and identity verification",
        "Implemented multimodal AI pipeline integrating vision, speech, and LLM-based analysis",
        "Designed real-time video-based identity verification with liveness detection",
        "Generated forensic digital audit logs for every decision to ensure transparency"
      ],
      metrics: [
        "Fraud detection system",
        "Real-time identity verification",
        "Multimodal AI pipeline",
        "Paperless onboarding"
      ],
      github: "https://github.com/AjayGhadage/LendSecure",
      live: "#",
      images: [
        "/projects/lendsecure/lendsecure-1.png",
        "/projects/lendsecure/lendsecure-2.png",
        "/projects/lendsecure/lendsecure-4.png",
        "/projects/lendsecure/lensecure-5.png"
      ],
      video: "https://www.youtube.com/watch?v=29pgM1jR_bc",
      featured: true
    },

    {
      title: "AI-Based MindMap & Mood Prediction",
      category: "ai-ml",
      tech: ["Python", "AI/ML", "React"],
      description: [
        "NLP-based mood classification system",
        "Generated structured mind-map insights",
        "Automated emotional analysis"
      ],
      metrics: ["NLP model", "Emotion detection", "Visualization"],
      github: "https://github.com/AjayGhadage/Mind-Map",
      images: [
        "/projects/Mindmep/mindmep-1.png",
        "/projects/Mindmep/mindmep-2.png",
        "/projects/Mindmep/mindmep-3.png",
      ],
      video: "https://www.youtube.com/watch?v=ibPD8Z-nFBY",
      featured: false
    },

    {
      title: "Hostel Recommendation System",
      category: "ai-ml",
      tech: ["ML", "Python", "MERN"],
      description: [
        "ML-based recommendation engine",
        "Feature engineering and preprocessing",
        "Full-stack booking system"
      ],
      metrics: ["Personalized results", "Full-stack", "Efficient search"],
      github: "https://github.com/AjayGhadage/Hostel-Recommendation-ML-Project",
      images: [
        "/projects/hostel_management/hb1.png",
        "/projects/hostel_management/hb2.png",
        "/projects/hostel_management/hb3.png"
      ],
      video: "https://www.youtube.com/watch?v=tEX1JDsY8kE",
      featured: false
    },

    {
      title: "SchemeMate – Government Scheme Portal",
      category: "mern",
      tech: ["Node.js", "Express.js", "MongoDB", "Passport.js", "Multer"],
      description: [
        "Developed a centralized portal to provide government scheme information across agriculture, education, and healthcare",
        "Implemented secure authentication and role-based access control (RBAC) using Passport.js",
        "Built scalable REST APIs and optimized MongoDB data models for fast data retrieval",
        "Integrated secure document upload functionality using Multer for user verification"
      ],
      metrics: [
        "Secure authentication system",
        "RBAC-based access control",
        "Optimized backend performance",
        "Efficient data retrieval"
      ],
      github: "https://github.com/AjayGhadage/SchemeMate",
      live: null,
      images: [
        "/projects/Scememate/sm1.png",
        "/projects/Scememate/sm2.png",
        "/projects/Scememate/sm3.png",
        "/projects/Scememate/sm4.png",
        "/projects/Scememate/sm5.png",
        "/projects/Scememate/sm6.png",
        "/projects/Scememate/sm7.png",
        "/projects/Scememate/sm8.png",
        "/projects/Scememate/sm9.png",
      ],
      video: null,
      featured: false
    }
  ];

  const filteredProjects = projects.filter((project) => {
    const matchesCategory = activeFilter === "all" || project.category === activeFilter;
    const q = searchQuery.toLowerCase().trim();
    const matchesSearch =
      !q ||
      project.title.toLowerCase().includes(q) ||
      project.tech.some((t) => t.toLowerCase().includes(q)) ||
      project.description.some((d) => d.toLowerCase().includes(q));
    return matchesCategory && matchesSearch;
  });

  // Sorting featured projects first
  const sortedProjects = [...filteredProjects].sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-[#020617] text-white">
      {/* THE SHOWCASE: THEMED BACKGROUND */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-cyan-500/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-500/5 blur-[120px] rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(34,211,238,0.03),transparent_70%)] opacity-70" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <p className="text-cyan-400 uppercase tracking-widest text-sm mb-3">SHOWCASE</p>
            <h2 className="text-4xl md:text-5xl font-bold">
              My Featured <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Projects</span>
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 self-start md:self-auto w-full md:w-auto">
            {/* Search Input Bar */}
            <div className="relative flex-1 sm:w-64">
              <FaSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-xs" />
              <input
                type="text"
                placeholder="Search projects or tech..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#0b1220]/80 border border-gray-800 rounded-full pl-9 pr-8 py-2.5 text-xs text-gray-200 focus:outline-none focus:border-cyan-400/50 transition duration-300"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white text-xs"
                >
                  <FaTimes />
                </button>
              )}
            </div>

            {/* Filter tabs */}
            <div className="flex bg-[#0f172a]/60 backdrop-blur-md p-1.5 rounded-full border border-gray-800 overflow-x-auto max-w-full">
              {filterTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveFilter(tab.id)}
                  className={`relative px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition duration-300 whitespace-nowrap ${
                    activeFilter === tab.id
                      ? "text-[#020617] font-bold"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  {activeFilter === tab.id && (
                    <motion.div
                      layoutId="activeProjectTab"
                      className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full z-0"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{tab.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-10"
        >
          <AnimatePresence mode="popLayout">
            {sortedProjects.map((project) => (
              <motion.div
                layout
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                whileHover={{ y: -5 }}
                className={`relative flex flex-col rounded-3xl p-6 md:p-8 transition-all duration-500 overflow-hidden group
                  ${project.featured
                    ? "md:col-span-2 bg-gradient-to-br from-cyan-950/20 via-[#030a1c] to-purple-950/20 border border-cyan-500/25 shadow-[0_4px_30px_rgba(34,211,238,0.06)] hover:border-cyan-400/40 hover:shadow-cyan-400/10"
                    : "bg-[#0b1220]/60 backdrop-blur-sm border border-gray-800/80 hover:border-cyan-500/30 hover:shadow-cyan-500/5"
                  }`}
              >
                {/* Project Badge */}
                {project.featured && (
                  <span className="absolute top-0 right-0 px-4 py-1.5 bg-gradient-to-r from-cyan-400 to-blue-500 text-black text-[10px] font-black uppercase tracking-widest rounded-bl-2xl z-20 shadow-[0_2px_10px_rgba(0,0,0,0.3)]">
                    Featured
                  </span>
                )}

                {/* MEDIA VIEW (Visual Showcase Container) */}
                <div className="relative w-full pt-[56.25%] mb-6 overflow-hidden rounded-2xl bg-gray-950 border border-gray-800 shadow-2xl group-hover:border-cyan-500/20 transition-colors duration-500">
                  <div className="absolute inset-0">
                    {/* If no media at all, show a placeholder */}
                    {!project.video && (!project.images || project.images.length === 0) ? (
                      <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-[#0a1628] to-[#060b17] border border-dashed border-cyan-500/20 rounded-2xl gap-3">
                        <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center">
                          <FaImage className="text-cyan-400 text-2xl opacity-50" />
                        </div>
                        <p className="text-cyan-400 text-xs font-bold uppercase tracking-widest opacity-70">Screenshots Coming Soon</p>
                        <p className="text-gray-600 text-[10px] text-center max-w-[200px]">Preview images will be added here</p>
                      </div>
                    ) : (
                    <Swiper
                      modules={[Pagination, Autoplay]}
                      pagination={{ clickable: true }}
                      autoplay={{ delay: 5000, disableOnInteraction: true }}
                      allowTouchMove={true}
                      className="w-full h-full"
                    >
                      {/* Video embed if matches */}
                      {project.video && (
                        <SwiperSlide>
                          <div className="w-full h-full bg-gray-950 flex items-center justify-center relative">
                            <iframe
                              src={project.video.replace("watch?v=", "embed/") + "?enablejsapi=1&origin=http://localhost:5173"}
                              className="w-full h-full border-0 absolute inset-0 z-10"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen
                            ></iframe>
                            <div className="absolute bottom-10 left-4 z-20 bg-black/75 px-3 py-1 rounded-md text-[10px] uppercase font-bold tracking-wider text-cyan-400 flex items-center gap-1.5">
                              <FaPlay className="text-[8px]" /> Video Walkthrough
                            </div>
                          </div>
                        </SwiperSlide>
                      )}

                      {/* Image slideshow */}
                      {project.images?.map((img, i) => (
                        <SwiperSlide key={i}>
                          <div className="w-full h-full relative">
                            <img
                              src={img}
                              className="w-full h-full object-cover select-none"
                              alt={`${project.title} screenshot ${i+1}`}
                              loading="lazy"
                            />
                            <div className="absolute bottom-10 left-4 z-20 bg-black/75 px-3 py-1 rounded-md text-[10px] uppercase font-bold tracking-wider text-cyan-400 flex items-center gap-1.5">
                              <FaImage className="text-xs" /> Screenshot {i+1}
                            </div>
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                    )}
                  </div>
                </div>

                {/* CONTENT DETAIL */}
                <div className="flex-grow flex flex-col">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                    {project.title}
                  </h3>

                  {/* Technology Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((t, i) => (
                      <span key={i} className="text-[9px] font-bold uppercase tracking-widest bg-white/5 border border-white/10 px-2.5 py-1 rounded-md text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-400/20 transition-all duration-300">
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Core Metrics Accomplished */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.metrics?.map((m, i) => (
                      <span key={i} className="text-[9px] font-bold bg-green-500/10 text-green-400 px-2.5 py-1 rounded-md border border-green-500/20 shadow-[0_2px_8px_rgba(34,197,94,0.05)]">
                        ✓ {m}
                      </span>
                    ))}
                  </div>

                  {/* Description List */}
                  <ul className="text-gray-400 text-sm space-y-2.5 mb-8 leading-relaxed text-left flex-grow">
                    {project.description.map((d, i) => (
                      <li key={i} className="flex gap-2.5">
                        <span className="text-cyan-400 mt-1 font-bold">•</span>
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Buttons links */}
                  <div className="grid grid-cols-3 gap-3 mt-auto">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-1.5 py-3 bg-white/5 border border-white/10 rounded-xl text-xs font-semibold text-gray-300 hover:bg-white hover:text-black hover:font-bold transition-all duration-300"
                      >
                        <FaGithub className="text-sm" /> Code
                      </a>
                    )}

                    <button
                      onClick={() => setSelectedProjectModal(project)}
                      className="flex items-center justify-center gap-1.5 py-3 bg-cyan-500/10 border border-cyan-500/30 rounded-xl text-xs font-semibold text-cyan-400 hover:bg-cyan-500 hover:text-black transition-all duration-300"
                    >
                      <FaExpand className="text-xs" /> Details
                    </button>

                    {project.live && project.live !== "#" ? (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-1.5 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 border border-cyan-400 rounded-xl text-xs font-bold text-black hover:brightness-110 transition-all duration-300 shadow-[0_0_15px_rgba(34,211,238,0.2)]"
                      >
                        <FaExternalLinkAlt className="text-xs" /> Live
                      </a>
                    ) : (
                      <div className="flex items-center justify-center gap-1 py-3 bg-gray-900/50 border border-gray-800 rounded-xl text-[10px] font-semibold text-gray-500 cursor-not-allowed">
                        Internal
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* PROJECT LIGHTBOX MODAL */}
      <AnimatePresence>
        {selectedProjectModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProjectModal(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4 md:p-8"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#0b1220] border border-cyan-500/30 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto p-6 md:p-8 shadow-2xl relative"
            >
              <button
                onClick={() => setSelectedProjectModal(null)}
                className="absolute top-6 right-6 text-gray-400 hover:text-white p-2 rounded-full bg-white/5 border border-white/10 transition duration-200 z-30"
              >
                <FaTimes className="text-lg" />
              </button>

              <div className="mb-6">
                <span className="text-cyan-400 text-xs font-bold uppercase tracking-widest">Project Showcase Modal</span>
                <h3 className="text-2xl md:text-3xl font-extrabold text-white mt-1">
                  {selectedProjectModal.title}
                </h3>
              </div>

              {/* Modal Image Gallery Slider */}
              {selectedProjectModal.images && selectedProjectModal.images.length > 0 && (
                <div className="w-full h-64 md:h-96 rounded-2xl overflow-hidden border border-gray-800 mb-6 bg-gray-950">
                  <Swiper
                    modules={[Pagination, Autoplay]}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 4000, disableOnInteraction: true }}
                    className="w-full h-full"
                  >
                    {selectedProjectModal.images.map((img, idx) => (
                      <SwiperSlide key={idx}>
                        <img
                          src={img}
                          alt={`${selectedProjectModal.title} slide ${idx + 1}`}
                          className="w-full h-full object-contain bg-black"
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              )}

              {/* Modal Details Grid */}
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="text-sm font-bold text-gray-300 uppercase tracking-wider mb-2">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProjectModal.tech.map((t, idx) => (
                      <span key={idx} className="bg-cyan-500/10 text-cyan-400 text-xs font-semibold px-3 py-1 rounded-full border border-cyan-500/20">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-bold text-gray-300 uppercase tracking-wider mb-2">Key Metrics & Impacts</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProjectModal.metrics?.map((m, idx) => (
                      <span key={idx} className="bg-green-500/10 text-green-400 text-xs font-semibold px-3 py-1 rounded-full border border-green-500/20">
                        ✓ {m}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <h4 className="text-sm font-bold text-gray-300 uppercase tracking-wider mb-2">Core Features & Architecture</h4>
                <ul className="space-y-2 text-gray-300 text-sm">
                  {selectedProjectModal.description.map((desc, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-cyan-400 mt-1">•</span>
                      <span>{desc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Modal Footer Links */}
              <div className="flex flex-wrap gap-4 pt-4 border-t border-gray-800">
                {selectedProjectModal.github && (
                  <a
                    href={selectedProjectModal.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-xl text-sm font-bold text-white hover:bg-white hover:text-black transition duration-300"
                  >
                    <FaGithub className="text-lg" /> View GitHub Repository
                  </a>
                )}
                {selectedProjectModal.live && selectedProjectModal.live !== "#" && (
                  <a
                    href={selectedProjectModal.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-black rounded-xl text-sm font-bold hover:brightness-110 transition duration-300"
                  >
                    <FaExternalLinkAlt className="text-xs" /> Visit Live Site
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Projects;