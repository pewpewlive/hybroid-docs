---
title: Maps
sidebar:
  order: 7
---

In Lua, these structures are also called _tables_. These structures hold multiple data entries associated with a string index.

```rs
let inventory = {
  bananas: 2,
  apples: 5,
  kiwis: 10,
  pears: 0,
  cherries: 12
}

Print(fruits["apples"]) // -> 5
```

### Adding elements to the map

Using `add` keyword.

```rs
let inventory = {
  bananas: 2,
  apples: 5,
  kiwis: 10,
  pears: 0,
  cherries: 12
}

add 10 as "watermelon" to inventory

Print(@MapToStr(fruits))

/*
-> {
  bananas: 2,
  apples: 5,
  kiwis: 10,
  pears: 0,
  cherries: 12,
  watermelons: 10
}
*/
```

### Finding the key of the item

Using `find` keyword. Only the first match is returned.

```rs
let inventory = {
  bananas: 2,
  apples: 5,
  kiwis: 10,
  pears: 0,
  cherries: 12
}

Print(find 10 in fruits) // -> "kiwis"
```

### Removing an element from the map

Using `remove` keyword.

```rs
let inventory = {
  bananas: 2,
  apples: 5,
  kiwis: 10,
  pears: 0,
  cherries: 12
}

remove "cherries" from fruits

Print(@MapToStr(fruits))

/*
-> {
  bananas: 2,
  apples: 5,
  kiwis: 10,
  pears: 0
}
*/
```
