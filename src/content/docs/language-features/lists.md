---
title: Lists
sidebar:
  order: 6
---

In Lua, these structures are called "tables". These structures hold multiple data associated with a numeric index.

```rs
let emptyList = list<text>[] // empty list initialization
let fruits = ["banana", "kiwi", "apple", "pear", "cherry"]

Pewpew:Print(fruits[2]) // -> kiwi
```

To get the length of the list, or use `#` prefix.

```rs
let fruits = ["banana", "kiwi", "apple", "pear", "cherry"]

repeat #fruits with i {
  Pewpew:Print(fruits[i])
}
```

### Adding elements to the list

Using hybroid's `Table` library:

```rs
let fruits = list<text>[]
Table:Insert(fruits, "watermelon")

Pewpew:Print(ToString(fruits)) // -> ["watermelon"]
```
