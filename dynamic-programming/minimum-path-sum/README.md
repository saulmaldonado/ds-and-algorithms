# Minimum Path Sum

## Difficulty

![Medium](https://img.shields.io/badge/medium-ef6c00?style=for-the-badge&logoColor=white)

## Problem:

Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right, which minimizes the sum of all numbers along its path.

Note: You can only move either down or right at any point in time.

![Example 1](./images/minpath.jpg)

### Example 1:

```
Input: grid = [[1,3,1],[1,5,1],[4,2,1]]
Output: 7
Explanation: Because the path 1 → 3 → 1 → 1 → 1 minimizes the sum.
```

### Example 2:

```
Input: grid = [[1,2,3],[4,5,6]]
Output: 12
```

### Constraints

`m == grid.length`

`n == grid[i].length`

`1 <= m, n <= 200`

`0 <= grid[i][j] <= 100`

<details>
  <summary>Solutions (Click to expand)</summary>

### Explanation

The important thing to realize here is that there are only at most two possible moves you can make to each square. So instead of trying to calculate every single possible path sum to our `grid[m][n]` we can generate the smallest path sum for every cell starting from grid[0][0] by using the smallest sum from its top `m - 1` and left `n - 1` neighboring cells

```
+-+-+-+
|1|3| |
+-+-+-+
|1| | | <-------- for cell [1][1] we can find the smallest path sum to the cell by getting the smallest path sum of its neighbors min([1 - 1][1], [1][1 - 1])
+-+-+-+
| | | |
+-+-+-+
```

This way can generate small paths using what we know already instead of having to generate every possible path from beginning to end

For this we will need to generate a 2d array `dp` that reflects `grid`. Starting from top left we will calculate the smallest path to the cell in `grid` by taking the min of `dp[i-1][j]` and `dp[i][j-1]` (if the neighboring cells are within bounds) and adding `grid[i][j]`. We will record the sum in `dp[i][j]` for its neighboring cells to use. By the time we have reached `grid[m-1][n-1]` we can take the minimum of its possible paths `dp[m-2][n-1]` and `dp[m-1][n-2]` and adding ``grid[m-1][n-1]` this will be our answer.

- [JavaScript](./minimum-path-sum.js)
- [TypeScript](./minimum-path-sum.ts)
- [Java](./minimum-path-sum.java)
- [Go](./minimum-path-sum.go)
</details>
