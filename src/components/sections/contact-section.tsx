"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { Braces, Globe, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MOTION_PRESETS, MOTION_TRANSITIONS } from "@/lib/motion";
import { useSectionTranslations } from "@/src/hooks/use-section-translations";

const CONTACT_LINKS = {
  github: "https://github.com/",
  linkedin: "https://www.linkedin.com/",
  email: "mailto:mateo@example.com",
} as const;

export function ContactSection() {
  const t = useSectionTranslations("contact");
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.section
      id="contact"
      className="scroll-mt-24"
      initial={shouldReduceMotion ? undefined : MOTION_PRESETS.fadeInUp.initial}
      whileInView={shouldReduceMotion ? undefined : MOTION_PRESETS.fadeInUp.whileInView}
      viewport={MOTION_PRESETS.fadeInUp.viewport}
      transition={MOTION_TRANSITIONS.section}
    >
      <div className="rounded-2xl border border-zinc-800/90 bg-zinc-900/45 p-6 text-center shadow-[0_16px_40px_-30px_rgba(59,130,246,0.5)] backdrop-blur-sm sm:p-8">
        <h2 className="text-2xl font-semibold tracking-tight text-zinc-100 sm:text-3xl">
          {t("title")}
        </h2>
        <p className="mx-auto mt-2 max-w-xl text-zinc-400">{t("description")}</p>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <motion.div whileHover={shouldReduceMotion ? undefined : MOTION_PRESETS.hoverLiftSm} transition={MOTION_TRANSITIONS.micro}>
            <Button asChild variant="outline" className="border-zinc-700 bg-transparent text-zinc-100 transition-colors hover:bg-zinc-800">
              <Link href={CONTACT_LINKS.github} target="_blank" rel="noreferrer">
                <Braces className="size-4" />
                {t("github")}
              </Link>
            </Button>
          </motion.div>

          <motion.div whileHover={shouldReduceMotion ? undefined : MOTION_PRESETS.hoverLiftSm} transition={MOTION_TRANSITIONS.micro}>
            <Button asChild variant="outline" className="border-zinc-700 bg-transparent text-zinc-100 transition-colors hover:bg-zinc-800">
              <Link href={CONTACT_LINKS.linkedin} target="_blank" rel="noreferrer">
                <Globe className="size-4" />
                {t("linkedin")}
              </Link>
            </Button>
          </motion.div>

          <motion.div whileHover={shouldReduceMotion ? undefined : MOTION_PRESETS.hoverLiftSm} transition={MOTION_TRANSITIONS.micro}>
            <Button asChild variant="outline" className="border-zinc-700 bg-transparent text-zinc-100 transition-colors hover:bg-zinc-800">
              <Link href={CONTACT_LINKS.email}>
                <Mail className="size-4" />
                {t("email")}
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}