import { HeroSection } from "@/src/components/sections/hero-section";
import { AboutSection } from "@/src/components/sections/about-section";
import { ProjectsSection } from "@/src/components/sections/projects-section";
import { SkillsSection } from "@/src/components/sections/skills-section";
import { ContactSection } from "@/src/components/sections/contact-section";

export default function HomePage() {
  return (
    <main id="top" className="flex min-h-screen flex-col gap-20 py-10 sm:py-14">
      <HeroSection />

      <AboutSection />

      <ProjectsSection />

      <SkillsSection />

      <ContactSection />
    </main>
  );
}