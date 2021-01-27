class Cell {
  constructor(i, j, effort) {
    this.i = i;
    this.j = j;
    this.effort = effort;
  }
}

/**
 * @param {number[][]} heights
 * @return {number}
 */
function minimumEffortPath(heights) {
  const h = heights.length;
  const w = heights[0].length;

  const directions = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];

  const efforts = new Array(h).fill(null).map(() => new Array(w).fill(Number.MAX_SAFE_INTEGER));
  const queue = new MinPriorityQueue({ priority: (bid) => bid.effort });

  const visited = new Array(h).fill(null).map(() => new Array(w).fill(false));

  let i = 0;
  let j = 0;

  efforts[i][j] = 0;

  queue.enqueue(new Cell(0, 0, 0));

  while (!queue.isEmpty()) {
    const next = queue.dequeue().element;
    const i = next.i;
    const j = next.j;

    if (visited[i][j]) {
      continue;
    }

    if (i == h - 1 && j == w - 1) {
      return next.effort;
    }

    visited[i][j] = true;

    let current = heights[i][j];
    let currentEffort = efforts[i][j];

    for (let dir of directions) {
      let newi = i + dir[0];
      let newj = j + dir[1];

      if (newi < 0 || newj < 0 || newi == h || newj == w) {
        continue;
      }

      let diff = Math.abs(current - heights[newi][newj]);

      let maxEffort = Math.max(diff, currentEffort);

      if (maxEffort < efforts[newi][newj]) {
        efforts[newi][newj] = maxEffort;
        queue.enqueue(new Cell(newi, newj, maxEffort));
      }
    }
  }

  return efforts[h - 1][w - 1];
}
