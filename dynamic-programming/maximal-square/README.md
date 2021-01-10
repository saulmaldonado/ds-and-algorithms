# Maximal Square

## Difficulty

![Medium](https://img.shields.io/badge/medium-ef6c00?style=for-the-badge&logoColor=white)

## Problem:

Given an m x n binary matrix filled with 0's and 1's, find the largest square containing only 1's and return its area.

<!-- any examples -->

### Example 1:

![Example 1](./images/image1.jpg)

```
Input: matrix = [["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]
Output: 4
```

### Example 2:

![Example 2](./images/image2.png)

```
Input: matrix = [["0","1"],["1","0"]]
Output: 1
```

### Example 3:

```
Input: matrix = [["0"]]
Output: 0
```

### Constraints

`m == matrix.length`

`n == matrix[i].length`

`1 <= m, n <= 300`

`matrix[i][j] is '0' or '1'.`

<details>
  <summary>Solutions (Click to expand)</summary>

### Explanation

For a simple solution we can iterate through grid from top left and check for cells containing `'1'`. Single cells containing `'1'` count as a square with an area of 1 `(1 x 1)`. We can then start a breadth first traversal checking its right cell `i, j + 1`, bottom cell `i + 1, j`, and bottom right cell `i + 1, j + 1` for `'1'` at every cell. For every level the traversal passes we can add `1` to the total area. This will go one until we reach a level that does not pass or we reach the bounds of the grid.

The simple solution can be as slow as O(mn) time but O(1) space.

To reduce the time complexity we can use dynamic programming to reduce the number repeated cell checks and operations. Using a 2d array of the same size, we can, for every cell, calculate the largest square `matrix[i][j]` can form with `matrix[i][j]` being the bottom right cell. To do this we can the `dp` array to check its surrounding cells `i, j - 1`, `i - 1, j`, `i - 1, j - 1` and take the smallest of the three squares we can form and add that to the current cell.

```
[["1","0","1","0","0"],
["1","0","1","1","1"],
["1","1","1","1","1"],
["1","0","0","1","0"]]

for cell 2, 3, its surrounding cells values are 1, 1, 1. We take the smallest of the 3 and add that to the current cells value `1 + 1` compare that to the current answer and assign it the largest of the two

for the answer we return the answer's area `ans * ans`
```

- [JavaScript](./maximal-square.js)
- [TypeScript](./maximal-square.ts)
- [Java](./maximal-square.java)
- [Go](./maximal-square.go)
</details>
