---
title: Fmath API
slug: libraries/fmath
sidebar:
  order: 2
---

<!-- This is an auto-generated file. To modify it, change utils/generate_api.py in Hybroid's repository. -->

## Functions

### `MaxFixed`

```rs
MaxFixed() -> fixed
```
Returns the maximum value a fixedpoint integer can take.


### `RandomFixed`

```rs
RandomFixed(fixed min, fixed max) -> fixed
```
Returns a random fixedpoint value in the range [`min`, `max`]. `max` must be greater or equal to `min`.


### `RandomNumber`

```rs
RandomNumber(number min, number max) -> number
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


### `ToNumber`

```rs
ToNumber(fixed value) -> number
```
Returns the integral part of the `value`.


### `AbsFixed`

```rs
AbsFixed(fixed value) -> fixed
```
Returns the absolute value.


### `ToFixed`

```rs
ToFixed(number value) -> fixed
```
Returns a fixedpoint value with the integral part of `value`, and no fractional part.


### `Sincos`

```rs
Sincos(fixed angle) -> (fixed, fixed)
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


### `Exp`

```rs
Exp(fixed x) -> fixed
```
Returns e^x, the base-e exponential of x.


### `Ln`

```rs
Ln(fixed x) -> fixed
```
Returns the natural logarithm of x.

