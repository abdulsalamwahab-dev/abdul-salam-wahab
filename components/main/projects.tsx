"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const PROJECT_DATA = [
  {
    title: "AI Multi-Vendor E-Commerce Saas",
    description:
      "Architected a Multi-vendor E-commerce SaaS with role-based dashboards, memberships, and automated coupon systems. Integrated LLM-driven AI for listing optimization and engineered an event-driven backend via Inngest for async workflows. Implemented secure payment gateways and optimized media for a production-ready, scalable ecosystem.",
    tech: ["Next.js", "Gemini AI", "Clerk", "Neon", "Inngest", "PostgreSQL", 'Imagekit', 'Tailwind CSS'],
    image: "/projects/ecommerce.jpg",
    github:
      "https://github.com/abdulsalamwahab-dev/gobucket-ai-multivendor-app",
    live: "https://gobucket-ai-multivendor-app-8qys.vercel.app/",
  },
  {
    title: "AI Note Taker SaaS App",
    description:
      "Architected an AI SaaS for PDF summarization and vector search using high-performance LLM pipelines. Integrated Paddle for secure subscription billing and utilized Convex for a real-time, reactive backend architecture. Delivered a scalable full-stack ecosystem with optimized API workflows and seamless user authentication.",
    tech: ["Next.js", "Gemini LLM", "Paddle", "Convex", "Clerk", "React"],
    image: "/projects/ai-pdf.jpg",
    github: "https://github.com/abdulsalamwahab-dev/AI-PDF-note-taker",
    live: "https://ai-pdf-note-taker-sigma.vercel.app/",
  },
  {
    title: "Analytics & Data Visualization Dashboard",
    description:
      "Built an analytics dashboard with interactive charts and KPI tracking using Recharts.Implemented schema validation with Zod and built reusable UI components for scalable workflows",
    tech: ["TypeScript","Next.js", "React", "ShadCN UI", "Zod", "Recharts"],
    image: "/projects/dashboard.jpg",
    github: "https://github.com/abdulsalamwahab-dev/nextjs-shadcn-dashboard",
    live: "https://nextjs-shadcn-dashboard-rosy.vercel.app/",
  },
  {
    title: "Community Discussion Platform",
    description:
      "A simple discussion forum where users can create posts, participate in conversations, and interact using a clean PHP-based backend with MySQL database support.",
    tech: ["PHP", "HTML", "CSS", "MySQL", 'AJAX'],
    image: "/projects/discussions.png",
    github: "https://github.com/abdulsalamwahab-dev/community-discussion-platform.git",
    live: "https://discussion-platform.wuaze.com/index.php?i=1",
  },
];

export const Projects = () => {
  const [active, setActive] = useState(PROJECT_DATA[0]);

  return (
    <section
      id="projects"
      className="overflow-hidden md:overflow-visible pt-20 md:py-20 xl:py-10 px-4 sm:px-6"
    >
      {/* TITLE */}
      <div className="max-w-7xl mx-auto px-6 text-center mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="px-4 text-center overflow-hidden"
        >
          {/* Small Tagline - Reduced for mobile spacing */}
          <h2 className="text-[10px] md:text-sm uppercase tracking-[0.2em] md:tracking-[0.3em] text-purple-400 font-semibold mb-2 md:mb-3">
            Creative Portfolio
          </h2>

          {/* Main Heading - text-3xl for mobile ensures "Projects" doesn't clip */}
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-4 md:mb-6 flex flex-wrap items-center justify-center gap-2 md:gap-4 leading-[1.1]">
            <span className="inline text-2xl md:text-5xl">🚀</span>
            <span>Featured</span>{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
              Projects
            </span>
          </h1>

     <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-lg leading-relaxed md:leading-loose px-2">
  A showcase of 
  {" "}
  <span className="text-white font-medium border-b border-purple-500/40 hover:border-purple-500/80 transition pb-0.5">
    technical craftsmanship
  </span>
  , featuring AI-integrated platforms and 
  {" "}
  <span className="text-white font-medium border-b border-purple-500/40 hover:border-purple-500/80 transition pb-0.5">
    full-stack solutions
  </span>{" "}
  engineered for scalability, performance, and real-world impact.
</p>

          {/* Premium Divider - Consistent with the rest of your sections */}
          <div className="relative w-16 md:w-24 h-[2px] mx-auto mt-6 md:mt-8 overflow-hidden rounded-full">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-shimmer" />
            <div className="w-full h-full bg-purple-500/30 blur-[1px]" />
          </div>
        </motion.div>
      </div>

      <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto items-start">
        {/* LEFT SIDE LIST - Nav Style */}
        {/* LEFT SIDE LIST - Prominent Style */}
        <div className="space-y-6">
          {PROJECT_DATA.map((project, index) => (
            <motion.div
              key={index}
              onClick={() => setActive(project)}
              whileHover={{ x: 10, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`cursor-pointer p-6 rounded-2xl border transition-all duration-500 relative overflow-hidden group
        ${
          active.title === project.title
            ? "border-cyan-400 bg-cyan-400/10 shadow-[0_0_30px_rgba(34,211,238,0.15)] ring-1 ring-cyan-400/30"
            : "border-white/10 bg-[#111122]/50 hover:border-purple-500/50 hover:bg-white/5"
        }`}
            >
              {/* Title - Bold and High Contrast */}
              <h3
                className={`text-lg font-bold tracking-tight transition-colors duration-300 ${
                  active.title === project.title
                    ? "text-cyan-400"
                    : "text-white/90"
                }`}
              >
                {project.title}
              </h3>

              {/* Tags - Clearly Visible */}
              <div className="flex flex-wrap gap-2 mt-3">
                {project.tech.slice(0, 3).map((t, i) => (
                  <span
                    key={i}
                    className={`text-[9px] uppercase font-black tracking-widest px-2 py-0.5 rounded-md border ${
                      active.title === project.title
                        ? "border-cyan-400/40 text-cyan-300 bg-cyan-400/10"
                        : "border-white/10 text-gray-400 bg-black/20"
                    }`}
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Active Indicator - Moving Glow */}
              {active.title === project.title && (
                <motion.div
                  layoutId="glowSidebar"
                  className="absolute left-0 top-0 bottom-0 w-[4px] bg-gradient-to-b from-purple-500 to-cyan-500 shadow-[0_0_15px_rgba(6,182,212,0.8)]"
                />
              )}
            </motion.div>
          ))}
        </div>

        {/* RIGHT SIDE PREVIEW - The SaaS Card */}
        <div className="md:col-span-2 relative min-h-[550px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.title}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.4 }}
              className="relative p-[1px] rounded-3xl group"
            >
              {/* THE SAAS GLOW BORDER - Matches Experience Section */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-60 blur-sm group-hover:opacity-100 animate-pulse transition-opacity duration-500" />

              {/* CARD INNER */}
              <div className="relative bg-zinc-900  backdrop-blur-xl  rounded-2xl overflow-hidden z-10">
                {/* IMAGE AREA */}
                <div className="w-full h-72 overflow-hidden relative group/img">
                  <img
                    src={active.image}
                    alt={active.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover/img:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050510] via-transparent to-transparent opacity-80" />
                </div>

                {/* CONTENT AREA */}
                <div className="p-10">
                  <h2 className="text-3xl font-bold text-white mb-4 tracking-tight">
                    {active.title}
                  </h2>
                  <p className="text-gray-400 text-lg leading-relaxed mb-8">
                    {active.description}
                  </p>

                  {/* TECH STACK CHIPS */}
                  <div className="flex flex-wrap gap-2 mb-10">
                    {active.tech.map((t, i) => (
                      <span
                        key={i}
                        className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-cyan-400 text-[10px] font-bold uppercase tracking-widest"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* ACTION BUTTONS */}
                  {/* ACTION BUTTONS - Perfectly Consistent with Resume Button */}
                  <div className="flex flex-wrap gap-5">
                    {/* Github Button */}
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={active.github}
                      target="_blank"
                      rel="noreferrer"
                      className="relative px-6 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm font-bold tracking-widest uppercase overflow-hidden group/btn hover:border-white/20 transition-all flex items-center justify-center"
                    >
                      <div className="absolute inset-0 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                      <span className="relative z-10 flex items-center gap-2">
                        <svg
                          className="w-5 h-5 fill-current"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                        </svg>
                        Code
                      </span>
                    </motion.a>

                    {/* Live Demo Button - Same Structure, Gradient Background */}
                    {active.live && (
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href={active.live}
                        target="_blank"
                        rel="noreferrer"
                        className="relative px-6 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-600 text-white text-sm font-bold tracking-widest uppercase overflow-hidden group/btn transition-all flex items-center justify-center shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:shadow-[0_0_30px_rgba(168,85,247,0.6)]"
                      >
                        <div className="absolute inset-0 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                        <span className="relative z-10 flex items-center gap-2">
                          <span>🔗</span> Demo
                        </span>
                      </motion.a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
