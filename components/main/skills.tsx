"use client";

import { motion } from "framer-motion";
import { SkillDataProvider } from "@/components/sub/skill-data-provider";
import { SkillText } from "@/components/sub/skill-text";
import { BACKEND_SKILL, FRONTEND_SKILL, FULLSTACK_SKILL } from "@/constants";

interface Skill {
  readonly skill_name: string;
  readonly image: string;
  readonly width: number;
  readonly height: number;
}

export const Skills = () => {
  // SkillCategory function yahan hona chahiye
  const SkillCategory = ({ title, skills, color }: { title: string; skills: readonly Skill[]; color: string }) => (
    <motion.div 
      whileHover={{ scale: 1.02 }}
      className="relative p-[2px] rounded-2xl group h-full mb-4 md:mb-0"
    >
      {/* Animated Gradient Border */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-70 blur-sm group-hover:opacity-100 animate-pulse transition-opacity duration-500" />

      {/* Card Inner */}
      <div className="relative bg-zinc-900/95 backdrop-blur-md rounded-2xl p-3 md:p-6 h-full">
        <div className="mb-3 md:mb-6 flex items-center justify-between">
          <h3 className={`text-[9px] md:text-[12px] font-bold uppercase tracking-[0.2em] ${color}`}>
            {title}
          </h3>
          <div className={`h-[1px] w-6 ${color.replace('text-', 'bg-')} opacity-30 md:hidden`} />
        </div>
        
        {/* Grid for Skills */}
        <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-4 lg:grid-cols-5 gap-2 md:gap-4">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.skill_name}
              whileHover={{ scale: 1.1 }}
              /* FIXED: Added hover z-index to bring the specific skill to front */
              className="group/skill relative flex items-center justify-center p-1.5 md:p-2 rounded-lg md:rounded-xl bg-white/[0.03] border border-white/5 transition-all duration-200 hover:z-[999]"
            >
              {/* VIBRANT BADGE - Fixed Z-index and visibility */}
              <div className="absolute -top-12 left-1/2 -translate-x-1/2 px-3 py-1.5 rounded-lg opacity-0 group-hover/skill:opacity-100 transition-all duration-300 pointer-events-none z-[9999] whitespace-nowrap bg-[#030014] border border-white/20 shadow-[0_0_15px_rgba(0,0,0,1)] scale-90 group-hover/skill:scale-100">
                <span className={`text-[11px] font-bold tracking-wider ${color}`}>
                  {skill.skill_name}
                </span>
                {/* Triangle Arrow */}
                <div className="absolute top-full left-1/2 -translate-x-1/2 border-[6px] border-transparent border-t-[#030014]" />
              </div>

              {/* Icon Container */}
              <div className="w-7 h-7 md:w-10 md:h-10 flex items-center justify-center relative z-10">
                <SkillDataProvider
                  src={skill.image}
                  name={skill.skill_name}
                  width={skill.width * 0.5} 
                  height={skill.height * 0.5}
                  index={i}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );

  return (
    <section id="skills" className="flex flex-col items-center justify-center relative overflow-hidden py-10 md:py-20 lg:px-10">
        
      <SkillText />

      <div className="z-20 w-full max-w-[1200px] mt-4 md:mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 px-4">
        <SkillCategory 
          title="Interface" 
          skills={FRONTEND_SKILL} 
          color="text-cyan-400"
        />
        <SkillCategory 
          title="Server" 
          skills={BACKEND_SKILL} 
          color="text-purple-400"
        />
        <SkillCategory 
          title="Architecture" 
          skills={FULLSTACK_SKILL} 
          color="text-emerald-400"
        />
      </div>
    </section>
  );
};