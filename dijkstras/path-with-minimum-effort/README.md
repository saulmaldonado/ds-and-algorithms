# Path With Minimum Effort

## Difficulty

![Medium](https://img.shields.io/badge/medium-ef6c00?style=for-the-badge&logoColor=white)

## Problem:

You are a hiker preparing for an upcoming hike. You are given heights, a 2D array of size rows x columns, where heights[row][col] represents the height of cell (row, col). You are situated in the top-left cell, (0, 0), and you hope to travel to the bottom-right cell, (rows-1, columns-1) (i.e., 0-indexed). You can move up, down, left, or right, and you wish to find a route that requires the minimum effort.

A route's effort is the maximum absolute difference in heights between two consecutive cells of the route.

Return the minimum effort required to travel from the top-left cell to the bottom-right cell.

### Example 1:

![Example 1](./images/example-1.png)

```
Input: heights = [[1,2,2],[3,8,2],[5,3,5]]
Output: 2
Explanation: The route of [1,3,5,3,5] has a maximum absolute difference of 2 in consecutive cells.
This is better than the route of [1,2,2,2,5], where the maximum absolute difference is 3.
```

### Example 2:

![Example 2](./images/example-2.png)

```
Input: heights = [[1,2,3],[3,8,4],[5,3,5]]
Output: 1
Explanation: The route of [1,2,3,4,5] has a maximum absolute difference of 1 in consecutive cells, which is better than route [1,3,5,3,5].
```

### Example 3:

![Example 3](./images/example-3.png)

```
Input: heights = [[1,2,1,1,1],[1,2,1,2,1],[1,2,1,2,1],[1,2,1,2,1],[1,1,1,2,1]]
Output: 0
Explanation: This route does not require any effort.
```

### Constraints

`rows == heights.length`

`columns == heights[i].length`

`1 <= rows, columns <= 100`

`1 <= heights[i][j] <= 106`

<details>
  <summary>Solutions (Click to expand)</summary>

### Explanation

#### Modified Dijkstra's

The `heights` grid most resembles an undirected weighted graph:

1. Any cell be be visited from any of its neighboring cells
2. Cells are connected by an `effort` weight that is determined by a the difference in cell values

If our goal is to traverse to the end of the grid using the least weighted path we can use Dijkstra's algorithm. The only modification we need to make is instead of recording the total `effort` needed to reach a cell, we only need record the max `effort` encountered to reach that cell.

**Structure:**

The max `efforts` for each cell will be recorded in a grid of the same size, all cells will be initialized to `MAX_INT`

Paths to different will be stored as a custom class `Cell`, that will contain the `i` and `j` indices of the cell to travel to in `heights` and the `effort` needed to travel to that cell

A PriorityQueue will contain and sort `Cell`s. `Cell`s will be sorted depending on their `effort` value.

A boolean gird of the same size of `heights` will record visited cells.

`efforts[0][0]` will be initialized to `0`

A `Cell` of `i = 0` `j = 0` and `effort = 0` will be added to the queue

**Procedure:**

Polled the next `Cell` from the queue. The next cell will always be the next we know we can travel to that required the least effort.

Check if the cell is visited using `visited[Cell.i][Cell.j]`, if it is, poll the next `Cell` from the queue

Change `visited[Cell.i][Cell.j]` to `true`

Get the values of all the current cell's neighbors

Find the difference between the current cell and the neighboring cell

find the `max` between `efforts[Cell.i][Cell.j]` the difference. This is the same as comparing the effort to travel to the neighboring cell and the effort need to travel **up to** the current cell. The max will be taken as the minimum effort to travel to the neighboring cell

if the max of `efforts[Cell.i][Cell.j]` and the difference is less than the recorded `effort` for the neighboring cell, the neighboring cell `effort` will be updated to the new smaller value and the path to the neighboring cell will be added to the queue

This will continue until we reach the end of the heights `height[h - 1][w - 1]` where `h` is `heights.length` and `w` is `heights[0].length`

`effort[h - 1][w - 1]` will be returned as the minimum effort path to get to the end of the grid

- [JavaScript](./path-with-minimum-effort.js)
- [TypeScript](./path-with-minimum-effort.ts)
- [Java](./path-with-minimum-effort.java)
- [Go](./path-with-minimum-effort.go)
</details>
