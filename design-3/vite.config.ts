import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Charlie Cloud landing page — static SPA, deployable to any static host.
export default defineConfig({
  plugins: [react()],
  base: './',
  build: {
    assetsInlineLimit: 4096,
  },
});
