"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";

export const SkillText = () => {
  return (
    <div className="w-full h-auto flex flex-col items-center justify-center ">
      {/* TECHNICAL SKILLS HEADER - Premium & Consistent Format */}
      <div className="max-w-7xl mx-auto px-6 text-center mb-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="px-4 text-center overflow-hidden" // Mobile safety wrap
        >
          {/* Small Tagline - Optimized tracking for mobile */}
          <h2 className="text-[10px] md:text-sm uppercase tracking-[0.2em] md:tracking-[0.3em] text-purple-400 font-semibold mb-2 md:mb-3">
            My Tech Stack
          </h2>

          {/* Main Heading - Responsive text-3xl for mobile */}
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-4 md:mb-6 flex flex-wrap items-center justify-center gap-2 md:gap-4 leading-[1.1]">
            <span className="inline text-2xl md:text-5xl">🛠️</span>
            <span>Technical</span>{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
              Skills
            </span>
          </h1>

<p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-lg leading-relaxed md:leading-loose px-2">
  A curated selection of technologies I leverage to architect{" "}
  <span className="text-white font-medium border-b border-purple-500/40 hover:border-purple-500/80 transition pb-0.5">
    robust, scalable systems
  </span>{" "}
  and solve{" "}
  <span className="text-white font-medium border-b border-purple-500/40 hover:border-purple-500/80 transition pb-0.5">
    complex engineering challenges.
  </span>
</p>

          {/* Premium Divider - Consistent width for mobile */}
          <div className="relative w-16 md:w-24 h-[2px] mx-auto mt-6 md:mt-8 overflow-hidden rounded-full">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-shimmer" />
            <div className="w-full h-full bg-purple-500/30 blur-[1px]" />
          </div>
        </motion.div>
      </div>
    </div>
  );
};
