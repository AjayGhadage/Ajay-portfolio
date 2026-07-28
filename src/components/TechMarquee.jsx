function TechMarquee() {
  const items = [
    "GATE 2026 CS QUALIFIED",
    "REACT.JS",
    "NODE.JS",
    "EXPRESS.JS",
    "MONGODB",
    "POSTGRESQL",
    "AWS ECS FARGATE",
    "AMAZON RDS",
    "DOCKER",
    "PYTHON AI",
    "DATA STRUCTURES & ALGORITHMS",
    "TAILWIND CSS"
  ];

  // Repeat items for seamless infinite scroll
  const marqueeItems = [...items, ...items, ...items, ...items];

  return (
    <div className="w-full bg-[#030712] border-y border-gray-900/80 py-4 relative z-20 overflow-hidden shadow-2xl">
      {/* Subtle grid background */}
      <div 
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(#22d3ee 1px, transparent 1px), linear-gradient(90deg, #22d3ee 1px, transparent 1px)",
          backgroundSize: "24px 24px"
        }}
      />

      <div className="flex w-max animate-marquee space-x-10 items-center relative z-10">
        {marqueeItems.map((text, idx) => (
          <div key={idx} className="flex items-center gap-10">
            <span className="text-cyan-400 font-extrabold text-xs md:text-sm tracking-widest uppercase flex items-center gap-2">
              <span className="text-cyan-400 text-base">•</span> {text}
            </span>
            <span className="text-gray-700/80 text-sm font-light">|</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TechMarquee;
