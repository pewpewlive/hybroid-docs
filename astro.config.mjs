import { defineConfig } from "astro/config"
import starlight from "@astrojs/starlight"

import react from "@astrojs/react"

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Hybroid docs",
      social: {
        github: "https://github.com/withastro/starlight",
      },
      sidebar: [
        {
          label: "Get Started",
          autogenerate: {
            directory: "get-started",
          },
        },
        {
          label: "Language features",
          autogenerate: {
            directory: "language-features",
          },
        },
        {
          label: "Augmented PewPew API",
          autogenerate: {
            directory: "appapi",
          },
        },
        {
          label: "Contributing",
          autogenerate: {
            directory: "contributing",
          },
        },
      ],
    }),
    react(),
  ],
})
