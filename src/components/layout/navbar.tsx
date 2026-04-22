"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { Container } from "@/src/components/layout/container";

const LINKS = [
  { key: "about", href: "#about" },
  { key: "projects", href: "#projects" },
  { key: "skills", href: "#skills" },
  { key: "contact", href: "#contact" },
] as const;

export function Navbar() {
  const t = useTranslations("navbar");

  return (
    <header className="sticky top-0 z-40 border-b border-zinc-800 bg-zinc-950/80 backdrop-blur">
      <Container className="flex h-16 items-center justify-between gap-3">
        <Link href="#top" className="text-sm font-semibold tracking-wide text-zinc-100">
          {t("logo")}
        </Link>

        <nav className="flex items-center gap-1 overflow-x-auto">
          {LINKS.map((link) => (
            <Button key={link.key} asChild variant="ghost" size="sm" className="text-zinc-300 hover:text-zinc-100">
              <Link href={link.href}>{t(link.key)}</Link>
            </Button>
          ))}
        </nav>
      </Container>
    </header>
  );
}