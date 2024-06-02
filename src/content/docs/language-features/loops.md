---
title: Loops
sidebar:
  order: 5
---

### Tick loops

In PPL, for updating every tick, `pewpew.add_update_callback` is used. Hybroid wraps it in a `tick` statement.

```rs
tick {
  Print("I am printed every tick!")
}
```

It is possible to create a `tick` statement with a time variable.

```rs
tick with time {
  Print(time .. " has elapsed")
}
```

### While loops

In Hybroid and PPL while loops are discouraged. However, you can still use them if you want or need to.

```rs
while true {
  Print("Running infinitely and as fast as possible!")
}
```

### Repeat loops

Repeat loops are simple `for` loops.

```rs
repeat 10 {
  Print("Hybroid is awesome!")
}
```

It is possible to create a `repeat` loop with an iteration variable.

```rs
repeat 10 with index {
  Print("This is " .. index .. "th iteration!") // -> This is 1th iteration!
}
```

### For loops

`for` loops are designed for advanced iterations.

```rs
let fruits = ["banana", "kiwi", "apple", "pear", "cherry"]

for fruit in fruits {
  Print(fruit)
}
```

It is possible to also get an index.

```rs
let fruits = ["banana", "kiwi", "apple", "pear", "cherry"]

for index, item in fruits {
  Print(index)
}
```
