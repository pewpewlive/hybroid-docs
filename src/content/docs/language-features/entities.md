---
title: Entities and spawning syntax
sidebar:
  order: 3
---

Entities are transpile-time classes. They are designed to provide OOP-like feel when working with entities. This feature is disallowed in `Generic` environments. Use `struct` keyword there instead.

### Defining an `entity`

```rs
entity Quadro {
  id: number

  mesh_id: number
  mesh_id2: number
  mesh_id3: number

  x = 1f y: fixed z: fixed = 0f

  /* you can also do this
  x = 1f; y: fixed; z: fixed = 0f

  x = 1f
  y: fixed
  z: fixed = 0f
  */
  speed = 10f
  damage = 2

  Spawn(x fixed, y fixed, speed fixed) {
    self.speed = speed
    self.mesh_id2 = PewPew.NewEntity(x, y)
    PewPew.SetMesh(self, "file_path", 0)
    PewPew.SetMesh(self.mesh_id2, "file_path", 1)

    return self
  }

  Destroy() {
    PewPew.start_exploding(self, 30)
  }

  Update() {
    let x, y = PewPew.GetPosition(self)
    x = x + 10fx * self.speed
    PewPew.GetPosition(self, x, y)
  }

  WeaponCollision(index, wtype) {
  }

  PlayerCollision(index, ship_id) {
  }

  WallCollision(wall_x, wall_y) {
  }

  fn DamageOtherEntity(entity OtherEntity) {
    entity.Damage(self.damage)
  }
}
```

The Hybroid code shown gets generated into Lua like so:

```lua
QuadroStates = {}

local function quadro_update(id)
  local x, y = pewpew.entity_get_position(id)
  x = x + 10fx * QuadroState[id][8] -- this is speed because all of the entity fields get mapped to their indexes
  pewpew.entity_set_position(id, x, y)
end

local function quadro_weapon_collision(id, index, wtype)
end

local function quadro_player_collision(id, index, ship_id)
end

local function quadro_wall_collision(id, wall_x, wall_y)
end

function quadro_damage_other_entity(id, entity)
  other_entity_damage(entity, QuadroStates[id][9])
end

function Quadro.new(x, y, speed)
  local id = pewpew.new_customizable_entity(x, y)
  QuadroState[id] = {id, 0, 1, 2, 1fx, 0fx, 0fx, 10fx, 2} -- set default values specified in the entity fields

  pewpew.entity_set_update_callback(id, quadro_update)
  pewpew.customizable_entity_set_weapon_collision_callback(id, quadro_weapon_collision)
  pewpew.customizable_entity_set_player_collision_callback(id, quadro_player_collision)
  pewpew.customizable_entity_configure_wall_collision(id, quadro_wall_collision)

  QuadroState[id][8] = speed
  QuadroState[id][3] = pewpew.new_customizable_entity(x, y)
  pewpew.customizable_entity_set_mesh(id, "file_path", 0)
  pewpew.customizable_entity_set_mesh(QuadroState[id][3], "file_path", 1)

  return id
end
```

### Creating an entity

```rs
let quadro = spawn Quadro(100fx, 100fx, 10fx)

destroy quadro
```