import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import icon from "astro-icon";
import path from 'path';

export default defineConfig({
  integrations: [
    react(),
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
  outDir: './dist'
});