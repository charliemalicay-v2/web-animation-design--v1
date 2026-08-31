import { motion } from 'motion/react';
import { EASE, stagger, toWords, wordRise } from '../lib/motion';
import { HERO } from '../data/content';
import { PlexusCanvas } from './PlexusCanvas';
import { CodeTicker } from './CodeTicker';
import { ArrowRight } from './icons';
import heroImg from '../../assets/hero.webp';

export function Hero() {
  const words = toWords(HERO.headline);

  return (
    <section className="hero" id="top">
      <div className="hero-bg" style={{ ['--hero-img' as string]: `url(${heroImg})` }} />
      <PlexusCanvas />

      <div className="hero-inner">
        <div className="hero-copy">
          <motion.span
            className="eyebrow"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE }}
          >
            {HERO.eyebrow}
          </motion.span>

          <motion.h1 className="h-display" variants={stagger(0.055, 0.15)} initial="hidden" animate="show">
            {words.map((word, i) => (
              <span className="word-mask" key={i}>
                <motion.span variants={wordRise}>{word}&nbsp;</motion.span>
              </span>
            ))}
          </motion.h1>

          <motion.p
            className="lead"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.5 }}
          >
            {HERO.lead}
          </motion.p>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.62 }}
          >
            <a className="btn primary" href={HERO.primaryCta.href}>
              {HERO.primaryCta.label} <ArrowRight />
            </a>
            <a className="btn ghost" href={HERO.secondaryCta.href}>
              {HERO.secondaryCta.label}
            </a>
          </motion.div>
        </div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, y: 30, rotateX: 6 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 1, ease: EASE, delay: 0.35 }}
        >
          <div className="hero-frame">
            <img src={heroImg} alt="Charlie Cloud operations console — deployment, scanning and rollout status" />
          </div>
        </motion.div>
      </div>

      <CodeTicker />
    </section>
  );
}
