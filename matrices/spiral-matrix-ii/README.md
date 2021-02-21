# Spiral Matrix II

## Difficulty

![Medium](https://img.shields.io/badge/medium-ef6c00?style=for-the-badge&logoColor=white)

## Problem

Given a positive integer n, generate an n x n matrix filled with elements from 1 to n2 in spiral order.

### Example 1

```
Input: n = 3
Output: [[1,2,3],[8,9,4],[7,6,5]]
```

### Example 2

```
Input: n = 1
Output: [[1]]
```

### Constraints

`1 <= n <= 20`

<details>
  <summary>Solutions (Click to expand)</summary>

### Explanation

#### Traverse Level by Level

Similar to the solution for [Spiral Matrix](../spiral-matrix), we will traverse the our empty grid level by level using 4 pointers in a clockwise directions. Instead of reading values we will keep track of a counter that will increment from `1` to `n^2` for every cell traversed, along the way we will replace the default value in the array with the counter value.

Time: `O(N^2)` Where `N` is `n`

Space: `O(N^2)`

- [JavaScript](./spiral-matrix-ii.js)
- [TypeScript](./spiral-matrix-ii.ts)
- [Java](./spiral-matrix-ii.java)
- [Go](./spiral-matrix-ii.go)

</details>
