# Pow(x, n)

## Difficulty

![Medium](https://img.shields.io/badge/medium-ef6c00?style=for-the-badge&logoColor=white)

## Problem

Implement pow(x, n), which calculates x raised to the power n (i.e. xn).

### Example 1

```
Input: x = 2.00000, n = 10
Output: 1024.00000
```

### Example 2

```
Input: x = 2.10000, n = 3
Output: 9.26100
```

### Constraints

`Input: x = 2.00000, n = -2`

`Output: 0.25000`

`Explanation: 2-2 = 1/22 = 1/4 = 0.25`

<details>
  <summary>Solutions (Click to expand)</summary>

### Explanation

#### Recursion

If we can reduce our problem into a simpler one, say find the result of `pow(x, 1)` or `pow(x,0)` where we can find the result by returning `x` or `1`, then we need to solve a way to reduce `n` to a base case where `pow(x, n)` is equivalent to `pow(y, 1)`.

If we know that the result of `pow` is the result of multiplying `x` with itself `n - 1` times then we can reduce `n` by halving it and doubling `x` and still get the same result

```
pow(2, 4)

2 * 2 * 2 * 2

pow(4, 2)

(2 * 2) * (2 * 2)

pow(16, 1)

(2 * 2 * 2 * 2)
```

Though this method only works with an even `n`. An odd `n` cannot be evenly be divided into `2` so if we want to reduce an odd `n` we would need to do `pow(x * x, n / 2) * x` where the extra `x` is the left over `n`.

```
pow(2, 5)

2 * 2 * 2 * 2 *2

pow(4, 2) * 2

(2 * 2) * (2 * 2) * 2

pow(16, 1) * 2
```

For a negative `n`, we can move the numerator, `x`, to the denominator, `1 / x` and convert `n` to positive.

```
pow(2, -4)

pow(1/2, 4)

1/2 * 1/2 * 1/2 * 1/2

pow(1/4, 2)

(1/2 * 1/2) * (1/2 * 1/2)

pow(1/8, 1)

(1/2 * 1/2 * 1/2 * 1/2)
```

`n = -2,147,483,648` is the one edge we need special operations for. Since `n` here is negative we would convert it to a positive. But since `2,147,483,648` is greater than the max integer it would cause an overflow and revert the number back to -2,147,483,648. causing infinite recursion. We can fix this by dividing `n` and doubling `x` ahead of time before converting it to a positive

Time: `O(log n)` Where `n` is `n`

Space: `O(log n)` Counting the call stack as memory

- [JavaScript](./powx-n.js)
- [TypeScript](./powx-n.ts)
- [Java](./powx-n.java)
- [Go](./powx-n.go)

</details>
