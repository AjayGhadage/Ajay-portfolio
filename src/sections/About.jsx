import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectCoverflow } from "swiper/modules";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";
import { FaStethoscope, FaRocket, FaCode, FaCube, FaMicrochip } from "react-icons/fa";
import { useRef } from "react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

function About() {
  const sectionRef = useRef(null);

  // Scroll progress of this section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Smooth parallax movement
  const yParallax = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const rotate3d = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const smoothY = useSpring(yParallax, { stiffness: 60, damping: 20 });
  const smoothRotate = useSpring(rotate3d, { stiffness: 60, damping: 20 });

  // Divider color transition (red → green)
  const dividerColor = useTransform(
    scrollYProgress,
    [0, 1],
    ["#f87171", "#22c55e"]
  );

  const revealText = (text) => {
    return text.split(" ").map((word, index) => (
      <motion.span
        key={index}
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.03 }}
        viewport={{ once: true }}
        className="inline-block mr-1"
      >
        {word}
      </motion.span>
    ));
  };

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative py-24 overflow-hidden bg-[#020617]"
    >
      {/* 3D HIGHLIGHTED BACKGROUND */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,211,238,0.08),transparent_70%)]" />
        
        {/* Animated Perspective Grid */}
        <div 
          className="absolute inset-0 opacity-[0.03]" 
          style={{ 
            backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
            backgroundSize: '40px 40px',
            transform: 'perspective(500px) rotateX(60deg) translateY(-100px)',
            maskImage: 'linear-gradient(to bottom, black, transparent)'
          }}
        />

        {/* Floating 3D-Style Elements */}
        <motion.div 
            style={{ y: smoothY, rotate: smoothRotate }}
            className="absolute top-20 right-[15%] opacity-20 hidden lg:block"
        >
            <FaCube className="text-[120px] text-cyan-400 drop-shadow-[0_0_30px_rgba(34,211,238,0.5)]" />
        </motion.div>
        
        <motion.div 
            style={{ y: useTransform(scrollYProgress, [0, 1], [-100, 100]), rotate: useTransform(scrollYProgress, [0, 1], [360, 0]) }}
            className="absolute bottom-40 left-[10%] opacity-20 hidden lg:block"
        >
            <FaMicrochip className="text-[100px] text-purple-500 drop-shadow-[0_0_30px_rgba(168,85,247,0.5)]" />
        </motion.div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold text-center mb-24"
        >
          My{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Evolution
          </span>
        </motion.h2>

        {/* Split Layout */}
        <div className="relative grid md:grid-cols-2 gap-10 md:gap-16 mb-24">

          {/* Animated Divider (color morph) */}
          <motion.div
            style={{ backgroundColor: dividerColor }}
            className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] shadow-[0_0_10px_rgba(255,255,255,0.2)]"
          />

          {/* THEN: The Shift */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="group relative p-8 md:p-12 rounded-[2.5rem] border border-red-500/20 bg-white/[0.03] backdrop-blur-xl overflow-hidden shadow-[0_20px_50px_rgba(239,68,68,0.05)] transition-all duration-500"
          >
            <div className="absolute top-0 right-0 p-8 opacity-[0.08] group-hover:opacity-15 transition-opacity">
              <FaStethoscope className="text-9xl text-red-400 rotate-12" />
            </div>
            
            <div className="relative z-10">
              <div className="w-14 h-14 bg-red-500/20 rounded-2xl flex items-center justify-center mb-8 border border-red-500/30 group-hover:shadow-[0_0_20px_rgba(239,68,68,0.3)] transition-all">
                <FaStethoscope className="text-2xl text-red-400" />
              </div>
              <h3 className="text-2xl md:text-4xl font-bold text-red-500 mb-6 tracking-tight">
                The Unexpected Shift
              </h3>

              <p className="text-gray-300 leading-relaxed text-sm md:text-lg font-light">
                {revealText(
                  "My focus was NEET. Medicine was the direction I believed in. Engineering entered unexpectedly after failure. The transition wasn’t easy — new field, new pressure, new doubts. I had to rebuild confidence from scratch."
                )}
              </p>
            </div>
          </motion.div>

          {/* NOW: The Growth */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="group relative p-8 md:p-12 rounded-[2.5rem] border border-green-500/20 bg-white/[0.03] backdrop-blur-xl overflow-hidden shadow-[0_20px_50px_rgba(34,197,94,0.05)] transition-all duration-500"
          >
            <div className="absolute top-0 right-0 p-8 opacity-[0.08] group-hover:opacity-15 transition-opacity">
              <FaCode className="text-9xl text-green-400 -rotate-12" />
            </div>

            <div className="relative z-10">
              <div className="w-14 h-14 bg-green-500/20 rounded-2xl flex items-center justify-center mb-8 border border-green-500/30 group-hover:shadow-[0_0_20_px_rgba(34,197,94,0.3)] transition-all">
                <FaRocket className="text-2xl text-green-400" />
              </div>
              <h3 className="text-2xl md:text-4xl font-bold text-green-500 mb-6 tracking-tight">
                Conscious Growth
              </h3>

              <p className="text-gray-300 leading-relaxed text-sm md:text-lg font-light">
                {revealText(
                  "I adapted quickly — finishing first year with a 10 CGPA and topping the college. That achievement shifted my mindset. I moved from chasing grades to building skills — strengthening DSA, developing MERN applications, and preparing for real-world challenges."
                )}
              </p>
            </div>
          </motion.div>

        </div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto mb-28"
        >
          <div className="inline-block px-8 py-4 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 mb-8">
             <p className="text-lg md:text-3xl font-light text-white italic tracking-wide">
                "I didn’t choose the path. I chose how I would grow on it."
             </p>
          </div>
        </motion.div>

        {/* 3D HIGHLIGHTED GALLERY */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", duration: 1.2 }}
          viewport={{ once: true }}
          className="relative max-w-4xl mx-auto"
        >
          {/* Subtle Glow Behind Gallery */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-cyan-400/20 blur-[120px] rounded-full pointer-events-none" />

          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: window.innerWidth < 768 ? 25 : 35,
              stretch: 0,
              depth: window.innerWidth < 768 ? 100 : 250,
              modifier: 1,
              slideShadows: true,
            }}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            loop={true}
            pagination={{ clickable: true, dynamicBullets: true }}
            modules={[Autoplay, Pagination, EffectCoverflow]}
            className="mySwiper w-full py-16"
          >
            {[
              "/pandora.png",
              "/TeamArya.png",
              "/Gateprt.png",
              "/image2.png",
              "/image3.png",
              "/image4.png",
            ].map((img, index) => (
              <SwiperSlide 
                key={index} 
                className="w-[280px] h-[380px] md:w-[480px] md:h-[600px] rounded-[2.5rem] border-2 border-white/10 overflow-hidden shadow-2xl bg-gray-900 overflow-hidden group relative"
              >
                <img
                  src={img}
                  alt="Journey"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                
                {/* 3D HIGHLIGHT OVERLAY */}
                <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black via-black/40 to-transparent">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="h-1 w-8 bg-cyan-400 rounded-full animate-pulse" />
                    <p className="text-cyan-400 font-black text-xs tracking-[0.3em] uppercase">Evolution 0{index + 1}</p>
                  </div>
                  <p className="text-white font-bold text-2xl drop-shadow-md">Portfolio Journey Highlight</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

      </div>
    </section>
  );
}

export default About;