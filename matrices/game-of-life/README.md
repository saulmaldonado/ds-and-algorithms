# Game Of Life

## Difficulty

![Medium](https://img.shields.io/badge/medium-ef6c00?style=for-the-badge&logoColor=white)

## Problem:

According to Wikipedia's article: "The Game of Life, also known simply as Life, is a cellular automaton devised by the British mathematician John Horton Conway in 1970."

The board is made up of an m x n grid of cells, where each cell has an initial state: live (represented by a 1) or dead (represented by a 0). Each cell interacts with its eight neighbors (horizontal, vertical, diagonal) using the following four rules (taken from the above Wikipedia article):

Any live cell with fewer than two live neighbors dies as if caused by under-population.
Any live cell with two or three live neighbors lives on to the next generation.
Any live cell with more than three live neighbors dies, as if by over-population.
Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.
The next state is created by applying the above rules simultaneously to every cell in the current state, where births and deaths occur simultaneously. Given the current state of the m x n grid board, return the next state.

### Example 1:

```
Input: board = [[0,1,0],[0,0,1],[1,1,1],[0,0,0]]
Output: [[0,0,0],[1,0,1],[0,1,1],[0,1,0]]
```

### Example 2:

```
Input: board = [[1,1],[1,0]]
Output: [[1,1],[1,1]]
```

### Constraints

`m == board.length`

`n == board[i].length`

`1 <= m, n <= 25`

`board[i][j] is 0 or 1.`

<details>
  <summary>Solutions (Click to expand)</summary>

First we will create a empty grid of size `m` x `n`. Here we will store the next states of each cell and copy over the values once we are done iterating through the entire gird. We are doing this to prevent the new state of one cell to change affect the next state of another cell in the grid

We will then iterate over the grid and check its surrounding cells (as long as they are within bounds of the grid) and add together the count of all live cells and update the corresponding cell in the grid copy according to the rule

We will then copy over the values from our copy to the grid

- [JavaScript](./game-of-life.js)
- [TypeScript](./game-of-life.ts)
- [Java](./game-of-life.java)
- [Go](./game-of-life.go)
</details>
