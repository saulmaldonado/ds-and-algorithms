/**
 * @param {number[]} height
 * @return {number}
 */
function trap(height) {
  const dp = new Array(height.length).fill(0);
  let ans = 0;

  let max1 = 0;
  for (let i = 0; i < height.length; i++) {
    max1 = Math.max(max1, height[i]);
    dp[i] = max1;
  }

  let max2 = 0;
  for (let i = height.length - 1; i >= 0; i--) {
    max2 = Math.max(max2, height[i]);
    dp[i] = Math.min(dp[i], max2);

    const diff = dp[i] > height[i] ? dp[i] - height[i] : 0;

    ans += diff;
  }
  return ans;
}

function trap2(height) {
  if (height.length < 3) {
    return 0;
  }

  let i = 0;
  let j = height.length - 1;

  let iMax = 0;
  let jMax = 0;

  let ans = 0;

  while (i < j) {
    if (height[i] < height[j]) {
      if (height[i] > iMax) {
        iMax = height[i];
      } else {
        let diff = iMax > height[i] ? iMax - height[i] : 0;
        ans += diff;
      }
      i++;
    } else {
      if (height[j] > jMax) {
        jMax = height[j];
      } else {
        let diff = jMax > height[j] ? jMax - height[j] : 0;
        ans += diff;
      }
      j--;
    }
  }
  return ans;
}
