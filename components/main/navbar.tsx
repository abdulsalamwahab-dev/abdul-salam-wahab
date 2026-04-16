"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS, SOCIALS } from "@/constants";

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#hero");
  
  // Flickering fix ke liye ref
  const isScrollingRef = useRef(false);

  // 🔥 1140px Logic: Screen width track karne ke liye state
  const [isLargeScreen, setIsLargeScreen] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      // 1140px se niche humein burger menu chahiye
      setIsLargeScreen(window.innerWidth >= 1140);
    };

    const handleScroll = () => {
      if (isScrollingRef.current) return;

      const scrollPos = window.scrollY + 150;
      let current = "#hero";

      NAV_LINKS.forEach((link) => {
        const section = document.querySelector(link.link) as HTMLElement | null;
        if (!section) return;

        const top = section.offsetTop;
        const bottom = top + section.offsetHeight;

        if (scrollPos >= top && scrollPos < bottom) {
          current = link.link;
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);
    
    // Initial check
    handleResize();
    handleScroll();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavClick = (link: string) => {
    isScrollingRef.current = true;
    setActiveSection(link);
    
    setTimeout(() => {
      isScrollingRef.current = false;
    }, 800); 

    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="w-full h-[70px] fixed top-0 z-[100] px-4 lg:px-10 bg-[#030014]/80 backdrop-blur-[20px] border-b border-white/10">
      <div className="flex items-center justify-between h-full max-w-7xl mx-auto">
        
        {/* LEFT: LOGO */}
        <Link href="#hero" onClick={() => handleNavClick("#hero")} className="flex items-center gap-2 group shrink-0">
          <Image
            src="/dp.jpg"
            alt="logo"
            width={40}
            height={100}
            className="rounded-full"
          />
          <span className="hidden xl:block text-gray-200 font-bold tracking-tight">
            Abdul Salam Wahab
          </span>
        </Link>

        {/* CENTER: DESKTOP NAV - Only visible above 1140px */}
        {isLargeScreen && (
          <div className="hidden lg:flex flex-1 justify-center">
            <div className="flex items-center gap-1 p-1 rounded-full bg-black/40 border border-white/10">
              {NAV_LINKS.map((link) => {
                const isActive = activeSection === link.link;
                return (
                  <Link
                    key={link.title}
                    href={link.link}
                    onClick={() => handleNavClick(link.link)}
                    className={`relative px-4 py-2 text-[11px] font-bold uppercase tracking-[0.15em] transition-all duration-300 rounded-full
                      ${isActive ? "text-cyan-400" : "text-gray-400 hover:text-white"}
                    `}
                  >
                    <span className="relative z-10">{link.title}</span>
                    {isActive && (
                      <motion.div
                        layoutId="activeNavPill"
                        className="absolute inset-0 bg-white/10 rounded-full border border-white/10"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                );
              })}
            </div>
          </div>
        )}

        {/* RIGHT: SOCIALS - Hidden on tablet/mobile via 1140px check */}
        {isLargeScreen && (
          <div className="hidden lg:flex items-center gap-5 shrink-0">
            {SOCIALS.map(({ link, name, icon: Icon }) => (
              <Link key={name} href={link} target="_blank" className="group">
                <Icon className="h-5 w-5 text-gray-400 group-hover:text-cyan-400 transition-all duration-300" />
              </Link>
            ))}
          </div>
        )}

        {/* BURGER BUTTON: Visible below 1140px */}
        {!isLargeScreen && (
          <button 
            className="p-2 text-white" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
             <div className="w-6 h-5 flex flex-col justify-between">
                <span className={`block h-0.5 w-full bg-current transform transition ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                <span className={`block h-0.5 w-full bg-current transition ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
                <span className={`block h-0.5 w-full bg-current transform transition ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
             </div>
          </button>
        )}
      </div>

      {/* MOBILE/TABLET MENU */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-[70px] left-0 w-full bg-[#030014] border-b border-white/10 p-8 flex flex-col items-center gap-6 z-[99]"
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.title}
                href={link.link}
                onClick={() => handleNavClick(link.link)}
                className={`text-sm font-bold tracking-[0.2em] uppercase 
                  ${activeSection === link.link ? "text-cyan-400" : "text-gray-400"}
                `}
              >
                {link.title}
              </Link>
            ))}
            
            {/* Socials inside burger menu for tablet/mobile */}
            <div className="flex gap-8 mt-4">
              {SOCIALS.map(({ link, name, icon: Icon }) => (
                <Link key={name} href={link} target="_blank">
                  <Icon className="h-6 w-6 text-white" />
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};