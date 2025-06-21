---
title: Maps
sidebar:
  order: 7
---

In Lua, these structures are also called _tables_. These structures hold multiple data entries associated with a string index.

```rs
let emptyMap = map<number>{} // empty map initialization
let inventory = {
  "bananas" = 2,
  "apples" = 5,
  "kiwis" = 10,
  "pears" = 0,
  "cherries" = 12, // trailing comma is optional!
}

Pewpew:Print(inventory["apples"]) // -> 5
```

### Adding new entries

You can also add new entries to the map.

```rs
let inventory = {
  "bananas" = 2,
  "apples" = 5,
  "kiwis" = 10,
  "pears" = 0,
  "cherries" = 12, 
}
inventory["watermelons"] = 10

Pewpew:Print(ToString(inventory))

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
