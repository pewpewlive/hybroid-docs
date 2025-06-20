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
```

### Typed declarations

Types allow you to explicitly describe a variable's type. In Hybroid Live, types are not always necessary. Types might be necessary when you want to describe a complex type variable, or if the variable is left undefined. Types are what allows Hybroid Live to make sure you can write valid code without much headache and without the need to debug a lot.

```rs
let number a  // variable uninitialized, type required
let num = 1 // variable initialized, type inferred
list<number> numbers = [] // list is empty, list value type required
pub fn(text, bool) callback // function uninitialized, type required
```

### Declaration of constants

```rs
const PI = 3.14f
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
