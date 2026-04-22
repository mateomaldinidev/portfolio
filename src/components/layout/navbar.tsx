"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Container } from "@/src/components/layout/container";

const LINKS = [
  { key: "about", href: "#about" },
  { key: "projects", href: "#projects" },
  { key: "skills", href: "#skills" },
  { key: "contact", href: "#contact" },
] as const;

const LOCALES = ["en", "es"] as const;

function getLocaleHref(pathname: string, targetLocale: (typeof LOCALES)[number]) {
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
  const activeLocale = pathname.startsWith("/es") ? "es" : "en";

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

          <div className="ml-2 flex items-center rounded-md border border-zinc-800 p-0.5">
            {LOCALES.map((locale) => {
              const isActive = activeLocale === locale;

              return (
                <Button
                  key={locale}
                  asChild
                  variant={isActive ? "secondary" : "ghost"}
                  size="sm"
                  className="h-7 px-2 text-xs uppercase"
                >
                  <Link href={getLocaleHref(pathname, locale)}>{locale}</Link>
                </Button>
              );
            })}
          </div>
        </nav>
      </Container>
    </header>
  );
}