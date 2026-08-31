import { motion } from 'motion/react';
import { revealUp } from '../lib/motion';
import { Reveal, RevealGroup } from './Reveal';
import { PROBLEM } from '../data/content';

export function Problem() {
  return (
    <section className="wrap pad-y" id="problem">
      <Reveal className="section-head">
        <span className="eyebrow">{PROBLEM.eyebrow}</span>
        <h2 className="h-section">{PROBLEM.title}</h2>
      </Reveal>
      <RevealGroup className="prob-grid">
        {PROBLEM.points.map((p) => (
          <motion.div className="prob" key={p.title} variants={revealUp}>
            <h3>{p.title}</h3>
            <p>{p.body}</p>
          </motion.div>
        ))}
      </RevealGroup>
    </section>
  );
}
