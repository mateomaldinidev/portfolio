"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MOTION_PRESETS, MOTION_TRANSITIONS } from "@/lib/motion";
import { useSectionTranslations } from "@/src/hooks/use-section-translations";

export function HeroSection() {
  const t = useSectionTranslations("hero");
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.section
      initial={MOTION_PRESETS.heroEnter.initial}
      animate={MOTION_PRESETS.heroEnter.animate}
      transition={MOTION_TRANSITIONS.section}
      className="mx-auto w-full max-w-3xl rounded-2xl border border-zinc-800/90 bg-zinc-900/45 p-8 text-center shadow-[0_20px_50px_-34px_rgba(56,189,248,0.55)] backdrop-blur-sm sm:p-12"
    >
      <h1 className="text-4xl font-semibold tracking-tight text-zinc-100 sm:text-6xl">
        {t("title")}
      </h1>
      <p className="mt-3 text-lg text-zinc-300 sm:text-xl">{t("subtitle")}</p>
      <p className="mx-auto mt-4 max-w-2xl text-zinc-400">{t("description")}</p>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <motion.div whileHover={shouldReduceMotion ? undefined : MOTION_PRESETS.hoverLiftSm} transition={MOTION_TRANSITIONS.micro}>
          <Button asChild>
            <Link href="#projects">{t("projectsButton")}</Link>
          </Button>
        </motion.div>
        <motion.div whileHover={shouldReduceMotion ? undefined : MOTION_PRESETS.hoverLiftSm} transition={MOTION_TRANSITIONS.micro}>
          <Button asChild variant="outline" className="border-zinc-700 bg-transparent text-zinc-100 hover:bg-zinc-800">
            <Link href="/cv.pdf" target="_blank" rel="noreferrer">
              {t("cvButton")}
            </Link>
          </Button>
        </motion.div>
      </div>
    </motion.section>
  );
}