"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Container } from "@/src/components/layout/container";
import { cn } from "@/lib/utils";

const LINKS = [
  { key: "about", href: "#about" },
  { key: "projects", href: "#projects" },
  { key: "skills", href: "#skills" },
  { key: "contact", href: "#contact" },
] as const;

const LOCALES = ["en", "es"] as const;
type AppLocale = (typeof LOCALES)[number];

function getLocaleHref(pathname: string, targetLocale: AppLocale) {
  const segments = pathname.split("/").filter(Boolean);

  if (segments.length > 0 && LOCALES.includes(segments[0] as (typeof LOCALES)[number])) {
    segments[0] = targetLocale;
    return `/${segments.join("/")}`;
  }

  return `/${targetLocale}${pathname === "/" ? "" : pathname}`;
}

export function Navbar() {
  const t = useTranslations("navbar");
  const pathname = usePathname();
  const shouldReduceMotion = useReducedMotion();
  const activeLocale: AppLocale = pathname.startsWith("/es") ? "es" : "en";
  const nextLocale: AppLocale = activeLocale === "es" ? "en" : "es";
  const localeHref = getLocaleHref(pathname, nextLocale);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 8);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 h-16 bg-zinc-950/55 backdrop-blur-md transition-colors",
        isScrolled ? "border-b border-zinc-800/80" : "border-b border-transparent"
      )}
    >
      <Container className="flex h-full items-center gap-3">
        <motion.div whileHover={shouldReduceMotion ? undefined : { y: -1 }} transition={{ duration: 0.16, ease: "easeOut" }}>
          <Link href="#top" className="shrink-0 text-sm font-semibold tracking-wide text-zinc-100 transition-colors hover:text-cyan-300">
            {t("logo")}
          </Link>
        </motion.div>

        <nav className="flex min-w-0 flex-1 items-center justify-end gap-1 overflow-x-auto whitespace-nowrap [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {LINKS.map((link) => (
            <motion.div key={link.key} whileHover={shouldReduceMotion ? undefined : { y: -1 }} transition={{ duration: 0.16, ease: "easeOut" }}>
              <Button asChild variant="ghost" size="sm" className="text-zinc-300 transition-colors hover:text-zinc-100">
                <Link href={link.href}>{t(link.key)}</Link>
              </Button>
            </motion.div>
          ))}

          <motion.div whileHover={shouldReduceMotion ? undefined : { y: -1 }} transition={{ duration: 0.16, ease: "easeOut" }}>
            <Button
              asChild
              variant="ghost"
              size="sm"
              className="ml-2 h-7 rounded-md border border-zinc-800 bg-zinc-900/40 px-2 text-xs font-medium uppercase text-zinc-200 transition-colors hover:bg-zinc-800/80 hover:text-zinc-50"
            >
              <Link href={localeHref}>{activeLocale}</Link>
            </Button>
          </motion.div>
        </nav>
      </Container>
    </header>
  );
}