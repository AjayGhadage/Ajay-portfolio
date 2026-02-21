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
} from "react-icons/si";

function Skills() {
  const frontend = [
    { name: "React.js", level: 85, icon: <FaReact className="text-cyan-400" /> },
    { name: "JavaScript", level: 90, icon: <SiJavascript className="text-yellow-400" /> },
    { name: "HTML5", level: 95, icon: "🟧" },
    { name: "CSS3", level: 75, icon: "🟦" },
    { name: "Tailwind CSS", level: 70, icon: <SiTailwindcss className="text-sky-400" /> },
  ];

  const backend = [
    { name: "Node.js", level: 90, icon: <FaNodeJs className="text-green-500" /> },
    { name: "Express.js", level: 90, icon: <SiExpress className="text-gray-300" /> },
    { name: "MongoDB", level: 80, icon: <SiMongodb className="text-green-600" /> },
    { name: "MySQL", level: 90, icon: <SiMysql className="text-blue-500" /> },
  ];

  const tools = [
    { name: "Git", level: 90, icon: <FaGitAlt className="text-orange-500" /> },
    { name: "GitHub", level: 93, icon: <FaGithub className="text-white" /> },
    { name: "Vercel", level: 85, icon: <SiVercel className="text-white" /> },
    { name: "Netlify", level: 80, icon: <SiNetlify className="text-cyan-400" /> },
  ];

  const SkillItem = ({ skill, gradient }) => (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 flex items-center justify-center rounded-lg bg-[#0f172a] text-lg">
            {skill.icon}
          </div>
          <span className="text-gray-300">{skill.name}</span>
        </div>
        <span className="text-cyan-400 text-sm font-semibold">
          {skill.level}%
        </span>
      </div>

      <div className="w-full bg-[#1e293b] h-2 rounded-full overflow-hidden">
        <div
          className={`h-2 rounded-full ${gradient}`}
          style={{ width: `${skill.level}%` }}
        ></div>
      </div>
    </div>
  );

  return (
    <section id="skills" className="py-28 bg-black">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <p className="text-cyan-400 uppercase tracking-widest text-sm mb-3">
          EXPERTISE
        </p>

        <h2 className="text-4xl md:text-5xl font-bold mb-16">
          Skills &{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Technologies
          </span>
        </h2>

        <div className="grid md:grid-cols-3 gap-10">

          {/* Frontend Card */}
          <div className="group relative overflow-hidden bg-[#0b1220] p-8 rounded-2xl border border-[#1e293b] shadow-md shadow-black/30 hover:-translate-y-2 hover:shadow-cyan-500/20 transition-all duration-500">

            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-10 blur-xl transition duration-500"></div>

            <h3 className="text-xl font-semibold mb-8 text-white relative z-10">
              Frontend Development
            </h3>

            {frontend.map((skill, i) => (
              <SkillItem
                key={i}
                skill={skill}
                gradient="bg-gradient-to-r from-cyan-400 to-blue-500"
              />
            ))}
          </div>

          {/* Backend Card */}
          <div className="group relative overflow-hidden bg-[#0b1220] p-8 rounded-2xl border border-[#1e293b] shadow-md shadow-black/30 hover:-translate-y-2 hover:shadow-green-500/20 transition-all duration-500">

            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-green-400 to-emerald-500 opacity-0 group-hover:opacity-10 blur-xl transition duration-500"></div>

            <h3 className="text-xl font-semibold mb-8 text-white relative z-10">
              Backend Development
            </h3>

            {backend.map((skill, i) => (
              <SkillItem
                key={i}
                skill={skill}
                gradient="bg-gradient-to-r from-green-400 to-emerald-500"
              />
            ))}
          </div>

          {/* Tools Card */}
          <div className="group relative overflow-hidden bg-[#0b1220] p-8 rounded-2xl border border-[#1e293b] shadow-md shadow-black/30 hover:-translate-y-2 hover:shadow-purple-500/20 transition-all duration-500">

            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-400 to-pink-500 opacity-0 group-hover:opacity-10 blur-xl transition duration-500"></div>

            <h3 className="text-xl font-semibold mb-8 text-white relative z-10">
              Development Tools & Platforms
            </h3>

            {tools.map((skill, i) => (
              <SkillItem
                key={i}
                skill={skill}
                gradient="bg-gradient-to-r from-purple-400 to-pink-500"
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

export default Skills;