"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  RxGithubLogo,
  RxLinkedinLogo,
  RxInstagramLogo,
} from "react-icons/rx";
import { FiMessageCircle } from "react-icons/fi";

export const FloatingSocials = () => {
  const [open, setOpen] = useState(false);
  const [showBadge, setShowBadge] = useState(true);
  const [text, setText] = useState("");

  const containerRef = useRef<HTMLDivElement | null>(null);
  const btnRef = useRef<HTMLButtonElement | null>(null);

  const fullText = "Hey 👋 Want to connect with me?";

  const socials = [
    {
      name: "GitHub",
      icon: RxGithubLogo,
      link: "https://github.com/abdulsalamwahab-dev",
    },
    {
      name: "LinkedIn",
      icon: RxLinkedinLogo,
      link: "https://www.linkedin.com/in/abdul-salam-wahab-981112231",
    },
    {
      name: "Instagram",
      icon: RxInstagramLogo,
      link: "https://www.instagram.com/abdul_salam_wahab",
    },
  ];

  // :white_check_mark: FIXED CLICK OUTSIDE LOGIC FOR DEPLOYMENT
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("touchstart", handleClickOutside); // Added for mobile/touch
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [open]);

  useEffect(() => {
    if (!open) {
      setText("");
      return;
    }

    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 30);

    return () => clearInterval(interval);
  }, [open]);

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const btn = btnRef.current;
    if (!btn) return;

    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    btn.style.transform = `translate(${x * 0.25}px, ${y * 0.25}px)`;
  };

  const resetMagnet = () => {
    if (btnRef.current) {
      btnRef.current.style.transform = "translate(0,0)";
    }
  };

  return (
    <div ref={containerRef} className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">

      {/* :speech_balloon: Chat Popup */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 60, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 60, scale: 0.9 }}
            className="w-72 p-3 rounded-2xl
                       bg-white/10 backdrop-blur-xl border border-white/20
                       shadow-2xl text-white"
          >
            <p className="text-sm mb-2 leading-snug">{text}</p>
            <div className="h-px bg-white/10 my-2" />
            <div className="flex flex-col gap-1.5">
              {socials.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.a
                    key={i}
                    href={item.link}
                    target="_blank"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 p-2 rounded-lg
                               hover:bg-white/10 transition"
                  >
                    <Icon /> {item.name}
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* :fire: Floating Button */}
      <motion.button
        ref={btnRef}
        onClick={(e) => {
          e.stopPropagation(); // :white_check_mark: Fix: Prevents immediate closing on click
          setOpen((prev) => !prev);
          setShowBadge(false);
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={resetMagnet}
        whileTap={{ scale: 0.9 }}
        animate={{ y: [0, -6, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="w-14 h-14 rounded-full
                   bg-gradient-to-r from-cyan-400 to-blue-500
                   text-white flex items-center justify-center
                   relative
                   shadow-[0_10px_30px_rgba(34,211,238,0.4)]
                   border border-white/20 overflow-visible"
      >
        <motion.span
          className="absolute w-20 h-20 rounded-full border border-cyan-400/20"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
        />
        <motion.span
          className="absolute w-28 h-28 rounded-full border border-purple-400/10"
          animate={{ rotate: -360 }}
          transition={{ repeat: Infinity, duration: 16, ease: "linear" }}
        />

        {showBadge && (
          <span className="absolute top-1 right-1 flex h-3 w-3">
            <span className="absolute inline-flex h-full w-full rounded-full
                               bg-red-500 opacity-75 animate-ping"></span>
            <span className="relative inline-flex rounded-full h-3 w-3
                               bg-red-600 shadow-[0_0_8px_rgba(239,68,68,0.8)]"></span>
          </span>
        )}

        <span className="absolute w-full h-full rounded-full bg-cyan-400 opacity-20 animate-ping"></span>

        <FiMessageCircle
          size={24}
          className="relative z-10 text-white drop-shadow-[0_0_10px_rgba(34,211,238,0.8)]"
        />
      </motion.button>
    </div>
  );
};