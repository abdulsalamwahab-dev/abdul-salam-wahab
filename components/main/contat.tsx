"use client";

import { useRef, useState, FormEvent } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const form = useRef<HTMLFormElement | null>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const sendEmail = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    if (!form.current) return;

    try {
      const result = await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string,
      );

      console.log("SUCCESS:", result);
      setSuccess(true);
      form.current.reset();

      setTimeout(() => setSuccess(false), 5000);
    } catch (error) {
      console.error("EmailJS Error:", error);
      alert("Message failed! Check EmailJS setup.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative pt-20 xl:py-20 px-6">
      {/* HEADER */}
      <div className="max-w-7xl mx-auto px-6 text-center mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="px-4 text-center overflow-hidden"
        >
          {/* Small Tagline - Reduced spacing for mobile */}
          <h2 className="text-[10px] md:text-sm uppercase tracking-[0.2em] md:tracking-[0.3em] text-purple-400 font-semibold mb-2 md:mb-3">
            Let&apos;s Connect
          </h2>

          {/* Main Heading - text-3xl ensures it stays within mobile boundaries */}
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-4 md:mb-6 flex flex-wrap items-center justify-center gap-2 md:gap-4 leading-[1.1]">
            <span className="inline text-2xl md:text-5xl">☎️</span>
            <span>Get In</span>{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
              Touch
            </span>
          </h1>

          <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-lg leading-relaxed md:leading-loose px-2">
            Have a vision or a complex technical challenge? Let's collaborate to
            engineer{" "}
            <span className="text-white font-medium border-b border-purple-500/40 hover:border-purple-500/80 transition pb-0.5">
              scalable digital products
            </span>{" "}
            and turn your strategic goals into{" "}
            <span className="text-white font-medium border-b border-purple-500/40 hover:border-purple-500/80 transition pb-0.5">
              production-ready reality.
            </span>
          </p>

          {/* Premium Divider - Balanced for mobile view */}
          <div className="relative w-16 md:w-24 h-[2px] mx-auto mt-6 md:mt-8 overflow-hidden rounded-full">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-shimmer" />
            <div className="w-full h-full bg-purple-500/30 blur-[1px]" />
          </div>
        </motion.div>
      </div>

      {/* GRID */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* LEFT */}
        <div className="space-y-8 text-gray-300">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-jakarta font-bold text-white tracking-tight">
              Let’s build the <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                future together
              </span>
              <span>🤝</span>
            </h2>

            <p className="text-gray-400 font-inter text-base md:text-lg leading-relaxed max-w-xl">
              Focused on engineering{" "}
              <span className="text-white">high-performance apps</span>,
              scalable SaaS platforms, and{" "}
              <span className="text-white">AI-integrated tools</span> with clean
              UI.
            </p>
          </div>

          {/* CLEANER CONTACT INFO - No more "Gandy Pills" */}
          <div className="flex flex-col gap-6 pt-4 font-inter">
            {/* Email Row */}
            <a
              href="mailto:abd.islam456@gmail.com"
              className="group flex items-center gap-4 w-fit transition-all duration-300"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-white/[0.03] border border-white/10 group-hover:border-cyan-400/50 group-hover:bg-cyan-400/5 transition-all">
                <span className="text-xl group-hover:scale-110 transition-transform">
                  📧
                </span>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold">
                  Email
                </p>
                <p className="text-gray-200 group-hover:text-cyan-400 transition-colors">
                  abd.islam456@gmail.com
                </p>
              </div>
            </a>

            {/* Phone Row */}
            <a
              href="tel:+491604530011"
              className="group flex items-center gap-4 w-fit transition-all duration-300"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-white/[0.03] border border-white/10 group-hover:border-purple-400/50 group-hover:bg-purple-400/5 transition-all">
                <span className="text-xl group-hover:scale-110 transition-transform">
                  📱
                </span>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold">
                  Call
                </p>
                <p className="text-gray-200 group-hover:text-purple-400 transition-colors">
                  +49 160 4530011
                </p>
              </div>
            </a>

            {/* Location Row */}
            <div className="flex items-center gap-4 w-fit">
              <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-white/[0.03] border border-white/10">
                <span className="text-xl">📍</span>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold">
                  Location
                </p>
                <p className="text-gray-200">Siegen, North Rhine-Westphalia, Germany.</p>
              </div>
            </div>
          </div>
        </div>
        {/* 🔥 RIGHT FORM - Updated with Consistent Glow */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.01 }} // Subtle scale on hover
          className="relative p-[2px] rounded-2xl group" // Parent for the glow
        >
          {/* The Glowing Background Layer (Same as Experience/Skills) */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-70 blur-sm group-hover:opacity-100 animate-pulse transition-opacity duration-500" />

          {/* Main Form Container - Updated Background and Blur */}
          <div className="relative p-8 rounded-2xl bg-zinc-900/95 backdrop-blur-md shadow-2xl h-full z-10">
            <form
              ref={form}
              onSubmit={sendEmail}
              className="flex flex-col gap-5"
            >
              <input
                type="text"
                name="user_name"
                placeholder="Full Name"
                className="p-4 rounded-xl bg-white/5 border border-white/10 text-white outline-none focus:border-cyan-500/50 transition-colors"
                required
              />

              <input
                type="email"
                name="user_email"
                placeholder="Email Address"
                className="p-4 rounded-xl bg-white/5 border border-white/10 text-white outline-none focus:border-cyan-500/50 transition-colors"
                required
              />

              <textarea
                name="message"
                placeholder="Message"
                rows={4}
                className="p-4 rounded-xl bg-white/5 border border-white/10 text-white outline-none resize-none focus:border-cyan-500/50 transition-colors"
                required
              />

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={loading}
                className="relative py-4 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-bold tracking-widest uppercase text-xs overflow-hidden group/btn shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:shadow-[0_0_30px_rgba(168,85,247,0.6)] transition-all flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {/* PREVIEW SHIMMER */}
                <div className="absolute inset-0 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                <span className="relative z-10 flex items-center gap-2">
                  {loading ? (
                    <>
                      <svg
                        className="animate-spin h-4 w-4 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      SENDING...
                    </>
                  ) : (
                    "SEND MESSAGE"
                  )}
                </span>
              </motion.button>

              {success && (
                <p className="text-green-400 text-center text-sm animate-bounce">
                  Message sent successfully 🚀
                </p>
              )}
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
