import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // This tells Astro exactly what your live domain is for SEO tags
  site: 'https://saudigoldrates.com',
  integrations: [
    tailwind(),
    sitemap()
  ],
});