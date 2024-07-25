---
title: What is APPAPI?
sidebar:
  order: 0
---

Augmented PewPew API: PewPew API, developed to use all Hybroid's features and to improve developer experience.

## APPAPI VS PPOL

APPAPI:

- For use in Hybroid
- Powerful and efficient abstractions, such as usage of structs and entities
- Converted into native PewPew and Fmath calls on transpile-time
- API split into namespaces for best organization
- Original PewPew and Fmath functions still available in `Origin` namespace
- Built right into Hybroid
- Functions adapt based on environment
- Includes improvements to the PewPew API
- PewPew enums treated as actual enums
- `tick` statement is an integral part of Hybroid language, being converted to `pewpew.add_update_callback()`

PPOL:

- For use in Lua (Hybroid may be compatible via Lua helper imports, however, no support will be provided)
- API exists in global scope
- Functions renamed into their shorthands
- Original PewPew and Fmath functions are removed
- Needs importing via `require()` function
- Includes improvements to the PewPew API
- PewPew enums are replaced with tables having indexes or having shorthands

