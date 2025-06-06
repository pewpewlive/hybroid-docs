---
title: Conditional statements
sidebar:
  order: 9
---

### If statement

```rs
let a = 10

if a == 10 {
  Print("It's 10!")
} else if a == 20 {
  Print("It's 20!")
} else {
  Print("It's a different number!")
}
```

If statements can also be used as expressions.

```rs
let a = 10

let check = if a == 10 {
  return "It's 10!"
} else if a == 20 {
  return "It's 20!"
} else {
  return "It's a different number!"
}

Print(check)
```

### Match statement

```rs
match a {
  1 => // if a is 1 or 10 then execute
  10 => {
    //execute
  }
  20 => {
    a = 24
    return
  }
  _ => { // else
    a = nil
  }
}

let a = 10
let check = match a {
  10 => "It's 10!"
  20 => "It's 20!"
  _ => "It's a different number!"
}

Print(check)
```
