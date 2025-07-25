// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  build: {
    inlineStylesheets: "always",
  },
  integrations: [mdx()],
  markdown: {
    syntaxHighlight: "shiki",
    shikiConfig: {
      theme: "dracula",
    },
  },
  vite: {
    plugins: [tailwindcss()],
    css: {
      transformer: "lightningcss",
    },
  },
});
