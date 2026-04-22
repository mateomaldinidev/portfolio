"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  Braces,
  Cloud,
  Cpu,
  Database,
  ExternalLink,
  Globe,
  Layers,
  Server,
  Shield,
  Workflow,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MOTION_PRESETS, MOTION_TRANSITIONS } from "@/lib/motion";
import { useSectionTranslations } from "@/src/hooks/use-section-translations";

const ICONS = {
  next: Globe,
  node: Server,
  postgres: Database,
  docker: Layers,
  redis: Cpu,
  auth: Shield,
  queue: Workflow,
  cloud: Cloud,
  api: Braces,
} as const;

const PROJECTS = [
  {
    key: "one",
    techs: ["next", "node", "postgres", "docker"],
    github: "https://github.com/",
    demo: "https://example.com",
  },
  {
    key: "two",
    techs: ["next", "api", "redis", "cloud"],
    github: "https://github.com/",
    demo: "https://example.com",
  },
  {
    key: "three",
    techs: ["node", "postgres", "auth", "docker"],
    github: "https://github.com/",
    demo: "https://example.com",
  },
  {
    key: "four",
    techs: ["next", "queue", "cloud", "redis"],
    github: "https://github.com/",
    demo: "https://example.com",
  },
] as const;

export function ProjectsSection() {
  const t = useSectionTranslations("projects");
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.section
      id="projects"
      className="scroll-mt-24"
      initial={shouldReduceMotion ? undefined : MOTION_PRESETS.fadeInUpDense.initial}
      whileInView={shouldReduceMotion ? undefined : MOTION_PRESETS.fadeInUpDense.whileInView}
      viewport={MOTION_PRESETS.fadeInUpDense.viewport}
      transition={MOTION_TRANSITIONS.section}
    >
      <div className="rounded-2xl border border-zinc-800/90 bg-zinc-900/45 p-6 shadow-[0_16px_40px_-30px_rgba(139,92,246,0.45)] backdrop-blur-sm sm:p-8">
        <h2 className="text-2xl font-semibold tracking-tight text-zinc-100 sm:text-3xl">
          {t("title")}
        </h2>
        <p className="mt-2 text-zinc-400">{t("description")}</p>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {PROJECTS.map((project) => (
            <motion.div
              key={project.key}
              whileHover={
                shouldReduceMotion
                  ? undefined
                  : MOTION_PRESETS.hoverLiftCard
              }
              transition={MOTION_TRANSITIONS.hover}
            >
              <Card className="border-zinc-800 bg-zinc-950/70 text-zinc-100 ring-0 transition-shadow duration-200 hover:shadow-lg hover:shadow-zinc-950/40">
                <CardContent className="pt-4">
                  <div className="flex aspect-video items-center justify-center rounded-lg border border-zinc-800 bg-gradient-to-br from-zinc-900 to-zinc-800 text-zinc-400">
                    <span className="text-sm">{t("imagePlaceholder")}</span>
                  </div>
                </CardContent>

                <CardHeader>
                  <CardTitle>{t(`cards.${project.key}.title`)}</CardTitle>
                  <CardDescription className="text-zinc-400">
                    {t(`cards.${project.key}.description`)}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4 pb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.techs.map((techKey) => {
                      const Icon = ICONS[techKey];

                      return (
                        <Badge
                          key={techKey}
                          variant="outline"
                          className="border-zinc-700 bg-zinc-900 text-zinc-200"
                        >
                          <Icon className="size-3 text-zinc-400" />
                          {t(`tech.${techKey}`)}
                        </Badge>
                      );
                    })}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    <motion.div whileHover={shouldReduceMotion ? undefined : MOTION_PRESETS.hoverLiftSm} transition={MOTION_TRANSITIONS.micro}>
                      <Button asChild size="sm" className="h-8">
                        <Link href={project.github} target="_blank" rel="noreferrer">
                          <Braces className="size-4" />
                          {t("buttons.github")}
                        </Link>
                      </Button>
                    </motion.div>
                    <motion.div whileHover={shouldReduceMotion ? undefined : MOTION_PRESETS.hoverLiftSm} transition={MOTION_TRANSITIONS.micro}>
                      <Button asChild size="sm" variant="outline" className="h-8 border-zinc-700 bg-transparent text-zinc-100 hover:bg-zinc-800">
                        <Link href={project.demo} target="_blank" rel="noreferrer">
                          <ExternalLink className="size-4" />
                          {t("buttons.demo")}
                        </Link>
                      </Button>
                    </motion.div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}