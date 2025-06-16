import { defineConfig } from "astro/config"
import starlight from "@astrojs/starlight"

import react from "@astrojs/react"

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      logo: {
        src: "./src/assets/hybroid_big.svg"
      },
      title: "Hybroid Live docs",
      favicon: "favicon.png",
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/pewpewlive/hybroid-docs",
        },
      ],
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
          label: "Library documentation",
          autogenerate: {
            directory: "libraries",
          },
        },
      ],
    }),
    react(),
  ],
})
