import { About } from "@/components/main/aboutme";
import { Contact } from "@/components/main/contat";
import { Education } from "@/components/main/eduation";
import { Encryption } from "@/components/main/encryption";
import { Experience } from "@/components/main/experience";
import { Hero } from "@/components/main/hero";
import { Projects } from "@/components/main/projects";
import { Skills } from "@/components/main/skills";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Projects />
        <Contact />
      </div>
    </main>
  );
}
