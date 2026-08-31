import { MotionConfig } from 'motion/react';
import { Nav } from './components/Nav';
import { ScrollProgress } from './components/ScrollProgress';
import { Hero } from './components/Hero';
import { Marquee } from './components/Marquee';
import { Pillars } from './components/Pillars';
import { Problem } from './components/Problem';
import { Features } from './components/Features';
import { Process } from './components/Process';
import { Metrics } from './components/Metrics';
import { Testimonials } from './components/Testimonials';
import { Pricing } from './components/Pricing';
import { About } from './components/About';
import { FAQ } from './components/FAQ';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';

export default function App() {
  return (
    // reducedMotion="user" makes every Motion animation honour the OS setting:
    // transforms are dropped, opacity/colour changes kept, content stays visible.
    <MotionConfig reducedMotion="user">
      <div className="grain" aria-hidden="true" />
      <ScrollProgress />
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Pillars />
        <Problem />
        <Features />
        <Process />
        <Metrics />
        <Testimonials />
        <Pricing />
        <About />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </MotionConfig>
  );
}
