# Divide Two Integers

## Difficulty

![Medium](https://img.shields.io/badge/medium-ef6c00?style=for-the-badge&logoColor=white)

## Problem:

Given two integers dividend and divisor, divide two integers without using multiplication, division, and mod operator.

Return the quotient after dividing dividend by divisor.

The integer division should truncate toward zero, which means losing its fractional part. For example, truncate(8.345) = 8 and truncate(-2.7335) = -2.

Note:

- Assume we are dealing with an environment that could only store integers within the 32-bit signed integer range: [−231, 231 − 1]. For this problem, assume that your function returns 231 − 1 when the division result overflows.

### Example 1:

```
Input: dividend = 10, divisor = 3
Output: 3
Explanation: 10/3 = truncate(3.33333..) = 3.
```

### Example 2:

```
Input: dividend = 7, divisor = -3
Output: -2
Explanation: 7/-3 = truncate(-2.33333..) = -2.
```

### Example 3:

```
Input: dividend = 0, divisor = 1
Output: 0
```

### Example 4:

```
Input: dividend = 1, divisor = 1
Output: 1
```

### Constraints

`-2^31 <= dividend, divisor <= 2^31 - 1`

`divisor != 0`

<details>
  <summary>Solutions (Click to expand)</summary>

### Explanation

#### Subtracting and Bit Shifting

If we think of division as how many times we can subtract the divisor from the divided without going negative, we can find the truncated quotient

```
dividend = 10 divisor = 3

10 - 3 = 7 // quotient = 1

7 - 3 = 4 // quotient = 2

4 - 3 = 1 // quotient = 3
```

If we use a solution where we subtract `divisor` from `dividend` until dividend become `<= 0`, it would take at most `O(N)` operations where `N` is dividend. This means `2^31 - 1` / `1` would take `2^31 - 1` operations. We can come up with a logarithmic solution where instead of incrementing our quotient by `1`, we can double it using bit shifting until right before the difference becomes less than `0`.

```
dividend = 10 divisor = 3

10 - (3 << 0) = 7 // quotient 1

10 - (3 << 1) = 4 // quotient 2

10 - (3 << 2) = -2 // difference is negative, take the last quotient

10 - 3 * 2 = 4
```

We would then repeat the operations of the remainder

```
divided = 4 divisor = 3

4 - (3 << 0) = 1 // quotient 1

4 - (3 << 1) = -1 // difference is negative, take the last quotient

4 - 3 = 1
```

Once we can no longer divide the dividend by the divisor we can return the sum of all the quotients we've calculated.

```
10 - 3 * 2 = 4 // quotient 2
4 - 3 * 1 = 1 // quotient 1
```

Time: `O(log N ^ 2)`

Space: `O(1)`

- [JavaScript](./divide-two-integers.js)
- [TypeScript](./divide-two-integers.ts)
- [Java](./divide-two-integers.java)
- [Go](./divide-two-integers.go)
</details>
