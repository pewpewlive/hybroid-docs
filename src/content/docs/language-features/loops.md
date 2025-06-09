---
title: Loops
sidebar:
  order: 5
---

### Tick loops

In PPL, for updating every tick, `pewpew.add_update_callback` is used. Hybroid Live wraps it in a `tick` statement.

```rs
tick {
  Pewpew:Print("I am printed every tick!")
}
```

It is possible to create a `tick` statement with a time variable.

```rs
tick with time {
  Pewpew:Print(time .. " has elapsed")
}
```

### While loops

In Hybroid Live and PPL while loops are discouraged. However, you can still use them if you want or need to.

```rs
while true {
  Pewpew:Print("Running infinitely and as fast as possible!")
}
```

### Repeat loops

Repeat loops are simple `for` loops.

```rs
repeat 10 {
  Pewpew:Print("Hybroid Live is awesome!")
}
```

It is possible to create a `repeat` loop with an iteration variable.

```rs
repeat 10 with index {
  Pewpew:Print("This is " .. index .. "th iteration!") // -> This is 1th iteration!
}
```

You can also specify the skip amount and the range, just like in Lua.

```rs
repeat by 2 from 4 to 10 with index {
  Pewpew:Print("This is " .. index .. "th iteration!") // -> This is 4th iteration!
}
```

### For loops

`for` loops are designed for advanced iterations.

```rs
let fruits = ["banana", "kiwi", "apple", "pear", "cherry"]

for fruit in fruits {
  Pewpew:Print(fruit)
}
```

It is possible to also get an index.

```rs
let fruits = ["banana", "kiwi", "apple", "pear", "cherry"]

for index, item in fruits {
  Pewpew:Print(index)
}
```
