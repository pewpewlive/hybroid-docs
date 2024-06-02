---
title: Lists
sidebar:
  order: 6
---

In Lua, these structures are called "tables". These structures hold multiple data associated with a numeric index.

```rs
let fruits = ["banana", "kiwi", "apple", "pear", "cherry"]

Print(fruits[2]) // -> kiwi
```

To get the length of the list or , use `@Len` directive.

```rs
let fruits = ["banana", "kiwi", "apple", "pear", "cherry"]

repeat @Len(fruits) with i {
  Print(fruits[i])
}
```

### Adding elements to the list

Using `add` keyword.

```rs
let fruits = ["banana", "kiwi", "apple", "pear", "cherry"]

add "watermelon" to fruits

Print(@ListToStr(fruits)) // -> ["banana", "kiwi", "apple", "pear", "cherry", "watermelon"]
```

### Finding the index of the item

Using `find` keyword. Only the first match is returned.

```rs
let fruits = ["banana", "kiwi", "apple", "pear", "cherry"]

Print(find "apple" in fruits) // -> 3
```

### Removing an element from the list

Using `remove` keyword.

```rs
let fruits = ["banana", "kiwi", "apple", "pear", "cherry"]

remove 4 from fruits

Print(@ListToStr(fruits)) // -> ["banana", "kiwi", "apple", "cherry"]
```