"use client";

import { motion, useReducedMotion } from "framer-motion";
import { MOTION_PRESETS, MOTION_TRANSITIONS } from "@/lib/motion";
import { useSectionTranslations } from "@/src/hooks/use-section-translations";

export function AboutSection() {
  const t = useSectionTranslations("about");
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.section
      id="about"
      initial={shouldReduceMotion ? undefined : MOTION_PRESETS.fadeInUp.initial}
      whileInView={shouldReduceMotion ? undefined : MOTION_PRESETS.fadeInUp.whileInView}
      viewport={MOTION_PRESETS.fadeInUp.viewport}
      transition={MOTION_TRANSITIONS.section}
      className="scroll-mt-24 rounded-2xl border border-zinc-800/90 bg-zinc-900/45 px-6 py-10 text-center shadow-[0_16px_40px_-30px_rgba(34,211,238,0.45)] backdrop-blur-sm sm:px-10"
    >
      <h2 className="text-2xl font-semibold tracking-tight text-zinc-100 sm:text-3xl">
        {t("title")}
      </h2>
      <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-zinc-300 sm:text-lg">
        {t("description")}
      </p>
    </motion.section>
  );
}