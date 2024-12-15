import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import pagefind from "astro-pagefind";

// https://astro.build/config
export default defineConfig({
  site: "https://anikd.com",
  integrations: [tailwind(), sitemap(), mdx(), pagefind()],
  markdown: {
    shikiConfig: {
      theme: "css-variables",
    },
  },
  image: {
    domains: ["cdn.7tv.app"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.7tv.app",
      },
    ],
  },
});
