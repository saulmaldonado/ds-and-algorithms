# Valid Sudoku

## Difficulty

![Medium](https://img.shields.io/badge/medium-ef6c00?style=for-the-badge&logoColor=white)

## Problem:

Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

Each row must contain the digits 1-9 without repetition.
Each column must contain the digits 1-9 without repetition.
Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
Note:

- A Sudoku board (partially filled) could be valid but is not necessarily solvable.
- Only the filled cells need to be validated according to the mentioned rules.

### Example 1:

![Example 1](./images/example-1.png)

```
Input: board =
[["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]
Output: true
```

### Example 2:

```
Input: board =
[["8","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]
Output: false
Explanation: Same as Example 1, except with the 5 in the top left corner being modified to 8. Since there are two 8's in the top left 3x3 sub-box, it is invalid.
```

### Constraints

`board.length == 9`

`board[i].length == 9`

`board[i][j] is a digit or '.'.`

<details>
  <summary>Solutions (Click to expand)</summary>

### Explanation

#### Row, Column, and Local Grid Traversals

We'll want to validate every cell in the grid. Doing so will require up to traverse the current cells row, column and local 3 x 3 grid and to check for any duplicate of the current cell.

##### Row

Where `y` is the column of the current cell and `x` is the row of the current cell

```
    for (int i = 0; i < board.length; i++) {
      if(i == y) {
        continue;
      }
      if(board[i][x] == board[y][x]) {
        return false;
      }
    }
```

##### Column

Where `y` is the column of the current cell and `x` is the row of the current cell

```
    for (int i = 0; i < board[0].length; i++) {
      if(x == i) {
        continue;
      }

      if(board[y][i] == board[y][x]) {
        return false;
      }
    }
```

##### Grid

Where `y` is the column of the current cell and `x` is the row of the current cell

Here we'll want to local the top left of the current 3 x 3 grid the current cell is a part of. Since rows and columns are all divided into 3s, we can divide the `x` and `y` of the current cell and multiply by three to find the top left cell of the local grid the cell is a part of

```
    int a = (y / 3) * 3;
    int b = (x / 3) * 3;

    for(int i = a; i < a + 3; i++) {
      for(int j = b; j < b + 3; j++) {
        if(i == y && j == x) {
          continue;
        }
        if(board[i][j] == board[y][x]){
          return false;
        }
      }
    }
```

Time: `O(27 * 81)` 27 operations for every filled cell. Worst case all cells are filled and valid.

Space: `O(1)`

- [JavaScript](./title.js)
- [TypeScript](./title.ts)
- [Java](./title.java)
- [Go](./title.go)
</details>
