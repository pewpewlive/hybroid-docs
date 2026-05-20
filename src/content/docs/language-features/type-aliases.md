---
title: Type aliases
sidebar:
  order: 2.5
---

Type aliases allow you to create named shortcuts for complex or reusable types.

```rs
alias ID = number
pub alias Config = struct{ number hp, fixed speed }
```

Aliases work just like the types they represent — you can use them anywhere a type is expected:

```rs
alias PlayerID = number

fn GetPlayerName(PlayerID id) -> text {
  return "Player " .. ToString(id)
}

let myId: PlayerID = 42
Pewpew:Print(GetPlayerName(myId)) // Player 42
```

## Public aliases

Use `pub` to export a type alias for use in other files:

```rs
pub alias Vec2 = struct{ fixed x, y }
pub alias GameConfig = struct{ number max_players, fixed world_size }
```
