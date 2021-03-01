# Set Matrix Zeroes

## Difficulty

![Medium](https://img.shields.io/badge/medium-ef6c00?style=for-the-badge&logoColor=white)

## Problem

Given an m x n matrix. If an element is 0, set its entire row and column to 0. Do it in-place.

Follow up:

- A straight forward solution using O(mn) space is probably a bad idea.
- A simple improvement uses O(m + n) space, but still not the best solution.
- Could you devise a constant space solution?

### Example 1

```
Input: matrix = [[1,1,1],[1,0,1],[1,1,1]]
Output: [[1,0,1],[0,0,0],[1,0,1]]
```

### Example 2

```
Input: matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]
Output: [[0,0,0,0],[0,4,5,0],[0,3,1,0]]
```

### Constraints

`m == matrix.length`

`n == matrix[0].length`

`1 <= m, n <= 200`

`-231 <= matrix[i][j] <= 231 - 1`

<details>
  <summary>Solutions (Click to expand)</summary>

### Explanation

#### Set of Rows and Columns

For every `0` found at `matrix[i][j]` we find in the matrix we have to mark all the cells in the entire row indexed `i` and the entire column indexed at `j` as `0`. We can keep track of the rows and column we need make as `0` by storing the indices into sets, one for row indices and one for column indices. After traversing the entire matrix we will iterate over the entries in the sets and mark all of the rows and columns in our sets to `0`

```
[
[0,1,2,0],
[3,4,5,2],
[1,3,1,5]
]

rows [0]
columns [0 3]

// here cell matrix[0][0] and matrix[0][3] are 0

our sets will include indices for row 0 and columns 0 and 3. After traversing the entire matrix we will mark all these row and columns with 0

[
[0,0,0,0],
[0,4,5,0],
[0,3,1,0]
]
```

Time: `O(N * M)` where `N` is the height of the matrix and `M` is the width of the matrix

Space: `O(N + M)` `N + M` represents the total number of rows and columns

#### Marking Beginnings of Rows and Columns

Same approach as before but with using no extra space. If we can mark the rows and columns themselves to keep track of which ones to mark with `0` then we can solve this using constant space. The most intuitive way to do this is to mark the first cell of the columns and rows we want to change to zeros. Once we go back around we will change all the cells who's row or columns is marked with `0`.

If order to work correctly we need to find different way to mark the 2 outer rows and columns. Since we'll be using top most row and the left most column as a marker for all of the inner cells we'll need an different marker to mark the row and column.

For example:

```
[
[1,0,2,0],
[3,4,5,2],
[1,3,1,5]
]
```

Here `[0][1]` would mark the first row to be changed to zeros. We can't change the beginning of the first row `[0][0]` since that would also mark the first column. We can instead have a flag that indicates if the first row or columns are marked.

Time: `O(N * M)` where `N` is the height of the matrix and `M` is the width of the matrix

Space: `O(1)`

- [JavaScript](./set-matrix-zeroes.js)
- [TypeScript](./set-matrix-zeroes.ts)
- [Java](./set-matrix-zeroes.java)
- [Go](./set-matrix-zeroes.go)

</details>
