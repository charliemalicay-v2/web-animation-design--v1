// All marketing copy for the Charlie Cloud landing page lives here so the
// components stay presentational. Product framing: a fractional platform +
// security team — "data security cloud intelligence".

export const BRAND = {
  name: 'Charlie Cloud',
  wordmark: ['Charlie', 'Cloud'] as const,
  tagline: 'Data security cloud intelligence',
  chips: ['Web Deployment', 'Automation', 'Security', 'Easy Plugin'] as const,
};

export const NAV_LINKS = [
  { label: 'Platform', href: '#features' },
  { label: 'Process', href: '#process' },
  { label: 'Results', href: '#results' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
];

export const HERO = {
  eyebrow: 'Data security · Cloud intelligence',
  // Rendered as masked, staggered words.
  headline: 'Infrastructure that stops being your problem.',
  lead: 'Charlie Cloud embeds a senior platform and security team into your company — deployment, automation, 24/7 managed operations, and audit-ready security — for one flat monthly fee.',
  primaryCta: { label: 'Book a security review', href: '#pricing' },
  secondaryCta: { label: 'See the platform', href: '#features' },
  ticker:
    'charlie deploy --env prod   ✓ image scanned   ✓ SBOM signed   ✓ policy pass   ✓ rollout 100%   › p95 118ms   › 0 criticals   › audit-ready',
};

export const MARQUEE = [
  'NORTHWIND',
  'Ledger&Co',
  'Aster Health',
  'BYTEMARK',
  'Fathom',
  'Riverstone',
  'Pactum',
  'HELIOGRID',
];

export const PILLARS = [
  {
    title: 'Web Deployment',
    body: 'Zero-downtime releases on infrastructure we build, harden, and own the pager for.',
  },
  {
    title: 'Automation',
    body: 'CI/CD, IaC, cost guardrails and drift detection — every repeatable thing, scripted.',
  },
  {
    title: 'Security',
    body: 'Continuous scanning, signed supply chain, least-privilege access, evidence on demand.',
  },
  {
    title: 'Easy Plugin',
    body: 'Connect your repo and cloud account. We slot into your stack, not the other way around.',
  },
];

export const PROBLEM = {
  eyebrow: 'The gap',
  title: 'Hiring a platform team takes nine months. Your roadmap does not wait.',
  points: [
    {
      title: 'Senior infra talent is scarce',
      body: 'The people who can run production well are expensive, rare, and rarely looking.',
    },
    {
      title: 'Security is always “next quarter”',
      body: 'Until a customer questionnaire — or an incident — makes it this quarter.',
    },
    {
      title: 'Cloud spend drifts up',
      body: 'Nobody owns the bill, so it grows quietly until finance asks why.',
    },
    {
      title: 'On-call burns your builders',
      body: 'Product engineers paged at 3am ship slower for the next three days.',
    },
  ],
};

export const FEATURES = {
  eyebrow: 'The platform',
  title: 'One team, wired into everything that keeps you online.',
  items: [
    {
      title: 'Managed cloud operations',
      body: '24/7 monitoring, incident response, and a real human on-call — with published SLOs.',
      span: 'wide',
    },
    { title: 'FinOps & cost control', body: 'Tagging, budgets, rightsizing and monthly savings reports.' },
    { title: 'Supply-chain security', body: 'SBOMs, signed artifacts, provenance, and blocked criticals in CI.' },
    { title: 'Infrastructure as code', body: 'Everything in Terraform. Reproducible environments, reviewable changes.' },
    {
      title: 'Audit & compliance readiness',
      body: 'SOC 2 / ISO evidence collection automated. Answer questionnaires in a day, not a month.',
      span: 'wide',
    },
    { title: 'Access & identity', body: 'SSO, short-lived credentials, and least-privilege by default.' },
  ],
};

export const PROCESS = {
  eyebrow: 'How it works',
  title: 'Production-ready in weeks, not quarters.',
  steps: [
    {
      n: '01',
      title: 'Architecture review',
      body: 'A 60-minute session plus a read-only audit. You get a written risk and roadmap doc — yours to keep.',
    },
    {
      n: '02',
      title: 'Land & harden',
      body: 'We codify your infra, close the top risks, wire CI/CD and observability, and take the pager.',
    },
    {
      n: '03',
      title: 'Run & improve',
      body: 'Weekly ops review, monthly cost and security report, and a standing backlog we burn down.',
    },
  ],
};

export const METRICS = {
  eyebrow: 'Results',
  title: 'What the first 90 days usually look like.',
  items: [
    { to: 41, dec: 0, suffix: '%', label: 'lower monthly cloud spend' },
    { to: 99.98, dec: 2, suffix: '%', label: 'measured uptime across managed services' },
    { to: 3, dec: 0, suffix: '×', label: 'faster incident resolution' },
    { to: 1, dec: 0, suffix: ' day', label: 'to answer a security questionnaire' },
  ],
};

export const TESTIMONIALS = {
  eyebrow: 'Trust',
  title: 'Teams that handed us the pager.',
  feature: {
    quote:
      'We closed our SOC 2 gap and cut the AWS bill by a third in one quarter. It felt like hiring four people who already knew each other.',
    who: 'VP Engineering',
    org: 'Series B fintech',
  },
  more: [
    {
      quote: 'The 3am pages stopped landing on product engineers. Velocity went up the week they took over.',
      who: 'CTO',
      org: 'Health data platform',
    },
    {
      quote: 'Our enterprise deals stopped stalling on security review. That alone paid for the engagement.',
      who: 'Head of Sales Eng',
      org: 'B2B SaaS',
    },
  ],
};

export const PRICING = {
  eyebrow: 'Pricing',
  title: 'Flat monthly fee. No per-seat games.',
  note: 'All plans include the architecture review, on-call coverage, and monthly cost + security reporting. Annual billing saves ~15%.',
  tiers: [
    {
      name: 'Launch',
      monthly: 6000,
      desc: 'For pre-Series A teams getting to a defensible baseline.',
      features: ['1 cloud account', 'Business-hours on-call', 'CI/CD + IaC setup', 'Monthly cost report'],
      cta: 'Start with a review',
      popular: false,
    },
    {
      name: 'Scale',
      monthly: 11000,
      desc: 'For Series A–B companies running real production traffic.',
      features: [
        'Up to 3 cloud accounts',
        '24/7 on-call with SLOs',
        'FinOps + security program',
        'SOC 2 evidence automation',
        'Weekly ops review',
      ],
      cta: 'Book a review',
      popular: true,
    },
    {
      name: 'Platform',
      monthly: 19000,
      desc: 'For Series B–C with multiple teams and compliance load.',
      features: [
        'Unlimited accounts',
        'Dedicated lead engineer',
        'Multi-region + DR',
        'Audit liaison',
        'Quarterly roadmap planning',
      ],
      cta: 'Talk to us',
      popular: false,
    },
  ],
};

export const ABOUT = {
  eyebrow: 'Who runs this',
  title: 'Operators, not a staffing agency.',
  body: [
    'Charlie Cloud is a small, senior team — the people who have carried the pager at hyperscalers and high-growth startups, and would rather fix the root cause than file a ticket.',
    'We take on a limited number of clients so every engagement has a named lead who knows your system cold. If we are not the right fit, we will tell you in the first call.',
  ],
  founder: {
    quote: '“We only win when your infrastructure is boring. That is the whole product.”',
    who: 'Founder & principal engineer',
  },
  stats: [
    { n: '30+', t: 'production migrations led' },
    { n: '11 yrs', t: 'median operator experience' },
    { n: '<12', t: 'active clients at a time' },
    { n: '24/7', t: 'coverage, real humans' },
  ],
};

export const FAQ = {
  eyebrow: 'Questions',
  title: 'Before you book the review.',
  items: [
    {
      q: 'Do you replace our engineers?',
      a: 'No. We own the platform and security layer so your product engineers can stay on product. They keep shipping; we keep it online.',
    },
    {
      q: 'Which clouds do you support?',
      a: 'AWS primarily, GCP and Azure for established workloads. Kubernetes and serverless both fine.',
    },
    {
      q: 'What access do you need?',
      a: 'The architecture review is read-only. For the engagement we use SSO with short-lived, least-privilege roles — scoped and logged.',
    },
    {
      q: 'How fast can you start?',
      a: 'The review happens within a week of signing. Hardening work usually begins the following week.',
    },
    {
      q: 'Is there a contract lock-in?',
      a: 'Month-to-month after an initial 3-month term. Everything we build is in your repos and your cloud account — you can walk with it.',
    },
  ],
};

export const FINAL_CTA = {
  eyebrow: 'Next step',
  title: 'Get a written risk and roadmap doc. Yours to keep.',
  lead: 'The architecture review is free and takes about an hour. No slide deck, no obligation.',
  cta: { label: 'Book the architecture review', href: '#' },
  mail: 'or email hello@charliecloud.example',
};

export const FOOTER = {
  columns: [
    {
      title: 'Platform',
      links: ['Managed operations', 'FinOps', 'Security program', 'Compliance readiness'],
    },
    {
      title: 'Company',
      links: ['About', 'Engagements', 'Careers', 'Contact'],
    },
    {
      title: 'Resources',
      links: ['Architecture review', 'Incident playbook', 'SLO guide', 'Changelog'],
    },
  ],
  blurb: 'A fractional platform and security team for Series A–C companies. Deployment, automation, operations, and audit-ready security — one flat fee.',
  socials: ['GitHub', 'LinkedIn', 'RSS'],
};
