import { Reveal } from './Reveal';
import { PlexusCanvas } from './PlexusCanvas';
import { FINAL_CTA } from '../data/content';
import { ArrowRight } from './icons';

export function FinalCTA() {
  return (
    <section className="on-ink final hero" style={{ paddingTop: 0 }}>
      <PlexusCanvas />
      <div className="wrap pad-y">
        <Reveal>
          <span className="eyebrow">{FINAL_CTA.eyebrow}</span>
          <h2 className="h-section">{FINAL_CTA.title}</h2>
          <p className="lead">{FINAL_CTA.lead}</p>
          <a className="btn primary" href={FINAL_CTA.cta.href}>
            {FINAL_CTA.cta.label} <ArrowRight />
          </a>
          <p className="mail">{FINAL_CTA.mail}</p>
        </Reveal>
      </div>
    </section>
  );
}
