"use client";

import { useSectionTranslations } from "@/src/hooks/use-section-translations";

export function HeroSection() {
  const t = useSectionTranslations("hero");

  return (
    <section className="mx-auto w-full max-w-2xl rounded-2xl border border-zinc-200 bg-white p-10 text-center shadow-sm">
      <h1 className="text-4xl font-semibold tracking-tight text-zinc-900">
        {t("title")}
      </h1>
      <p className="mt-3 text-lg text-zinc-700">{t("subtitle")}</p>
      <p className="mt-4 text-zinc-600">{t("description")}</p>
    </section>
  );
}