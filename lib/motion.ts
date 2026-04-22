import type { Transition } from "framer-motion";

export const MOTION_EASE_OUT = [0.22, 1, 0.36, 1] as const;

export const MOTION_TRANSITIONS = {
  section: {
    duration: 0.45,
    ease: MOTION_EASE_OUT,
  } satisfies Transition,
  card: {
    duration: 0.24,
    ease: MOTION_EASE_OUT,
  } satisfies Transition,
  hover: {
    duration: 0.2,
    ease: MOTION_EASE_OUT,
  } satisfies Transition,
  micro: {
    duration: 0.18,
    ease: MOTION_EASE_OUT,
  } satisfies Transition,
} as const;

export const MOTION_PRESETS = {
  heroEnter: {
    initial: { opacity: 0, y: 14 },
    animate: { opacity: 1, y: 0 },
  },
  fadeInUp: {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.3 },
  },
  fadeInUpDense: {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
  },
  fadeInUpCard: {
    initial: { opacity: 0, y: 14 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.3 },
  },
  hoverLiftNav: { y: -1 },
  hoverLiftSm: { y: -2 },
  hoverLiftCard: { y: -4, scale: 1.01 },
} as const;