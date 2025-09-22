"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function PortfolioPage() {
  const [activeProject, setActiveProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Capital Now",
      desc: "Full-stack app built with Next.js + Node + Mysql + PHP",
      tech: ["Next.js", "Node", "Mysql", "PHP"],
      url: "#",
    },
    {
      id: 2,
      title: "Quick2 Recharge",
      desc: "Reusable component library and design tokens.",
      tech: ["HTML", "PHP", "MySQL","CSS"],
      url: "#",
    },
    {
      id: 3,
      title: "Shopping Cart",
      desc: "Analytics dashboard with sockets and charts.",
      tech: ["PHP", "MySQL", "HTML","CSS"],
      url: "#",
    },
  ];

  const skills = [
    { name: "PHP, Codigniter", level: 95 },
    { name: "JavaScript", level: 90 },
    { name: "Node.js / Express", level: 90 },
    { name: "Databases (MySql, MongoDB)", level: 90 },
    { name: "React/Next", level: 70 },
    { name: "HTML,CSS", level: 80 },
    { name: "Testing (Jest)", level: 70 },
  ];

  const sectionVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  return (
    <div className="min-h-screen text-gray-200 scroll-smooth bg-gradient-to-b from-black via-gray-900 to-black">
      {/* NAVBAR */}
      <header className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-sm border-b border-gray-800 h-24">
        <div className="max-w-6xl mx-auto flex justify-between items-center h-full px-24">
          <Link href="/" className="text-2xl font-bold text-blue-400">
            Madhavi Batta
          </Link>
          <nav className="space-x-4 hidden md:flex">
            {["About", "Projects", "Skills", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="hover:text-blue-400 transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* HERO */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative flex flex-col md:flex-row items-center justify-between py-32 px-6 overflow-hidden"
      >
        {/* Animated gradient blobs */}
        <motion.div
          animate={{ x: [0, -50, 0], y: [0, 30, 0], rotate: [0, 20, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-10 left-10 w-72 h-72 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 opacity-30 mix-blend-screen filter blur-3xl"
        />
        <motion.div
          animate={{ x: [0, 40, 0], y: [0, -20, 0], rotate: [0, -15, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 right-20 w-96 h-96 rounded-full bg-gradient-to-r from-blue-400 via-cyan-400 to-green-400 opacity-30 mix-blend-screen filter blur-3xl"
        />
        <motion.div
          animate={{ x: [-30, 30, -30], y: [20, -20, 20], rotate: [0, 10, 0] }}
          transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 w-80 h-80 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 opacity-20 mix-blend-screen filter blur-2xl"
        />

        {/* Hero Content */}
        <div className="flex-1 space-y-4 z-10">
          <motion.h1
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="text-5xl font-extrabold text-white"
          >
            Hi, I’m Madhavi 👋
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="text-lg text-gray-300"
          >
            I create scalable web apps with stunning UI/UX.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="flex gap-4 mt-4"
          >
            <a
              href="#projects"
              className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-500 transition transform hover:-translate-y-1 hover:scale-105"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-6 py-2 border border-gray-500 rounded-lg hover:bg-gray-800 hover:text-white transition transform hover:-translate-y-1 hover:scale-105"
            >
              Contact Me
            </a>
          </motion.div>
        </div>

        <motion.img
          src="/avtar.jpg"
          alt="Your portrait"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="w-64 h-64 rounded-full object-cover shadow-2xl z-10"
        />
      </motion.section>

      {/* ABOUT BOX */}
      <motion.section
        id="about"
        className="max-w-4xl mx-auto px-6 py-12 mb-12 bg-gray-900 rounded-2xl shadow-2xl"
        initial="hidden"
        whileInView="visible"
        whileHover={{ scale: 1.03, y: -5, boxShadow: "0 25px 50px rgba(0,0,0,0.5)" }}
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <h2 className="pt-24 -mt-24 text-3xl font-bold mb-4 text-white text-center">
          About Me
        </h2>
        <p className="text-gray-300 text-center">
          I’m a full-stack developer with X years of experience building modern web
          applications. I focus on performance, scalability, and intuitive UI/UX.
        </p>
      </motion.section>

      {/* PROJECTS */}
      <motion.section
        id="projects"
        className="max-w-6xl mx-auto px-6 py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <h2 className="pt-24 -mt-24 text-3xl font-bold mb-10 text-center text-white">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p) => (
            <motion.div
              key={p.id}
              whileHover={{ scale: 1.05, rotateX: 5, rotateY: 5 }}
              className="bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-2xl transition relative overflow-hidden cursor-pointer"
            >
              <h3 className="text-xl font-semibold mb-2 text-white">{p.title}</h3>
              <p className="text-gray-400 mb-3">{p.desc}</p>
              <div className="flex flex-wrap gap-2 mb-3">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-1 bg-blue-800 text-blue-400 rounded-full text-xs font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition transform hover:-translate-y-1"
              >
                View Project
              </a>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* SKILLS BOX */}
      <motion.section
        id="skills"
        className="max-w-4xl mx-auto px-6 py-12 mb-12 bg-gray-900 rounded-2xl shadow-2xl"
        initial="hidden"
        whileInView="visible"
        whileHover={{ scale: 1.03, y: -5, boxShadow: "0 25px 50px rgba(0,0,0,0.5)" }}
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <h2 className="pt-24 -mt-24 text-3xl font-bold mb-6 text-white text-center">
          Skills
        </h2>
        <div className="space-y-4">
          {skills.map((s) => (
            <div key={s.name}>
              <p className="font-medium mb-1 text-gray-300">{s.name}</p>
              <div className="w-full h-4 bg-gray-700 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${s.level}%` }}
                  transition={{ duration: 1.2 }}
                  className="h-4 bg-blue-600 rounded-full"
                />
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* CONTACT BOX */}
      <motion.section
        id="contact"
        className="max-w-4xl mx-auto px-6 py-12 mb-12 bg-gray-900 rounded-2xl shadow-2xl"
        initial="hidden"
        whileInView="visible"
        whileHover={{ scale: 1.03, y: -5, boxShadow: "0 25px 50px rgba(0,0,0,0.5)" }}
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <h2 className="pt-24 -mt-24 text-3xl font-bold mb-6 text-white text-center">
          Contact
        </h2>
        <form className="flex flex-col md:flex-row gap-4 justify-center flex-wrap">
          <input
            type="text"
            placeholder="Your Name"
            className="p-3 rounded-lg border border-gray-700 bg-gray-800 text-gray-200 flex-1 min-w-[200px]"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="p-3 rounded-lg border border-gray-700 bg-gray-800 text-gray-200 flex-1 min-w-[200px]"
          />
          <textarea
            placeholder="Your Message"
            className="p-3 rounded-lg border border-gray-700 bg-gray-800 text-gray-200 flex-1 min-w-[200px]"
          />
          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition transform hover:-translate-y-1">
            Send
          </button>
        </form>
      </motion.section>

      {/* FOOTER */}
      <footer className="mt-20 bg-black border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-6 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} YourName — Built with Next.js & Tailwind CSS
        </div>
      </footer>
    </div>
  );
}
