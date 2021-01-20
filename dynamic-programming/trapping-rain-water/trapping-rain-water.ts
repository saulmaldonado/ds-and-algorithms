function trap(height: number[]): number {
  const dp: number[] = new Array(height.length).fill(0);
  let ans: number = 0;

  let max1: number = 0;
  for (let i = 0; i < height.length; i++) {
    max1 = Math.max(max1, height[i]);
    dp[i] = max1;
  }

  let max2: number = 0;
  for (let i = height.length - 1; i >= 0; i--) {
    max2 = Math.max(max2, height[i]);
    dp[i] = Math.min(dp[i], max2);

    const diff = dp[i] > height[i] ? dp[i] - height[i] : 0;

    ans += diff;
  }
  return ans;
}
