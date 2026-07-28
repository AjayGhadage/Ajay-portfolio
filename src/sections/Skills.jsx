import { useState } from "react";
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import {
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiTailwindcss,
  SiVercel,
  SiNetlify,
  SiExpress,
  SiHtml5,
  SiCss3,
} from "react-icons/si";
import { motion, AnimatePresence } from "framer-motion";

function Skills() {
  const [activeTab, setActiveTab] = useState("all");

  const categories = [
    { id: "all", label: "All Tech" },
    { id: "frontend", label: "Frontend" },
    { id: "backend", label: "Backend & DB" },
    { id: "tools", label: "Tools & Cloud" },
  ];

  const skillsData = [
    // Frontend
    {
      name: "React.js",
      level: 85,
      category: "frontend",
      icon: <FaReact className="text-cyan-400" />,
      colorClass: "hover:border-cyan-400/40 hover:shadow-cyan-400/10",
      barColor: "bg-cyan-400",
    },
    {
      name: "JavaScript",
      level: 90,
      category: "frontend",
      icon: <SiJavascript className="text-yellow-400" />,
      colorClass: "hover:border-yellow-400/45 hover:shadow-yellow-400/10",
      barColor: "bg-yellow-400",
    },
    {
      name: "HTML5",
      level: 95,
      category: "frontend",
      icon: <SiHtml5 className="text-orange-500" />,
      colorClass: "hover:border-orange-500/40 hover:shadow-orange-500/10",
      barColor: "bg-orange-500",
    },
    {
      name: "CSS3",
      level: 75,
      category: "frontend",
      icon: <SiCss3 className="text-blue-500" />,
      colorClass: "hover:border-blue-500/40 hover:shadow-blue-500/10",
      barColor: "bg-blue-500",
    },
    {
      name: "Tailwind CSS",
      level: 70,
      category: "frontend",
      icon: <SiTailwindcss className="text-sky-400" />,
      colorClass: "hover:border-sky-400/40 hover:shadow-sky-400/10",
      barColor: "bg-sky-400",
    },

    // Backend & Cloud
    {
      name: "Node.js",
      level: 90,
      category: "backend",
      icon: <FaNodeJs className="text-green-500" />,
      colorClass: "hover:border-green-500/40 hover:shadow-green-500/10",
      barColor: "bg-green-500",
    },
    {
      name: "Express.js",
      level: 90,
      category: "backend",
      icon: <SiExpress className="text-gray-300" />,
      colorClass: "hover:border-gray-500/40 hover:shadow-gray-500/10",
      barColor: "bg-gray-300",
    },
    {
      name: "MongoDB",
      level: 85,
      category: "backend",
      icon: <SiMongodb className="text-green-600" />,
      colorClass: "hover:border-green-600/40 hover:shadow-green-600/10",
      barColor: "bg-green-600",
    },
    {
      name: "MySQL / Postgres",
      level: 90,
      category: "backend",
      icon: <SiMysql className="text-blue-500" />,
      colorClass: "hover:border-blue-500/40 hover:shadow-blue-500/10",
      barColor: "bg-blue-500",
    },

    // Tools & Cloud
    {
      name: "AWS ECS & RDS",
      level: 85,
      category: "tools",
      icon: <FaReact className="text-amber-400" />,
      colorClass: "hover:border-amber-400/40 hover:shadow-amber-400/10",
      barColor: "bg-amber-400",
    },
    {
      name: "Docker & ECR",
      level: 80,
      category: "tools",
      icon: <FaGitAlt className="text-blue-400" />,
      colorClass: "hover:border-blue-400/40 hover:shadow-blue-400/10",
      barColor: "bg-blue-400",
    },
    {
      name: "Git & GitHub",
      level: 92,
      category: "tools",
      icon: <FaGithub className="text-white" />,
      colorClass: "hover:border-white/30 hover:shadow-white/5",
      barColor: "bg-white",
    },
    {
      name: "Vercel & Netlify",
      level: 88,
      category: "tools",
      icon: <SiVercel className="text-white" />,
      colorClass: "hover:border-white/30 hover:shadow-white/5",
      barColor: "bg-white",
    },
  ];

  const filteredSkills =
    activeTab === "all"
      ? skillsData
      : skillsData.filter((skill) => skill.category === activeTab);

  return (
    <section id="skills" className="py-28 relative overflow-hidden bg-[#020617]">
      {/* THE NEURAL MESH: THEMED BACKGROUND */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-500/5 blur-[120px] rounded-full" />
        
        {/* Digital Grid Overlay */}
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(rgba(255,255,255,1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,1)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

        {/* Neural Nodes */}
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            animate={{ 
              y: [0, -30, 0],
              opacity: [0.2, 0.4, 0.2]
            }}
            transition={{ 
              duration: 4 + Math.random() * 4, 
              repeat: Infinity,
              delay: Math.random() * 2 
            }}
            className="absolute w-1.5 h-1.5 bg-cyan-400 rounded-full shadow-[0_0_10px_rgba(34,211,238,0.8)]"
            style={{
              left: 10 + Math.random() * 80 + "%",
              top: 10 + Math.random() * 80 + "%",
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Section Header */}
        <p className="text-cyan-400 uppercase tracking-widest text-sm mb-3">
          EXPERTISE
        </p>

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <h2 className="text-4xl md:text-5xl font-bold">
            Skills &{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Technologies
            </span>
          </h2>

          {/* Filtering Tabs */}
          <div className="flex bg-[#0f172a]/60 backdrop-blur-md p-1.5 rounded-full border border-gray-800 self-start md:self-auto overflow-x-auto max-w-full">
            {categories.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative px-5 py-2.5 rounded-full text-sm font-semibold tracking-wide transition duration-300 whitespace-nowrap ${
                  activeTab === tab.id
                    ? "text-[#020617] font-bold"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="activeSkillTab"
                    className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full z-0"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Skills Cards Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill, index) => (
              <motion.div
                layout
                key={skill.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -6 }}
                className={`group flex flex-col p-6 rounded-2xl bg-[#0b1220]/60 backdrop-blur-sm border border-gray-800/80 shadow-md shadow-black/40 transition-all duration-300 cursor-default overflow-hidden relative ${skill.colorClass}`}
              >
                {/* Visual Glass Glow inside card */}
                <div className="absolute -right-6 -bottom-6 w-20 h-20 bg-cyan-500/5 rounded-full blur-2xl group-hover:bg-cyan-500/10 transition-colors duration-500" />

                {/* Skill Icon & Name */}
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#0f172a] text-2xl border border-gray-800 shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)]">
                    {skill.icon}
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-base md:text-lg tracking-tight">
                      {skill.name}
                    </h3>
                    <p className="text-[10px] text-gray-500 uppercase tracking-widest mt-0.5">
                      {skill.category === "frontend" ? "Frontend" : skill.category === "backend" ? "Backend/DB" : "Tool/Cloud"}
                    </p>
                  </div>
                </div>

                {/* Skill Level & Progress bar */}
                <div className="mt-auto">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs text-gray-400">Proficiency</span>
                    <span className="text-xs font-black text-cyan-400 group-hover:animate-pulse">
                      {skill.level}%
                    </span>
                  </div>

                  <div className="w-full bg-[#141b2a] h-2 rounded-full overflow-hidden border border-gray-900">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, ease: "easeOut" }}
                      className={`h-full rounded-full ${
                        skill.barColor.startsWith("bg-") ? skill.barColor : "bg-cyan-400"
                      }`}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}

export default Skills;