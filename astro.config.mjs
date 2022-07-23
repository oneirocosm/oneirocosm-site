import { defineConfig } from 'astro/config';
import react from '@astrojs/preact';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), sitemap(), tailwind()],
  // projectRoot: '.',     // Where to resolve all URLs relative to. Useful if you have a monorepo project.
  // pages: './src/pages', // Path to Astro components, pages, and data
  publicDir: 'static',
  // A folder of static files Astro will copy to the root. Useful for favicons, images, and other files that don’t need processing.
  //root: 'public',
  // When running `astro build`, path to final static output
  site: 'https://oneirocosm.com', // Your public domain, e.g.: https://my-site.dev/. Used to generate sitemaps and canonical URLs.
  sitemap: true,

});