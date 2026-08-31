import { motion, useReducedMotion } from 'motion/react';
import { HERO } from '../data/content';

export function CodeTicker() {
  const reduce = useReducedMotion();
  const line = HERO.ticker;
  return (
    <div className="code-ticker" aria-hidden="true">
      <motion.div
        className="rail"
        animate={reduce ? undefined : { x: ['0%', '-50%'] }}
        transition={reduce ? undefined : { duration: 26, ease: 'linear', repeat: Infinity }}
      >
        <span>{line}</span>
        <span>{line}</span>
      </motion.div>
    </div>
  );
}
