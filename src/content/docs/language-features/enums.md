---
title: Enums
sidebar:
  order: 10
---

Enums are a pure Hybroid concept, since in Lua they are optimized down to just numbers, therefore causing zero overhead.

```rs
enum SandwichType {
  Blt,
  Panini,
  GrilledCheese,
  Ham
}

let variant = SandwichType.Panini
```
