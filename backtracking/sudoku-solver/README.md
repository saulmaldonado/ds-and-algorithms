# Sudoku Solver

## Difficulty

![Hard](https://img.shields.io/badge/hard-d9534f?style=for-the-badge&logoColor=white)

## Problem:

Write a program to solve a Sudoku puzzle by filling the empty cells.

A sudoku solution must satisfy all of the following rules:

1. Each of the digits 1-9 must occur exactly once in each row.
2. Each of the digits 1-9 must occur exactly once in each column.
3. Each of the digits 1-9 must occur exactly once in each of the 9 3x3 sub-boxes of the grid. The '.' character indicates empty cells
<!-- any examples -->

### Example 1:

![Example 1](./images/image1.png)

```
Input: board = [["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]]

Output: [["5","3","4","6","7","8","9","1","2"],["6","7","2","1","9","5","3","4","8"],["1","9","8","3","4","2","5","6","7"],["8","5","9","7","6","1","4","2","3"],["4","2","6","8","5","3","7","9","1"],["7","1","3","9","2","4","8","5","6"],["9","6","1","5","3","7","2","8","4"],["2","8","7","4","1","9","6","3","5"],["3","4","5","2","8","6","1","7","9"]]
Explanation: The input board is shown above and the only valid solution is shown below:

```

![Example 1 Solved](./images/image2.png)

### Constraints

`board.length == 9`

`board[i].length == 9`

`board[i][j] is a digit or '.'.`

`It is guaranteed that the input board has only one solution.`

<details>
  <summary>Solutions (Click to expand)</summary>

### Explanation

The naive solution is too use brute force to build all possible sudoku board and check them their validity. This can take up to 9^9^9 (9 ^ 81) builds and checks of the sudoku board.

We can use backtracking to build the board from top left to bottom, adding trying numbers for every cell checking the board, and going on the the next cell only if the current one creates a valid board. If the a adding a number invalidates the board we would only need to backtrack one cell and try other numbers since we know the initial part of the board is already in a valid state. This prevents us from having to rebuild the entire board an exponential number of times.

We will traverse the board using `i` for rows and `j` for columns. We will call a `solve` function that will recursively call the next cells until we reach the bottom right cell. Each call to the `solve` will check the current cells contents. If it is a number the cell does not need to be changed, the `solve` will be called for the next cell `j + 1`. If the cell contains `'.'` we will try every number from `1 - 9` and check validate the board with the current cell filled with the number. This will check for duplicates in the current row, current column and current sub grid. If the board passes the `valid` function the board will be changed with new number and the next cell will be called with the `solve` function. If at any point we need to change the cell due to some conflict with a future cell, we will only need to backtrack to the cell and repeat the process until the next valid number is found and repeat the process solving and validating processes for the next cells.

- [JavaScript](./sudoku-solver.js)
- [TypeScript](./sudoku-solver.ts)
- [Java](./sudoku-solver.java)
- [Go](./sudoku-solver.go)
</details>
