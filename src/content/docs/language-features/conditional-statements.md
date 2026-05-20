---
title: Conditional statements
sidebar:
  order: 10
---

### If statement

```rs
let a = 10

if a == 10 {
  Pewpew:Print("It's 10!")
} else if a == 20 {
  Pewpew:Print("It's 20!")
} else {
  Pewpew:Print("It's a different number!")
}
```

### If as an expression

If statements can also be used as expressions by using `return` inside each branch:

```rs
let a = 10

let check = if a == 10 {
  return "It's 10!"
} else if a == 20 {
  return "It's 20!"
} else {
  return "It's a different number!"
}

Pewpew:Print(check)
```

### Match statement

Match allows branching on a value with multiple possible cases:

```rs
match a {
  1 => functionCall()
  1, 10 => {
    // if a is 1 or 10 then execute
  }
  20 => {
    a = 24
    return
  }
  else => a = 30
}
```

### Match as an expression

Match can also be used as an expression:

```rs
let a = 10
let check = match a {
  10 => "It's 10!"
  20 => "It's 20!"
  else => "It's a different number!"
}

Pewpew:Print(check)
```

When a match expression branch uses a multi-line block (`{ ... }`), use the `yield` keyword to return a value:

```rs
let check = match a {
  10 => {
    Pewpew:Print("Matched 10!")
    yield "It's 10!"
  }
  else => {
    yield "Something else"
  }
}
```
