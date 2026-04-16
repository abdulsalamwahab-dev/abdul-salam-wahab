"use client";

import React from "react";
import { SOCIALS } from "@/constants";

export const Footer = () => {
  return (
    <footer className="relative w-full py-10 mt-16 bg-[#030014] border-t border-white/[0.08] overflow-hidden">
      
      {/* Soft Glow Top Line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
        
        {/* Main Branding - Standard Premium */}
        <div className="flex flex-col items-center text-center space-y-2 mb-6">
          <h2 className="text-2xl md:text-[30px] font-extrabold tracking-tighter text-white">
            Abdul Salam<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500"> Wahab</span>
          </h2>
          
          <p className="text-gray-400 text-xs md:text-sm max-w-2xl leading-relaxed font-light px-2">
            Dedicated <span className="text-gray-200 font-medium">Full Stack Software Engineer</span> specialized in 
            <span className="text-gray-200 font-medium"> high-performance web apps</span>, 
            <span className="text-gray-200 font-medium"> system architectures</span>, and 
            <span className="text-gray-200 font-medium"> AI solutions</span>.
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-5 mb-10">
          {SOCIALS.map(({ link, name, icon: Icon }) => (
            <a 
              key={name} 
              href={link} 
              target="_blank" 
              className="p-3 rounded-full bg-black/40 border border-white/5 text-gray-400 hover:text-white hover:border-cyan-500/50 hover:shadow-[0_0_12px_rgba(34,211,238,0.2)] transition-all duration-300"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>

     {/* 🔥 REWRITTEN COPYRIGHT SECTION (Option 1) */}
<div className="relative w-full border-t border-white/[0.05] pt-6 text-center">
  
  {/* Name is now small and part of the credit line */}
  <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-x-4 text-[10px] md:text-[11px] font-medium uppercase tracking-[0.2em] text-gray-500">
     <p>© {new Date().getFullYear()} All rights reserved.</p>
     <p className="hidden md:block text-gray-700">|</p>
     <p>
       Built with <span className="text-purple-500">PASSION</span> ✦ by{" "}
       <span className="text-white font-bold hover:text-cyan-400 transition cursor-default">
         Abdul Salam Wahab
       </span>
     </p>
     <p className="hidden md:block text-gray-700">|</p>
     <p>Siegen, Germany</p>
  </div>
  
</div>
      </div>

      {/* Background Ambient Glows */}
      <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-cyan-900/5 blur-[80px] -z-10" />
      <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-purple-900/5 blur-[80px] -z-10" />
    </footer>
  );
};