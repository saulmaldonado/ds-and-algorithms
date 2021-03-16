/**
 * @param {character[][]} matrix
 * @return {number}
 */

function maximalRectangle(matrix) {
  if (matrix === null || matrix.length === 0 || matrix[0].length === 0) {
    return 0;
  }

  const h = matrix.length;
  const l = matrix[0].length;
  const heights = new Array(l).fill(0);

  let max = 0;

  for (let i = 0; i < h; i++) {
    const stack = [];
    for (let j = 0; j <= l; j++) {
      let height = 0;

      if (j < l) {
        if (matrix[i][j] === '1') {
          heights[j]++;
        } else {
          heights[j] = 0;
        }
        height = heights[j];
      }

      if (stack.length === 0 || height >= heights[stack[stack.length - 1]]) {
        stack.push(j);
      } else {
        while (stack.length !== 0 && height < heights[stack[stack.length - 1]]) {
          const mid = stack.pop();

          const len = stack.length === 0 ? j : j - stack[stack.length - 1] - 1;
          max = Math.max(max, heights[mid] * len);
        }
        stack.push(j);
      }
    }
  }
  return max;
}
