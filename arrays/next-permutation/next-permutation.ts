function nextPermutation(nums: number[]): void {
  const n: number = nums.length;
  let i: number = n - 2;

  while (i >= 0 && nums[i + 1] <= nums[i]) {
    i--;
  }

  if (i < 0) {
    nums.sort((a, b) => a - b);
  } else {
    let j: number = nums.length - 1;

    while (j >= 0 && nums[j] <= nums[i]) {
      j--;
    }

    let temp: number = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;

    const right: number[] = nums.slice(i + 1, n);
    const left: number[] = nums.slice(0, i + 1);

    right.sort((a, b) => a - b);
    const res: number[] = [...left, ...right];

    nums.forEach((_, i) => {
      nums[i] = res[i];
    });
  }
}
