import { defineConfig } from "astro/config";

import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  site: "https://anikd.com",
  output: "server",

  integrations: [
    mdx(),
    sitemap(),
  ],

  image: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.7tv.app",
      },
    ],
  },

  adapter: node({
    mode: "standalone",
  }),
});