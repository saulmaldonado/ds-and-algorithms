function canJump(nums: number[]): boolean {
  let n: number = nums.length;
  let jump: number = 0;

  for (let i = 0; i < n - 1; i++) {
    jump = Math.max(jump - 1, nums[i]);

    if (jump === 0) {
      return false;
    }
  }
  return true;
}
