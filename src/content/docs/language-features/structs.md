---
title: Structs
sidebar:
  order: 12
---

Structures are classes that do not have inheritance.

```rs

struct Rectangle {
  mesh_id1: number
  mesh_id1, mesh_id1, mesh_id1, mesh_id1 = 0f, 0f, 0f, 0f, 0f

  x, y = 0,0

  New(length number, height number) {
    self.length = length
    self.height = height
    return self
  }

  fn Area() {
    return self.length * self.height
  }

  fn Perimeter() {
    return (self.length + self.height) * 2
  }

  fn Move() {
    x += 5
  }
}

let rect = new Rectangle(100, 100)


Print(rect.Area())
```

```lua
function Rectangle_New(length, height)
  local new = {0, 0, nil}
  new[1] = length
  new[2] = height
  return new
end

function Rectangle_Area(self)
  return self[1] * self[2]
end

function Rectangle_Perimeter(self)
  return (self[1] + self[2]) * 2
end

function Rectangle_Move(self)
  self.x = self.x + 5
end

local rect = Rectangle_New(100, 100)

print(Area(rect))
```
