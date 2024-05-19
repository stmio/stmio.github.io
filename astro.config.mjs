import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import compress from "astro-compress";
import critters from "astro-critters";
import { remarkReadingTime } from "./src/remark-reading-time.mjs";

// https://astro.build/config
export default defineConfig({
  site: "https://stmio.net",
  integrations: [mdx(), sitemap(), critters(), compress({ SVG: false })],
  prefetch: true,
  markdown: {
    remarkPlugins: [remarkReadingTime],
    extendDefaultPlugins: true,
  },
});
