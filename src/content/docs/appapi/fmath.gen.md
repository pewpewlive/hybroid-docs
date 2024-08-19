---
title: Fmath API
slug: appapi/fmath
sidebar:
  order: 2
---

<!-- This is an auto-generated file. To modify it, change utils/generate_api.py in Hybroid's repository. -->

## Functions

### `MaxFixedpoint`
```rs
MaxFixedpoint() -> fixed
```
Returns the maximum value a fixedpoint integer can take.

### `RandomFixedpoint`
```rs
RandomFixedpoint(fixed min, fixed max) -> fixed
```
Returns a random fixedpoint value in the range [`min`, `max`]. `max` must be greater or equal to `min`.

### `RandomInt`
```rs
RandomInt(number min, number max) -> number
```
Returns an integer in the range [`min`, `max`]. `max` must be greater or equal to `min`.

### `Sqrt`
```rs
Sqrt(fixed x) -> fixed
```
Returns the square root of `x`. `x` must be greater or equal to 0.

### `FromFraction`
```rs
FromFraction(number numerator, number denominator) -> fixed
```
Returns the fixedpoint value representing the fraction `numerator`/`denominator`. `denominator` must not be equal to zero.

### `ToInt`
```rs
ToInt(fixed value) -> number
```
Returns the integral part of the `value`.

### `AbsFixedpoint`
```rs
AbsFixedpoint(fixed value) -> fixed
```
Returns the absolute value.

### `ToFixedpoint`
```rs
ToFixedpoint(number value) -> fixed
```
Returns a fixedpoint value with the integral part of `value`, and no fractional part.

### `Sincos`
```rs
Sincos(fixed angle) -> fixed, fixed
```
Returns the sinus and cosinus of `angle`. `angle` is in radian.

### `Atan2`
```rs
Atan2(fixed y, fixed x) -> fixed
```
Returns the principal value of the arc tangent of y/x. Returns a value in the range [0, 2π[.

### `Tau`
```rs
Tau() -> fixed
```
Returns τ (aka 2π).
