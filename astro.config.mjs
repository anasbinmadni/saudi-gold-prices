import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://saudigoldprices.pages.dev', // Replace with your final domain
  integrations: [tailwind()]
});