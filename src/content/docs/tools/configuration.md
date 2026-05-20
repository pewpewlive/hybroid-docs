---
title: Configuration
sidebar:
  order: 1
---

Project configuration is stored in `hybconfig.toml` at the root of your project.

## Full example

```toml
[level]
name = "My Awesome Level"
descriptions = ["A level made with Hybroid Live"]
information = "Use the arrow keys to move"
entry_point = "level.hyb"
casual = false
medal_requirements = { "gold" = 100, "silver" = 200, "bronze" = 500 }

[project]
name = "my-awesome-level"
output_directory = "out"
```

## `[level]` section

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes | Display name. Supports color codes (see below). |
| `descriptions` | string[] | No | Description lines shown in the level browser. |
| `information` | string | No | Instructions or info text. |
| `entry_point` | string | Yes | Entry `.hyb` file (usually `level.hyb`). |
| `casual` | bool | Yes | When `true`, the level has no score leaderboard. |
| `medal_requirements` | map | No | Score thresholds for gold, silver, and bronze medals. |

## `[project]` section

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes | Kebab-case package name. |
| `output_directory` | string | Yes | Where compiled `.lua` files are placed. |

## Color codes in names

Level names support inline color codes using `#{RRGGBBAA}` or `#RGB` notation:

```toml
name = "#{f00f}Red#{0f0f}Green#{00ff}Blue text"
```

Short `#RGB` codes (4 hex chars including alpha) must use the braced `#{...}` form. Full `#RRGGBBAA` codes (8 hex chars) can be used with or without braces.
