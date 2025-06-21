---
title: Enums
sidebar:
  order: 10
---

Enums are a pure hybroid concept, since in lua they are optimized down to just numbers, therefore causing zero overhead.

```rs
enum SandwichType {
  Blt,
  Panini,
  GrilledCheese,
  Ham
}

let variant = SandwichType.Panini
```
