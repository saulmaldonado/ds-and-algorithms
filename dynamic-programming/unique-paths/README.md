# Unique Paths

## Difficulty

![Medium](https://img.shields.io/badge/medium-ef6c00?style=for-the-badge&logoColor=white)

## Problem:

A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).

The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).

How many possible unique paths are there?

### Example 1:

![Example 1](./images/robot_maze.png)

```
Input: m = 3, n = 7
Output: 28
```

### Example 2:

```
Input: m = 3, n = 2
Output: 3
Explanation:
From the top-left corner, there are a total of 3 ways to reach the bottom-right corner:
1. Right -> Down -> Down
2. Down -> Down -> Right
3. Down -> Right -> Down
```

### Example 3:

```
Input: m = 3, n = 3
Output: 6
```

### Example 4:

```
Input: m = 3, n = 3
Output: 6
```

### Constraints

`1 <= m, n <= 100`

`It's guaranteed that the answer will be less than or equal to 2 * 109.`

<details>
  <summary>Solutions (Click to expand)</summary>

### Explanation

Finding all possible complete paths that robot traverse and counting the number of times the robot reaches the bottom left is solution, but one that takes an exceedingly amount of operations. Instead of repeatedly calculating the number of possible paths from the beginning to every cell, we can use the number of possible path used to get the the neighboring cells (top and left neighboring) and use that to calculate the number of paths to get to any cell.

Of course, the involves using extra space. A 2D array that will represent the number possible paths to get to every cell the robot can travel to.

```
|r| | |
| | | |
| | |e|

m = 3
n = 3
[
  [1, 0, 0]
  [0, 0, 0]
  [0, 0, 0]
]
```

Firstly we know there is only one path to get to the top left cell, placing the robot there.

For every other cell we can say that there are to possible moves a robot can make to reach that cell. either a move down from the top neighboring cell or a move right from the left neighboring cell. That means we can say that however many possible paths there are to reach the top neighboring plus however many possible paths there are the reach the left neighboring cell is the total possible paths we can make to reach our current cell. This means we have to start traversing the grid from top left, row by row left to right, calculating the possible paths for every cell along the way.

```
m = 3
n = 3
[
  [1, 1, 0]
  [0, 0, 0]
  [0, 0, 0]
]

// cell 0, 1 is the sum of left (0,0) plus top (not within bounds)

...


[
[1, 1, 1]
[1, 0, 0]
[0, 0, 0]
]
// cell 1, 1 is the sum of top (0, 1) and left (1, 0)

[
[1, 1, 1]
[1, 2, 0]
[0, 0, 0]
]
// cell 1, 2 is the sum of top (0, 2) and left (1, 1)

[
[1, 1, 1]
[1, 2, 3]
[0, 0, 0]
]
// cell 2, 0 is the sum of top (1, 0) and left (not within bounds)

[
[1, 1, 1]
[1, 2, 3]
[1, 0, 0]
]
// cell 2, 1 is the sum of top (1, 1) and left (2, 0)

[
[1, 1, 1]
[1, 2, 3]
[1, 3, 0]
]
// cell 2, 2 is the sum of top (1, 2) and left (2, 1)

[
[1, 1, 1]
[1, 2, 3]
[1, 3, 6]
]
// total number of paths to bottom-right is (2,2)

```

By the end of traversing the grid we will have the number of possible paths to the bottom-right at `[m - 1][n - 1]`

- [JavaScript](./unique-paths.js)
- [TypeScript](./unique-paths.ts)
- [Java](./unique-paths.java)
- [Go](./unique-paths.go)
</details>
