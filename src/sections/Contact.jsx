import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

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
          form.current.reset();
        },
        (error) => {
          setStatus("Something went wrong. Please try again.");
          console.error(error);
        }
      );
  };

  return (
    <section id="contact" className="py-24 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-6">

        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-4 text-center"
        >
          Contact <span className="text-cyan-400">Me</span>
        </motion.h2>

        <p className="text-center text-cyan-400 font-semibold mb-10 tracking-wide">
          RELAX AND DISCOVER THE WORLD OF OPPORTUNITIES...
        </p>

        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left Side */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">
              Let's Build Something Great Together!!!!
            </h3>

            <p className="text-gray-400 mb-6">
              Open to internships, collaborations, and innovative AI or Full-Stack projects.
              Feel free to connect anytime.
            </p>

            <div className="space-y-4">
              <p className="flex items-center gap-3">
                <FaEnvelope />ajayghadage2005@gmail.com
              </p>
              <p className="flex items-center gap-3">
                <FaGithub /> GitHub
              </p>
              <p className="flex items-center gap-3">
                <FaLinkedin /> LinkedIn
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <form
            ref={form}
            onSubmit={sendEmail}
            className="bg-gray-800/60 p-8 rounded-2xl border border-gray-700 space-y-6"
          >
            <input
              type="text"
              name="user_name"
              required
              placeholder="Your Name"
              className="w-full bg-gray-900 p-3 rounded-lg border border-gray-700 focus:outline-none focus:border-cyan-400"
            />

            <input
              type="email"
              name="user_email"
              required
              placeholder="Your Email"
              className="w-full bg-gray-900 p-3 rounded-lg border border-gray-700 focus:outline-none focus:border-cyan-400"
            />

            <textarea
              name="message"
              rows="4"
              required
              placeholder="Your Message"
              className="w-full bg-gray-900 p-3 rounded-lg border border-gray-700 focus:outline-none focus:border-cyan-400"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-cyan-400 text-black py-3 rounded-lg font-semibold hover:bg-white transition"
            >
              Send Message
            </button>

            {status && (
              <p className="text-green-400 text-sm text-center mt-3">
                {status}
              </p>
            )}
          </form>

        </div>
      </div>
    </section>
  );
}

export default Contact;