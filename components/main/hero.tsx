import { HeroContent } from "@/components/sub/hero-content";

export const Hero = () => {
  return (
    <div className="relative flex flex-col xl:h-screen w-full overflow-hidden">
      <video
        autoPlay
        muted
        loop
        className="hidden xl:flex rotate-180 absolute -top-[570px] md:-top-[420px] left-0 w-full h-[120vh] object-cover -z-20"
      >
        <source src="/videos/blackhole.webm" type="video/webm" />
      </video>

      <HeroContent />
    </div>
  );
};
