---
title: Entities and spawning syntax
sidebar:
  order: 3
---

Entities are transpile-time classes. They are designed to provide OOP-like feel when working with entities. This feature is disallowed in `Generic` environments. Use `class` keyword there instead.

### Defining an `entity`

```rs
entity Quadro {
  fixed x, y
  fixed speed

  spawn(fixed x, y, speed) {
    self.x = x
    self.y = y
    self.speed = speed
  }

  destroy() {
    Pewpew:ExplodeEntity(self, 30)
  }

  Update() {
    let x, y = Pewpew:GetPosition(self)
    x = x + 10f * self.speed
    Pewpew:SetPosition(self, x, y)
  }

  fn DamageOtherEntity(entity OtherEntity) {
    entity.Damage(self.damage)
  }
}
```

### Creating an entity

```rs
let quadro = spawn Quadro(100fx, 100fx, 10fx)

destroy quadro()
```