"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { CodeXml, Download, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MOTION_PRESETS, MOTION_TRANSITIONS } from "@/lib/motion";
import { useSectionTranslations } from "@/src/hooks/use-section-translations";

function GithubIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 2a10 10 0 0 0-3.162 19.487c.5.093.682-.218.682-.483 0-.238-.009-.868-.014-1.704-2.776.603-3.362-1.338-3.362-1.338-.455-1.157-1.11-1.466-1.11-1.466-.908-.62.07-.607.07-.607 1.004.07 1.532 1.03 1.532 1.03.892 1.53 2.34 1.088 2.91.833.09-.646.35-1.088.636-1.338-2.217-.252-4.55-1.109-4.55-4.938 0-1.09.39-1.982 1.03-2.68-.103-.253-.447-1.268.098-2.644 0 0 .84-.268 2.75 1.024A9.54 9.54 0 0 1 12 6.844a9.54 9.54 0 0 1 2.505.337c1.909-1.292 2.748-1.024 2.748-1.024.546 1.376.202 2.391.1 2.644.64.698 1.028 1.59 1.028 2.68 0 3.839-2.337 4.683-4.56 4.93.359.309.678.919.678 1.852 0 1.336-.012 2.414-.012 2.742 0 .268.18.58.688.482A10 10 0 0 0 12 2Z" />
    </svg>
  );
}

function LinkedinIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.86-3.04-1.86 0-2.14 1.45-2.14 2.95v5.66H9.33V9h3.42v1.56h.05c.48-.9 1.64-1.86 3.37-1.86 3.6 0 4.27 2.37 4.27 5.46v6.29ZM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM7.12 20.45H3.56V9h3.56v11.45Z" />
    </svg>
  );
}

export function HeroSection() {
  const t = useSectionTranslations("hero");
  const shouldReduceMotion = useReducedMotion();
  const phrases = useMemo(
    () => [t("typed.one"), t("typed.two"), t("typed.three")],
    [t]
  );
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [typedText, setTypedText] = useState(phrases[0]);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (shouldReduceMotion) {
      setTypedText(phrases[0]);
      return;
    }

    const current = phrases[phraseIndex];
    let delay = isDeleting ? 38 : 70;

    if (!isDeleting && typedText === current) {
      delay = 1200;
    }

    if (isDeleting && typedText.length === 0) {
      delay = 260;
    }

    const timeout = window.setTimeout(() => {
      if (!isDeleting && typedText === current) {
        setIsDeleting(true);
        return;
      }

      if (isDeleting && typedText.length === 0) {
        setIsDeleting(false);
        setPhraseIndex((prev) => (prev + 1) % phrases.length);
        return;
      }

      const nextLength = typedText.length + (isDeleting ? -1 : 1);
      setTypedText(current.slice(0, nextLength));
    }, delay);

    return () => window.clearTimeout(timeout);
  }, [phrases, phraseIndex, typedText, isDeleting, shouldReduceMotion]);

  return (
    <motion.section
      initial={MOTION_PRESETS.heroEnter.initial}
      animate={MOTION_PRESETS.heroEnter.animate}
      transition={MOTION_TRANSITIONS.section}
      className="mx-auto flex min-h-[calc(100svh-4rem)] w-full max-w-6xl items-center"
    >
      <div className="w-full max-w-2xl pl-1 sm:pl-4">
        <p className="font-mono text-sm text-zinc-500">
          console.log(<span className="text-blue-400">&quot;{t("console")}&quot;</span>)
        </p>

        <h1 className="mt-4 text-7xl leading-[0.9] font-semibold tracking-tight text-zinc-100 sm:text-8xl">
          <span className="block">{t("firstName")}</span>
          <span className="mt-1 block bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
            {t("lastName")}
          </span>
        </h1>

        <p className="mt-5 text-3xl font-semibold text-zinc-200 sm:text-4xl">
          {t("subtitle")}
        </p>

        <p className="mt-4 min-h-8 font-mono text-lg text-zinc-500 sm:text-xl">
          //{typedText}
          <span className="text-zinc-400">_</span>
        </p>

        <p className="mt-6 max-w-xl text-xl leading-8 text-zinc-400 sm:text-2xl">
          {t("description")}
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-3 sm:gap-4">
          <motion.div whileHover={shouldReduceMotion ? undefined : MOTION_PRESETS.hoverLiftSm} transition={MOTION_TRANSITIONS.micro}>
            <Button asChild size="lg" className="h-12 bg-blue-500 text-white hover:bg-blue-400">
              <Link href="#projects">
                <CodeXml className="size-4" />
                {t("projectsButton")}
              </Link>
            </Button>
          </motion.div>
          <motion.div whileHover={shouldReduceMotion ? undefined : MOTION_PRESETS.hoverLiftSm} transition={MOTION_TRANSITIONS.micro}>
            <Button asChild size="lg" variant="outline" className="h-12 border-zinc-700 bg-zinc-950/30 text-zinc-300 hover:bg-zinc-800/70 hover:text-zinc-100">
              <Link href="/cv.pdf" target="_blank" rel="noreferrer">
                <Download className="size-4" />
                {t("cvButton")}
              </Link>
            </Button>
          </motion.div>
        </div>

        <div className="mt-8 flex items-center gap-3">
          <motion.div whileHover={shouldReduceMotion ? undefined : MOTION_PRESETS.hoverLiftSm} transition={MOTION_TRANSITIONS.micro}>
            <Button asChild size="icon-sm" variant="outline" className="border-zinc-700 bg-zinc-950/30 text-zinc-300 hover:bg-zinc-800/70 hover:text-zinc-100">
              <Link href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub">
                <GithubIcon className="size-4" />
              </Link>
            </Button>
          </motion.div>

          <motion.div whileHover={shouldReduceMotion ? undefined : MOTION_PRESETS.hoverLiftSm} transition={MOTION_TRANSITIONS.micro}>
            <Button asChild size="icon-sm" variant="outline" className="border-zinc-700 bg-zinc-950/30 text-zinc-300 hover:bg-zinc-800/70 hover:text-zinc-100">
              <Link href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <LinkedinIcon className="size-4" />
              </Link>
            </Button>
          </motion.div>

          <motion.div whileHover={shouldReduceMotion ? undefined : MOTION_PRESETS.hoverLiftSm} transition={MOTION_TRANSITIONS.micro}>
            <Button asChild size="icon-sm" variant="outline" className="border-zinc-700 bg-zinc-950/30 text-zinc-300 hover:bg-zinc-800/70 hover:text-zinc-100">
              <Link href="mailto:mateo@maldini.dev" aria-label="Email">
                <Mail className="size-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}