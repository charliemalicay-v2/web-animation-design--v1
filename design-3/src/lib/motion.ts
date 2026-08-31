import type { Transition, Variants } from 'motion/react';

/** Shared easing — matches design-1 / design-2 house curve. */
export const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

/** House spring for hover / layout transitions. */
export const SPRING: Transition = { type: 'spring', stiffness: 220, damping: 26 };

/** Standard viewport trigger for scroll reveals. */
export const VIEWPORT = { once: true, amount: 0.15, margin: '0px 0px -8% 0px' } as const;

/** Fade-up reveal, used across most sections. */
export const revealUp: Variants = {
  hidden: { opacity: 0, y: 26 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE },
  },
};

/** Container that staggers its children (words, cards, list items). */
export const stagger = (staggerChildren = 0.06, delayChildren = 0): Variants => ({
  hidden: {},
  show: { transition: { staggerChildren, delayChildren } },
});

/** Single masked word rising into place. */
export const wordRise: Variants = {
  hidden: { y: '110%' },
  show: { y: '0%', transition: { duration: 0.8, ease: EASE } },
};

/** Split a string into words for masked stagger animation. */
export const toWords = (text: string): string[] => text.trim().split(/\s+/);
