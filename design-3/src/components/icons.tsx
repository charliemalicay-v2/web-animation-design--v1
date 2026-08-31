import type { SVGProps } from 'react';

const base = (p: SVGProps<SVGSVGElement>) => ({
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  ...p,
});

export const ArrowRight = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export const Check = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}>
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

export const Deploy = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}>
    <path d="M12 3v12M8 7l4-4 4 4" />
    <path d="M4 15v4a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-4" />
  </svg>
);

export const Automation = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}>
    <circle cx="12" cy="12" r="3.2" />
    <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.5 5.5l2.1 2.1M16.4 16.4l2.1 2.1M18.5 5.5l-2.1 2.1M7.6 16.4l-2.1 2.1" />
  </svg>
);

export const Shield = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}>
    <path d="M12 3l7 3v6c0 5-3.4 8-7 9-3.6-1-7-4-7-9V6z" />
    <path d="M9.5 12l1.8 1.8 3.7-3.8" />
  </svg>
);

export const Plugin = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}>
    <path d="M9 3v4M15 3v4M7 7h10v4a5 5 0 0 1-10 0z" />
    <path d="M12 16v5" />
  </svg>
);

export const PillarIcon = ({ name, ...p }: { name: string } & SVGProps<SVGSVGElement>) => {
  switch (name) {
    case 'Web Deployment':
      return <Deploy {...p} />;
    case 'Automation':
      return <Automation {...p} />;
    case 'Security':
      return <Shield {...p} />;
    default:
      return <Plugin {...p} />;
  }
};
