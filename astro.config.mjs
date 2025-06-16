// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://Diesouto.gitlab.io",
  base: "landing-gta-vi",
  outDir: "public",
  publicDir: "static",
  vite: {
    plugins: [tailwindcss()],
  },
});
