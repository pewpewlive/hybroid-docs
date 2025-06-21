---
title: Conditional statements
sidebar:
  order: 9
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

### Match statement

```rs
match a {
  1 => functionCall()
  10 => {
    //execute
  }
  20 => {
    a = 24
    return
  }
  else => a = 30
}

let a = 10
let check = match a { // match expression!
  10 => "It's 10!"
  20 => "It's 20!"
  else => "It's a different number!"
}

Pewpew:Print(check)
```
