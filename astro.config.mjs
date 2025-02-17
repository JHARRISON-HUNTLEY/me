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
  build: {
    assets: 'assets'
  },
  vite: {
    resolve: {
      alias: {
        '@': path.resolve('./src')
      }
    },
    build: {
      rollupOptions: {
        output: {
          entryFileNames: 'assets/[name].[hash].js',
          chunkFileNames: 'assets/[name].[hash].js',
          assetFileNames: 'assets/[name].[hash][extname]'
        }
      }
    }
  },
  outDir: './dist'
});