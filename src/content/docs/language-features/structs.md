---
title: Annonymous structs
sidebar:
  order: 9
---

Annonymous structs are tables with specific keys and values. They are primarily used to interface with the PewPew Live API.

```rs
let playerConfig = struct{
  shield = 5,
  camera_distance = -150f
}

Pewpew:ConfigurePlayer(0, playerConfig)
```