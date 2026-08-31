import { useEffect, useState } from 'react';
import { motion, useMotionValueEvent, useScroll, useTransform } from 'motion/react';
import { Emblem } from './Emblem';
import { Wordmark } from './Wordmark';
import { NAV_LINKS, HERO } from '../data/content';

export function Nav() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const bg = useTransform(scrollY, [0, 80], ['rgba(247,249,251,0)', 'rgba(247,249,251,0.9)']);
  const blur = useTransform(scrollY, [0, 80], ['blur(0px)', 'blur(12px)']);
  const borderColor = useTransform(scrollY, [0, 80], ['rgba(10,24,38,0)', 'rgba(10,24,38,0.12)']);

  useMotionValueEvent(scrollY, 'change', (v) => setScrolled(v > 40));

  useEffect(() => {
    document.body.classList.toggle('menu-open', open);
    return () => document.body.classList.remove('menu-open');
  }, [open]);

  return (
    <motion.header
      className={`nav${scrolled ? ' scrolled' : ''}`}
      style={{
        backgroundColor: bg,
        backdropFilter: blur,
        WebkitBackdropFilter: blur,
        borderBottomColor: borderColor,
      }}
    >
      <nav className="nav-inner">
        <a className="brand" href="#top" aria-label="Charlie Cloud — home">
          <Emblem className="brand-emblem" />
          <Wordmark />
        </a>

        {/* `mobile` is always present: it is a no-op above 860px and drives the
            slide-in drawer below it. */}
        <div className="nav-links mobile">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
        </div>

        <div className="nav-cta">
          <a className="btn primary" href={HERO.primaryCta.href}>
            {HERO.primaryCta.label}
          </a>
        </div>

        <button
          className="burger"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>
    </motion.header>
  );
}
