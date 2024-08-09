---
title: Macros
sidebar:
  order: 9
---

Macros are special functions that are evaluated in the transpiler.

```rs
macro @Hello(name) {
  "Hello ".. name .. "!"
}

Print(@Hello("John")) // -> Hello, John!
```

The generated code looks something like this:

```lua
print("Hello " .. "John" .. "!")
```
