/** Charlie Cloud mark — hexagonal node network + circuit shield.
 *  Rebuilt as inline SVG (no transparent logo asset exists in /assets). */
export function Emblem({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" aria-hidden="true">
      <g stroke="var(--brand)" strokeWidth={1.4} opacity={0.55}>
        <path d="M32 6 56 20v24L32 58 8 44V20z" />
        <path d="M32 6v10M56 20l-9 5M56 44l-9-5M32 58V48M8 44l9-5M8 20l9 5" />
      </g>
      <circle cx="32" cy="6" r="2.2" fill="var(--accent-lime)" />
      <circle cx="56" cy="20" r="2.2" fill="var(--brand)" />
      <circle cx="56" cy="44" r="2.2" fill="var(--brand)" />
      <circle cx="32" cy="58" r="2.2" fill="var(--brand)" />
      <circle cx="8" cy="44" r="2.2" fill="var(--accent)" />
      <circle cx="8" cy="20" r="2.2" fill="var(--brand)" />
      <path
        d="M32 15l14 5v10c0 9-6 14.6-14 16.8C24 44.6 18 39 18 30V20z"
        fill="var(--ink-2)"
        stroke="var(--chrome)"
        strokeWidth={1.6}
      />
      <g stroke="var(--accent)" strokeWidth={1.6} strokeLinecap="round" fill="none">
        <path d="M32 24c-3.8 0-6.4 2.8-6.4 6.6 0 4.7 0 7.2 2.6 10.4" />
        <path d="M32 28.6c2 0 3.4 1.5 3.4 3.6 0 3.8 0 6-1.5 8.8" />
        <path d="M38.4 30.6c0-4-2.8-7-6.4-7" />
      </g>
    </svg>
  );
}
