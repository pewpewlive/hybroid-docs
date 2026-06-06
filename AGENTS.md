# Project Context: Hybroid Live Docs

## Project Overview

This project (`hybroid-docs`) contains the source code for the **Hybroid Live documentation** website. It is built using the **Astro** web framework and uses the **Starlight** documentation theme.

The site is hosted at `https://pewpewlive.github.io/hybroid-docs` and serves as the reference manual for the Hybroid language/tool ecosystem (related to PewPew Live).

## Technologies

*   **Framework:** [Astro](https://astro.build/) (v5)
*   **Theme:** [Starlight](https://starlight.astro.build/)
*   **UI Framework:** React
*   **Language:** TypeScript
*   **Package Manager:** NPM

## Building and Running

### Prerequisites
*   Node.js (LTS version recommended)
*   npm

### Commands

*   **Install Dependencies:**
    ```bash
    npm install
    ```

*   **Start Development Server:**
    ```bash
    npm run dev
    # or
    npm start
    ```
    This will start the local server, usually at `http://localhost:4321`.

*   **Build for Production:**
    ```bash
    npm run build
    ```
    This runs `astro check` followed by `astro build` to generate the static site.

*   **Preview Production Build:**
    ```bash
    npm run preview
    ```

## Project Structure & Conventions

### Documentation Content
All documentation pages are located in `src/content/docs/`. The structure is mapped to the sidebar navigation configured in `astro.config.mjs`.

*   **`src/content/docs/get-started/`**: Introductory guides (e.g., Quick Start).
*   **`src/content/docs/language-features/`**: Core language documentation (Classes, Entities, Functions, etc.).
*   **`src/content/docs/libraries/`**: API reference for standard libraries (`api_fmath`, `api_pewpew`, etc.).

### Configuration
*   **`astro.config.mjs`**: Main Astro configuration. Configures the Starlight integration, sidebar navigation structure, and React integration.
*   **`tsconfig.json`**: TypeScript configuration.

### Deployment
The site is configured to be deployed to GitHub Pages (`pewpewlive.github.io`) under the base path `/hybroid-docs`.
