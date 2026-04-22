"use client";

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

  return (
    <section id="skills" className="scroll-mt-24">
      <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 sm:p-8">
        <h2 className="text-2xl font-semibold tracking-tight text-zinc-100 sm:text-3xl">
          {t("title")}
        </h2>
        <p className="mt-2 text-zinc-400">{t("description")}</p>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {CATEGORIES.map((category) => (
            <Card
              key={category}
              className="border-zinc-800 bg-zinc-950/70 text-zinc-100 ring-0"
            >
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
                      className="border-zinc-700 bg-zinc-900 text-zinc-200"
                    >
                      <Icon className="size-3 text-zinc-400" />
                      {t(`items.${item}`)}
                    </Badge>
                  );
                })}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}