/**
 * @param {number[]} height
 * @return {number}
 */
function maxArea(height) {
  let i = 0;
  let j = height.length - 1;
  let max = 0;

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
