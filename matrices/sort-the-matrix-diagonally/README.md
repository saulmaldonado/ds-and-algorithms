# Sort the Matrix Diagonally

## Difficulty

![Medium](https://img.shields.io/badge/medium-ef6c00?style=for-the-badge&logoColor=white)

## Problem:

A matrix diagonal is a diagonal line of cells starting from some cell in either the topmost row or leftmost column and going in the bottom-right direction until reaching the matrix's end. For example, the matrix diagonal starting from mat[2][0], where mat is a 6 x 3 matrix, includes cells mat[2][0], mat[3][1], and mat[4][2].

Given an m x n matrix mat of integers, sort each matrix diagonal in ascending order and return the resulting matrix.

### Example 1:

![Example 1](./images/example1.png)

```
Input: mat = [[3,3,1,1],[2,2,1,2],[1,1,1,2]]
Output: [[1,1,1,1],[1,2,2,2],[1,2,3,3]]

```

### Constraints

`m == mat.length`

`n == mat[i].length`

`1 <= m, n <= 100`

`1 <= mat[i][j] <= 100`

<details>
  <summary>Solutions (Click to expand)</summary>

### Explanation

#### Diagonal lists and sorting

If we want to get all the diagonals of a matrix, we would need to know how to traverse a matrix diagonally. This largely depends on the direct you need to go, but for top-left to bottom-right diagonals we can get from cell `mat[i][j]` to the next cell `mat[i + 1][j + 1]` by incrementing our `y` axis index `i` and incrementing our `x`axis index `j` each by one. This will continue until there are no more cells in the current diagonals or when `i` or `j` are outside the bounds of the matrix.

![solution1-1](./images/solution1-1.png)

We can now traverse the matrix diagonally at every possible starting points and construct a list out of all the cells we traverse and sort the list.

```
[3,0,0]
[0,2,0]
[0,0,1]

[3,2,1]

sort..

[1 2 3]
```

We'll now have insert the values back into the diagonal in the now sorted order. Since we know that ending point of the current diagonal, we can start at that point, replace the existing value with the last value in our list, pop the last value from the array repeat the operations going back up the diagonal. Since we know how to traverse down the diagonal `i + 1, j + i` we also know how to traverse up the diagonal, `i - 1, j - 1`.

```
[3,0,0]
[0,2,0]
[0,0,1]

[1 2 3]

[1,0,0]
[0,2,0]
[0,0,3]
```

time: O((M + N) _ min(M, N) _ log(min(M, N)))

Where M and N are the height and widths of the matrix

space: O(min(M, N))

- [JavaScript](./sort-the-matrix-diagonally.js)
- [TypeScript](./sort-the-matrix-diagonally.ts)
- [Java](./sort-the-matrix-diagonally.java)
- [Go](./sort-the-matrix-diagonally.go)
</details>
