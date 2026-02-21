import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";
import { useRef } from "react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

function About() {
  const sectionRef = useRef(null);

  // Scroll progress of this section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Smooth parallax movement
  const yParallax = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const smoothY = useSpring(yParallax, { stiffness: 60, damping: 20 });

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
      className="relative py-24 bg-black overflow-hidden"
    >
      {/* Subtle Parallax Background Glow */}
      <motion.div
        style={{ y: smoothY }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-20 left-10 w-72 h-72 bg-red-500/10 blur-3xl rounded-full" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-green-500/10 blur-3xl rounded-full" />
      </motion.div>

      <div className="relative max-w-6xl mx-auto px-6">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold text-center mb-20"
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
            className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px]"
          />

          {/* THEN */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            whileHover={{ y: -6 }}
            className="p-8 md:p-10 rounded-2xl border border-red-500/20 bg-gradient-to-br from-red-500/5 to-transparent"
          >
            <h3 className="text-xl md:text-2xl font-semibold text-red-400 mb-6">
              The Unexpected Shift
            </h3>

            <p className="text-gray-400 leading-relaxed text-sm md:text-base">
              {revealText(
                "My focus was NEET. Medicine was the direction I believed in. Engineering entered unexpectedly after failure. The transition wasn’t easy — new field, new pressure, new doubts. I had to rebuild confidence from scratch."
              )}
            </p>
          </motion.div>

          {/* NOW */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            whileHover={{ y: -6 }}
            className="p-8 md:p-10 rounded-2xl border border-green-500/20 bg-gradient-to-br from-green-500/5 to-transparent"
          >
            <h3 className="text-xl md:text-2xl font-semibold text-green-400 mb-6">
              Conscious Growth
            </h3>

            <p className="text-gray-400 leading-relaxed text-sm md:text-base">
              {revealText(
                "I adapted quickly — finishing first year with a 10 CGPA and topping the college. That achievement shifted my mindset. I moved from chasing grades to building skills — strengthening DSA, developing MERN applications, exploring Machine Learning, and preparing for real-world challenges."
              )}
            </p>
          </motion.div>

        </div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <p className="text-lg md:text-2xl font-medium text-gray-300 leading-relaxed">
            {revealText(
              "I didn’t choose the path. I chose how I would grow on it."
            )}
          </p>
        </motion.div>

        {/* Slider */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gray-900 p-6 md:p-8 rounded-2xl border border-gray-800 shadow-xl"
        >
          <Swiper
            modules={[Autoplay, Pagination, EffectFade]}
            slidesPerView={1}
            loop
            effect="fade"
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
          >
            {["/image1.png", "/image2.png", "/image3.png", "/image4.png"].map(
              (img, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={img}
                    alt="Journey"
                    className="rounded-xl w-full h-[300px] md:h-[450px] object-cover"
                  />
                </SwiperSlide>
              )
            )}
          </Swiper>
        </motion.div>

      </div>
    </section>
  );
}

export default About;