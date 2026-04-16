import { FaYoutube, FaFacebook } from "react-icons/fa";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";


export const SOCIALS = [
  {
    name: "Instagram",
    icon: RxInstagramLogo,
    link: "https://www.instagram.com/abdul_salam_wahab",
  },
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
] as const;

// Isko constants/index.ts mein replace kar lo.
export const FRONTEND_SKILL = [
  { skill_name: "HTML", image: "html.png", width: 70, height: 70 },
  { skill_name: "CSS", image: "css.png", width: 70, height: 70 },
  { skill_name: "JavaScript", image: "js.png", width: 60, height: 60 },
  { skill_name: "TypeScript", image: "ts.png", width: 70, height: 70 },
  { skill_name: "React", image: "react.png", width: 70, height: 70 },
  { skill_name: "Next.js", image: "next.png", width: 70, height: 70 },

  { skill_name: "Tailwind CSS", image: "tailwind.png", width: 70, height: 70 },
  { skill_name: "Material UI", image: "mui.png", width: 70, height: 70 },
  { skill_name: "ShadCN UI", image: "shadcn.png", width: 70, height: 70 },

  { skill_name: "Redux", image: "redux.png", width: 70, height: 70 },
  { skill_name: "React Query", image: "reactquery.png", width: 70, height: 70 },
  { skill_name: "Zustand", image: "zustand.png", width: 65, height: 65 },

  // ✅ NEW (Frontend relevant)
  { skill_name: "React Hook Form", image: "react-hook-form.png", width: 65, height: 65 },
  { skill_name: "Zod", image: "zod.png", width: 65, height: 65 },
  { skill_name: "Mapbox", image: "mapbox-2.svg", width: 65, height: 65 },
] as const;

export const BACKEND_SKILL = [
  { skill_name: "Node.js", image: "node.png", width: 70, height: 70 },
  { skill_name: "Express.js", image: "express.png", width: 70, height: 70 },

  { skill_name: "MongoDB", image: "mongodb.png", width: 40, height: 40 },
  { skill_name: "PostgreSQL", image: "postgresql.png", width: 65, height: 65 },
  { skill_name: "MySQL", image: "mysql.png", width: 65, height: 65 },

  { skill_name: "Prisma", image: "prisma.png", width: 65, height: 65 },
  { skill_name: "Neon DB", image: "neon.png", width: 70, height: 70 },

  { skill_name: "Firebase", image: "firebase.png", width: 50, height: 50 },
  { skill_name: "Convex", image: "convex.png", width: 70, height: 70 },

  { skill_name: "Clerk Auth", image: "ClerkAuth.png", width: 70, height: 70 },

  // ✅ NEW (Backend/Auth)
  { skill_name: "JWT", image: "jwt.webp", width: 65, height: 65 },

  { skill_name: "Inngest", image: "inngest.png", width: 70, height: 70 },
] as const;

export const FULLSTACK_SKILL = [
  { skill_name: "Docker", image: "docker.png", width: 65, height: 65 },
  { skill_name: "AWS", image: "aws.png", width: 70, height: 70 },

  { skill_name: "REST APIs", image: "api.png", width: 65, height: 65 },
  { skill_name: "SaaS Architecture", image: "saas.png", width: 65, height: 65 },

  { skill_name: "LLM Integration", image: "ai.svg", width: 65, height: 65 },
  { skill_name: "ImageKit", image: "imagekit.png", width: 65, height: 65 },
] as const;


export const NAV_LINKS = [
  {
    title: "Home",
    link: "#home",
  },
  {
    title: "About",
    link: "#about-me",
  },
  {
    title: "Skills",
    link: "#skills",
  },
    {
    title: "Experience",
    link: "#experience",
  },
    {
    title: "Education",
    link: "#education",
  },
  {
    title: "Projects",
    link: "#projects",
  },

  {
    title: "Contact",
    link: "#contact",
  },
];
