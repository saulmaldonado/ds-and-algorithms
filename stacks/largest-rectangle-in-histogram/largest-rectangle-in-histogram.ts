function largestRectangleArea(heights: number[]): number {
  const n: number = heights.length;

  const stack: number[] = [];

  let max: number = 0;

  for (let i = 0; i <= n; i++) {
    const height: number = i === n ? 0 : heights[i];

    if (stack.length == 0 || height >= heights[stack[stack.length - 1]]) {
      stack.push(i);
    } else {
      const mid: number = stack.pop()!;

      const len = stack.length === 0 ? i : i - stack[stack.length - 1] - 1;
      max = Math.max(max, heights[mid] * len);

      i--;
    }
  }
  return max;
}
