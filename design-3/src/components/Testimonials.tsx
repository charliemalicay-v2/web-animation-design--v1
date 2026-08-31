import { motion } from 'motion/react';
import { revealUp } from '../lib/motion';
import { Reveal, RevealGroup } from './Reveal';
import { TESTIMONIALS } from '../data/content';

export function Testimonials() {
  const { feature, more } = TESTIMONIALS;
  return (
    <section className="wrap pad-y" id="trust">
      <Reveal className="section-head">
        <span className="eyebrow">{TESTIMONIALS.eyebrow}</span>
        <h2 className="h-section">{TESTIMONIALS.title}</h2>
      </Reveal>

      <RevealGroup className="quotes" step={0.1}>
        <motion.figure className="q feature" variants={revealUp}>
          <blockquote>{feature.quote}</blockquote>
          <figcaption className="who">
            <strong>{feature.who}</strong>
            {feature.org}
          </figcaption>
        </motion.figure>

        <div className="col-stack">
          {more.map((m) => (
            <motion.figure className="q" key={m.who} variants={revealUp}>
              <blockquote>{m.quote}</blockquote>
              <figcaption className="who">
                <strong>{m.who}</strong>
                {m.org}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </RevealGroup>
    </section>
  );
}
