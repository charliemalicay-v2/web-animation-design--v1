import { motion } from 'motion/react';
import { revealUp } from '../lib/motion';
import { Reveal, RevealGroup } from './Reveal';
import { ABOUT } from '../data/content';
import brandPanel from '../../assets/brand-panel.webp';

export function About() {
  return (
    <section className="wrap pad-y" id="about">
      <div className="about-grid">
        <Reveal>
          <span className="eyebrow">{ABOUT.eyebrow}</span>
          <h2 className="h-section" style={{ margin: '1.1rem 0 1.4rem' }}>
            {ABOUT.title}
          </h2>
          {ABOUT.body.map((p, i) => (
            <p key={i} className="lead" style={{ fontSize: '1rem' }}>
              {p}
            </p>
          ))}
          <p className="founder">
            {ABOUT.founder.quote}
            <strong>{ABOUT.founder.who}</strong>
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="about-panel">
            <img src={brandPanel} alt="Charlie Cloud brand mark on a brushed-metal panel" />
          </div>
        </Reveal>
      </div>

      <RevealGroup className="stat-band" step={0.07}>
        {ABOUT.stats.map((s) => (
          <motion.div key={s.t} variants={revealUp}>
            <div className="n">{s.n}</div>
            <div className="t">{s.t}</div>
          </motion.div>
        ))}
      </RevealGroup>
    </section>
  );
}
