import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';
import tailwind from '@astrojs/tailwind';
import icon from "astro-icon";
import path from 'path';

export default defineConfig({
  integrations: [
    preact(),
    tailwind(),
    icon()
  ],
  site: 'https://jharrison-huntley.github.io',
  base: '/me',
  vite: {
    resolve: {
      alias: {
        '@': path.resolve('./src')
      }
    }
  },
  // If you need .nojekyll, use outDir instead
  outDir: './dist',
  // Remove the problematic build.assets
});