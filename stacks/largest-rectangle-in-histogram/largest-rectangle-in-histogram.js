/**
 * @param {number[]} heights
 * @return {number}
 */
function largestRectangleArea(heights) {
  const n = heights.length;

  const stack = [];

  let max = 0;

  for (let i = 0; i <= n; i++) {
    const height = i === n ? 0 : heights[i];

    if (stack.length == 0 || height >= heights[stack[stack.length - 1]]) {
      stack.push(i);
    } else {
      const mid = stack.pop();

      const len = stack.length === 0 ? i : i - stack[stack.length - 1] - 1;
      max = Math.max(max, heights[mid] * len);

      i--;
    }
  }
  return max;
}
