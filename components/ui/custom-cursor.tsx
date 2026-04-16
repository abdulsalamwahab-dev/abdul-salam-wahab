"use client";

import React, { useEffect, useRef } from "react";

export const SimpleCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Sirf desktop par cursor activate karein (touch devices pe zarurat nahi hoti aur performance girati hai)
    if (window.innerWidth < 768) return;

    const cursor = cursorRef.current;
    if (!cursor) return;

    // Mouse coordinates variables
    let mouseX = 0;
    let mouseY = 0;

    const moveMouse = (e: MouseEvent) => {
      // Direct CSS variable update - ye GPU-accelerated hota hai (Lag-free)
      cursor.style.setProperty("--mouse-x", `${e.clientX}px`);
      cursor.style.setProperty("--mouse-y", `${e.clientY}px`);
    };

    const handleHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Agar clickable cheez hai (button, link, ya .group), to scale up karo
      if (target.closest("button, a, .group, .clickable")) {
        cursor.style.transform = "translate(-50%, -50%) scale(1.6)";
        cursor.style.borderColor = "rgba(34, 211, 238, 0.8)"; // Cyan Glow
        cursor.style.backgroundColor = "rgba(34, 211, 238, 0.05)";
      } else {
        // Normal state
        cursor.style.transform = "translate(-50%, -50%) scale(1)";
        cursor.style.borderColor = "rgba(255, 255, 255, 0.4)"; // Subtle White
        cursor.style.backgroundColor = "transparent";
      }
    };

    window.addEventListener("mousemove", moveMouse);
    window.addEventListener("mouseover", handleHover);

    return () => {
      window.removeEventListener("mousemove", moveMouse);
      window.removeEventListener("mouseover", handleHover);
    };
  }, []);

 return (
  <div
    ref={cursorRef}
    style={{
      // "as any" use karne se TypeScript error dena band kar dega
      "--mouse-x": "50vw",
      "--mouse-y": "50vh",
      left: "var(--mouse-x)",
      top: "var(--mouse-y)",
      transform: "translate(-50%, -50%)",
    } as React.CSSProperties} // Cast as CSSProperties to allow custom variables
    className="fixed w-7 h-7 border-[1.5px] border-white/40 rounded-full pointer-events-none z-[9999] transition-[transform,border-color,background-color] duration-300 ease-out hidden md:block"
  />
);
};