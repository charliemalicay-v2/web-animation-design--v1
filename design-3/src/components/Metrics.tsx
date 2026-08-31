import { useEffect, useRef, useState } from 'react';
import { animate, motion, useInView, useReducedMotion } from 'motion/react';
import { revealUp } from '../lib/motion';
import { Reveal, RevealGroup } from './Reveal';
import { METRICS } from '../data/content';

function Counter({ to, dec, suffix }: { to: number; dec: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-15% 0px' });
  const reduce = useReducedMotion();
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (reduce) {
      setVal(to);
      return;
    }
    const controls = animate(0, to, {
      duration: 1.8,
      ease: 'easeOut',
      onUpdate: (v) => setVal(v),
    });
    return () => controls.stop();
  }, [inView, reduce, to]);

  return (
    <span className="n" ref={ref}>
      {val.toFixed(dec)}
      {suffix}
    </span>
  );
}

export function Metrics() {
  return (
    <section className="on-ink" id="results">
      <div className="wrap pad-y">
        <Reveal className="section-head">
          <span className="eyebrow">{METRICS.eyebrow}</span>
          <h2 className="h-section">{METRICS.title}</h2>
        </Reveal>
        <RevealGroup className="metrics" step={0.09}>
          {METRICS.items.map((m) => (
            <motion.div className="metric" key={m.label} variants={revealUp}>
              <Counter to={m.to} dec={m.dec} suffix={m.suffix} />
              <div className="t">{m.label}</div>
            </motion.div>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
