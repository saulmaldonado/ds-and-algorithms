# Cherry Pickup II

## Difficulty

![Hard](https://img.shields.io/badge/hard-d9534f?style=for-the-badge&logoColor=white)

## Problem:

Given a rows x cols matrix grid representing a field of cherries. Each cell in grid represents the number of cherries that you can collect.

You have two robots that can collect cherries for you, Robot #1 is located at the top-left corner (0,0) , and Robot #2 is located at the top-right corner (0, cols-1) of the grid.

Return the maximum number of cherries collection using both robots by following the rules below:

- From a cell (i,j), robots can move to cell (i+1, j-1) , (i+1, j) or (i+1, j+1).
- When any robot is passing through a cell, It picks it up all cherries, and the cell becomes an empty cell (0).
- When both robots stay on the same cell, only one of them takes the cherries.
- Both robots cannot move outside of the grid at any moment.
- Both robots should reach the bottom row in the grid.

<!-- any examples -->

### Example 1:

![Example 1](./images/image1.png)

```
Input: grid = [[3,1,1],[2,5,1],[1,5,5],[2,1,1]]
Output: 24
Explanation: Path of robot #1 and #2 are described in color green and blue respectively.
Cherries taken by Robot #1, (3 + 2 + 5 + 2) = 12.
Cherries taken by Robot #2, (1 + 5 + 5 + 1) = 12.
Total of cherries: 12 + 12 = 24.
```

### Example 2:

![Example 2](./images/image2.png)

```
Input: grid = [[1,0,0,0,0,0,1],[2,0,0,0,0,3,0],[2,0,9,0,0,0,0],[0,3,0,5,4,0,0],[1,0,2,3,0,0,6]]
Output: 28
Explanation: Path of robot #1 and #2 are described in color green and blue respectively.
Cherries taken by Robot #1, (1 + 9 + 5 + 2) = 17.
Cherries taken by Robot #2, (1 + 3 + 4 + 3) = 11.
Total of cherries: 17 + 11 = 28.
```

### Example 4:

```
Input: grid = [[1,0,0,3],[0,0,0,3],[0,0,3,3],[9,0,3,3]]
Output: 22
```

### Example 5:

```
Input: grid = [[1,1],[1,1]]
Output: 4
```

### Constraints

`rows == grid.length`

`cols == grid[i].length`

`2 <= rows, cols <= 70`

`0 <= grid[i][j] <= 100 `

<details>
  <summary>Solutions (Click to expand)</summary>

### Explanation

<!-- solution explanation -->

Since each robot can only one move down grid's height `h` each time it collects cherries then the problem be simplified as finding the best possible movements the robots can make at each level.

The possible movements of each robot are straight down `i` down-left `i-1` and down-right `i+1`. There are a possible 9 different combinations of movements the robots can make for each level from each movement. This amounts to 9^h possible movement that can be made. We can use dfs function that recursively traverses the each one of these possible moves to until the bottom, calculates the cherries collected for each move, takes the max out of all three, and adds it to each move of the the upper level to repeat the process.

Since that are a total of 9^h operations need to completely traverse the grid, we need a way to reduce the amount of possible recalculations and recursive that happen when traversing previously familiar paths. In order to reduce the total number of operations we can use memoization to save max number of cherries that can collected from the bottom to the cell (bottom up dp). This will short-circuit recursive calls and dramatically reduce the number of operations need to traverse the entire grid. Since the robots can only move down 1 cell for each movement we can use a 3d array with of size `h * i * j`

<!-- relative links to solution files. {title} should be replaced with the name of the problem in `kebab-case` -->

- [JavaScript](./cherry-pickup-ii.js)
- [TypeScript](./cherry-pickup-ii.ts)
- [Java](./cherry-pickup-ii.java)
- [Go](./cherry-pickup-ii.go)
</details>
