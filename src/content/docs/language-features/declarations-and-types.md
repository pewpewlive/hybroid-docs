---
title: Declarations and types
sidebar:
  order: 2
---

## Declarations

### Declaration of variables

```rs
// Local variables
let name = "Alpha"

// Global (public) variables
pub meaning_of_life = 42

// Reassignment
name = "blade"

// Multiple variable declarations in one
let x, y, z = 1, 2, 3

// Multiple reassignments in one
x, y, z = 4, 5, 6
```

### Typed declarations

Types allow you to explicitly describe a variable's type. In Hybroid Live, types are not always necessary. Types might be necessary when you want to describe a complex type variable, or if the variable is left undefined. Types are what allows Hybroid Live to make sure you can write valid code without much headache and without the need to debug a lot.

```rs
number a  // local variable uninitialized, type required
let num = 1 // local variable initialized, type inferred
pub fn(text, bool) callback // global function uninitialized, type required
pub b = true // global variable initialized, type inferred
let number c // illegal syntax!
```

If a variable is uninitialized, Hybroid Live initializes it behind the scene with a default value for the given type. If it was a number, for example, that value would be 0. For a string, it would be an empty string and for a function, the same thing. Only variables with the basic types can be left uninitialized by the user, otherwise Hybroid Live will tell you to give the variable an explicit value.

### Declaration of constants

```rs
const PI = 3.14f
```

### Type aliases

Type aliases let you create reusable names for types. See the full [Type aliases](/language-features/type-aliases/) page for details.

```rs
alias ID = number
pub alias Config = struct{ number hp, fixed speed }
```

## Types

### Basic types

```rs
number // number
fixed // fixedpoint number
text // string
bool // boolean
entity // entity
fn(T) -> T // function
list<T> // list
map<T> // map
``` 
