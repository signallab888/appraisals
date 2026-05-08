import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

const port = parseInt(process.env.PORT || '4321');

export default defineConfig({
  site: 'https://commercialappraiserfl.com',
  integrations: [
    tailwind({ applyBaseStyles: false }),
  ],
  compressHTML: true,
  build: {
    outDir: './dist/public',
    inlineStylesheets: 'auto',
  },
  server: {
    port,
    host: true,
  },
  preview: {
    port,
    host: true,
  },
  vite: {
    server: {
      host: true,
      allowedHosts: true,
      hmr: false,
    },
  },
});
