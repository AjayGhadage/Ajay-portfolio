import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

function Projects() {
  const projects = [
    {
      title: "Smart Reimbursement Management System",
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
    },

    {
      title: "AI-Based MindMap & Mood Prediction",
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
    },

    {
      title: "LendSecure – AI-Powered Loan Verification System",
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
      github: "https://github.com/AjayGhadage/LendSecure",   // replace if available
      live: "#",     // replace if deployed
      images: [
        "/projects/lendsecure/lendsecure-1.png",
        "/projects/lendsecure/lendsecure-2.png",
        "/projects/lendsecure/lendsecure-4.png",
        "/projects/lendsecure/lensecure-5.png"
      ],
      video: "https://www.youtube.com/watch?v=29pgM1jR_bc", // replace if available
      featured: true
    },

    {
      title: "Hostel Recommendation System",
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
    },

    {
      title: "SchemeMate – Government Scheme Portal",
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
      live: null, // add if deployed
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
      video: null, // add if you have demo
      featured: false
    }
  ];


  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-[#020617] text-white">
      {/* THE SHOWCASE: THEMED BACKGROUND */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-cyan-500/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-500/5 blur-[120px] rounded-full" />
        
        {/* Large Spotlight Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(34,211,238,0.03),transparent_70%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold mb-16 text-center"
        >
          My <span className="text-cyan-400">Projects</span>
        </motion.h2>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-10">

          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className={`relative flex flex-col rounded-3xl p-6 md:p-8 transition-all duration-500
              ${project.featured
                  ? "md:col-span-2 bg-gradient-to-br from-cyan-950/40 via-[#020617] to-purple-950/40 border border-cyan-400/30 shadow-[0_0_20px_rgba(34,211,238,0.05)]"
                  : "bg-gray-900/50 backdrop-blur-sm border border-gray-800 hover:border-cyan-400/20"
                }`}
            >
              {/* Featured Badge */}
              {project.featured && (
                <div className="absolute top-0 right-0 px-4 py-1.5 bg-cyan-400 text-black text-[10px] font-black uppercase tracking-widest rounded-bl-2xl z-20">
                  Featured
                </div>
              )}

              {/* MEDIA SECTION */}
              <div className="relative group/media mb-6">
                <Swiper
                  modules={[Pagination, Autoplay]}
                  pagination={{ clickable: true }}
                  autoplay={{ delay: 4000 }}
                  className="rounded-2xl overflow-hidden shadow-2xl"
                >
                  {/* VIDEO FIRST */}
                  {project.video && (
                    <SwiperSlide>
                      <div className="relative aspect-video bg-black flex items-center justify-center">
                        <iframe
                          src={project.video.replace("watch?v=", "embed/")}
                          className="w-full h-full"
                          allowFullScreen
                        ></iframe>
                      </div>
                    </SwiperSlide>
                  )}

                  {/* IMAGES */}
                  {project.images?.map((img, i) => (
                    <SwiperSlide key={i}>
                      <img
                        src={img}
                        className="w-full aspect-video object-cover"
                        loading="lazy"
                        alt={project.title}
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              {/* CONTENT */}
              <div className="flex-grow">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>

                {/* TECH */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t, i) => (
                    <span key={i} className="text-[10px] font-bold uppercase tracking-wider bg-white/5 border border-white/10 px-2.5 py-1 rounded-md text-cyan-400">
                      {t}
                    </span>
                  ))}
                </div>

                {/* METRICS */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.metrics?.map((m, i) => (
                    <span key={i} className="text-[10px] font-bold bg-green-500/10 text-green-400 px-2.5 py-1 rounded-md border border-green-500/20">
                      ✓ {m}
                    </span>
                  ))}
                </div>

                {/* DESCRIPTION */}
                <ul className="text-gray-400 text-sm space-y-2 mb-8 leading-relaxed">
                  {project.description.map((d, i) => (
                    <li key={i} className="flex gap-2">
                       <span className="text-cyan-500">•</span>
                       {d}
                    </li>
                  ))}
                </ul>
              </div>

              {/* BUTTONS (Adaptive Grid) */}
              <div className="grid grid-cols-2 gap-3 mt-6">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    className="flex items-center justify-center gap-2 py-3 bg-white/5 border border-white/10 rounded-xl text-sm font-bold hover:bg-white hover:text-black transition-all"
                  >
                    <FaGithub className="text-lg" /> Code
                  </a>
                )}

                {project.live && project.live !== "#" && (
                  <a
                    href={project.live}
                    target="_blank"
                    className="flex items-center justify-center gap-2 py-3 bg-cyan-400 border border-cyan-400 rounded-xl text-sm font-black text-black hover:bg-white hover:border-white transition-all shadow-[0_0_15px_rgba(34,211,238,0.3)]"
                  >
                    <FaExternalLinkAlt /> Live
                  </a>
                )}
              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Projects;