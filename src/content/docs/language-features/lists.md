---
title: Lists
sidebar:
  order: 6
---

In Lua, these structures are called "tables". These structures hold multiple data associated with a numeric index.

```rs
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

Using `add` keyword.

```rs
let fruits = ["banana", "kiwi", "apple", "pear", "cherry"]

add "watermelon" to fruits

Pewpew:Print(@ListToStr(fruits)) // -> ["banana", "kiwi", "apple", "pear", "cherry", "watermelon"]
```

### Finding the index of the item

Using `find` keyword. Only the first match is returned.

```rs
let fruits = ["banana", "kiwi", "apple", "pear", "cherry"]

Pewpew:Print(find "apple" in fruits) // -> 3
```

### Removing an element from the list

Using `remove` keyword.

```rs
let fruits = ["banana", "kiwi", "apple", "pear", "cherry"]

remove 4 from fruits

Pewpew:Print(@ListToStr(fruits)) // -> ["banana", "kiwi", "apple", "cherry"]
```