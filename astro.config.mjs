import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import image from "@astrojs/image";
import prefetch from "@astrojs/prefetch";
import compress from "astro-compress";
import critters from "astro-critters";
import { remarkReadingTime } from "./src/remark-reading-time.mjs";

// https://astro.build/config
export default defineConfig({
  site: "https://stmio.net",
  integrations: [
    mdx(),
    sitemap(),
    image({
      serviceEntryPoint: "@astrojs/image/sharp",
    }),
    prefetch(),
    compress(),
    critters(),
  ],
  markdown: {
    remarkPlugins: [remarkReadingTime],
    extendDefaultPlugins: true,
  },
});
