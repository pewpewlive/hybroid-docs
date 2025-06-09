---
title: Functions
sidebar:
  order: 8
---

Declaring a function works with the `fn` keyword. Functions are local by default.

```rs
fn Greet(name) {
  Pewpew:Print("Hello" .. name .. "!")
}

Greet("John") // -> Hello, John!
```

Functions can be annonymous, too! Useful for callbacks.

```rs
let Greet = fn (name) {
  Pewpew:Print("Hello" .. name .. "!")
}

Greet("John") // -> Hello, John!
```