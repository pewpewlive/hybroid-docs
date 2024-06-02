---
title: "Environments"
sidebar:
  order: 1
---

Environments are an important aspect of PPL and Hybroid. Not specifying the environment will result in a transpile-time error.

The environment definition must be the first statement in the file.

```rs
@Environment(Level)

// The rest of the code
```

The following environments are available:

- `Level` - for working with levels
  - When choosing this environment, you get to use a subset of the Lua standard libraries: `table`, `string`, `Origin.fmath` (PPL-specific counterpart to `math`)
- `Mesh` - for working with meshes
  - When choosing this environment, all of the standard libraries that are enabled globally in PPL are available (exceptions being `coroutine`, `io`, `os`, etc.)
- `Sound` - for working with sounds
  - Same as `Mesh`
- `Shared` - for creating constant files referenced in multiple environments
  - When choosing this environment, `math` is disabled to work with `Level`, libraries open to `Level` are available
<!-- - `LuaGeneric` - for using standard Lua (e.g. console applications, etc.)
  - When choosing this environment, some features of the language would be disabled: `spawnable`s, `tick`, `spawn`, fixedpoint support, PPL libraries. All standard Lua libraries are available -->
