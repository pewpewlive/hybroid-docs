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

## Typed parameters and return types

You can annotate parameters with types and declare a return type after the parameter list:

```rs
fn Add(number a, number b) -> number {
  return a + b
}

fn SpecialTransformation(number a, b) -> (number, number) {
  return -b, a
}

let x, y = SpecialTransformation(1, 2)
let result = Add(10, 20)
Pewpew:Print(ToString(result)) // -> 30
```

## Public functions

Use `pub` to make a function accessible from other files:

```rs
pub fn CalculateDamage(fixed base, fixed multiplier) -> fixed {
  return base * multiplier
}
```

## Anonymous functions

Functions can be anonymous, too! Useful for callbacks.

```rs
let Greet = fn(name) {
  Pewpew:Print("Hello" .. name .. "!")
}

Greet("John") // -> Hello, John!
```

## Function types

When declaring a variable that will hold a function, use the function type syntax:

```rs
pub fn(text, bool) callback // function uninitialized, type required
```

The type syntax is `fn(params) -> return_type` where both parameters and return type are optional. If there are multiple return types, then it's `fn(params) -> (return_type_1, return_type_2, ...)`.
