# Sqrt(x)

## Difficulty

![Easy](https://img.shields.io/badge/easy-5cb85c?style=for-the-badge&logoColor=white)

## Problem

Given a non-negative integer x, compute and return the square root of x.

Since the return type is an integer, the decimal digits are truncated, and only the integer part of the result is returned.

### Example 1

```
Input: x = 4
Output: 2
```

### Example 2:

```
Input: x = 8
Output: 2
Explanation: The square root of 8 is 2.82842..., and since the decimal part is truncated, 2 is returned.
```

### Constraints

`0 <= x <= 2^31 - 1`

<details>
  <summary>Solutions (Click to expand)</summary>

### Explanation

#### Binary Search

If we know that the square root of a number is any number between `1...2...3...x` that when squared equals `x`, then we can use binary search to find this number. If the number is a decimal, then when using binary search we'll always land on the next integer rounded up.

```
x = 8


1 2 3 4 5 6 7 8 // 4 * 4 = 16
^     ^       ^

1 2 3 4 5 6 7 8 // 2 * 2 = 4
^ ^   ^

1 2 3 4 5 6 7 8 // 3 * 3 = 9
    ^ ^

1 2 3 4 5 6 7 8 // 3 is  2.8284 rounded up
    ^
```

Time: `O(log N)`

Space: `O(1)`

- [JavaScript](./sqrtx.js)
- [TypeScript](./sqrtx.ts)
- [Java](./sqrtx.java)
- [Go](./sqrtx.go)

</details>
