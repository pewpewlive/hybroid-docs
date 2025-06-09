---
title: Classes
sidebar:
  order: 11
---

Classes are structs that allow methods.

```rs
class Rectangle {
  number width, height

  new(number width, height) {
    self.width = width
    self.height = height
  }

  fn Area() -> number {
    return width * height
  }
}

let rect = new Rectangle(100, 100)

Pewpew:Print(rect.Area())
```
