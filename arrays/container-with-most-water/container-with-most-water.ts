function maxArea(height: number[]): number {
  let i: number = 0;
  let j: number = height.length - 1;
  let max: number = 0;

  while (i < j) {
    if (height[i] < height[j]) {
      max = Math.max((j - i) * height[i], max);
      i++;
    } else {
      max = Math.max((j - i) * height[j], max);
      j--;
    }
  }
  return max;
}
