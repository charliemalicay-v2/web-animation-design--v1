import { motion } from 'motion/react';
import { revealUp } from '../lib/motion';
import { RevealGroup } from './Reveal';
import { Emblem } from './Emblem';
import { Wordmark } from './Wordmark';
import { FOOTER, BRAND } from '../data/content';

export function Footer() {
  return (
    <footer>
      <div className="wrap">
        <RevealGroup className="foot-top" step={0.07}>
          <motion.div className="foot-brand" variants={revealUp}>
            <span className="brand">
              <Emblem className="brand-emblem" />
              <Wordmark />
            </span>
            <p>{FOOTER.blurb}</p>
          </motion.div>

          {FOOTER.columns.map((col) => (
            <motion.div className="foot-col" key={col.title} variants={revealUp}>
              <h4>{col.title}</h4>
              {col.links.map((l) => (
                <a href="#" key={l}>
                  {l}
                </a>
              ))}
            </motion.div>
          ))}
        </RevealGroup>

        <div className="foot-bot">
          <span>
            © {new Date().getFullYear()} {BRAND.name}. All rights reserved.
          </span>
          <span className="socials">
            {FOOTER.socials.map((s) => (
              <a href="#" key={s}>
                {s}
              </a>
            ))}
          </span>
        </div>
      </div>
    </footer>
  );
}
