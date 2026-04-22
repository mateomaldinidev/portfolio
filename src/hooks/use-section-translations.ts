"use client";

import { useTranslations } from "next-intl";

export function useSectionTranslations(namespace: string) {
  return useTranslations(namespace);
}