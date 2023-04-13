import { defineConfig } from 'astro/config';
import lit from "@astrojs/lit";
import tailwind from "@astrojs/tailwind";

import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
export default defineConfig({
  integrations: [lit(), tailwind()],
  output: "server",
  adapter: netlify()
});