import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function Projects() {
  const projects = [
    {
      title: "AI-Based MindMap & Mood Prediction System",
      tech: ["Python", "AI/ML", "React", "Node.js"],
      description: [
        "Developed an AI-supported system to analyze user responses and predict emotional states.",
        "Implemented mood classification using NLP-based textual input analysis.",
        "Integrated virtual therapy functionality with automatic Zoom link generation."
      ],
      github: "https://github.com/AjayGhadage/Mind-Map",
      live: "#",
      featured: false
    },
    {
      title: "Hostel Management & Recommendation System",
      tech: ["Machine Learning", "Python", "React", "Node.js", "MongoDB"],
      description: [
        "Built an ML-based hostel recommendation engine using user preferences.",
        "Performed data preprocessing and feature encoding for personalized recommendations.",
        "Developed a full-stack platform for hostel listings, bookings, and authentication."
      ],
      github: "https://github.com/AjayGhadage/Hostel-Recommendation-ML-Project",
      live: "#",
      featured: false
    },
    {
      title: "SchemeMate – Government Scheme Information Portal",
      tech: ["Node.js", "Express", "EJS", "MongoDB", "Passport.js", "Multer"],
      description: [
        "Developed a portal providing government scheme information for farmers, education, and healthcare.",
        "Implemented authentication and session management using Passport.js.",
        "Enabled secure document uploads using Multer with MongoDB integration."
      ],
      github: "https://github.com/AjayGhadage/SchemeMate",
      live: "#",
      featured: false
    },
    {
      title: "Personal Portfolio Website",
      tech: ["React", "Tailwind CSS", "Framer Motion"],
      description: [
        "Designed and developed a responsive multi-section portfolio website.",
        "Implemented dark/light theme toggle with smooth UI transitions.",
        "Integrated animations including scroll reveal, hover effects, and interactive project showcase."
      ],
      github: "https://github.com/AjayGhadage/Personal-Portfolio",
      live: "#",
      featured: true
    }
  ];

  return (
    <section id="projects" className="py-24 bg-black text-white">
      <div className="max-w-6xl mx-auto px-6">

        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-16 text-center"
        >
          My <span className="text-cyan-400">Projects</span>
        </motion.h2>

        <div className="space-y-10">

          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className={`relative rounded-2xl p-8 transition duration-500 
                ${project.featured
                  ? "bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-cyan-500/10 border border-cyan-400 shadow-lg shadow-cyan-500/20 scale-[1.02]"
                  : "bg-gray-900/60 border border-gray-800 hover:border-cyan-400/40"
                }`}
            >

              {/* Featured Badge */}
              {project.featured && (
                <span className="absolute top-4 right-4 text-xs px-3 py-1 bg-cyan-500 text-black font-semibold rounded-full">
                  FEATURED PROJECT
                </span>
              )}

              <h3 className="text-2xl font-semibold text-cyan-400 mb-4">
                {project.title}
              </h3>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs bg-gray-800 px-3 py-1 rounded-full border border-cyan-400/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Description */}
              <ul className="list-disc list-inside text-gray-400 space-y-2 mb-6">
                {project.description.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>

              {/* Buttons */}
              <div className="flex gap-6">
                <a
                  href={project.github}
                  className="flex items-center gap-2 text-sm hover:text-cyan-400 transition"
                >
                  <FaGithub /> Code
                </a>

                <a
                  href={project.live}
                  className="flex items-center gap-2 text-sm hover:text-cyan-400 transition"
                >
                  <FaExternalLinkAlt /> Live
                </a>
              </div>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Projects;