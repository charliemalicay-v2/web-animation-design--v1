import { motion } from 'motion/react';
import { revealUp } from '../lib/motion';
import { Reveal, RevealGroup } from './Reveal';
import { PROCESS } from '../data/content';

export function Process() {
  return (
    <section className="wrap pad-y" id="process">
      <Reveal className="section-head">
        <span className="eyebrow">{PROCESS.eyebrow}</span>
        <h2 className="h-section">{PROCESS.title}</h2>
      </Reveal>
      <RevealGroup className="proc" step={0.1}>
        {PROCESS.steps.map((s) => (
          <motion.div className="step" key={s.n} variants={revealUp}>
            <span className="step-n">{s.n}</span>
            <h3>{s.title}</h3>
            <p>{s.body}</p>
          </motion.div>
        ))}
      </RevealGroup>
    </section>
  );
}
