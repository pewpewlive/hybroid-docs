---
title: "Environments"
sidebar:
  order: 1
---

Environments are an important aspect of PPL and Hybroid. Not specifying the environment will result in a transpile-time error.

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
  - When choosing this environment, you get to use a subset of the Lua standard libraries: `table`, `string`
  - A full version of the PewPew API and the Fmath library are available
- `Mesh` - for working with meshes
  - When choosing this environment, all of the standard libraries that are enabled globally in PPL are available (exceptions being `coroutine`, `io`, `os`, etc.)
  - A lite version of PewPew API is available as well as a full version of Fmath
- `Sound` - for working with sounds
  - Same as `Mesh`
  <!-- - `LuaGeneric` - for using standard Lua (e.g. console applications, etc.)
  - When choosing this environment, some features of the language would be disabled: `spawnable`s, `tick`, `spawn`, fixedpoint support, PPL libraries. All standard Lua libraries are available -->

## Using environments from other files

Consider this example:

```rs title="myhelper.hyb"
env MyHelper as Level

fn Greet(name) {
  Print("Hello" .. name .. "!")
}
```

You can import the `Greet` [function](/language-features/functions/) by prepending the environment before the function name:

```rs title="level.hyb"
env MyLevel as Level
use MyHelper

MyHelper:Greet("Peter") // -> Hello, Peter!
```
