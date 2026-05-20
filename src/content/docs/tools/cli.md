---
title: CLI Commands
sidebar:
  order: 0
---

Hybroid Live provides a command-line interface for project management and compilation.

## `init` (alias: `i`)

Initializes a new Hybroid Live project in the current directory.

```bash
hybroid init --package my-project --name "My Level" --output out
```

| Flag | Required | Description |
|------|----------|-------------|
| `--package` | Yes | Kebab-case package name |
| `--name` | Yes | Display name of the level |
| `--output` | Yes | Output directory for compiled Lua files |

This creates a `hybconfig.toml` file and a `level.hyb` template.

## `build` (alias: `b`)

Transpiles all `.hyb` files in the project to Lua. Reads `hybconfig.toml` from the current directory.

```bash
hybroid build
```

Output is written to the configured output directory. A `manifest.json` is also generated for PewPew Live compatibility.

## `watch` (alias: `w`)

Watches the project directory for changes and automatically rebuilds when a `.hyb` file is modified.

```bash
hybroid watch
```

Runs indefinitely. Only triggers on `.hyb` file writes (ignores `.lua` files).

## `add` (alias: `a`)

:::caution
The `add` command is a stub. Package management from the PewPew Marketplace is not yet implemented.
:::
