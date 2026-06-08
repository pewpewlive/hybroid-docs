---
title: Type casting and smart-casting
sidebar:
  order: 11
---

Type casting lets you check an entity's type at runtime and safely access its fields.

## The `is` and `isnt` operators

Use `is` to check whether an entity is of a given type:

```rs
if target is Asteroid {
  Pewpew:Print("It's an asteroid!")
}

if target isnt Ship {
  Pewpew:Print("It's not a ship!")
}
```

## Smart-casting

Smart-casting allows you to check and cast a hybroid entity in one step using `if let`. Once cast, all fields and methods of that entity type are available within the block:

```rs
entity ShieldPowerUp {
  fixed strength

  spawn(fixed strength) {
    self.strength = strength
  }
}

fn OnCollision(entity collided) {
  if let targetEntity = collided is ShieldPowerUp {
    targetEntity.strength = 100fx
    Pewpew:Print("Shield boosted!")
  }
}
```

Smart-casting works in regular `if` conditions and in `match` statements as well. The cast variable is scoped to the block where the check succeeds.
