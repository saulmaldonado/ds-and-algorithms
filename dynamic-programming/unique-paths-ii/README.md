# Unique Paths II

## Difficulty

![Medium](https://img.shields.io/badge/medium-ef6c00?style=for-the-badge&logoColor=white)

## Problem

A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).

The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).

Now consider if some obstacles are added to the grids. How many unique paths would there be?

An obstacle and space is marked as 1 and 0 respectively in the grid.

### Example 1

```
Input: obstacleGrid = [[0,0,0],[0,1,0],[0,0,0]]
Output: 2
Explanation: There is one obstacle in the middle of the 3x3 grid above.
There are two ways to reach the bottom-right corner:
1. Right -> Right -> Down -> Down
2. Down -> Down -> Right -> Right
```

### Example 2

```
Input: obstacleGrid = [[0,1],[0,0]]
Output: 1
```

### Constraints

`m == obstacleGrid.length`

`n == obstacleGrid[i].length`

`1 <= m, n <= 100`

`obstacleGrid[i][j] is 0 or 1.`

<details>
  <summary>Solutions (Click to expand)</summary>

### Explanation

#### Dynamic Programming

Similar to [Unique Paths](../unique-paths), dynamic programming can be used to find all possible paths to a cell by taking the sum of all possible paths to the cell above (`grid[i - 1][j]`) and the cell to the left (`grid[i][j - 1]`). This problem introduces obstructed cells where we cannot travel to or from indicated by `obstacleGrid[i][j]`. When calculating possible paths using dynamic programming, we will take this into consideration. If the cell above is obstructed we cannot travel from it, we will not include it in our sum. If the cell to the left is obstructed we cannot travel from it, we will not include it in our sum.

For optimization, we can consider grids where the first cell or last cell are obstructed as having `0` possible paths.

Time: `O(N * M)` Where `N` and `M` are the height and width of the grid.

Space: `O(N * M)`

- [JavaScript](./unique-paths-ii.js)
- [TypeScript](./unique-paths-ii.ts)
- [Java](./unique-paths-ii.java)
- [Go](./unique-paths-ii.go)

</details>
