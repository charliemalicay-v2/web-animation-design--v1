import { motion } from 'motion/react';
import { SPRING, revealUp } from '../lib/motion';
import { Reveal, RevealGroup } from './Reveal';
import { FEATURES } from '../data/content';

export function Features() {
  return (
    <section className="wrap pad-y" id="features">
      <Reveal className="section-head">
        <span className="eyebrow">{FEATURES.eyebrow}</span>
        <h2 className="h-section">{FEATURES.title}</h2>
      </Reveal>

      <RevealGroup className="bento" step={0.07}>
        {FEATURES.items.map((f) => (
          <motion.article
            className={`bento-card${f.span === 'wide' ? ' wide' : ''}`}
            key={f.title}
            variants={revealUp}
            whileHover={{ y: -6, transition: SPRING }}
          >
            <div className="bento-dot" />
            <h3>{f.title}</h3>
            <p>{f.body}</p>
          </motion.article>
        ))}
      </RevealGroup>
    </section>
  );
}
