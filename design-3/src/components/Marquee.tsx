import { useRef } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { MARQUEE } from '../data/content';

export function Marquee() {
  const reduce = useReducedMotion();
  const items = useRef([...MARQUEE, ...MARQUEE]).current;

  return (
    <div className="marquee" aria-label="Teams using Charlie Cloud">
      <motion.div
        className="marquee-track"
        animate={reduce ? undefined : { x: ['0%', '-50%'] }}
        transition={reduce ? undefined : { duration: 30, ease: 'linear', repeat: Infinity }}
        whileHover={reduce ? undefined : { transition: { duration: 90, ease: 'linear', repeat: Infinity } }}
      >
        {items.map((name, i) => (
          <span className="marquee-item" key={i}>
            {name}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
