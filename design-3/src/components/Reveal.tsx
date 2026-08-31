import type { ReactNode } from 'react';
import { motion } from 'motion/react';
import { revealUp, VIEWPORT, stagger } from '../lib/motion';

/** Fade-up on scroll. Honours prefers-reduced-motion via <MotionConfig>. */
export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={className}
      variants={revealUp}
      initial="hidden"
      whileInView="show"
      viewport={VIEWPORT}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}

/** Staggered container — children use the `revealUp` variants. */
export function RevealGroup({
  children,
  className,
  step = 0.08,
}: {
  children: ReactNode;
  className?: string;
  step?: number;
}) {
  return (
    <motion.div
      className={className}
      variants={stagger(step)}
      initial="hidden"
      whileInView="show"
      viewport={VIEWPORT}
    >
      {children}
    </motion.div>
  );
}
