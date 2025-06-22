---
title: Entities and spawning syntax
sidebar:
  order: 3
---

Entity declarations work similarly to class declarations, with different syntax and a few extra features for making the creation of custom entities easier. This feature is disallowed in `Shared` environments.

### Defining an `entity`

```rs
entity ExampleEntity {
  fixed x, y
  fixed speed
  number hp = 10

  spawn(fixed x, y, speed) {
    self.x = x
    self.y = y
    self.speed = speed
  }

  destroy() {
    Pewpew:ExplodeEntity(self, 30)
  }

  Update() {
    let x, y = Pewpew:GetEntityPosition(self)
    x = x + 10f * speed // you can bypass writing 'self.'
    Pewpew:SetEntityPosition(self, x, y)
  }

  fn Damage(number damage) {
    hp -= damage
    if hp <= 0 {
      destroy self()
    }
  }

  fn DamageOtherEntity(ExampleEntity otherEntity) {
    otherEntity.Damage(1)
  }
}
```

### Creating an entity

```rs
let quadro = spawn Quadro(100fx, 100fx, 10fx)

destroy quadro()
```
