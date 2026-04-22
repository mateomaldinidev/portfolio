"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useSectionTranslations } from "@/src/hooks/use-section-translations";

export function HeroSection() {
  const t = useSectionTranslations("hero");

  return (
    <motion.section
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="mx-auto w-full max-w-3xl rounded-2xl border border-zinc-800 bg-zinc-900/60 p-8 text-center sm:p-12"
    >
      <h1 className="text-4xl font-semibold tracking-tight text-zinc-100 sm:text-6xl">
        {t("title")}
      </h1>
      <p className="mt-3 text-lg text-zinc-300 sm:text-xl">{t("subtitle")}</p>
      <p className="mx-auto mt-4 max-w-2xl text-zinc-400">{t("description")}</p>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <Button asChild>
          <Link href="#projects">{t("projectsButton")}</Link>
        </Button>
        <Button asChild variant="outline" className="border-zinc-700 bg-transparent text-zinc-100 hover:bg-zinc-800">
          <Link href="/cv.pdf" target="_blank" rel="noreferrer">
            {t("cvButton")}
          </Link>
        </Button>
      </div>
    </motion.section>
  );
}