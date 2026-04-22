"use client";

import Link from "next/link";
import { Braces, Globe, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSectionTranslations } from "@/src/hooks/use-section-translations";

const CONTACT_LINKS = {
  github: "https://github.com/",
  linkedin: "https://www.linkedin.com/",
  email: "mailto:mateo@example.com",
} as const;

export function ContactSection() {
  const t = useSectionTranslations("contact");

  return (
    <section id="contact" className="scroll-mt-24">
      <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 text-center sm:p-8">
        <h2 className="text-2xl font-semibold tracking-tight text-zinc-100 sm:text-3xl">
          {t("title")}
        </h2>
        <p className="mx-auto mt-2 max-w-xl text-zinc-400">{t("description")}</p>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <Button asChild variant="outline" className="border-zinc-700 bg-transparent text-zinc-100 hover:bg-zinc-800">
            <Link href={CONTACT_LINKS.github} target="_blank" rel="noreferrer">
              <Braces className="size-4" />
              {t("github")}
            </Link>
          </Button>

          <Button asChild variant="outline" className="border-zinc-700 bg-transparent text-zinc-100 hover:bg-zinc-800">
            <Link href={CONTACT_LINKS.linkedin} target="_blank" rel="noreferrer">
              <Globe className="size-4" />
              {t("linkedin")}
            </Link>
          </Button>

          <Button asChild variant="outline" className="border-zinc-700 bg-transparent text-zinc-100 hover:bg-zinc-800">
            <Link href={CONTACT_LINKS.email}>
              <Mail className="size-4" />
              {t("email")}
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}