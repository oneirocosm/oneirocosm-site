// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://oneirocosm.com",
  integrations: [mdx(), sitemap()],
  markdown: {
    shikiConfig: {
      themes: {
        light: "one-light",
        dark: "one-dark-pro",
      },
    },
  },
});
