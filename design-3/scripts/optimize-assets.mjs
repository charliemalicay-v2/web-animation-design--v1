/**
 * Generate web-optimised derivatives of the source brand images.
 * Run: npm run optimize
 *
 * Sources (committed, untouched):
 *   assets/hero_image_v1.jpg
 *   assets/header_logo_background.jpg
 *   assets/header_logo_no_background.jpg
 *   assets/header_logo_title_balanced.png
 *
 * Outputs (committed, consumed by the app / index.html):
 *   assets/hero.webp            — hero backdrop + product frame (caption cropped)
 *   assets/brand-panel.webp     — About section panel
 *   public/og.jpg               — social share card (1200×630)
 *   public/favicon-32.png, public/apple-touch-icon.png — rasterised favicon
 */
import sharp from 'sharp';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const A = (p) => resolve(root, 'assets', p);
const P = (p) => resolve(root, 'public', p);

const jobs = [
  // Source is 1407×768 with a baked "New main page layout :" caption bar along
  // the bottom — crop it off before scaling.
  () =>
    sharp(A('hero_image_v1.jpg'))
      .extract({ left: 0, top: 0, width: 1407, height: 662 })
      .resize({ width: 1600, withoutEnlargement: true })
      .webp({ quality: 72 })
      .toFile(A('hero.webp')),

  () =>
    sharp(A('header_logo_background.jpg'))
      .resize({ width: 1600, withoutEnlargement: true })
      .webp({ quality: 74 })
      .toFile(A('brand-panel.webp')),

  () =>
    sharp(A('header_logo_background.jpg'))
      .resize({ width: 1200, height: 630, fit: 'cover', position: 'centre' })
      .jpeg({ quality: 82, mozjpeg: true })
      .toFile(P('og.jpg')),

  () =>
    sharp(P('favicon.svg'), { density: 256 }).resize(32, 32).png().toFile(P('favicon-32.png')),

  () =>
    sharp(P('favicon.svg'), { density: 256 })
      .resize(180, 180)
      .png()
      .toFile(P('apple-touch-icon.png')),
];

const bytes = (n) => (n / 1024).toFixed(1) + ' kB';

for (const job of jobs) {
  const info = await job();
  console.log('✓', info.format, `${info.width}×${info.height}`, bytes(info.size));
}
console.log('done');
