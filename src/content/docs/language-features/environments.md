---
title: "Environments"
sidebar:
  order: 1
---

Environments are an important aspect of PPL and Hybroid Live. Not specifying the environment will result in a transpile-time error.

The environment definition must be the first statement in the file.

```rs
env MyLevel as Level

// The rest of the code
```

The environment definition follows a special syntax:

```
env EnvName as EnvType
│   │          └─ Environment type
│   └─ Environment name
└─ Environment keyword
```

The following environment types are available:

- `Level` - for working with levels
  -The Pewpew and Fmath library are available
- `Mesh` - for working with meshes
  - Fmath and Pewpew libraries are not allowed. `Math` library is allowed
- `Sound` - for working with sounds
  - Same as `Mesh`
- `Shared` - for helpers being used by multiple environments with different environment types
  - The Pewpew library is not allowed

The `Table` and `String` libraries are allowed everywhere.

## Using environments from other files

Consider this example:

```rs title="myhelper.hyb"
env MyHelper as Shared

fn Greet(name) {
  Print("Hello" .. name .. "!")
}
```

You can import the `Greet` [function](/language-features/functions/) by prepending the environment before the function name:

```rs title="level.hyb"
env MyLevel as Level

MyHelper:Greet("Peter") // -> Hello, Peter!
```

If you don't want to prepend the environment every time, you can use `use` statement instead:

```rs title="level.hyb"
env MyLevel as Level
use MyHelper

Greet("Peter") // -> Hello, Peter!
```

## Using mesh environments for entities

```rs title="mesh.hyb"
env MyMesh as Mesh

pub meshes = [
  struct {
    vertexes = list<list<number>>[],
    segments = list<list<number>>[],
    colors = list<number>[]
  }
]
```

```rs title="level.hyb"
env MyLevel as Level

let myEntity = Pewpew:NewEntity(0f, 0f)
Pewpew:SetEntityMesh(myEntity, MyMesh, 0)
```

## Using sound environments

```rs title="sound.hyb"
env MySound as Sound

pub sounds = [
  ParseSound("https://pewpew.live/jfxr/index.html#...")
]
```

```rs title="level.hyb"
env MyLevel as Level

Pewpew:SetLevelSize(500f, 500f)
Pewpew:PlaySound(MySound, 0, 100f, 100f)
```
