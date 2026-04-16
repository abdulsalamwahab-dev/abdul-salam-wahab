"use client";

import { motion } from "framer-motion";
import Lottie from "lottie-react";
import studyAnimation from "@/assets/space.json";

const EDUCATION = [
  {
    degree: "Master of Science in Computer Science",
    institute: "Universität Siegen",
    location: "Siegen, Germany",
    year: "2025 - ongoing",
    logo: "/Uni_Siegen_Logo_klein.png",
  },
  {
    degree: "Bachelor in Computer Science",
    institute: "Virtual University of Pakistan",
    location: "Karachi, Pakistan",
    year: "2021 - 2025",
    logo: "/vupakistan_logo.jfif",
  },
];

export const Education = () => {
  return (
    <section id="education" className="px-6">
      {/* ACADEMIC BACKGROUND HEADER - Premium & Consistent Format */}
      <div className="max-w-7xl mx-auto px-6 text-center mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="px-4 text-center overflow-hidden" // Prevents any side scrolling
        >
          {/* Small Tagline - Reduced for mobile clarity */}
          <h2 className="text-[10px] md:text-sm uppercase tracking-[0.2em] md:tracking-[0.3em] text-purple-400 font-semibold mb-2 md:mb-3">
            The Learning Odyssey
          </h2>

          {/* Main Heading - text-3xl ensures "Background" stays on screen */}
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-4 md:mb-6 flex flex-wrap items-center justify-center gap-2 md:gap-4 leading-[1.1]">
            <span className="inline text-2xl md:text-5xl">🎓</span>
            <span>Academic</span>{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
              Background
            </span>
          </h1>

          {/* Description - Optimized for readability on small screens */}
          <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-lg leading-relaxed md:leading-loose px-2">
  A journey through 
  {" "}
  <span className="text-white font-medium border-b border-purple-500/40 hover:border-purple-500/80 transition pb-0.5">
    advanced computer science
  </span>{" "}
  and research-driven engineering, dedicated to solving complex problems 
  through{" "}
  <span className="text-white font-medium border-b border-purple-500/40 hover:border-purple-500/80 transition pb-0.5">
    Master's level specialization.
  </span>
</p>

          {/* Premium Divider - Balanced width */}
          <div className="relative w-16 md:w-24 h-[2px] mx-auto mt-6 md:mt-8 overflow-hidden rounded-full">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-shimmer" />
            <div className="w-full h-full bg-purple-500/30 blur-[1px]" />
          </div>
        </motion.div>
      </div>

      <div className="grid md:grid-cols-2 gap-10 items-center max-w-6xl mx-auto mt-[-60px]">
        {/* LEFT ANIMATION */}
        <div className="hidden md:block">
          <Lottie animationData={studyAnimation} loop={true} />
        </div>

        {/* RIGHT CARDS */}
        <div className="space-y-6">
          {EDUCATION.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              whileHover={{ scale: 1.03 }}
              className="relative p-[2px] rounded-2xl group"
            >
              {/* Gradient Border */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-70 blur-sm group-hover:opacity-100 animate-pulse" />

              {/* Card */}
              <div className="relative bg-white dark:bg-zinc-900 rounded-2xl p-6 shadow-xl">
                {/* TOP */}
                <div className="flex items-center gap-4">
                  <motion.img
                    src={edu.logo}
                    alt={edu.institute}
                    className="w-14 h-14 rounded-xl object-contain bg-white p-2 shadow"
                    whileHover={{ rotate: 5, scale: 1.1 }}
                  />

                  <div>
                    <h3 className="text-lg font-semibold text-black dark:text-white">
                      {edu.degree}
                    </h3>

                    {/* FIXED: Institute + Location INLINE (clean) */}
                    <p className="text-sm text-gray-500 flex flex-wrap items-center gap-2">
                      {edu.institute}
                      <span className="text-gray-400">•</span>
                      <span className="text-gray-400">📍 {edu.location}</span>
                    </p>
                  </div>
                </div>

                {/* YEAR */}
                <div className="mt-4">
                  <p className="text-sm text-gray-400">{edu.year}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
