// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://cmmi-dmm.pages.dev',
  build: {
    assets: 'assets',
    inlineStylesheets: 'always'
  },
  vite: {
    plugins: [tailwindcss()]
  }
});