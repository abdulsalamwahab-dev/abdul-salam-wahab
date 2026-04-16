import type { Metadata, Viewport } from "next";
import type { PropsWithChildren } from "react";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";

import { Footer } from "@/components/main/footer";
import { Navbar } from "@/components/main/navbar";
import { StarsCanvas } from "@/components/main/star-background";
import { siteConfig } from "@/config";
import { cn } from "@/lib/utils";

import "./globals.css";
import { FloatingSocials } from "@/components/ui/floating-socials";
import { SimpleCursor } from "@/components/ui/custom-cursor";
// import {  PremiumCursor } from "@/components/ui/custom-cursor";

// Font configurations
const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter", 
  display: 'swap', // Font loading optimized
});

const jakarta = Plus_Jakarta_Sans({ 
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: 'swap',
});

export const viewport: Viewport = {
  themeColor: "#030014",
};

export const metadata: Metadata = siteConfig;

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={cn(
          "bg-[#030014] overflow-y-scroll overflow-x-hidden antialiased",
          inter.variable, // Variable register ho gayi
          jakarta.variable, // Jakarta variable register ho gayi
          "font-inter" // Default font apply ho gaya
        )}
      >
        {/* <PremiumCursor /> */}
        <SimpleCursor />
        <StarsCanvas />
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <FloatingSocials />
        <Footer />
      </body>
    </html>
  );
}