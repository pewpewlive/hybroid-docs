---
title: Number literals
sidebar:
  order: 4
---

In PPL, you use number literals with `fx` at the end of the number. But thankfully, Hybroid Live makes working with numbers easier, by giving several options.

### Fixedpoint Literal

Use `fx` to explicitly state you want to use fixedpoint numbers. This feature is disallowed in `Generic`, `Mesh` and `Sound` environments.

```rs
let speed = 100.2048fx
```

### Decimal Literal

If that's not what you want, Hybroid Live gives the option to use generic decimal literals by writing a float and adding `f` at the end

```rs
let a = 100.5f
let b = 3.14f
```

Behind the scenes, the transpiler will convert these numbers to their equivalent value based on the environment settings:

- On `Level` and `Shared` it will convert these numbers to their fixedpoint counterparts (`100.5f` will become `100.2048fx`)
- On `Mesh` and `Sound` fixedpoints of any kind are not allowed

### Angle Literal

Hybroid Live also adds special literal support for angles.

```rs
let degrees = 180d
let pi = 3.14r
```

When using angle literals, the transpiler will automatically convert their values:

- The `d` literal allows you to write angles in degrees. They are automatically converted to radians and directly placed in the final Lua code.
- The `r` literal is functionally the same as a decimal `f` literal, keeping its value without the `r`. It is useful to denote when arguments are angles or just numbers.

### Other Literals

- `0x` is a hexadecimal literal. Example: `0xff`
- `0o` is an octal literal. Example: `0o07`
- `0b` is a binary literal. Example: `0b01`
