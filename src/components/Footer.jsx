import { FaGithub, FaLinkedin, FaHeart, FaDownload, FaEnvelope } from "react-icons/fa";
import { SiLeetcode, SiCodechef } from "react-icons/si";
import { motion } from "framer-motion";

function Footer() {
  const currentYear = new Date().getFullYear();

  const stats = [
    { value: "9.5", label: "CGPA at SPPU" },
    { value: "GATE '26", label: "CS Qualified" },
    { value: "100+", label: "LeetCode Solved" },
    { value: "6+", label: "Live Projects" },
    { value: "2", label: "Internships" },
  ];

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Education", href: "#education" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  const socials = [
    { Icon: FaGithub, href: "https://github.com/AjayGhadage", hoverColor: "hover:text-white", label: "GitHub" },
    { Icon: FaLinkedin, href: "https://www.linkedin.com/in/ajay-ghadage-1a668a28b/", hoverColor: "hover:text-blue-400", label: "LinkedIn" },
    { Icon: SiLeetcode, href: "https://leetcode.com/u/Ajya_Ghadage/", hoverColor: "hover:text-yellow-400", label: "LeetCode" },
    { Icon: SiCodechef, href: "https://www.codechef.com/users/sane_crows_73", hoverColor: "hover:text-purple-400", label: "CodeChef" },
    { Icon: FaEnvelope, href: "mailto:ajayghadage2005@gmail.com", hoverColor: "hover:text-cyan-400", label: "Email" },
  ];

  return (
    <footer className="relative bg-[#01040d] border-t border-gray-900 text-gray-400 overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-40 bg-cyan-500/5 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute top-0 right-0 w-72 h-72 bg-purple-500/5 blur-[80px] rounded-full pointer-events-none" />

      {/* MAIN FOOTER BODY */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-10 relative z-10">

        {/* Column 1: Brand & Bio */}
        <div>
          <h3 className="text-xl font-extrabold text-white tracking-wide bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-2">
            Ajay Ghadage
          </h3>
          <p className="text-xs text-gray-400 leading-relaxed mb-5">
            Computer Engineering Student at SPPU building production-grade MERN + AI applications and cloud-native infrastructure on AWS.
          </p>
          {/* Availability badge */}
          <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/30 px-3 py-1.5 rounded-full mb-5">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-[10px] font-bold uppercase tracking-wider text-green-400">
              Available for Opportunities
            </span>
          </div>
          {/* Resume Download */}
          <div>
            <a
              href="/Ajay_s_Resume.pdf"
              download="Ajay_Ghadage_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-400 to-blue-500 text-black text-xs font-bold px-5 py-2.5 rounded-xl hover:brightness-110 transition duration-300"
            >
              <FaDownload /> Download Resume
            </a>
          </div>
        </div>

        {/* Column 2: Quick Navigation */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest text-gray-300 mb-4">Quick Navigation</h4>
          <div className="grid grid-cols-2 gap-y-2.5 gap-x-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs text-gray-400 hover:text-cyan-400 transition duration-200 font-medium flex items-center gap-1 group"
              >
                <span className="w-1 h-1 rounded-full bg-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Column 3: Tech Stack Focus */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest text-gray-300 mb-4">Core Tech Stack</h4>
          <div className="flex flex-wrap gap-2">
            {["React.js", "Node.js", "MongoDB", "PostgreSQL", "Python AI", "Docker", "AWS ECS", "AWS RDS", "Express.js"].map((tech) => (
              <span
                key={tech}
                className="bg-white/5 border border-gray-800 text-gray-400 hover:text-cyan-400 hover:border-cyan-500/30 text-[10px] px-2.5 py-1 rounded-full font-medium transition duration-200 cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="mt-6">
            <h4 className="text-xs font-bold uppercase tracking-widest text-gray-300 mb-3">Find Me Online</h4>
            <div className="flex gap-4">
              {socials.map(({ Icon, href, hoverColor, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={label}
                  className={`text-gray-500 ${hoverColor} transition duration-200 text-lg`}
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM COPYRIGHT BAR */}
      <div className="border-t border-gray-900">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-gray-600">
          <p>
            © {currentYear} Ajay Ghadage. All rights reserved.
          </p>
          <p className="flex items-center gap-1">
            Built with <FaHeart className="text-red-500 mx-1" /> using React.js, Tailwind CSS & Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
