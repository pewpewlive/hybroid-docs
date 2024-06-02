---
title: Directives
sidebar:
  order: 9
---

Directives are special functions that are evaluated in the transpiler. They work similarly to _macros_.

```rs
dir @Hello(name) {
  "Hello ".. name .. "!"
}

print(@Hello("John")) // -> Hello, John!
```

The generated code looks something like this:

```lua
print("Hello " .. "John" .. "!")
```
