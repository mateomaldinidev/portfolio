import { HeroSection } from "@/src/components/sections/hero-section";
import { AboutSection } from "@/src/components/sections/about-section";
import { ProjectsSection } from "@/src/components/sections/projects-section";
import { SkillsSection } from "@/src/components/sections/skills-section";
import { getTranslations } from "next-intl/server";

export default async function HomePage() {
  const t = await getTranslations("navbar");

  return (
    <main id="top" className="flex min-h-screen flex-col gap-20 py-10 sm:py-14">
      <HeroSection />

      <AboutSection />

      <ProjectsSection />

      <SkillsSection />

      <section
        id="contact"
        className="scroll-mt-24 rounded-2xl border border-zinc-800 bg-zinc-900/50 p-8"
      >
        <h2 className="text-xl font-semibold text-zinc-100">{t("contact")}</h2>
      </section>
    </main>
  );
}