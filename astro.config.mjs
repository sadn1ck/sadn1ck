import { defineConfig } from "astro/config";

import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  site: "https://anikd.com",
  output: "server",

  integrations: [mdx(), sitemap()],

  image: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.7tv.app",
      },
    ],
  },

  adapter: cloudflare({
    platformProxy: {
      enabled: true,
      configPath: "wrangler.jsonc",
      persist: true,
      imageService: "compile",
    },
  }),
});
