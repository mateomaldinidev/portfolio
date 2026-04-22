"use client";

import { motion, useReducedMotion } from "framer-motion";
import { MOTION_PRESETS, MOTION_TRANSITIONS } from "@/lib/motion";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Braces,
  Cloud,
  Cpu,
  Database,
  Globe,
  Layers,
  Server,
  Shield,
  Workflow,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useSectionTranslations } from "@/src/hooks/use-section-translations";

const CATEGORIES = ["backend", "database", "auth", "infra", "testing"] as const;

const ITEMS = {
  backend: ["node", "typescript", "nest", "express"],
  database: ["postgresql", "mongodb", "redis", "prisma"],
  auth: ["jwt", "oauth", "rbac", "sessions"],
  infra: ["docker", "aws", "ci", "nginx"],
  testing: ["jest", "supertest", "playwright", "vitest"],
} as const;

const ICONS = {
  node: Server,
  typescript: Braces,
  nest: Layers,
  express: Workflow,
  postgresql: Database,
  mongodb: Database,
  redis: Cpu,
  prisma: Layers,
  jwt: Shield,
  oauth: Shield,
  rbac: Shield,
  sessions: Shield,
  docker: Layers,
  aws: Cloud,
  ci: Workflow,
  nginx: Globe,
  jest: Braces,
  supertest: Workflow,
  playwright: Globe,
  vitest: Braces,
} as const;

export function SkillsSection() {
  const t = useSectionTranslations("skills");
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.section
      id="skills"
      className="scroll-mt-24"
      initial={shouldReduceMotion ? undefined : MOTION_PRESETS.fadeInUpDense.initial}
      whileInView={shouldReduceMotion ? undefined : MOTION_PRESETS.fadeInUpDense.whileInView}
      viewport={MOTION_PRESETS.fadeInUpDense.viewport}
      transition={MOTION_TRANSITIONS.section}
    >
      <div className="rounded-2xl border border-zinc-800/90 bg-zinc-900/45 p-6 shadow-[0_16px_40px_-30px_rgba(16,185,129,0.45)] backdrop-blur-sm sm:p-8">
        <h2 className="text-2xl font-semibold tracking-tight text-zinc-100 sm:text-3xl">
          {t("title")}
        </h2>
        <p className="mt-2 text-zinc-400">{t("description")}</p>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {CATEGORIES.map((category, index) => (
            <motion.div
              key={category}
              initial={shouldReduceMotion ? undefined : MOTION_PRESETS.fadeInUpCard.initial}
              whileInView={shouldReduceMotion ? undefined : MOTION_PRESETS.fadeInUpCard.whileInView}
              whileHover={shouldReduceMotion ? undefined : MOTION_PRESETS.hoverLiftCard}
              viewport={MOTION_PRESETS.fadeInUpCard.viewport}
              transition={{ ...MOTION_TRANSITIONS.card, delay: index * 0.04 }}
            >
              <Card className="border-zinc-800 bg-zinc-950/70 text-zinc-100 ring-0 transition-shadow duration-200 hover:shadow-lg hover:shadow-zinc-950/35">
                <CardHeader>
                  <CardTitle className="text-sm font-semibold uppercase tracking-wide text-zinc-300">
                    {t(`categories.${category}`)}
                  </CardTitle>
                </CardHeader>

                <CardContent className="flex flex-wrap gap-2">
                  {ITEMS[category].map((item) => {
                    const Icon = ICONS[item];

                    return (
                      <Badge
                        key={item}
                        variant="outline"
                        className="border-zinc-700 bg-zinc-900 text-zinc-200 transition-colors hover:bg-zinc-800/80"
                      >
                        <Icon className="size-3 text-zinc-400" />
                        {t(`items.${item}`)}
                      </Badge>
                    );
                  })}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}