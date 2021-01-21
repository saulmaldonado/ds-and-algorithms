function mostCompetitive(nums: number[], k: number): number[] {
  const stack: number[] = [];

  for (let i = 0; i < nums.length; i++) {
    while (
      stack.length &&
      stack[stack.length - 1] > nums[i] &&
      k < stack.length + nums.length - i
    ) {
      stack.pop();
    }
    if (stack.length < k) {
      stack.push(nums[i]);
    }
  }

  const arr: number[] = new Array(k);

  for (let i = k - 1; i >= 0; i--) {
    arr[i] = stack.pop()!;
  }

  return arr;
}
