import { motion } from 'motion/react';
import { revealUp } from '../lib/motion';
import { RevealGroup } from './Reveal';
import { PILLARS } from '../data/content';
import { PillarIcon } from './icons';

export function Pillars() {
  return (
    <section className="wrap pad-y" aria-label="Capabilities">
      <RevealGroup className="pillars">
        {PILLARS.map((p) => (
          <motion.article className="pillar" key={p.title} variants={revealUp}>
            <PillarIcon name={p.title} className="pillar-ico" />
            <h3>{p.title}</h3>
            <p>{p.body}</p>
          </motion.article>
        ))}
      </RevealGroup>
    </section>
  );
}
