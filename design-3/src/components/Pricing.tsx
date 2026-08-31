import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { EASE, revealUp } from '../lib/motion';
import { Reveal, RevealGroup } from './Reveal';
import { PRICING } from '../data/content';
import { Check } from './icons';

const fmt = (n: number) => '$' + n.toLocaleString('en-US');

export function Pricing() {
  const [annual, setAnnual] = useState(false);

  return (
    <section className="wrap pad-y" id="pricing">
      <Reveal className="section-head">
        <span className="eyebrow">{PRICING.eyebrow}</span>
        <h2 className="h-section">{PRICING.title}</h2>
      </Reveal>

      <Reveal>
        <div className="toggle">
          <span className={!annual ? 'active' : undefined}>Monthly</span>
          <button
            type="button"
            role="switch"
            aria-checked={annual}
            aria-label="Toggle annual billing"
            data-on={annual}
            onClick={() => setAnnual((a) => !a)}
          />
          <span className={annual ? 'active' : undefined}>Annual · save ~15%</span>
        </div>
      </Reveal>

      <RevealGroup className="price-grid" step={0.08}>
        {PRICING.tiers.map((t) => {
          const price = annual ? Math.round(t.monthly * 0.85) : t.monthly;
          return (
            <motion.div className={`tier${t.popular ? ' pop' : ''}`} key={t.name} variants={revealUp} layout>
              <div className="tname">{t.name}</div>
              <div className="cost">
                <AnimatePresence mode="popLayout" initial={false}>
                  <motion.span
                    key={price}
                    initial={{ y: 12, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -12, opacity: 0 }}
                    transition={{ duration: 0.28, ease: EASE }}
                  >
                    {fmt(price)}
                  </motion.span>
                </AnimatePresence>
                <small>/ mo{annual ? ', billed yearly' : ''}</small>
              </div>
              <div className="desc">{t.desc}</div>
              <ul>
                {t.features.map((f) => (
                  <li key={f}>
                    <Check />
                    {f}
                  </li>
                ))}
              </ul>
              <a className={`btn ${t.popular ? 'primary' : 'ghost'}`} href="#">
                {t.cta}
              </a>
            </motion.div>
          );
        })}
      </RevealGroup>

      <p className="price-foot">{PRICING.note}</p>
    </section>
  );
}
