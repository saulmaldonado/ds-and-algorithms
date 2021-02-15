# N-Queens II

## Difficulty

![Hard](https://img.shields.io/badge/hard-d9534f?style=for-the-badge&logoColor=white)

## Problem

The n-queens puzzle is the problem of placing n queens on an n x n chessboard such that no two queens attack each other.

Given an integer n, return the number of distinct solutions to the n-queens puzzle.

### Example 1

```
Input: n = 4
Output: 2
Explanation: There are two distinct solutions to the 4-queens puzzle as shown.
```

### Example 2

```
Input: n = 1
Output: 1
```

### Constraints

`1 <= n <= 9`

<details>
  <summary>Solutions (Click to expand)</summary>

### Explanation

#### Backtracking

Similar to the [N Queens](../n-queens/) solution we will try to place a single on every row and check its validity by check for other queens in the same column, primary diagonal, and secondary diagonal. Instead of saving the states of every time we come up with a valid board, we will increment a counter that will keep track of the number of valid boards.

Time: `O(N!)`

Space: `O(N^2)`

- [JavaScript](./title.js)
- [TypeScript](./title.ts)
- [Java](./title.java)
- [Go](./title.go)

</details>
