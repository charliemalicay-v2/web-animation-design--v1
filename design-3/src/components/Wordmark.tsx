import { BRAND } from '../data/content';

/** CSS-rendered wordmark: steel "CHARLIE" + mint "CLOUD". */
export function Wordmark() {
  const [a, b] = BRAND.wordmark;
  return (
    <span className="wordmark">
      <span className="w1">{a}</span>
      &nbsp;
      <span className="w2">{b}</span>
    </span>
  );
}
