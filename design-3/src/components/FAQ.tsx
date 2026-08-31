import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { EASE } from '../lib/motion';
import { Reveal } from './Reveal';
import { FAQ as FAQ_DATA } from '../data/content';

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="wrap pad-y" id="faq">
      <Reveal className="section-head" >
        <span className="eyebrow">{FAQ_DATA.eyebrow}</span>
        <h2 className="h-section">{FAQ_DATA.title}</h2>
      </Reveal>

      <Reveal className="faq">
        {FAQ_DATA.items.map((item, i) => {
          const isOpen = open === i;
          return (
            <div className={`fitem${isOpen ? ' open' : ''}`} key={item.q}>
              <button className="fq" aria-expanded={isOpen} onClick={() => setOpen(isOpen ? null : i)}>
                {item.q}
                <span className="pm" aria-hidden="true" />
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    className="fa"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.38, ease: EASE }}
                  >
                    <p>{item.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </Reveal>
    </section>
  );
}
