"use client";

import { useSectionTranslations } from "@/src/hooks/use-section-translations";

export function AboutSection() {
  const t = useSectionTranslations("about");

  return (
    <section
      id="about"
      className="scroll-mt-24 rounded-2xl border border-zinc-800 bg-zinc-900/50 px-6 py-10 text-center sm:px-10"
    >
      <h2 className="text-2xl font-semibold tracking-tight text-zinc-100 sm:text-3xl">
        {t("title")}
      </h2>
      <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-zinc-300 sm:text-lg">
        {t("description")}
      </p>
    </section>
  );
}