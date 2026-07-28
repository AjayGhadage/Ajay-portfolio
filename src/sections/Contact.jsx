import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaLocationArrow, FaCopy, FaCheck, FaBolt, FaClock, FaUserCheck } from "react-icons/fa";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();
  const [status, setStatus] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = (e) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText("ajayghadage2005@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 3000);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);
    setStatus("");

    emailjs
      .sendForm(
        "service_dcoej3c",
        "template_ng7u4zq",
        form.current,
        "HTllyl_D97huny007"
      )
      .then(
        () => {
          setStatus("Message sent successfully! I'll get back to you soon.");
          setIsSending(false);
          form.current.reset();
          setTimeout(() => setStatus(""), 6000);
        },
        (error) => {
          setStatus("Something went wrong. Please try again.");
          setIsSending(false);
          console.error(error);
        }
      );
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-[#020617] text-white">
      {/* THE CONNECTION: THEMED BACKGROUND */}
      <div className="absolute inset-0 z-0">
        <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(circle_at_10%_90%,rgba(34,211,238,0.05),transparent_50%)]" />
        
        {/* Animated Digital Wave */}
        <motion.div
           animate={{ 
             x: [-100, 100, -100],
             opacity: [0.1, 0.2, 0.1]
           }}
           transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
           className="absolute -bottom-24 -left-24 w-[150%] h-64 bg-cyan-500/10 blur-[100px] rounded-[100%] rotate-3"
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">

        {/* HEADER */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-2 text-center"
        >
          Contact <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Me</span>
        </motion.h2>

        <p className="text-center text-gray-500 mb-4 text-xs md:text-sm">
          Open to internships, full-time roles, freelance & AI project collaborations
        </p>

        {/* AVAILABILITY STATUS BANNER */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap items-center justify-center gap-4 mb-14"
        >
          <div className="flex items-center gap-2 bg-green-500/10 border border-green-500/30 px-4 py-2 rounded-full">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-[11px] font-bold uppercase tracking-widest text-green-400">Currently Available</span>
          </div>
          <div className="flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/30 px-4 py-2 rounded-full">
            <FaClock className="text-cyan-400 text-xs" />
            <span className="text-[11px] font-bold uppercase tracking-widest text-cyan-400">Replies within 24 hrs</span>
          </div>
          <div className="flex items-center gap-2 bg-purple-500/10 border border-purple-500/30 px-4 py-2 rounded-full">
            <FaBolt className="text-purple-400 text-xs" />
            <span className="text-[11px] font-bold uppercase tracking-widest text-purple-400">Open for Remote / Hybrid</span>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* Left Side: Contact details cards */}
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-white text-left">
              Let's Build Something Great Together!
            </h3>

            <p className="text-gray-400 leading-relaxed text-left text-sm md:text-base">
              I am open to internships, freelance projects, collaborations, and full-stack or AI-driven engineering opportunities. Reach out anytime, and let's get the conversation started.
            </p>

            <div className="grid gap-4 pt-4">
              {/* Email Card clickable */}
              <div className="relative group">
                <motion.a
                  whileHover={{ x: 6, borderColor: "rgba(34, 211, 238, 0.4)" }}
                  href="mailto:ajayghadage2005@gmail.com"
                  className="flex items-center justify-between bg-[#0b1220]/60 backdrop-blur-sm p-4 rounded-xl border border-gray-800/80 hover:shadow-[0_0_15px_rgba(34,211,238,0.05)] transition-all duration-300 text-left"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 flex items-center justify-center bg-cyan-500/10 text-cyan-400 rounded-lg text-lg flex-shrink-0">
                      <FaEnvelope />
                    </div>
                    <div>
                      <p className="text-[10px] text-gray-500 uppercase tracking-widest font-semibold">Email Me</p>
                      <p className="text-gray-300 text-xs md:text-sm font-semibold break-all">ajayghadage2005@gmail.com</p>
                    </div>
                  </div>

                  <button
                    onClick={handleCopyEmail}
                    className="p-2 rounded-lg bg-white/5 hover:bg-cyan-500/20 text-gray-400 hover:text-cyan-400 transition duration-200 text-xs flex items-center gap-1"
                    title="Copy email to clipboard"
                  >
                    {copiedEmail ? <FaCheck className="text-green-400" /> : <FaCopy />}
                    <span className="text-[10px] font-bold">{copiedEmail ? "Copied!" : "Copy"}</span>
                  </button>
                </motion.a>
              </div>

              {/* LinkedIn Card clickable */}
              <motion.a
                whileHover={{ x: 6, borderColor: "rgba(59, 130, 246, 0.4)" }}
                href="https://www.linkedin.com/in/ajay-ghadage-1a668a28b/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-[#0b1220]/60 backdrop-blur-sm p-4 rounded-xl border border-gray-800/80 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.05)] transition-all duration-300 text-left"
              >
                <div className="w-10 h-10 flex items-center justify-center bg-blue-500/10 text-blue-400 rounded-lg text-lg flex-shrink-0">
                  <FaLinkedin />
                </div>
                <div>
                  <p className="text-[10px] text-gray-500 uppercase tracking-widest font-semibold">Let's Connect</p>
                  <p className="text-gray-300 text-xs md:text-sm font-semibold">linkedin.com/in/ajay-ghadage &rarr;</p>
                </div>
              </motion.a>

              {/* GitHub Card clickable */}
              <motion.a
                whileHover={{ x: 6, borderColor: "rgba(255, 255, 255, 0.2)" }}
                href="https://github.com/AjayGhadage"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-[#0b1220]/60 backdrop-blur-sm p-4 rounded-xl border border-gray-800/80 hover:shadow-[0_0_15px_rgba(255,255,255,0.05)] transition-all duration-300 text-left"
              >
                <div className="w-10 h-10 flex items-center justify-center bg-white/10 text-white rounded-lg text-lg flex-shrink-0">
                  <FaGithub />
                </div>
                <div>
                  <p className="text-[10px] text-gray-500 uppercase tracking-widest font-semibold">Open Source</p>
                  <p className="text-gray-300 text-xs md:text-sm font-semibold">github.com/AjayGhadage &rarr;</p>
                </div>
              </motion.a>

              {/* Location Card */}
              <div className="flex items-center gap-4 bg-[#0b1220]/60 backdrop-blur-sm p-4 rounded-xl border border-gray-800/80 text-left">
                <div className="w-10 h-10 flex items-center justify-center bg-purple-500/10 text-purple-400 rounded-lg text-lg flex-shrink-0">
                  <FaLocationArrow />
                </div>
                <div>
                  <p className="text-[10px] text-gray-500 uppercase tracking-widest font-semibold">Location</p>
                  <p className="text-gray-300 text-xs md:text-sm font-semibold">Pune, Maharashtra, India</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div className="relative w-full">
            {/* Ambient backglow behind form */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-500/5 rounded-full blur-[80px] -z-10" />

            <form
              ref={form}
              onSubmit={sendEmail}
              className="bg-[#0b1220]/60 backdrop-blur-sm p-6 md:p-8 rounded-3xl border border-gray-800/80 space-y-6 shadow-2xl relative"
            >
              <input
                type="text"
                name="user_name"
                required
                placeholder="Your Name"
                className="w-full bg-[#070c17] p-4 rounded-xl border border-gray-800 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/10 text-gray-200 text-sm transition-all duration-300 placeholder-gray-500"
              />

              <input
                type="email"
                name="user_email"
                required
                placeholder="Your Email Address"
                className="w-full bg-[#070c17] p-4 rounded-xl border border-gray-800 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/10 text-gray-200 text-sm transition-all duration-300 placeholder-gray-500"
              />

              {/* Subject Type Selector */}
              <select
                name="subject_type"
                className="w-full bg-[#070c17] p-4 rounded-xl border border-gray-800 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/10 text-gray-400 text-sm transition-all duration-300 cursor-pointer"
              >
                <option value="">Select Inquiry Type</option>
                <option value="internship">🎯 Internship Opportunity</option>
                <option value="fulltime">💼 Full-Time Role</option>
                <option value="freelance">🛠️ Freelance Project</option>
                <option value="collaboration">🤝 Project Collaboration</option>
                <option value="general">💬 General Query</option>
              </select>

              <textarea
                name="message"
                rows="4"
                required
                placeholder="What project or opportunity do you have in mind?"
                className="w-full bg-[#070c17] p-4 rounded-xl border border-gray-800 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/10 text-gray-200 text-sm transition-all duration-300 placeholder-gray-500 resize-none"
              ></textarea>

              <motion.button
                whileHover={{ scale: 1.02, boxShadow: "0 0 15px rgba(34, 211, 238, 0.25)" }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isSending}
                className="w-full bg-gradient-to-r from-cyan-400 to-blue-500 text-black py-4 rounded-xl font-bold hover:brightness-110 transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center text-sm shadow-[0_4px_20px_rgba(34,211,238,0.1)]"
              >
                {isSending ? "Transmission Sending..." : "Send Message"}
              </motion.button>

              {/* Status Alert Message with Animation */}
              <AnimatePresence>
                {status && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className={`text-xs md:text-sm font-bold text-center mt-4 p-3 rounded-lg border bg-[#061e1b] ${
                      status.includes("wrong")
                        ? "text-red-400 border-red-500/20"
                        : "text-green-400 border-green-500/30 shadow-[0_4px_12px_rgba(34,197,94,0.1)]"
                    }`}
                  >
                    {status}
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;